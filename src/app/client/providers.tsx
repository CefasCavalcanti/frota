'use client'
import { Provider } from 'react-redux'
import { store } from './store'
import { SnackbarProvider } from 'notistack'
export const Providers = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      {children}
    </SnackbarProvider>
  </Provider>
)
