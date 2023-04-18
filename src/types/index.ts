export type State = {
    toolkit: Toolkit;
};

export type Post = {
    _id?: string;
    title: string;
    author: string;
    content: string;
};

export type Account = {
    token: string;
};

export type Toolkit = {
    account: Account;
    posts: Array<Post>;
    isLoading: boolean;
};