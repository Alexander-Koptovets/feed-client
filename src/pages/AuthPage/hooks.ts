import { useDispatch, useSelector } from "react-redux";
import { State } from "../../types";

import { setToken, setLoading } from "../../redux/slise";

import {URL} from "../../constants";

type AuthRequestProps = {
    username: string;
    password: string;
};

const authRequest = async (body: AuthRequestProps): Promise<any> => {
    const res = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    return await res.json();
};

export const useAuth = () => {
    const dispatch = useDispatch();

    const token = useSelector((state: State) => state.toolkit.account.token);

    const auth = (value: AuthRequestProps) => {
        dispatch(setLoading(true));
        authRequest(value).then((data) => {
            dispatch(setLoading(false));
            dispatch(setToken(data.token));
        });
    };

    return { token, auth };
};