import React, { useRef, useState } from 'react'
import { handleChange } from '../components/provider/handleChange'

export const Form = ({ cal, set }) => {
    const [datos, setDatos] = useState({
        monto: '',
        interes: '',
        plazo: ''
    })
    const montoD = useRef();
    const interes = useRef();
    const interesD = useRef();
    const plazo = useRef();
    const plazoD = useRef();
    const monto = useRef();
    const validar = (e) => {
        e.preventDefault();

        const mensaje = "Debe colocar un valor valido!";
        let result = false;
        if (monto.current.value === "") {
            montoD.current.innerHTML = `${mensaje} Ejemplo: 10,000`;
            result = true;
        } else {
            montoD.current.innerHTML = ""

        }
        if (interes.current.value === "") {
            interesD.current.innerHTML = `${mensaje} Ejemplo: 18`;
            result = true;
        } else {
            interesD.current.innerHTML = ""

        }
        if (plazo.current.value === "") {
            plazoD.current.innerHTML =`${mensaje} Ejemplo: 12`;
            result = true;
        } else {
            plazoD.current.innerHTML = ""

        }
        if (result) return;
       // console.log(result)
        cal( datos, set)

    }
    return (
        <div className='container mt-3'>
            <form>
                <div className='row'>
                    <div className='col-6'>
                        <div className="mb-3">
                            <label className="form-label">Monto del prestamo</label>
                            <input type="number" name='monto' ref={monto} placeholder='Ej: 10,000' className="form-control" onChange={(e) => handleChange(e, setDatos)} id="monto" />
                            <span className='text-danger' ref={montoD}></span>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Taza de interes anual</label>
                            <input type="number" ref={interes} className="form-control" name='interes' id="interes" onChange={(e) => handleChange(e, setDatos)} placeholder='Ej: 18' />
                            <span className='text-danger' ref={interesD}></span>

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Plazo de amortizacion (meses)</label>
                            <input type="number" ref={plazo} name='plazo' placeholder='Ej: 24' className="form-control" onChange={(e) => handleChange(e, setDatos)} id="plazo" />
                            <span className='text-danger' ref={plazoD}></span>

                        </div>

                    </div>
                </div>
                <button type="submit" onClick={(e) => validar(e)} className="btn  btn-info"><i className="bi bi-calculator"></i> Calcular</button>
            </form>
        </div>
    )
}
