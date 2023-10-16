import { Navigate } from 'react-router-dom';

const withAuthentication = (WrappedComponent) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem("token"); // Replace 'token' with the key you use to store the JWT
    if(!token){
      return false;
    }else {
      const [header, payload, signature] = token.split('.');

      // Decode the base64-encoded header and payload
              const decodedHeader = atob(header);
              const decodedPayload = atob(payload);
      
      // Parse the JSON data in the header and payload
              const headerData = JSON.parse(decodedHeader);
              const payloadData = JSON.parse(decodedPayload);
              console.log(payloadData.role==='admin')
              return payloadData.role==='admin'
    }
  }


  return isAuthenticated() ? (
    <WrappedComponent />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default withAuthentication;
