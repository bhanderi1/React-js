
import './App.css'
import Navbar from './Navbar'
import Artical from './Artical'
import Table from './Table'
import Crad_1 from './Crad_1'
import Footer_part from './Footer_part'



function App() {
  return (
    <>
      <Navbar/>
      <Artical/>
      <div className='flex'>  
        <Table/>
        <Crad_1/>
      </div>
      <Footer_part/>
      <> </>
      <h1 className="text-3xl font-bold underline">
         Hello world!
      </h1>
    </>
  )
}

export default App
