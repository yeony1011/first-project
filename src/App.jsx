import Child from "./Child"
import { ClassComp, FunctionComp, ArrowFunctionComp } from "./Components"

function Hello() {
  return <h1>Hello World</h1>
}

function App() {
  
  return (
    <>
      <Hello />
      <h2>React</h2>
      <Child />
      <ClassComp />
      <FunctionComp />
      <ArrowFunctionComp />
    </>
  )
}

export default App