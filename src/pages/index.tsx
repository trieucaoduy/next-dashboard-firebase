import Head from 'next/head'
import { Button, Card, Grid, Typography } from '@mui/material'
import { CategoryIcon, DashboardIcon } from '@/components/atoms/Icons'
import { useState } from 'react'
import axios from 'axios'
import ContainerStyled from '@/components/atoms/Container'
import { goTo } from '@/utils'
import { useRouter } from 'next/router'

const Home = () => {
  const [vocabulary, setVocabulary] = useState<string>()
  const [typeOfWord, setTypeOfWord] = useState<string>()
  const [meaning, setMeaning] = useState<string>()
  const [pronunciation, setPronunciation] = useState<string>()
  const [example, setExample] = useState<string>()
  const router = useRouter()

  const generateNewWord = async () => {
    try {
      const response = await axios.get('/api/chatgpt/generate-vocabulary')
      const word = response?.data?.result?.content ?? ''
      const parseWord = parseWordComponents(word)

      const { vocabulary, typeOfWord, meaning, pronunciation, example } = parseWord

      setVocabulary(vocabulary)
      setTypeOfWord(typeOfWord)
      setMeaning(meaning)
      setPronunciation(pronunciation)
      setExample(example)
    } catch (error) {
      console.error(error)
    }
  }

  const parseWordComponents = (word: string) => {
    const components = word.split('|').map((component) => component.trim())

    return {
      vocabulary: components[0],
      typeOfWord: components[1],
      meaning: components[2],
      pronunciation: `/${components[3]}/`,
      example: components[4]
    }
  }

  return (
    <>
      <main>
        <ContainerStyled>
          <Grid container spacing={3} marginBottom={3}>
            <Grid item md={9} sm={7} xs={12}>
              <Card className='widget' sx={{ backgroundColor: '#DBF4E2', padding: 4, borderRadius: 5, boxShadow: 0 }}>
                <Grid container alignItems={'center'} spacing={2}>
                  <Grid item lg={8} xs={12}>
                    <Typography
                      className='widget__title'
                      color='primary.darker'
                      variant='h5'
                      gutterBottom
                      marginBottom={3}
                    >
                      Hi Username, welcome back 👋
                    </Typography>
                    <Typography marginBottom={3} fontSize={14} color='primary.dark'>
                      {"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."}
                    </Typography>
                    <Button
                      className='widget__button normal-case btn-primary px-10'
                      size='small'
                      variant='contained'
                      onClick={() => goTo(router, '/create')}
                    >
                      Let's started!
                    </Button>
                  </Grid>
                  <Grid className='widget' item lg={3} xs={12}>
                    <DashboardIcon width={280} height={232} />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item md={3} sm={5} xs={12}>
              <div className='widget h-full text-center'>
                <div className='widget__title text-center mb-3'>Your vocabulary practices this week</div>
                <div className='widget__count word-count font-extrabold text-center mb-3'>30</div>
                <div className='widget__caption text-center mb-5'>Let's finish the remaining!</div>
                <Button className='widget__button btn-alert w-full uppercase'>Practice</Button>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <div className='widget'>
                <div className='widget__title mb-5 font-extrabold'>Categories</div>
                <div className='widget__list flex flex-col gap-3'>
                  <div className='widget__item flex items-center p-2 gap-5'>
                    <div className='widget__pic pic-default p-3'>
                      <CategoryIcon {...{ width: '25px', height: '25px' }} />
                    </div>
                    <div className='widget__category'>
                      <div className='widget__category-title mb-1'>Technology</div>
                      <div className='widget__category-caption'>All about technology</div>
                    </div>
                  </div>
                  <div className='widget__item flex items-center p-2 gap-5'>
                    <div className='widget__pic pic-default p-3'>
                      <CategoryIcon {...{ width: '25px', height: '25px' }} />
                    </div>
                    <div className='widget__category'>
                      <div className='widget__category-title mb-1'>Technology</div>
                      <div className='widget__category-caption'>All about technology</div>
                    </div>
                  </div>
                  <div className='widget__item flex items-center p-2 gap-5'>
                    <div className='widget__pic pic-default p-3'>
                      <CategoryIcon {...{ width: '25px', height: '25px' }} />
                    </div>
                    <div className='widget__category'>
                      <div className='widget__category-title mb-1'>Technology</div>
                      <div className='widget__category-caption'>All about technology</div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className='widget'>
                <div className='widget__title mb-5 font-extrabold'>Categories</div>
                <div className='widget__list flex flex-col gap-3'>
                  <div className='widget__item flex items-center p-2 gap-5'>
                    <div className='widget__pic pic-default p-3'>
                      <CategoryIcon {...{ width: '25px', height: '25px' }} />
                    </div>
                    <div className='widget__category'>
                      <div className='widget__category-title mb-1'>Technology</div>
                      <div className='widget__category-caption'>All about technology</div>
                    </div>
                  </div>
                  <div className='widget__item flex items-center p-2 gap-5'>
                    <div className='widget__pic pic-default p-3'>
                      <CategoryIcon {...{ width: '25px', height: '25px' }} />
                    </div>
                    <div className='widget__category'>
                      <div className='widget__category-title mb-1'>Technology</div>
                      <div className='widget__category-caption'>All about technology</div>
                    </div>
                  </div>
                  <div className='widget__item flex items-center p-2 gap-5'>
                    <div className='widget__pic pic-default p-3'>
                      <CategoryIcon {...{ width: '25px', height: '25px' }} />
                    </div>
                    <div className='widget__category'>
                      <div className='widget__category-title mb-1'>Technology</div>
                      <div className='widget__category-caption'>All about technology</div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </ContainerStyled>
      </main>
    </>
  )
}

export default Home
