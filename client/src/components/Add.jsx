
import { useCreateLauncher } from '../hooks/useCreateLauncher'

function Add() {
    const {isLoading, handleChange, handleSubmit } = useCreateLauncher()
  return (
    <div>
      <h2>AddLauncher Page</h2>
    
      <div className='form-area'>
        <form className='form' onSubmit={handleSubmit} >
          <div className='input-area' >
            <label >Launcher-Name:</label>
            <input onChange={handleChange} name='name' type="text" style={{ width: "100px" }} required />
          </div>
          <div className='input-area'>
            <label >Rocket-Type:</label>
            <select onChange={handleChange} name="rocketType" id="rocket-type" style={{ width: "100px" }} required>
              <option></option>
              <option value="Shahab3">Shahab3</option>
              <option value="Fetah110">Fetah110</option>
              <option value="Radwan">Radwan</option>
              <option value="Kheibar">Kheibar</option>
            </select>
          </div>
          <div onChange={handleChange} className='input-area'>
            <label >Latitude:</label>
            <input onChange={handleChange} name='latitude' type="number" style={{ width: "100px" }} required />
          </div>
          <div className='input-area'>
            <label >Longitude:</label>
            <input onChange={handleChange} name='longitude' type="number" style={{ width: "100px" }} required />
          </div>
          <div className='input-area'>
            <label >City:</label>
            <input onChange={handleChange} name='city' type="text" style={{ width: "100px" }} required />
          </div>
          <button type='submit'>{isLoading ? "Creating Launcher.." : "Create"}</button>
        </form>
      </div>
    </div>
  )
}

export default Add