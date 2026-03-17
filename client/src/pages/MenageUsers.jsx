import { useUsers } from "../hooks/useUsers"


function MenageUsers() {
     const { users, isLoading } = useUsers()
  return (
    
        <div>

<h2>Users Maneger</h2>

            {isLoading ? <p>loading data...</p> :
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>user name</th>
                            <th>userType</th>
                            <th>email</th>
                            <th>last logged in</th>

                        </tr>
                    </thead>
                    <tbody>

                        {users.map(u => (
                            <tr key={u._id} onCuick={() => navigate(`/user/${u._id}`)}>
                                <td>{u._id}</td>
                                <td>{u.userName}</td>
                                <td>{u.userType}</td>
                                <td>{u.email}</td>
                                <td>{u.lastLogin}</td>
                                
                            </tr>
                        ))}</tbody>
                </table>}
        </div>
  )
}

export default MenageUsers