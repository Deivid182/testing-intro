import {render, RenderOptions} from '@testing-library/react'
import AppProviders from './providers/app-providers'
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AppProviders, ...options})


// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'
export {customRender as render}