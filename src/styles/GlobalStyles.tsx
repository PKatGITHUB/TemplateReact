import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
		body {
			font-size: 11px;
			font-family: Poppins;
		}

		div.ant-menu-inline-collapsed-tooltip a {
			color: ${({ theme }) => theme.textSecondary};
		}

		.ant-menu-root.ant-menu-vertical {
			border-right-width: 0px;
		}

		div.ant-menu-submenu-popup > .ant-menu {
			background-color: ${({ theme }) => theme.bgPrimary};
			box-shadow: 10px 0px 3px -4px rgba(0, 0, 0, 0.12), 
			10px 0px 8px 0 rgba(0, 0, 0, 0.08), 
			10px 0px 10px 8px rgba(0, 0, 0, 0.05);
		}

		div.ant-menu-submenu-popup > .ant-menu > .ant-menu-item {
			margin: 0px;
			color: ${({ theme }) => theme.textSecondary};
			border-bottom: ${({ theme }) => theme.borderSecondary} 1px solid;
			height: 30px;
			line-height: 30px;
			
			&:hover {
				background-color: ${({ theme }) => theme.bgSecondary + 80};
				background-image: linear-gradient(
					to bottom,
					${({ theme }) => theme.bgGradientDark},
					${({ theme }) => theme.bgGradientLight}
					);
				cursor: pointer;
			}
		}

		div.ant-menu-submenu-popup > .ant-menu > .ant-menu-submenu {
			margin: 0px;
			color: ${({ theme }) => theme.textSecondary};
			border-bottom: ${({ theme }) => theme.borderSecondary} 1px solid;
			&:hover {
				background-color: ${({ theme }) => theme.bgSecondary + 80};
				background-image: linear-gradient(
					to bottom,
					${({ theme }) => theme.bgGradientDark},
					${({ theme }) => theme.bgGradientLight}
					);
				cursor: pointer;
			}
		}

		div.ant-menu-submenu-popup > .ant-menu > .ant-menu-submenu > .ant-menu-submenu-title {
			margin: 0px;
			color: ${({ theme }) => theme.textSecondary};
			height: 30px;
			line-height: 30px;
		}

		.ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title {
			&:hover {
				background-color: ${({ theme }) => theme.bgSecondary + 80};
				background-image: linear-gradient(
					to bottom,
					${({ theme }) => theme.bgGradientDark},
					${({ theme }) => theme.bgGradientLight}
					);
				cursor: pointer;
			}
		}

		.ant-menu-vertical > .ant-menu-item{
			&:hover {
				background-color: ${({ theme }) => theme.bgSecondary + 80};
				background-image: linear-gradient(
					to bottom,
					${({ theme }) => theme.bgGradientDark},
					${({ theme }) => theme.bgGradientLight}
					);
				cursor: pointer;
			}
		}

		.ant-dropdown-menu-vertical > .ant-dropdown-menu-item{
			border-bottom: 1px solid ${({ theme }) => theme.borderSecondary};
			border-left: 5px solid ${({ theme }) => theme.textExtraLight};
			&:hover {
				border-left: 5px solid ${({ theme }) => theme.highlightColorPrimary};
				background-color: ${({ theme }) => theme.bgSecondary + 80};
				background-image: linear-gradient(
					to bottom,
					${({ theme }) => theme.bgGradientDark},
					${({ theme }) => theme.bgGradientLight}
					);
				cursor: pointer;
			}
		}

		.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single):not(.ant-picker-cell-range-end) .ant-picker-cell-inner {
			background-color: ${({ theme }) => theme.fgSecondary};
		}

		.ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single):not(.ant-picker-cell-range-start) .ant-picker-cell-inner {
			background-color: ${({ theme }) => theme.fgSecondary};
		}

		.ant-tag-blue {
			color: ${({ theme }) => theme.textInvertPrimary};
			background: ${({ theme }) => theme.primary};
			border-color: ${({ theme }) => theme.primary};
		}

		/* scrollbar-width: none; 
  		-ms-overflow-style: none; 
		::-webkit-scrollbar {
			width: 0px;
			color:
		} */
		::-webkit-scrollbar {
			width: 0px;
		}
		::-webkit-scrollbar:vertical {
			width: 10px;
		}

		::-webkit-scrollbar-thumb:vertical {
			background: ${({ theme }) => theme.primary};
			border-left: 5px transparent solid;
			background-clip: padding-box;
		}
		::-webkit-scrollbar-track:vertical {
			background: ${({ theme }) => theme.borderPrimary};
			margin: 5px;	
			border-left: 5px transparent solid;
			background-clip: padding-box;
		}
		body::-webkit-scrollbar:vertical {
			width: 5px;
		}
		body::-webkit-scrollbar-track:vertical {
			margin: 0px;	
			border-left: none;
			border-left: none;
			background-clip: none;
		}
		body::-webkit-scrollbar-thumb:vertical {
			background: ${({ theme }) => theme.primary};
			border-left: none;
			background-clip: none;
		}
		::-webkit-scrollbar-corner, ::-webkit-resizer {
			background:transparent;
			border-right:8px solid transparent; //optional
			border-bottom:8px solid transparent; //optional
		}
	`;
