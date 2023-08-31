import "../blocks/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <h1 className="header__title">Star Wars Encyclopedia</h1>
      </div>
      <div className="header__right">
        <div className="header__profile-button">Profile</div>
        <div className="header__about-button">About</div>
      </div>
    </header>
  );
};

export default Header;
