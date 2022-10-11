
import Link from 'next/link'
function Navbar() {
 
  return (
    <nav >
      <ul >
        <li>
          <Link href='/login-btn'>
            <a>Home</a>
          </Link>
        </li>
        
        <li>
          <Link href='/'>
            <a>All Invoices</a>
          </Link>
        </li>


        <li>
          <Link href='/add-new'>
            <a>add-new</a>
          </Link>
        </li>

        
        

      
          
      </ul>
    </nav>
  )
}

export default Navbar