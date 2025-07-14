import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { HomeIcon, LogIn, LogInIcon, LogOut, Music, Sprout } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import { stackServerApp } from '@/stack'
import { getUserDetails } from '@/actions/user.action'
import { UserButton } from '@stackframe/stack'


async function Navbar() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  const userProfile = await getUserDetails(user?.id);

  return (
  <nav className='sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50'>

    <div className='max-w-7xl mx-auto px-4'>
      <div className='flex justify-between items-center h-16'>

      
        <div className='flex items-center'>
            <Link href='/' className='text-xl font-bold text-primary font-mono traking-wider'>
                Sound G🎧
            </Link>
        </div>

        {/* {userProfile?.name && <span className='text-[14px] text-gray-600 dark:text-gray-300'>{`Hello, ${userProfile?.name.split(' ') [0]}`}</span>} */}

        <div className='hidden md:flex items-center space-x-4'>
          <Button variant="ghost" className='flex items-center gap-2' asChild>
            <Link href="/plants">
              <Music className='w-4 h-4' />
              <span className='hidden lg:inline'>instruments</span>
            </Link>
          </Button>

          <Button variant="ghost" className='flex items-center gap-2' asChild>
            <Link href="/">
              <HomeIcon className='w-4 h-4' />
              <span className='hidden lg:inline'>Home</span>
            </Link>
          </Button>

          <ModeToggle/>


        {user ? (<>
            <Button variant="ghost" className='flex items-center gap-2' asChild>
            <Link href={app.signOut}>
            <LogOut className='w-4 h-4' />
            
              <span className='hidden lg:inline'>Sign out</span>
            </Link>
          </Button>

          <UserButton/>
        </>):(
          <>
            {/* sign in bttn */}
          <Button variant="ghost" className='flex items-center gap-2' asChild>
            <Link href={app.signIn}>
            <LogIn className='w-4 h-4' />
            
              <span className='hidden lg:inline'>Sign In</span>
            </Link>
          </Button>
          </>
        )}
          

        
            
        </div>

        </div>
    </div>
  </nav>
    )
}

export default Navbar