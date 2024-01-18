import './Navbar.css'
import LogoLight from '../../assets/logo-black.png'
import LogoDark from '../../assets/logo-white.png'
import SearchIconLight from '../../assets/search-w.png'
import SearchIconDark from '../../assets/search-b.png'
import LightModeIcon from '../../assets/night.png'
import DarkModeIcon from '../../assets/day.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProdvider'

const Navbar = () => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    themeMode === 'light' ? setThemeMode('dark') : setThemeMode('light');
  }

  return (
    <nav className='navbar'>
      <img src={themeMode === 'light' ? LogoLight : LogoDark} alt="logo image" className='logo_Img' />

      <ul className='nav_menu'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <div className="search_box">
        <form action="#">
          <input type="search" placeholder='Search Here...' />
          <button type='submit'><img src={themeMode === 'light' ? SearchIconLight : SearchIconDark} alt='search image'/></button>
        </form>
      </div>

      <div className="dark_mode_toggle" onClick={() => {toggleTheme()}}>
        <img src={themeMode === 'light' ? LightModeIcon : DarkModeIcon} alt="dark icon image" />
      </div>
    </nav>
  )
}

export default Navbar