import React, { ReactNode } from "react";
import { getAxiosTokenisedInstance } from "utils/axiosTokenised";
import { TGlobalThemeObject } from "typings/misc";

export const asyncAxiosApiCallWrapper = async (
	endpoint: string,
	triggerTitle: ReactNode,
	triggerDescription: ReactNode,
	successTitle: ReactNode,
	successDescription: ReactNode,
	errorTitle: ReactNode,
	errorDescription: ReactNode,
	notificationkey: string,
	theme: TGlobalThemeObject,
	requestType: "get" | "put" | "post" | "delete" | "patch",
	body?: any
) => {
	const axiosTokenised = await getAxiosTokenisedInstance();
	try {
		// notification.open({
		// 	key: notificationkey,
		// 	message: triggerTitle,
		// 	description: (
		// 		<>
		// 			<Spin />
		// 			<p
		// 				style={{
		// 					marginLeft: "15px",
		// 					display: "inline-block",
		// 					width: "200px",
		// 					verticalAlign: "middle",
		// 				}}
		// 			>
		// 				{triggerDescription}
		// 			</p>
		// 		</>
		// 	),
		// 	duration: 0,
		// });
		const response =
			requestType === "get"
				? await axiosTokenised.get(endpoint, body)
				: requestType === "put"
				? await axiosTokenised.put(endpoint, body)
				: requestType === "post"
				? await axiosTokenised.post(endpoint, body)
				: requestType === "patch"
				? await axiosTokenised.patch(endpoint, body)
				: await axiosTokenised.delete(endpoint, { data: body });
		if (response.data && response.data.authorizationError) {
			// notification.open({
			// 	key: notificationkey,
			// 	message: errorTitle,
			// 	description: (
			// 		<>
			// 			<Progress
			// 				type="circle"
			// 				width={30}
			// 				percent={100}
			// 				status="exception"
			// 				strokeColor={theme.red}
			// 			/>
			// 			<p
			// 				style={{
			// 					marginLeft: "15px",
			// 					display: "inline-block",
			// 					width: "200px",
			// 					verticalAlign: "middle",
			// 				}}
			// 			>
			// 				{errorDescription}
			// 			</p>
			// 		</>
			// 	),
			// 	duration: 3,
			// });
		} else {
			// notification.open({
			// 	key: notificationkey,
			// 	message: successTitle,
			// 	description: (
			// 		<>
			// 			<Progress
			// 				style={{
			// 					display: "inline-block",
			// 					alignItems: "center",
			// 				}}
			// 				type="circle"
			// 				percent={100}
			// 				width={30}
			// 				status="success"
			// 				strokeColor={theme.green}
			// 			/>
			// 			<p
			// 				style={{
			// 					marginLeft: "15px",
			// 					display: "inline-block",
			// 					width: "200px",
			// 					verticalAlign: "middle",
			// 				}}
			// 			>
			// 				{successDescription}
			// 			</p>
			// 		</>
			// 	),
			// 	duration: 3,
			// });
		}
		return response;
	} catch (err) {
		// notification.open({
		// 	key: notificationkey,
		// 	message: errorTitle,
		// 	description: (
		// 		<>
		// 			<Progress
		// 				type="circle"
		// 				width={30}
		// 				percent={100}
		// 				status="exception"
		// 				strokeColor={theme.red}
		// 			/>
		// 			<p
		// 				style={{
		// 					marginLeft: "15px",
		// 					display: "inline-block",
		// 					width: "200px",
		// 					verticalAlign: "middle",
		// 				}}
		// 			>
		// 				{errorDescription}
		// 			</p>
		// 		</>
		// 	),
		// 	duration: 3,
		// });
		return { error: err, isError: true } as any;
	}
};

export const funtionCallWithNotification = async (
	triggerTitle: ReactNode,
	triggerDescription: ReactNode,
	successTitle: ReactNode,
	successDescription: ReactNode,
	errorTitle: ReactNode,
	errorDescription: ReactNode,
	notificationkey: string,
	theme: TGlobalThemeObject,
	functionToCall: Function,
	functionParam?: object
) => {
	try {
		// notification.open({
		// 	key: notificationkey,
		// 	message: triggerTitle,
		// 	description: (
		// 		<>
		// 			<Spin />
		// 			<p
		// 				style={{
		// 					marginLeft: "15px",
		// 					display: "inline-block",
		// 					width: "200px",
		// 					verticalAlign: "middle",
		// 				}}
		// 			>
		// 				{triggerDescription}
		// 			</p>
		// 		</>
		// 	),
		// });
		const response = await functionToCall(functionParam);
		// notification.open({
		// 	key: notificationkey,
		// 	message: successTitle,
		// 	description: (
		// 		<>
		// 			<Progress
		// 				style={{
		// 					display: "inline-block",
		// 					alignItems: "center",
		// 				}}
		// 				type="circle"
		// 				percent={100}
		// 				width={30}
		// 				status="success"
		// 				strokeColor={theme.green}
		// 			/>
		// 			<p
		// 				style={{
		// 					marginLeft: "15px",
		// 					display: "inline-block",
		// 					width: "200px",
		// 					verticalAlign: "middle",
		// 				}}
		// 			>
		// 				{successDescription}
		// 			</p>
		// 		</>
		// 	),
		// 	duration: 3,
		// });
		return response;
	} catch (err) {
		// notification.open({
		// 	key: notificationkey,
		// 	message: errorTitle,
		// 	description: (
		// 		<>
		// 			<Progress
		// 				type="circle"
		// 				width={30}
		// 				percent={100}
		// 				status="exception"
		// 				strokeColor={theme.red}
		// 			/>
		// 			<p
		// 				style={{
		// 					marginLeft: "15px",
		// 					display: "inline-block",
		// 					width: "200px",
		// 					verticalAlign: "middle",
		// 				}}
		// 			>
		// 				{errorDescription}
		// 			</p>
		// 		</>
		// 	),
		// 	duration: 3,
		// });
		return err;
	}
};
