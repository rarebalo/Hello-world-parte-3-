import React, { useState } from 'react';

function Saludo(props) {
  return (
    <div>
      Hello my friend {props.msj}!
    </div>
  );
}

export default Saludo;