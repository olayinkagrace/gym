import { FaAngleRight, FaFacebook, FaInbox, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import background from '../assets/images/gallery-5.jpg'
import background2 from '../assets/images/gallery-2.jpg'
import Navbar from '../components/Navbar'
import Timetable from '../components/Timetable'

export default function Classes() {
  return (
    <main className='text-slate-50'>
      <section className='text-center bg-cover bg-transparent pt-3  items-center' style={{ backgroundImage: `url(${background})` }}>
        <Navbar />
        <div className='py-28'>
        <h1 className='font-extrabold text-3xl py-3'>CLASSES DETAIL</h1>
        <div className='flex flex-wrap justify-center items-center font-bold text-[12px]'>
          <Link className='pe-1' to='/'>Home</Link>
          <FaAngleRight size='8px' />
          <Link className='pe-1' to='classes'>Classes</Link>
          <FaAngleRight size='8px' />
          <p className='text-orange-600 ps-1'>Body Building</p>
        </div>
        </div>
      </section>
      <section className='grid sm:grid-cols-3 bg-neutral-900 px-20 pt-20 pb-10 gap-8' >
        <div className='col-span-2'>
          <img src="https://themewagon.github.io/gymlife/img/classes/class-details/class-detailsl.jpg" alt="woman" />
          <h1 className='font-bold pt-4 text-lg'>BODY BUIDING</h1>
          <p className='text-[10px] py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accusantium doloremque laudantium. Excepteur sint occaecat cupidatat non proident sculpa.</p>
          <h1 className='font-bold text-lg '>TRAINER</h1>
          <p className='text-[10px] py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accusantium doloremque laudantium. Excepteur sint occaecat cupidatat non proident sculpa.</p>
          <div className='grid sm:grid-cols-2 py-3 gap-4'>
            <img src="https://themewagon.github.io/gymlife/img/classes/class-details/trainer-profile.jpg" alt="exercuse" />
            <div>
              <p className='font-bold'>Athart Rachel</p>
              <div className='grid sm:grid-cols-2 py-1'>
                <p className='text-[10px] text-zinc-500'>GYM TRAINER</p>
                <div className='flex flex-wrap flex-1 justify-between w-20'>
                  <FaFacebook size='10px' color='grey' />
                  <FaTwitter size='10px' color='grey' />
                  <FaYoutube size='10px' color='grey' />
                  <FaInstagram size='10px' color='grey' />
                  <FaInbox size='10px' color='grey' />
                </div>
              </div>
              <p className='text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra maecenas lacus vel facilisis.</p>
              <div className="divide-y divide-blue-200">
                <div className='flex flex-wrap text-[10px] py-2'>
                  <p className='font-bold w-24'>Age</p>
                  <p>35</p>
                </div>
                <div className='flex flex-wrap text-[10px] py-2'>
                  <p className='font-bold w-24'>Weight</p>
                  <p>148lbs</p>
                </div>
                <div className='flex flex-wrap text-[10px] py-2'>
                  <p className='font-bold w-24'>Height</p>
                  <p>10'2"</p>
                </div>
                <div className='flex flex-wrap text-[10px] py-2'>
                  <p className='font-bold w-24'>Occupation</p>
                  <p>Baker</p>
                </div>
              </div>
              <p className='text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra maecenas lacus vel facilisis.</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className='font-bold '>Category</h1>
          <div className='flex flex-wrap justify-between text-[10px] pt-3'>
            <p>Yoga</p>
            <p>12</p>
          </div>
          <div className='flex flex-wrap justify-between text-[10px] pt-3'>
            <p>Runing</p>
            <p>32</p>
          </div>
          <div className='flex flex-wrap justify-between text-[10px] pt-3'>
            <p>Weightloss</p>
            <p>37</p>
          </div>
          <div className='flex flex-wrap justify-between text-[10px] pt-3'>
            <p>Cario</p>
            <p>23</p>
          </div>
          <div className='flex flex-wrap justify-between text-[10px] pt-3'>
            <p>Body buiding</p>
            <p>67</p>
          </div>
          <div className='flex flex-wrap justify-between text-[10px] pt-3'>
            <p>Nutrition</p>
            <p>22</p>
          </div>
          <div>
            <p className='font-bold py-4'>LATEST POSTS</p>
            <div>
              <img src={background2} alt="" />
              <Link className='font-bold pe-20 text-xs' to='#'><h1>This Japanese Way of Making Iced Coffee Is a Game...</h1></Link>
            </div>
            <div className='grid grid-cols-2 gap-1 items-center py-3'>
              <img src="https://themewagon.github.io/gymlife/img/letest-blog/latest-2.jpg" alt="excercise" />
              <div>
                <p className='text-[10px] font-bold'>Grilled Potato and Green Bean Salad</p>
                <p className='text-[9px] text-zinc-400'>Aug 15, 2019</p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-1 items-center py-3'>
              <img src="https://themewagon.github.io/gymlife/img/letest-blog/latest-3.jpg" alt="" />
              <div>
                <p className='text-[10px] font-bold'>The Best Weeknight Baked Potatoes, 3 Creative Ways</p>
                <p className='text-[9px] text-zinc-400'>Aug 15, 2019</p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-1 items-center py-3'>
              <img src="https://themewagon.github.io/gymlife/img/letest-blog/latest-4.jpg" alt="" />
              <div>
                <p className='text-[10px] font-bold'>The $8 French Rosé I Buy in Bulk Every Summer</p>
                <p className='text-[9px] text-zinc-400'>Aug 15, 2019</p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-1 items-center py-3'>
              <img src="https://themewagon.github.io/gymlife/img/letest-blog/latest-5.jpg" alt="" />
              <div>
                <p className='text-[10px] font-bold'>In Garten's Skillet-Roasted Lemon Chickend</p>
                <p className='text-[9px] text-zinc-400'>Aug 15, 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-neutral-900 px-20 pb-5 '>
        <Timetable />
      </section>
    </main>
  )
}
