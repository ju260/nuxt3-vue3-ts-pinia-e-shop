import { useProductPrice } from '@/composables/useProductPrice.ts';
import productSales from '@/composables/__fixtures__/product-sales';
import productNoSales from '@/composables/__fixtures__/product-no-sales';

describe('useProductPrice', () => {
  it('should return the sale price', () => {
    const result = useProductPrice(productSales);

    expect(result.currentPriceFormatted.value).toBe('100,00 €');
    expect(result.isProductSales.value).toBe(true);
    expect(result.percentage.value).toBe(85);
    expect(result.oldPriceFormatted.value).toBe('699,00 €');
    expect(result.currentPrice.value).toBe(100);
    
  });

  it('calculates the base price', () => {
    const result = useProductPrice(productNoSales);

    expect(result.currentPriceFormatted.value).toBe('699,00 €');
    expect(result.isProductSales.value).toBe(false);
    expect(result.percentage.value).toBe(null);
    expect(result.oldPriceFormatted.value).toBe('699,00 €');
    expect(result.currentPrice.value).toBe(699);
  });
});
