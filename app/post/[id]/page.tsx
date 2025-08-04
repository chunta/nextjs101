import islandPic00 from '@/images/pic00.jpg';
import Image from 'next/image';

function page({params}:{params:{id:string}})
{
return (
    <div><h1 className='text-4xl'>post id:{params.id}</h1>
    <section className='flex gap-x-4 mt-4'>
             <div>
          <Image src={islandPic00} alt="island00" width={400} height={300} />
        </div>
    </section>
    </div>
)
}

export default page