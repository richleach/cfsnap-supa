import { useState, useEffect } from 'react'
//import {supabase} from '../../components/SupabaseClient'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//import Footer from '../../components/Footer'
import Link from 'next/link'
//import { Categories } from '../../components'
import moment from 'moment';
import { supabase } from './SupabaseClient'
import Categories from './Categories'
import Footer from './Footer'

const Blog: NextPage = () => {

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
console.log(postData)
  return (
    <div className="container px-10 mx-auto mb-8">

      <Head>
        <title>cfsnap.com: Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 gap-12 md:grid-cols-12'>
        <div className='col-span-1 sm:col-span-8'>
          <div className='p-4 pb-12 mb-8 bg-white rounded-lg shadow-lg'>
            <div className='grid grid-cols-1 gap-4 align-middle'>
              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-2 ">
                  
                  <p className='p-2 pb-0 mb-0 font-semibold text-center text-md md:text-3xl sm:align-middle'>Blog Posts</p>
                  
              </div>
              
              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-8">
                {
                    postData.map((post:any) => (
                        <div className="pt-3 pb-2 border-b sm:pl-2" key={post.id}>
                            <Link href={post.url}>
                                <div className='flex items-center justify-center w-full mb-4 lg:mb-2 lg:w-auto'>
                                    <span className="text-sm align-middle">{moment(post.created_at).format('MMM DD, YYYY')}</span>
                                </div> 

                                <h2 className='p-2 pb-0 mb-0 font-semibold text-center text-md md:text-2xl sm:align-middle'>{post.headline}</h2>
                                <p className="p-3">{post.summary}</p>
                                <div className='flex items-center justify-center w-full mb-4 lg:mb-2 lg:w-auto'>
                                    <span className='inline-block px-2 py-1 text-sm font-medium text-white bg-pink-600 rounded-full cursor-pointer'>Continue reading....</span>
                                </div>
                            </Link>
                        </div>
                    ))
                }
                {
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
                  
              </div>

            </div>
        </div>
        
      </div>
      
      <Footer />
      
    </div>
  )
}

export default Blog