import { Navigate } from 'react-router-dom'
 
export default function ProtectedRoute(props){
    if(props.isLoggedIn === true){
        return props.children;//i.e. the Home and the Faculty Components
    }
    else{
       return (<Navigate to='/' replace/>);
    }
}