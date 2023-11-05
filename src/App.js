
import './App.css';
import PageBody from './Componentes/PageBody/Pagebody';
import PageHeader from './Componentes/PageHeader/PageHeader';
import About from './Componentes/PageAbout/About'
import Projects from './Componentes/PageProjects/Projects';
import Contact from './Componentes/PageContact/Contact';


function App() {


  return (
    <div className="App">

      <PageHeader></PageHeader>
      <PageBody></PageBody>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>




    </div >
  );
}

export default App;
