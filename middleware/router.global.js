export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Middleware executed');
  console.log('Current route:', to.path);

  const validRoutes = ['/','contact-us', 'about-us', 'e-catalog', 'product-list', 'product'];
  const dynamicRoute = to.params.name;
  const pathSegments = to.path.split('/').filter(Boolean);

  if (to.path === '/') {
    // Redirect root level route to /product-list
    return navigateTo('/superstore');
  }
  if (pathSegments.length === 1) {
    // Root level routes
    console.log('Valid root level route');
    return;
  }

  if (pathSegments.length >= 2 && pathSegments[0] === dynamicRoute) {
    const subRoute = pathSegments[1];

    // Check if the subRoute is valid
    if (subRoute === 'product') {
      const productId = pathSegments[2];
      if (!productId) {
        console.log('Invalid product ID');
        return navigateTo('/404');
      }
    } else if (!validRoutes.includes(subRoute)) {
      console.log('Invalid sub-route');
      return navigateTo('/404');
    } else {
      console.log('Valid sub-route');
    }
  } else {
    console.log('Invalid dynamic route');
    return navigateTo('/404');
  }
});
