// src/EmojiResults.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmojiResults from './EmojiResults';
import Clipboard from 'clipboard';
import '@testing-library/jest-dom/extend-expect';

// Dummy data for testing
const emojiData = [
  { symbol: '❤️', title: 'Heart' },
  { symbol: '💔', title: 'Broken Heart' },
  { symbol: '💕', title: 'Two Hearts' },
];

describe('EmojiResults', () => {
  // Mock Clipboard
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should copy emoji to clipboard when clicked', () => {
    render(<EmojiResults emojiData={emojiData} />);

    // Simulate click on emoji
    const emojiButton = screen.getByText('Two Hearts').closest('div');
    fireEvent.click(emojiButton);

    // Check if Clipboard's copy method was called
    expect(Clipboard).toHaveBeenCalledTimes(1);
  });
});
