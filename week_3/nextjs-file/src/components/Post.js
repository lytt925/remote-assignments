import { useState } from 'react'
import parse from 'html-react-parser';

const Post = ({ post }) => {
    const [likeCount, setLikeCount] = useState(post.likes);
    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
        if (isLiked) {
            setIsLiked(false);
            setLikeCount((prev) => prev - 1);
        } else {
            setLikeCount((prev) => prev + 1);
            setIsLiked(true);
        }
    };

    return (
        <div className="post flex border border-gray-300 rounded flex-col justify-center items-start w-1/2 py-2 px-7 mt-3 mb-3 box-content">
            <h3 className="text-base font-['Roboto'] leading-6 mb-2 mt-3">{parse(post.title)}</h3>
            <button
                className="bg-[#47C3BC] text-white text-sm my-1 px-4 py-2 rounded border-none font-['Arial'] leading-5"
                type="button"
                onClick={handleClick}
            >
                👍 (
                {likeCount}
                )
            </button>
        </div>
    );
};

export default Post;