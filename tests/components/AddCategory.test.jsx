import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

    test('Debe de cambiar el valor del input', () => {
        render(<AddCategory onNewCategory={() => { }} />)
        // screen.debug();
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Tanjiro' } });
        expect(input.value).toBe('Tanjiro');
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Tanjiro';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar onNewCategory con el input vacio', () => { 
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
     });

});