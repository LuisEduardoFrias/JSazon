import ClientDtos from "dto/client_dtos"
import Link from "next/link";

export default function ClientCard({ data }: { data: ClientDtos }) {

  return (
    <div style={{ border: '2px solid red', borderRadius: '5px', height: '70px' }}>
      <Link href={`client/${data.key}`}>
        <div>
          <span>
            {data.name}
          </span>
          {data.alias &&
            <span>
              {` (${data.alias})`}
            </span>
          }
        </div>

        <div>
          <span>
            {'Deuda: '}
          </span>
          <span>
            {`$${data.totalDebt}`}
          </span>
        </div>
      </Link>
    </div>
  )
}