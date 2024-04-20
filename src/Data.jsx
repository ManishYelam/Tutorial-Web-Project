 import './Data.css'
//  import history from '../Images/'
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
<p>
{`
Current version of React.JS is V18.0.0 (April 2022).

Initial Release to the Public (V0.3.0) was in July 2013.

React.JS was first used in 2011 for Facebook's Newsfeed feature.

Facebook Software Engineer, Jordan Walke, created it.

Current version of create-react-app is v5.0.1 (April 2022).
                       `}
                 </p>
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
                <p>
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
                </p>
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
                <p>
                   {`
                    // Before
                    import ReactDOM from 'react-dom';
                    ReactDOM.render(<App />, document.getElementById('root'));
                    
                    // After
                    import ReactDOM from 'react-dom/client';
                    const root = ReactDOM.createRoot(document.getElementById('root'));
                    root.render(<App />);
                    
                   `}
                </p>
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
<p>
 {`
. Classes 
. Arrow Functions 
. Variables (let, const, var) 
. Array Methods like .map() 
. Destructuring 
. Modules 
. Ternary Operator 
. Sstrongad Operator 
                            `}
                          </p>                    
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
                 <p>
                    {`
                    const container = document.getElementById('root');
                    const root = ReactDOM.createRoot(container);
                    root.render(<p>Hello</p>);
                    `}
                 </p>
              </code>
              <p>The result is displayed in the <div id="root"/> element:</p>
              <code>
                 <p>
                    {`
                     <body>
                     <div id="root"></div>
                     </body>
                    `}
                 </p>
              </code>
         </div>
 
      </div>
 </div>,

 <div className="content-container">
   <h2>HTML</h2>
   <ul>
      <li>HTML is the standard markup language for creating Web pages.</li>
      <li>HTML stands for Hyper Text Markup Language.</li>
   </ul>
   <p>
      HyperText is the method by which Internet users navigate the web. The use of hyper means it is not linear, so users can go anywhere on the Internet simply by clicking on the available links.
      A markup language is one that is designed for defining and strongsenting text. Within a text file such as an HTML file, elements are marked up using tags which explain the purpose of that part of the content
   </p>
   
   <h3>HTML History</h3>
   <p>
      HTML is a markup language used by the browser to manipulate text, images, and other content, in order to display it in the required format. HTML was created by Tim Berners-Lee in 1991. The first-ever version of HTML was HTML 1.0, but the first standard version was HTML 2.0, published in 1995.
   </p>

   <div className='history-html'></div>

   <h3>Features of HTML:</h3>
   <ul>
      <li>It is easy to learn and easy to use.</li>
      <li>It is platform-independent.</li>
      <li>Images, videos, and audio can be added to a web page.</li>
      <li>Hypertext can be added to the text.</li>
      <li>It is a markup language.</li>
   </ul>

   <h3>Advantages:</h3>
   <ul>
      <li>HTML is used to build websites.</li>
      <li>It can be integrated with other languages like CSS, JavaScript, etc.</li>
   </ul>

   <h3>Disadvantages:</h3>
   <ul>
      <li>HTML can only create static web pages. For dynamic web pages, other languages have to be used.</li>
      <li>The security feature is not good.</li>
   </ul>

   <div className="a"></div>

   <p>
      HTML Tags usually exist in pairs consisting of a starting and an ending tag. However, some tags do not have a closing tag. HTML Elements contain a starting tag, content, and an ending tag. If there is no content in an HTML Element, it is called an Empty HTML Element. HTML elements tell the browser how to display the content.
      Empty HTML Elements: HTML Elements without any content i.e., that do not print anything are called Empty elements. Empty HTML elements do not have an ending tag. For instance.{`<br>, <hr>, <link>, <input>`} etc are HTML elements.
   </p>

   <h3>{`Attributes =>`}</h3>
   <p>
      {`
      Attributes always come in name/value pairs like this: attribute_name=”value”. 
      Attributes are always added to the start tag of an HTML element.
      Attribute values should always be enclosed in quotes. Double style quotes (“ ”) are the most common, but single style quotes (‘ ’) are also allowed.
      In some rare situations, like when the attribute value itself contains quotes, it is necessary to use single quotes: name=’The person “ABC” is very good’ and vice-versa.
      <element attribute_name="attribute_value">`
      }
   </p>

   <h3>{`HTML src Attribute =>`}</h3>
   <p>
      {`
      If we want to insert an image into a webpage, then we need to use the <img> tag and the src attribute.
      <img src="">
      HTML alt Attribute: This is an alternate tag that is used to show or display something if the primary attribute i.e., the <img> tag, fails to display the value assigned to it. This can also be used to describe the image to a developer who is actually sitting at the coding end.`
      }
   </p>

   <h3>{`HTML href Attribute=>`}</h3>
   <p>
      This attribute is used to specify a link to any address. This attribute is used along with the <strong>{`<a>`}</strong> tag. The link put inside the href attribute gets linked to the text displayed inside the<strong>{`<a>`}</strong> tag.
     <strong>{` <a href="">`}</strong>
   
      {/* <img src="" alt="" /> */}
      <ul>
         <li>The <strong>{`<!DOCTYPE html>`}</strong>declaration defines that this document is an HTML5 document.
         HTML 4.01:
         <pre>{`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`}</pre>
         </li>
         <li>The <strong>{`<html>`}</strong> element is the root element of an HTML page. All other elements are contained within it.</li>
         <li>The  <strong>{`<head>`}</strong> element contains meta information about the HTML page. The head tag contains the “behind the scenes” elements for a webpage. Elements within the head aren’t visible on the front-end of a webpage.</li>
         <li>The <strong>{`<title>`}</strong> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)</li>
         <li>The <strong>{`<body>`}</strong> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
      </ul>

      
      <ul>
         <pre>{`<html lang="en">`}</pre>
         <li>The lang attribute specifies the language of the element's content. Common examples are "en" for English, "es" for Spanish, "fr" for French and so on.</li>
      </ul>
      
      <ul>
         <pre>{`<meta charset="UTF-8">`}</pre>
         <li>HTML5 specification encourages web developers to use the UTF-8 character set, which covers almost all of the characters and symbols in the world!</li>
         <li>UTF(Unicode Transformation Format)</li>
      </ul>
      
      <ul>
         <pre>{`<meta name="viewport" content="width=device-width, initial-scale=1.0>"`}</pre>
         <li>The viewport is the user's visible area of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen.</li>
         <li>The width=device-width part sets the width of the page to follow the screen- width of the device (which will vary depending on the device).</li>
         <li>The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.</li>
      </ul>
   </p>
 </div>
 

 ]