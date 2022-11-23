import DButton from '..'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('Button', () => {
  test('mount @vue/test-utils', () => {
    const warpper = shallowMount(DButton)
    expect(warpper.text()).toBe('blue')
  })
})
