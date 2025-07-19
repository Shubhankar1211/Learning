import './App.css'

/*


function App() {
  return (
    <>
      <div className=' grid grid-cols-15'>
        <div className='bg-blue-300 col-span-15 sm:col-span-5 rounded-s-2xl'>Diwakar Chauhan</div>
        <div className='bg-red-300 col-span-15 sm:col-span-5 rounded-full'>Diwakar Chauhan</div>
        <div className='bg-yellow-300 col-span-15 sm:col-span-3'>Diwakar Chauhan</div>
        <div className='bg-green-300 col-span-15 sm:col-span-2'>Diwakar Chauhan</div>
      </div>
    </>
  )
}
  */

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


function App() {
  return (
    <div className='h-screen bg-blue-700'>
      <div className='text-green[#36c6c0]'>Wevinar.gg</div>
      <br />
      <br />
      <br />
      <div className='text-white'>Verify Your Age</div>
      <br />
      <br />
      <p className=' text-white'> Pleease confirm you birth year. this data will not be stored</p>
      <br />
      <input type="text" placeholder='Your Birth Year' className='bg-blue-[#19406a]'  />
      <br />
      <br />
      <button className='bg-gray-[#8094ad] text-white rounded-2xl'>Continue</button>
    </div>
  )
}
export default App
