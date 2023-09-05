import { Button } from '@mui/material'
import axios from 'axios'
import { useEffect } from 'react'

const Collection = () => {
  const generateWords = async () => {
    const topic = 'programming'
    try {
      const response = await fetch('/api/chatgpt/generate-words', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ topic })
      })

      if (response.ok) {
        const data = await response.json()
        console.log(data.words) // Handle the generated words data
      } else {
        console.error('Failed to generate words:', response.status)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div>
      <Button variant='contained' color='secondary' onClick={generateWords}>
        Click
      </Button>
    </div>
  )
}

export default Collection
