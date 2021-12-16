// import logo from './logo.svg';
import Nav from './Nav';
import Menu from './Menu';
import Dasbor from './isi/Dasbor';
import Dosen from './isi/Dosen';
import Mahasiswa from './isi/Mahasiswa';
import Matakuliah from './isi/Matakuliah';
import Profil from './isi/Profil';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="wrapper">
        
          <Nav/>
          <Menu/>
          <Switch>
            <Route path="/admin" exact>
              <Dasbor />
            </Route>

            <Route path="/admin/dosen" exact>
              <Dosen />
            </Route>

            <Route path="/admin/mahasiswa" exact>
              <Mahasiswa />
            </Route>

            <Route path="/admin/profil" exact>
              <Profil />
            </Route>

            <Route path="/admin/matakuliah" exact>
              <Matakuliah />
            </Route>
          </Switch>
          <Footer />
    </div>
    </Router>
  );
}

export default App;
