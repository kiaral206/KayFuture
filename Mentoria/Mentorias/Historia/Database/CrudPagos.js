import { createTask, readTasks } from './Reg.js';


const formularioPagos = document.getElementById("signup-form");
const btnAccion = document.getElementById("Registrar");


// obtenerFormulario();
// obtenerFormularioTr();

let estadoEditando = false;
let id = "";


formularioPagos.addEventListener("submit", async (event) => {
    event.preventDefault();

    const FormUsuario = formularioPagos["nombreUsuario"].value;
    const FormCorreo = formularioPagos["correoUsuario"].value;
    const NumCelular = formularioPagos["NumCelular"].value;
    const NumTransaccion = formularioPagos["NumTransaccion"].value;
    const Curso = formularioPagos["curso"].value;
    

    if (FormUsuario == "" && descripcionTarea == "") {
        console.log("Ambos campos son obligatorios");
        return;
    }

    const CuentaUsuario = {
        Usuario: FormUsuario,
        Correo: FormCorreo,
        NumCelular: NumCelular,
        NumTransaccion: NumTransaccion,
        Curso: Curso,
    }

    if (estadoEditando) {
        updateTask(id, DatosUsuario);
        btnAccion.textContent = "Agregar";
        estadoEditando = false;
    } else {
        try {
            const docReferencia = await createTask(CuentaUsuario);
            console.log("Usuario agregado", docReferencia);
        } catch (error) {
            console.log("Algo salio mal", error);
        }
    }

    formularioPagos.reset();

});

//IDK



//I2
async function obtenerForm(identificador) {
    const task = await getTask(identificador);
    const { titulo, descripcion } = task.data();
    formularioPagos["nombreUsuario"].value = FormUsuario;
    formularioPagos["correoUsuario"].value = FormCorreo;
    formularioPagos["NumCelular"].value = NumCelular;
    formularioPagos["NumTransaccion"].value = NumTransaccion;
    formularioPagos["contraUsuario"].value = Contraseña;

}


function limpiarHtml(elemento) {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}