import { useEffect, useState } from "react";
import { getAllUsers } from "../APIs/users";

export default function useUsers() {
  let [usersList, setUsersList] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Getting users from the products API
    const fetchData = async () => {
      try {
        const response = await getAllUsers();     
        let usersRowsWithId = response.data.results.map((user) => ({
            ...user,
            id: user._id,
          }));

        setUsersList(usersRowsWithId);
        setIsLoading(false);
        
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  

  return [usersList, isLoading];
}