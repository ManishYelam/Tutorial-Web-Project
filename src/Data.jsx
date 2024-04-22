import "./Data.css";

export let titles = ["Introduction", "Get Started", "Upgrade", "ES6", "Render HTML", "JSX", "React Components", "React Class", "React Props", "React Events", "React Conditional Rendering", "React List"];

export let contents = [
    <div className="content-container">
        <h2>React Introduction</h2>
        <div className="ans-div">
            <p>
                React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.

                React is a tool for building UI components.
            </p>
            <div className="inner-div"><p>React creates a VIRTUAL DOM in memory.</p></div>
            <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
        </div>
        <hr />
        <div className="ans-div">
            <h3>How does React Work?</h3>
            <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM</p>
            <div className="inner-div"><p>React only changes what needs to be changed!</p></div>
            <p>React finds out what changes have been made, and changes only what needs to be changed.
            </p>
            <p>You will learn the various aspects of how React does this in the rest of this tutorial.</p>
        </div>
        <hr />
        <div className="ans-div">
            <h3>React.JS History</h3>
            <p>
                Current version of React.JS is V18.0.0 (April 2022).</p>

            <p>Initial Release to the Public (V0.3.0) was in July 2013.</p>

            <p>React.JS was first used in 2011 for Facebook's Newsfeed feature.</p>

            <p>Facebook Software Engineer, Jordan Walke, created it.</p>

            <p>Current version of <span className="highligted-text">create-react-app</span>  is v5.0.1 (April 2022).</p>

            <p> <span className="highligted-text">create-react-app</span> includes built tools such as webpack, Babel, and ESLint.
            </p>
        </div>
    </div >,

    <div className="content-container">
        <div className="inner-div"><p>To use React in production, you need npm which is included with Node.js.</p></div>
        <h2>Render Directly in HTML</h2>
        <div className="ans-div">
            <p>
                Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.
            </p>
            <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.</p>
        </div>
        <hr />

        <div className="code-div-container">
            <h3>Example</h3>
            <div className="code-div">
                <code>
                    <pre>
                        {`<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>

    <div id="mydiv"></div>

    <script type="text/babel">
      function Hello() {
        return <h1>Hello World!</h1>;
      }

      const container = document.getElementById('mydiv');
      const root = ReactDOM.createRoot(container);
      root.render(<Hello />)
    </script>

  </body>
</html>`}
                    </pre>
                </code>
            </div>
            <div className="run-button"><a href="/">Run Example</a></div>
        </div>


    </div>,

    <div className="content-container">
        <h2>Upgrade React</h2>
        <div className="ans-div">
            <p>
                Upgrading an existing React application to version 18 only requires two steps.
            </p>
            <div className="inner-div"><p>If you are already using the latest version of create-react-app which uses React version 18 you can skip this section.</p></div>
            <h2>Step:1 Install React 18</h2>
            <p>To install the latest version, from your project folder run the following from the terminal:</p>
            <div className="code-div-container">
                <h3>Example</h3>
                <div className="code-div">
                    <code>
                        <pre>
                            {`npm i react@latest react-dom@latest`}
                        </pre>
                    </code>
                </div>

            </div>
            <h2>Step 2: Use the new root API </h2>
            <p>In order to take advantage of React 18's concurrent features you'll need to use the new root API for client rendering.</p>
        </div>
        <hr />
        <div className="code-div-container">
            <h3>Example</h3>
            <div className="code-div">
                <code>
                    <pre>
                        {`// Before
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// After
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
                    </pre>
                </code>
            </div>
        </div>



    </div >,

    <div className="content-container">
        <h2>What is ES6?</h2>
        <div className="ans-div">
            <p>
                ES6 stands for ECMAScript 6.
            </p>
            <p>ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.</p>
            <h2>Why Should I Learn ES6?</h2>
            <p>React uses ES6, and you should be familiar with some of the new features like:</p>
            <hr />
            <ul>
                <li>Classes</li>
                <li>Arrow Function</li>
                <li>Variable(let,const,var)</li>
                <li>Array Methods like .map()</li>
                <li>Destructuring</li>
                <li>Modules</li>
                <li>Ternary Operators</li>
                <li>Spread Operators</li>
            </ul>
        </div>
        <hr />

    </div>,

    <div className="content-container">
        <h2>React Render HTML</h2>
        <div className="ans-div">
            <p>React's goal is in many ways to render HTML in a web page.</p>

            <p>React renders HTML to the web page by using a function called <span className="highligted-text">createRoot()</span> and its method <span className="highligted-text">render()</span>.</p>
            <h2>createRoot Function</h2>
            <p>
                The <span className="highligted-text">createRoot()</span> function takes one argument, an HTML element.</p>

            <p>The purpose of the function is to define the HTML element where a React component should be displayed.</p>

            <h2>The render Method</h2>
            <p>The <span className="highligted-text">render()</span> method is then called to define the React component that should be rendered.</p>
        </div>
        <hr />
        <div className="code-div-container">
            <h3>Example</h3>
            <p>Display a paragraph inside an element with the id of "root":</p>
            <div className="code-div">
                <code>
                    <pre>
                        {`const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<p>Hello</p>);`}
                    </pre>
                </code>
            </div>
            <div className="run-button"><a href="/">Run Example</a></div>
        </div>

    </div>,

    <div className="content-container">
        <h2>What is JSX?</h2>
        <div className="ans-div">
            <p>
                JSX stands for JavaScript XML.
            </p>
            <p>JSX allows us to write HTML in React</p>
            <hr />
            <h2>Coding JSX</h2>
            <p>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any <span className="highligted-text">createElement()</span>  and/or <span className="highligted-text">appendChild()</span> methods.</p>
        </div>
        <hr />

        <div className="code-div-container">
            <h3>Example 1</h3>
            <p>JSX:</p>
            <div className="code-div">
                <code>
                    <pre>
                        {`const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`}
                    </pre>
                </code>
            </div>
            <hr />
        </div>
        <div className="code-div-container">
            <h3>Example 2</h3>
            <p>Without JSX:</p>
            <div className="code-div">
                <code>
                    <pre>
                        {`const myElement = React.createElement('h1', {}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`}
                    </pre>
                </code>
            </div>
            <div className="run-button"><a href="/">Run Example</a></div>
        </div>

    </div>,

    <div className="content-container">
        <h2>React Components</h2>
        <div className="ans-div">
            <p>
                Components are like functions that return HTML elements..
            </p>
            <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.</p>
            <p>Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.</p>
            <div className="inner-div"><p>In older React code bases, you may find Class components primarily used. It is now suggested to use Function components along with Hooks, which were added in React 16.8. There is an optional section on Class components for your reference.</p></div>
            <hr />
            <h2>Create Your First Component</h2>
            <p>A class component must include the <span className="highligted-text">extends React.Component</span>  statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.</p>
            <p>The component also requires a <span className="highligted-text">render()</span> method, this method returns HTML.</p>
        </div>
        <hr />
        <div className="code-div-container">
            <h3>Example 1</h3>
            <p>Create a Class component called <span className="highligted-text">Car</span> </p>
            <div className="code-div">
                <code>
                    <pre>
                        {`class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}`}
                    </pre>
                </code>
            </div>
            <div className="run-button"><a href="/">Run Example</a></div>
        </div>
        <hr />


    </div>,

    <div className="content-container">
        <h2>React Class Component</h2>
        <div className="ans-div">
            <p>
                Before React 16.8, Class components were the only way to track state and lifecycle on a React component. Function components were considered "state-less".
            </p>
            <p>With the addition of Hooks, Function components are now almost equivalent to Class components. The differences are so minor that you will probably never need to use a Class component in React.</p>
            <p>Even though Function components are preferred, there are no current plans on removing Class components from React.</p>
            <h2>Create a Class Component</h2>
            <p>When creating a React component, the component's name must start with an upper case letter.</p>
            <p>The component has to include the <span className="highligted-text">extends React.Component</span>  statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions</p>
        </div>
        <hr />
        <div className="code-div-container">
            <h3>Example</h3>
            <p>Create a Class component called <span className="highligted-text">Car</span></p>

            <div className="code-div">
                <code>
                    <pre>
                        {
                            `class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
`}
                    </pre>
                </code>
            </div>
            <div className="run-button"><a href="/">Run Example</a></div>
        </div>
        <hr />
        <div className="code-div-container">
            <h3>Example</h3>
            <p>Display the <span className="highligted-text">Car</span> component in the "root" element:</p>

            <div className="code-div">
                <code>
                    <pre>
                        {
                            `const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
`}
                    </pre>
                </code>
            </div>
            <div className="run-button"><a href="/">Run Example</a></div>
        </div>

    </div>,

    <div className="content-container">
        <h2>React Props</h2>
        <div className="ans-div">
            <p>
                Props are arguments passed into React components.
            </p>
            <p>Props are passed to components via HTML attributes.</p>
            <div className="inner-div"><p><span className="highligted-text">props</span> stands for properties.</p></div>
            <hr />
            <h2>React Props</h2>
            <p>JReact Props are like function arguments in JavaScript and attributes in HTML.</p>
            <p>To send props into a component, use the same syntax as HTML attributes:</p>
        </div>
        <hr />

        <div className="code-div-container">
            <h3>Example 1</h3>
            <p>Add a "brand" attribute to the Car element:</p>
            <div className="code-div">
                <code>
                    <pre>
                        {`const myElement = <Car brand="Ford" />;`}
                    </pre>
                </code>
            </div>
            <div className="run-button"><a href="/">Run Example</a></div>
        </div>
        <hr />
        <div className="code-div-container">
            <h3>Example 2</h3>
            <p>Use the brand attribute in the component:</p>
            <div className="code-div">
                <code>
                    <pre>
                        {`function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}`}
                    </pre>
                </code>
            </div>
            <div className="run-button"><a href="/">Run Example</a></div>
        </div>

    </div>,

    <div className="content-container">
        <h2>React Events</h2>
        <div className="ans-div">
            <p>
                Just like HTML DOM events, React can perform actions based on user events.
            </p>
            <p>React has the same events as HTML: click, change, mouseover etc.</p>
        </div>
        <hr />
        <h2>Adding Events</h2>
        <p>React events are written in camelCase syntax: </p>

        <p><span className="highligted-text">onClick</span> instead of <span className="highligted-text">onclick</span>.</p>

        <p>React event handlers are written inside curly braces:</p>React event handlers are written inside curly braces:

        <p>  <span className="highligted-text">onClick={`shoot`}</span>  instead of <span className="highligted-text">onClick="shoot()"</span></p>

        <div className="code-div-container">
            <h3>React</h3>
            <div className="code-div">
                <code>
                    <pre>
                        {`<button onClick={shoot}>Take the Shot!</button>`}
                    </pre>
                </code>
            </div>
            <div className="run-button"><a href="/">Run Example</a></div>
        </div>
        <hr />
        <div className="code-div-container">
            <h3>HTML</h3>
            <div className="code-div">
                <code>
                    <pre>
                        {`<button onclick="shoot()">Take the Shot!</button>`}
                    </pre>
                </code>
            </div>
            <div className="run-button"><a href="/">Run Example</a></div>
        </div>
        <hr />
        <div className="code-div-container">
            <h3>Example:</h3>
            <p>Put the <span className="highligted-text">shoot</span> function inside the   <span className="highligted-text">Football</span> component:</p>
            <div className="code-div">
                <code>
                    <pre>
                        {`function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);`}
                    </pre>
                </code>
            </div>
            <div className="run-button"><a href="/">Run Example</a></div>
        </div>


    </div>,

    <div className="content-container">
        <h2>React Conditionals</h2>
        <div className="ans-div">
            <p>
                In React, you can conditionally render components.
            </p>
            <p>There are several ways to do this.</p>
            <hr />
            <h2><span className="highligted-text">if</span> Statement</h2>
            <p>We can use the <span className="highligted-text">if</span> JavaScript operator to decide which component to render.</p>
        </div>
        <hr />

        <div className="code-div-container">
            <h3>Example 1</h3>
            <p>We'll use these two components:</p>
            <div className="code-div">
                <code>
                    <pre>
                        {`function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}`}
                    </pre>
                </code>
            </div>
            <div className="run-button"><a href="/">Run Example</a></div>
        </div>
        <hr />
        <div className="code-div-container">
            <h3>Example 2</h3>
            <p>Now, we'll create another component that chooses which component to render based on a condition:</p>
            <div className="code-div">
                <code>
                    <pre>
                        {`function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);`}
                    </pre>
                </code>
            </div>


        </div>
        <div className="code-div-container">
            <h3>Example 3</h3>
            <p>Try changing the <span className="highligted-text">isGoal</span> attribute to <span className="highligted-text">true</span>:</p>
            <div className="code-div">
                <code>
                    <pre>
                        {`const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={true}x/>);`}
                    </pre>
                </code>
            </div>

            <div className="run-button"><a href="/">Run Example</a></div>
        </div>

    </div>,

    <div className="content-container">
        <h2>React List</h2>
        <div className="ans-div">
            <p>
                In React, you will render lists with some type of loop.
            </p>
            <p>The JavaScript <span className="highligted-text">map()</span> array method is generally the preferred method.</p>
            <div className="inner-div"><p>If you need a refresher on the  <span className="highligted-text">map()</span> method, check out the ES6 section.</p></div>
        </div>
        <hr />

        <div className="code-div-container">
            <h3>Example 1</h3>
            <p>Let's render all of the cars from our garage:</p>
            <div className="code-div">
                <code>
                    <pre>
                        {`function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);`}
                    </pre>
                </code>
            </div>
            <div className="run-button"><a href="/">Run Example</a></div>
        </div>

    </div>,

];