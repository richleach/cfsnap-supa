import React from 'react'
import { Categories, Comments, CommentsForm, Footer } from '../../../components';
import Link from 'next/link'
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

 const PassedAwsCloudPractitionerCertification = () => {
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
            <h1 className="mb-8 text-3xl font-semibold text-center border-b cursor-pointer">Passed! I'm Now AWS Cloud Practitioner Certified <br /><span className="align-middle text-sm">Sep 29, 2022</span><br /></h1>
            
            <div className="relative flex justify-center overflow-hidden mb-7 place-items-center border-b">
                <img src="/images/AWS-Certified_Cloud-Practitioner.png" alt="AWS Certified Cloud Practitioner" className="rounded-t-lg lg:rounded-lg"  />
            </div>
          
          {/* POST STARTS HERE */}
          
            <p className='mb-8'>I recently passed my AWS Cloud Practitioner Certification exam. The hardest part?</p>

            <p className='mb-8'><strong>Actually TAKING the test.</strong> Be it in-person or online you need an appointment to take the exam so that you actually have a live human proctoring you (availability could take a few days....)</p>

            <p className='mb-8'>Before you begin the test:</p>

            <p className='mb-8'>· Download the test center's own browser which, when open will lock you out of all else on your computer. It'll watch your keystrokes, mouse movements, track your eyeballs (via your web cam which you'll need to activate) and read your signs should you attempt to steal second base.</p>

            <p className='mb-8'>· Open the chat window and have a rather serious chit-chat with a proctor. This person could be around the corner or around the world, and they won't tell you so don't ask em'.</p>

            <p className='mb-8'>· Consent to everything they ask of you, acknowledging that you'll give up your first born child and next year's first round draft pick.</p>

            <p className='mb-8'>· Now take your laptop and pan around the room with your web cam (good luck taking the test with a desktop/server computer). Close all doors, windows. Husband/wife/co-worker/friend/dog in the room with you? OUT. If they hear/detect any other voices in the room with you (or in your head) you fail. Knock at the door during your test? Ignore it. Phone/stereo/TV gets turned off.</p>

            <p className='mb-8'>· Put your laptop under your desk, let's see under your desk, under your chair, show me your ears/arms.... Remove your bracelet and your watch.</p>

            <p className='mb-8'>· Proctor: What's up with your ear, is that a prosthetic? Me: No, I had some cancer removed, so it looks a little "different" (yes, they questioned the appearance of my post-op-slightly-deformed ear lobe).</p>

            <p className='mb-8'>· Don't speak while taking the test - and don't mouth the questions either, or you could fail.</p>

            <p className='mb-8'>· Don't record anything.</p>

            <p className='mb-8'>· Don't eat, drink, smoke or chew gum during the exam.</p>

            <p className='mb-8'>Besides that? Just take the test. You can flag each question if you feel there's an error or problem (but do you really wanna piss off the mighty-and-powerfall-Oz listening in on the can on the other end of the string?) Take your time, skip a question if it stumps you and go back to it at the end. Use the momentum of what you know to carry you through the bulk of the exam, you'll finish sooner that way.</p>

            <p className='mb-8'><strong>Cool Exam Tip/Trick</strong></p>

            <p className='mb-8'>You won't know/remember every single product that AWS offers, so remember their clever marketing/naming scheme. If they catch you off guard and ask you about something you don't know, like their new offering that monitors the internet traffic to your fish tank then the name will likely include "FishTank Monitor", "FishTank Watcher" or "FishTank Guard". Conversely "FishTank Lake" or "FishTank Warehouse" likely refers to some sort of database tool.... You'll be able to deduce a lot of AWS' stuff just by how they named it.</p>

            <p className='mb-8'>They'll tell you if you passed/failed immediately but it won't be official, apparently someone at Big-Brother-Central-Test-Command has to actually review the footage of you taking the test. If you didn't do anything (like sneeze or fart) and you got a high enough score, you'll probably pass and they'll send you an official email after a few hours.</p>

            <p className='mb-8'>Didn't pass it the first time? Don't worry, bone up on what you got wrong and take it again. And it should go without saying, there are plenty of practice tests out on the interwebs, and you should have at least 2 different practice tests under your belt before you square off with "proctor-zilla".</p>

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

export default PassedAwsCloudPractitionerCertification