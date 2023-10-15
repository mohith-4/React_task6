import React from 'react'; 
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
function Footer()
{
return <div className='icons-list'>
<a
className="faLinkedin app-link social-media-list"
href="https://www.linkedin.com/in/mohith-s-4aa49b244/"
target="_blank"
rel="noopener noreferrer"
>
<FontAwesomeIcon icon={faLinkedin} size="2x" />
</a>
<a
className="faGithub app-link social-media-list"
href="https://github.com/mohith-4"
target="_blank"
rel="noopener noreferrer"
>
<FontAwesomeIcon icon={faGithub} size="2x" />
</a>
 
</div>  
}
export default Footer;