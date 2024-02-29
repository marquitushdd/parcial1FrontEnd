import React, { useState } from 'react';
import MenuDesplegable from './MenuDesplegable';
import CampoNombreApellido from './CampoNombreApellido';

const generosMusicales = ['selecciona tu opcion', 'Rock', 'Pop', 'Electrónica', 'Hip-hop', 'Jazz', 'Cumbia', 'K-Pop', 'Phonk', 'Otros'];
const opcionesSexo = ['selecciona tu opcion', 'Masculino ♂️', 'Femenino ♀️'];

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [generoMusical, setGeneroMusical] = useState('');
  const [sexo, setSexo] = useState('');

  const [registroExitoso, setRegistroExitoso] = useState(false);

  const [nombreError, setNombreError] = useState('');
  const [apellidoError, setApellidoError] = useState('');
  const [generoMusicalError, setGeneroMusicalError] = useState('');
  const [sexoError, setSexoError] = useState('');
// validaciones del formulario --------------------------------------------------------------------------------------------------------------------------------
  const validateForm = () => {
    let isValid = true;

    if (nombre.trim().length < 3 || !/^[a-zA-Z]+$/.test(nombre)) {
        setNombreError('Tu nombre tiene que tener mas de 3 letras sin espacios');
        isValid = false;
      } else {
        setNombreError('');
      }

      if (apellido.trim().length < 6 || !/^[a-zA-Z]+$/.test(apellido)) {
        setApellidoError('Tu apellido tiene que tener mas de 6 letras');
        isValid = false;
      } else {
        setApellidoError('');
      }

    if (generoMusical === '') {
      setGeneroMusicalError('Por favor chequea que la información sea correcta');
      isValid = false;
    } else {
      setGeneroMusicalError('');
    }

    if (sexo.trim() === '') {
        setSexoError('Por favor chequea que la información sea correcta');
        isValid = false;
        } else {
        setSexoError('');
    }
    return isValid;
  };

  const handleSubmit = (e) => {e.preventDefault();
    if (validateForm()) {
        setRegistroExitoso(true);
        console.log({nombre}, {apellido}, {generoMusical}, {sexo});
    } else {
      setRegistroExitoso(false);
      console.log('no valido');
    }
  };
// termina la validacion del formulario -----------------------------------------------------------------------------------------------------------------------
  return (
    <form onSubmit={handleSubmit}>
      <CampoNombreApellido label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      {nombreError && <p style={{ color: 'red' }}>{nombreError}</p>}

      <CampoNombreApellido label="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      {apellidoError && <p style={{ color: 'red' }}>{apellidoError}</p>}

      <MenuDesplegable label="Género Musical" options={generosMusicales} value={generoMusical} onChange={(e) => setGeneroMusical(e.target.value)} />
      {generoMusicalError && <p style={{ color: 'red' }}>{generoMusicalError}</p>}

      <MenuDesplegable label="Sexo" options={opcionesSexo} value={sexo} onChange={(e) => setSexo(e.target.value)} />
      {sexoError && <p style={{ color: 'red' }}>{sexoError}</p>}

      <button type="submit">Submit</button>

      {registroExitoso && (
        <p style={{ color: 'green', marginTop: '10px' }}>
          Hola {nombre} {apellido}! <br /> Tu género musical favorito es {generoMusical}, super cool. <br /> Tu sexo es {sexo}.
        </p>
      )}
    </form>
  );
};

export default Formulario;