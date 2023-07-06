import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'
import background from '../assets/images/gallery-5.jpg'
import Navbar from '../components/Navbar'

export default function Team() {
  return (
    <main className='text-slate-50'>
      <section className='text-center bg-cover bg-transparent pt-3  items-center' style={{ backgroundImage: `url(${background})` }}>
        <Navbar />
        <div className='py-28'>
          <h1 className='font-extrabold text-3xl uppercase py-3'>Our Team</h1>
          <div className='flex flex-wrap justify-center items-center font-bold text-[12px]'>
            <Link className='pe-1' to='/'>Home</Link>
            <FaAngleRight size='8px' />
            <p className='text-orange-600 ps-1'>Our Team</p>
          </div>
        </div>

      </section>
    </main>
  )
}
