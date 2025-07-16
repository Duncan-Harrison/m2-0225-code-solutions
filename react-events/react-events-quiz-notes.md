# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  Events objects in React associated with a type of interaction with content in the DOM element. Unlike Javascript, they are applied like props to elements in React so you don't have to query the DOM to find a specific element.
- What is an "event handler"? Which component declares the handler?
  Event handlers are props that notice when the DOM has been interacted with in a certain way. The return statement of a React function
- How do you pass an event handler to a React component?
  You can either define it as a function and then call it a prop in a component's return statement or you can pass it along to the return statement as an anonymous function.
- What is the naming convention for event handlers?
  Event handlers generally start their name with the word "on".
- What is an "event handler prop"? Which component declares the prop?
  Event handler props tell a child element to communicate with its parent and pass along any data, such as the event, to the parent. The parent or the child could declare the prop.
- What are some custom event handler props a component may wish to define?
  Custom events may include click events for paragraph elements or hover state events for images.
- What is the naming convention for custom event handler props?
  Custom event handlers typically start with "handle."

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
