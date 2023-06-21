import {FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Box, Button, Textarea,} from '@chakra-ui/react'
import { useState } from 'react';
    //add handleSubmit function
    //validate inputs
    //build schema
    //form id's for browser autofill?
    // break form up into categories so its easy to navigate ie basic info, socials, areaServed, knowsAbout, reviews/ratings, etc

function BasicCompanyInfoForm() {
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyDesc, setCompanyDesc] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [addressST, setAddressST] = useState("");
    const [addressCT, setAddressCT] = useState("");

    return {
        BCIEmail: email,
        BCIName : companyName,
        BCIDesc : companyDesc,
        BCIPhone : phoneNumber,
        BCIAdST : addressST,
        BCIAdCT : addressCT,
        BCIRender : (
            <Box>
                <p>Basic Company Info form will go here</p>
                <FormControl>
                    {/* Company Name */}
                    <FormLabel>Company Name</FormLabel>
                    <Input type='text' id="companyName" value={companyName} onChange={(e)=> setCompanyName(e.target.value)}/>
                    <FormHelperText>Your Company's name. Should be the same as on your website</FormHelperText>

                    {/* Company Description */}
                    <FormLabel>Description</FormLabel>
                    <Input type='text' id="companyDescription" value={companyDesc} onChange={(e)=> setCompanyDesc(e.target.value)}/>
                    <FormHelperText>A description of your company and what you do. Be sure to mention that you purchase houses with cash</FormHelperText>

                    {/* Email */}
                    <FormLabel>Email Address</FormLabel>
                    <Input type='email' id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <FormHelperText>Your company email address. Should be the same as on your website</FormHelperText>

                    {/* Telephone */}
                    {/* would like to fix this to format as xxx-xxx-xxxx */}
                    <FormLabel>Phone Number</FormLabel>
                    <Input type='text' id="tel" maxLength="10" value={phoneNumber} onChange={(e)=> setPhoneNumber((e.target.value))}/>
                    <FormHelperText>Your Company's phone number. Should be the same as on your website</FormHelperText>
                    {/* "[0-9]{3}[0-9]{3}[0-9]{4}" */}

                    {/* Address - State */}
                    {/* Need to be clear here this should be similar to GMB
                    and not a physical mailing address unless they have a store front */}
                    <FormLabel>Market State</FormLabel>
                    <Input type='text' id="addressState" value={addressST} onChange={(e)=> setAddressST(e.target.value)}/>
                    <FormHelperText>Your primary market State </FormHelperText>
                    
                    {/* Address - City */}
                    {/* Need to be clear here this should be similar to GMB
                    and not a physical mailing address unless they have a store front */}
                    <FormLabel>Market City</FormLabel>
                    <Input type='text' id="addressCity" value={addressCT} onChange={(e)=> setAddressCT(e.target.value)}/>
                    <FormHelperText>Your primary market City </FormHelperText>

                </FormControl>
            </Box>
        )
        }
}
export default BasicCompanyInfoForm;