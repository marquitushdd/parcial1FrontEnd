import React from 'react';

// nombre y apellido

const CampoNombreApellido = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default CampoNombreApellido;