'use client'

import { useEffect } from 'react'

interface IErr {
  error: Error
  reset: () => void
}

const Error = ({ error, reset }: IErr) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </>
  )
}

export default Error
