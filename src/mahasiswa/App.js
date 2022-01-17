// import logo from './logo.svg';
import Nav from './Nav';
import Menu from './Menu';
import Dasbor from './isi/Dasbor';
import Ujian from './isi/Ujian';
import HasilUjian from './isi/HasilUjian';
// Proses Ujian 
import ProsesUjian from './isi/ProsesUjian';
import ProsesUjian_2 from './isi/ProsesUjian_2';
import ProsesUjian_3 from './isi/ProsesUjian_3';
import ProsesUjian_4 from './isi/ProsesUjian_4';
import ProsesUjian_5 from './isi/ProsesUjian_5';
import ProsesUjian_6 from './isi/ProsesUjian_6';
import ProsesUjian_7 from './isi/ProsesUjian_7';
import ProsesUjian_8 from './isi/ProsesUjian_8';

import Profil from './isi/Profil';
import Footer from './Footer';
import { useHistory } from 'react-router-dom';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  let history = useHistory();
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
          <Route path="/mahasiswa/hasilujian" component={HasilUjian} />

          <Route path="/mahasiswa/profil" component={Profil} />

          <Route path="/mahasiswa/prosesujian" component={ProsesUjian} />
          <Route path="/mahasiswa/prosesujian_2" component={ProsesUjian_2} />
          <Route path="/mahasiswa/prosesujian_3" component={ProsesUjian_3} />
          <Route path="/mahasiswa/prosesujian_4" component={ProsesUjian_4} />
          <Route path="/mahasiswa/prosesujian_5" component={ProsesUjian_5} />
          <Route path="/mahasiswa/prosesujian_6" component={ProsesUjian_6} />
          <Route path="/mahasiswa/prosesujian_7" component={ProsesUjian_7} />
          <Route path="/mahasiswa/prosesujian_8" component={ProsesUjian_8} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
