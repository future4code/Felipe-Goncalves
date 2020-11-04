import React from "react";

function Etapa3() {
  return (
    <div className="Etapa3">
      <h3>INFORMAÇÕES GERAIS DE ENSINO</h3>
      <form>
        <label>Por que você não terminou o curso de graduação?</label>
        <br />

        <input />
        <br />

        <label>Você fez algum curso complementar?</label>
        <br />

        <select name="cusoComplementar">
          <option value="curso1">Curso Tecnico</option>
          <option value="curso2">Curso de Ingrlês</option>
          <option value="curso3">Curso Complementar</option>
        </select>
      </form>
      
    </div>
  );
}

export default Etapa3;
