import React from 'react'

export default function Error({showError}) {
  return (
    <div className='error-message'>
      <div>
        <p className='text'>{showError}</p>
      </div>
    </div>
  )
}
