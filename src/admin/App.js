// import logo from './logo.svg';
import Nav from './Nav';
import Menu from './Menu';
import Dasbor from './isi/Dasbor';
import Dosen from './isi/Dosen';
import Mahasiswa from './isi/Mahasiswa';
import Matakuliah from './isi/Matakuliah/Tabel';
import TambahMatakuliah from './isi/Matakuliah/Tambah';
import UbahMatakuliah from './isi/Matakuliah/Ubah';
import Profil from './isi/Profil';
import Footer from './Footer';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import { render } from 'react-dom';
import {Link, useHistory} from 'react-router-dom'


function App() {
  let history = useHistory();
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

            <Route path="/admin/matakuliah" component={Matakuliah} exact />

            <Route path="/admin/tambahmatakuliah" component={TambahMatakuliah} exact />

            <Route path="/admin/ubahmatakuliah" component={UbahMatakuliah} exact />
          </Switch>
          <Footer />
    </div>
    </Router>
  );
}

export default App;
