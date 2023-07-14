import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className='bg-neutral-800 text-white py-36'>
        <div className='flex flex-col justify-center items-center'>
            <FaExclamationTriangle color='red' size='5rem' />
            <h1 className='py-3'>404</h1>
            <p className='pb-3'> Sorry this page does not exist</p>
            <Link to='/' className='bg-blue-800 px-4 py-2 mt-2 rounded-sm'> Go Back</Link>
        </div>
        </section>
    )
}
