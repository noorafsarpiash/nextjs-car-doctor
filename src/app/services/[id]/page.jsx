import dbConnect, { collectonNameObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ServicesDetailsPage({ params }) {
    const p = await params;
    const servicesCollection = dbConnect(collectonNameObj.servicesCollection)
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) })
    return (
        <div>
            <section>
                <figure className='flex justify-center'>
                    <Image
                        src={"/assets/images/checkout/checkout.png"}
                        alt="Checkout"
                        width={1137}
                        height={300}
                    />
                </figure>
            </section>
            <p>{p.id}</p>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}

