import Link from "next/link"

export default function Dieta () {
    return (
      <div>
        <h2>Dieta da semana</h2>
        <nav>
          <ul>
            <li>
              <Link href="/dieta-segunda" passHref>
                <div>Segunda</div>
              </Link>
            </li>
           
          </ul>
        </nav>
      </div>
    )
  }