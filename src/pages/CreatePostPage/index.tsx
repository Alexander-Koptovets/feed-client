import React, {useState} from 'react';

import { useCreatePost } from './hooks';
import { useAuth } from "../AuthPage/hooks";

import {Box, Button, TextField} from "@mui/material";

import './style.css';

export const CreatePostPage = (): JSX.Element => {
    const { createPost } = useCreatePost();
    const { token } = useAuth();

    const [author, setAuthor] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    const isDisable = !author || !title || !content || !token;

    const onCreatePost = (): void => {
        const body = { author, title, content };
        createPost(token, body);

        setAuthor('');
        setTitle('');
        setContent('');
    };

    return (
        <Box className='wrapper'>
            <div className='fields'>
                <TextField
                    required
                    id="author"
                    label="Required"
                    placeholder='Author'
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <TextField
                    required
                    id="title"
                    label="Required"
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    id="content"
                    label="Multiline"
                    multiline
                    maxRows={10}
                    placeholder='Content'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <Button
                variant="contained"
                onClick={() => onCreatePost()}
                disabled={isDisable}
            >
                Create
            </Button>
        </Box>
    );
};