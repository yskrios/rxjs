import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";
const texto = document.createElement("div");
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a mauris ligula. Nam vitae lorem rhoncus, pellentesque ex faucibus, lacinia lectus. Quisque odio mauris, ullamcorper a orci sed, varius hendrerit massa. Vestibulum augue eros, molestie eget tincidunt in, posuere et neque. Etiam non dui in lorem tristique tempor quis vitae dolor. Curabitur eget nunc erat. Pellentesque sodales massa ac erat ullamcorper, quis viverra quam tincidunt. Nulla felis arcu, cursus id nibh ac, euismod tempus sapien. Mauris mattis nec urna sed venenatis. Integer pharetra vel orci sit amet bibendum. Proin accumsan bibendum nibh, vitae rhoncus lectus consequat commodo. Mauris euismod, nisl malesuada volutpat elementum, erat quam finibus lorem, at placerat dui velit non mauris.
<br/><br/>
Donec auctor, nulla et tempus scelerisque, odio lorem pulvinar arcu, ornare convallis augue eros vitae orci. Nam at lectus egestas, eleifend magna non, auctor enim. Nulla eu orci ex. Vestibulum sodales leo eget ex iaculis tempus. Sed rutrum sollicitudin dignissim. Vivamus sollicitudin interdum eros, eu dignissim turpis ultricies sit amet. In ut gravida nisl, id dictum enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent blandit velit et tellus ullamcorper, a vulputate sapien aliquam. Cras vehicula mi justo, ut malesuada ex vulputate et. Vivamus at urna ut dui tempus consectetur. In justo urna, tristique eget quam semper, condimentum auctor magna. Sed ac viverra eros. Praesent quis finibus magna.
<br/><br/>
Maecenas semper ut lacus vitae interdum. Cras porta vitae orci eget efficitur. Vestibulum dictum nunc sapien, eu pulvinar diam vulputate quis. Etiam scelerisque, nunc at mattis suscipit, lorem dolor facilisis nunc, sit amet consectetur eros quam vitae magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vitae purus ligula. Quisque non porttitor nisi, vitae maximus massa. Vivamus convallis eleifend diam quis vehicula. Proin ipsum orci, pharetra sed porta sed, molestie gravida lacus.
<br/><br/>
Sed ante ex, sodales sed tellus at, rhoncus dapibus mi. Aenean dictum gravida leo ac finibus. Nullam porta augue in sem ultricies malesuada ac nec nisl. Curabitur ornare pulvinar magna. Suspendisse purus urna, vestibulum ac gravida non, euismod vitae metus. Nunc dui risus, vestibulum sed dui quis, interdum pharetra turpis. Donec nec iaculis enim. Donec accumsan eros a nulla efficitur, et sollicitudin orci blandit. Nullam luctus condimentum magna, non imperdiet mi bibendum vel. Donec vel posuere urna. Proin pellentesque volutpat facilisis. Mauris condimentum metus a congue laoreet. Sed commodo sollicitudin pretium. In id metus tincidunt, efficitur nulla at, varius erat.
<br/><br/>
Duis justo felis, porttitor non elit nec, lobortis faucibus dolor. Sed quis quam a quam aliquam tincidunt nec eget ipsum. Nunc id velit eget odio vehicula vestibulum. Proin sagittis erat vitae vulputate lacinia. Mauris auctor suscipit ligula, vel luctus lacus condimentum eget. Donec semper porta arcu ut fringilla. Donec dapibus ornare massa eu consectetur. In hac habitasse platea dictumst. Etiam id aliquam ipsum, sit amet dictum ipsum. Cras vel risus vitae magna ullamcorper imperdiet at vel sapien.
<br/><br/>
Vivamus tempus ipsum a ultricies ullamcorper. Duis nec sollicitudin arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sed sagittis magna. Fusce venenatis et ex a fermentum. Praesent lectus enim, facilisis nec nisl eu, pretium aliquam nunc. Donec vitae laoreet tortor.
<br/><br/>
Donec pulvinar accumsan dolor in fermentum. Cras at suscipit erat. Ut ut nibh in orci placerat auctor non sit amet felis. Vivamus eu vulputate nisi. Sed ipsum justo, posuere ac felis non, tristique molestie libero. Quisque id porta lacus, a tempor ante. Nunc laoreet vestibulum justo semper tincidunt. Proin id libero ligula. Donec tempor, mauris eget maximus sagittis, lorem purus tempus purus, non ultrices velit nisl sed sem. Vivamus efficitur urna lorem, vitae sollicitudin nunc posuere ac. Maecenas gravida tempor orci, ut viverra eros hendrerit vel. Nunc hendrerit consequat lectus finibus sodales. Sed at justo nunc. Vivamus rhoncus congue hendrerit. Nunc aliquet placerat nunc, facilisis imperdiet ipsum rutrum vitae.
<br/><br/>
Etiam sed risus et orci viverra molestie. In facilisis dictum sodales. Mauris dolor diam, commodo ac vestibulum eget, imperdiet eget libero. Sed tempor neque sit amet libero vestibulum, a vulputate risus scelerisque. Etiam ligula dui, elementum in tempus a, congue nec nulla. In hac habitasse platea dictumst. In id eros eget leo tempus lacinia. Sed sit amet porttitor arcu, nec ultricies enim. Sed vitae tellus suscipit, pellentesque mauris quis, gravida quam. Cras ac posuere massa, in egestas risus. Praesent id diam felis. Quisque id diam convallis, blandit urna eget, sollicitudin metus.
<br/><br/>
Fusce ac velit imperdiet, consequat turpis sit amet, commodo nisi. Proin fermentum nunc nec interdum tempus. Vivamus tempor ut dolor ut interdum. Nulla et sodales odio. Suspendisse potenti. Fusce a urna velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas eu diam et risus tincidunt aliquet ac ut ligula. Sed sit amet leo eget sapien commodo porta. Etiam vel justo velit.
<br/><br/>
Donec quis erat sit amet arcu rutrum pellentesque. Suspendisse malesuada ut ex eu suscipit. Suspendisse turpis ipsum, egestas id lobortis non, euismod sed turpis. Praesent accumsan ullamcorper neque vel commodo. Praesent quis viverra quam. Curabitur est nisi, tincidunt quis rutrum eu, fringilla ac est. Duis eget dignissim neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed pulvinar eros. Quisque ac viverra mauris. Aenean elementum nibh et eros vulputate efficitur. Mauris ut convallis est. Etiam convallis sem vel nisl pretium volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum pulvinar ornare massa, in cursus leo semper vel.`;

const body = document.querySelector("body");
body.append(texto);
const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

//funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};
// Streams

const scroll$ = fromEvent(document, "scroll");
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    //map((event) => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    tap(console.log)
    );
progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
