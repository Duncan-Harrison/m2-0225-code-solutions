# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  First added to the DOM and drawn on the page
- What is a React Effect?
  React Effects are code lines that specify side effects cuased by rendering itself.
- When should you use an Effect and when should you not use an Effect?
  Synchonize an effect with an API call
- When do Effects run?
  After every DOM Change
- What function is used to declare an Effect?
  useEffect
- What are Effect dependencies and how do you declare them?
  Dependencies are rules that prevent the Effect from re-running when the rerun is not needed.
- Why would you want to clean up from an Effect?
  If your Effect would remount while still mounted, the cleanup rule manually unmounts the Effect to make sure the function works as intended.
- How do you clean up from an Effect?
  You add a return statement to the useEffect function (before the dependencies) that runs an arrow function. the tail end of the arrow function is the function that unmounts your effect.
- When does the cleanup function run?
  Each time before running the Effect again and on last time when the component is removed.

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
