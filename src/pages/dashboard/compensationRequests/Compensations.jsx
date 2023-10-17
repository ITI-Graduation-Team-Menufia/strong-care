import DataTable from '../../../components/dashboard/shared/DataTable';
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch"; //Custom Hook to fecth all users
import { getAllRecords } from "../../../APIs/crud"; //To be passed to the useFetch custom hook
import { Trans } from 'react-i18next';

// COLUMNS FOR DATA TABLE
const columns = [
    {
        field: 'compensationIdentification',
        type: 'string',
        headerName: 'Compensation Identification',
        width: 100,
        sortable: false
    },
    {
        field: 'descMalfunction',
        type: 'string',
        headerName: 'Malfunction Description',
        width: 100,
        sortable: false
    },
    {
        field: 'malfunctionImgs',
        type: 'string',
        headerName: 'Malfunction Imgs',
        width: 100,
        sortable: false
    },
    {
        field: 'InsuranceRequestNo',
        type: 'string',
        headerName: 'Insurance RequestNo',
        width: 100,
        sortable: false
    },
    {
        field: 'InsuranceRequest',
        type: 'string',
        headerName: 'Insurance Request',
        width: 100,
        sortable: false
    },
];


export default function Compensations() {
    let [copmensationsRows, isLoading] = useFetch(() => getAllRecords('compensation'));

    return (
        <div className="d-flex flex-column gap-2">
            <div className="info d-flex gap-2 align-items-center flex-sm-row flex-column">
                <h1>Compensations</h1>
            </div>
            {copmensationsRows.length > 0 ? 
            (!isLoading && <DataTable columns={columns} rows={copmensationsRows} isLoading={isLoading} pageToRedirectTo='compensations'></DataTable>) : <h2><Trans i18nKey='no-data-found'/></h2>}
        </div>
    );
}
