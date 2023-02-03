import React from "react";
import App from "../../App";
import Counter from "../Counter";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";

beforeEach(() => {

});

afterEach(() => {
    cleanup();
});

test('Header renders correctly', () => {
    const component = render(<Counter></Counter>);
    const header = component.getByTestId('counter-header');
    expect(header.textContent).toBe('My Counter');
});


test('Counter render and initally starts with value of 0', () => {
    const { getByTestId } = render(<Counter></Counter>)
    const counter = getByTestId('counter-number')
    expect(counter.textContent).toBe('0');
});

test('Input contains initial increment value of 1', () => {
    const { getByTestId } = render(<Counter></Counter>)
    const inputEl = getByTestId('input')
    expect(inputEl.value).toBe('1');
});

test('Add button render with + sign', () => {
    const { getByTestId } = render(<Counter></Counter>)
    const addButtons = getByTestId('add-button')
    expect(addButtons.textContent).toBe('+');
});

test('Subtract button render with - sign', () => {
    const { getByTestId } = render(<Counter></Counter>)
    const subtractButtons = getByTestId('subtract-button')
    expect(subtractButtons.textContent).toBe('-');
});

test('User can change the value of input', () => {
    const { getByTestId } = render(<Counter></Counter>);
    const inputEl = getByTestId('input');
    expect(inputEl.value).toBe('1');

    fireEvent.change(inputEl, {
        target: {
            value: '7'
        }
    });
    expect(inputEl.value).toBe('7');
});

test('Clicking on +/- buttons increase/decreate value of counter', () => {
    const { getByTestId } = render(<Counter></Counter>);
    const addButtons = getByTestId('add-button');
    const subtractButtons = getByTestId('subtract-button');
    const counter = getByTestId('counter-number');
    fireEvent.click(addButtons);
    expect(counter.textContent).toBe('1');
    fireEvent.click(subtractButtons);
    expect(counter.textContent).toBe('0');
});

test('User can change the value of increment manually', () => {
    const { getByTestId } = render(<Counter></Counter>);
    const inputEl = getByTestId('input');
    const counter = getByTestId('counter-number');

    expect(counter.textContent).toBe('0');
    fireEvent.change(inputEl, {
        target: {
            value: '10'
        }
    });
    expect(inputEl.value).toBe('10');

    fireEvent.change(inputEl, {
        target: {
            value: '0'
        }
    });
    expect(inputEl.value).toBe('0');
});

test('Counter color changes to red if its over -100 and green if its over 100', () => {
    const { getByTestId } = render(<Counter></Counter>);
    const counter = getByTestId('counter-number');
    const inputEl = getByTestId('input');
    const addButtons = getByTestId('add-button');
    const subtractButtons = getByTestId('subtract-button');

    fireEvent.change(inputEl, {
        target: {
            value: '60'
        }
    });

    fireEvent.click(addButtons);
    fireEvent.click(addButtons);
    expect(counter.className).toBe('green');

    fireEvent.click(subtractButtons);
    fireEvent.click(subtractButtons);
    fireEvent.click(subtractButtons);
    fireEvent.click(subtractButtons);
    expect(counter.className).toBe('red');


})

