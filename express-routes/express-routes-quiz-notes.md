# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  The conventional (but not required to follow by servers) methods are POST for creation, GET for reading, PUT for updating, and DELETE for deletion.
- What is Express middleware?
  Express middleware is an array of functions that fulfills the requested CRUD functions and passes the same instance of the request and response objects.
- What is Express middleware useful for?
  Express middleware is useful because it lets a modification to a request or response object be seen by all other items in the chain of HTTP functions.
- How do you mount a middleware with an Express application?
  You call a special function that adds the intended middleware application to Express, such as use() or get.
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  Request object, Response Object, and the next() callback function
- How do you specify and retrieve route parameters?
  You specify the path (defaults to / if left blank) and the handler (req, res, next)

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
