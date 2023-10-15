import React from 'react'; 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "../Tabs.css";
import ExperienceCards from '../components/ExperienceCards';
function HomeTabs() 
{ 
  return <div class="fluid-container">
    <Tabs>
    <TabList>
      <Tab >About Me</Tab>
      <Tab >Projects/Experience</Tab>
      <Tab >Achievements</Tab>
     
    </TabList>
    <TabPanel>
    <div>  Passionate for Machine Learning and Web Design. 
        <br/>Seeking opportunities to apply and further develop my skills in these fields.

           
             </div>
    </TabPanel>
    <TabPanel>
      <ExperienceCards />
    </TabPanel>
    <TabPanel>
      <div>
        <table>
            <tr>
            <th>Course Name</th> 
            <th>Certificates/Badges</th>
            </tr>
            <tr>
                <td> <h5>AWS Academy Cloud Foundations</h5></td>
                <td><a href= "https://www.credly.com/badges/7b2f62d2-a620-48aa-8801-dca4a4cd83c5">Badge</a></td>
            </tr>

            <tr>
                <td> <h5>Advance Learning Algorithms</h5></td>
                <td><a href= "https://coursera.org/share/d1e97543aa56e05d50182505b6fb650b">Certificate</a></td>
            </tr>
            <tr>
                <td> <h5>Microsoft Certified: Azure Fundamentals</h5></td>
                <td><a href= "https://www.credly.com/badges/4bbde451-a7e3-497f-b76f-04dc37f9e8b2">Badge</a></td>
            </tr>
            <tr>
                <td> <h5>Image Processing Onramp</h5></td>
                <td><a href= "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=5da958ef-6162-4ac8-8089-f7f3f5a3cf8d&">Certificate</a></td>
            </tr>
            <tr>
                <td> <h5>Fundamentals of Deep Learning</h5></td>
                <td><a href= "https://courses.nvidia.com/certificates/0f94b4bf11c34e9ea1177f196f6cb0d1/">Certificate</a></td>
            </tr>


        </table>
        <br/>
        
      </div>
    </TabPanel>
     
  </Tabs>
</div>
}
export default HomeTabs;