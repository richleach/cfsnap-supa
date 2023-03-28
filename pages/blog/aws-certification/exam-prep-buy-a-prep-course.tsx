import React from 'react'
import { Categories, Comments, CommentsForm, Footer } from '../../../components';
import Link from 'next/link'
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'

 const ExamPrepBuyAPrepCourse = () => {
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
            <h1 className="mb-8 text-3xl font-semibold text-center border-b cursor-pointer">AWS Cloud Practitioner Exam Prep: Prep Courses <br /><span className="align-middle text-sm">Sep 16, 2022</span><br /></h1>
            
            <div className="relative flex justify-center overflow-hidden mb-7 place-items-center border-b">
                <img src="/images/awsPreparation.png" alt="AWS Certified Cloud Practitioner prep courses" className="rounded-t-lg lg:rounded-lg"  />
            </div>
          
          {/* POST STARTS HERE */}
          
            <p className='mb-8'>I recently decided to pursue my AWS Cloud Practitioner Certification. My industry contacts (all of them with firsthand knowledge of this test) said the same thing about this exam: "It's a mile wide but an inch deep". When I registered for the exam Amazon actually provided a number of different resources to help prepare to take the test. There were a few different study guides, some links to online articles and some practice tests.  Would that be enough to help me pass the exam? After all I'm a software developer - not an Ops person and while my familiarity with some AWS products was actually pretty good, when I first looked at the complete AWS product offering I realized I had never heard of most of the apps that Amazon makes available. Did I need to buy a study guide? Training course? Tutor? </p>

            <p className='mb-8'>Straight up, no BS - if you have resources for only one thing to prepare for Cloud Practitioner then invest in as many practice tests as you can. All of those tests that I took offered me the correct answer when mine was incorrect - each wrong question I answered revealed not only the correct answer but an explanation as to why. I was immediately given the correct feedback providing me with a genuine learning moment.</p>

            <p className='mb-8'>Besides the practice tests I eventually decided on buying a course from my friend Max. <Link href='https://www.udemy.com/course/aws-cloud-practitioner-complete-aws-introduction/'>https://www.udemy.com/course/aws-cloud-practitioner-complete-aws-introduction/</Link> . It was inexpensive but extremely thorough as Max always is with all of his course content. The price was even better when I found the discount coupon for $50 off the cost of the exam from Amazon.</p>

            <p className='mb-8'>There are many resources out there to help you pass your AWS Cloud Practitioner exam so don't just take my experiences for granted. Yes I passed on my first attempt but I was pretty up for taking the test and wanted to get on with it. </p>



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

export default ExamPrepBuyAPrepCourse