import React from 'react'
import { useState, useEffect } from 'react'

const Recipe_finder = (props) => {


    return (
        <>
            <div className='flex flex-row p-10  justify-evenly'>
                <div className='flex flex-col p-5  shadow-md shadow-black'>
                    {
                        userList.map((recipes) =>
                        (
                            <>
                                <div>
                                <img src='' alt="" height={300} width={300} />
                                    <h1 className='text-3xl font-bold text-red-500 my-4'>{recipes.name}</h1>
                                    <h2 className='font-bold my-2 py-2 border-solid border-green-500 border-2 text-center '>Ingredients </h2>
                                    <h2 className='font-bold my-2 py-2 border-solid border-red-500 border-2 text-center'>See complete Recipe</h2>

                                </div>
                            </>
                        ))
                    }

                </div>

            </div>

        </>
    )
}

export default Recipe_finder
