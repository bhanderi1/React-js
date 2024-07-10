import React from 'react'
import { useState } from 'react';

const Task_3 = () => {


  const [form, setForm] = useState({
    firstName: 'srushti',
    lastName: 'bhanderi',
    email: 'srushtibhanderi77@gmail.com',
  });

  return (
    <>
      <div className='pt-5'>
        <div>
          <label>
            First name:
            <input
              value={form.firstName}
              onChange={e => {
                setForm({
                  ...form,
                  firstName: e.target.value
                });
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Last name:
            <input
              value={form.lastName}
              onChange={e => {
                setForm({
                  ...form,
                  lastName: e.target.value
                });
              }}
            />
          </label>
        </div>
        <div>
          <label >
            Email:
            <input
              value={form.email}
              onChange={e => {
                setForm({
                  ...form,
                  email: e.target.value
                });
              }}
            />
          </label>
        </div>
        <div>
          <p className=''>
            {form.firstName}{' '}
            {form.lastName}{' '}
            ({form.email})
          </p>
        </div>
      </div>
    </>
  );
}


export default Task_3
