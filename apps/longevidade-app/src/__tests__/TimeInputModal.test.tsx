/**
 * TimeInputModal Component Tests
 */

import React from 'react'
import { render } from '@testing-library/react-native'
import { TimeInputModal } from '../components/TimeInputModal'

describe('TimeInputModal', () => {
  const defaultProps = {
    visible: true,
    title: 'Test Title',
    initialValue: '08:00',
    onCancel: jest.fn(),
    onSave: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('rendering', () => {
    it('renders without crashing when visible', () => {
      expect(() => render(<TimeInputModal {...defaultProps} />)).not.toThrow()
    })

    it('renders without crashing when not visible', () => {
      expect(() => render(<TimeInputModal {...defaultProps} visible={false} />)).not.toThrow()
    })

    it('renders with different props', () => {
      expect(() => render(
        <TimeInputModal
          visible={true}
          title="Morning Reminder"
          initialValue="07:30"
          onCancel={jest.fn()}
          onSave={jest.fn()}
        />
      )).not.toThrow()
    })
  })

  describe('props', () => {
    it('accepts visible prop', () => {
      expect(() => render(<TimeInputModal {...defaultProps} visible={true} />)).not.toThrow()
      expect(() => render(<TimeInputModal {...defaultProps} visible={false} />)).not.toThrow()
    })

    it('accepts title prop', () => {
      expect(() => render(<TimeInputModal {...defaultProps} title="Custom Title" />)).not.toThrow()
    })

    it('accepts initialValue prop', () => {
      expect(() => render(<TimeInputModal {...defaultProps} initialValue="12:00" />)).not.toThrow()
    })

    it('accepts onCancel prop', () => {
      const onCancel = jest.fn()
      expect(() => render(<TimeInputModal {...defaultProps} onCancel={onCancel} />)).not.toThrow()
    })

    it('accepts onSave prop', () => {
      const onSave = jest.fn()
      expect(() => render(<TimeInputModal {...defaultProps} onSave={onSave} />)).not.toThrow()
    })
  })

  describe('component interface', () => {
    it('has required props', () => {
      // Verify component renders with all required props
      const props = {
        visible: true,
        title: 'Test',
        initialValue: '00:00',
        onCancel: jest.fn(),
        onSave: jest.fn(),
      }

      expect(() => render(<TimeInputModal {...props} />)).not.toThrow()
    })
  })
})
