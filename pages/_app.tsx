import '../styles/globals.css'
import '@shared/styles/global.scss';

import type { AppProps } from 'next/app'
import { RestaurantsProvider } from '@shared/hooks/useRestaurants';
import { AuthenticationProvider } from '@shared/hooks/useAuthentication';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthenticationProvider>
            <RestaurantsProvider>
                <Component {...pageProps} />
            </RestaurantsProvider>
        </AuthenticationProvider>
    )
}
export default MyApp
