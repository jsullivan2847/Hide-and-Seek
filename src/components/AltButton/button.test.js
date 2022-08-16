import React from "react";
import ReactDOM from "react-dom";
import {isTSAnyKeyWord} from '@babel/types'
import AltButton from "./AltButton";
import {render} from '@testing-library/react'
import 'jest-dom/extend-expect'

it('renders without any crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<AltButton/>, div) 
});

it('renders button correctly', () => {
    const {getByTestId} = render(<AltButton label={"click me please"}/>)
    expect(getByTestId('button')).toHaveTextContent("click me please")
})