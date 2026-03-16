
import { useLaunchers } from '../hooks/useLaunchers'
import LauncherDetails from '../pages/launcherDetails'

function LaunchersTable() {
    const { launchers, handleSearchClick, handleSearchChange } = useLaunchers()
    return (
        <div>
            <form className='searchform'>
                <label >Serch Launcher by city: </label>
                <input type="text" placeholder='Enter city name' onChange={handleSearchChange} />
                <label >Serch Launcher by rocketType: </label >
                <input type="text" placeholder='Enter rocket type' />
                <button onClick={handleSearchClick}>Search</button>
            </form>

            <table>
                <thead>
                    <th>id</th>
                    <th>name</th>
                    <th>city</th>
                    <th>rocketType</th>
                </thead>
                <tbody>
                
                {launchers.map(l => (
                    <tr key={l._id}>
                        <button onClick={<LauncherDetails id={l._id}/>}>
                        <td>{l._id}</td>
                        <td>{l.name}</td>
                        <td>{l.city}</td>
                        <td>{l.rocketType}</td></button>
                    </tr>
                ))}</tbody>
            </table>
        </div>
    )
}

export default LaunchersTable