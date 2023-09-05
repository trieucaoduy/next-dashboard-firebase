import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const generateVocabulary = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: 'Generation a single word (English) with format Word|Part of speech|Meaning|IPA|Example sentence'
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
        }
      }
    )
    const result = response.data.choices[0].message

    res.status(200).json({ result })
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate vocabulary' })
  }
}

export default generateVocabulary
