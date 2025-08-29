select "addresses"."line1" as "street",
        "cities"."name" as "city",
        "addresses"."district" as "district"
from "cities"
join "addresses" using ("cityId");
