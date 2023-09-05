import { openai } from '@/libs/openai'
import { NextApiRequest, NextApiResponse } from 'next'

const generateWords = async (req: NextApiRequest, res: NextApiResponse) => {
  const { topic } = req.body
  const prompt = `Generate 5 words related to ${topic}:`

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt,
      temperature: 0.8,
      n: 1
    })

    const choices = response.data.choices
    if (choices && choices.length > 0 && choices[0].text) {
      const generatedWords = choices[0].text.trim().split('\n')
      res.status(200).json({ words: generatedWords })
    } else {
      throw new Error('Failed to generate words')
    }
  } catch (error) {
    console.error('Failed to generate words:', error)
    res.status(500).json({ message: 'Failed to generate words', error: error })
  }
}

export default generateWords
