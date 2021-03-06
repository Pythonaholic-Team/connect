import Link from 'next/link'
export default function Header(props) {
  return (
    <>
      <div className="bg-purple-600 ">  
      
          <div className="flex items-center justify-between py-6 md:justify-start ">
            <Link href='/'>
            <img src="logo.png" className="h-24 ml-20"/>
            </Link>
          

 
            <div className="items-center justify-end hidden pr-10 md:flex md:flex-1 lg:w-0">
                
            </div>
          </div>
      
      </div>
      </>
      )
}

