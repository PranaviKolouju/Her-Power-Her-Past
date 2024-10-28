import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

  it('renders the search bar', () => {
    renderComponent();
    expect(screen.getByLabelText(/search blogs/i)).toBeInTheDocument();
  });

  it('renders blog posts correctly', () => {
    renderComponent();

    expect(screen.getByText(/Her Ties To Motherhood/i)).toBeInTheDocument();
    expect(screen.getByText(/The lives of enslaved women rewritten in the frame of motherhood./i)).toBeInTheDocument();
    expect(screen.getByText(/Her Search for Autonomy in The New World/i)).toBeInTheDocument();
    expect(screen.getByText(/She seeks what society tells her she cannot have./i)).toBeInTheDocument();
  });

  it('filters blog posts based on search query', () => {
    renderComponent();

    const searchInput = screen.getByLabelText(/search blogs/i);
    fireEvent.change(searchInput, { target: { value: 'Motherhood' } });

    expect(screen.getByText(/Her Ties To Motherhood/i)).toBeInTheDocument();
    expect(screen.queryByText(/Her Search for Autonomy in The New World/i)).not.toBeInTheDocument();
  });

  it('displays no results if the search query does not match any blog posts', () => {
    renderComponent();

    const searchInput = screen.getByLabelText(/search blogs/i);
    fireEvent.change(searchInput, { target: { value: 'Nonexistent Post' } });

    expect(screen.queryByText(/Her Ties To Motherhood/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Her Search for Autonomy in The New World/i)).not.toBeInTheDocument();
  });

  it('clears the search query to show all blog posts', () => {
    renderComponent();

    const searchInput = screen.getByLabelText(/search blogs/i);
    fireEvent.change(searchInput, { target: { value: 'Motherhood' } });

    expect(screen.getByText(/Her Ties To Motherhood/i)).toBeInTheDocument();
    expect(screen.queryByText(/Her Search for Autonomy in The New World/i)).not.toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: '' } });

    expect(screen.getByText(/Her Ties To Motherhood/i)).toBeInTheDocument();
    expect(screen.getByText(/Her Search for Autonomy in The New World/i)).toBeInTheDocument();
  });
});
