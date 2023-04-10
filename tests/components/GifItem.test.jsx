import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Pruebas en Gif Item', () => {

    const title = 'Tanjiro';
    const url = 'https://demon-slayer.com/tanjiro.jpg';

    test('Match con el Snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('mostrar imagen con el url y el alt indicado', () => {
        render(<GifItem title={title} url={url} />);
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de mostrar el titulo en el componente', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
     })
})