"use client"
import React, { ReactChildren, useState } from 'react';
import Loading from 'cp/loading'
import { v4 as uuidv4 } from 'uuid';

function create<Type>(c: { new(): Type }): Type {
  return new c();
}

enum errorType {
  required = "required",
  minlength = "minlength",
}

interface Props<T extends Canbenew<T>> {
  children: React.ReactNode,
  onService: (value: T) => void,
  textBtn?: string,
}

export default function Form<T extends canbenew<T>>({ children, textBtn, onService }: Props<T>) {
  const [loading, setLoading] = useState(false);

  function validateError(children: React.ReactNode, isError: boolean): boolean {

    function searchSpan(elementFather: HTMLInputElement | HTMLSelectElement) {
      for (const child_1 of children) {
        if (child_1 instanceof HTMLSpanElement) {
          if (elementFather.id === child_1.dataset.for) {
            if (elementFather.value === "" && child_1?.dataset.required) {
              showSpan(child_1, errorType.required)
              isError = true;
              break;
            }

            if (child_1?.minlength ?? elementFather.value.length < parseInt(child_1?.dataset.minlength.split(",")[0])) {
              showSpan(child_1, errorType.minlength)
              isError = true;
              break;
            }
          }
        }
      }
    }

    for (const child of children) {
      if (child instanceof HTMLInputElement) {
        searchSpan(child);
      }

      if (child instanceof HTMLSelectElement) {
        searchSpan(child);
      }

      if (child?.children) {
        isError = validateError(child?.children, isError)
      }
    }

    //--------------------------------------------------

    if (!isError)
      for (const child_1 of children) {
        if (child_1 instanceof HTMLSpanElement) {
          const span = document.querySelector(`.${child_1.classList[0].trim()}`)
          span.style.visibility = 'hidden';
        }
      }

    return isError;
  }

  async function handlerSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true)

    const formData = new FormData(event.target);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    let isError: boolean = false;
    isError = validateError(event.target.children, isError);

    if (!isError)
      await onService(formDataObject as T);

    setLoading(false)
  }

  return (
    <form onSubmit={handlerSubmit}>
      {loading && <Loading id='form-load-svg' />}
      {children}
      <button>{textBtn ?? "Send"}</button>
    </form>
  );
}

function showSpan(child: HTMLSpanElement, _errorType: errorType) {
  const span = document.querySelector(`.${child.classList[0].trim()}`)
  console.log(span)
  if (_errorType == errorType.required)
    span.innerHTML = child.dataset.required;
  if (_errorType == errorType.minlength)
    span.innerHTML = child.dataset.minlength.split(",")[1];

  span.style.visibility = "visible";
}

type SpanProps = {
  id: string,
  class: string,
  htmlFor: string,
  select?: string,
  required?: string,
  minlength?: string,
}

export function Span({ id, htmlFor, select, required, minlength, className = "" }: SpanProps) {
  const useid = uuidv4();

  const Style = {
    color: "red",
    visibility: 'hidden'
  }

  return (<span
    id={id}
    className={`class_${useid.trim()} ${className}`}
    style={Style}
    data-select={select}
    data-for={htmlFor}
    data-required={required}
    data-minlength={minlength}
  ></span >)
}

function removeDoubleDot(id: string): string {
  return id.replace(':', '').replace(':', '');
}