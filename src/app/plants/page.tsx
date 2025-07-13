import InventoryTable from '@/components/InventoryTable';
import { stackServerApp } from '@/stack';
import { SignIn, SignUp } from '@stackframe/stack';
import React from 'react'

async function page() {
      const user = await stackServerApp.getUser();
      const app = stackServerApp.urls;
  return (
    <>
    {user ?(
        <>
        <div className='mt-7 max-w-7xl mx-auto px-1 grid grid-cols-1  lg:grid-cols-10 gap-5'>
            <div className='lg:col-span-full'>
                <InventoryTable />
            </div>
        </div>
        </>
    
    ) : (
        <div className='flex items-center mt-10 justify-center '>
            <SignUp/>
        </div>
        
    )}
    </>
  )
}

export default page