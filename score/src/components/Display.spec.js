import React from 'react';
import Display from './Display';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe("The Display", () => {
    it("renders without crashing", () => {
        render(<Display />);
    });

    it("display's the ball count", () => {
        const display = render(<Display />);
        const ballCount = display.getByTestId(/ballCount/i);
        expect(ballCount).toHaveTextContent("0");
    })

    it("display's strike count", () => {
        const display = render(<Display />);
        const strike = display.getByTestId(/strikeCount/i);
        expect(strike).toHaveTextContent('0');
    })
})

