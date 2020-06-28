import { of, from } from "rxjs";
import { distinct } from "rxjs/operators";

const numeros$ = of(1, 1, 1, 1, 2, 2, 1, 5, 4, 5, 2, 3);
numeros$
  .pipe(
    distinct() // ===
  )
  .subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  { nombre: "uno" },
  { nombre: "tress" },
  { nombre: "uno" },
  { nombre: "cru" },
  { nombre: "uno" },
  { nombre: "cri cru" },
];

from(personajes)
  .pipe(distinct((personaje) => personaje.nombre))
  .subscribe(console.log);
