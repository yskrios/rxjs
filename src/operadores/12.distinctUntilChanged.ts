import { of, from } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

const numeros$ = of(1, 1, 1, 1, 2, 2, 1, 5, 4, 5, 2, 3);
numeros$
  .pipe(
    distinctUntilChanged() // ===
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
  { nombre: "uno" },
  { nombre: "cri cru" },
];

from(personajes)
  .pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre))
  .subscribe(console.log);
