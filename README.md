# react-t9wnlf

step 1:

install `npm -i react-router-dom`

step 2:

Folder Structure

Layout.js
Home.js
Blogs.js
Contact.js
NoPage.js

Step 3:

React Router v4 provides below 3 <Router> components:

`<BrowserRouter> <HashRouter> <MemoryRouter>`

````import { createStore } from 'redux';

const reducer = (state, action) => {
console.log('reducer called');
return state;
};

const store = createStore(reducer, 0);```

createStore function take three argument
the first argument is a function that is normally known as a **reducer** (required)

the second argument is the **initial value of the state** (optional)

the third argument is an enhancer where we can pass **middleware**, if any (optional)

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-t9wnlf)
````
