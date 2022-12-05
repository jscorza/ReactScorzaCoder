import React, { createContext, useState } from 'react';
import { useRef } from 'react';

export const Form = createContext({});

const Formulario = () => {

    const [errors, setErrors] = useState({
      phoneHasErrors: false, 
      emailHasErrors: false
    })

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const checkemailInputRef = useRef();
    const phoneInputRef = useRef();

    const procesarFormulario = (e) => {
        e.preventDefault() 
        const datos = {
          name: nameInputRef.current.value,
          email: emailInputRef.current.value,
          checkemail: checkemailInputRef.current.value,
          phone: phoneInputRef.current.value
        }
        validateError(datos)
        if (errors.emailHasErrors || errors.phoneHasErrors){
          console.log("Error")
        }
    }

    const validateError = (datos) => {
      if (isNaN(datos.phone)){
        setErrors({...errors, phoneHasErrors:true})
      }
      if (datos.email !== datos.checkemail){
        setErrors({...errors, emailHasErrors:true})
      }
      console.log(errors)
      console.log(datos)
    }


    return (
        <div>
            <h1>Formulario</h1>
            <form onSubmit={procesarFormulario}>
                <input
                    name="nombre"
                    ref={
                        nameInputRef
                    }
                    className="form-control my-2"
                    placeholder="Ingrese su nombre"
                ></input>
            
                <input
                    name="email"
                    ref={
                      emailInputRef
                    }
                    className="form-control my-2"
                    placeholder="Ingrese email"
                ></input>
                <input
                    name="checkemail"
                    ref={
                      checkemailInputRef
                
                    }
                    className="form-control my-2"
                    placeholder="Ingrese checkemail"
                ></input>
                {errors.emailHasErrors&&<span className="text-danger text-small d-block mb-2">
                    Los emails no coinciden
                </span>}
                <input
                    name="telefono"
                    ref={
                        phoneInputRef
                    }
                    className="form-control my-2"
                    placeholder="Ingrese telefono"
                ></input>
                {errors.phoneHasErrors&&<span className="text-danger text-small d-block mb-2">
                    El telefono debe ser numerico
                </span>}
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    >
                Continuar
                </button>
            </form>
            <ul className="mt-2">
            </ul>
        </div>
    );
}
 
export default Formulario;