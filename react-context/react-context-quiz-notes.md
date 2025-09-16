# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  To allow us to pass data and rules from grandparent to grandchild
- What values can be stored in context?
  Object Types
- How do you create context and make it available to the components?
  You use the createContext method to define the default object type, assign it to a variable, and then export that variable wherever context is needed.
- How do you access the context values?
  You can destructure the individual context values from the context variable you established earlier.
- When would you use context? (in addition to the best answer: "rarely")
  You would use context to establish key rules in the parent and then have those rules imported to and enforced within the children's children.

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
