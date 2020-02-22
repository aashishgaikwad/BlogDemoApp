This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run lint:fix`

Performs linting based on rules specified by tools and plugins like **eslint-recommended, jest, react, jsx-a11y/recommended**.

### `npm test`

Launches the test runner in the interactive watch mode. <br /><br/> **Tools used:**<br/> 
- **Jest** as the test runner, assertion library, and mocking library.<br/> 
- **Enzyme** to provide additional testing utilities to interact with elements.<br/> 
- **enzyme-to-json** package which provides a better component format for snapshot comparison than Enzyme’s internal component representation.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />

## Design choices and scope for their improvement
**1.Directory Structure**:<br/>

The styling and the code for the components are separated. All styles live in a global CSS file instead of a component-centric file.

**2.Importing components**:<br/>

Importing components using regular import statements i.e. eager-loading of components.<br/>
**Improvement**: App can be optimized further using lazy-loading approach i.e. loading on-demand or in parallel.<br/>

**3.Use of functional components over class-based components**:<br/>
Functional components are easier to read, debug, and test. They offer performance benefits, decreased coupling, and greater reusability.
Also Functional components transpile down to less code than class components, which means functional components = smaller bundles.<br/>

**4.State management**:<br/>
Using 'useState' hook for local state management in components.<br/>
**Improvement**: For better state management and code sharing between components we can make use of other hooks such as useReducer and useContext or third party library like redux.<br/>

**5.Data fetching**:<br/>
Calling the REST APIs inside functional components using useEffect hook. Making use of built-in Fetch API to consume following APIs<br/>
- used GET /posts request for fetching all posts
- used GET /posts/:id request to fetch a particular post 
- used POST /posts request to add a new post
- used PUT /posts/:id request to edit/update a post (because it is idempotent) <br/>

Fetch API is standard and has no external dependencies.<br/>
**Improvement**: Axios also has a promise-based API similar to Fetch, but Axios saves the JSON parsing phase and handles all errors. The Fetch API, for example, returns 404 as a normal response, so you need to check the response in your code and throw an error yourself if needed.<br/>

**6**.Regarding the test cases, more tests can be added to test react hooks such as useState.




