
import { useNavigate } from 'react-router'
import { useLaunchers } from '../hooks/useLaunchers'

function LaunchersTable() {
    const { launchers, handleSearchClick, isLoading, handleSearchChange } = useLaunchers()
    const navigate = useNavigate()

    return (
        <div>
            <form className='searchform'>
                <label >Serch Launcher by city: </label>
                <input type="text" placeholder='Enter city name' onChange={handleSearchChange} />
                <label >Serch Launcher by rocketType: </label >
                <input type="text" placeholder='Enter rocket type' />
                <button onClick={handleSearchClick}>Search</button>
            </form>
            {isLoading ? <p>loading data...</p> :
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>city</th>
                            <th>rocketType</th>
                        </tr>
                    </thead>
                    <tbody>

                        {launchers.map(l => (
                            <tr key={l._id} onClick={() => navigate(`/launcherdetails/${l._id}`)}>
                                <td>{l._id}</td>
                                <td>{l.name}</td>
                                <td>{l.city}</td>
                                <td>{l.rocketType}</td>
                                
                            </tr>
                        ))}</tbody>
                </table>}
        </div>
    )
}

export default LaunchersTable