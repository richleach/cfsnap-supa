import { useState, useEffect } from 'react'
import {supabase} from '../components/SupabaseClient'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Categories } from '../components'
import moment from 'moment';

const Home: NextPage = () => {
  
  const [catData, setCatData] = useState<any>([]) 
  const [postData, setPostData] = useState<any>([]) 
  const [loading, setLoading ] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      const { data, error} = await supabase.from('pages').select(`id, url, summary, created_at, headline`).order('created_at', {ascending: false});
      setPostData(data)
      //console.log({data, error});
      setLoading(false)
    }
    getData();
    
  }, [])

  //console.log(postData)

  return (
    <div className="container px-10 mx-auto mb-8">

      <Head>
        <title>cfsnap.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 gap-12 md:grid-cols-12'>
        <div className='col-span-1 sm:col-span-8'>
          <div className='p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg md:p-4'>
            <div className='grid grid-cols-1 gap-4 align-middle'>
              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-2 ">
                  <img src="/images/richLeachSelfie.webp" width="106" height="175" className='float-left pr-7' />
                  <p className='p-2 pb-0 mb-0 font-semibold text-left text-md md:text-2xl sm:align-middle'>Rich Leach</p><br />
                  <p className='font-semibold'>Some days you get the bear.<br /> Other days, the bear gets you.</p><br />
                  <p className='border-t pt-2'>
                  I'm a senior software developer and technology junkie who's been jiggling the handle of various web technologies since it all started back in the early 90's.<br /> I've tried my hand at many different schools of thought and technologies - sometimes I was ahead of the curve and sometimes I'd end up being a little late to the party (don't knock me for this - it got me through high school.) {/*I've learned so much over the years... and as much of what not to do as anything else.  I was formally educated in various higher learning institutions yet the school of hard knocks continues to exert its influences on me. */}
                  </p><br />
                  
              </div>
              
              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-8">
              <h2 className='text-md md:text-2xl p-2 pb-0 mb-2 font-semibold text-center sm:align-middle  border-b'>Recent Postings...</h2> 
              {
                    postData.map((post:any) => (
                        <div className="pb-2 pt-3  sm:pl-2 border-b" key={post.id}>
                            <Link href={post.url}>
                                <div className='flex items-center justify-center mb-4 lg:mb-2 w-full lg:w-auto'>
                                    <span className="align-middle text-sm">{moment(post.created_at).format('MMM DD, YYYY')}</span>
                                </div> 

                                <h2 className='text-md md:text-2xl p-2 pb-0 mb-0 font-semibold text-center sm:align-middle'>{post.headline}</h2>
                                <p className="p-3">{post.summary}</p>
                                <div className='flex items-center justify-center mb-4 lg:mb-2 w-full lg:w-auto'>
                                    <span className='inline-block bg-pink-600 text-sm font-medium rounded-full text-white px-2 py-1 cursor-pointer'>Continue reading....</span>
                                </div>
                            </Link>
                        </div>
                    ))
                }

              </div>
              
            </div>
          </div>
          
        </div>
        <div className='col-span-1 sm:col-span-4'>
            <div className='relative sm:sticky top-8'>

              <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
                  <h3 className="pb-4 mb-2 text-xl font-semibold border-b">Blog Categories</h3>
                  <Categories />
                  {/* 
                  {
                    catData.map((category:any) => (
                      <p key={category.id}>
                        <Link href={category.url}>{category.name}</Link>
                      </p>
                    ))
                  } 
                */}
              </div>

            </div>
        </div>
        
      </div>
      
      <Footer />
      
    </div>
  )
}

export default Home