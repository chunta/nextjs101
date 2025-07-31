import Link from "next/link";

function InfoPage() {
  return (<div>
    <h1 className='text-7xl'>Info Page</h1>
    <Link href='/info/contact' className='text-blue-500 inline-block mt-8'>Contact</Link>
    </div>)
}

export default InfoPage;