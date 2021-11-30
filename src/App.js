import React, { useState, useEffect } from 'react'
import data from './data'

const USERS_URL = 'https://example.com/api/users'

export default function Table() {
  const [results, setResults] = useState([])
  const [page, setPage] = useState(0)
  const [error, setError] = useState('')

  useEffect(() => {
    // fetch(`${USERS_URL}/?page=${page}`)
    // .then((res)=>{
    //   if(res.ok) return res.json()
    //   throw new Error('Something went wrong fetching data')
    // })
    // .then((results) => setResults(results))
    // .catch((err) => setError(err.message))
    setResults(data.results)
  }, [])
  console.log(results)
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => {
            return (
              <tr key={result.id}>
                <td>{result.id}</td>
                <td>{result.firstName}</td>
                <td>{result.lastName}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <section className='pagination'>
        <button className='first-page-btn'>first</button>
        <button className='previous-page-btn'>previous</button>
        <button className='next-page-btn'>next</button>
        <button className='last-page-btn'>last</button>
      </section>
    </div>
  )
}
