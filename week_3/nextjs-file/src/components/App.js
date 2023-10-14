import Post from "./Post";

function App({ postData }) {

  return (
    <div className="App flex flex-col justify-center items-center">
      {
        postData.map(post =>
          <Post
            key={post.id}
            post={post}
          />)
      }
    </div>
  );
}

export default App;

