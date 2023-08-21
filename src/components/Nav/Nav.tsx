import logo from '../../assets/logo-bookmark.svg'
import hamburger from '../../assets/icon-hamburger.svg'
import '../../sass/components/Nav.scss'

function Nav(props : any) {
  return (
    <header className={props.navBoolen ? 'vis-hidden' : ''}>
      <div className='mobile-nav-container'>
        <img className="nav__logo" src={logo }alt="Logo" />
        <img className='nav__hamburger-icon' src={hamburger} alt="hamburger icon" onClick={props.handleOpenClick}/>
      </div>

      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__list__item first'>Features</li>
          <li className='nav__list__item'>Pricing</li>
          <li className='nav__list__item'>Contact</li>
          <li><button className='nav__button'>Login</button></li>
        </ul>
        
        </nav>
    </header>
  )
}

export default Nav