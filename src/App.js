import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';

const App = () => {

  
  const arrayInformation = [
    {
      nombre: 'Pato',
      mail: 'pato@gmail.com',
      imagen: 'https://picsum.photos/id/237/200/300'
    },
    {
      nombre: 'Carlitos',
      mail: 'carlitos@gmail.com',
      imagen: 'https://picsum.photos/id/143/200/300'
    },
    {
      nombre: 'Lean',
      mail: 'lean@gmail.com',
      imagen: 'https://picsum.photos/id/140/200/300'
    }
  ]
  
  const descripcion = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit enim laudantium dolores, nobis aperiam corporis cum quo hic eum dolore quam nostrum impedit quasi quibusdam ad reprehenderit eaque ipsa accusamus obcaecati delectus rerum. Distinctio pariatur quaerat repellat, ullam modi facere.'
  
  const [contador, setContador] = useState(0)
  const [auth, setAuth] = useState(false)


  const autorizacion = () => {
    setAuth(!auth)
  }

  const suma = () => {
    setContador(contador + 1)
  }

  const resta = () => {
    setContador(contador - 1)
  }
  
  return (
    <>
      <Navbar title='Comision' number={13} letter='i' />
      <Carousel idCarousel='carousel1' data='#carousel1' />
      <Carousel idCarousel='carousel2' data='#carousel2' />
      <div className='d-flex justify-content-evenly'>
        {
          arrayInformation.map(alumno => <Card nombre={alumno.nombre} mail={alumno.mail} imagen={alumno.imagen} color='btn btn-warning' />)
        }
      </div>
      <Card nombre='Andrea' mail='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit enim laudantium dolores, nobis aperiam corporis cum quo hic eum dolore quam nostrum impedit quasi quibusdam ad reprehenderit eaque ipsa accusamus obcaecati delectus rerum. Distinctio pariatur quaerat repellat, ullam modi facere.' imagen='https://picsum.photos/id/142/200/300' color='btn btn-primary' />
      <Footer texto={descripcion} title='Titulo' />
      <div>
        <p className='mx-5 fs-2'>{contador}</p>
        <button className='btn btn-primary m-5' onClick={suma}>Sumar</button>
        <button className='btn btn-primary m-5' onClick={resta}>Restar</button>  
      </div>
      <div>
        {
          contador === 0 ?
          <Card nombre='Andrea' mail='Hola como estas?' imagen='https://picsum.photos/id/142/200/300' color='btn btn-primary' /> :  
          contador >= 1 ?
          <Card nombre='Andrea' mail='Hi, how r u?' imagen='https://picsum.photos/id/142/200/300' color='btn btn-primary' /> :
          <Card nombre='Andrea' mail="Hallo, wie geht's dir?" imagen='https://picsum.photos/id/142/200/300' color='btn btn-primary' />
        }
        <button className='btn btn-primary m-5' onClick={autorizacion}>Idioma</button>
      </div>
      <Form />
    </>
  );
}

export default App;
