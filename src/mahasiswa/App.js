// import logo from './logo.svg';
import Nav from './Nav';
import Menu from './Menu';
import Dasbor from './isi/Dasbor';
import Ujian from './isi/Ujian';
import Profil from './isi/Profil';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div class ="wrapper">
        <Nav/>
        <Menu/>
        <Switch>
          <Route path="/mahasiswa/" exact>
            <Dasbor />
          </Route>

          <Route path="/mahasiswa/ujian">
            <Ujian />
          </Route>

          <Route path="/mahasiswa/profil">
            <Profil />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
