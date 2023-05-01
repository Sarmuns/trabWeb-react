import React, { useState, useEffect } from "react";
import axios from "axios";

const Perfil = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const userId = JSON.parse(localStorage.getItem('user')).id;

  useEffect(() => {
    axios
    .get(`http://localhost:3000/accounts/${userId}`, {
        headers: {
          'Content-Type': 'application/json'
        },
     
      })
      .then((response) => {
        const { nome, email, senha } = response.data;
        setNome(nome);
        setEmail(email);
        setSenha(senha);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    axios
      .put(`http://localhost:3000/accounts/${userId}`, {
        nome,
        email,
        senha,
      })
      .then((response) => {
        setIsEditing(false);
        alert("Perfil atualizado com sucesso");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="container my-5">
      <div className="d-flex flex-column w-50 h-50 mx-auto p-5 my-5 shadow p-3 mb-5 bg-white rounded">
        <h2 className="text-center mb-4"> Seu Perfil </h2>
        <form className="text-center">
          <div className="form-group">
           
            <div className="form-group">
              {isEditing ? (
                <input
                  className="form-control m-auto mb-2"
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              ) : (
                <p>Nome: {nome}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            
            <div className="form-group">
              {isEditing ? (
                <input
                  className="form-control m-auto mb-2"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              ) : (
                <p>Email: {email}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            
            <div className="form-group">
              {isEditing ? (
                <input
                  className="form-control m-auto mb-2"
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                />
              ) : (
                <p>Senha: {senha}</p>
              )}
            </div>
          </div>

          <div className="form-group">
            {!isEditing && (
              <button
                className="btn btn-success d-flex mx-auto my-3"
                type="button"
                onClick={handleEdit}
              >
                Editar
              </button>
            )}
          </div>
          {isEditing && (
            <div className="d-flex justify-content-between my-3">
              <button
                type="button"
                className="btn btn-warning mr-2"
                onClick={handleSave}
              >
                Salvar
              </button>
              <button
               

                type="button"
                className="btn btn-danger"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Perfil
