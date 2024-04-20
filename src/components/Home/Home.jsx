import { Typography } from '@mui/material';
import './home.scss';
import CustomButton from '../customComponents/buttons/CustomButton';
import { COLORS } from '../../constants';
import { ChartComponent } from '../ChartComponent/ChartComponent';
import SMALL from '../../assets/new_assessment_icons/small.png';
import BIG from '../../assets/new_assessment_icons/big.png';
import NOTE from '../../assets/new_assessment_icons/notes.png';

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
      {/* Graph Container */}
      <div className='graphAssessmentContainer'>
        <div className='graphContainer'>
          <Typography className='graphTitle'>{"Application's Info"}</Typography>
          <ChartComponent />
        </div>
        <div className='assessmentContainer'>
          <div className='leftContainer'>
            <div className='leftWhiteBox'>
              <img src={NOTE} alt='notesIcon' className='notesImage'/>
            </div>
            <Typography className='cardMetricContent'>0033</Typography>
            <Typography className='cardMetricSubContent'>{"New Assessment's"}</Typography>
          </div>
          <div className='rightMainContainer'>
          <div className='rightContainer'>
            <div className='rightImageContainer'>
              <div className='smallImage'>
              <img src={SMALL} alt='smallIcon' />
              </div>
              <div className='bigImageContainer'>
            <img src={BIG} alt='bigIcon' />
            <div>
            <CustomButton variant='outlined' backgroundColor={COLORS.primary_white} color={COLORS.primary_black}>
              <Typography>VIEW DETAILS</Typography>
            </CustomButton>
            </div>
            </div>            
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home