import "./Users.scss";
import DataTable from '../../../components/dashboard/shared/DataTable';
import noAvatarImg from '../../../assets/images/dashboard/noavatar.png';
// import { usersRows } from '../../../pages/data'; //Static Data
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch"; //Custom Hook to fecth all users
import { getAllUsers } from "../../../APIs/users"; //To be passed to the useFetch custom hook

// COLUMNS FOR DATA TABLE
const columns = [
    // { field: 'id', type: 'string', headerName: 'ID', width: 100, sortable: false },
    {
        field: 'profileImg', headerName: 'Profile Img', width: 100, sortable: false,
        renderCell: (params) => {
            return <img src={params.row.profileImg.url
                || noAvatarImg} alt="" />
        }
    },
    {
        field: 'firstName',
        type: 'string',
        headerName: 'First name',
        width: 100,
        sortable: false
        //   editable: true,
    },
    {
        field: 'lastName',
        type: 'string',
        headerName: 'Last name',
        width: 100,
        sortable: false
    },
    {
        field: 'role',
        type: 'string',
        headerName: 'Role',
        width: 150,
        sortable: false
    },
    {
        field: 'email',
        type: 'email',
        headerName: 'Email',
        width: 200,
        sortable: false
    },
    {
        field: 'phone',
        type:'string',
        headerName: 'Phone',
        width: 150,
        sortable: false
    },
    {
        field: 'verified', type: 'boolean', headerName: 'Verified', width: 100,  sortable: false
    },
    {
        field: 'verifiedEmail', type: 'boolean', headerName: 'Ver. Email ?', width: 150,  sortable: false
    },
    {
        field: 'verifiedPhone', type: 'boolean', headerName: 'Ver. Phone ?', width: 150,  sortable: false
    },
];

export default function Users() {
    let [usersRows, isLoading] = useFetch(getAllUsers);

    usersRows = usersRows.filter(user=>
        user.role !== 'company'
    )

    return (
        <div className="d-flex flex-column gap-2">
            <div className="info d-flex gap-2 align-items-center flex-sm-row flex-column">
                <h1>Users</h1>
                <Link to={'add'} className="btn btn-success">Add New User</Link>
            </div>
            {usersRows.length > 0 ? 
            (!isLoading && <DataTable columns={columns} rows={usersRows} isLoading={isLoading} pageToRedirectTo='users'></DataTable>) : <h2>No Data To Be Shown</h2>}
        </div>
    );
}
