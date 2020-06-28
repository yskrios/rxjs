import { range } from "rxjs";
import { tap, map } from "rxjs/operators";
const numeros$ = range(1, 5);
//tap sirve para depurar
numeros$
  .pipe(
    tap((x) => console.log("antes", x)),
    map((val) => val * 10),
    tap({
        next: valor => console.log('desp',valor),
        complete: () => console.log(' se termino todo')
    })
  )
  .subscribe((val) => console.log("subs", val));
