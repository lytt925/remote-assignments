import { useState } from 'react'
import styled from 'styled-components'


const Button = styled.button`
  background: #47C3BC;
  color: white;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 4px 0;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
`;

const PostDiv = styled.div`
    display: flex;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 50%;
    height: 84px;
    padding: 8px 28px;
    margin: 12px 0;
`

const PostH3Title = styled.h3`
    font-size: 1em;
    font-family: Roboto, Arial, sans-serif;
    line-height: 1em;
    margin: 12px 0 8px 0;
`

const handleClick = (setLikeCount, isLiked, setIsLiked) => {
    if (isLiked) {
        setIsLiked(false)
        setLikeCount((prev) => prev - 1)
    } else {
        setLikeCount((prev) => prev + 1)
        setIsLiked(true)
    }
}

const Post = ({ post }) => {
    const [likeCount, setLikeCount] = useState(post.likes);
    const [isLiked, setIsLiked] = useState(false);

    return (
        <PostDiv className='post'>
            <PostH3Title>{post.title}</PostH3Title>
            <Button onClick={() => handleClick(setLikeCount, isLiked, setIsLiked)}>👍 ({likeCount})</Button>
        </PostDiv >
    )
}

export default Post