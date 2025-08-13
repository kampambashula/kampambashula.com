// src/pages/Portfolio.js
import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Tabs, Tab, Box } from '@mui/material';

const portfolioItems = [
  {
    category: 'Data Science',
    title: 'Economic Growth Simulation',
    description: 'A system dynamics and ML-based simulation for Zambia’s GDP growth.',
    image: '/images/portfolio/5.jpg'
  },
  {
    category: 'Data Science',
    title: 'Trade Dashboard',
    description: 'An interactive Streamlit dashboard analyzing Zambia’s trade data.',
    image: '/images/portfolio/6.jpg'
  },
  {
    category: 'Economics & Policy',
    title: 'VAT Refund Policy Paper',
    description: 'An in-depth study on VAT refund impacts on manufacturing operations.',
    image: '/images/portfolio/vat_policy.png'
  },
  {
    category: 'Web Development',
    title: 'Jarvis AI Assistant',
    description: 'A personal productivity and automation assistant built with Django & React.',
    image: '/images/portfolio/5.jpg'
  },
  {
    category: 'Public Speaking',
    title: 'Economic Forum Presentation',
    description: 'Keynote on leveraging data science for African economic development.',
    image: '/images/portfolio/keynote.png'
  }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <Container maxWidth="lg" style={{ padding: '2rem 0' }}>
      <Typography variant="h3" gutterBottom>Portfolio</Typography>

      <Tabs
        value={selectedCategory}
        onChange={(e, newValue) => setSelectedCategory(newValue)}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ marginBottom: 3 }}
      >
        {categories.map((category, index) => (
          <Tab key={index} label={category} value={category} />
        ))}
      </Tabs>

      <Grid container spacing={4}>
        {filteredItems.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                alt={item.title}
                height="200"
                image={item.image}
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
