import logo from './logo.svg';

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block" />
          TODO App
        </a>
        <div className="text-white d-flex">
          <div>Tasks</div>
          <div className="px-2 ms-1 rounded-pill bg-danger ">35</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
