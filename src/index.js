import  React  from  "react";
import * as ReactDOMClient from 'react-dom/client';
import { ThemeProvider } from "./themeContext";
import  App  from  "./App";

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider>
		<App />
	</ThemeProvider>
);