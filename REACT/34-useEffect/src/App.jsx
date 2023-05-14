import Counter from "./Counter"

function App() {
  
  function handleCounterChange(count) {
    console.log(`Counter changed: ${count}`);
  }

  return (
    <div>
      <Counter onCounterChange={handleCounterChange} />
    </div>
  );
}

export default App
