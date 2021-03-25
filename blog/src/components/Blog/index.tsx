import React, { FC, ReactElement } from 'react';
import { SPost, SPostTitle, SPostContent } from '../../styles';

export interface Post {
    title: string;
    content?: string;
}

export interface BlogProps {
    posts: Array<Post>;
}

const Blog: FC<BlogProps> = ({posts}: BlogProps): ReactElement => (
    <>
        {posts.map((post) => (
            <SPost key={post.title}>
                <SPostTitle>{post.title}</SPostTitle>
                <SPostContent>{post.content}</SPostContent>
            </SPost>
        ))}
    </>
)

export default Blog;
