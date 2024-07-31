import React from 'react';
import logo from './assets/logo.png'
import dog1 from './assets/dog1.png'
import dog2 from './assets/dog2.png'
import dog3 from './assets/dog3.png'
import dog4 from './assets/dog4.png'
import dog5 from './assets/dog5.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.svg'
import icon5 from './assets/icon5.png'
import line_design from './assets/line_design.png'
import arrows from './assets/arrows.png'
import arrow_left from './assets/arrow_left.png'
import arrow_right from './assets/arrow_right.png'
import one_dog_last from './assets/one_dog_last.png'
import one_dog_first from './assets/one_dog_first.png'
import one_dog from './assets/one_dog.png'
import one_dog1 from './assets/one_dog1.png'

const App = () => {
  return (
    <div>
      <div className='bg-image'>
        {/*  Navbar  */}
        <div className="flex justify-center ">
          <nav className="container max-w-[1280px] flex py-[10px]">
            <div className="flex  justify-between w-[100%]">
              <div className='flex items-center'>
                <img src={logo} alt="web logo" className='me-[80px]' />
                <div className='flex items-center w-[417px] justify-between'>
                  <span className='font-[IBM Plex Sans] text-[16px] font-semibold flex items-center'>Product</span>
                  <span className='font-[IBM Plex Sans] text-[16px] font-semibold'>Solutions</span>
                  <span className='font-[IBM Plex Sans] text-[16px] font-semibold'>Resources</span>
                  <span className='font-[IBM Plex Sans] text-[16px] font-semibold'>Pricing</span>
                </div>
              </div>
              <div className='font-semibold'>
                <span className='text-orange-600 font-bold me-[26px] text-[16px]'>Contact Sales</span>
                <button className='py-[9px] px-[22px] border-[2px] rounded-[23px] border-solid border-orange-600 text-orange-600 text-[14px] hover:bg-orange-600 hover:text-white hover:border-white '>Login</button>
              </div>
            </div>
          </nav>
        </div>
        {/* Navbar end */}

        {/* header Start */}
        <div className='flex justify-center'>
          <div className='container max-w-[1280px] flex justify-between m-auto items-center '>
            <div className='w-[48%] flex items-center my-auto'>
              <div>
                <h1 className='font-[Hanken Grotesk] font-bold text-[64px] text-[#003443] leading-[71px] tracking-[-2px]mb-[21px]'>Empowering <br /><span className='text-orange-600'>Pet</span> Care Providers <br /> with <span className='text-orange-600'>Tech</span> Solutions</h1>
                <p className='font-[IBM Plex Sans] text-[22px] text-[#003443] mb-[28px]'>Providing powerful SAAS solutions to pet businesses, enabling them to maximise their growth and profits in the pet space.</p>
                <div>
                  <button className='font-semibold font-[IBM Plex Sans] text-[16px] text-white py-[12px] px-[48px] rounded-[23px] border-[2px] border-solid border-white bg-orange-600 hover:bg-white hover:text-orange-600 hover:border-orange-600 me-[13px]'>Get in Touch</button>
                  <button className='font-semibold font-[IBM Plex Sans] text-[16px] text-[#003443] py-[12px] px-[48px] rounded-[23px] border-[2px] border-solid border-[#003443] hover:bg-[#003443] hover:text-white  hover:border-white'>Get in Touch</button>
                </div>
              </div>
            </div>
            <div className='w-[40%]'>
              <div className='flex items-center m-auto'>
                <div>
                  <div className='p-[15px] reletive object-contain'>
                    <img src={dog1} alt="dog-1 image" className='reletive' />
                    <div className='absolute z-1 top-[230px] left-[880px] bg-white rounded-[10px]'>
                      <img src={icon1} alt="icon-1 image" className='' />
                    </div>
                  </div>
                  <div className='p-[15px] reletive object-contain'>
                    <img src={dog2} alt="dog-2 image" />
                    <div className='absolute z-1 top-[390px] left-[872px] rounded-[10px]'>
                      <img src={icon2} alt="icon-2 image" className='' />
                    </div>
                  </div>
                  <div className='p-[15px] reletive object-contain'>
                    <img src={dog3} alt="dog-3 image" />
                    <div className='absolute z-1 top-[620px] left-[872px]  rounded-[10px]'>
                      <img src={icon3} alt="icon-3 image" className='' />
                    </div>
                  </div>
                </div>
                <div className='my-auto'>
                  <img src={line_design} alt="line-image" className='absolute -z-10 top-[80px] right-[300px]' />
                  <div className='p-[15px] reletive object-contain'>
                    <img src={dog4} alt="" />
                    <div className='absolute z-1 top-[280px] left-[1110px] bg-white rounded-[10px]'>
                      <img src={icon4} alt="" className='' />
                    </div>
                  </div>
                  <div className='p-[15px] reletive object-contain'>
                    <img src={dog5} alt="dog-5 image" />
                    <div className='absolute z-1 top-[560px] left-[1100px]  rounded-[10px]'>
                      <img src={icon5} alt="icon-5 image" className='' />
                    </div>
                  </div>
                  <img src={arrows} alt="arrow image" className='absolute -z-10 top-[400px] right-[590px]' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header End */}




      {/* last section */}
      <div className='flex justify-center bg-[#003443]'>
        <div className='container max-w-[1280px] flex justify-center m-auto items-center text-[#003443]'>
          <div>
            <div className='flex justify-center m-auto'>
              <img src={arrow_left} alt="arrow-img" className='z-10 h-[277px] -translate-x-[200px]' />
              <div className='text-center'>
                <h1 className='font-[Hanken Grotesk] text-white text-[48px] font-bold mt-[100px] mb-[48px]'>The <span className='text-[#FF4E00]'>one stop solution</span> for all<br /> stakeholders in the pet industry</h1>
                <button className='py-[12px] px-[48px]  rounded-[23px] bg-white  text-orange-600 font-bold text-[14px] hover:bg-orange-600 hover:text-white mb-[57px]'>Contact Sales</button>
              </div>
              <img src={arrow_right} alt="arrows img" className='z-10 h-[200px] translate-x-[170px]' />
            </div>

            <div className='flex justify-between'>
              <div>
                <div className='mb-[25px]'>
                    <img src={one_dog} alt="" />
                </div>
                <div className='flex justify-between '>
                  <div>
                    <img src={one_dog1} alt=""  className='mb-[12px]'/>
                    <img src={one_dog1} alt="" />
                  </div>
                  <div>
                    <img src={one_dog1} alt="" className='mb-[12px]'/>
                    <img src={one_dog1} alt="" />
                  </div>
                </div>
              </div>

              <div className=''>
                <div className='box text-center flex items-center justify-center mx-[15px] mb-[15px]'>
                  <div>
                    <h1 className='font-[Hanken Grotesk] text-[45px] font-bold items-center text-white'>32 M</h1>
                    <p className='font-[IBM Plex Sans] text-[#FFFFFF82] text-[20px] font-semibold'>PETS IN INDIA</p>
                  </div>
                </div>
                <div className='box text-center flex items-center justify-center mx-[15px]'>
                  <div>
                    <h1 className='font-[Hanken Grotesk] text-[45px] font-bold items-center text-white'>₹100 CR +</h1>
                    <p className='font-[IBM Plex Sans] text-[#FFFFFF82] text-[20px] font-semibold'>GROOMING INDUSTRY</p>
                  </div>
                </div>ty
              </div>
              <div>
                <div className='box text-center flex items-center justify-center mx-[15px] mb-[15px]'>
                  <div>
                    <h1 className='font-[Hanken Grotesk] text-[45px] font-bold items-center text-white'>10K+</h1>
                    <p className='font-[IBM Plex Sans] text-[#FFFFFF82] text-[20px] font-semibold'>BREEDERS IN INDIA</p>
                  </div>
                </div>
                <div className='box text-center flex items-center justify-center mx-[15px]'>
                  <div>
                    <h1 className='font-[Hanken Grotesk] text-[45px] font-bold items-center text-white'>₹1000 CR +</h1>
                    <p className='font-[IBM Plex Sans] text-[#FFFFFF82] text-[20px] font-semibold'>VETERINARIAN INDUSTRY</p>
                  </div>
                </div>
              </div>
              <div>
                <img src={one_dog_first} alt=""  className='mb-[20px]'/>
                <img src={one_dog_last} alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App

