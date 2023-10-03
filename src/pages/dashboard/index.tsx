import { styled } from '@mui/material/styles'
import { Button, Card, Grid, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import Image from 'next/image'
import { DashboardIcon } from '@/components/atoms/Icons'
import MusicPlayerSlider from '@/components/atoms/Player'
import { BarChart } from '@mui/icons-material'
import CalculateChartCard from '@/pages/dashboard/components/CalculateChartCard'
import ContainerStyled from '@/components/atoms/Container'

const Dashboard = () => {
  return (
    <ContainerStyled>
      <Grid container spacing={3} marginBottom={3}>
        <Grid item md={8} xs={12}>
          <Card sx={{ backgroundColor: '#DBF4E2', padding: 4, borderRadius: 5, boxShadow: 0 }}>
            <Grid container alignItems={'center'} spacing={2}>
              <Grid item lg={8} xs={12}>
                <Typography color='primary.darker' variant='h5' gutterBottom marginBottom={3}>
                  Welcome back!
                </Typography>
                <Typography marginBottom={3} fontSize={14} color='primary.dark'>
                  {"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."}
                </Typography>
                <Button size='small' variant='contained'>
                  Go now
                </Button>
              </Grid>
              <Grid item lg={4} xs={12}>
                {/* <DashboardIcon width={280} height={232} /> */}
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item md={4} xs={12}>
          <Card sx={{ padding: 2, borderRadius: 5, position: 'relative' }}>
            <MusicPlayerSlider />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <CalculateChartCard title={'Total Active Users'} percent={2.6} total={18.765} status={'increase'} />
        </Grid>
        <Grid item md={4} xs={12}>
          <CalculateChartCard title={'Total Installed'} percent={0.2} total={4.867} status={'increase'} />
        </Grid>
        <Grid item md={4} xs={12}>
          <CalculateChartCard title={'Total Downloads'} percent={0.1} total={678} status={'decrease'} />
        </Grid>
      </Grid>
    </ContainerStyled>
  )
}

export default Dashboard
