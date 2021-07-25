import { InjectGlobalStyle } from 'superstyle'
import { Layout } from '../components/Layout'

const App = ({ Component, pageProps }) => {
	return (
		<Layout>
			<InjectGlobalStyle />
			<Component {...pageProps} />
		</Layout>
	)
}

export default App
