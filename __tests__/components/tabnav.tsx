import { render } from '@testing-library/react';
import TabNav from '../../components/tabnav'
describe('Dashboard', () => {
    it('should render tabs', () => {
        const { getByTestId } = render(<TabNav />)
        expect(getByTestId("tabs")).toBeDefined()
    })
})