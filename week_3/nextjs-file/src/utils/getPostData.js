

const posts = [
  {
    id: 1,
    title: 'This is a sample post',
    likes: 5
  },
  {
    id: 2,
    title:
      `
    1. Why do we use Node.js? What does it do? <br>
    <br>
    使用Node.js開啟一個server，讓build好的程式可以在此server上被served。 <br>
    <br>

    2. Explain the Styled-Component you made. What's CSS-in-JS, and how does it help compared to regular CSS? <br>
    <br>
    Styled-Component是一個可以在React中使用的CSS-in-JS的library。 
    使用 Styled-Components 的好處之一，就是能夠透過 React Components 避免css class彼此互相影響和污染。 
    另外，也更容易根據component的狀態來做動態的style<br>
    <br>

    3. Discuss useState and useEffect. How did you use them?  <br>
    <br>
    useState是一個React的hook，可以讓function component可以有state的功能。 useEffect可以讓function component可以有side effect的功能。
    在我的程式裡面，我使用useState來讓post component可以有like/unlike的功能，並且可以顯示出目前的like數量。
    我使用useEffect來讓畫面在初次render的時候，會去fetch post data，並將post存入state<br>
    <br>


    4. Describe Client-Side Rendering vs. Server-Side Rendering. How did you achieve Server-Side Rendering in Next.js? 
    Think about getServerSideProps. <br>
    <br>
    Client-Side Rendering是指在client端render整個網頁，實際上是利用js渲染全部的畫面到空的html，而Server-Side Rendering是指在server端render部分網頁。兩者有各自的好處，Client-Side Rendering可以讓網頁更快，但是會有SEO的問題，而Server-Side Rendering則可以解決SEO的問題，但是會比較慢。 <br>
    <br>


    5. Which coding styles did you follow when coding? <br>
    <br>
    我有遵循Airbnb的coding style<br>
    <br>
    `,
    likes: 10
  }
]

const getPostData = async () => {
  return new Promise((resolve, reject) => {
    resolve(posts)
  })
}

export default getPostData

