import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

function CheckboxesPage() {
  const router = useRouter();
  const [checkboxes, setCheckboxes] = useState<boolean[]>([]);

  const { number } = router.query;

  if (typeof number !== "string") {
    return <div>Valor inválido</div>;
  }

  const handleCheckboxChange = (index: number) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };

  const renderCheckboxes = () => {
    const checkboxArray = new Array(parseInt(number)).fill(false);
    setCheckboxes(checkboxArray);
  };

  return (
    <div>
      <h1>Checkboxes:</h1>
      <button onClick={renderCheckboxes}>Abrir Exercícios</button>
      <ul>
        {checkboxes.map((isChecked, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleCheckboxChange(index)}
            />
            {index + 1}
          </li>
        ))}
      </ul>
      <Link href="/NumberInputPage">
        Voltar
      </Link>
    </div>
  );
}

export default CheckboxesPage;