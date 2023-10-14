import { useEffect, useState } from 'react';
import Post from "./Components/Post";
import styled from 'styled-components'
import getPostData from "./utils/getPostData";


const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  const [postData, setPostData] = useState([])
  useEffect(() => {
    getPostData().then(data => setPostData(data))
  }, [])

  return (
    <PostWrapper className="App">
      {
        postData.map(post =>
          <Post
            key={post.id}
            post={post}
          />)
      }
    </PostWrapper>
  );
}

export default App;

