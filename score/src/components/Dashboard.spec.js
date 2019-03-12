import React from 'react';
import Dashboard from './Dashboard';
import Display from './Display';
import { render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';

describe("The Dashboard", () => {
    it("renders without crashing", () => {
        render(<Dashboard />);
    });

    it("ball count add one when button clicked", () => {
        const dashboard = render(<Dashboard />);
        const display = render(<Display />);
        const ball = dashboard.getByTestId(/ball/i)

        fireEvent.click(ball);

        const ballCount = display.getByTestId(/ballCount/i);
        expect(ballCount).toHaveTextContent('1');
    })
})

