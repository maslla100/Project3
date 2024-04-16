import React from 'react';
import { Typography, Container } from '@mui/material';
import { Helmet } from 'react-helmet';

const AboutUsPage = () => {
    return (
        <main>
            <Helmet>
                <title>About Us - Charity Donation Platform</title>
                <meta name="description" content="Learn about Charity Donation Platform and our mission to connect donors with charities using cutting-edge technology." />
            </Helmet>
            <Container>
                <Typography component="h1" variant="h2" gutterBottom>
                    About Us
                </Typography>
                <section>
                    <Typography variant="body1" paragraph>
                        At Charity Donation Platform, we are dedicated to creating connections that matter. Our mission is to empower charitable organizations by providing them with a cutting-edge platform where they can showcase their causes, connect with donors, and receive vital funds to continue their impactful work.
                    </Typography>
                </section>
                <section>
                    <Typography variant="body1" paragraph>
                        Founded in 2024, our platform was born from a desire to bridge the gap between charities in need and potential donors. Utilizing the latest technologies in the MERN stack—MongoDB, Express.js, React, and Node.js—we have crafted a seamless, single-page application that prioritizes user experience and responsiveness. Each charity on our platform is vetted and provided with a comprehensive profile that includes mission statements, impact scores, and direct donation capabilities.
                    </Typography>
                </section>
                <section>
                    <Typography variant="body1" paragraph>
                        Join us at Charity Donation Platform, where your generosity meets efficiency and integrity. Together, we can create a lasting impact and help those in need around the world.
                    </Typography>
                </section>
            </Container>
        </main>
    );
};

export default AboutUsPage;
