import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const number = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

interval(500)
  .pipe(take(6), tap(console.log), reduce(totalReducer))
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete"),
  });
