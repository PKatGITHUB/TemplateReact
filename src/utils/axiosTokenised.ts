import axios, { AxiosInstance, AxiosError } from "axios";
// import store from "app/store";

const getAxiosTokenisedInstance = async (): Promise<AxiosInstance> => {
	const instance = axios.create({
		baseURL: `${
			process.env.NODE_ENV === "development"
				? process.env.ENDPOINT
				: window.location.origin + "/dsl"
		}/api`,
	});

	const requestInterceptor = instance.interceptors.request.use(
		async config => {
			config.headers = {
				...config.headers,
				tenantId: localStorage.getItem("current_tenant_id") || "",
				Pragma: "no-cache",
				"Cache-Control": "private,no-cache,no-store",
			};

			return config;
		},
		error => Promise.reject(error)
	);

	instance.interceptors.response.use(
		config => {
			return config;
		},
		(error: AxiosError) => {
			if (error.response?.status === 403) {
				return { data: { authorizationError: true } };
			}
			if (
				error.response?.status === 401 &&
				error.config &&
				// @ts-ignore
				!error.config._retry
			) {
				instance.interceptors.request.eject(requestInterceptor);
			}
			return Promise.reject(error);
		}
	);
	return instance;
};

export { getAxiosTokenisedInstance };
