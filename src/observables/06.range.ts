import { of, range, asyncScheduler} from 'rxjs';

const src$ = range (1,5, asyncScheduler);
//Transforma de sicrona a asincrona asyncScheduler
console.log('Inicio');
src$.subscribe(console.log);
console.log('Fin');

