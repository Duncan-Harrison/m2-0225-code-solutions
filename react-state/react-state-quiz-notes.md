# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  Hooks are special functions that gives components access to state and other React features.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  A hook function must have a name that starts with "use" (e.g., useState), can only be called by React components or other hooks, and must be called at the top level of a component. Hooks must also be called in the same order as the component.
- What is the purpose of state in React?
  By saving data between component re-renders, state allows React to create dynamic components that respond to user input and update the DOM based on user interactions.
- Why can't we just maintain state in a local variable?
  Local variables do not persist between function calls, so any data stored in those would be lost when a component re-renders.
- What two actions happen when you call a `state setter` function?
  A state setter function updates the value of the data saved in state, and React schedules a re-render of the app to actually save the new value in state and show the new value on the render.
- When does the local `state variable` get updated with the new value?
  The local state variable gets updated after the component re-renders.

## Notes

All student notes should be written here.

In order to use our new functionality so the photos, captions, and descriptions are cycled through automatically, we could build out an asynchronous function that fires every few seconds to cycle through our elements.

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
