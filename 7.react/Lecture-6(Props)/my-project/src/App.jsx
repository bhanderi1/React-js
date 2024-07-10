import './App.css'
// import Button1 from './Buttons/Button1'
import Crad from './Crad';
import CardImg1 from './assets/img-2.avif'
import CardImg2 from './assets/img-3.avif'
import CardImg3 from './assets/img.jpg';


  function App(){
    return(
      <>
      <div className='flex justify-center'>
      {/* <Button1/> */}
      <Crad name={"Ram Mandir History"} Img={CardImg1}/>
      <Crad name={"Ram Mandir"} Img={CardImg2}/>
      <Crad name={"Images"} Img={CardImg3}/>
  
      </div>
      </>
    )
    
   
  }


export default App
