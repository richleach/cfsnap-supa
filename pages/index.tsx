import { useState, useEffect } from 'react'
import {supabase} from '../components/SupabaseClient'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Link from 'next/link'
import { Categories } from '../components'

const Home: NextPage = () => {

  const [catData, setCatData] = useState<any>([]) 
  const [loading, setLoading ] = useState<boolean>(false)

  useEffect(() => {
    const getData = async () => {
      const { data, error} = await supabase.from("categories").select().order('name',{ascending:true});
      setCatData(data)
      //console.log({data, error});
      setLoading(false)
    }
    getData();
    
  }, [])

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
                  <img src="/images/richLeachSelfie.webp" width="106" height="175" className='float-right' />
                  <p className='p-2 pb-0 mb-0 font-semibold text-center text-md md:text-2xl sm:align-middle'>Internet stuff, partially skewed points of view and shameless promotional hype.
                  <span className='p-4 pb-0 mb-0 text-sm text-center'><br />(...not necessarily in that order)</span></p>
                  
              </div>
              
              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-8">
                This is where blog post listings will occur.
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