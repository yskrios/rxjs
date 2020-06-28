import { range, from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

// range(1, 10)
//   .pipe(filter((val) => val % 2 === 1))
//   .subscribe(console.log);

range(1, 30).pipe(
  filter((val, i) => {
    console.log("index", i);

    return val % 2 === 1;
  })
);
//.subscribe(console.log);
interface Personaje {
  tipo: string;
  nombre: string;
}
const personajes = [
  { tipo: "heroe", nombre: "batman" },

  { tipo: "heroe", nombre: "Rob" },

  { tipo: "villano", nombre: "Joker" },
];

//ejemplo yo
// const heroes = personajes.filter((i) => i.tipo === "heroe");
// console.log(heroes);

from(personajes)
  .pipe(filter((p) => p.tipo !== "heroe"))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code),
  filter((key) => key === "Enter")
);

keyup$.subscribe(console.log);
