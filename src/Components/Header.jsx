import React, { useState } from 'react'

function Header() {
  const [tableData, setTableData] = useState()

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 secondary-bg">
      <div className="container-fluid py-2">
        <a className="navbar-brand text-success fw-bold fs-3" href="#">dktHealth</a>
        <img src='dummy.jpg' className="navbar-toggler rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-end">
            <li className="nav-item">
              <a className="nav-link fs-5 active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">Sync Report</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5" href="#">Sing Out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Header