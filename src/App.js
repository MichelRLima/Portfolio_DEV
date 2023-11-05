
import './App.css';
import PageBody from './Componentes/PageBody/Pagebody';
import PageHeader from './Componentes/PageHeader/PageHeader';
import About from './Componentes/PageAbout/About'
import PageProjects from './Componentes/PageProjects/PageProjects';
import Contact from './Componentes/PageContact/Contact';


function App() {


  return (
    <div className="App">

      <PageHeader></PageHeader>
      <PageBody></PageBody>
      <About></About>
      <PageProjects></PageProjects>
      <Contact></Contact>




    </div >
  );
}

export default App;
