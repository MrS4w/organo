import Banner from "./components/Banner";
import Form from "./components/Form";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const onRegisterColaborator = (colaborator) => {
    console.log("Colaborador registrado:", colaborator);
    setColaboradores([...colaboradores, colaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        onRegisterColaborator={(colaborator) =>
          onRegisterColaborator(colaborator)
        }
      />
    </div>
  );
}

export default App;
