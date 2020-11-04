import React from "react";


function Etapa1() {
  return (
    <div className="Etapa1">
      <h3>DADOS GERAIS</h3>
      <form>
        <label>Qual o seu nome?</label>
        <br />
        <input type="text" value=""/>
        <br />
        <label>Qual sua idade? </label>
        <br />
        <input type="text" value=""/>
        <br />
        <label>Qual seu email?</label>
        <br />
        <input type="email" value=""/>
        <br />
        <label>Qual a sua escolaridade</label>
        <br />
        <select name="time">
          <option value="escolaridade1">Ensino Medio Incompleto</option>
          <option value="escolaridade2">Ensino Medio Completo</option>
          <option value="escolaridade3">Ensino Superior Incompleto</option>
          <option value="escolaridade4">Ensino Superios Completo</option>
        </select>
      </form>
      
    </div>
  );
}

export default Etapa1;
