Fetch Api :
->The fetch API provides an interface for fetching(sending/receiving) resources.
->It uses Request and Response objects.
->The fetch() method is used to fetch a resource(data).
SYNTAX FOR FETCH : 
let variable-name(with-your-own) = fetch(url,[option[);
Note : fetch() will always return promise as "fulfilled" or "rejected".
1)Code for fetching from the api(without async) :
const URL = "https://dogapi.dog/api/v2/breeds";
let promise = fetch(URL);
console.log(promise);
2)Code for fetching from the api(with async) :
const URL = "https://dogapi.dog/api/v2/breeds";
const getDogFacts = async ()=>{
    let response = await fetch(URL);
    console.log(response);//JSON format 
    console.log(response.status);
}
Important Note :
fetch() --- if we are using fetch() without using options then fetch() creates a particular type request and that request is called "GET" request.
 Whenever we talk about network request under this we have different types of like GET request,delete request,put request.
  GET request : A request that will bring data to us is called GET request.
-> As i see after executing our code response request is not like browser request.
  So we have some formats 
Understading Terms[How we will "get" our request same as browser] :
AJAX[Asynchronous JS and XML] --> In oldest times,Api return data in the XML files but now data format comes in the form of JSON.
JSON[Javascript Object Notation] : JSON is [Javascript Object Notation.
Note : 
1)we are getting response from the API in the form of JSON format.
2)We need to convert JSON file into JS object for that we have one special function to convert 
json() method(asynchronous method): returns a second promise that resolves with the result of parsing the response body text as JSON(Input is JSON, output is JS onject).
Code for how to convert json() files into js object :
const URL = "https://dogapi.dog/api/v2/breeds";
const getFacts = async () => {
    let response = await fetch(URL);
    console.log(response);//JSON format 
    console.log(response.status);
}
* What if i want the text(from dog facts) to be printed on the browser screen 
let btn = document.querySelector("#btn");
let para = document.querySelector("#para");
const URL = "https://dogapi.dog/api/v2/breeds";
const getFacts = async () => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json(); 
    console.log(data);
    console.log(data.data[1].attributes.description);
    para.innerText = data.data[1].attributes.description
};
btn.addEventListener("click",getFacts);
---------------------------------------
Same example as above but using promises
const URL = "https://dogapi.dog/api/v2/breeds";
let btn = document.querySelector("#btn");
let para = document.querySelector("#para");
function getFacts() {
fetch(URL).then((response) =>
    {
        console.log(response);
        console.log(response.status);
        return response.json();
    }).then((data)=>{
    console.log(data);
    para.innerText = data.data[1].attributes.description;
    });
}
btn.addEventListener("click",getFacts);
Requests And Response : 
----------------------

HTTP Verbs:
So whenever we are sending a request to a server (or) whenever API call is made that there is something in the request,i.e https verbs 
HTTP(HyperText Transfer Protocol) 
In HTTP's there is some verbs which help us to understand which type of request we are sending.
Go to the mdn page read more about HTTP Verbs 
Note : from HTTP's request method the popular request is "GET" request.
2)Response Status Code :
When we call an API, we found a "status" in a response 
so in our prev code we got a status as "200" this means "Everything was ok".
what if an error occured then may be we will get 500 status or 404 should come close,many such types of,so these are different statuses.
* HTTP responses headers also contain details about the responses,such as content type,HTTP status code etc.
  


