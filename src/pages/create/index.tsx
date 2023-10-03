import ContainerStyled from '@/components/atoms/Container'
import { AutoAwesome, Create } from '@mui/icons-material'
import { Tabs, Tab, Card } from '@mui/material'
import { useState } from 'react'
import styles from 'src/styles/create.module.scss'
import { CreateTab, GenerateTab, TabPanel } from './components'

const CreateWord = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const createNewWord = () => {}

  return (
    <ContainerStyled>
      <Card>
        <Tabs value={value} onChange={handleChange} className={styles.mainTab}>
          <Tab icon={<Create />} label='Create' className={styles.mainTabBtn} />
          <Tab icon={<AutoAwesome />} label='Generate by AI' className={styles.mainTabBtn} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <CreateTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <GenerateTab />
        </TabPanel>
      </Card>
    </ContainerStyled>
  )
}

export default CreateWord
