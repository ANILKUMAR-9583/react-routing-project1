import { Link } from "react-router-dom";


export function Invalid(){
    return(
        <div>
            <h2>Invalid Credentials</h2>
            <Link to="/">Try Again</Link>
        </div>
    )
}