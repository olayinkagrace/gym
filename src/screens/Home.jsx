import React from 'react'
import Navbar from '../components/Navbar'
import WhyChooseUs from '../components/WhyChooseUs'
import { FaAngleRight, FaInbox, FaMap, FaPhone, FaShoePrints } from 'react-icons/fa'
import class1 from '../assets/images/class-1.jpg'
import class2 from '../assets/images/class-2.jpg'
import class3 from '../assets/images/class-3.jpg'
import class4 from '../assets/images/class-4.jpg'
import class5 from '../assets/images/class-5.jpg'
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'
import gallery3 from '../assets/images/gallery-3.jpg'
import gallery4 from '../assets/images/gallery-4.jpg'
import gallery5 from '../assets/images/gallery-5.jpg'
import gallery6 from '../assets/images/gallery-6.jpg'
import logo from '../assets/images/logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
export default function Home() {
    return (
        <main className='text-slate-50'>
            <section className='bg-black '>
                <Navbar />
                <div className='place-content-end float-right  w-full py-32 pe-20 bg-black'>
                    <p className='text-[10px] font-semibold tracking-widest'>SHAPE YOUR BODY</p>
                    <h1 className='text-[50px] font-bold  text-slate-100'>BE <h1 className='text-orange-500 inline-block'>STRONG</h1><br /> TRAIN HARD</h1>
                    <button className='rounded-none bg-orange-500 p-2 text-[10px] font-semibold'> GET INFO</button>
                </div>
            </section>
            <section className='bg-slate-900 text-center py-16'>
                <p className='text-orange-500 text-xs font-semibold pt-14'>Why choose us?</p>
                <h1 className='font-bold text-lg pb-5'>PUSH YOUR LIMIT FORWARD</h1>
                <div className='grid grid-cols-4 gap-4 px-10'>
                    <WhyChooseUs icon={<FaShoePrints />} name={"Modern Equipment"} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, molestiae provident inventore recusandae ipsa magni!'} />
                    <WhyChooseUs icon={FaShoePrints} name={"Healthy nutrition plan"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, molestiae provident inventore recusandae ipsa magni!"} />
                    <WhyChooseUs icon={FaShoePrints} name={"Proffesponal training plan"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, molestiae provident inventore recusandae ipsa magni!"} />
                    <WhyChooseUs icon={FaShoePrints} name={"Unique to your needs"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, molestiae provident inventore recusandae ipsa magni!"} />
                </div>
            </section>
            <section className='bg-zinc-900 text-center py-20 uppercase'>
                <p className=' text-orange-600 text-[9px] font-semibold'>Our classes </p>
                <h1 className='font-bold'>What we offer</h1>
                <div className='grid grid-cols-3 gap-4 px-10'>
                    <div>
                        <img src={class1} alt="" />
                        <div className='flex flex-wrap justify-between p-5 items-center bg-neutral-900'>
                            <div>
                                <p className=' text-orange-600 text-[9px] text-left font-semibold'>Strength</p>
                                <h1 className='font-bold bg-'>weightlifting</h1>
                            </div>
                            <div className='bg-zinc-800 p-2'>
                                <FaAngleRight />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={class2} alt="" />
                        <div className='flex flex-wrap justify-between p-5 items-center bg-neutral-900'>
                            <div>
                                <p className=' text-orange-600 text-[9px] text-left font-semibold'>Cardio</p>
                                <h1 className='font-bold'>indoor cycling</h1>
                            </div>
                            <div className='bg-zinc-800 p-2'>
                                <FaAngleRight />
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={class3} alt="" />
                        <div className='flex flex-wrap justify-between p-5 items-center bg-neutral-900'>
                            <div>
                                <p className=' text-orange-600 text-[9px] text-left font-semibold'>Strength</p>
                                <h1 className='font-bold bg-'>kettleball power</h1>
                            </div>
                            <div className='bg-zinc-800 p-2'>
                                <FaAngleRight />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='grid grid-rows-3 grid-flow-col gap-4 px-10 pt-5'>
                    <div className='row-span-3'>
                        <img src={class4} alt="" />
                        <div className='flex flex-wrap justify-between p-5 items-center bg-neutral-900'>
                            <div>
                                <p className=' text-orange-600 text-[9px] text-left font-semibold'>cardio</p>
                                <h1 className='font-bold bg-'>indoor cycling</h1>
                            </div>
                            <div className='bg-zinc-800 p-2'>
                                <FaAngleRight />
                            </div>
                        </div>
                    </div>
                    <div className='row-span-3 '>
                        <img src={class5} alt="" />
                        <div className='flex flex-wrap justify-between p-5 items-center bg-neutral-900'>
                            <div>
                                <p className=' text-orange-600 text-[9px] text-left font-semibold'>training</p>
                                <h1 className='font-bold bg-'>boxing</h1>
                            </div>
                            <div className='bg-zinc-800 p-2'>
                                <FaAngleRight />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-zinc-700 uppercase text-center py-28'>
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
            <section className='bg-neutral-900 pb-20'>
                <div className='grid grid-cols-4 gap-2'>
                    <img className='col-span-2' src={gallery1} alt="exercise" />
                    <img src={gallery2} alt="exercise" />
                    <img src={gallery3} alt="exercise" />
                    <img src={gallery4} alt="exercise" />
                    <img src={gallery5} alt="exercise" />
                    <img className='col-span-2' src={gallery6} alt="exercise" />
                </div>
            </section>
            <section className='bg-black px-20 py-5 flex flex-wrap justify-between'>
                <div className='flex flex-wrap items-center'>
                    <div className=' flex w-10 me-3  h-10 bg-orange-600 rounded-full justify-center'>
                        <FaMap className='self-center' />
                    </div>
                    <div>
                        <p className='text-[10px]'>333 Middle Winchendon Rd, Rindge,</p>
                        <p className='text-[10px]'>NH 03461</p>
                    </div>
                </div>
                <div className='flex flex-wrap items-center'>
                    <div className=' flex w-10 me-3  h-10 bg-orange-600 rounded-full justify-center'>
                        <FaPhone className='self-center' />
                    </div>
                    <p className='text-[10px]'>125-711-811 125-668-886</p>
                </div>
                <div className='flex flex-wrap items-center'>
                    <div className=' flex w-10 me-3  h-10 bg-orange-600 rounded-full justify-center'>
                        <FaInbox className='self-center' />
                    </div>
                    <p className='text-[10px]'>Support.gymcenter@gmail.com</p>
                </div>
            </section>
            <section className='bg-black flex flex-wrap justify-between text-[10px] px-20 py-10'>
                <div className='py-2'>
                    <img src={logo} alt="logo" width={'50%'} />
                    <p className='text-[10px] w-48 my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua endisse ultrices gravida lorem.</p>
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
