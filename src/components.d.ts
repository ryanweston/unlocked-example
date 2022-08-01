declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UButton: typeof import('@unlocked/base')['UButton']
    UDropdown: typeof import('@unlocked/base')['UDropdown']
    UDropdownItem: typeof import('@unlocked/base')['UDropdownItem']
    UMenu: typeof import('@unlocked/base')['UMenu']
    UMenuItem: typeof import('@unlocked/base')['UMenuItem']
    UTooltip: typeof import('@unlocked/base')['UTooltip']
    ULink: typeof import('@unlocked/base')['ULink']
    UIcon: typeof import('@unlocked/base')['UIcon']
    UHeadline: typeof import('@unlocked/base')['UHeadline']
    UTitle: typeof import('@unlocked/base')['UTitle']
    USubtitle: typeof import('@unlocked/base')['Subtitle']
    UBody: typeof import('@unlocked/base')['UBody']
    UFooter: typeof import('@unlocked/base')['UFooter']
  }
}

export {}
