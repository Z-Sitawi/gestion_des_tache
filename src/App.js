import { Link } from "react-router-dom";

function App() {
  return (
    <div className="m-5">
      <header className="container d-flex gap-5 justify-content-center">
        <Link to={"/create"} className="col-6 btn-primary btn">Crée une tâches</Link>
        <Link to={"/see"} className="col-6 btn-dark btn">Voir Mes des tâches</Link>
      </header>
    </div>
  );
}

export default App;
