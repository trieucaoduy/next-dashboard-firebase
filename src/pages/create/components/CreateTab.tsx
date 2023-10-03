import { TYPES_OF_WORD } from '@/common/constants'
import { IVocabulary } from '@/common/types'
import { Add, Clear } from '@mui/icons-material'
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useCallback, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import VCButton from '../../../components/atoms/Button'

const buttonProps = {
  btntype: 'primary'
}

const CreateTab = () => {
  const [word, setWord] = useState<string>('')
  const [meaning, setMeaning] = useState<string>('')
  const [example, setExample] = useState<string>('')
  const [typeOfWord, setTypeOfWord] = useState<string>('')
  const [pronounce, setPronounce] = useState<string>('')

  const [isError, setIsError] = useState<number[]>([])

  const onSubmit = async () => {
    validateForm()

    if (isError.length) return

    const payload: IVocabulary = {
      term: word,
      definition: meaning,
      example: example,
      pronounce: pronounce,
      type: typeOfWord
    }
    try {
      const createTermService = await fetch('/api/vocabulary/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const dataResponse = await createTermService.json()
      if (createTermService.ok) {
        toast.success(dataResponse.message, {
          autoClose: 2000
        })
        onReset()
      } else {
        console.log({ createTermService })
        toast.error(dataResponse.message, {
          autoClose: 2000
        })
      }
    } catch (err) {
      console.error(err)
      toast.error('Something went wrong. Try again', {
        autoClose: 2000
      })
    }
  }

  const onReset = () => {
    setIsError([])
    setWord('')
    setMeaning('')
    setExample('')
    setTypeOfWord('')
    setPronounce('')
  }

  const validateForm = useCallback(() => {
    const form = { word, meaning, example, typeOfWord, pronounce }

    Object.values(form).forEach((value: string, index: number) => {
      if (!value || value === '') {
        setIsError((prev) => {
          if (!prev.includes(index)) prev.push(index)
          return [...prev]
        })
      } else {
        setIsError((prev) => {
          if (prev.includes(index)) prev = prev.filter((item) => item !== index)
          return [...prev]
        })
      }
    })
  }, [word, meaning, example, typeOfWord, pronounce])

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <TextField
            error={isError.includes(0)}
            fullWidth
            label='New word'
            value={word}
            onChange={(e) => setWord(e.target.value)}
            helperText={isError.includes(0) ? 'This field is required' : ''}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            error={isError.includes(1)}
            fullWidth
            label='Meaning'
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
            helperText={isError.includes(1) ? 'This field is required' : ''}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            error={isError.includes(2)}
            fullWidth
            label='Example'
            value={example}
            onChange={(e) => setExample(e.target.value)}
            helperText={isError.includes(2) ? 'This field is required' : ''}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl error={isError.includes(3)} sx={{ width: '100%' }}>
            <InputLabel>Choose type</InputLabel>
            <Select value={typeOfWord} onChange={(e) => setTypeOfWord(e.target.value)} label='Choose type' fullWidth>
              {TYPES_OF_WORD.map((item) => (
                <MenuItem value={item.value} key={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
            {isError.includes(3) && <FormHelperText>This field is required</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            error={isError.includes(4)}
            fullWidth
            label='Pronounce'
            value={pronounce}
            onChange={(e) => setPronounce(e.target.value)}
            helperText={isError.includes(3) ? 'This field is required' : ''}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent='flex-end' gap='16px'>
        <Grid item>
          <VCButton
            sx={{ marginTop: '24px', padding: '8px 24px !important', boxShadow: 'none' }}
            variant='contained'
            onClick={onReset}
            {...{ btntype: 'transparent' }}
          >
            Reset
          </VCButton>
        </Grid>
        <Grid item>
          <VCButton
            sx={{ marginTop: '24px', padding: '8px 24px !important' }}
            variant='contained'
            onClick={onSubmit}
            {...buttonProps}
          >
            Create
          </VCButton>
        </Grid>
      </Grid>
    </>
  )
}

export default CreateTab
