import { fromEvent } from "rxjs";
import { map, takeWhile } from "rxjs/operators";
const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    // takeWhile(({ y }) => y <= 150) no es inclusive
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
