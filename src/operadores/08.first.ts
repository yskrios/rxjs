import { fromEvent } from "rxjs";
import { first } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
    first(event => event.clientY >= 150)
    ).subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
