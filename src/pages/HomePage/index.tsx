import React, { useEffect } from 'react';

import { usePosts } from './hooks';

import { Post } from '../../components/Post';

import './style.css';

export const HomePage = (): JSX.Element => {
    const { posts, postsRequest, isLoading } = usePosts();

    useEffect(() => {
        postsRequest();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className='home'>
            {posts?.map(({_id, author, title, content }) => (
               <Post key={_id} id={_id as string} title={title} author={author} content={content} />
            ))}
        </div>
    );
};