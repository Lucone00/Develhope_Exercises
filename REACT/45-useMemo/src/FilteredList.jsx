import { useMemo } from "react";
export default function FilteredList() {
  let users = [
    {
      id: 1,
      name: "Elon Muschio",
      age: 46,
    },

    {
      id: 2,
      name: "Michele Bisanzio",
      age: 40,
    },

    {
      id: 3,
      name: "Giovanni Muchacha",
      age: 26,
    },

    {
      id: 4,
      name: "Steven Spielberg",
      age: 70,
    },

    {
      id: 5,
      name: "Albus Silente",
      age: 115,
    },

    {
      id: 6,
      name: "Andrea",
      age: 17.5,
    },
  ];

  const memoizeAdults = useMemo(() => users.filter((e) => e.age > 18), [users]);

  return (
    <>
      {memoizeAdults.map((arr) => (
        <div>
          <ul>
            <li>
              <h3>{arr.name}</h3>
              <div>
                id: {arr.id} - age: {arr.age}
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
