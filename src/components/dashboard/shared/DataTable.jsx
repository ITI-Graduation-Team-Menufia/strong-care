import React from 'react';
import './DataTable.scss';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../../APIs/users';
import { deleteCompany } from '../../../APIs/companies';



export default function DataTable(props) {

    const { rows, columns, pageToRedirectTo } = props;
    // console.log(rows);

    let handleDelete = (id) => {
        try {
            if (pageToRedirectTo === 'users') {
                deleteUser(id)
            }
            else {
                deleteCompany(id)
            }
        }
        catch (error) {
            console.log(error);
        }

        console.log(id + ' has been deleted!');
    }

    let handleResetPass = (id) => {
        // API Request to reset password 
        console.log(id + ' password has been reset');
    }


    // ACTIONS COLUMN
    const actionColumn = {
        field: 'actions',
        headerName: 'Actions',
        width: 200,
        sortable: false,
        // params holds the data of the current row
        renderCell: (params) => {
            return (
                <div className='d-flex gap-4 flex-sm-row felx-column fs-4'>
                    <Link to={`${params.row._id}`} className='action text-info' title='view'><i className="bi bi-pencil-square"></i></Link>
                    <div className='action text-danger' title='delete' onClick={() => handleDelete(params.row._id)}><i className="bi bi-trash"></i></div>
                    <div className='action text-warning' title='reset password' onClick={() => handleResetPass(params.row._id)}><i className="bi bi-arrow-clockwise"></i></div>
                </div>
            )
        }
    };

    return (
        <div className='data-table'>
            <DataGrid
                className='data-grid'
                rows={rows}
                columns={[...columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 8,
                        },
                    },
                }}
                // For Search Bar
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        // Delay before Search
                        quickFilterProps: { debounceMs: 500 },
                    }
                }}
                pageSizeOptions={[8]}
                // checkboxSelection
                disableRowSelectionOnClick
                // disableColumnFilter
                // disableDensitySelector
                // disableColumnSelector
                // disableColumnMenu
            />
        </div>
    )
}










// NATIVE - BY ME.

// import React, { useEffect, useState } from 'react';
// import './DataTable.scss'
// import { Table } from 'react-bootstrap';
// import Search from './Search';


// export default function DataTable() {

//     const [isMobile, setIsMobile] = useState(false);

//     // For Table Responsiveness
//     useEffect(() => {
//         // Update the isMobile state on window resize
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
//         };

//         // Initial check on component mount
//         handleResize();

//         // Attach the event listener
//         window.addEventListener('resize', handleResize);

//         // Clean up the event listener on component unmount
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     return (
//         <div className='data-table p-2 rounded'>
//             <Search></Search>
//             <Table striped bordered hover className='text-center'>
//                 <thead>
//                     <tr>
//                         {!isMobile ? (<><th>id</th><th>Profile img</th></>) : (<></>)}
//                         <th>First Name</th>
//                         {!isMobile ? (<><th>Last Name</th>
//                             <th>Phone</th>
//                             <th>Email</th>
//                             <th>Location</th>
//                             <th>Role</th></>) : (<></>)}
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {['', '', '', ''].map((row) => (<tr>
//                         {!isMobile ? (<><td>1</td><td><img src="none" alt="none" /></td></>) : (<></>)}
//                         <td>Mohamed</td>
//                         {!isMobile ? (<><td>Mahrous</td>
//                             <td>01115698742</td>
//                             <td>user@info.com</td>
//                             <td>Location</td>
//                             <td>Admin</td></>) : (<></>)}
//                         <td className='d-flex flex-column flex-sm-row justify-content-center align-items-center gap-1'>
//                             <button className='btn btn-warning'>Reset Password</button>
//                             <button className='btn btn-danger'>Delete</button>
//                         </td>
//                     </tr>))}

//                 </tbody>
//             </Table>
//         </div>
//     )
// }
