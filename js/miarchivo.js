let infoTema = "Este es el listado en tendencia.\nElegí el numero de la canción que te interesa \n\n1- Duki - Givenchy \n2- Bad Bunny - Ojitos Lindos \n3- Katy Perry - Dark Horse \n4- Bailando - El Jordan 23 \n5- Quevedo: Bzrp Music Sessions\n\n Si no te gusta esta selección, pone en Cancelar"

let eleccion = prompt (infoTema)


function handleChoice (dato) {
    switch (dato) {
        case "1":
            alert("GIVENCHY - El single que DUKI volvio al trap. Lanzado en Julio del 2022")
            break;
        case "2":
            alert("Bad Bunny lanzó su disco 'Un Verano Sin Ti' junto con Bomba Estereo. Lanzado en Mayo del 2022");
            break;
        case "3":
            alert("Katy Perry lanzó su sencillo que fue iconico llegando a Mil millones de reproducciones.");
            break;
        case "4":
            alert("Jordan 23 esta creciendo cada vez mas en la música urbana. Este su nuevo sencillo. Lanzado en Febrero del 2022");
            break;
        case "5":
            alert("La nueva Sessions de Bizarrap. Quevedo es el artista invitado. Lanzada en Julio del 2022");
            break;
        default:
            alert("Bueno, creo que no se entendio la consigna. Intenta de nuevo eligiendo del 1 al 5 que música elegir.");
            break;

    }
    
}

while (eleccion != null){
    handleChoice (eleccion);
    eleccion = prompt (infoTema)
}