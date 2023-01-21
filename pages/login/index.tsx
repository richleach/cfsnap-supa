import type { NextPage } from "next";
import Head from 'next/head';
import { Categories, Footer } from '../../components'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'


const Login: NextPage = () => {
    const supabaseClient = useSupabaseClient();
    const user = useUser();
    const router = useRouter();

    if(user) {
        router.push('/blog')
    }

return (
    <div className="container mx-auto px-10 mb-8">

      <Head>
        <title>cfsnap.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
        <div className='sm:col-span-8 col-span-1'>
            
            
          <div className='bg-white shadow-lg rounded-lg p-0 md:p-4 pb-12 mb-8'> 
            <h3 className="text-3xl font-semibold cursor-pointer">Login </h3>
          </div>

          <div className='bg-white shadow-lg rounded-lg p-0 md:p-4 pb-12 mb-8'>
          <div className="container">
            <div className="showcase-form card">
                <Auth 
                    appearance={{theme: ThemeSupa}} 
                    supabaseClient={supabaseClient} 
                    theme="light"/>
                </div>
            </div> 
          </div>
          
        </div>
        <div className='sm:col-span-4 col-span-1'>
            <div className='sm:sticky relative top-8'>

              <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
                  <h3 className="pb-4 mb-2 text-xl font-semibold border-b">Blog Categories</h3>
                  <Categories />
                  
              </div>

            </div>
        </div>
        
      </div>
      
      <Footer />
      
    </div>
  )

}


export default Login;

