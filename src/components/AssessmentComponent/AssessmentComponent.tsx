import React from "react"
import './AssessmentComponent.scss'
import NOTE from '../../assets/new_assessment_icons/notes.png';
import SMALL from '../../assets/new_assessment_icons/small.png';
import BIG from '../../assets/new_assessment_icons/big.png';
import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../customComponents/buttons/CustomButton";

interface AssessmentComponentProps{
  count: String
}

const AssessmentComponent = ({count}: AssessmentComponentProps) => {
  return (
    <Grid container md={12} xl={12} className="assessmentGridContainer">
      <Grid item md={6} xl={6} className="gridLeft">        
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="flex-start"
          height={"100%"}
          className="gridLeftContainer"
        >
          <Grid item className="gridLeftWhiteBox">
            <img src={NOTE} alt="note" />
          </Grid>
          <Grid item className="gridLeftCountContainer">
            <Typography className="gridLeftCount">{count}</Typography>
          </Grid>
          <Grid item className="gridLeftTitleContainer">
            <Typography className="gridLeftTitle">New Assessment's</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} xl={6} className="gridRight">
        <div className="gridRightImgContainer">
          <img src={SMALL} alt="small" />
          <img src={BIG} alt="big" className="bigImageContainer" />
        </div>
        <div className="gridRightButtonContainer">
          <CustomButton variant="outlined" backgroundColor={"#FFFFFF"} color={"#000000"}>View Details</CustomButton>
        </div>
      </Grid>
    </Grid>
  )
}

export default AssessmentComponent