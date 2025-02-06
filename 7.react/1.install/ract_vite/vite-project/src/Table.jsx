import React from 'react'

const Table = () => {
  return (
    <div>
      <h1 className='caption'>TABLE</h1>
      <table>
        <thead>
            <tr className='bg-color'>
                <th >Roll No</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
        <tr>
                <th>1.</th>
                <th>Jenny</th>
                <th>14</th>
                <th>Female</th>
            </tr>
            <tr>
                <th>2.</th>
                <th>Tom</th>
                <th>16</th>
                <th>Female</th>
            </tr>
            <tr>
                <th>3.</th>
                <th>Bhim</th>
                <th>15</th>
                <th>Male</th>
            </tr>
            <tr>
                <th>4.</th>
                <th>Chutaki</th>
                <th>14</th>
                <th>Female</th>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
