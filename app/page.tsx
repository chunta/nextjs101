import Link from "next/link";

function HomePage() {
  return (<div>
    <h1 className='text-7xl'>Home Pfassge</h1>
    <Link href='/about' className='text-blue-500 inline-block mt-8'>About</Link>
    </div>)
}

export default HomePage;