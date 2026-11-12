import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import UserCard from './UserCard'
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

describe('UserCard', () => {
    it('should display the user name and email', () => {
        render(<UserCard user={mockUser} onClick={() => { }} />)

        expect(screen.getByText('Leanne Graham')).toBeInTheDocument()
        expect(screen.getByText('leanne@example.com')).toBeInTheDocument()
    })

    it('should call onClick when clicked', async () => {
        const user = userEvent.setup()
        const handleClick = vi.fn()

        render(<UserCard user={mockUser} onClick={handleClick} />)

        await user.click(screen.getByRole('button'))

        expect(handleClick).toHaveBeenCalledOnce()
    })
})