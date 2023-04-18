import { useDispatch, useSelector } from "react-redux";
import { State } from "../../types";

import { setPosts, setLoading } from "../../redux/slise";

import { URL } from "../../constants";

type Query = {
    id: string;
};

const request = async (): Promise<any> => {
    const res = await fetch(`${URL}/posts`, {
        method: 'GET',
        mode: 'no-cors',
    });

    return await res.json();
};

const deletePostRequest = async (query: Query, token: string): Promise<any> => {
    const res = await fetch(URL + new URLSearchParams(query), {
        method: 'DELETE',
        mode: 'no-cors',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return await res.json();
};

export const usePosts = () => {
    const dispatch = useDispatch();

    const posts = useSelector((state: State) => state.toolkit.posts);

    const isLoading = useSelector((state: State) => state.toolkit.isLoading);

    const postsRequest = () => {
        dispatch(setLoading(true));

        request().then((data) => {
            dispatch(setLoading(false));
            dispatch(setPosts(data));
        });
    };

    const deletePost = (query: Query, token: string) => {
        dispatch(setLoading(true));

        deletePostRequest(query, token).then(() => {
            dispatch(setLoading(false));
        });
    };

    return { posts, postsRequest, isLoading, deletePost };
};