import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Perfil = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState([]);
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
        setData(response.data)
        setNome(response.data.username)
        setEmail(response.data.email)
        setSenha(response.data.password)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const newUser = {
      id: userId,
      username: nome,
      email: email,
      password: senha,
      playlistsid: data.playlistsid,
    };
    axios
      .put(`http://localhost:3000/accounts/${userId}`, newUser)
      .then((response) => {
        setIsEditing(false);
        localStorage.setItem('user', JSON.stringify(newUser));
        alert("Perfil atualizado com sucesso");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    navigate('/')
    localStorage.clear();
  }

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
                <p>Nome: {data.username}</p>
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
                <p>Email: {data.email}</p>
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
                <p>Senha: *****</p>
              )}
            </div>
          </div>

          <div className="form-group">
            {!isEditing && (
              <div className="d-flex justify-content-between my-3">
                <button
                  className="btn btn-success d-flex mx-auto my-3"
                  type="button"
                  onClick={handleEdit}
                >
                  Editar
                </button>

                <button
                  type="button"
                  className="btn btn-danger d-flex mx-auto my-3"
                  onClick={handleLogout}
                >
                  LogOut
                </button>
              </div>
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
