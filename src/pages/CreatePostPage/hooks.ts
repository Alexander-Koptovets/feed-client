import { useDispatch, useSelector } from "react-redux";
import { State, Post } from "../../types";

import { setPosts, setLoading } from "../../redux/slise";

import { URL } from "../../constants";

const createPostRequest = async (token: string, body: Post): Promise<any> => {
    const res = await fetch(`${URL}/posts`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    });

    return await res.json();
};

export const useCreatePost = () => {
    const dispatch = useDispatch();

    const createPost = (token: string, body: Post) => {
        dispatch(setLoading(true));

        createPostRequest(token, body).then(() => {
            dispatch(setLoading(false));
        });
    };

    return { createPost };
};