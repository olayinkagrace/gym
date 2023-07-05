import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import background from '../assets/images/gallery-5.jpg'
import background2 from '../assets/images/gallery-4.jpg'

export default function Services() {
  return (
    <main className='text-slate-50'>
      <section className='text-center bg-cover bg-transparent py-32  items-center' style={{ backgroundImage: `url(${background})` }}>
        <h1 className='font-extrabold text-3xl uppercase py-3'>SERVICES</h1>
        <div className='flex flex-wrap justify-center items-center font-bold text-[12px]'>
          <Link className='pe-1' to='/'>Home</Link>
          <FaAngleRight size='8px' />
          <p className='text-orange-600 ps-1'>Services</p>
        </div>
      </section>
      <section className='bg-black text-center py-16'>
        <p className='text-orange-500 text-xs font-semibold'>Why choose us?</p>
        <h1 className='font-bold text-lg pb-5 pt-2'>PUSH YOUR LIMIT FORWARD</h1>
        <div className='grid grid-cols-4 px-20'>
          <div className='bg-zinc-900'><img src="https://themewagon.github.io/gymlife/img/services/services-1.jpg" alt="press-up" /></div>
          <div className='bg-neutral-900 hover:bg-neutral-700 py-5 px-5 text-left'>
            <h1 className='font-bold'>Personal training</h1>
            <p className='text-[10px] text-zinc-500 py-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</p>
            <Link className='text-[12px] font-semibold hover:text-orange-600' to='#'>Explore</Link>
          </div>
          <img src="https://themewagon.github.io/gymlife/img/services/services-2.jpg" alt="student" />
          <div className='bg-neutral-900 hover:bg-neutral-700 py-5 px-5 text-left'>
            <h1 className='font-bold'>Strength training</h1>
            <p className='text-[10px] text-zinc-500 py-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</p>
            <Link className='text-[12px] font-semibold hover:text-orange-600' to='#'>Explore</Link>
          </div>
          <div className='bg-neutral-900 hover:bg-neutral-700 py-5 px-5 text-left'>
            <h1 className='font-bold'>Group fitness classes</h1>
            <p className='text-[10px] text-zinc-500 py-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</p>
            <Link className='text-[12px] font-semibold hover:text-orange-600' to='#'>Explore</Link>
          </div>
          <img src="https://themewagon.github.io/gymlife/img/services/services-3.jpg" alt="students" />
          <div className='bg-neutral-900 hover:bg-neutral-700 py-5 px-5 text-left'>
            <h1 className='font-bold'>Body building</h1>
            <p className='text-[10px] text-zinc-500 py-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore facilisis.</p>
            <Link className='text-[12px] font-semibold hover:text-orange-600' to='#'>Explore</Link>
          </div>
          <img src="https://themewagon.github.io/gymlife/img/services/services-4.jpg" alt="weight-loss" />

        </div>
      </section>
      <section className='uppercase text-center py-28 bg-cover' style={{ backgroundImage: `url(${background2})` }}>
        <h1 className='font-extrabold text-[25px]'>REGISTRATION NOW TO GET MORE DEALS</h1>
        <p className='font-semibold text-[13px] text-neutral-400 py-5'>WHERE HEALTH, BEAUTY AND FITNESS MEET.</p>
        <button className='border border-orange-600 text-[12px] px-5 py-2 hover:bg-orange-600'>Appointment</button>
      </section>
      <section className='bg-neutral-900 text-center py-20 '>
        <p className=' text-orange-600 text-[12px] font-semibold uppercase'>our plan</p>
        <h1 className='font-bold text-xl'>CHOOSE YOUR PRICING PLAN</h1>
        <div className='grid grid-cols-3 gap-4 px-10 pt-4'>
          <div className='border py-5 hover:bg-white hover:text-black'>
            <p className='font-bold py-2'>Class drop-in</p>
            <h1 className='text-orange-600 font-bold text-5xl' >$ 39.0</h1>
            <p className='font-bold text-[10px] text-neutral-500'>SINGLE CLASS</p>
            <p className='text-[10px] text-center py-5 leading-loose'>Free riding <br />
              Unlimited equipments <br />
              Personal trainer <br />
              Weight losing classes <br />
              Month to mouth <br />
              No time restriction</p>
            <button className='py-2 px-7 text-[10px] font-bold hover:text-white bg-zinc-700 hover:bg-orange-600'>ENROLL NOW</button>
          </div>
          <div className='border py-5 hover:bg-white hover:text-black'>
            <p className='font-bold py-2'>12 Month unlimited</p>
            <h1 className='text-orange-600 font-bold text-5xl' >$ 99.0</h1>
            <p className='font-bold text-[10px] text-neutral-500'>SINGLE CLASS</p>
            <p className='text-[10px] text-center py-5 leading-loose'>Free riding <br />
              Unlimited equipments <br />
              Personal trainer <br />
              Weight losing classes <br />
              Month to mouth <br />
              No time restriction</p>
            <button className='py-2 px-7 text-[10px] font-bold hover:text-white bg-zinc-700 hover:bg-orange-600'>ENROLL NOW</button>
          </div>
          <div className='border py-5 hover:bg-white hover:text-black'>
            <p className='font-bold py-2'>6 Month unlimited</p>
            <h1 className='text-orange-600 font-bold text-5xl' >$ 60.0</h1>
            <p className='font-bold text-[10px] text-neutral-500'>SINGLE CLASS</p>
            <p className='text-[10px] text-center py-5 leading-loose'>Free riding <br />
              Unlimited equipments <br />
              Personal trainer <br />
              Weight losing classes <br />
              Month to mouth <br />
              No time restriction</p>
            <button className='py-2 px-7 text-[10px] font-bold hover:text-white bg-zinc-700 hover:bg-orange-600'>ENROLL NOW</button>
          </div>
        </div>
      </section>
    </main>
  )
}
