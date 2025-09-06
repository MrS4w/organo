import Colaborator from "../Colaborator";
import "./Team.css";

const Team = (props) => {
  const sectionStyle = {
    backgroundColor: props.corSecundaria,
  };

  return (
    props.colaboradores.length > 0 && (
      <section className="team" style={sectionStyle}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborator
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={props.corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
