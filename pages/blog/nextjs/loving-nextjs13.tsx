import React from 'react'
import { Categories, Comments, CommentsForm, Footer } from '../../../components';
import Link from 'next/link'
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

 const LovingNextjs13 = () => {
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
            <h1 className="mb-8 text-3xl font-semibold text-center border-b cursor-pointer">Loving Next.js 13 &amp; All The New Features <br /><span className="text-sm align-middle">Jan 13, 2023</span><br /></h1>
            
            <div className="relative flex justify-center overflow-hidden border-b mb-7 place-items-center">
                <img src="/images/nextjs-beta.png" alt="Nextjs 13 upgrade offers great new features" className="rounded-t-lg lg:rounded-lg"  /><br/>
            </div>
          
          {/* POST STARTS HERE */}
          
            <p className='mb-8'> </p>

            <p className='mb-8'><span className="font-bold" >BIG ASS(terisk) NOTE</span>: Some features in Nextjs 13 are still experimental, but fully (and incrementally) upgradeable. Most new features are still in alpha (not even in beta yet) so don't blame me if your project suffers a blowout because you didn't read the docs....</p>

            <p className='mb-8'>It's important to understand that I’m not beating my blog-drums with a tone of, “ng and Vue all suck, React/Next.js is the only/best place to be….” because at anytime, Angular, Vue or React can issue an update and release some cool new features, giving their respective technologies a sudden edge over the other 2 front-end technologies. The front-end space has been very active in the last few years so if you give it a few weeks I bet your favorite front end stack will likely issue its own update(s) including the very feature other frameworks are blowing their own horns about.</p>

            <p className='mb-8'><span className="font-bold" >Cool new features, in no particular order: </span><br/>
                <strong>&middot;</strong> First of all unless you say otherwise all of your <strong>components are now server side components</strong>. You can still run client side components but this may impact how you (re-) architect your new or migration project. <br/><br/>
                <strong>&middot;</strong> <strong>Next.js' new server-side-component-approach builds on React's new fetch() API emphasis </strong>. Ask for your data and you'll get a returned promise. Add in request de-duping and it still maintains its own caching and revalidating. <strong>getServerSideProps(), getStaticProps(), getInitialProps()</strong> are now deprecated in favor of the new data fetching/server side component approach. That front end data requesting paradigm needed a little bit of clean-up; I'm glad to see how easy they've now made it.  Pretty cool stuff. <br/><br/>
                <strong>&middot;</strong>  <strong>Reserved page names like loading.tsx, not-found.tsx, error.tsx </strong>. These pages display as these http events are encountered. Simple, easy to use and about time. <br /><br/>
                <strong>&middot;</strong> Layout and UI experts will really like Next.js'  <strong>Pages and Layouts </strong>, which now make site-wide layouts and sub-sites easier to format and manage. <br/><br/>
                <strong>&middot;</strong>  <strong>Lots and lots of little features </strong>, like SEO is now easier with version 13. Streaming page content progressively rendered and incrementally streamed as it becomes available to the requested page during hydration. <br/><br/>
                <strong>&middot;</strong>  <strong>Performance gains up-the-wazoo: </strong> Developers will enjoy the devex and deployments will also benefit from Turbopack's replacement for Webpack. 700x faster than Webpack (and even faster than Vite)!

            </p>

            

            <p className='mb-8'>My understanding is that almost all of these new features can be incrementally added to your project, and from my own experiences - so far so good. As I get into rolling out some of the more impressive features I'll post about them separately. </p>



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

export default LovingNextjs13