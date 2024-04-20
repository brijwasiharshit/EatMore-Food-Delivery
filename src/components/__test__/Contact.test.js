import { render, screen } from '@testing-library/react';
import ContactUs from '../Contact'; 
import "@testing-library/jest-dom";

test("should load contact page", () => {
    render(<ContactUs />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

