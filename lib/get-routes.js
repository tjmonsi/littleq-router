const getRoutes = (el, route = '') => {
  route = el.route + route;
  return el.parentNode && el.parentNode.tagName.toLowerCase() === 'littleq-route' ? getRoutes(el.parentNode, route) : route;
};

export default getRoutes;
