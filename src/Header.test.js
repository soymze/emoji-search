import React from "react";
import '@testing-library/jest-dom'; 
import { render, screen } from "@testing-library/react";
import Header from './Header';

test('renders header', () => {
    render(<Header />);
    const title = screen.getByText(/Emoji Search/);
    expect(title).toBeInTheDocument();
});