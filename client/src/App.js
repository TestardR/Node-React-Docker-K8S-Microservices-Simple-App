import React from 'react'
import Postcreate from './components/post/Postcreate'
import PostList from './components/post/PostList'

const App = () => {
    return (
        <div className="container">
            <h1>Create Post</h1>
            <Postcreate />
            <hr />
            <h1>Posts</h1>
            <PostList />
        </div>
    )
}

export default App
