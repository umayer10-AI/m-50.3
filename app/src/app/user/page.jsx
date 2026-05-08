import ModalTAsk from '@/component/ModalTAsk';
import TableTAsk from '@/component/TableTAsk';
import { createUser, deleteUser } from '@/lib/action';
import { getUser } from '@/lib/data';
import React from 'react';

const page = async () => {

    const data = await getUser()

    return (
        <div>
            <div className='flex justify-center gap-3 my-5 items-center'>
                <h2>User Data: {data.length}</h2>
                <ModalTAsk></ModalTAsk>
            </div>
            <TableTAsk p={data} deleteUser={deleteUser}></TableTAsk>
        </div>
    );
};

export default page;