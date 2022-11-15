import logo from './logo.svg';
import style from './Header.module.css';

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-around">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block" />
          TODO App
        </a>
        <div className="text-white d-flex">
          <div>Tasks</div>
          <div className={style['unchecked-tasks']}>35</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
