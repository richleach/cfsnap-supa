import { useState, useEffect } from 'react'
import {supabase} from '../components/SupabaseClient'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Categories } from '../components'
import moment from 'moment';

const fourOhFour: NextPage = () => {

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
        <title>Server troubles....</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 gap-12 md:grid-cols-12'>
        <div className='col-span-1 sm:col-span-8'>
          <div className='p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg md:p-4'>
            <div className='grid grid-cols-1 gap-4 align-middle'>
              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-2 ">
                  <p className='p-2 pb-0 mb-0 font-semibold text-center text-md md:text-2xl sm:align-middle'>
                    uh boy....
                  </p>
              </div>
              
              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-8">
              <h2 className='text-md md:text-2xl p-2 pb-0 mb-2 font-semibold text-center sm:align-middle'>The server choked.</h2>
              <br /><br /> 
              Cough... cough.... <br /><br />

              <h2 className='p-2 pb-0 mb-0 font-semibold text-center text-md md:text-2xl sm:align-middle'>500 error message.</h2><br /><br />
              
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

export default fourOhFour