declare global {
  interface Window {
    gtag: (command: string, eventName: string, eventParams?: Record<string, any>) => void;
    dataLayer: any[];
  }
}

export const trackEvent = (eventName: string, eventParams: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

export const trackPageView = (pageTitle: string, pagePath: string) => {
  trackEvent('page_view', {
    page_title: pageTitle,
    page_path: pagePath,
  });
};

export const trackBuyNowClick = (productId: string, productName: string, price: number) => {
  trackEvent('buy_now_click', {
    product_id: productId,
    product_name: productName,
    price,
  });
};

export const trackAddToCart = (productId: string, productName: string, quantity: number, price: number) => {
  trackEvent('add_to_cart', {
    product_id: productId,
    product_name: productName,
    quantity,
    price,
  });
};
