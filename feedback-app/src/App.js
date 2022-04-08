function App() {
    const title = "Blog post"
    const body = " This is a blog post"
    const comments = [
        {id: 1, text: 'comment 1'},
        {id: 2, text: 'comment 2'},
        {id: 3, text: 'comment 3'},
    ]

    return (
        <div className="container">
            <h2>{title}</h2>
            <p>{body}</p>
            <div className="comments">
                <h3>Comments {comments.length}</h3>
                <ul>
                    {comments.map((comment)=> (
                         <li key={comment.id}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App