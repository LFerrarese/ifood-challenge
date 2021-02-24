import { StateContextProvider } from '../contexts/StateContext';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
	return (
		<StateContextProvider>
			<div className="container">
				<Component { ...pageProps } />
			</div>
		</StateContextProvider>
	)
}

export default MyApp;
