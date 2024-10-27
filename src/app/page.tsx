import React from 'react'
import { Button, Input, Select} from 'antd'

const options = [
  {label: 'Appointments', value: 'Appointments'},
  {label: 'Prescriptions', value: 'Prescriptions'},
  {label: 'Records', value: 'Records'},
]

const HomePage = () => {
  return (
    <div className='p-5 flex flex-col gap-5 w-max'>
      <h1>Medi-Care - Home Page</h1>
      <Input placeholder='Enter Username' />
      <Select placeholder='Options' options={options} />
      <Button type='primary' className='bg-[#ff4500]'>Submit</Button>
    </div>
  )
}

export default HomePage
