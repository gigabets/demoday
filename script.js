import React from 'react';
import ReactDOM from 'react-dom';
import './index.html';
import App from './App';

Cors();

fetch(`http://localhost:3000/login/${this.state.cadastro}`).then(resposta => resposta.json()).then(dados =>{
if (nomeform.nome.value==""){
    alert ("Por favor digite o nome.");
    return false;
}

if (nomeform.email.value=="" || nomeform.email.value.index0f('@','0')==-1 || nomeform.email.value.index0f('.','0')==-1){
    alert ("E-mail inválido");
    return false;
}

if (nomeform.estado.selected.index==0){
    alert("Por favor selecione o estado");
    return false;
}

if (nomeform.login.value.length < 5 || nomeform.login.value.length > 15){
    alert("O login deve conter entre 5 e 15 caracteres");
    return false;
}

if (nomeform.login.value.index0f(' ','0')!= -1){
    alert("O login não pode conter espaços em branco");
    return false;
}

if (nomeform.senha.value.length < 5 || nomeform.senha.value.length > 15){
    alert("A senha deve conter entre 5 e 15 caracteres");
    return false;
}

if (nomeform.senha.value.index0f(' ','0')!= -1){
    alert("A senha não pode conter espaços em branco");
    return false;
}

if (nomeform.senha.value!= nomeform.confirmação.value){
    alert ("Senhas não conferem, você digitou duas senhas diferentes");
    return false;
}
if (nomeform.senha.value== nomeform.confirmacao.value){
    fazerLogin = () => {
        fetch(`http://localhost:5000/login/${this.state.usuario}`).then(resposta => resposta.json()).then(dados => {
            if(dados.nome && dados.senha === this.state.senha){
                alert("SUCESSO");
                this.setState({
                    autenticado: true
                });
            }
            else{
                alert("FRACASSO");
            }
        });
    }
    
    render() 

    if(this.state.autenticado){
        return(
            <div>
                <label for="avatar">Profile picture:</label>
                <input type="file"
                       id="avatar" name="avatar"
                       accept="image/png, image/jpeg, documentos/pdf, documentos/docx" />
           </div>
            )
        }
    
    else{
        return (
            <div className="login">
                <h2>Digite seus dados para o login</h2>
                <input onChange={evento => this.setState({usuario: evento.target.value})} value={this.state.usuario} type="text" name="username" id="username" placeholder="Digite aqui o username" />
                <input onChange={evento => this.setState({senha: evento.target.value})} value={this.state.senha} type="password" name="password" id="password" placeholder="Digite aqui o password" />
                <button onClick={this.fazerLogin}>Login!</button>
            </div>
            )
        }
    }
export default FormLogin