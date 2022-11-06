import '../styles/globals.css'
// import "tailwindcss/tailwind.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache 
} from '@apollo/client'

let client = new ApolloClient({
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
