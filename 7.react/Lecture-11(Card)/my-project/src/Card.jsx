import React from 'react'
import { Product } from './Product'
import { useState } from 'react'

const Card = () => {
    const [index, setIndex] = useState(0)
    const firstIndex = 0
    const lastIndex = Product.length - 1

    const Next = () => {
        if (index < lastIndex) {
            setIndex(index + 1)
        } else {
            setIndex(firstIndex)
        }
    }

    const Prev = () => {
        if (index > firstIndex) {
            setIndex(index - 1)
        } else {
            setIndex(lastIndex)
        }
    }

    const ProductData = Product[index]
    return(
        <div>
            <div className='flex justify-center'>
            <button onClick={Next} className='btn bg-black text-white px-10 p-5 m-2'>Next</button>
            <button onClick={Prev} className='btn bg-black text-white px-10 p-5 m-2'>Prev</button>
            </div>
            <div className='flex justify-center'>({index + 1} of {Product.length})</div>
            <div className='flex justify-center'>
                <div className='w-[350px] border-2 border-solid border-black rounded-xl overflow-hidden p-4'>
                    <div className='flex justify-center '>
                        <img className='h-[200px] w-[200px]' src={ProductData.image} alt="" />
                    </div>
                    <div className='rounded-2xl p-4'>
                        <h1 className='font-bold text-xl'>{ProductData.title}</h1>
                        <p className='py-2'>{ProductData.description}</p>
                        <span className='font-bold text-xl'>_{ProductData.category}</span>
                        <span className='font-bold ms-12 text-xl'>${ProductData.price}</span>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Card
