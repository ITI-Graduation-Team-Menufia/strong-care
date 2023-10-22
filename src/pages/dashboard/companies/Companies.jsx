import DataTable from '../../../components/dashboard/shared/DataTable';
import noAvatarImg from '../../../assets/images/dashboard/noavatar.png';
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch"; //Custom Hook to fecth all companiesTo be passed to the useFetch custom hook
import { getAllCompanies } from "../../../APIs/companies"; //To be passed to the useFetch custom hook
import { Trans } from 'react-i18next';

// COLUMNS FOR DATA TABLE
const columns = [
    {
        field: 'profileImg', headerName: <Trans i18nKey='profile-img'/>, width: 100, sortable: false,
        renderCell: (params) => {
            return <img src={params.row.profileImg.url || noAvatarImg} alt="" />
        }
    },
    // {
    //     field: 'firstName',
    //     type: 'string',
    //     headerName: 'First name',
    //     width: 100,
    //     sortable: false
    //     //   editable: true,
    // },
    // {
    //     field: 'lastName',
    //     type: 'string',
    //     headerName: 'Last name',
    //     width: 100,
    //     sortable: false
    //     //   editable: true,
    // },
    {
        field: 'legalName',
        type: 'string',
        headerName: <Trans i18nKey='legal-name'/>,
        width: 150,
        sortable: false
        //   editable: true,
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
        type: 'string',
        headerName: <Trans i18nKey='phone'/>,
        width: 150,
        sortable: false
    },
    {
        field: 'state', type: 'string', headerName: <Trans i18nKey='state'/>, width: 100, sortable: false
    },
    {
        field: 'country',
        headerName: <Trans i18nKey='country'/>,
        width: 100,
        sortable: false
    },
    {
        field: 'legalLocation',
        headerName: <Trans i18nKey='legal-office'/>,
        width: 100,
        sortable: false
    },
    {
        field: 'noCommercialRegister',
        headerName: <Trans i18nKey='commercial-registeration-no'/>,
        width: 150,
        sortable: false
    },
    {
        field: 'identificationNo',
        type: 'string',
        headerName: <Trans i18nKey='agent-identification-number'/>,
        width: 150,
        sortable: false
    },
];



export default function Companies() {
    let [companies, isLoading] = useFetch(getAllCompanies);

    let companiesRows = companies.map(company=>{
        delete company?.user?._id;
        return {...company, ...company?.user};
    })

    companiesRows.forEach(company => {
        delete company?.user;
    });
    
    // Filtering Out pending companies
    //companiesRows = companiesRows.filter((companyRow)=> companyRow.state != 'pending');


    return (
        <div className="d-flex flex-column gap-2">
            <div className="info d-flex gap-2 align-items-center flex-sm-row flex-column">
                <h1><Trans i18nKey='companies'/></h1>
                <Link to={'add'} className="btn btn-success"><Trans i18nKey='add-new-company'/></Link>
            </div>
            {companiesRows.length > 0 ? 
            (!isLoading && <DataTable columns={columns} rows={companiesRows} isLoading={isLoading} pageToRedirectTo='companies'></DataTable>) : <h2><Trans i18nKey='no-data-found'/></h2>}
        </div>
    );
}
