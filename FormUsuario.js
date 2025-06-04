import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormUsuario() {

    const navegacao = useNavigate();
    const { id } = useParams();

    // Estados para cada campo
    const [nome, setNome] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');

    // Voltar para a listagem de usuários
    const voltar = () => {
        navegacao('/listausuario');
    }

    // Buscar os dados do usuário (quando em modo de edição)
    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:4000/usuario/${id}`);
        setNome(data.nome);
        setNascimento(data.nascimento);
        setCpf(data.cpf);
        setEmail(data.email);
        setTelefone(data.telefone);
        setSenha(data.senha);
    }

    // Método para alterar um usuário
    const alterar = async () => {
        let body = {
            "nome": nome,
            "nascimento": nascimento,
            "cpf": cpf,
            "email": email,
            "telefone": telefone,
            "senha": senha
        };
        await axios.put(`http://localhost:4000/usuario/${id}`, body);
        voltar();
    }

    // Método para inserir um usuário
    const inserir = async () => {
        let body = {
            "nome": nome,
            "nascimento": nascimento,
            "cpf": cpf,
            "email": email,
            "telefone": telefone,
            "senha": senha
        };
        await axios.post(`http://localhost:4000/usuario`, body);
        voltar();
    }

    // Método para excluir um usuário
    const excluir = async () => {
        await axios.delete(`http://localhost:4000/usuario/${id}`);
        voltar();
    }

    // Decidir se salva como inserir ou alterar
    const salvar = async () => {
        if (id) {
            alterar();
        } else {
            inserir();
        }
    }

    // Carregar dados se estiver em modo de edição
    useEffect(() => {
        if (id) {
            selecionar();
        }
    }, []);

    return (
        <>
            <div className="container mt-5">
                <TituloCadastro id={id} titulo="Usuário" />
                <form>
                    <div className="mb-3">
                        <label className="form-label">Código</label>
                        <input type="text" className="form-control"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            value={nome}
                            onChange={(evento) => setNome(evento.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Nascimento</label>
                        <input
                            type="text"
                            className="form-control"
                            value={nascimento}
                            onChange={(evento) => setNascimento(evento.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">CPF</label>
                        <input
                            type="text"
                            className="form-control"
                            value={cpf}
                            onChange={(evento) => setCpf(evento.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">E-mail</label>
                        <input
                            type="text"
                            className="form-control"
                            value={email}
                            onChange={(evento) => setEmail(evento.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Telefone</label>
                        <input
                            type="text"
                            className="form-control"
                            value={telefone}
                            onChange={(evento) => setTelefone(evento.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Senha</label>
                        <input
                            type="text"
                            className="form-control"
                            value={senha}
                            onChange={(evento) => setSenha(evento.target.value)}
                        />
                    </div>

                    <button type="button" className="btn btn-primary" onClick={() => salvar()}>
                        Salvar
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => voltar()}>
                        Cancelar
                    </button>
                    {id && (
                        <button type="button" className="btn btn-danger" onClick={() => excluir()}>
                            Excluir
                        </button>
                    )}
                </form>
            </div>
        </>
    );
}
