import { useState, useEffect } from 'react'
import {supabase} from '../../components/SupabaseClient'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { Categories } from '../../components'
import moment from 'moment';

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
    <div className="container mx-auto px-10 mb-8">

      <Head>
        <title>cfsnap.com: Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
        <div className='sm:col-span-8 col-span-1'>
          <div className='bg-white shadow-lg rounded-lg p-4 pb-12 mb-8'>
            <div className='grid grid-cols-1 gap-4 align-middle'>
              <div className="inline-block align-middle bg-white shadow-lg rounded-lg p-0 sm:p-2 pb-0 mb-1 ">
                  
                  <p className='text-md md:text-3xl p-2 pb-0 mb-0 font-semibold text-center sm:align-middle'>Blog Posts</p>
                  
              </div>
              
              <div className="inline-block bg-white shadow-lg rounded-lg p-0 sm:p-8 pb-0 mb-1 align-middle">
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
                {
        }
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

export default Blog