import imageLogo from '../../images/logo.svg'

export default function Header({ children }) {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={imageLogo}
        alt="Логотип"
      />
      {children}
    </header>
  )
}