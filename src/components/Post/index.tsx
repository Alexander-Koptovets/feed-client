import React from 'react';

import { usePosts } from '../../pages/HomePage/hooks';
import { useAuth } from "../../pages/AuthPage/hooks";

import { Card, CardActions, CardContent, Button, Typography } from '@mui/material';

import './style.css';

type PostProps = {
    id: string;
    title: string;
    author: string;
    content: string;
};

export const Post = ({ id, title, author, content }: PostProps): JSX.Element => {
    const { deletePost } = usePosts();
    const { token } = useAuth();

    const onDelete = (): void => {
        const query = { id };
        deletePost(query, token);
    };

    return (
        <Card className='post'>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {author}
                </Typography>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {content}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => onDelete()}>Delete</Button>
            </CardActions>
        </Card>
    );
};