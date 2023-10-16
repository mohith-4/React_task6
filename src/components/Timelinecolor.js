
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import '../components/Timeline.css'

export default function TimelineC() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div id='cont'>
        <h3>Undergraduate</h3>
            <p>Bachelor of Technology with specilization in Artificial Intelligence and Machine Learning</p>
            <p>VIT AP University, Amaravathi, AP</p>
            <p>08/2021 - present</p>
            <p> <b>CGPA</b> : 9.12</p>
            </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div id='cont'>
            <h3>Intermediate</h3>
            <p>SreeVardhan Junior College, Hyderabad</p>
            <p>2019-2021</p>
            <p><b>Percentage</b>: 97.2%</p>  </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div id='cont'>
            <h3>Secondary Education</h3>
            <p>Millennium Talent High School,Madhira, Telanagana</p>
            <p>2018-2019</p>
            <p><b>GPA</b> : 10</p>
            </div>


        </TimelineContent>
      </TimelineItem>
       
    </Timeline>
  );
}