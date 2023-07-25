import { compose, Middleware, Dispatch, Action, Store } from "@reduxjs/toolkit";

const createDynamicMiddlewares = () => {
	let allDynamicMiddlewares: Array<Middleware> = [];
	let allApplyedDynamicMiddlewares: Array<Middleware> = [];
	let store: Store;

	const enhancer = (_store: Store) => {
		store = _store;
		return (next: Dispatch) => (action: Action) => {
			// @ts-ignore
			return compose(...allApplyedDynamicMiddlewares)(next)(action);
		};
	};

	const addMiddleware = (...middlewares: Middleware[]) => {
		const res = middlewares.map(middleware => middleware(store));
		// @ts-ignore
		allApplyedDynamicMiddlewares.push(...res);
		allDynamicMiddlewares.push(...middlewares);
	};

	const removeMiddleware = (middleware: Middleware) => {
		const index = allDynamicMiddlewares.findIndex(d => d === middleware);

		if (index === -1) {
			// eslint-disable-next-line no-console
			console.error("Middleware does not exist!", middleware);

			return;
		}

		allDynamicMiddlewares = allDynamicMiddlewares.filter(
			(_, mdwIndex) => mdwIndex !== index
		);
		allApplyedDynamicMiddlewares = allApplyedDynamicMiddlewares.filter(
			(_, mdwIndex) => mdwIndex !== index
		);
	};

	const resetMiddlewares = () => {
		allApplyedDynamicMiddlewares = [];
		allDynamicMiddlewares = [];
	};

	return {
		enhancer,
		addMiddleware,
		removeMiddleware,
		resetMiddlewares,
	};
};

const dynamicMiddlewaresInstance = createDynamicMiddlewares();

export default dynamicMiddlewaresInstance.enhancer;

export const {
	addMiddleware,
	removeMiddleware,
	resetMiddlewares,
} = dynamicMiddlewaresInstance;

export { createDynamicMiddlewares };
