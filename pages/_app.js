import "../styles/globals.css";
import Layout from "../components/Layout/Layout.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { SessionProvider } from "next-auth/react"


export default function MyApp({Component, pageProps: { session, ...pageProps },})
 {
  return (
    <SessionProvider session={session}>
      <Layout>
      <ToastContainer position="top-center"  autoClose={3000} closeOnClick theme="light" pauseOnHover={false}/>
      <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}




// function MyApp({ Component, pageProps }) {
//   return (
   
//     <Layout>
      
//       <ToastContainer position="top-center"  autoClose={3000} closeOnClick theme="light" pauseOnHover={false}/>
//       <Component {...pageProps} />
      
//     </Layout>
//   );
// }

// export default MyApp;
