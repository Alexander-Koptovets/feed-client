import React, {useState} from "react";

import { useAuth } from './hooks';

import { Box, TextField, Button, Typography } from '@mui/material';

import './style.css';

export const AuthPage = (): JSX.Element => {
    const { token, auth } = useAuth();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onAuth = (): void => {
        const body = { username, password };
        auth(body);
    };

    return (
        <Box className='wrapper'>
            <div className='fields'>
                <TextField
                    required
                    id="username"
                    label="Required"
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    required
                    id="password"
                    label="Required"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button
                variant="contained"
                onClick={() => onAuth()}
                disabled={!password || ! username}
            >
                Log In
            </Button>
            {token && <Typography>Success</Typography>}
        </Box>
    );
};