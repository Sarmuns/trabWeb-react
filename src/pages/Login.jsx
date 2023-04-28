import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {

        axios
            .get("http://localhost:3000/accounts", {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    email: email,
                    password: senha
                }
            })
            .then((response) => {
                console.log(response.data)
                if (response.data.length > 0) {
                    navigate('/profile')
                } else {
                    alert("E-mail ou senha incorretos!")
                }
            })
    }

    return (
        /*eslint-disable */
            <div className="d-flex flex-column w-50 h-50 mx-auto p-5 my-5 shadow p-3 mb-5 bg-white rounded">
                <h2 className="text-center my-3">Login</h2>
                <input type="email" className="form-control m-auto mb-2" id="email" name="email" placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
                <input type="password" className="form-control m-auto mb-2" id="senha" name="senha" placeholder="Senha" value={senha} onChange={(event) => setSenha(event.target.value)} />
                <div className="d-flex justify-content-between">
                    <Link to="/cadastro" className="btn btn-success btn-lg my-3">Cadastre-se</Link>
                    <div className="btn btn-success btn-lg my-3" onClick={handleLogin}>Login</div>
                </div>
            </div>
    );
}

export default Login