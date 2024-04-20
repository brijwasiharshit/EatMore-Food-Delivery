import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import AppStore from "../../utils/AppStore"
import "@testing-library/jest-dom";

it("Testing triggering of login button to logout", () => {
    render(
        <BrowserRouter>
            <Provider store = {AppStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button",{name : "login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name : "logout"});
    expect(logoutButton).toBeInTheDocument();
})