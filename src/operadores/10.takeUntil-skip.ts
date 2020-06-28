import { interval, fromEvent } from "rxjs";
import { takeUntil, skip, tap } from "rxjs/operators";

const button = document.createElement("button");
button.innerHTML = "Deneter Timer";

document.querySelector("body").append(button);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(button, "click");

const clickBtn$ = fromEvent(button, "click").pipe(skip(1));

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
