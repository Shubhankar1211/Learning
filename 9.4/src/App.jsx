// this is  childer prop highly used as wrapper prop like if we have to put something in header and footer
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