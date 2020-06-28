import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acc, cur) => acc + cur;
//Reduce
from(numeros).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);
//Scan
from(numeros).pipe(scan(totalAcumulador, 0)).subscribe(console.log);
//Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}
const user: Usuario[] = [
  { id: "yi", autenticado: false, token: null },
  { id: "yi", autenticado: false, token: "abc" },
  { id: "yi", autenticado: false, token: "abc123" },
];

const state$ = from(user).pipe(
  scan<Usuario>(
    (acc, curr) => {
      return { ...acc, ...curr };
    },
    { edad: 33 }
  )
);

const id$ = state$.pipe(map((state) => state));

id$.subscribe(console.log);
