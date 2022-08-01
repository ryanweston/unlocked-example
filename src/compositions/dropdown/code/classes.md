```javascript
dropdown: {
  wrapper: 'relative inline-block text-left',
  transition: {
    enterActiveClass: 'transition ease-out duration-100',
    enterFromClass: 'transform opacity-0 scale-95',
    enterToClass: 'transform opacity-100 scale-100',
    leaveActiveClass: 'transition ease-in duration-75',
    leaveFromClass: 'transform opacity-100 scale-100',
    leaveToClass: 'transform opacity-0 scale-95',
  },
  menu: `origin-top-right absolute right-0 border border-interfaceContrast mt-2 w-56 rounded-md shadow-lg bg-interfaceOne ring-1 ring-focusOne ring-opacity-5 focus:outline-none py-2`,
  dropdownItem: `block px-4 py-2 text-sm flex flex-row items-center text-textOne hover:bg-interfaceContrast}`,
},
```
