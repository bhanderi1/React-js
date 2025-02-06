import React from 'react'

const Crad = (props) => {
    return (
        <div className='flex justify-center items-center h-screen rounded-md'>
            <div className='max-w-[400px]  mx-4 h-fit-content shadow-xl shadow-gray-600'>
                <div>
                    <img src={props.Img} alt="" className='h-[250px] w-auto object-cover'/>
                </div>
                <div className='p-4'>
                    <h1 className='text-2xl font-bold'>
                        Ram Mandir, Ayodhya
                    </h1>
                    <p>The site of the temple is the subject of communal tensions between Hindus and Muslims in India, as it is the former location of the Babri Masjid mosque, which was built between 1528 and 1529. The idols of Rama and Sita were placed in the mosque in 1949, before it was attacked and demolished in 1992.</p>
                    <a className='btn inline-block mt-4 '> {props.name}</a>
                </div>
            </div>
        </div>
    )
}

export default Crad
