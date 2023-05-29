import {render, screen} from '@testing-library/react'
import Home from '@/pages/index'

describe('Home renders basic components', () => {
    beforeEach(() => {
        render(<Home/>)
    })

    it('renders the header', () => {
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument()
    })

    it('renders main content', () => {
        const mainContent = screen.getByTestId('main-content')
        expect(mainContent).toBeInTheDocument()
    })
})
