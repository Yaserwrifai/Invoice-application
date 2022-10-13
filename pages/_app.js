import "../styles/globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { SessionProvider } from "next-auth/react"
import Navbar from "./Navbar";


import Layout from '../components/layout/layout.js';



export default function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    <SessionProvider session={session}>
      {/* <Navbar /> */}
      <Layout>
        <ToastContainer position="top-center" autoClose={3000} closeOnClick theme="light" pauseOnHover={false} />
        <Component {...pageProps} />

      </Layout>
    </SessionProvider>
  )
}






