import React, { useState } from 'react'
import DateRange from '../Components/DateRange'

function MdList() {

  const mdData = [
    {
      id: '1',
      class: 'A',
      mdName: 'Carlos',
      visits: '0 of 4',
      call: 'fa fa-arrow-right'
    },
    {
      id: '2',
      class: 'B',
      mdName: 'Test',
      visits: '0 of 4',
      call: 'fa fa-check'
    },
    {
      id: '3',
      class: 'C',
      mdName: 'Test3',
      visits: '0 of 4',
      call: 'fa fa-arrow-right'
    },
  ]

  const [mdDataset, SetMdDataset] = useState(mdData)
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter the mdDataset based on the search query
  const filteredMdDataset = mdDataset.filter((item) =>
    item.mdName.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
    <div className='container page p-0 mx-auto mb-5'>
      <div className='row py-4 px-3'>
        <div className='col-md-4 '>
        <div class="dropdown-2 w-100">
              <div className='form-control third-bg text-light p-3 py-2 '>Date</div>
              <div class="dropdown-content-2">
                <DateRange />
              </div>
            </div>        
          </div>
        <div className='col-md-4 d-flex flex-column align-items-center justify-content-center'>
          <img src='doctors.png' className='img-fluid' />
          <p className='fs-4 fw-bold'>May 30, 2023</p>
        </div>
        <div className='col-md-4'>
        <form class="d-flex" role="search">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        </form>
        </div>
      </div>

      <div className='row py-4'>
        <div className='table text-center p-2'>

          <table class="table">
              <thead className='third-bg text-light fs-5 fw-bold'>
                <tr>
                  <td>CLASS </td>
                  <td>MD NAME</td>
                  <td>VISITS</td>
                  <td>CALL</td>
                </tr>
              </thead>
              <tbody className="fs-5 fw-bold">
                  {filteredMdDataset.map((item) => (
                    <tr key={item.id}>
                      <td>{item.class}</td>
                      <td>{item.mdName}</td>
                      <td>{item.visits}</td>
                      <td><a className='text-success' href=''><i className={item.call}></i></a></td>
                    </tr>
                  ))}
                </tbody>
              </table>

        </div>
      </div>
    </div>
  ) 
}

export default MdList