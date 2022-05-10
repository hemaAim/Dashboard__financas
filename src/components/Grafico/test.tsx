import { render, screen } from '@testing-library/react'

import Grafico from '.'

describe('<Grafico />', () => {
  it('should render the heading', () => {
    const { container } = render(<Grafico />)

    expect(screen.getByRole('heading', { name: /Grafico/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
