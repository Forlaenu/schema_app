import {FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Box, Button, Textarea, Heading,} from '@chakra-ui/react'
import { useState } from 'react';
import BasicCompanyInfoForm from './BasicCompanyInfo';
import SocialMediaForm from './SocialMediaInfo';
import AreaServedForm from './AreaServedInfo';
    //add handleSubmit function
    //validate inputs
    //build schema
    //form id's for browser autofill?
    // break form up into categories so its easy to navigate ie basic info, socials, areaServed, knowsAbout, reviews/ratings, etc

function MainForm() {
    const {BCIRender, BCIName, BCIEmail, BCIDesc, BCIPhone, BCIAdST, BCIAdCT} = BasicCompanyInfoForm();
    const {SMIRender, SMIfacebook, SMIzillow, SMIlinkedin, SMIyoutube, SMIpinterest, SMIinstagram, SMItiktok, SMItwitter} = SocialMediaForm();
    const {ASIRender, } = AreaServedForm();
    const [page, setPage] = useState(0);
    const FormTitles = ["Basic Company Info", "Social Media Info", "Service Area", "Knows About", "Reviews"];
    const [output, setOutput] = useState("");
    const FormDisplay = () => {
        if(page === 0) {
            return BCIRender
        }
        else if (page === 1) {
            return SMIRender
        }
        else if (page === 2) {
            return ASIRender
        }
        else if (page === 3) {
            return <p>Placeholder: Knows About Form Here</p>
        }
        else if (page === 3) {
            return <p>Placeholder: Reviews Form Here</p>
        }
        else {
            return <div></div>
        }
    }

    // currently just updates textarea to show contents of variables for validation TESTING
    function handleSubmit() {
        setOutput(<div>Basic Company Info: <p>{BCIName}</p><p>{BCIEmail}</p><p>{BCIDesc}</p><p>{BCIPhone}</p><p>{BCIAdST}</p><p>{BCIAdCT}</p><br/>
        Socials: <p>{SMIfacebook}</p><p>{SMIzillow}</p><p>{SMIlinkedin}</p><p>{SMIyoutube}</p><p>{SMIpinterest}</p><p>{SMIinstagram}</p><p>{SMItiktok}</p><p>{SMItwitter}</p></div>);
    }

    return (
        <Box>
            <p>Main form will go here</p>
            <Heading as="h2" mb="24px">{FormTitles[page]}</Heading>
            {FormDisplay()}
            <Box mt="24px">
                <Button isDisabled={page === 0} onClick={() => setPage(page-1)}>Previous</Button>
                <Button isDisabled={page === (FormTitles.length - 1)  } onClick={() => setPage(page+1)}>Next</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </Box>
            <Box>{output}</Box>
        </Box>
    )
}
export default MainForm;