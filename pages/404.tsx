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
        <title>Marco... POLO!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 gap-12 md:grid-cols-12'>
        <div className='col-span-1 sm:col-span-8'>
          <div className='p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg md:p-4'>
            <div className='grid grid-cols-1 gap-4 align-middle'>
              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-2 ">
                  <p className='p-2 pb-0 mb-0 font-semibold text-center text-md md:text-2xl sm:align-middle'>
                    I can't seem to find what you're looking for. 
                  </p>
              </div>
              
              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-8">
              <h2 className='text-md md:text-2xl p-2 pb-0 mb-2 font-semibold text-center sm:align-middle'>I checked everywhere....</h2>
              <br /><br /> 
              My other jacket, the pants I wore yesterday... I even jiggled the handle. <br /><br />
              I can't find the page you're looking for.<br /><br />

              Without further ado, here is your well earned <br /><br />
              <h2 className='p-2 pb-0 mb-0 font-semibold text-center text-md md:text-2xl sm:align-middle'>404 error message.</h2><br /><br />
              I feel outright misguided, turned around and devoid of a logical next step and have no idea what to do next. And while this may have gotten me through high school I doubt it's going to help you much now. There's a whole bunch of links on this page, give one of them a try.<br /><br />


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