import { ajax, AjaxError } from "rxjs/ajax";
import { pipe, of } from "rxjs";
import { map, pluck, catchError } from "rxjs/operators";
const url = "https://api.github.com/us1ers?per_page=5";
const fetchPromesa = fetch(url);

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const atrapaError = (err: AjaxError) => {
  console.warn("error en: ", err);
  return of([]);
};

// fetchPromesa
//   .then((resp) => resp.json().then(console.log))
//   .catch((err) => console.warn("error", err));

// fetchPromesa
//   .then(manejaErrores)
//   .then((resp) => resp.json().then(console.log))
//   .catch((err) => console.warn("error", err));

ajax(url)
  .pipe(pluck("response"), catchError(atrapaError))
  .subscribe((users) => console.log("usuarios:", users));
