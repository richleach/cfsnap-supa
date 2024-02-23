import React from "react";
import {
  Categories,
  Comments,
  CommentsForm,
  Footer,
} from "../../../components";
import Link from "next/link";
import {
  useUser,
  useSupabaseClient,
  useSession,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import Head from "next/head";

const HowCssSpecificityWorks = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const session = useSession();
  const router = useRouter();

  const code = `
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>CSS Testing</title>
        <style>
            #myItem {
                color:blue;
                }
            div > nav > ul > li {
                color:red;
                }
        </style>
    </head>
    <body>
        <div>
            <nav>
                <ul>
                    <li id="myItem">My List Item.</li>
                </ul>
            </nav>
        </div>
    </body>
</html>
      `;

  return (
    <>
      <Head>
        <title>cfsnap.com - web dev goodness</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="CSS Specificity will help you to better target and edit your DOM objects."
        />
        <meta
          name="keywords"
          content="CSS Specificity, targeting CSS classes, determining how to target CSS code"
        />
      </Head>
      <div className="container px-10 mx-auto mb-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <div className="p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg md:p-4">
              <h1 className="mb-8 text-3xl font-semibold text-center border-b cursor-pointer">
                How CSS Specificity Works <br />
                <span className="text-sm align-middle">Sep 29, 2022</span>
                <br />
              </h1>

              <div className="relative flex justify-center pb-4 overflow-hidden border-b mb-7 place-items-center">
                <img
                  src="/images/Css-specificity.png"
                  alt="How CSS Specificity Works"
                  className="rounded-t-lg lg:rounded-lg"
                />
              </div>

              {/* POST STARTS HERE */}

              <p className="mb-8">
                All of the parts and pieces of CSS (selectors and declarations)
                don't mean much unless you target them in the right manner...
                enter CSS specificity.
              </p>

              <p className="mb-8">
                <strong>How It Works</strong> <br />
                Simply put, CSS specificity allows you target an element in your
                DOM. Every CSS selector gets a 3 digit score:
                <br />
                <br />
                <span className="pl-5">
                  <strong>&middot;</strong> If the selector contains an ID
                  reference (#myItem in the example below) then digit #1 of your
                  score gets a +1.{" "}
                </span>
                <br />
                <span className="pl-5">
                  <strong>&middot;</strong> If the selector contains a class,
                  pseudo-class or attribute then digit #2 of your score gets a
                  +1 for each occurrence.
                </span>{" "}
                <br />
                <span className="pl-5">
                  <strong>&middot;</strong> It the selector contains an element
                  or psuedo-element then give digit #3 of your score a +1 for
                  each occurrence.
                </span>{" "}
                <br />
              </p>

              <p className="mb-8">
                EXAMPLE: Let's say you're trying to target a list element in
                your HTML but you know in the world of CSS there's always a
                number of different ways to use selectors to style your DOM
                target. Using the above scoring method you could end up with 2
                different scores, but the higher score would be more specific,
                and consequently applied to your DOM target.
              </p>

              <pre>
                <code>{code}</code>
              </pre>

              <p className="mb-8">
                The 2 different ways used in the CSS to select and style the
                text color in the &lt;li &gt; are both valid, but given the
                scores of each selector:
              </p>

              <p className="mb-8">
                #myItem has a score of 100 (1 id value, 0 classes, 0 elements)
              </p>
              <p className="mb-8">
                div &gt; nav &gt; ul &gt; li has a score of 004 (0 id values, 0
                classes, 4 elements)
              </p>

              <p className="mb-8">
                #myItem wins and is more specific, and the text is colored blue.
                (Give it a try, copy and paste and even play with the order of
                the selectors (move #myItem to the bottom of the selector list-
                the text will still be blue)).
              </p>

              {/* POST ENDS HERE */}
            </div>
            <div className="p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg md:p-4">
              <div className="container">
                <div className="grid showcase-form card place-items-center">
                  {/* if logged in user then let them comment, else present the login link */}
                  {!user ? (
                    <Link href={`/login/`}>
                      <span className="mt-2 ml-4 font-semibold text-blue-900 align-middle cursor-pointer md:float-right">
                        Want to leave a comment? Login/register!
                      </span>
                    </Link>
                  ) : (
                    <CommentsForm session={session} />
                  )}
                </div>
              </div>
            </div>

            <div className="p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg md:p-4">
              <div className="container">
                <div className="grid showcase-form card place-items-left">
                  <Comments User={user} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky">
              <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
                <h3 className="pb-4 mb-2 text-xl font-semibold border-b">
                  Blog Categories
                </h3>
                <Categories />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HowCssSpecificityWorks;
