select "actors"."firstName",
        "actors"."lastName",
        "actors"."actorId",
        "films"."filmId",
        "films"."title"
from "actors"
join "castMembers" using ("actorId")
join "films" using ("filmId")
where "films"."title" = 'Jersey Sassy';
