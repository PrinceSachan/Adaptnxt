import React from 'react'
import { NavLink } from 'react-router-dom'

//styles and icons
import './Sidebar.css'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div>
        <nav className='links'>
          <ul>
            <li>
              <NavLink to='/'>
                <DashboardCustomizeOutlinedIcon/> 
                <span>DashBoard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/inventory'>
                <InventoryOutlinedIcon/>
                <span>Inventroy</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/orders'>
                <BorderAllOutlinedIcon/>
                <span>Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/shopping'>
                <LocalShippingOutlinedIcon/>
                <span>Shipping</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/channel'>
                <ShareOutlinedIcon />
                <span>Channel</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar