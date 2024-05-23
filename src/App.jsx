import { useEffect, useState } from "react"
import "./estilos.css"
import "./comprobaciones"
import { ComprobarApellido, ComprobarNombre, ComprobarNumero, ComprobarCorreo } from "./comprobaciones"



export function App() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        numero: '',
        correo: ''
    })

    const changes = (ev) => {
        const {name, value} = ev.target;
        setFormData({
            ...formData, 
            [name]: value
        });

        
        document.getElementById("nombreIncorrecto").style.display = 'none'
        document.getElementById("apellidoIncorrecto").style.display = 'none'
        document.getElementById("numeroIncorrecto").style.display = 'none'
        document.getElementById("correoIncorrecto").style.display = 'none'
    }

    const addUser = (ev) => {
        ev.preventDefault();

        if (ComprobarNombre(formData.nombre) & ComprobarApellido(formData.apellido) & ComprobarNumero(formData.numero) & ComprobarCorreo(formData.correo)){
            sendData(formData);
            setFormData({
                nombre: '',
                apellido: '',
                numero: '',
                correo: ''
            })
        } else {
            console.log("Hay errores");
        }

        
    }

    
    function sendData(data) {
        fetch("http://localhost:3000/servidor",{                 //para php -> http://localhost:8000/servidor.php
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
        })
        .catch(error => {
            console.error("Error al conectar con el servidor: ", error);
        })
    }

    return (  
        <form className="formulario" onSubmit={addUser} >
            <h1>FORMULARIO</h1>

            <div className="campo">
                <label htmlFor="nombre">Nombre</label>
                <input className="form-control" type="text" name="nombre" id="nombre" value={formData.nombre} onChange={changes} />  
                <div id="nombreIncorrecto"><p className="text-danger">El nombre es incorrecto</p></div>
            </div>
    
            <div className="campo">
                <label htmlFor="apellido">Apellido</label>
                <input className="form-control" type="text" name="apellido" id="apellido" value={formData.apellido} onChange={changes} />
                <div id="apellidoIncorrecto"><p className="text-danger">El apellido es incorrecto</p></div>
            </div>
    
            <div className="campo">
                <label htmlFor="numero">Número</label>
                <input className="form-control" type="text" name="numero" id="numero" value={formData.numero} onChange={changes} />
                <div id="numeroIncorrecto"><p className="text-danger">El numero es incorrecto</p></div>
            </div>
    
            <div className="campo">
                <label htmlFor="correo">Correo</label>
                <input className="form-control" type="text" name="correo" id="correo" value={formData.correo} onChange={changes} />
                <div id="correoIncorrecto"><p className="text-danger">El correo es incorrecto</p></div>
            </div>

            <button className="btn btn-primary" type="submit">Actualizar</button>
        </form>

    )
}