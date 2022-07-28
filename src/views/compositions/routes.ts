import ItemPage from './item/index.vue'
import compositions from '@/compositions'

// Generate routes for all available compositions
export const compositionRoutes = () => {
  const routes: Record<string, any>[] = []
  compositions.forEach((section) => {
    Object.keys(section.items).forEach((key) => {
      const item = section.items[parseInt(key)]
      if (item.available && item.route) {
        routes.push({
          path: `/compositions/${item.route.path}`,
          component: ItemPage,
          meta: {
            ...item.route,
          },
        })
      }
    })
  })
  return routes
}
