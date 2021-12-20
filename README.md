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

```
import { createStore } from 'redux';

const reducer = (state, action) => {
console.log('reducer called');
return state;
};

const store = createStore(reducer, 0);
```

createStore function take three argument:-

the first argument is a function that is normally known as a **reducer** (required)

the second argument is the **initial value of the state** (optional)

the third argument is an enhancer where we can pass **middleware**, if any (optional)

>  ES6 default parameter syntax for initializing the state parameter to value 0

>   subscribe function, we're registering a callback function that will be called once the store is changed

>  inside the callback function, we're calling the store.getState method to get the current value of the state

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-t9wnlf)

```

```
