### Project_1

- Modern Component uses funcitonal component , where every component should be export default

- Every javascript expression are taken as string if we pass {[1 , 2, ,3]} , it will render as 123

- Objects and boolean are not rendered in the page if we use with javascript expression

#### Functional Component

- We can create a other few components and add it to the App.jsx

#### Styling

- we can apply by using inline
  `<Header style={{`
  `backgroundColor:"white",`
  ``}}> </Header> `

- Or create a js object and assign it to the style property of the jsx element

#### Click events

- We can handle every Click Events , where we need only to pass the reference name

- To pass a parameter to a handler function we need to create a anonyms function `<button onClick={() => handleClick("name") }>click Me</button>`

- Event Listeners
  - onClick
  - onDoubleClick
