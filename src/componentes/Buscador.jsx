import React from 'react';

export default function Buscador({ data, setDataFilter }) {
  function inputHandler(e) {
    const buscarPalabra = e.target.value.toLowerCase();

    const resultado = data.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(buscarPalabra) ||
        colaborador.correo.toLowerCase().includes(buscarPalabra) ||
        colaborador.edad.toString().includes(buscarPalabra) || // Convertir a string para incluir en la búsqueda
        colaborador.cargo.toLowerCase().includes(buscarPalabra) ||
        colaborador.telefono.includes(buscarPalabra)
    );

    setDataFilter(resultado);
  }

  return (
    <div className='buscador col-12 col-md-6'>
      <input
        type='text'
        name='buscador'
        id='buscador'
        placeholder='Busca un colaborador'
        className='form-control mb-3'
        onChange={inputHandler}
      />
    </div>
  );
}