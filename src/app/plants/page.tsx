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
        <InventoryTable/>
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