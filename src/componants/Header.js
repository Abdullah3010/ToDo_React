import React from 'react'
import Button from './Button'


const Header = ({onFormToggel}) => {
  return (
    <header className='header'>
        <h1>Tasks</h1>
        <Button text='ADD' onClick={onFormToggel}/>
    </header>
  )
}

export default Header