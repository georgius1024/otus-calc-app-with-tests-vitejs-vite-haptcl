import { describe, it, expect, beforeAll, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import component from './Button.vue';

describe('Button', () => {
  const buildWrapper = (char) => {
    const propsData = {
      char,
    };
    return mount(component, {
      propsData,
    });
  };
  it('mounts without error', () => {
    const wrapper = buildWrapper('*');
    expect(wrapper.exists).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('emits when button clicked', async () => {
    const wrapper = buildWrapper('*');
    await wrapper.find('[data-testid="btn-*"]').trigger('click');
    expect(wrapper.emitted().click).toHaveLength(1);
  });
});
