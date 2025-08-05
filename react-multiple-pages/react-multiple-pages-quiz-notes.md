# react-routing-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How does the browser URL change when navigating through a Single Page App? How does a user expect the URL to change as they navigate through a browser app?
  The URL in the browser bar does not change in a Single Page App, while a browser app will populate the change in URLs through the useEffect app.
- What NPM package can be used to make navigating a React app behave as users expect?
  React Router
- Which React Router component(s) can be used to set up your app's navigation?
  BrowserRouter, Routes, Route
- How does React Router match the browser URL to one of your app's React components?
  Routes
- What is the purpose of React Router's `Outlet` component?
  Outlet serves as a placeholder for child routes within a parent route.
- What React component is used to statically navigate to another page? What HTML element does it render to?
  The link component is used to statically navigate to another page. It renders the component that corresponds with the destination URL.
- What React Router hook is used to access route path dynamic segments (those that start with `:` in the `path`)?
  useParams
- What React Router hook is used to navigate programmatically?
  useNavigate

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
