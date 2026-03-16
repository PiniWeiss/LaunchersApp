
import { useLaunchers } from '../hooks/useLaunchers'

function LaunchersTable() {
    const {launchers} = useLaunchers()
  return (
    <div>
        {launchers.map(l=> (
            <div key={l._id}>
                <p>{l.name}</p>
            </div>
        ))}
    </div>
  )
}

export default LaunchersTable