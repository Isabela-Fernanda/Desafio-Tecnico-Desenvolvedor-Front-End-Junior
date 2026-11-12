import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

import SearchBar from './SearchBar'

describe('SearchBar', () => {
  it('should display the value received through props', () => {
    render(<SearchBar value="Leanne" onChange={() => {}} />)

    const searchInput = screen.getByRole('searchbox')

    expect(searchInput).toHaveValue('Leanne')
  })

  it('should call onChange when the input value changes', () => {
    const handleChange = vi.fn()

    render(<SearchBar value="" onChange={handleChange} />)

    const searchInput = screen.getByRole('searchbox')

    fireEvent.change(searchInput, {
      target: { value: 'Leanne' },
    })

    expect(handleChange).toHaveBeenCalledWith('Leanne')
  })
})