# ds-hashtable-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Hash Table data structure.
  A hash table is a data structure that stores data as key/value pairs.
- What are some examples of when you would use a Hash Table?
  You want to use a hash table when you need to store multiple objects, such as a record book that pairs people's names with their contact information.
- How do you read a key's value in a Hash Table? What is its time complexity?
  You read a key's value by running a function that calls its hash value, such as Map.get(key), which is a constant time operation (O(1)).
- How do you add a key/value into a Hash Table? What is its time complexity?
  You add a key/value pair to a hash table by creating a Map and using the set method of the Map object(Map.set(key, value)), which is a constant time operation (O(1)).
- How do you update a key's value in a Hash Table? What is its time complexity?
  You first use map.get to find the saved item and then use map.set to update those values. This is just a O(1) time complexity operation.
- How do you remove a key/value from a Hash Table? What is its time complexity?
  You can create a delete function to eliminate a hashed key/value pair, which is a O(1) complexity function.

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
