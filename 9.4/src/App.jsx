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

import { Component } from "react"

/*
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
  */

/*
// inline style
function App(){
  return <div style={{background : "blue"}}>
      hello 
  </div>
}

export default App
// reson for double braces is beacuse of  object 
*/



/*
// class based vs fucntional components 
// class components are classes that extends React.Components, while fucntional Components are simpler and can use hooks
import React, { Component } from "react";

class ClassCounter extends Component {
  state = { count: 0 }; // lowercase 'count'

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

*/


/*
// lifecycle events 
// in react lifecycle events (or life cycle methods ) refers to the specific points in the compontnt's life where you can execute code in resposnce to changes or action.
// these events help you manage tasks such as fetching, subscriptions and cleaning up resorces

import React, { Component } from "react";

class MyComponent extends Component {
  componentDidMount() {
    console.log("✅ Component Mounted");
  }

  componentDidUpdate() {
    console.log("🔁 Component Updated");
  }

  componentWillUnmount() {
    console.log("❌ Component Will Unmount");
  }

  render() {
    return <h2>Hello from MyComponent</h2>;
  }
}

export default MyComponent;


// lifecycle methods are divivde into three main phases
// mounting : when the component is beong inserted into the DOM
// updating : when  the component is beong re-rendering due to chnges in props or state.
// unmounting : when the components is bseing removed from the dom





*/

// error boundary 
// error boundaries are react componets that catch javascirpt errors in thier child component tree and display a fallback UI
/*
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
*/