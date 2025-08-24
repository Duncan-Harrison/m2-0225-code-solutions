# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Insert, Select, Update, Delete
- How do you add a row to a SQL table?
  Use the insert into function to name a table, set the columns of that table as the parameters, and then use the values nested function to assign the inserted row's values to those attributes.
- How do you add multiple rows to a SQL table at once?
  You use the several parameter fields for the nested value function of the insert function
- How do you update rows in a database table?
  You use the update function, name the table, use the set function naming the column to update and value it is updated to, and use the where function to specify which row has its selected attribute udpated.
- How do you delete rows from a database table?
  Delete, from, where with from set to the name of the table and where set to a specific row.
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  If you do not include a where statement, then you will update or delete the entire table rather than the specific row or cell you actually want to change.
- How do you accidentally delete or update all rows in a table?
  By forgetting to include a where statement in your update or delete function
- How do you get back the modified row without a separate `select` statement?
  by including a returning \* statement as the last line of your insert into function
- Why did you get an error when trying to delete certain films?
  I got an error because the films and castMembers tables share values and deleting from one without deleting does not work.
  psql:puritanical.sql:4: ERROR: update or delete on table "films" violates foreign key constraint "film_actor_film_id_fkey" on table "castMembers"
  DETAIL: Key (filmId)=(384) is still referenced from table "castMembers".

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
