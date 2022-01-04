// import logo from './logo.svg';
import Nav from './Nav';
import Menu from './Menu';
import Dasbor from './isi/Dasbor';
import Ujian from './isi/Ujian';
import ProsesUjian from './isi/ProsesUjian';
import Profil from './isi/Profil';
import Footer from './Footer';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className ="wrapper">
        <Nav/>
        <Menu/>
        <Switch>
          <Route path="/mahasiswa/" exact>
            <Dasbor />
          </Route>

          <Route path="/mahasiswa/ujian" component={Ujian} />

          <Route path="/mahasiswa/profil" component={Profil} />

          <Route path="/mahasiswa/prosesujian" component={ProsesUjian} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
