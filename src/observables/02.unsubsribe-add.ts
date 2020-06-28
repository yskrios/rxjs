import { Observable, Observer, Subscriber } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next", value),
  error: (error) => console.warn("next", error),
  complete: () => console.info("completado"),
};
const intervalo$ = new Observable<number>((suscriber) => {
  //crear un contador 1,2,3,4,5
  let i = 1;
  const interval = setInterval(() => {
    i++;
    suscriber.next(i);
  }, 1000);

  return () => {
    clearInterval(interval);
  };
});

const subs = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

//Limpiar subscripciones
subs.add(subs2).add(subs3);

setTimeout(() => {
  subs.unsubscribe();
}, 3000);
