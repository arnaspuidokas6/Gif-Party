import React from 'react';
import { render, screen } from '@testing-library/react';
import { ERROR_SEARCH, SearchBar } from '.';
import userEvent from '@testing-library/user-event';

describe('SearchBar', () => {
    it('should render', () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        const { container } = render(<SearchBar setSearchValue={() => {}} />);

        expect(screen.getByTestId('search-input')).toBeVisible();
        expect(container).toMatchSnapshot();
    });

    test('if validation works', () => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        render(<SearchBar setSearchValue={() => {}} />);
        expect(screen.queryByTestId('invalid-value-message')).toBeNull();

        userEvent.type(screen.getByTestId('search-input'), '++++');
        expect(screen.getByTestId('invalid-value-message')).toHaveTextContent(ERROR_SEARCH);
    });
});
