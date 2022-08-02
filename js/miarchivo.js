let infoTema = "1- GIVENCHY \n2- Ojitos lindos \n3- Katy Perry - Dark Horse \n4- Bailando - El Jordan 23 \n5- Quevedo: Bzrp Music Sessions\n\n Este es el listado en tendencia.\n ¿Cúal te interesa? \n\n Si no te gusta la música, cerra esta ventana"

let eleccion = prompt (infoTema)


function handleChoice (dato) {
    switch (dato) {
        case "1":
            alert("VAMO DUKO")
            break;
        case "2":
            alert("Grande benito");
            break;
        case "3":
            alert("keiti perry");
            break;
        case "4":
            alert("El chileno sabe");
            break;
        case "5":
            alert("biza biza rrrrap");
            break;
        default:
            alert("Sos o te haces? elegí un numero, bobo.");
            break;

    }
    
}

while (eleccion != null){
    handleChoice (eleccion);
    eleccion = prompt (infoTema)
}