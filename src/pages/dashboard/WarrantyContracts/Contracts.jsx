import DataTable from '../../../components/dashboard/shared/DataTable';
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch"; //Custom Hook to fecth all users
import { getAllRecords } from "../../../APIs/crud"; //To be passed to the useFetch custom hook
import { Trans } from 'react-i18next';


// COLUMNS FOR DATA TABLE
const columns = [
    {
        field: 'insuranceNo',
        type: 'string',
        headerName: 'Insurance Number',
        width: 100,
        sortable: false
    },
    {
        field: 'clientName',
        type: 'string',
        headerName: 'Client Name',
        width: 100,
        sortable: false
    },
    {
        field: 'deviceType',
        type: 'string',
        headerName: 'Device Type',
        width: 100,
        sortable: false
    },
    {
        field: 'deviceBrand',
        type: 'string',
        headerName: 'Device Brand',
        width: 100,
        sortable: false
    },
    {
        field: 'deviceColor',
        type: 'string',
        headerName: 'Device Color',
        width: 100,
        sortable: false
    },
    {
        field: 'serialNo',
        type: 'string',
        headerName: 'Serial Number',
        width: 100,
        sortable: false
    },
    {
        field: 'clientPhone',
        type: 'string',
        headerName: 'Client Phone',
        width: 100,
        sortable: false
    },
    {
        field: 'clientEmail',
        type: 'string',
        headerName: 'Client Email',
        width: 100,
        sortable: false
    },
    {
        field: 'insuranceDuration',
        type: 'string',
        headerName: 'Insurance Duration',
        width: 100,
        sortable: false
    },
    {
        field: 'company',
        type: 'string',
        headerName: 'Company',
        width: 100,
        sortable: false
    },
];


export default function Contracts() {
    let [contractsRows, isLoading] = useFetch(() => getAllRecords('insuranceRequest'));

    return (
        <div className="d-flex flex-column gap-2">
            <div className="info d-flex gap-2 align-items-center flex-sm-row flex-column">
                <h1>Insurance Requests</h1>
            </div>
            {contractsRows.length > 0 ? 
            (!isLoading && <DataTable columns={columns} rows={contractsRows} isLoading={isLoading} pageToRedirectTo='contracts'></DataTable>) : <h2><Trans i18nKey='no-data-found'/></h2>}
        </div>
    );
}
