import { Link } from 'react-router-dom'
import { FaAngleRight, FaInbox, FaMap, FaPhone } from 'react-icons/fa'
import background from '../assets/images/gallery-5.jpg'
import Navbar from '../components/Navbar'

export default function Contact() {
    return (
        <main className='text-slate-50'>
            <section className='text-center bg-cover bg-transparent items-center pt-3' style={{ backgroundImage: `url(${background})` }}>
                <Navbar />
                <div className='py-32'>
                <h1 className='font-extrabold text-3xl uppercase py-3'>Contact Us</h1>
                <div className='flex flex-wrap justify-center items-center font-bold text-[12px]'>
                    <Link className='pe-1' to='/'>Home</Link>
                    <FaAngleRight size='8px' />
                    <p className='text-orange-600 ps-1'>Contact us</p>
                </div>
                </div>
            </section>
            <section className='grid sm:grid-cols-2 gap-4 bg-black p-20'>
                <div>
                    <p className=' text-orange-600 text-[12px] text-left font-semibold'>Contact Us</p>
                    <h1 className='font-bold uppercase text-lg'>Get in touch</h1>

                    <div className='flex flex-wrap items-center py-3 pt-5'>
                        <div className=' flex w-10 me-3  h-10 bg-neutral-500 rounded-full justify-center'>
                            <FaMap className='self-center' />
                        </div>
                        <div>
                            <p className='text-[10px]'>333 Middle Winchendon Rd, Rindge,</p>
                            <p className='text-[10px]'>NH 03461</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap items-center py-3'>
                        <div className=' flex w-10 me-3  h-10 bg-neutral-500 rounded-full justify-center'>
                            <FaPhone className='self-center' />
                        </div>
                        <p className='text-[10px]'>125-711-811 125-668-886</p>
                    </div>
                    <div className='flex flex-wrap items-center py-3'>
                        <div className=' flex w-10 me-3  h-10 bg-neutral-500 rounded-full justify-center'>
                            <FaInbox className='self-center' />
                        </div>
                        <p className='text-[10px]'>Support.gymcenter@gmail.com</p>
                    </div>
                </div>
                <form className='w-full max-w-full block justify-center'>
                <label className='text-[12px] my-3 block'>
                        Name:
                        <input type="text" name="name" className='px-10 bg-black border' />
                    </label>
                    <label className='text-[12px] my-3 block'>
                        Email:
                        <input type="text" name="name" className='px-10 bg-black border' />
                    </label>
                    <label className='text-[12px] my-3 block'>
                        Website:
                        <input type="text" name="name" className='px-10 bg-black border' />
                    </label>
                    <label className='text-[12px] my-3 block'>
                        Comment:
                        <textarea type="text" name="name" className='px-10 bg-black border' />
                    </label>
                    <button className='block bg-orange-600 text-[10px] px-4 py-2 self-center'>Submit</button>
                </form>
                    <section>
                        
                    </section>
            </section>
        </main>
    )
}
