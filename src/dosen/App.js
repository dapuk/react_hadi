// import logo from './logo.svg';
import Nav from './Nav';
import Menu from './Menu';
import Dasbor from './isi/Dasbor';
import Profil from './isi/Profil';
import Mahasiswa from './isi/Mahasiswa';
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
import TambahBank_2 from './isi/bank/Tambah_2';
import TambahBank_3 from './isi/bank/Tambah_3';
import TambahBank_4 from './isi/bank/Tambah_4';
import TambahBank_5 from './isi/bank/Tambah_5';
import UbahBank from './isi/bank/Ubah';
import Footer from './Footer';
import { useHistory } from 'react-router-dom';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  let history = useHistory();
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
              <Route path="/dosen/mahasiswa/" component={Mahasiswa} />
              
              <Route path="/dosen/hasilujian/">
                <HasilUjian/>
              </Route>

              <Route path="/dosen/ujian/">
                <TabelUjian/>
              </Route>

              <Route path="/dosen/ubahujian/">
                <UbahUjian/>
              </Route>

              <Route path="/dosen/tambahujian" component={TambahUjian} />

              <Route path="/dosen/paket/" component={TabelPaket} />

              <Route path="/dosen/tambahpaket" component={TambahPaket} />
              <Route path="/dosen/ubahpaket" component={UbahPaket} />

              <Route path="/dosen/bank/" component={TabelBank} />
              <Route path="/dosen/soalbank/" component={TabelSoal} />
              <Route path="/dosen/tambahbank" component={TambahBank} />
              <Route path="/dosen/tambahbank_2" component={TambahBank_2} />
              <Route path="/dosen/tambahbank_3" component={TambahBank_3} />
              <Route path="/dosen/tambahbank_4" component={TambahBank_4} />
              <Route path="/dosen/tambahbank_5" component={TambahBank_5} />
              <Route path="/dosen/ubahbank" component={UbahBank} />
            </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
