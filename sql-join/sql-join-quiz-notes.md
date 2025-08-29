# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  A foreign key is a column that imports data from a primary column in one table into another table.
- How do you join two SQL tables? (Provide at least two syntaxes.)
  select
  from "products"
  join "suppliers" using ("supplierId");
- How do you temporarily rename columns or tables in a SQL statement?
  We can use aliasing to temporarily rename the columns:
  select "products"."name" as "product"
  from "products"
  join "suppliers" using ("supplierId");
- How do you create a one-to-many relationship between two tables?
  You create a one-to-many relationship by importing a single foreign key to a table with the join statement.
- How do you create a many-to-many relationship between two tables?
  You create a many-to-many relationship by joining several, if not all, keys from the two tables.

## Notes

All student notes should be written here.
List of relations

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
