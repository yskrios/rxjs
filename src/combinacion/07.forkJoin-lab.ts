import { forkJoin, of } from 'rxjs';
import { ajax } from "rxjs/ajax";
import { catchError } from "rxjs/operators";
const GITHUB_API_URL = "https://api.github.com/users";
const GIT_USER = "yskrios";

forkJoin({
  usuario: ajax.getJSON(`${GITHUB_API_URL}/${GIT_USER}`),
  repos: ajax.getJSON(`${GITHUB_API_URL}/${GIT_USER}/repos`),
  gitst: ajax.getJSON(`${GITHUB_API_URL}/${GIT_USER}/gists`),
})
  .pipe(catchError((err) => of(err)))
  .subscribe(console.log);
