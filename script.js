class ServicioError extends Error {
    constructor(mensaje) {
        this.name = "ServicioError";
    }
}

function obtenerDatosUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.3;
            if(existo) {
                resolve({ usuario: "Ana", rol: "estudiante" });
            }else {
                reject(new ServicioError("No se pudo conectar con el servicio"));
            }
        },800);
    });
}