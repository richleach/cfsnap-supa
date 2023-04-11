import React from 'react'
import { Categories, Comments, CommentsForm, Footer } from '../../../components';
import Link from 'next/link'
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

 const SupabaseForYourAPINeeds = () => {
    const supabaseClient = useSupabaseClient();
    const user = useUser();
    const session = useSession();
    const router = useRouter();
    
  return (
    <>
      <div className="container px-10 mx-auto mb-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
          <div className='p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg md:p-4'> 
            <h1 className="mb-8 text-3xl font-semibold text-center border-b cursor-pointer">Supabase For Your API Needs <br /><span className="text-sm align-middle">Jan 2, 2023</span><br /></h1>
            
            <div className="relative flex overflow-hidden border-b mb-7 place-items-center">
                <img src="/images/supabaseScreen.png" alt="Supabase & Next.js" className="rounded-t-lg lg:rounded-lg"  />
            </div>
          
          {/* POST STARTS HERE */}
          
            <p className='mb-8'>I decided it was time to update my cfsnap.com site to a more modern tech stack and architecture. I'm all about <em>"if it ain't broke don't fix it" </em> but enough time had passed... well, it was overdue. The front end technology decision was an easy choice to make. I'd been dabbling with Angular, kicked the Vue.js tires but I really like working with React - specifically Next.js. Tailwind.css seems easy enough to work with and can handle my modest design aspirations. But the backend? Even though I got my AWS Cloud Practitioner certification I didn't need such a beast for every little (and even mid-sized) project I wanted to take on. There's no shortage of solid backend/API environments out there, and even though I'd been digging pretty deep with various CMS solutions, I wanted a simple, direct database / storage / authentication solution with perhaps a few nice-to-haves after the fact. Standards based, non-proprietary, easy to use, generous offerings with a free tier.... </p>

            <p className='mb-8'><strong>In walks Supabase.</strong> </p>

            <p className='mb-5'><strong>Pros and Cons</strong></p>

            <p className='mb-8'>
                <strong>The Good Stuff:</strong> 
                
                    <li>Non proprietary platform. Google's Firestore is its own blended format, if you ever want to leave their platform you can take your data with you but you'll have to unscramble the eggs.... Supabase uses Postgresql and allows you to use SQL and JSON on YOUR data.</li>
                    <li>Open Source. Do what you will with that tidbit of info.</li>
                    <li>Generous pricing and free tiers of service. </li>
                    <li>An easy to use console and UI for development. I just finished a blog software project, and set up the database - complete with Row Level Security - as well as user authentication in just a few hours (not bad for having just seen Supabase for the first time only an hour earlier)</li>
                    <li>My favorite point: It's snug and tight with Next.js. There are numerous videos, good docs and expert resources to immediately fire it up, config, drop in some data and make API calls to your private  endpoint. </li><br />
                
                <strong>The meh':</strong>
                <li>The logging console is there, but I had to jiggle the handle to actually see my requests/responses for some good debugging. This needs a little work....</li>
                <li>Community is on the smaller side - so getting help might be a little slow(er) until they get wide(er)spread acceptance.</li>
                <li>Because Next.js had (at the time I built my first app with it) just released version 13 (a major version update) and Supabase had also released a new version some of the docs were slightly out of sync. I bet if you download and configure the latest versions of both applications you'll feel pretty good now. </li>
            </p>

            
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

export default SupabaseForYourAPINeeds