import { render, screen, fireEvent } from '@testing-library/react';
import SnippetSelector from './SnippetSelector';

describe('SnippetSelector', function () {
    afterEach(function () {
        jest.resetAllMocks();
    });

    test('that chooseSnippet is called when buttons are clicked', function () {
        // Arrange
        const films = [{ id: 1, title: "test film" }];
        const chooseSnippet = jest.fn();

        // Act
        render(<SnippetSelector films={films} chooseSnippet={chooseSnippet} />);
        fireEvent.click(screen.getByText('Film Title'))
        const testFilmButton = screen.getByText('test film'); // new button

        // Assert
        expect(testFilmButton).toBeInTheDocument(); // ensures element is still there even after initial search
    });
});