import Component from './basket.vue';
import products from './__fixtures__/products.js';
import { shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { useBasket } from '@/stores/basket';
import { setActivePinia, createPinia } from 'pinia';

describe('basket', () => {
  let wrapper = null;
  let store = null;

  beforeEach(() => {
    wrapper = shallowMount(Component, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              items: products,
            },
          }),
        ],
      },
    });

    // create a fresh Pinia instance and make it active so it's automatically picked
    // up by any useBasket() call without having to pass it to it:
    // `useBasket(pinia)`
    setActivePinia(createPinia());

    // create an instance of the data store
    store = useBasket();
  });
  describe('render', () => {
    it('should render component ', () => {
      expect(wrapper.element).toMatchSnapshot();
    });
  });

});
