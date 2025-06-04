import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TituloCadastro from "../componentes/TituloCadastro";

export default function FormFuncionario() {

    const navegacao = useNavigate();
    const { id } = useParams();

    // Estados para cada campo
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [salario, setSalario] = useState('');
    const [contratacao, setContratacao] = useState('');
    const [demissao, setDemissao] = useState('');
    const [senha, setSenha] = useState('');
    const [token, setToken] = useState('');

    // Voltar para a listagem de funcionários
    const voltar = () => {
        navegacao('/listafuncionario');
    }

    // Buscar os dados do funcionário (modo edição)
    const selecionar = async () => {
        let { data } = await axios.get(`http://localhost:4000/funcionario/${id}`);
        setNome(data.nomefuncionario);
        setCpf(data.cpf);
        setEmail(data.email);
        setTelefone(data.telefone);
        setNascimento(data.nascimento);
        setSalario(data.salario);
        setContratacao(data.contratacao);
        setDemissao(data.demissao);
        setSenha(data.senha);
        setToken(data.token);
    }

    // Método para alterar
    const alterar = async () => {
        let body = {
            "nomefuncionario": nome,
            "cpf": cpf,
            "email": email,
            "telefone": telefone,
            "nascimento": nascimento,
            "salario": salario,
            "contratacao": contratacao,
            "demissao": demissao,
            "senha": senha,
            "token": token
        };
        await axios.put(`http://localhost:4000/funcionario/${id}`, body);
        voltar();
    }

    // Método para inserir
    const inserir = async () => {
        let body = {
            "nomefuncionario": nome,
            "cpf": cpf,
            "email": email,
            "telefone": telefone,
            "nascimento": nascimento,
            "salario": salario,
            "contratacao": contratacao,
            "demissao": demissao,
            "senha": senha,
            "token": token
        };
        await axios.post(`http://localhost:4000/funcionario`, body);
        voltar();
    }

    // Método para excluir
    const excluir = async () => {
        await axios.delete(`http://localhost:4000/funcionario/${id}`);
        voltar();
    }

    // Funcionabilidade de Salvar
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
        <div className="container mt-5">
            <TituloCadastro id={id} titulo="Funcionário" />
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
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">CPF</label>
                    <input
                        type="text"
                        className="form-control"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">E-mail</label>
                    <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Telefone</label>
                    <input
                        type="text"
                        className="form-control"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Nascimento</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nascimento}
                        onChange={(e) => setNascimento(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Salário</label>
                    <input
                        type="text"
                        className="form-control"
                        value={salario}
                        onChange={(e) => setSalario(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Data de Contratação</label>
                    <input
                        type="text"
                        className="form-control"
                        value={contratacao}
                        onChange={(e) => setContratacao(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Data de Demissão</label>
                    <input
                        type="text"
                        className="form-control"
                        value={demissao || ''}
                        onChange={(e) => setDemissao(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Senha</label>
                    <input
                        type="text"
                        className="form-control"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Token</label>
                    <input
                        type="text"
                        className="form-control"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
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
    );
}