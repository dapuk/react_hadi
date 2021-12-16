// import logo from './logo.svg';
import Nav from './Nav';
import Menu from './Menu';
import Dasbor from './isi/Dasbor';
import Profil from './isi/Profil';
// Ujian
import TabelUjian from './isi/ujian/Tabel';
import HasilUjian from './isi/ujian/Hasil';
import UbahUjian from './isi/ujian/Ubah';
import TambahUjian from './isi/ujian/Tambah';
// Paket Soal
import TabelPaket from './isi/paket/Tabel';
import TambahPaket from './isi/paket/Tambah';
// Bank Soal
import TabelBank from './isi/bank/Tabel';
import TambahBank from './isi/bank/Tambah';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router basename="/react_hadi">
      <div className="wrapper">
        <Nav/>
        <Menu/>
            <Switch>
              <Route path="/dosen/" exact>
                <Dasbor/>
              </Route>

              <Route path="/dosen/profil/">
                <Profil/>
              </Route>
              
              <Route path="/dosen/hasilujian/">
                <HasilUjian/>
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

              <Route path="/dosen/bank/">
                <TabelBank/>
              </Route>

              <Route path="/dosen/tambahbank">
                <TambahBank/>
              </Route>
            </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
