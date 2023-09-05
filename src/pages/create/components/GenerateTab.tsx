import { LEVEL_VOCABULARY, TYPES_OF_WORD } from '@/common/constants'
import { SelectChangeEvent } from '@mui/material'
import { useCallback, useState } from 'react'
import styles from 'src/styles/create.module.scss'
import { GenerateSelect } from './index'

const GenerateTab = () => {
  const [level, setLevel] = useState<string>('beginer')
  const [type, setType] = useState<string>('verb')

  const handleChangeSelect = useCallback((evt: SelectChangeEvent, type: string) => {
    const {
      target: { value }
    } = evt

    console.log({ evt })

    type === 'LEVEL' ? setLevel(value) : setType(value)
  }, [])

  return (
    <>
      <div className={styles.generateHeader}>
        <GenerateSelect
          listItem={LEVEL_VOCABULARY}
          selectLabel={'Level'}
          controlValue={level}
          onChangeSelect={(evt: SelectChangeEvent) => handleChangeSelect(evt, 'LEVEL')}
        />
        <GenerateSelect
          listItem={TYPES_OF_WORD}
          selectLabel={'Type'}
          controlValue={type}
          onChangeSelect={(evt: SelectChangeEvent) => handleChangeSelect(evt, 'TYPE')}
        />
      </div>
    </>
  )
}

export default GenerateTab
