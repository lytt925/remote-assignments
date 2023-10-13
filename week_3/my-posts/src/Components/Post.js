import { useState } from 'react'
import styled from 'styled-components'


const Button = styled.button`
  background: #47C3BC;
  color: white;
  font-size: 0.8em;
  margin: 0.4em 0;
  padding: 0.4em 1em;
  border-radius: 5px;
  border: none;
`;

const PostDiv = styled.div`
    display: flex;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 50%;
    padding: 5px 30px;
    margin: 10px 0;
`

const PostH3Title = styled.h3`
    font-size: 1em;
    font-family: 'Roboto', sans-serif;
    margin: 0.8em 0 0.5em 0;
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