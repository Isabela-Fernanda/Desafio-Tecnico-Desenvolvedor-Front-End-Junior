import { describe, expect, it, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'

import { useUsers } from './useUsers'
import { getUsers } from '../services/userService'
import type { User } from '../types/user'

vi.mock('../services/userService', () => ({
  getUsers: vi.fn(),
}))

const mockUsers: User[] = [
  {
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
  },
]

describe('useUsers', () => {
  it('should start with loading state', () => {
    vi.mocked(getUsers).mockReturnValue(new Promise(() => {}))

    const { result } = renderHook(() => useUsers())

    expect(result.current.isLoading).toBe(true)
    expect(result.current.users).toEqual([])
    expect(result.current.error).toBeNull()
  })

  it('should load users successfully', async () => {
    vi.mocked(getUsers).mockResolvedValue(mockUsers)

    const { result } = renderHook(() => useUsers())

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.users).toEqual(mockUsers)
    expect(result.current.error).toBeNull()
  })

  it('should handle API errors', async () => {
    vi.mocked(getUsers).mockRejectedValue(
      new Error('Não foi possível carregar os usuários.')
    )

    const { result } = renderHook(() => useUsers())

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.users).toEqual([])
    expect(result.current.error).toBe(
      'Não foi possível carregar os usuários.'
    )
  })
})