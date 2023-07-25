import React from "react";

export type TErrorBoundaryProps = {
	children?: any;
};

export type ErrorInfo = {
	componentStack: string;
};

export type TErrorBoundaryState = {
	hasError: boolean;
	error?: Error;
	info?: ErrorInfo;
};

class ErrorBoundary extends React.Component<
	TErrorBoundaryProps,
	TErrorBoundaryState
> {
	constructor(props: TErrorBoundaryProps) {
		super(props);
		this.state = {
			hasError: false,
		};
	}
	static getDerivedStateFromError = (_error: string) => {
		return {
			hasError: true,
		};
	};

	componentDidCatch = (error: Error, info: ErrorInfo) => {
		this.setState({ error, info });
	};
	render() {
		if (this.state.hasError) {
			return (
				<React.Fragment>
					<div
						style={{
							backgroundColor: "#FFDAB9",
							height: "100%",
							width: "100%",
						}}
					>
						<h3
							style={{
								fontSize: "12px",
								color: "#000",
								padding: "10px 20px",
							}}
						>
							Error!
						</h3>
					</div>
				</React.Fragment>
			);
		}
		return this.props.children;
	}
}

export { ErrorBoundary };
