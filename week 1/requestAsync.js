// requestAsync.js
const XMLHttpRequest = require("xhr2") // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";

function requestCallback(url, callback) {
  let start = new Date().getTime() // get milliseconds
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const { data: end } = JSON.parse(xhr.responseText)
      callback(end * 1000 - start);
    }
  };
  xhr.open("GET", url, async = true);
  xhr.send();
}


function requestPromise(url) {
  // write code to request url asynchronously with Promise
  return new Promise((resolve, reject) => {
    let start = new Date().getTime() // get milliseconds
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const { data: end } = JSON.parse(xhr.responseText)
        resolve(end * 1000 - start);
      }
      else if (xhr.readyState === 4 && xhr.status !== 200) {
        reject('Request failed: ' + xhr.statusText);
      }
    };
    xhr.open("GET", url, async = true);
    xhr.send();
  })
}

async function requestAsyncAwait(url) {
  // write code to request url asynchronously
  // you should call requestPromise here and get the result using async / await.
  const res = await requestPromise(url)
  console.log(res)
}

requestCallback(url, console.log); // would print out the execution time
requestPromise(url).then(console.log).catch(console.error);
requestAsyncAwait(url);