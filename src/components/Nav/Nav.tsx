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
    </header>
  )
}

export default Nav