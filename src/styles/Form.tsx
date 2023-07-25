import styled from "styled-components";

export const FormHeader = styled.div`
	padding: 10px;
	font-size: 18px;
`;
export const ActivationFormHeader = styled.div`
	border: 1px solid rgb(219, 218, 218);
	padding: 4px 0px 4px 10px;
	color: rgb(110, 100, 100);
	font-weight: normal;
	font-size: 18px;
	margin-left: 500px;
	margin-right: 563px;
	margin-bottom: 25px;
	background: #fbfbfb;
	text-align: center;
`;
export const FormContainer = styled.div`
	padding: 24px;
	background: ${props => props.theme.bgPrimary};
	color: ${props => props.theme.textPrimary};
	border-radius: 2px;
`;
export const ActivationFormContainer = styled.div`
	padding: 24px;
	background: #fbfbfb;
	border: 1px solid #d9d9d9;
	border-radius: 2px;
	margin: 450px;
`;

export const LoadingFormContainer = styled.div`
	text-align: center;
	background: rgba(0, 0, 0, 0);
	margin-bottom: 20px;
	margin-top: 400px;
	padding: 200px 50px 300px;
	margin: 20px 0;
`;

export const GridLayout = styled.div`
	margin: 10px;
	background: ${props => props.theme.bgPrimary};
	color: ${props => props.theme.textPrimary};
	grid-template-areas: "StepsContent StepsAction";
`;
export const PageLayout = styled.div`
	margin: 10px;
	background-color: #ffffff;
`;
export const SearchFormContainer = styled.div`
	border: 1px solid #dcdee1;
	margin: 10px 10px 10px 10px;
	padding: 10px;
	background: ${props => props.theme.bgPrimary};
	color: ${props => props.theme.textPrimary};
`;
export const ErrorMessageContainer = styled.div`
	color: red;
`;
