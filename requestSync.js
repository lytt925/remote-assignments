// requestSync.js
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const url = "https://ec2-54-64-246-136.ap-northeast-1.compute.amazonaws.com/delay-clock";

function requestSync(url) {
  let start = new Date().getTime() // get milliseconds
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const { data: end } = JSON.parse(xhr.responseText)
      console.log(end * 1000 - start);
    }
  };
  xhr.open("GET", url, async = false);
  xhr.send();
}


requestSync(url) // would print out the execution time
requestSync(url)
requestSync(url)