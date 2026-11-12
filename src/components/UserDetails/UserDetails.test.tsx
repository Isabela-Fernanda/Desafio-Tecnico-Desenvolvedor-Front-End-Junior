import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import UserDetails from './UserDetails'
import type { User } from '../../types/user'

const mockUser: User = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'leanne@example.com',
  address: {
    city: 'Gwenborough',
  },
  phone: '1-770-736-8031',
  company: {
    name: 'Romaguera-Crona',
  },
}

describe('UserDetails', () => {
  it('should display all user details', () => {
    render(<UserDetails user={mockUser} onClose={() => {}} />)

    expect(screen.getByText('Leanne Graham')).toBeInTheDocument()
    expect(screen.getByText('leanne@example.com')).toBeInTheDocument()
    expect(screen.getByText('1-770-736-8031')).toBeInTheDocument()
    expect(screen.getByText('Romaguera-Crona')).toBeInTheDocument()
    expect(screen.getByText('Gwenborough')).toBeInTheDocument()
  })

  it('should call onClose when the close button is clicked', async () => {
    const user = userEvent.setup()
    const handleClose = vi.fn()

    render(<UserDetails user={mockUser} onClose={handleClose} />)

    await user.click(
      screen.getByRole('button', { name: /fechar/i })
    )

    expect(handleClose).toHaveBeenCalledOnce()
  })

  it('should call onClose when Escape is pressed', () => {
    const handleClose = vi.fn()

    render(<UserDetails user={mockUser} onClose={handleClose} />)

    fireEvent.keyDown(window, { key: 'Escape' })

    expect(handleClose).toHaveBeenCalledOnce()
  })
})