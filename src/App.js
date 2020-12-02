import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

function App() {
  return (
    <>
    <Counter initialCount={7} />
    <CounterHooks initialCount={0} />
    </>
  )
}

export default App;
