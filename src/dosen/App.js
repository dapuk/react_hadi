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
import UbahPaket from './isi/paket/Ubah';
// Bank Soal
import TabelBank from './isi/bank/Tabel';
import TabelSoal from './isi/bank/TabelSoal';
import TambahBank from './isi/bank/Tambah';
import UbahBank from './isi/bank/Ubah';
import Footer from './Footer';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Nav/>
        <Menu/>
            <Switch>
              <Route path="/dosen/" exact>
                <Dasbor/>
              </Route>

              <Route path="/dosen/profil/" component={Profil} />
              
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

              <Route path="/dosen/paket/" component={TabelPaket} />

              <Route path="/dosen/tambahpaket" component={TambahPaket} />
              <Route path="/dosen/ubahpaket" component={UbahPaket} />

              <Route path="/dosen/bank/" component={TabelBank} />
              <Route path="/dosen/soalbank/" component={TabelSoal} />
              <Route path="/dosen/tambahbank" component={TambahBank} />
              <Route path="/dosen/ubahbank" component={UbahBank} />
            </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
