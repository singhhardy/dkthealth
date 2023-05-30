import React from 'react'

function Footer() {
  return (
    <div>
    <footer className='footer fixed-bottom p-2 text-center secondary-bg'>
      <div className='d-flex flex-row align-items-center justify-content-between'>
        <div className='col-md'>
          <a href='/' className='nav-item fs-4 primary-text dec-none'>
            <span><i className='fa fa-home'></i></span>
            <p className='underline-none fs-6'>Dashboard</p>
          </a>
        </div>
        <div className='col-md'>
          <a href='/MD-List' className='nav-item fs-4 primary-text  dec-none'>
            <span><i className='fa fa-user'></i></span>
            <p className='fs-6'>MD List</p>
          </a>
        </div>
        <div className='col-md'>
          <a href='/MD-List' className='nav-item fs-4 primary-text dec-none'>
            <span><i className='fa fa-edit'></i></span>
            <p className='fs-6'>QUICK SIGN</p>
          </a>
        </div>
        <div className='col-md'>
          <a href='/MD-List' className='nav-item fs-4 primary-text dec-none'>
            <span><i class="fa-solid fa-table-cells-large"></i></span>
            <p className='fs-6'>Promo Mats</p>
          </a>
        </div>
        <div className='col-md'>
          <a href='/MD-List' className='nav-item fs-4 primary-text dec-none'>
            <span><i class="fa-regular fa-calendar-days"></i></span>
            <p className='fs-6'>Out of Field</p>
          </a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer