// import logo from './logo.svg';
import Nav from './Nav';
import Menu from './Menu';
import Dasbor from './isi/Dasbor';
import Profil from './isi/Profil';
// Ujian
import TabelUjian from './isi/ujian/Tabel';
import UbahUjian from './isi/ujian/Ubah';
import TambahUjian from './isi/ujian/Tambah';
// Paket Soal
import TabelPaket from './isi/paket/Tabel';
import TambahPaket from './isi/paket/Tambah';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div class ="wrapper">
        <Nav/>
        <Menu/>
            <Switch>
              <Route path="/dosen/" exact>
                <Dasbor/>
              </Route>

              <Route path="/dosen/profil/">
                <Profil/>
              </Route>

              <Route path="/dosen/ujian/">
                <TabelUjian/>
              </Route>

              <Route path="/dosen/ubahujian/">
                <UbahUjian/>
              </Route>

              <Route path="/dosen/tambahujian">
                <TambahUjian/>
              </Route>

              <Route path="/dosen/paket/">
                <TabelPaket/>
              </Route>

              <Route path="/dosen/tambahpaket">
                <TambahPaket/>
              </Route>
            </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
