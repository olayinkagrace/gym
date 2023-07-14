import background from './assets/images/gallery-5.jpg'
import background2 from './assets/images/gallery-6.jpg'
import { Link } from 'react-router-dom'
import { FaAngleRight, FaNutritionix, FaShoePrints, FaTrain, FaWeight } from 'react-icons/fa'
import Video from './components/Video'
import Navbar from './components/Navbar'

export default function About() {
  return (
    <main className='text-slate-50'>
      <section className='text-center bg-cover bg-transparent pt-3  ' style={{ backgroundImage: `url(${background})` }}>
        <Navbar />
        <div className='py-28'>
          <h1 className='font-extrabold text-3xl uppercase'>About Us</h1>
          <div className='flex flex-wrap justify-center items-center font-bold text-[12px]'>
            <Link className='pe-1' to='/'>Home</Link>
            <FaAngleRight size='8px' />
            <p className='text-orange-600 ps-1'>About</p>
          </div>
        </div>

      </section>
      <section className='bg-black text-center py-20'>
        <p className='text-orange-500 text-xs font-semibold'>Why choose us?</p>
        <h1 className='font-bold text-lg pb-5 pt-2'>PUSH YOUR LIMIT FORWARD</h1>
        <div className='grid sm:grid-cols-4 gap-4 px-10'>
          <div className='grid justify-items-center'>
            <div className=' flex w-12 h-12 bg-slate-700 self-center hover:bg-orange-600 rounded-full justify-center'>
              <FaShoePrints className='self-center' />
            </div>
            <p className='font-bold text-sm py-2 '>Modern Equipment</p>
            <h1 className='font-thin text-[10px] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit expedita delectus est cupiditate doloremque facilis eos magni id consequuntur quos!</h1>
          </div>
          <div className='grid justify-items-center'>
            <div className=' flex w-12 h-12 bg-slate-700 self-center hover:bg-orange-600 rounded-full justify-center'>
              <FaNutritionix className='self-center' />
            </div>
            <p className='font-bold text-sm py-2 '>Healthy nutrition plan</p>
            <h1 className='font-thin text-[10px] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit expedita delectus est cupiditate doloremque facilis eos magni id consequuntur quos!</h1>
          </div>
          <div className='grid justify-items-center'>
            <div className=' flex w-12 h-12 bg-slate-700 self-center hover:bg-orange-600 rounded-full justify-center'>
              <FaTrain className='self-center' />
            </div>
            <p className='font-bold text-sm py-2 '>Proffesponal training plan</p>
            <h1 className='font-thin text-[10px] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit expedita delectus est cupiditate doloremque facilis eos magni id consequuntur quos!</h1>
          </div>
          <div className='grid justify-items-center'>
            <div className=' flex w-12 h-12 bg-slate-700 self-center hover:bg-orange-600 rounded-full justify-center'>
              <FaWeight className='self-center' />
            </div>
            <p className='font-bold text-sm py-2 '>Unique to your needs</p>
            <h1 className='font-thin text-[10px] text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit expedita delectus est cupiditate doloremque facilis eos magni id consequuntur quos!</h1>
          </div>
        </div>
      </section>
      <section className='bg-zinc-900 grid sm:grid-cols-2'>
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
