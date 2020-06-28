import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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

from(personajes).pipe(distinctUntilKeyChanged("nombre")).subscribe(console.log);
