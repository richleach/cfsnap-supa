import type { NextPage } from "next";
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
        <div className='grid grid-cols-1 gap-8 md:grid-cols-12'>
            <div className='col-span-1 sm:col-span-8'>
                <div className='p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg md:p-4'>
                    <div className='grid grid-cols-1 gap-4 align-middle'>
                        <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-2 ">
                            <Auth 
                                appearance={{theme: ThemeSupa}} 
                                supabaseClient={supabaseClient} />
                        </div>
                    </div>
                </div>
            </div>
        </div>    

        
    )
}

export default Login;