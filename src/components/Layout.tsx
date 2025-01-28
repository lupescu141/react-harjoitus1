import {Link, Outlet} from 'react-router';

export const Layout = () => {
  return (
    <>
      <h1 className="main-title">ReactRouterTest</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/example">ex</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
        <footer>
          <p>2025</p>
        </footer>
      </div>
    </>
  );
};
