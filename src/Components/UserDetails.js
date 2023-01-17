/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
export const UserDetails = () => {
    const params = useParams();
    const userId = params.userId;
    return(
        <div>
            User {userId} Details
        </div>
    )
}