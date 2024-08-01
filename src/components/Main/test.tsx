import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderizar o component
    const { container } = render(<Main />)

    // busca o elemento e verificar a existencia
    expect(
      screen.getByRole('heading', { name: /react avancado/i })
    ).toBeInTheDocument()

    // snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // render component
    const { container } = render(<Main />)

    // check color
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
