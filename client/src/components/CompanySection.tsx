import React from 'react';
import {styled, Box, Typography, Button} from '@mui/material';

const StyledSection: React.FC<{}> = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    border-bottom: 1px black solid;
`;

const SectionInfo: React.FC<{}> = styled(Box)`
    width: 100px;
    height: 100px;
`;

const Title: React.FC<{}> = styled(Box)`
    
`
const DetailButton: React.FC<{}> = styled(Button)`
    
`

function CompanySection(): React.ReactElement {
  return (
    <StyledSection>
        <SectionInfo>
            <Title>
                 <Typography>
                     shopname
                 </Typography>
            </Title>
            <DetailButton>
                <Typography>
                    learn more
                </Typography>
            </DetailButton>   
        </SectionInfo>
    </StyledSection>
  );
}

export default CompanySection;
