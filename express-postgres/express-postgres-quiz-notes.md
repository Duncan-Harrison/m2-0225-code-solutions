# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  To allow Express to connect to the PostgreSQL database and implement javascript/SQL data-type coercion
- How do you tell `pg` which database to connect to?
  const db = new pg.Pool({
  connectionString: '',
  ssl: {
  // Allow non-SSL traffic to localhost
  rejectUnauthorized: false,
  },
  });
- How do you send SQL to PostgreSQL from your Express server?
  db.query();
- How do you access the rows that get returned from the SQL query?
  by assigning the rows to a variable and res.send(variable)
- What must you always remember to put around your asynchronous route handlers? Why?
  You must wrap the route handlers in try/catch because they are asynchronous functions.
- What is a SQL Injection Attack and how do you avoid it in `pg`?
  An SQL injection attack is when you add extra commands and quotations to send malicious commands to a database. You can avoid it in pg with parameterized queries.

## Notes

All student notes should be written here.

Schema | Name | Type | Owner
--------+-------------+-------+-------
public | actors | table | dev
public | addresses | table | dev
public | castMembers | table | dev
public | cities | table | dev
public | countries | table | dev
public | customers | table | dev
public | filmGenre | table | dev
public | films | table | dev
public | genres | table | dev
public | inventory | table | dev
public | languages | table | dev
public | payments | table | dev
public | rentals | table | dev
public | staff | table | dev
public | stores | table | dev

actors
actorId | firstName | lastName | updatedAt

addresses
addressId | line1 | line2 | district | cityId | postalCode | phone | updatedAt

castMembers
actorId | filmId | updatedAt

cities
cityId | name | countryId | updatedAt

countries
countryId | name | updatedAt

customers
customerId | storeId | firstName | lastName | email | addressId | isActive | createdAt | updatedAt

films
filmId | title | description | releaseYear | languageId | originalLanguageId | rentalDuration | rentalRate | length | replacementCost | rating | updatedAt | specialFeatures | fulltext

filmGenre
filmId | genreId | updatedAt

genres
genreId | name | updatedAt

inventory
inventoryId | filmId | storeId | updatedAt

languages
languageId | name | updatedAt

payments
paymentId | customerId | staffId | rentalId | amount | paidAt

rentals
rentalId | startDate | inventoryId | customerId | endDate | staffId | updatedAt

staff
staffId | firstName | lastName | addressId | email | storeId | isActive | username | password | updatedAt | picture

stores
storeId | managerStaffId | addressId | updatedAt

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
