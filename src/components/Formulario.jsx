import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [senhaIgualConfirmarSenha, setSenhaIgualConfirmarSenha] = useState(true);
  const [users, setUsers] = useState([['Samuel', '123'], ['Julia', '123456']])


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
    if (senha !== confirmarSenha) {
      setSenhaIgualConfirmarSenha(false);
      return;
    }
  }
  
  const handleSignUp = () => {
    setUsers([...users, [nome, senha]])
  }
  useEffect(() => {
    console.log(users);
    }, [users]);
    
  
  
  return (
    <div className="container custom-card text-center my-3 m-auto w-25">
      <h1 className="my-4">Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group justify-content-center">
          <input type="text" className="form-control" id="nome" name="nome" placeholder="Nome" value={nome} onChange={handleNomeChange} /><br />
          <input type="email" className="form-control" id="email" name="email" placeholder="E-mail" value={email} onChange={handleEmailChange} /><br />
          {senhaIgualConfirmarSenha ? (
            <>
              <input type="password" className="form-control" id="senha" name="senha" placeholder="Senha" value={senha} onChange={handleSenhaChange} /><br />
              <input type="password" className="form-control" id="confirmarsenha" name="confirmarsenha" placeholder="Confirme sua senha" value={confirmarSenha} onChange={handleConfirmarSenhaChange} /><br />
              <Link className="btn btn-success btn-lg my-3" onClick={handleSignUp}>Cadastrar</Link>
            </>
          ) : (
            <>
              <input type="password" className="form-control is-invalid" id="senha" name="senha" placeholder="Senha" value={senha} onChange={handleSenhaChange} /><br />
              <input type="password" className="form-control is-invalid" id="confirmarsenha" name="confirmarsenha" placeholder="Confirme sua senha" value={confirmarSenha} onChange={handleConfirmarSenhaChange} />
              <p className="text-danger d-flex">Senhas não estão iguais</p><br />
              <div className="btn btn-secondary disabled btn-lg my-3">Cadastrar</div>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

export default Formulario;
