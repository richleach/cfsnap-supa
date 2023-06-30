import { useState, useRef } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {Categories,  Header } from '../../components/'
import Footer from '../../components/Footer'


const Portfolio: NextPage = ({}) => {
    const [userMessage, setUserMessage] = useState(`Tell me about your next project, let's  talk today!`)
    const nameInputRef = useRef<any>()
    const emailInputRef = useRef<any>()
    const messageInputRef = useRef<any>()

      


  return (
    <div className="container px-10 mx-auto mb-8">

      <Head>
        <title>cfsnap.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 gap-12 md:grid-cols-12'>
        <div className='col-span-1 sm:col-span-8'>
          <div className='p-4 pb-12 mb-8 bg-white rounded-lg shadow-lg'> 
          <div className='grid grid-cols-1 gap-4 align-middle'>
              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-2 ">
            <p className='p-2 pb-0 mb-0 font-semibold text-center text-md md:text-3xl sm:align-middle'>Portfolio - Projects and Goodies</p>
          </div>
          </div>
          </div>

          <div className='p-4 pb-12 mb-8 bg-white rounded-lg shadow-lg'>
          <div className="container">
            <div className="showcase-form card">
            
            <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
                
                    <div className="form-control">
                        <Link href={`/portfolio/lotterySimulator`}>
                            <h2 className="font-semibold text-md md:text-2xl">Lottery Simulator</h2>
                        </Link>    
                    </div>
                    <div className="form-control">
                        <Link href={`/portfolio/lotterySimulator`}>
                            An oldie but goodie! Play the lottery (virtually, of course) 
                        </Link>
                    </div>
                    
            </div> 
                

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

export default Portfolio