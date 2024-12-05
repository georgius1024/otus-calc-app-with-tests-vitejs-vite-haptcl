import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Calc from './Calc.vue'

describe('Calc.vue', () => {
  let wrapper: ReturnType<typeof mount>

  beforeEach(() => {
    wrapper = mount(Calc)
  })

  // Smoke Test
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true)
  })

  // Snapshot Test
  it('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  // Arithmetic Operations Tests
  const clickButton = async (char: string) => {
    await wrapper.find(`[data-testid="btn-${char}"]`).trigger('click');
  }

  it('performs addition', async () => {
    await clickButton('2')
    await clickButton('+')
    await clickButton('3')
    await clickButton('=')
    expect(wrapper.find('[data-testid="display"]').text()).toBe('5')
  })

  it('performs subtraction', async () => {
    await clickButton('7')
    await clickButton('-')
    await clickButton('4')
    await clickButton('=')
    expect(wrapper.find('[data-testid="display"]').text()).toBe('3')
  })

  it('performs multiplication', async () => {
    await clickButton('3')
    await clickButton('*')
    await clickButton('5')
    await clickButton('=')
    expect(wrapper.find('[data-testid="display"]').text()).toBe('15')
  })

  it('performs division', async () => {
    await clickButton('8')
    await clickButton('/')
    await clickButton('2')
    await clickButton('=')
    expect(wrapper.find('[data-testid="display"]').text()).toBe('4')
  })

  it('clears the display', async () => {
    await clickButton('9')
    await clickButton('+')
    await clickButton('1')
    await clickButton('C')
    expect(wrapper.find('[data-testid="display"]').text()).toBe('0')
  })

  it('displays correctly after multiple operations', async () => {
    await clickButton('C')
    await clickButton('5')
    await clickButton('+')
    await clickButton('5')
    await clickButton('=')
    await clickButton('*')
    await clickButton('2')
    await clickButton('=')
    expect(wrapper.find('[data-testid="display"]').text()).toBe('20')
  })
})