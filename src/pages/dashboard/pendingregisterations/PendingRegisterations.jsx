import DataTable from '../../../components/dashboard/shared/DataTable';
import noAvatarImg from '../../../assets/images/dashboard/noavatar.png';
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch"; //Custom Hook to fecth all companiesTo be passed to the useFetch custom hook
import { getAllCompanies } from "../../../APIs/companies"; //To be passed to the useFetch custom hook


// COLUMNS FOR DATA TABLE
const columns = [
  {
    field: 'profileImg', headerName: 'Profile Img', width: 100, sortable: false,
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
    headerName: 'Legal Name',
    width: 150,
    sortable: false
    //   editable: true,
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
    type: 'string',
    headerName: 'Phone',
    width: 150,
    sortable: false
  },
  {
    field: 'state', type: 'string', headerName: 'State', width: 100, sortable: false
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 100,
    sortable: false
  },
  {
    field: 'legalLocation',
    headerName: 'legalLocation',
    width: 100,
    sortable: false
  },
  {
    field: 'noCommercialRegister',
    headerName: 'Comm. Reg. No.',
    width: 150,
    sortable: false
  },
  {
    field: 'identificationNo',
    type: 'string',
    headerName: 'Iden. No.',
    width: 150,
    sortable: false
  },
];

export default function PendingRegisterations() {
  let [companies, isLoading] = useFetch(getAllCompanies);

  let companiesRows = companies.map(company => {
    delete company?.user?._id;
    return { ...company, ...company?.user };
  })

  companiesRows.forEach(company => {
    delete company?.user;
  });

  // Filtering pending companies to be displayed
  companiesRows = companiesRows.filter((companyRow) => companyRow.state === 'pending');

  return (
    <div className="d-flex flex-column gap-2">
            <div className="info d-flex gap-2 align-items-center flex-sm-row flex-column">
                <h1>Pending Company registerations</h1>
            </div>
            {companiesRows.length > 0 ? 
            (!isLoading && <DataTable columns={columns} rows={companiesRows} isLoading={isLoading} pageToRedirectTo='companies'></DataTable>) : <h2>No Data To Be Shown</h2>}
        </div>
  )
}
