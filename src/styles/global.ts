import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
		:root {
			--blue: #5429cc;
			--background: #f0f2f5;
			--green: ##33CC95;
			--red: #E62E4D;
			
			--shape: #FFFFFF;
			--text-title: #363F5F;
			--text-body: #969CB3;
			--blue-light: #6933ff;
		}

		* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
		}

		//font-size: 16px (Desktop)<
		html {
				@media (max-width: 1080px){
						font-size: 93.75px; //mesma coisa q 15px (93.75 * 16)
				}

				@media (max-width: 720px){
						font-size: 87.5px; //mesma coisa que 14px;
				}
		}

		body {
				background: var(--background);
				-webkit-font-smoothing: antialiased;
		}

		button {
			cursor: pointer;
		}

		[disabled] {
			opacity: 0.6px;
			cursor: not-allowed;
		}
`;