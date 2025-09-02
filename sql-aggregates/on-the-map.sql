select "c"."countryId",
        "c"."name",
        count(*)
from "cities"
join "countries" as "c" using ("countryId")
group by "countryId"
order by "c"."name";
