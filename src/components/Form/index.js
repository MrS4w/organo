import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextField from "../TextField";
import "./Form.css";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted =>", { nome, cargo, imagem, time });

    props.onRegisterColaborator({
      nome,
      cargo,
      imagem,
      time,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextField
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          handleChange={(valor) => setNome(valor)}
        />

        <TextField
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          handleChange={(valor) => setCargo(valor)}
        />

        <TextField
          label="Imagem"
          placeholder="Informe o endereço do imagem"
          valor={imagem}
          handleChange={(valor) => setImagem(valor)}
        />

        <Dropdown
          label="Time"
          obrigatorio={true}
          itens={props.times}
          valor={time}
          handleChange={(valor) => setTime(valor)}
        />

        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
