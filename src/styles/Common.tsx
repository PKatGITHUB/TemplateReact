import styled from "styled-components";

export const EllipsisWrapper = styled.div`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 100%;
`;

export const IntelligeniLoadingIconGrid = styled.div`
	display: grid;
	grid-template-areas:
		"Icon"
		"Text";
	grid-template-columns: 1fr;
	grid-template-rows: auto auto;
	place-items: center center;
`;
