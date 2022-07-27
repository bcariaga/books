import { cleanup, render } from '@testing-library/react';
import Dashboard from '../../pages/dashboard'
describe('Dashboard', () => {
    it('should render dashboard', () => {
        const { getByTestId } = render(<Dashboard />)

        expect(getByTestId("readed").textContent).toBe("Leídos")
        expect(getByTestId("reading").textContent).toBe("Leyendo")
        expect(getByTestId("mustRead").textContent).toBe("Quiero Leer")
    })
})