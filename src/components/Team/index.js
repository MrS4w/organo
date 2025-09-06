import "./Team.css";

const Team = (props) => {
  const sectionStyle = {
    backgroundColor: props.corSecundaria,
  };

  return (
    <section className="team" style={sectionStyle}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
    </section>
  );
};

export default Team;
