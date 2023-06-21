//this could be a very complicated script or generally a very quick and dirty one
// For the time being, I think setting up a state as an area served would be the best solution
// other options: cities, zipcodes, geo-shape (most advanced)

import { FormControl } from '@chakra-ui/react';
import React from 'react'

function AreaServedForm() {
    return {
        ASIRender: (
            <Box>
                <div>Placeholder: Area Served Form</div>
                <FormControl>
                    {/* Company Name */}
                    <FormLabel>Company Name</FormLabel>
                    <Input type='text' id="companyName" value={companyName} onChange={(e)=> setCompanyName(e.target.value)}/>
                    <FormHelperText>Your Company's name. Should be the same as on your website</FormHelperText>
                </FormControl>
            </Box>
        )
    }
}

export default AreaServedForm;