import DataTable from '../../../components/dashboard/shared/DataTable';
import noAvatarImg from '../../../assets/images/dashboard/noavatar.png';
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch"; //Custom Hook to fecth all users
import { getAllUsers } from "../../../APIs/users"; //To be passed to the useFetch custom hook
import { Trans } from 'react-i18next';

// COLUMNS FOR DATA TABLE
const columns = [
    {
        field: 'profileImg', headerName: <Trans i18nKey='profile-img'/>, width: 100, sortable: false,
        renderCell: (params) => {
            return <img src={params.row.profileImg.url
                || noAvatarImg} alt="" />
        }
    },
    {
        field: 'firstName',
        type: 'string',
        headerName: <Trans i18nKey='first-name'/>,
        width: 100,
        sortable: false
        //   editable: true,
    },
    {
        field: 'lastName',
        type: 'string',
        headerName: <Trans i18nKey='last-name'/>,
        width: 100,
        sortable: false
    },
    {
        field: 'role',
        type: 'string',
        headerName: <Trans i18nKey='role'/>,
        width: 150,
        sortable: false
    },
    {
        field: 'email',
        type: 'email',
        headerName: <Trans i18nKey='email'/>,
        width: 200,
        sortable: false
    },
    {
        field: 'phone',
        type:'string',
        headerName: <Trans i18nKey='phone'/>,
        width: 150,
        sortable: false
    },
    {
        field: 'verified', type: 'boolean', headerName: <Trans i18nKey='verified'/>, width: 100,  sortable: false
    },
    {
        field: 'verifiedEmail', type: 'boolean', headerName: <Trans i18nKey='verified-email'/>, width: 150,  sortable: false
    },
    {
        field: 'verifiedPhone', type: 'boolean', headerName: <Trans i18nKey='verified-phone'/>, width: 150,  sortable: false
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
                <h1><Trans i18nKey='users'></Trans></h1>
                <Link to={'add'} className="btn btn-success"><Trans i18nKey='add-new-user'></Trans></Link>
            </div>
            {usersRows.length > 0 ? 
            (!isLoading && <DataTable columns={columns} rows={usersRows} isLoading={isLoading} pageToRedirectTo='users'></DataTable>) : <h2><Trans i18nKey='no-data-found'/></h2>}
        </div>
    );
}
