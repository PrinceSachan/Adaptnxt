import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  { field: 'channel',headerName: 'Channel', width: 20 },
  { field: 'orderNumber', headerName: 'Order No.', width: 130 },
  { field: 'orderDate', headerName: 'Order Date', width: 130 },
  {field: 'city', headerName: 'City', width: 90,},
    { field: 'customerName', headerName: 'Customer Name', width: 160 },
    { field: 'orderValue', headerName: 'Order Value', width: 140 },
    {field: 'status', headerName: 'Status', width: 100 },
    {field: 'operation', headerName: 'Operation', width: 100 },
    
];

const rows = [
    { id: 1, channel: '+', orderNumber: '#TKN20203754', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', orderValue: '0.00', status: 'Pending', operation: 'Actions'},
    { id: 2, channel: '+', orderNumber: '#TKN20203754', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', orderValue: '0.00', status: 'Pending', operation: 'Actions'},
    { id: 3, channel: '+', orderNumber: '#TKN20203754', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', orderValue: '0.00', status: 'Pending', operation: 'Actions'},
];

export default function DataTable() {
  return (
    <div style={{ height: 220, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
              checkboxSelection
              hideFooter
              
      />
    </div>
  );
}
