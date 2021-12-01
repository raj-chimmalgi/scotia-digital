import React, { useState, useEffect } from 'react'
import mockData from './data'

const USERS_URL = 'https://example.com/api/users'

export default function Table() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [error, setError] = useState('')

  let totalPage = 0

  useEffect(() => {
    setLoading(true)

    // fetch(`${USERS_URL}/?page=${page}`)
    //   .then((res) => {
    //     if (res.ok) return res.json()
    //     throw new Error('Something went wrong fetching data')
    //   })
    //   .then((data) => {
    //     setData(results)
    //     totalPage = Math.floor(data.count / 10)
    //     setLoading(false)
    //   })
    // .catch((err) => setError(err.message))
    setData(mockData)
    totalPage = Math.floor(data.count / 10)
  }, [page])

  const goToFirstPage = () => {
    setPage(0)
  }

  const goToPreviousPage = () => {
    setPage((page) => page - 1)
  }

  const goToNextPage = () => {
    setPage((page) => page + 1)
  }

  const goToLastPage = () => {
    setPage(totalPage)
  }

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
          {data.results.map((result) => {
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
        <button className='first-page-btn' onClick={goToFirstPage}>
          first
        </button>
        <button className='previous-page-btn' onClick={goToPreviousPage}>
          previous
        </button>
        <button className='next-page-btn' onClick={goToNextPage}>
          next
        </button>
        <button className='last-page-btn' onClick={goToLastPage}>
          last
        </button>
      </section>
    </div>
  )
}
