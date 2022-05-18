import React from 'react'

//styles and icon
import styles from './Navbar.module.css'
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';

const Navbar = () => {
  return (
      <nav className={styles.navbar}>
          <ul>
              <div className={styles.title}>
                <li>AdaptNXT</li>
              </div>
              <div className={styles.icon}>
                  <li><BedtimeOutlinedIcon/></li>
                  <li><NotificationsOutlinedIcon/></li>
                  <li><GTranslateOutlinedIcon/></li>
              </div>
          </ul>
    </nav>
  )
}

export default Navbar