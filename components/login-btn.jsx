// import { useSession, signIn, signOut } from "next-auth/react";
// import {useRouter} from "next/router";



// export default function Component() {
//   const router=useRouter()
//   const signOut1 = () =>{
//     signOut();
//     router.push("/");
//   } 
// //-----------------------
//   const { data: session } = useSession()

//   if (session) {
//     console.log('session', session)
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut1()}>Sign out</button>
//       </>
//     )
//   }

//   //--------------------
//   return (
//     <div >
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
      
//     </div>
    
//   )
// }