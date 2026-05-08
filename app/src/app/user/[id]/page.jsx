import { getId } from '@/lib/data';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const data = await getId(id)

    return (
        <div className='p-4 rounded-2xl border w-fit border-yellow-300'>
            <h2>Name: {data.name}</h2>
            <h2>Email: {data.email}</h2>
            <h2>Role: {data.role}</h2>
        </div>
    );
};

export default page;