import { useState, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Categories, Header } from "../components/";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

//import emailjs from 'emailjs-com';

const Contact: NextPage = ({}) => {
  const [userMessage, setUserMessage] = useState("How Can I Help?");
  const nameInputRef = useRef<any>();
  const emailInputRef = useRef<any>();
  const messageInputRef = useRef<any>();

  function sendEmail(e: any) {
    e.preventDefault();

    if (e.target.name == "") {
      setUserMessage("Better add a value in the name field!");
      return false;
    }
    if (e.target.email == "") {
      setUserMessage("Better add a value in the email field!");
      return false;
    }

    if (e.target.message == "") {
      setUserMessage("Better add a value in the message field!");
      return false;
    }

    let enteredName = nameInputRef.current.value;
    let enteredEmail = emailInputRef.current.value;
    let enteredMessage = messageInputRef.current.value;

    const reqBody = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    emailjs
      .sendForm(
        "service_ai3shen",
        "template_xf5cfim",
        e.target,
        "user_NzVHH8XcaOSaLyWhK0FwL"
      )
      .then(
        function (response) {
          //console.log('SUCCESS!', response.status, response.text);
          setUserMessage("Thank you, your message has been sent!");
          nameInputRef.current.value = "";
          emailInputRef.current.value = "";
          messageInputRef.current.value = "";
        },
        function (error) {
          //console.log('FAILED...', error);
        }
      );
  }

  return (
    <div className="container px-10 mx-auto mb-8">
      <Head>
        <title>cfsnap.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="col-span-1 sm:col-span-8">
          <div className="p-0 p-4 pb-12 mb-8 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-1 gap-4 align-middle">
              <div className="inline-block p-0 pb-0 mb-1 align-middle bg-white rounded-lg shadow-lg sm:p-2 ">
                <p className="p-2 pb-0 mb-0 font-semibold text-center text-md md:text-3xl sm:align-middle">
                  Contact
                </p>
              </div>
            </div>
          </div>

          <div className="p-0 p-4 pb-12 mb-8 bg-white rounded-lg shadow-lg">
            <div className="container">
              <div className="showcase-form card">
                {userMessage && <h2 className="p-2">{userMessage}</h2>}
                <form onSubmit={sendEmail}>
                  <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="form-control">
                      <input
                        type="text"
                        name="name"
                        placeholder="* Name"
                        required
                        ref={nameInputRef}
                        className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="email"
                        name="email"
                        placeholder="* Email"
                        required
                        ref={emailInputRef}
                        className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div className="form-control">
                      <textarea
                        name="message"
                        required
                        placeholder="* Enter your message here."
                        className="w-full h-40 p-4 text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
                        ref={messageInputRef}
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-8">
                    <input
                      type="submit"
                      value="Send"
                      className="inline-block px-8 py-3 text-lg font-medium text-white transition duration-500 bg-blue-600 rounded-full cursor-pointer ease hover:bg-indigo-900"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-4">
          <div className="relative sm:sticky top-8">
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
  );
};

export default Contact;
