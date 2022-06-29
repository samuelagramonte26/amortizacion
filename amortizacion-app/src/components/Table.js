import React, { useRef } from 'react'

export const Table = ({ data }) => {
    const tabla = useRef();
    const print = e => {
        console.log(tabla.current.innerHTML)
    }
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-4 border border-info rounded-3 p-3'>
                    <h5>Cuota mensual: <span className='text-black-50'>{data["cuota"].toFixed(2)}</span></h5>
                    <h5>Total de interes:  <span className='text-black-50'>{data["totalInteres"].toFixed(2)}</span></h5>
                    <h5>Total de pagos:  <span className='text-black-50'>{data["pagos"]}</span></h5>
                    <h5>Monto del prestamo:  <span className='text-black-50'>{data["monto"]}</span></h5>
                </div>
            </div>
            <div ref={tabla}>
                <table className='table table-hover mt-3'>
                    <caption>Amortizacion</caption>
                    <thead className='table-secondary'>
                        <tr>
                            <th>Cuota</th>
                            <th>Interes</th>
                            <th>Abono</th>
                            <th>Saldo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((data, i) => {
                                return (
                                    <tr key={i + 1}>
                                        <td>{data.c}</td>
                                        <td>{data.i}</td>
                                        <td>{data.a}</td>
                                        <td>{data.s}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <button onClick={print} className='btn btn-sm btn-success  justify-content-end'><i className="bi bi-file-earmark-pdf-fill"></i> Guardar</button>
        </div>
    )
}
