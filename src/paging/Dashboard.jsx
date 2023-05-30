import React from 'react'

function Dashboard() {

  return (
    <div className='page mb-5'>
      <div className=''>
        <div className='d-flex align-items-center justify-content-between table-bg text-light p-4'>
          <div className='col fs-4'>
            <i className='text-success fa fa-book'></i> Call Summary MTD (2023 - CYCLE 01)
          </div>
          <div className='col fs-4 text-end'>
            Mon, May 31 
          </div>
        </div>
        <div className='bg-success d-flex flex-row align-items-center justify-content-evenly py-2'>
        <p className='text-light fs-5'>Calls Frequency</p>
        <p className='text-light fs-5'>Calls Frequency</p>
        <p className='text-light fs-5'>Calls Frequency</p>
        </div>
      </div>
      <div className='table table-bg py-3'>
        <table  class="table table-responsive text-light text-center table-stripped table-scroll">
          <thead>
            <tr>
              <th scope="col">Class</th>
              <th scope="col">Actual Calls</th>
              <th scope="col">Target Calls</th>
              <th scope="col">%</th>
              <th scope="col">Actual Count</th>
              <th scope="col">Target Count</th>
              <th scope="col">%</th>
              <th scope="col">Ave. Frq</th>
              <th scope="col">Target Freq</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>0</td>
              <td>112</td>
              <td>0.00%</td>
              <td>0</td>
              <td>28</td>
              <td>0.00%</td>
              <td>0.0</td>
              <td>4.0</td>
            </tr>
          </tbody>
        </table>
        </div>

      <div className='mb-5 p-4'>
        <div className='row'>
          <div className='col-md'>
            <div className='card-container message p-2 rounded-2'>
              <table className='table'>
                <thead className='thead-light'>
                  <tr>
                      <th className='text-dark fs-4 py-2'>Message Board</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>May 22</td>
                    <td>
                      <h6>District Meeting</h6>
                      <p>from John Doe Cruz</p>
                    </td>
                  </tr>
                  <tr>
                    <td>May 22</td>
                    <td>
                      <h6>District Meeting</h6>
                      <p>from John Doe Cruz</p>
                    </td>
                  </tr>
                  <tr>
                    <td>May 22</td>
                    <td>
                      <h6>District Meeting</h6>
                      <p>from John Doe Cruz</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
              <div className='col-md'>
              <div className='card-container message p-2 rounded-2'>
              <table className='table table-stripped'>
              <thead>
                <th className='text-dark fs-4 py-2'>Reports</th>
              </thead>
                <tbody>
                <tr>
                      <td>Call Concentration</td>
                    </tr>
                    <tr>
                      <td>Call Concentration</td>
                    </tr>
                    <tr>
                      <td>Call Concentration</td>
                    </tr>
                    <tr>
                      <td>Call Concentration</td>
                    </tr>
                    <tr>
                      <td>Call Concentration</td>
                    </tr>
                    <tr>
                      <td>Call Concentration</td>
                    </tr>
                </tbody>
              </table>

              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard