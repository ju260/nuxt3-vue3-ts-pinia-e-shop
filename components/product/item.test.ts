import Component from './item.vue';
import itemData from '@/components/Product/__fixtures__/item.js';
import ProductItemImage from '@/components/Product/item-image.vue';
import ProductItemPrice from '@/components/Product/itemPrice.vue';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { describe, it, expect, beforeEach } from 'vitest';

describe('ProductItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component, {
      shallow: true,
      global: {
        plugins: [createTestingPinia()],
      },
      propsData: {
        item: itemData,
      },
      stubs: {
        'Product-item-image': ProductItemImage,
        'Product-item-price': ProductItemPrice,
      },
    });
  });

  describe('render', () => {
    it('should render component ', () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  it('adds quantity', async () => {
    await wrapper.find('[data-test="addQty"]').trigger('click');
    expect(wrapper.vm.itemQty).toBe(3);
  });

  it('removes quantity', async () => {
    await wrapper.find('[data-test="removeQty"]').trigger('click');
    expect(wrapper.vm.itemQty).toBe(1);
  });

  it('deletes an item', async () => {
    const spyRemoveItem = vi.spyOn(wrapper.vm, 'removeItem');
    await wrapper.find('[data-test="delete"]').trigger('click');
    expect(spyRemoveItem).toHaveBeenCalledWith('166174');
  });
});
