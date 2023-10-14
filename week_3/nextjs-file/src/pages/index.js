import App from '../components/App';
import getPostData from "../utils/getPostData";

function Home({ postData }) {
  return (
    <div>
      <App postData={postData} />
    </div>
  );
}


export async function getServerSideProps(context) {
  const postData = await getPostData()

  return {
    props: {
      postData,
    },
  };
}

export default Home;