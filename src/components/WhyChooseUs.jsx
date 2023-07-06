import React from 'react'


export default function WhyChooseUs({ icon, name, description }) {
    return (
        <div className='grid justify-items-center'>
            <div className=' flex w-12 h-12 bg-slate-700 self-center hover:bg-orange-600 rounded-full justify-center'>
                <img src={icon} className='self-center' />
            </div>
            <p className='font-bold text-sm py-2 '>{name}</p>
            <h1 className='font-thin text-[10px] text-center'>{description}</h1>
        </div>
    )
}
