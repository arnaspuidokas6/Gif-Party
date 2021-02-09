import { render, screen } from "@testing-library/react";
import { CardsList } from ".";
describe('Cards List', () => {
    it('should show no gifs', () => {
        const { container } = render(<CardsList />);

        expect(screen.getByTestId('no-gifs')).toBeVisible();
        expect(container).toMatchSnapshot();
    });
});
