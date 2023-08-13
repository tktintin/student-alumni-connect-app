import React from 'react';
import Header from '../components/Header';
// import styled from 'styled-components';
import { Box } from '@mui/material';
import Job from "../components/Job";


// const Wrapper = styled.div`
//     display: flex;
// `;

const OpportunitiesPage = ({ userProfile }) => {
    return (
        <>
            <Header userProfile={userProfile}/>
            {/* <Wrapper>
            <h1>Jobs & Opportunities</h1>
            </Wrapper> */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    // maxWidth: 300,
                    borderRadius: 1,
                }}
            >
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
            </Box>
        </>
    )
}

export default OpportunitiesPage;