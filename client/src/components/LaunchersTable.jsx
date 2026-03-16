
import { useLaunchers } from '../hooks/useLaunchers'

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
            {launchers.map(l => (
                <div key={l._id}>
                    
                </div>
            ))}
        </div>
    )
}

export default LaunchersTable