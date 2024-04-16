import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SEND_FEEDBACK } from '../graphql/mutations';
import { TextField, Button, Box, Typography, Snackbar, Alert } from '@mui/material';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [sendFeedback, { loading, error }] = useMutation(SEND_FEEDBACK);
    const [snackbarInfo, setSnackbarInfo] = useState({ open: false, message: '', severity: 'info' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateEmail = (email) => {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateEmail(formData.email)) {
            setSnackbarInfo({ open: true, message: 'Please enter a valid email address.', severity: 'error' });
            return;
        }
        try {
            await sendFeedback({
                variables: {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                }
            });
            setSnackbarInfo({ open: true, message: 'Your message has been sent successfully!', severity: 'success' });
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (err) {
            console.error('Error sending message:', err);
            setSnackbarInfo({ open: true, message: 'Error sending message. Please try again.', severity: 'error' });
        }
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarInfo({ ...snackbarInfo, open: false });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Typography variant="h6">Contact Us</Typography>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={formData.name}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="message"
                label="Message"
                type="text"
                id="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
            >
                Send Message
            </Button>
            <Snackbar open={snackbarInfo.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity={snackbarInfo.severity} sx={{ width: '100%' }}>
                    {snackbarInfo.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactForm;
