import { Grid, Typography } from '@mui/material';
import './home.scss';
import CustomButton from '../customComponents/buttons/CustomButton';
import { COLORS } from '../../constants';
import { ChartComponent } from '../ChartComponent/ChartComponent';
import AssessmentComponent from '../AssessmentComponent/AssessmentComponent';
import TodayInterview from '../TodayInterviewComponent/TodayInterview';

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <div className='titleContainer'>
        <div className='titleTextContainer'>
          <Typography className='title'>HR Employee</Typography>
          <Typography className='subtitle'>Enjoy your selecting potential candidates Tracking and Management System.</Typography>
      </div>
      <div className='buttonContainer'>
        <CustomButton variant='contained' backgroundColor={COLORS.blue_button_background}>Task Details</CustomButton>
      </div>
      </div>
      {/* Graph Assessment Container */}
      <Grid container xl={12} className='graphAssessmentContainer' display={"flex"}>
        <Grid item md={6} xl={6} className='graphContainer'>
          <ChartComponent />
        </Grid>
        <Grid item md={5.90} xl={5.90} className='assessmentContainer'>
          <AssessmentComponent count={"0033"}/>
        </Grid>
      </Grid>
      <Grid container xl={12} className='bigSectionContainer'>
        <Grid item md={7.90} xl={7.90} className='bigSectionSubContainer'>
          <Grid container className='todayInterviewContainer'>
            <TodayInterview />
          </Grid>
        </Grid>
        <Grid item md={4} xl={4}>Right</Grid>
      </Grid>
      </div>
    </div>
  )
}

export default Home