import Link from "next/link";
import { resolve } from "path";

const url = 'https://jsonplaceholder.typicode.com/posts';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

async function PostPage()
{
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(url);
    const data: Post[] = await response.json();
    console.log(data);

    return <section>
        {data.map((post)=> {
            return <Link key={post.id} className='hover:text-amber-800' href={`/post/${post.id}`}><h2 className="mb-4">{post.id} {post.title} {post.body}</h2></Link>
        })}
    </section>
}

export default PostPage;