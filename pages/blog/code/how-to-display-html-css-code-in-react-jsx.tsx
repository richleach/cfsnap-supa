import React from 'react'
import { Categories, Comments, CommentsForm, Footer } from '../../../components';
import Link from 'next/link'
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

 const HowToDisplayHtmlCssInReact = () => {

    const supabaseClient = useSupabaseClient();
    const user = useUser();
    const session = useSession();
    const router = useRouter();

    const code = `
<div className='grid grid-cols-2 pb-2 pt-4 text-slate-300'> 
    <div className='text-right pr-3'> 
        <label htmlFor="options">Colors: </label> 
    </div> 
    <div className='pl-3'> 
        <select name="type" id="type" style=border: 'thin solid silver', borderRadius: '5px'> 
            <option value="text">Cyan</option> 
            <option value="radio">Magenta</option> 
            <option value="select">Yellow</option> 
            <option value="checkbox">Black</option> 
        </select> 
    </div> 
</div>
      `
    
  return (
    <>
      <div className="container px-10 mx-auto mb-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
          <div className='p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg md:p-4'> 
            <h1 className="mb-8 text-3xl font-semibold text-center border-b cursor-pointer">How to Display HTML & CSS Code in JSX</h1>
            <div className="relative flex justify-center overflow-hidden mb-7 place-items-center ">
                <img src="/images/code/codeCover.jpg" alt="Display HTML/CSS code in React" className="rounded-t-lg lg:rounded-lg"  />
            </div>
          
          {/* POST STARTS HERE */}
            <p className='mb-8'>Did you ever need to output HTML, CSS or Javascript to the screen from a React JSX(TSX) component? I simply pre-build the code string outside/above the return() statement in my component. The secret sauce is to wrap the desired code string in back-ticks - see screenshot above.</p>

            <pre>
                <code>{code}</code>
            </pre>
            

          {/* POST ENDS HERE */}
          </div> 
            <div className='p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg md:p-4'>
              <div className="container">
                <div className="grid showcase-form card place-items-center">
 
                {/* if logged in user then let them comment, else present the login link */}
                {
                    !user ? 
                    <Link href={`/login/`}>
                        <span className='mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right'>
                            Want to leave a comment? Login/register!
                        </span> 
                    </Link>
                    :
                    <CommentsForm session={session} />
                }
                </div>
              </div>
            </div> 

            <div className='p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg md:p-4'>
              <div className="container">
                <div className="grid showcase-form card place-items-left">
                  <Comments User={user}/>
                </div>  
              </div>
            </div>    

          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky">
                <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
                  <h3 className="pb-4 mb-2 text-xl font-semibold border-b">Blog Categories</h3>
                    <Categories />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HowToDisplayHtmlCssInReact