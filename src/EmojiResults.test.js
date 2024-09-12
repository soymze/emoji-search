import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import EmojiResults from "./EmojiResults";

const emojiData = [
    { title: '100', symbol: '💯' },
    { title: '1234', symbol: '🔢' },
    { title: 'Grinning', symbol: '😀' },
    { title: 'Grimacing', symbol: '😬' },
    { title: 'Grin', symbol: '😁' },
    { title: 'Joy', symbol: '😂' },
    { title: 'Smiley', symbol: '😃' },
    { title: 'Smile', symbol: '😄' },
    { title: 'Sweat Smile', symbol: '😅' },
    { title: 'Laughing', symbol: '😆' },
    { title: 'Innocent', symbol: '😇' },
    { title: 'Wink', symbol: '😉' },
    { title: 'Blush', symbol: '😊' },
    { title: 'Slight Smile', symbol: '🙂' },
    { title: 'Upside Down', symbol: '🙃' },
    { title: 'Relaxed', symbol: '😌' },
    { title: 'Yum', symbol: '😋' },
    { title: 'Relieved', symbol: '😅' },
    { title: 'Heart Eyes', symbol: '😍' },
    { title: 'Kissing Heart', symbol: '😘' },
  ];

  test('renders emoji list', () => {
        const { container } = render(<EmojiResults emojiData={emojiData} />);

        emojiData.forEach(({symbol, title}) => {
            const emojiElement = container.querySelector(`[data-clipboard-text="${symbol}"]`);
        expect(emojiElement).toBeInTheDocument();
        
        
        const titleElements = container.querySelectorAll('.title');
        const titleElement = Array.from(titleElements).find(el => el.textContent === title);
        expect(titleElement).toBeInTheDocument();
    });
  });