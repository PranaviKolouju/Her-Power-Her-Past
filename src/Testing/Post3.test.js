import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogPost3 from '../Posts/Post3/Post3'; 
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';

describe('BlogPost3', () => {
    beforeEach(() => {
        render(
            <Router>
                <BlogPost3 />
            </Router>
        );
    });

    it('renders the title correctly', () => {
        expect(screen.getByRole('heading', { name: /Redefining Her Power as a Housewife/i })).toBeInTheDocument();
    });

    it('renders the description correctly', () => {
        expect(screen.getByText(/She breaks the shakels of traditional roles to influence society and politics./i)).toBeInTheDocument();
    });

    it('displays the author and date', () => {
        expect(screen.getByText(/Written by Pranavi Kolouju on November 24, 2024/i)).toBeInTheDocument();
    });

    it('renders the main content paragraphs', () => {
        const contentParagraphs = [
            /The post World War 2 air in the United States manifested a new era of politics where women stood on the front lines./i,
            /Feminist housewives used their frustrations with domesticity to challenge societal expectations and to fight for greater opportunities for women./i,
            /Housewives used their identities as mothers and homemakers to gain credibility and push their political agendas./i,
            /Both feminist and conservative housewives showed how women could use their roles to influence social and political change, even with different goals./i,
            /And so, both women that approached activism through a feminist and a conservative perspective sought out to define the roles of housewives as women more powerful than what society makes them out to be./i
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
            /Horowitz, Daniel. 2019. “Betty Friedan and the Origins of Feminism in Cold War America./i,
            /Nickerson, Michelle M. 2019. “Politically Desperate Housewives./i
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
