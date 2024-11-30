import { describe, it, expect, beforeAll, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import component from './Calc.vue';

describe('Calculator', () => {
  const buildWrapper = () => {
    return mount(component);
  };
  it('mounts without error', () => {
    const wrapper = buildWrapper();
    expect(wrapper.exists).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('[data-testid="display"]').text()).toBe('0');
  });

  it('all digit buttons works', async () => {
    const wrapper = buildWrapper();
    await wrapper.find('[data-testid="btn-1"]').trigger('click');
    await wrapper.find('[data-testid="btn-2"]').trigger('click');
    await wrapper.find('[data-testid="btn-3"]').trigger('click');
    await wrapper.find('[data-testid="btn-4"]').trigger('click');
    await wrapper.find('[data-testid="btn-5"]').trigger('click');
    await wrapper.find('[data-testid="btn-6"]').trigger('click');
    await wrapper.find('[data-testid="btn-7"]').trigger('click');
    await wrapper.find('[data-testid="btn-8"]').trigger('click');
    await wrapper.find('[data-testid="btn-9"]').trigger('click');
    await wrapper.find('[data-testid="btn-0"]').trigger('click');
    expect(wrapper.find('[data-testid="display"]').text()).toBe('1234567890');
  });

  it('can add two numbers', async () => {
    const wrapper = buildWrapper();
    await wrapper.find('[data-testid="btn-2"]').trigger('click');
    await wrapper.find('[data-testid="btn-+"]').trigger('click');
    await wrapper.find('[data-testid="btn-2"]').trigger('click');
    await wrapper.find('[data-testid="btn-="]').trigger('click');
    expect(wrapper.find('[data-testid="display"]').text()).toBe('4');
  });

  it('can multiply two numbers', async () => {
    const wrapper = buildWrapper();
    await wrapper.find('[data-testid="btn-2"]').trigger('click');
    await wrapper.find('[data-testid="btn-*"]').trigger('click');
    await wrapper.find('[data-testid="btn-2"]').trigger('click');
    await wrapper.find('[data-testid="btn-="]').trigger('click');
    expect(wrapper.find('[data-testid="display"]').text()).toBe('4');
  });

  it('can divide two numbers', async () => {
    const wrapper = buildWrapper();
    await wrapper.find('[data-testid="btn-2"]').trigger('click');
    await wrapper.find('[data-testid="btn-/"]').trigger('click');
    await wrapper.find('[data-testid="btn-2"]').trigger('click');
    await wrapper.find('[data-testid="btn-="]').trigger('click');
    expect(wrapper.find('[data-testid="display"]').text()).toBe('1');
  });

  it('can subtract two numbers', async () => {
    const wrapper = buildWrapper();
    await wrapper.find('[data-testid="btn-2"]').trigger('click');
    await wrapper.find('[data-testid="btn--"]').trigger('click');
    await wrapper.find('[data-testid="btn-2"]').trigger('click');
    await wrapper.find('[data-testid="btn-="]').trigger('click');
    expect(wrapper.find('[data-testid="display"]').text()).toBe('0');
  });

  it('can clear inut', async () => {
    const wrapper = buildWrapper();
    await wrapper.find('[data-testid="btn-2"]').trigger('click');
    await wrapper.find('[data-testid="btn-C"]').trigger('click');
    expect(wrapper.find('[data-testid="display"]').text()).toBe('0');
  });
});
