// this is  childer prop highly used as wrapper prop like if we have to put something in header and footer
/*
import { Children } from "react"

function App() {
  return <div style={{ display: "flex" }}>
    <Card>
      <div style={{ backgroundColor: "red" }}>
        <h2>
          Card Title
        </h2>
        <p>
          This is some content inside the card
        </p>
      </div>
    </Card>
    <Card>
      <div style={{ backgroundColor: "blue" }}>
        <h2>
         Another Card Title
        </h2>
        <p>
          This is some content inside the card
        </p>
      </div>
    </Card>
  </div>
}

function Card({ children }) {
  return <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px', margin: '10px' }}>
    {children}
  </div>
}

export default App

// 
*/

// this is the concept of lists and keys we have to 
function App(){
  return <div>
      {[
        <Todo key={1} title={"Studing hard"} done={false}/>,
        <Todo key={2} title={"Complete react in 3 days" } done={false}/>
      ]}
  </div>
}

function Todo({title,done}){
  return <div>
    {title} - {done ? "done" : "notdone"}
  </div>
}
export default App



//When you're rendering a list of components (e.g., using .map()), React needs a way to identify which items have changed, been added, or removed between renders.

//✅ React uses key to:
//Track the identity of each item in the list

//Avoid re-rendering unchanged items

//Improve performance and avoid unexpected UI bugs




// this is how we use list to render array in rezct 
function TodoList() {
  const todos = [
    { id: 1, task: "Learn React" },
    { id: 2, task: "Build a Todo App" },
    { id: 3, task: "Deploy it" },
  ];

  // 👉 Prepare the JSX list before return
  const todoItems = todos.map(todo => (
    <li key={todo.id}>{todo.task}</li>
  ));

  return (
    <div>
      <h2>Todo List</h2>
      <ul>{todoItems}</ul>
    </div>
  );
}



