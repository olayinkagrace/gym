import logo from '../assets/images/logo.png'
import { FaFacebook, FaInbox, FaMap, FaPhone, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
    return (
        <main className='text-slate-50'>
            <section className='bg-zinc-900 px-20 py-5 flex flex-wrap justify-between'>
                <div className='flex flex-wrap items-center py-2'>
                    <div className=' flex w-10 me-3  h-10 bg-orange-600 rounded-full justify-center'>
                        <FaMap className='self-center' />
                    </div>
                    <div>
                        <p className='text-[10px]'>333 Middle Winchendon Rd, Rindge,</p>
                        <p className='text-[10px]'>NH 03461</p>
                    </div>
                </div>
                <div className='flex flex-wrap items-center py-2'>
                    <div className=' flex w-10 me-3  h-10 bg-orange-600 rounded-full justify-center'>
                        <FaPhone className='self-center' />
                    </div>
                    <p className='text-[10px]'>125-711-811 125-668-886</p>
                </div>
                <div className='flex flex-wrap items-center py-2'>
                    <div className=' flex w-10 me-3  h-10 bg-orange-600 rounded-full justify-center'>
                        <FaInbox className='self-center' />
                    </div>
                    <p className='text-[10px] ft'>Support.gymcenter@gmail.com</p>
                </div>
            </section>
            <section className='bg-black flex flex-wrap justify-between text-[10px] px-20 py-10'>
                <div className='py-2'>
                    <img src={logo} alt="logo" width={'50%'} className='img' />
                    <p className='text-[10px] w-48 my-3 ftp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua endisse ultrices gravida lorem.</p>
                    <div className='flex flex-wrap justify-between w-20'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaYoutube />
                        <FaInstagram />
                        <FaInbox />
                    </div>
                </div>
                <div>
                    <h1 className='text-base font-bold py-2'>Useful Links</h1>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Classes</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h1 className='text-base font-bold py-2'>Support</h1>
                    <p>Login</p>
                    <p>My account</p>
                    <p>Subscribe</p>
                    <p>Contact</p>
                </div>
                <div>
                    <h1 className='text-base font-bold py-2'>Tips & Guides</h1>
                    <p>Physical fitness may help prevent depression, anxiety</p>
                    <p className='text-zinc-400 text-[10px]'>3 min read 20 Comment</p>
                    <div>
                        <p>Physical fitness may help prevent depression, anxiety</p>
                        <p className='text-zinc-400 text-[10px]'>3 min read 20 Comment</p>
                    </div>
                </div>
            </section>
            <section className='bg-black text-center px-20'>
                <div className='border bg-slate-300'></div>
                <footer className='py-5 text-[10px]'>
                    Copyright ©2023 All rights reserved | This template is made with  by Colorlib
                </footer>
            </section>

        </main>
    )
}
