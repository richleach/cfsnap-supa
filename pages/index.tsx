import { useState, useEffect } from "react";
import { supabase } from "../components/SupabaseClient";
import type { NextPage, Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import { Categories } from "../components";
import moment from "moment";

/* export const metadata: Metadata = {
  title: "CFSNAP.com - web dev goodness",
  description:
    "Solving real-world problems with Next.js, Typescript, Supabase, Postgres, TailwindCSS",
}; */

const Home: NextPage = () => {
  const [catData, setCatData] = useState<any>([]);
  const [postData, setPostData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase
        .from("pages")
        .select(`id, url, summary, created_at, headline`)
        .order("created_at", { ascending: false });
      setPostData(data);
      //console.log({data, error});
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="container px-10 mx-auto mb-8">
      <Head>
        <title>cfsnap.com - web dev goodness</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Solving real-world problems with Next.js, Typescript, Supabase, Postgres, TailwindCSS"
        />
        <meta
          name="keywords"
          content="Next.js, CSS, Tailwind, TailwindCSS, Supabase, Postgres"
        />
      </Head>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-12">
        <div className="col-span-1 sm:col-span-12">
          {/* start */}
          <div className="gap-4 text-black md:grid md:grid-cols-5 md:grid-rows-6">
            <div className="flex items-center justify-center mb-4 bg-white border-2 rounded-lg md:col-span-3 md:row-span-6 border-blue-950 md:mb-0">
              <div className="m-2 w-max lg:max-w-full lg:flex">
                <div
                  className="flex-none h-48 overflow-hidden text-center rounded-l lg:h-auto lg:w-48"
                  style={{
                    backgroundImage:
                      "url('../images/richIphoneImageCartoon.png')",
                    backgroundSize: "cover",
                  }}
                  title="Its for you..."
                ></div>
                <div className="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
                  <div className="mb-8">
                    <p className="flex items-center text-sm text-gray-600">
                      <img src="../images/lilDonut.png" /> &nbsp; "I never met a
                      glazed donut I didn't like."
                    </p>
                    <div className="mt-2 mb-2 text-xl font-bold text-gray-900">
                      Rich Leach
                    </div>
                    <p className="text-base text-gray-700">
                      &middot; Software Developer
                      <br />
                      &middot; Tech Junkie
                      <br />
                      &middot; Handle Jiggler
                      <br />
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 mr-4 rounded-full"
                      src="../images/nextjs.png"
                      alt="Next.js"
                    />
                    <div className="text-sm">
                      <p className="leading-none text-gray-900">
                        Next.js / React / Payload CMS
                      </p>
                      <p className="text-gray-600">
                        AWS Certified Cloud Practitioner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-start-4 p-2 mb-4 text-black border-2 rounded-lg md:col-span-2 md:row-span-2 border-blue-950 md:mb-0"
              style={{
                backgroundImage: 'url("../images/lotteryImage.png")',
                backgroundSize: "cover",
              }}
            >
              <Link href="/portfolio/lotterySimulator">
                <h5 className="mt-3 font-bold text-center">
                  It's like playing with someone else's money!
                </h5>
                <h4 className="mt-2 text-5xl leading-10 text-center">
                  Lottery Simulator
                </h4>
                <div
                  className="flex justify-center"
                  style={{ marginTop: "55px" }}
                >
                  <button className="px-4 py-1 text-2xl font-semibold text-white bg-pink-600 border border-white rounded-full hover:text-black hover:bg-white-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
                    Play Now!
                  </button>
                </div>
              </Link>
            </div>

            <div className="col-start-4 row-start-3 mb-4 bg-white border-2 rounded-lg md:mb-1 md:col-span-2 md:row-span-2 border-blue-950">
              <h5 className="mt-3 font-bold text-center">Blog Categories</h5>
              <h5 className="ml-2 text-xl">
                &middot;{" "}
                <Link href="/blog/web-development">Web Development</Link> <br />
                &middot; <Link href="/blog/css">CSS</Link> <br />
                &middot;{" "}
                <Link href="/blog/aws-certification">
                  AWS Certification
                </Link>{" "}
                <br />
                &middot; <Link href="/blog/code">Code</Link> <br />
                &middot; <Link href="/blog/nextjs">Next.js</Link> <br />
              </h5>
            </div>
            <div className="col-start-4 row-start-5 bg-white border-2 rounded-lg md:col-span-2 md:row-span-2 border-blue-950">
              <h5 className="mt-3 font-bold text-center">
                Will Work For 1's and 0's
              </h5>
              <h4 className="mt-2 text-xl leading-8 text-center">
                Need reliable and capable software expertise?
                <br />
                Front end? Database? <br />
                From brand new projects to maintenance mode....
                <br />
              </h4>
              <div
                className="flex justify-center"
                style={{ marginTop: "10px", marginBottom: "20px" }}
              >
                <Link href="/contact">
                  <button className="px-4 py-1 text-2xl font-semibold text-white bg-pink-600 border border-white rounded-full hover:text-black hover:bg-white-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
                    Let's Talk...
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* end */}

          <div
            className="pt-4 pb-12 mt-4 mb-8 bg-white rounded-lg md:p-4"
            style={{ borderWidth: "2px", borderColor: "#172554" }}
          >
            <div className="grid grid-cols-1 gap-4 align-middle">
              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-8">
                <h2 className="p-2 pb-0 mb-2 font-semibold text-center border-b text-md md:text-3xl sm:align-middle">
                  Recent Postings...
                </h2>
                {postData.map((post: any) => (
                  <div className="pt-3 pb-2 border-b sm:pl-2" key={post.id}>
                    <Link href={post.url}>
                      <div
                        className="flex w-full pl-2 mb-4 text-sm lg:mb-2 lg:w-auto"
                        style={{ marginBottom: "-4px" }}
                      >
                        {moment(post.created_at).format("MMM DD, YYYY")}
                      </div>

                      <h2 className="p-2 pb-0 mb-0 font-semibold text-left text-md md:text-2xl sm:align-middle">
                        {post.headline}
                      </h2>
                      <p className="p-3">{post.summary}</p>
                      <div className="flex items-center justify-center w-full mb-4 lg:mb-2 lg:w-auto">
                        <span className="inline-block px-2 py-1 text-sm font-medium text-white bg-pink-600 rounded-full cursor-pointer">
                          Continue reading....
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
