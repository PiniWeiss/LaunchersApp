
import { useLaunchers } from '../hooks/useLaunchers'
import LaunchersTable from '../components/LaunchersTable'

function Home() {
  const { error, isLoading } = useLaunchers()

  return (
    <div className='home-page'>
      {error && <div className='error-loading'>{error.message}</div>}
      <h2>all launchers </h2>

      <LaunchersTable />

    </div>
  )
}

export default Home