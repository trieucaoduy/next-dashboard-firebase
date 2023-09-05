import { BarChart } from '@mui/icons-material'
import { Card, Typography, Grid } from '@mui/material'

const CalculateChartCard = (props: any) => {
  const { title, percent, total, status } = props
  return (
    <Card>
      <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
        {title}
      </Typography>
      <Grid container alignItems={'center'}>
        <Grid item md={6}>
          <p>
            {' '}
            {status === 'increase' ? '+' : '-'}
            {percent}%
          </p>
          <h3>{total}</h3>
        </Grid>
        <Grid item md={6} textAlign={'right'}>
          <BarChart />
        </Grid>
      </Grid>
    </Card>
  )
}

export default CalculateChartCard
