//
import { useEffect } from 'react';
import { useRef } from 'react'

export default function useOutsideClick(callback: () => void, count: number) {
  const elementRef = useRef(count > 1 ? [] : null)

  if (count > 1) {
    for (let i = 0; i < count; i++) {
      elementRef.current[i] = useRef(null);
    }
  }

  const handleClick = (e) => {

    if (elementRef.current)
      if (Array.isArray(elementRef.current)) {
        const countRef = elementRef.current.length;
        let contains = Array(countRef).fill(false);

        for (let i = 0; i < countRef; i++) {
          const ref = elementRef.current[i];

          if (ref.current && !ref.current.contains(e.target)) {
            contains[i] = true;
          }
        }

        if (!contains.every(field => field === false))
          callback();
      }
      else if (!elementRef.current.contains(e.target)) {
        callback();
      }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [elementRef, callback]);

  return elementRef;
};