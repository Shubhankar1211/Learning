/* 

unprefixed one appers on all sccreen and prefixed one will comes at a point where you defiend and above it





function App() {
  return (
    <>
      <div className='flex justify-between grid-cols-15'>
        <div className='bg-blue-300 col-span-15 sm:col-span-5'>Diwakar Chauhan</div>
        <div className='bg-red-300 col-span-15 sm:col-span-5'>Diwakar Chauhan</div>
        <div className='bg-yellow-300 col-span-15 sm:col-span-3'>Diwakar Chauhan</div>
        <div className='bg-green-300 col-span-15 sm:col-span-2'>Diwakar Chauhan</div>
      </div>
    </>
  )
}

logic of this is simple normally it is whole span 15 but when it beggir than the sm or critical point it distribute in diffrent acorrding to grid


// for consitional redering of classses use this lib 
clsx ,cx
*/