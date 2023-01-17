import { Outlet, Link, useSearchParams } from "react-router-dom"

export const Users = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    let isActive = searchParams.get('filter') === 'active';
    return (
        <div>
        <Link to='/users/1'><h2>User 1</h2></Link>
        <Link to='/users/2'><h2>User 2</h2></Link>
        <Link to='/users/3'><h2>User 3</h2></Link>
        <Outlet />
        <div>
            <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
            <button onClick={() => setSearchParams({})}>All Users</button>
        </div>
        {
            isActive ? <h2>Showing Active Users</h2> : <h2>Showing All Users</h2>
        }
        </div>
    )
}