import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const teams = [
    { nome: "Programação", corPrimaria: "#57C278", corSecundaria: "#D9F7E9" },
    { nome: "Front-End", corPrimaria: "#82CFFA", corSecundaria: "#E8F8FF" },
    { nome: "Data Science", corPrimaria: "#A6D157", corSecundaria: "#F0F8E2" },
    { nome: "Devops", corPrimaria: "#E06B69", corSecundaria: "#FDE7E8" },
    { nome: "UX e Design", corPrimaria: "#DB6EBF", corSecundaria: "#FAE9F5" },
    { nome: "Mobile", corPrimaria: "#FFBA05", corSecundaria: "#FFF5D9" },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const onRegisterColaborator = (colaborator) => {
    console.log("Colaborador registrado:", colaborator);
    setColaboradores([...colaboradores, colaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        times={teams.map((time) => time.nome)}
        onRegisterColaborator={(colaborator) =>
          onRegisterColaborator(colaborator)
        }
      />
      {teams.map((time) => (
        <Team
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
    </div>
  );
}

export default App;
