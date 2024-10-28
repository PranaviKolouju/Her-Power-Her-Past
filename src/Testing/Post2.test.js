import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogPost2 from '../Posts/Post2/Post2';  // Adjust the path as needed
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

describe('BlogPost2', () => {
    beforeEach(() => {
      render(
        <Router>
          <BlogPost2 />
        </Router>
      );
    });

    it('renders the title correctly', () => {
      expect(screen.getByRole('heading', { name: /Her Search for Autonomy in The New World/i })).toBeInTheDocument();
    });

    it('renders the description correctly', () => {
      expect(screen.getByText(/She seeks what society tells her she cannot have./i)).toBeInTheDocument();
    });

    it('displays the author and date', () => {
      expect(screen.getByText(/Written by Pranavi Kolouju on October 26, 2024/i)).toBeInTheDocument();
    });

    it('renders the main content paragraphs', () => {
      const contentParagraphs = [
        /A wave of immigration characterized the early 1900s in the United States/i,
        /Women weaponized the promise of education in the new land/i,
        /Defying traditional, gendered norms was a new path to autonomy/i,
        /Women also found ways to assert autonomy through their physical appearance/i,
        /And so, we have explored the ways in which women in the new world have sought out/i
      ];

      contentParagraphs.forEach((paragraph) => {
        expect(screen.getByText(paragraph)).toBeInTheDocument();
      });
    });

    it('renders the citations section title', () => {
      expect(screen.getByText(/Citations/i)).toBeInTheDocument();
    });

    it('renders the citations correctly', () => {
      const citations = [
        /Yung, Judy. 2019. “Unbound Feet: From China to San Francisco’s Chinatown/i,
        /Ruiz, Vicki L. 2019. “The Flapper and the Chaperone: Mexican American Teenagers/i
      ];

      citations.forEach((citation) => {
        expect(screen.getByText(citation)).toBeInTheDocument();
      });
    });

    it('renders the Navbar with the Home link', () => {
      expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    });

    it('renders the Navbar with the Blogs link', () => {
      expect(screen.getByRole('link', { name: /blogs/i })).toBeInTheDocument();
    });
});
