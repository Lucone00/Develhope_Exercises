import React, { useRef, useEffect } from "react";

function CarDetails({ initialData }) {
  const carDetails = useRef(null);
  const model = useRef(null);
  const year = useRef(null);
  const color = useRef(null);

  useEffect(() => {
    carDetails.current.reset();
  }, [initialData]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log([model.current.value, year.current.value, color.current.value]);
  };

  return (
    <form onSubmit={handleClick} ref={carDetails}>
      <h1>CarDetails</h1>
      <input type="text" ref={model} defaultValue={initialData.model} />
      <input type="text" ref={year} defaultValue={initialData.year} />
      <input type="text" ref={color} defaultValue={initialData.color} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CarDetails;
