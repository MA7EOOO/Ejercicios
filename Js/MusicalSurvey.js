// 6. Una emisora con presencia en diferentes ciudades desea conocer el rating de canciones y cantantes
// más escuchados(sonados) en este semestre del año.Por lo tanto, se ha pedido a estudiantes del SENA
// del programa de tecnólogo en análisis y desarrollo de software desarrollar una solución que 
// permita conocer la respuesta de 6 personas con relación a sus gustos musicales.Con fines 
// administrativos y realizar una rifa entre las personas encuestadas, la emisora desea poder 
// registrar de las personas entrevistadas su nombre, número de identificación(cédula), fecha de 
// nacimiento, correo electrónico, ciudad de residencia, ciudad de origen.Además, se deberá poder 
// almacenar el artista y título de hasta 3 canciones favoritas en GFPI - F - 135 V01 cada una de
//  las personas que se ingrese, teniendo en cuenta lo anterior, se sugiere que la solución deberá
// mostrar un menú que permite las siguientes opciones:
// a.Agregar una persona con los datos que se listan anteriormente.
// b.Mostrar la información personal de una persona particular por medio de su posición en el vector


class persona {
    constructor(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen, canciones){
        this.nombre = nombre;
        this.cedula = cedula;
        this.fechaNacimiento = fechaNacimiento;
        this.correo = correo;               
        this.ciudadResidencia = ciudadResidencia;
        this.ciudadOrigen = ciudadOrigen; 
        this.canciones = canciones; // Array para almacenar las canciones favoritas

    }
    mostrarInfo (){
        
        console.log(`
            nombre: ${this.nombre}
            Cédula: ${this.cedula}
            Fecha de Nacimiento: ${this.fechaNacimiento}
            Correo: ${this.correo}
            Ciudad de Residencia: ${this.ciudadResidencia}
            Ciudad de Origen: ${this.ciudadOrigen}
            Canciones Favoritas:`);
             this.canciones.forEach((c, i)=>{
                console.log(`${i + 1}. ${c.titulo} - ${c.artista}`);
            })
    

    }
}

const personas = [];

function agregarPersona() {
    const nombre = prompt("Ingrese el nombre de la persona: ");
    const cedula = prompt("Ingrese el número de identificación (cédula): ");
    const fechaNacimiento = prompt("Ingrese la fecha de nacimiento (DD/MM/AAAA): ");
    const correo = prompt("Ingrese el correo electrónico: ");
    const ciudadResidencia = prompt("Ingrese la ciudad de residencia: ");
    const ciudadOrigen = prompt("Ingrese la ciudad de nacimiento: ")
    const canciones = []
    for(var i = 0; i < 3; i++){
        const titulo = prompt(`Ingrese el titulo de la canción No ${i + 1}`);
        const artista = prompt(`Ingrese el nombre del artista de la canción No ${i + 1}`);
        canciones.push({titulo: titulo, artista: artista});
    }
    var nuevaPersona = new persona(nombre, cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen, canciones);
    personas.push(nuevaPersona);
    console.log("Persona agregada exitosamente.")
}

function mostrarPersona() {
 const index = parseInt(prompt("Ingrese la posicion de la persona del 0 al " + (personas.length - 1) + ": "));
    if (index >= 0 && index < personas.length) {
        personas[index].mostrarInfo();
    } else {
        console.log("Posición inválida. Por favor, ingrese un número entre 0 y 5.");
    }
}

function menu() {
    let salir = false;
    while (!salir) {
        const opcion = prompt(`
        --- Menú Principal ---
        a. Agregar persona
        b. Mostrar información de las personas por posición
        c. Salir
        Seleccione una opción: `);
        switch (opcion.toLowerCase()){
            case "a":
                if (personas.length < 6){
                    agregarPersona();
                }else{
                    console.log("Ya se han agregado 6 personas, no se pueden agregar más.");
                }
                break;
            
            case "b": 
            mostrarPersona();
            break;
        
            case "c":
                salir = true;
                console.log("Usted ha salido del menú")
                break;
            default:
                console.log("Opcion invalida, por favor intente de nuevo.");
                break;
            }
    }
}
menu();