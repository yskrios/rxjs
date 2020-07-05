import { ajax } from "rxjs/ajax";
const url = "https://httpbin.org/delay/1";

// ajax
//   .post(
//     url,
//     {
//       id: 1,
//       nombre: "Yessica",
//     },
//     {
//       "mi-token": "ABC123",
//     }
//   )
//   .subscribe(console.log);

ajax({
  url,
  method: "POST",
  headers: {
    "mi-token": "123",
  },
  body: {
    id: 1,
    nombre: "yessica",
  },
}).subscribe(console.log);
