import dbConnect from '@/lib/dbConnect'
import Image from 'next/image'
import React from 'react'

export default async function ServicesSection() {
    // const res = await fetch("/services.json");
    const servicesCollection = dbConnect("test_services");
    const data = await servicesCollection.find({}).toArray();


    return (
        <div className='grid grid-cols-12 gap-4 container mx-auto'>
            {data.map((item) => {
                return (
                    <div className='col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full border' key={item._id}>

                        <figure className='w-full h-3/4 flex justify-center items-center'>
                            <Image
                                className='w-full h-full object-fill'
                                src={item.img}
                                width={314}
                                height={108}
                                alt={item.title} />
                        </figure>
                        <div className='flex justify-between items-center mt-4'>

                        </div>
                        <h3 className='text-3xl font-bold text-black-400 mt-2 '>{item.title}</h3>
                        <p className='text-2xl text-orange-400 font-semibold mt-2'>Price:{item.price}</p>

                    </div>
                )
            })}</div>
    )
}
