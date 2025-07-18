import './App.css'


function App() {
  return (
    <>
      <div className='flex justify-between grid-cols-15'>
        <div className='bg-blue-300 col-span-2'>Diwakar Chauhan</div>
        <div className='bg-red-300 col-span-3'>Diwakar Chauhan</div>
        <div className='bg-yellow-300 col-span-2'>Diwakar Chauhan</div>
        <div className='bg-green-300 col-span-1'>Diwakar Chauhan</div>
        <div className='bg-violet-300 col-span-3'>Diwakar Chauhan</div>
        <div className='bg-gray-300 col-span-1'>Diwakar Chauhan</div>
        <div className='bg-orange-300 col-span-2'>Diwakar Chauhan</div>
        <div className='bg-pink-300 col-span-1'>Diwakar Chauhan</div>
      </div>
    </>
  )
}

/*
// funny game
function ColorToggleButton() {
  const [isRed, setIsRed] = useState(true); 

  const handleClick = () => {
    setIsRed(!isRed); 
  };

  const buttonStyle = {
    backgroundColor: isRed ? "red" : "blue",
    color: isRed ? "blue" : "red",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      Red
    </button>
  );
}
  */

export default App
