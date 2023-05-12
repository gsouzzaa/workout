import { useState } from "react";
import Link from "next/link";

function NumberInputPage() {
  const [number, setNumber] = useState<number>(0);

  return (
    <div>
      <h1>Número de Séries:</h1>
      <form>
        <input
          type="number"
          value={number}
          onChange={(event) => setNumber(parseInt(event.target.value))}
        />
      </form>
      <Link href={`/selected?number=${number}`}>
        Ir para página de checkboxes
      </Link>
    </div>
  );
}
export default NumberInputPage;