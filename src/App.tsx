import {Route, BrowserRouter as Router, Routes} from 'react-router';
import {Layout} from './components/Layout';
import Home from './views/Home';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';

const App = () => {
  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Upload" element={<Upload />} />
            <Route path="/Single" element={<Single />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
