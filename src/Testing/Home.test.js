import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../Home/Home'; 
import { BrowserRouter } from 'react-router-dom';

describe('Home Component', () => {

  const renderComponent = () => render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  it('renders without crashing', () => {
    renderComponent();
    expect(screen.getByText('Her Power, Her Past')).toBeInTheDocument();
  });

  it('displays the correct main title', () => {
    renderComponent();
    expect(screen.getByRole('heading', { name: /her power, her past/i })).toBeInTheDocument();
  });

  it('includes the Navbar component with the Home link', () => {
    renderComponent();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });

  it('includes the Navbar component with the Blogs link', () => {
    renderComponent();
    expect(screen.getByRole('link', { name: /blogs/i })).toBeInTheDocument();
  });
});
