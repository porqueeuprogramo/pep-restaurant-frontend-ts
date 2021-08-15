import '../styles/globals.css'
import '@shared/styles/global.scss';

import type { AppProps } from 'next/app'
import { RestaurantsProvider } from '@shared/hooks/useRestaurants';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RestaurantsProvider>
      <Component {...pageProps} />
    </RestaurantsProvider>
  )
}
export default MyApp
