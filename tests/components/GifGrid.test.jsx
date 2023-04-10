import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'Ford';
    test('Debe de mostrar el loading inicialment', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
            {
                id: 'BCA',
                title: 'Vegetta',
                url: 'https://localhost/vegeta.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);

    });

});

