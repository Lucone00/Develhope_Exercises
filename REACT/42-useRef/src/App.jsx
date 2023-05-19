import CarDetails from "./CarDetails";

function App() {
  const initialData = {
    model: "Fiat punto",
    year: "2001",
    color: "gray",
  };
  return <CarDetails initialData={initialData} />;
}

export default App;
