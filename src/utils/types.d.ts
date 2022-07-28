declare module 'vue3-carousel';

// Type for composition component documentation
export interface IDocumentation {
  hasClasses: boolean
  packages: Array<string>
  content: Record<string, string>[]
}
