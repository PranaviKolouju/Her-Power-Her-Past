import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Blogs from '../Blogs/Blogs'; 

describe('Blogs Component', () => {
    
  const renderComponent = () => render(
    <BrowserRouter>
      <Blogs />
    </BrowserRouter>
  );

  it('contains the Navbar with the Home link', () => {
    renderComponent();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });

  it('contains the Navbar with the Blogs link', () => {
    renderComponent();
    expect(screen.getByRole('link', { name: /blogs/i })).toBeInTheDocument();
  });
});

