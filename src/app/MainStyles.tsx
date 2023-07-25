import styled from "styled-components";
import { FontSizes } from "styles/typography";

export const ViewOptionDiv = styled.div`
	display: grid;
	grid-template-areas: "Icon ViewName RoleTags";
	grid-template-columns: 30px 1fr 1fr;
	grid-template-rows: 1fr;
	place-items: center stretch;

	border-bottom: 1px solid ${({ theme }) => theme.borderSecondary};
	padding: 10px 0;

	&:hover {
		background-color: ${({ theme }) => theme.borderSecondary + 50};
		background-image: linear-gradient(
			to bottom,
			${({ theme }) => theme.bgGradientDark},
			${({ theme }) => theme.bgGradientLight}
		);
		cursor: pointer;
	}
`;

export const HeaderTooklitGrid = styled.div`
	display: grid;
	grid-template-areas: "Profile"; // "Notifications Profile";
	grid-template-columns: auto; // 46px auto;
	grid-template-rows: 1fr;
	place-items: center stretch;
`;

export const HeaderProfile = styled.span`
	grid-area: Profile;
	display: grid;
	grid-template-areas: "TenantProfileName ProfileIcon";
	grid-template-columns: 1fr auto;
	grid-template-rows: 1fr;
	place-items: center stretch;
	font-size: ${FontSizes.standardMedium};
	grid-gap: 10px;
	padding: 0px 10px;

	&:hover {
		background-color: ${({ theme }) => theme.fgGradientLight};
		background-image: linear-gradient(
			to bottom,
			${({ theme }) => theme.fgGradientDark},
			${({ theme }) => theme.fgGradientExtraLight}
		);
		cursor: pointer;
	}
`;

export const HeaderTenantProfileName = styled.span`
	grid-area: TenantProfileName;
	display: grid;
	grid-template-areas:
		"ProfileName"
		"TenantName";
	grid-template-columns: 1fr;
	grid-template-rows: auto auto;
	place-items: center end;
	font-size: ${FontSizes.standardMedium};
	color: white;
	max-width: 200px;
`;

export const LogoWrapper = styled.div`
	float: left;
	padding-bottom: 0.3rem;
	cursor: pointer;
	width: 350px;
	padding-left: 20px;
	display: flex;
	align-items: center;
`;

export const HeaderItemsWrapper = styled.div`
	width: 57.5vw;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	font-size: 16px;
	font-weight: 600;
`;

export const HeaderItem = styled.a`
	color: ${({ theme }) => theme.bgPrimary};

	&:hover {
		color: ${({ theme }) => theme.bgPrimary};
		cursor: pointer;
	}
`;

export const SettingsIconWrapper = styled.div`
	width: 40px;
	height: 40px;
	text-align: center;
	margin: 5px 20px 0px 0px;
`;
