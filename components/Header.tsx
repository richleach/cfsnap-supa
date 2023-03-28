import {useContext, useEffect, useState} from 'react';
import Link from 'next/link';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

const Header = () => {
    const supabaseClient = useSupabaseClient();
    const user = useUser();
    const router = useRouter();

    const signOutUser = () => {
        supabaseClient.auth.signOut();
        router.push('/');
    }

    return (
      <div className='container px-10 mx-auto mb-8'>
        <div className='inline-block w-full py-8 border-b border-blue-900'>
            <div className='block md:float-left '>
                <Link href='/'>
                    {/* <h3 className='text-5xl font-bold text-blue-900 cursor-pointer hit-the-floor'> */}
                    <h3 className='text-5xl font-bold text-blue-900 cursor-pointer hit-the-floor'>
                        cfsnap
                    </h3>
                </Link>
            </div>
            <div className='block md:float-left md:contents'>
                {/* {categories.map((category) => (
                    <Link key={category.name} href={`/category/${category.slug}`}>
                       <span className='mt-2 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right'>
                            {category.name}
                        </span> 
                    </Link>
                ))} */}

               
                {
                    !user ? 
                    <Link href={`/login/`}>
                        <span className='mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right'>
                            Login
                        </span> 
                    </Link>
                    :
                    <span className='mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right' onClick={() => signOutUser()}>
                        Logout ({user?.email})
                    </span> 
                }
                <Link href={`/contact/`}>
                    <span className='mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right'>
                        Contact
                    </span> 
                </Link>
                
                    <span className='mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right'>
                        Portfolio
                    </span> 
                {/* 
                    <span className='mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right'>
                        CSS
                    </span> 
                
                    <span className='mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right'>
                        Javascript
                    </span> 
                
                    <span className='mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right'>
                        React
                    </span> 
                 */}
                <Link href={`/blog/`}>
                    <span className='mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right'>
                    Blog
                    </span> 
                </Link>
            </div>
        </div>
      </div>
    )
  }
  
  export default Header

  //drop-shadow-lg shadow-black  style={{ color: 'white', 'WebkitTextStrokeWidth': .2, 'WebkitTextStrokeColor': 'navy' }}