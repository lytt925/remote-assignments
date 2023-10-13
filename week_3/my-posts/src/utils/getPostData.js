

const posts = [
  {
    id: 1,
    title: 'This is a sample post',
    likes: 5
  },
  {
    id: 2,
    title: 'This is another sample post',
    likes: 10
  }
]

const getPostData = async () => {
  return new Promise((resolve, reject) => {
    resolve(posts)
  })
}

export default getPostData

