import React from 'react'

//styles
import './Orders.css'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Filter from './Filter'
import Card from '@mui/material/Card';
import DataTable from './DataTable'
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Orders = () => {

  return (
    <div className='ocontainer'>
      <div className = 'upper'>
        <button>Orders X</button>
        <SettingsOutlinedIcon />
      </div>
      <Filter />
      <div className='ocontainer2'>
        <div className='btn'>
          <button className='btn1'><ImportExportOutlinedIcon fontSize='small' /> Import Orders</button>
          <button className='btn2'><SendOutlinedIcon fontSize='small'/> Accept</button>
          <button className='btn3'><LocalPrintshopOutlinedIcon fontSize='small' /> Print</button>
          <button className='btn4'><CachedOutlinedIcon fontSize='small'/> Refresh</button>
        </div>
        <Card>
          <DataTable/>
        </Card>
        <div className='btnb'>
          <button className='btn5'><ArrowBackIosNewOutlinedIcon fontSize='small' /></button>
          <button className='btn6'>1</button>
          <button className='btn7'><ArrowForwardIosOutlinedIcon fontSize='small' /></button>
          <button className='btn8'>20 / page</button>
        </div>
      </div>
    </div>
  )
}

export default Orders