import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <h1>loading</h1>
    }

    if(user?.email){
        return children
    }

    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;