import { useEffect, useState } from "react";
import { getAllCompanies } from "../APIs/companies";

export default function useCompanies() {
  let [companiesList, setCompaniesList] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Getting users from the products API
    const fetchData = async () => {
      try {
        const response = await getAllCompanies();     
        let companiesRowsWithId = response.data.results.map((company) => ({
            ...company,
            id: company._id,
          }));

          setCompaniesList(companiesRowsWithId);
        setIsLoading(false);
        
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  

  return [companiesList, isLoading];
}