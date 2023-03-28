import { useState, useEffect, Suspense } from 'react';
import {supabase} from '../../components/SupabaseClient';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Categories } from '../../components';
import moment from 'moment';
import { useRouter } from 'next/router';

const displayPosts: NextPage = () => {

  const [postData, setPostData] = useState<any>([]) 
  const [qcid, setQcid] = useState<any>([]) 
  const [catData, setCatData] = useState<any>([])
  const [loading, setLoading ] = useState<boolean>(false)
  const [pathToQ, setPathToQ] = useState<null | string>('')


  return (

            <Suspense fallback={<div>Loading categories....</div>}>
              <div className="inline-block align-middle bg-white shadow-lg rounded-lg p-0 sm:p-2 pb-0 mb-1 ">
                  <p className='text-md md:text-3xl p-2 pb-0 mb-0 font-semibold text-center sm:align-middle'>{catData[0]?.name} Posts</p>
              </div>
              
              <div className="inline-block bg-white shadow-lg rounded-lg p-0 sm:p-8 pb-0 mb-1 align-middle">
              
                { catData.length ? 
                  catData.map((d:any) => (
                      <div className="pb-2 pt-3  sm:pl-2 border-b" key={d.id}>

                        { d.pages.map((p:any) => (
                          <Link href={`/${p.url}`} key={p.url}>
                              <div className='flex items-center justify-center mb-4 lg:mb-2 w-full lg:w-auto'>
                                  <span className="align-middle text-sm">{moment(p.created_at).format('MMM DD, YYYY')}</span>
                              </div> 

                              <h2 className='text-md md:text-2xl p-2 pb-0 mb-0 font-semibold text-center sm:align-middle'>{p.headline}</h2>
                              <p className="p-3">{p.summary}</p>
                              <div className='flex items-center justify-center mb-4 lg:mb-2 w-full lg:w-auto'>
                                  <span className='inline-block bg-pink-600 text-sm font-medium rounded-full text-white px-2 py-1 cursor-pointer'>Continue reading....</span>
                              </div>
                          </Link>
                        ))}
                        
                      </div>
                  ))
                  : `There are currently no results, make another selection.`
                }
              
              </div>
              </Suspense>

  )
}

export default displayPosts