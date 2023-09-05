import { Configuration, OpenAIApi } from 'openai'

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
  })
)

export { openai }
