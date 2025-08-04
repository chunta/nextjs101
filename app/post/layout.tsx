function PostLayout({children}:{children:React.ReactNode})
{
    return (
        <div>
        <header className="text-4xl mb-4">
            Post Title
        </header>
        {children}
        </div>
    )
}

export default PostLayout;