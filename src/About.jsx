import React from 'react'
import background from './assets/images/gallery-5.jpg'
import background2 from './assets/images/gallery-6.jpg'
import { Link } from 'react-router-dom'
import { FaAngleRight, FaShoePrints } from 'react-icons/fa'
import WhyChooseUs from './components/WhyChooseUs'
import Video from './components/Video'

export default function About() {
  return (
    <main className='text-slate-50'>
      <section className='text-center bg-cover bg-transparent py-32  items-center' style={{ backgroundImage: `url(${background})` }}>
        <h1 className='font-extrabold text-3xl uppercase py-3'>About Us</h1>
        <div className='flex flex-wrap justify-center items-center font-bold text-[12px]'>
          <Link className='pe-1' to='/'>Home</Link>
          <FaAngleRight size='8px' />
          <p className='text-orange-600 ps-1'>About</p>
        </div>
      </section>
      <section className='bg-black text-center py-20'>
        <p className='text-orange-500 text-xs font-semibold'>Why choose us?</p>
        <h1 className='font-bold text-lg pb-5 pt-2'>PUSH YOUR LIMIT FORWARD</h1>
        <div className='grid grid-cols-4 gap-4 px-10'>
          <WhyChooseUs icon={<FaShoePrints />} name={"Modern Equipment"} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, molestiae provident inventore recusandae ipsa magni!'} />
          <WhyChooseUs icon={FaShoePrints} name={"Healthy nutrition plan"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, molestiae provident inventore recusandae ipsa magni!"} />
          <WhyChooseUs icon={FaShoePrints} name={"Proffesponal training plan"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, molestiae provident inventore recusandae ipsa magni!"} />
          <WhyChooseUs icon={FaShoePrints} name={"Unique to your needs"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, molestiae provident inventore recusandae ipsa magni!"} />
        </div>
      </section>
      <section className='bg-zinc-900 grid grid-cols-2'>
        <div>
          <Video />
        </div>
        <div className='p-10'>
          <p className='text-[10px] text-orange-600 font-bold'>ABOUT US</p>
          <h1 className='font-bold text-xl'>WHAT WE HAVE DONE</h1>
          <p className='text-[10px] py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          <div>
            <div className='flex flex-wrap justify-between text-[10px] py-2 pt-4'>
              <p>Body building</p>
              <p>80%</p>
            </div>
            <div className='border-2 '></div>
          </div>
          <div>
            <div className='flex flex-wrap justify-between text-[10px] py-2 pt-4'>
              <p>Training</p>
              <p>85%</p>
            </div>
            <div className='border-2 '></div>
          </div>
          <div>
            <div className='flex flex-wrap justify-between text-[10px] py-2 pt-4'>
              <p>Fitness</p>
              <p>75%</p>
            </div>
            <div className='border-2 '></div>
          </div>
        </div>
      </section>
      <section className='uppercase text-center py-28 bg-cover' style={{ backgroundImage: `url(${background2})` }}>
        <h1 className='font-extrabold text-[25px]'>REGISTRATION NOW TO GET MORE DEALS</h1>
        <p className='font-semibold text-[13px] text-neutral-400 py-5'>WHERE HEALTH, BEAUTY AND FITNESS MEET.</p>
        <button className='border border-orange-600 text-[12px] px-5 py-2 hover:bg-orange-600'>Appointment</button>
      </section>
      <section>
        
      </section>
    </main>
  )
}
