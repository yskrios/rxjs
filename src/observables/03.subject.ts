import { Observable, Observer, Subscriber, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next", value),
  error: (error) => console.warn("next", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);
  return () => clearInterval(intervalID);
});

/**
 * 1- Casteo multiple
 * 2- Tambien es un observer
 * 3- Next , error  y complete
 * **/

const subject$ = new Subject();
const susbs = intervalo$.subscribe(subject$);

// const subs = intervalo$.subscribe((rnd) => console.log("subs", rnd));
// const subs2 = intervalo$.subscribe((rnd) => console.log("subs2", rnd));

const subs = subject$.subscribe((rnd) => console.log("subs", rnd));
const subs2 = subject$.subscribe((rnd) => console.log("subs2", rnd));

setTimeout(()=>{
    subject$.next(10);
    subject$.complete();
    subs.unsubscribe();
}, 3500)

