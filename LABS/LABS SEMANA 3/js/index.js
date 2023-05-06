// Iteration 1: Names and Input
let hackerOne = "Sandra";
    console.log(`El nombre del conductor es  ${hackerOne}`);  
let hackerTwo = "Mireia";
    console.log(`El nombre del navegante es ${hackerTwo}`);

// Iteration 2: Conditionals

if (hackerOne.length > hackerTwo.length){
    console.log(`El conductor tiene el nombre más largo. Tiene ${hackerOne.length} caracteres.` )
}else if(hackerOne.length < hackerTwo.length){
    console.log(`Parece que el navegante tiene el nombre más largo, tiene ${hackerTwo.length} caracteres.`)
}else{
    console.log(`¡Vaya, ambos tienen nombres igual de largos, ${hackerOne.length} caracteres!.`)
};

// Iteration 3: Loops

//3.1
let newHackerName="";

for (let index = 0; index < hackerOne.length; index++) {

    newHackerName += hackerOne[index].toUpperCase() + " ";
}

console.log(newHackerName);

//3.2

newHackerName="";

for (let index = hackerOne.length-1; index >= 0; index--) {

    newHackerName += hackerOne[index];
}

console.log(newHackerName);

//3.3


let orden =[hackerOne,hackerTwo];
    orden=orden.sort();

  
if (hackerOne == hackerTwo){
    console.log("¿Qué? ¿Los dos tienen el mismo nombre?"); 
} else if (orden[0]==hackerOne){
    console.log("El nombre del conductor va primero.");
} else {
    console.log("Yo, el navegador va primero definitivamente.");
}

//BONUS

let parrafos ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia, augue vitae efficitur sollicitudin, ipsum ante elementum lorem, ut luctus quam ante at dui. Etiam ullamcorper nunc eget lectus condimentum, eu ornare lacus ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec purus nunc, tempus ut odio eget, varius pretium leo. Vivamus tincidunt rhoncus arcu id egestas. Mauris sed ipsum ex. Mauris quis tortor sed nibh ornare maximus quis non justo. Nullam sed lorem mauris. Donec sed lectus nulla. Nunc vehicula lobortis mattis. Quisque vitae mi vehicula, euismod justo in, vehicula lacus. Aliquam ligula velit, commodo nec malesuada ut, pellentesque quis odio. Donec condimentum ipsum non mauris finibus, ut blandit mauris lacinia. Morbi et ultricies enim. Aenean sollicitudin dictum condimentum. Etiam ac hendrerit ligula, et venenatis mauris. Curabitur id hendrerit purus, eget elementum diam. Sed in vehicula mi. Morbi id nibh ac lectus efficitur tincidunt ac id dolor. Duis maximus venenatis viverra. Nullam velit erat, porttitor in purus vel, ullamcorper lacinia tortor. Sed iaculis ligula ut dapibus ultricies. Duis vehicula mauris felis. Fusce eu aliquam tellus, pulvinar laoreet est. Ut vehicula tincidunt sagittis. Suspendisse ornare iaculis dolor sit amet sodales. Suspendisse ultricies ex quis lorem aliquam cursus. Etiam eget est auctor, interdum eros sit amet, convallis nibh. Pellentesque consequat eros sed eros condimentum molestie. Phasellus feugiat ligula in scelerisque scelerisque. Quisque ultricies facilisis bibendum. Nam sapien diam, viverra non mollis in, scelerisque a nibh. Maecenas egestas quam ac vehicula maximus. Phasellus vitae condimentum nunc. Phasellus blandit malesuada nulla et fringilla. In nisl lorem, lacinia facilisis enim vitae, pellentesque accumsan felis. Suspendisse sagittis varius purus, a rhoncus ipsum blandit vel. In placerat neque vitae dui vulputate fermentum. Mauris aliquet justo vel diam ultrices, nec elementum nulla porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam elementum non leo a commodo. Ut rhoncus metus eu eleifend lacinia.";

console.log(`El párrafo tiene ${parrafos.split(' ').length} palabras`);

let etcount=0;
for (let index = 0; index < parrafos.split(' ').length; index++) {
    if(parrafos.split(' ')[index].toLowerCase()=="et"){
        etcount=etcount+1;
    };
    
}

console.log(`El párrafo contiene la palabra et ${etcount} veces`);

//BONUS 2

let phraseToCheck="A man, a plan, a canal, ¡Panamá!";
let phraseToCheckWS=phraseToCheck.replace(/[\W_]/g, "");
let newphraseToCheck="";
for (let index = phraseToCheckWS.length-1; index >= 0; index--) {

    newphraseToCheck += phraseToCheckWS[index].toLowerCase();
}


if(phraseToCheckWS=newphraseToCheck){
    console.log(`la cadena ${phraseToCheck} es un palíndromo`);
}else{
    console.log(`la cadena ${phraseToCheck} no es un palíndromo`);
}

