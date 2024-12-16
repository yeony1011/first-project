import "./App.css"
import Child from "./Child"
import { ClassComp, FunctionComp, ArrowFunctionComp } from "./Components"

const element1 = <h2>Hello, World!</h2>
const element2 = (
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
)

function ElementExpressions(){
  return(
    <section>
      {element1}
      {element2}
    </section>
  )
}

const language = "JavaScript"

function Hello() {
  return <h1>Hello World</h1>
}

function BasicExpressions(){
  const name = "John";
  const age = 25;
  const isAdmin = true;

  return (
    <div>
      <p>Name : {name}</p>
      <p>Age next yera : {age + 1}</p>
      <p>{name + "'s Profile"}</p>
      <p>{`${name} is ${age} years old`}</p>
      <p>Admin status : {String(isAdmin)}</p>
    </div>
  );
}

function ObjectArrayExpressions(){
  const user = {
    name: "John",
    email: "QpUeh@example.com",
  };
  const colors = ["red", "green", "blue"];
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <p>User: {user.name} ({user.email})</p>
      <p>First color: {colors[0]}</p>
      <p>Color count: {colors.length}</p>

      <p>Doubleds: {
        numbers.map(n => n * 2).join(", ")
      }</p>

      <p>Evens: {
        numbers.filter(n => n % 2 === 0).join(", ")
      }</p>
    </div>
  );
}

function FounctionExpressions(){
  const getGreeting = (name) => `Hello, ${name}!`;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  }

  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + item.price, 0);
  }

  const items = [
    {id: 1, price: 10},
    {id: 2, price: 20}
  ];

  return (
    <div>
      <p>{getGreeting("John")}</p>
      <p>Today: {formatDate(new Date())}</p>
      <p>Total: ${calculateTotal(items)}</p>
      <p>Good {(() => {
        const hour = new Date().getHours();
        return hour < 12 ? "morning" : "afternoon";
      })}</p>
    </div>
  );
}

function App() {
  
  return (
    <>
      {/* JSX 주석 */}
      <Hello />
      <h2>React</h2>
      <Child />
      <ClassComp />
      <FunctionComp />
      <ArrowFunctionComp />

      {language}

      <BasicExpressions />
      <ObjectArrayExpressions />
      <FounctionExpressions />
      <ElementExpressions />
    </>
  )
}

export default App