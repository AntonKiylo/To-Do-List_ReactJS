import React from 'react'
import './Header.css'

const Header = ({nightMode, setNightMode, title}) => {
  const handlerChange = () => {
    setNightMode(!nightMode)
  }

  return (
    <div className='header'>
      <h1>{title}</h1>

      <div>
        <input className="input-switch" id="switch2" type="checkbox" name="switch" onChange={handlerChange} />
        <label htmlFor="switch2">
          <span className="switch-label off">Off</span>
          <span className="switch-label on">On</span>
          <span className="grip"></span>
        </label>
      </div>
    </div>
  )
}

export default Header