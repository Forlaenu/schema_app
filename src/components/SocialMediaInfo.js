import {FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Box, Button, Textarea,} from '@chakra-ui/react'
import { useState } from 'react';
    //add handleSubmit function
    //validate inputs
    //build schema
    //form id's for browser autofill?
    // break form up into categories so its easy to navigate ie basic info, socials, areaServed, knowsAbout, reviews/ratings, etc

function SocialMediaForm() {

    // social media links: facebook, zillow, pinterest, linkedin, youtube, instagram, twitter, tiktok, others?
    const [facebookURL, setFacebookURL] = useState("");
    const [zillowURL, setZillowURL] = useState("");
    const [pinterestURL, setPinterestURL] = useState("");
    const [linkedinURL, setLinkedinURL] = useState("");
    const [youtubeURL, setYoutubeURL] = useState("");
    const [instagramURL, setInstagramURL] = useState("");
    const [twitterURL, setTwitterURL] = useState("");
    const [tiktokURL, setTiktokURL] = useState("");

    return {
        SMIfacebook : facebookURL,
        SMIzillow : zillowURL,
        SMIpinterest : pinterestURL,
        SMIlinkedin : linkedinURL,
        SMIyoutube : youtubeURL,
        SMIinstagram : instagramURL,
        SMItwitter : twitterURL,
        SMItiktok : tiktokURL,
        SMIRender: (
            <Box>
                <p>Social Media form will go here</p>
                <FormControl>
                    {/* facebook */}
                    <FormLabel>Facebook URL</FormLabel>
                    <Input type='text' id="facebookurl" value={facebookURL} onChange={(e)=> setFacebookURL(e.target.value)}/>
                    <FormHelperText>Should be in the form of: https://</FormHelperText>
                    {/* zillow */}
                    <FormLabel>Zillow URL</FormLabel>
                    <Input type='text' id="zillowurl" value={zillowURL} onChange={(e)=> setZillowURL(e.target.value)}/>
                    <FormHelperText>Should be in the form of: https://</FormHelperText>
                    {/* linkedin */}
                    <FormLabel>LinkedIn URL</FormLabel>
                    <Input type='text' id="linkedinurl" value={linkedinURL} onChange={(e)=> setLinkedinURL(e.target.value)}/>
                    <FormHelperText>Should be in the form of: https://</FormHelperText>
                    {/* youtube */}
                    <FormLabel>YouTube URL</FormLabel>
                    <Input type='text' id="youtubeurl" value={youtubeURL} onChange={(e)=> setYoutubeURL(e.target.value)}/>
                    <FormHelperText>Should be in the form of: https://</FormHelperText>
                    {/* pinterest */}
                    <FormLabel>Pinterest URL</FormLabel>
                    <Input type='text' id="pinteresturl" value={pinterestURL} onChange={(e)=> setPinterestURL(e.target.value)}/>
                    <FormHelperText>Should be in the form of: https://</FormHelperText>
                    {/* instagram */}
                    <FormLabel>Instagram URL</FormLabel>
                    <Input type='text' id="instagramurl" value={instagramURL} onChange={(e)=> setInstagramURL(e.target.value)}/>
                    <FormHelperText>Should be in the form of: https://</FormHelperText>
                    {/* tiktok */}
                    <FormLabel>TikTok URL</FormLabel>
                    <Input type='text' id="tiktokurl" value={tiktokURL} onChange={(e)=> setTiktokURL(e.target.value)}/>
                    <FormHelperText>Should be in the form of: https://</FormHelperText>
                    {/* twitter */}
                    <FormLabel>Twitter URL</FormLabel>
                    <Input type='text' id="twitterurl" value={twitterURL} onChange={(e)=> setTwitterURL(e.target.value)}/>
                    <FormHelperText>Should be in the form of: https://</FormHelperText>
                </FormControl>
            </Box>
        )
    }
}
export default SocialMediaForm;