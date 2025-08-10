# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  To create modal dialog boxes, which the user can interact with.
- How do you show and hide a modal dialog?
  .shoModal() shows a modal dialog, while .close() hides the modal dialog again.
- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?
  You can manipulate children with the {children} component. However, these do not work with dialog elements because dialog elements need a reference before they can be opened or closed.
- How do you call the dialog element's functions in React?
  useRef()
- How can you render nested components or JSX elements in React?
  You can render them with the {children} component.

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
