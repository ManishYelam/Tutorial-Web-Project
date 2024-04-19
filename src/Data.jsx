 import './Data.css'
 export let titles=[" React Introduction"," React Get Started"," React Upgrade","React ES6","React Render HTML"]

 export let contents=[
    <div className="content-container">
        <h2>What Is React?</h2>
        <div className="ans-div">
             <p>
             React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.
             React is a tool for building UI components.
           </p>
           <h2>React.JS History</h2>
<pre>
{`
Current version of React.JS is V18.0.0 (April 2022).

Initial Release to the Public (V0.3.0) was in July 2013.

React.JS was first used in 2011 for Facebook's Newsfeed feature.

Facebook Software Engineer, Jordan Walke, created it.

Current version of create-react-app is v5.0.1 (April 2022).
                       `}
                 </pre>
        </div>
    </div>
    ,
    <div className="content-container">
    <h2>React Getting Started</h2>
    <div className="ans-div">
         <p>
            To use React in production, you need npm which is included with Node.js.
       </p>
       <p id='get_started'>
           To get an overview of what React is, you can write React code directly in HTML.

           But in order to use React in production, you need npm and Node.js installed.


       </p>
    </div>
     
     <div className="code-div-container">
        <h3> Example</h3>
        <div className="code-div">
             <code>
                <pre>
                   {`
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <script src="https://unpkg.com/react@18/umd/react.
                        development.js" crossorigin></script>
                        <script src="https://unpkg.com/react-dom@18/umd/react-dom.
                        development.js"crossorigin></script>
                        <script src="https://unpkg.com/@babel/standalone/babel.
                        min.js"></script>
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
                    </html>
                    
                    
                   `}
                </pre>
             </code>
        </div>

     </div>
</div>,
<div className="content-container">
    <h2>UpgradeTo React 18</h2>
    <div className="ans-div">
         <p>
           Upgrading an existing React application to version 18 only requires two steps.
       </p>
       <p id='get_started'>
       If you are already using the latest version of create-react-app which uses React version 18 you can skip this section.


       </p>
       <h2>Step 1:Install React 18</h2>
       <p>
       To install the latest version, from your project folder run the following from the terminal:
       </p>
       <p id='npm'>npm i react@latest react-dom@latest</p>
       <h2>Step 2: Use the new root API</h2>
       <p>In order to take advantage of React 18's concurrent features you'll need to use the new root API for client rendering.</p>
    </div>
     
     <div className="code-div-container">
        <h3> Example</h3>
        <div className="code-div">
             <code>
                <pre>
                   {`
                    // Before
                    import ReactDOM from 'react-dom';
                    ReactDOM.render(<App />, document.getElementById('root'));
                    
                    // After
                    import ReactDOM from 'react-dom/client';
                    const root = ReactDOM.createRoot(document.getElementById('root'));
                    root.render(<App />);
                    
                   `}
                </pre>
             </code>
        </div>

     </div>
</div>,
<div className="content-container">
        <h2>What is ES6?</h2>
        <div className="ans-div">
             <p>
                 ES6 stands for ECMAScript 6.

                 ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.


           </p>
           <h2>Why Should I Learn ES6?</h2>
                 <p>
                     React uses ES6, and you should be familiar with some of the new features like:
<pre>
 {`
. Classes 
. Arrow Functions 
. Variables (let, const, var) 
. Array Methods like .map() 
. Destructuring 
. Modules 
. Ternary Operator 
. Spread Operator 
                            `}
                          </pre>                    
                    </p>
                 
        </div>
    </div>,
     <div className="content-container">
     <h2>React Render HTML</h2>
     <div className="ans-div">
          <p>
          React's goal is in many ways to render HTML in a web page.
          React renders HTML to the web page by using a function called createRoot() and its method render().
        </p>
        <h3>The createRoot Function</h3>
        <p>
           The createRoot() function takes one argument, an HTML element.
            The purpose of the function is to define the HTML element where a React component should be displayed.
        </p>
        <h3>The render Method</h3>
        <p>
            The render() method is then called to define the React component that should be rendered.
            But render where?
            There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.
            You'll notice a single <div /> in the body of this file. This is where our React application will be rendered.
         </p>
     </div>
      
      <div className="code-div-container">
         <h3> Example</h3>
         <div className="code-div">
            <p>Display a paragraph inside an element with the id of "root":</p>
              <code>
                 <pre>
                    {`
                    const container = document.getElementById('root');
                    const root = ReactDOM.createRoot(container);
                    root.render(<p>Hello</p>);
                    `}
                 </pre>
              </code>
              <p>The result is displayed in the <div id="root"/> element:</p>
              <code>
                 <pre>
                    {`
                     <body>
                     <div id="root"></div>
                     </body>
                    `}
                 </pre>
              </code>
         </div>
 
      </div>
 </div>
 ]