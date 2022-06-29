import React, { useState } from 'react'
import { handleChange } from '../components/provider/handleChange'

export const Form = ({cal,set}) => {
    const [datos,setDatos] = useState({
        monto : '',
        interes : '',
        plazo : ''
    })
    return (
        <div className='container mt-3'>
            <form>
                <div className='row'>
                    <div className='col-6'>
                <div className="mb-3">
                    <label className="form-label">Monto del prestamo</label>
                    <input type="number" name='monto' placeholder='00.00' className="form-control" onChange={(e)=>handleChange(e,setDatos)} id="monto"/>
                      
                </div>
                <div className="mb-3">
                    <label className="form-label">Taza de interes anual</label>
                    <input type="number" className="form-control" name='interes' id="interes"  onChange={(e)=>handleChange(e,setDatos)} placeholder='00'/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Plazo de amortizacion (meses)</label>
                    <input type="number" name='plazo' placeholder='00' className="form-control"  onChange={(e)=>handleChange(e,setDatos)} id="plazo"/>
                </div>
          
                </div>
                </div>
                <button type="submit" onClick={(e)=>cal(e,datos,set)} className="btn  btn-info"><i className="bi bi-calculator"></i> Calcular</button>
            </form>
        </div>
    )
}
