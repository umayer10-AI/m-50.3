import TableTAsk from '@/component/TableTAsk';
import { getUser } from '@/lib/data';
import React from 'react';

const page = async () => {

    const data = await getUser()

    return (
        <div>
            <h2>User Data: {data.length}</h2>
            <TableTAsk></TableTAsk>
        </div>
    );
};

export default page;