import React, { useRef } from 'react'

export const Table = ({ data }) => {
    const tabla = useRef();
    const print = e => {
   
        let content =tabla.current.innerHTML ;
        window.document.write(content);
         window.document.close();
     
         const head = window.document.getElementsByTagName("head");
         head[0].innerHTML =  `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
         integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">`;
      setTimeout(()=>{
           window.print();
         window.close();
       window.location = "/";
      },500)
    }
    return (
        <div className='container mt-5'>
           
            <div ref={tabla}>
            <div className='row'>
                <div className='col-4 border border-info rounded-3 p-3'>
                    <h5>Cuota mensual: <span className='text-black-50'>{data["cuota"].toFixed(2)}</span></h5>
                    <h5>Total de interes:  <span className='text-black-50'>{data["totalInteres"].toFixed(2)}</span></h5>
                    <h5>Total de pagos:  <span className='text-black-50'>{data["pagos"]}</span></h5>
                    <h5>Monto del prestamo:  <span className='text-black-50'>{data["monto"]}</span></h5>
                </div>
            </div>
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
