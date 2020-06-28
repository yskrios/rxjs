import { of, from, Observer } from "rxjs";
import { async } from "rxjs/internal/scheduler/async";

/**
 * of = toma un argumento y genera una secuencia
 * from = array, promise, iterable , observable
 */

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
}

// const source$ = from ([1,2,3,4.5]);
// const source$= of(...[1,2,3,4,5]);
// const source$ = from ('Fernando');

const source$ = from(fetch("https://api.github.com/users/yskrios"));
// source$.subscribe(async(resp) => {
//   console.log(resp.url);
//   const dataResp = await resp.json();
//   console.log(dataResp);
  
// });
// source$.subscribe(observer);
