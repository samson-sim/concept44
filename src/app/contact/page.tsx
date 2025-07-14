'use client';

import { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Paper } from '@mui/material';
import emailjs from 'emailjs-com';
import SEO from '@/components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    note: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    note: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    note: false,
  });

  const [requestStatus, setRequestStatus] = useState<'idle' | 'pending' | 'success' | 'error'>(
    'idle',
  );
  const [responseMessage, setResponseMessage] = useState('');

  // Validation functions
  const validateName = (name: string) => {
    if (!name.trim()) {
      return 'Required';
    }
    if (name.length < 3) {
      return 'Name must be at least 3 characters long';
    }
    return '';
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validateNote = (note: string) => {
    if (!note.trim()) {
      return 'Required';
    }
    if (note.length < 8) {
      return 'Note must be at least 8 characters long';
    }
    if (note.length > 500) {
      return 'Note must be no more than 500 characters';
    }
    return '';
  };

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData({
      ...formData,
      [field]: value,
    });

    // Validate on change if field has been touched
    if (touched[field as keyof typeof touched]) {
      let error = '';
      switch (field) {
        case 'name':
          error = validateName(value);
          break;
        case 'email':
          error = validateEmail(value);
          break;
        case 'note':
          error = validateNote(value);
          break;
      }
      setErrors({
        ...errors,
        [field]: error,
      });
    }
  };

  const handleBlur = (field: string) => () => {
    setTouched({
      ...touched,
      [field]: true,
    });

    // Validate on blur
    let error = '';
    switch (field) {
      case 'name':
        error = validateName(formData.name);
        break;
      case 'email':
        error = validateEmail(formData.email);
        break;
      case 'note':
        error = validateNote(formData.note);
        break;
    }
    setErrors({
      ...errors,
      [field]: error,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const noteError = validateNote(formData.note);

    setErrors({
      name: nameError,
      email: emailError,
      note: noteError,
    });

    setTouched({
      name: true,
      email: true,
      note: true,
    });

    if (!nameError && !emailError && !noteError) {
      setRequestStatus('pending');
      setResponseMessage('');
      emailjs
        .send(
          'default_service',
          'template_ech62lu',
          {
            name: formData.name,
            email: formData.email,
            message: formData.note,
          },
          '35Nq54OP2w0Ie-plA',
        )
        .then(
          () => {
            setRequestStatus('success');
            setResponseMessage('Message sent successfully!');
            setFormData({ name: '', email: '', note: '' });
            setTouched({ name: false, email: false, note: false });
          },
          () => {
            setRequestStatus('error');
            setResponseMessage('Failed to send message. Please try again later.');
          },
        );
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | Concept 44"
        description="Ready to start your blockchain project? Contact Concept 44 to discuss how we can help bring your vision to life."
        image="/logo.png"
        url="https://concept44.com/contact"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          py: { xs: 5, md: 10 },
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              mb: 6,
            }}
          >
            <Typography variant="h4" color="#6589FF" letterSpacing={5} mb={2}>
              GET IN TOUCH
            </Typography>
            <Typography variant="h1" mb={3}>
              CONTACT US
            </Typography>
            <Typography variant="h5" color="text.disabled" maxWidth="600px">
              Ready to start your blockchain project? Let&apos;s discuss how we can help bring your
              vision to life.
            </Typography>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 6 },
              background: 'rgba(17, 20, 38, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 3,
              backdropFilter: 'blur(10px)',
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <TextField
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange('name')}
                onBlur={handleBlur('name')}
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#F1F6FF',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1F53FF',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1F53FF',
                    },
                    '&.Mui-error fieldset': {
                      borderColor: '#f44336',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#A4AFC8',
                    '&.Mui-focused': {
                      color: '#1F53FF',
                    },
                    '&.Mui-error': {
                      color: '#f44336',
                    },
                  },
                  '& .MuiFormHelperText-root': {
                    color: '#f44336',
                    fontSize: '0.75rem',
                  },
                }}
              />

              <TextField
                label="Email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#F1F6FF',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1F53FF',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1F53FF',
                    },
                    '&.Mui-error fieldset': {
                      borderColor: '#f44336',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#A4AFC8',
                    '&.Mui-focused': {
                      color: '#1F53FF',
                    },
                    '&.Mui-error': {
                      color: '#f44336',
                    },
                  },
                  '& .MuiFormHelperText-root': {
                    color: '#f44336',
                    fontSize: '0.75rem',
                  },
                }}
              />

              <TextField
                label="Note"
                variant="outlined"
                multiline
                rows={4}
                value={formData.note}
                onChange={handleChange('note')}
                onBlur={handleBlur('note')}
                error={touched.note && !!errors.note}
                helperText={touched.note && errors.note}
                placeholder="Tell us about your project..."
                required
                inputProps={{
                  maxLength: 500,
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    color: '#F1F6FF',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1F53FF',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1F53FF',
                    },
                    '&.Mui-error fieldset': {
                      borderColor: '#f44336',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#A4AFC8',
                    '&.Mui-focused': {
                      color: '#1F53FF',
                    },
                    '&.Mui-error': {
                      color: '#f44336',
                    },
                  },
                  '& .MuiFormHelperText-root': {
                    color: '#f44336',
                    fontSize: '0.75rem',
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={requestStatus === 'pending'}
                sx={{
                  mt: 2,
                  py: 2,
                  fontSize: '1rem',
                  fontWeight: 600,
                  background:
                    'linear-gradient(90.59deg, #082071 -16.36%, #0E3DD7 51%, #082071 106.76%)',
                  border: '1px solid #1F53FF',
                  '&:hover': {
                    background:
                      'linear-gradient(90.59deg, #0E3DD7 -16.36%, #1F53FF 51%, #0E3DD7 106.76%)',
                  },
                }}
              >
                {requestStatus === 'pending' ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
            {(requestStatus === 'success' || requestStatus === 'error') && (
              <Typography
                mt={3}
                align="center"
                color={requestStatus === 'success' ? 'success.main' : 'error'}
                fontWeight={500}
                fontSize="1.1rem"
              >
                {responseMessage}
              </Typography>
            )}
          </Paper>
        </Container>
      </Box>
    </>
  );
}
