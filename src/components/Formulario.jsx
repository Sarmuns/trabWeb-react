import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [senhaIgualConfirmarSenha, setSenhaIgualConfirmarSenha] = useState(true);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
    setSenhaIgualConfirmarSenha(event.target.value === confirmarSenha);
  }

  const handleConfirmarSenhaChange = (event) => {
    setConfirmarSenha(event.target.value);
    setSenhaIgualConfirmarSenha(event.target.value === senha);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Checa se senha e confirmarSenha são iguais
    if (senha !== confirmarSenha) {
      setSenhaIgualConfirmarSenha(false);
      return;
    }
  }

  return (
    <div className="container custom-card text-center my-5">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group justify-content-center">
          <input type="text" className="form-control" id="nome" name="nome" placeholder="Nome" value={nome} onChange={handleNomeChange} /><br />
          <input type="email" className="form-control" id="email" name="email" placeholder="E-mail" value={email} onChange={handleEmailChange} /><br />
          <input type="password" className="form-control" id="senha" name="senha" placeholder="Senha" value={senha} onChange={handleSenhaChange} /><br />
          <input type="password" className="form-control" id="confirmarsenha" name="confirmarsenha" placeholder="Confirme sua senha" value={confirmarSenha} onChange={handleConfirmarSenhaChange} /><br />
          {senhaIgualConfirmarSenha ? (
            <Link to="/home" className="btn btn-success btn-lg my-3">Cadastrar</Link>
          ) : (
            <p className="text-danger">Senha e confirmar senha não estão iguais</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Formulario;
