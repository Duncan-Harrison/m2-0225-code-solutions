select "films"."releaseYear" as "year",
      "genres"."name" as "genre"
from "films"
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
where "films"."title" = 'Boogie Amelie';
