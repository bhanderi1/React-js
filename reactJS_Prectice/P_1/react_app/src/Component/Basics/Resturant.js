import React from 'react'
import './style.css'

const Resturant = () => {

  return (
    <>
      <div className='card-container'>
        <div className='card'>
                 <div className='card-body'>
                     <span className='card-number card-circle subtle'>1</span>
                     <span className='card=author subtle'>Breakfast</span>
                     <h2 className='card-title'>Maggi</h2>
                     <span className='card-description subtle'>
                      I Love maggi realy oo yues Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, perferendis tempora, fuga illo vel cupiditate fugit voluptatem consequatur doloremque nam aliquid incidunt quos excepturi dolorem tenetur expedita quod. Molestias, illum!
                     </span>
                     <div className='card-read'>Read</div>
                 </div>
                 <img src={image} alt="images" className='card-media' />
                 <span className='card-tag subtle'>Order Now</span>
        </div>
      </div>
    </>
  )
}

export default Resturant
