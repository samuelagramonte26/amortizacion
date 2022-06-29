import React, { useState } from 'react'
import { Form } from '../components/Form'
import { cal } from '../components/provider/cal'
import { Table } from '../components/Table'

export const Home = () => {
    const [data, setData] = useState([]);
    return (
        <section className=''>
            <h1 className='text-center'>Bienvenido</h1>
            <div className='container'>
                <h4>Simulacion de amortizador de prestamos.</h4>
                <Form cal={cal} set={setData} />
                {
                    data.length > 0 &&
                    <Table data={data} />
                }
            </div>
        </section>
    )
}
