import { AutoAwesome, Create } from '@mui/icons-material'
import { Tabs, Tab, Card, Typography, Container } from '@mui/material'
import { Box } from '@mui/system'
import { useCallback, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import styles from 'src/styles/create.module.scss'
import { CreateTab, GenerateTab, TabPanel } from './components'

const CreateWord = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const createNewWord = () => {}

  return (
    <Container>
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
    </Container>
  )
}

export default CreateWord
