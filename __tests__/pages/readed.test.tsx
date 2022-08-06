import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import Readed from '../../pages/readed'
describe('readed books', () => {
    it('Should load books', () => {
        const { getByTestId } = render(
            <Readed />
        );

        expect(getByTestId('title')).toBeInTheDocument()
    })
})