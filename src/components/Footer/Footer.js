import React from 'react'
import Card from '../Card/Card'

const Footer = ({texto, title}) => {
  return (
    <div className='d-flex justify-content-evenly'>
      <p className='w-25'>{texto}</p>
      <p>{title}</p>
      <Card nombre={123} mail='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit enim laudantium dolores, nobis aperiam corporis cum quo hic eum dolore quam nostrum impedit quasi quibusdam ad reprehenderit eaque ipsa accusamus obcaecati delectus rerum. Distinctio pariatur quaerat repellat, ullam modi facere.' imagen='https://picsum.photos/id/155/200/300' color='btn btn-danger' />
    </div>
  )
}

export default Footer