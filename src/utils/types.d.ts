declare module 'vue3-carousel';

// Type for composition component documentation
export interface IDocumentationPackage {
  name: string
  url: string
}

export interface IDocumentation {
  hasClasses: boolean
  packages: IDocumentationPackage[]
  content: Record<string, string>[]
}
