import React from 'react';
import Material, {Box, styled} from '@mui/material';

const SomeElement: React.FC = styled(Box)`
    background-color: red;
`

export default function Header(): React.ReactElement {
  return (
    <Box>
        wefwef
        <SomeElement>qwdqwdq</SomeElement>
    </Box> 
  );
}
