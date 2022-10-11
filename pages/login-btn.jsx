import { useSession, signIn, signOut } from "next-auth/react";


export default function Component() {
  const signOut1 = () =>{
    signOut();
    router.push("/");
  } 
//-----------------------
  const { data: session } = useSession()

  if (session) {
    console.log('session', session)
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut1()}>Sign out</button>
      </>
    )
  }

  //--------------------
  return (
    <div >
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      
    </div>
    
  )
}