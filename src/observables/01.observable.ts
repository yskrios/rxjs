import { Observable } from "rxjs";

// const obs$ = Observable.create()

const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");
});

obs$.subscribe(
  (valor) => console.log("next", valor),
  (error) => console.warn("error", error),
  () => console.info("completado")
);
