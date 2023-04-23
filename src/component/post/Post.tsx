import React from 'react';

interface PostProps {
    content: string;
}

const Post: React.FC<PostProps> = ({ content }) => {
    return <div className="post">{content}</div>;
};

export default Post;