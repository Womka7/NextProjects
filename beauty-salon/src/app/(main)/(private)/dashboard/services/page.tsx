import { Aside } from '@/app/ui/atoms/Aside'
import { Button } from '@/app/ui/atoms/Button'
import React from 'react'
import './asidepageStyle.scss'

export default function ServicesPage() {
  return (
    <main>
      <Aside>
      <Button className='btnaside'>Servicios</Button>
      <Button className='btnaside'>Citas</Button>
      <Button className='btnaside'>Clientes</Button>
      <Button className='btnaside'>Empleados</Button>
      </Aside>
      {/* <h1>ServicesPage</h1>
      <p>Hola podemos vizualizar desde el service</p> */}
    </main>
  )
}