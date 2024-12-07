import React from 'react'

const NotFound = () => {
  return (
    <div className='container not-found-container'>
        <div className='row not-found-content'>
            {/* <div > */}
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <a href='/' className='home-button'>Go to Home</a>
            {/* </div> */}
        </div>
    </div>
  )
}

export default NotFound
