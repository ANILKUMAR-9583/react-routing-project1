import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


export function FakestoreAdmin(){


    const [cookies, setCookie, removeCookie] = useCookies('admin_id');
    const navigate = useNavigate();

    useEffect(()=>{
        if(cookies['admin_id']==null) {
            navigate('/login');
        }
    },[]);

    function handleSignout(){
        removeCookie('admin_id');
        navigate('/login');
    }

    return(
        <div>
            <h2>Admin Dashboard - {cookies['admin_id']} - <button onClick={handleSignout} className="btn btn-link">Signout</button> </h2>
        </div>
    )
}