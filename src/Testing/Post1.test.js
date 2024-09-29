import React from 'react';
import { render, screen } from '@testing-library/react';
import Post1 from '../Posts/Post1/Post1'; 
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Post1', () => {
    beforeEach(() => {
      render(
        <Router>
          <Post1 />
        </Router>
      );
    });

  it('renders the title correctly', () => {
    expect(screen.getByRole('heading', { name: /Her Ties to Motherhood/i })).toBeInTheDocument();
  });

  it('renders the description correctly', () => {
    expect(screen.getByText(/The lives of enslaved women rewritten in the frame of motherhood./i)).toBeInTheDocument();
  });

  it('displays the author and date', () => {
    expect(screen.getByText(/Written by Pranavi Kolouju on September 28, 2024/i)).toBeInTheDocument();
  });

  it('renders citations correctly', () => {
    expect(screen.getByText(/Citations: Miles, Tiya. 2022./i)).toBeInTheDocument();
  });

  it('renders the Navbar with the Home link', () => {
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  });

  it('renders the Navbar with the Blogs link', () => {
    expect(screen.getByRole('link', { name: /blogs/i })).toBeInTheDocument();
  });
});
