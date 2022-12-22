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
    <div className="container mx-auto px-10 mb-8">

      <Head>
        <title>cfsnap.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
        <div className='sm:col-span-8 col-span-1'>
          <div className='bg-white shadow-lg rounded-lg p-0 md:p-4 pb-12 mb-8'>
            <div className='grid grid-cols-1 gap-4 align-middle'>
              <div className="inline-block align-middle bg-white shadow-lg rounded-lg p-0 sm:p-2 pb-0 mb-1 ">
                  <img src="/images/richLeachSelfie.webp" width="106" height="175" className='float-right' />
                  <p className='text-md md:text-2xl p-2 pb-0 mb-0 font-semibold text-center sm:align-middle'>Internet stuff, partially skewed points of view and shameless promotional hype.
                  <span className='text-sm p-4 pb-0 mb-0 text-center'><br />(...not necessarily in that order)</span></p>
                  
              </div>
              
              <div className="inline-block bg-white shadow-lg rounded-lg p-0 sm:p-8 pb-0 mb-1 align-middle">
                This is where blog post listings will occur.
              </div>
              
            </div>
          </div>
          
        </div>
        <div className='sm:col-span-4 col-span-1'>
            <div className='sm:sticky relative top-8'>

              <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
                  <h3 className="pb-4 mb-2 text-xl font-semibold border-b">Blog Categories</h3>
                  <Categories catProps={catData} />
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