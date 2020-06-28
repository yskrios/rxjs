import { of } from "rxjs";
import { tap, take } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5);
numeros$.pipe(tap(console.log), take(3)).subscribe({
  next: (val) => console.log("next:", val),
  complete: () => console.log("complete"),
});
