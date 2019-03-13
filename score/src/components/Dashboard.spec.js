import React from 'react';
import Dashboard from './Dashboard';
import Display from './Display';
import { render, fireEvent} from 'react-testing-library';
import 'jest-dom/extend-expect';

describe("The Dashboard", () => {
    it("renders without crashing", () => {
        render(<Dashboard />);
    });

    it("ball count add one when the button clicked", () => {
        const dashboard = render(<Dashboard />);
        const display = render(<Display />);
        const ball = dashboard.getByTestId(/ball/i)

        fireEvent.click(ball);

        const ballCount = display.getByTestId(/ballCount/i);
        expect(ballCount).toHaveTextContent('1');
    });

    it("strike count add one when the button clicked", ()=>{
        const dashboard = render(<Dashboard />);
        const display = render(<Display />);
        const strike = dashboard.getByTestId(/strike/i)

        fireEvent.click(strike);

        const strikeCount = display.getByTestId(/strikecount/i);
        expect(strikeCount).toHaveTextContent("1")
    });

    it("balls and strikes reset to 0 when a hit is recorded", () =>{
        const dashboard = render(<Dashboard />);
        const display = render(<Display />);
        const hit = dashboard.getByTestId(/hit/i)

        fireEvent.click(hit);

        const ballCount = display.getByTestId(/ballCount/i);
        const strikeCount = display.getByTestId(/strikecount/i);
        expect(ballCount).toHaveTextContent("0");
        expect(strikeCount).toHaveTextContent("0");
    });
})

