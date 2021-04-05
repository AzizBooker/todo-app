import { render } from '@testing-library/react';
import {Container} from '@chakra-ui/react'
import React from 'react';
import CollectionList from './CollectionList';

const Sidebar=()=>{

return(
    <div>
    <Container maxW="container.sm">
        <h1>I am the Sidebar</h1>
        <CollectionList/>
    </Container>
    </div>
)

}

export default Sidebar;