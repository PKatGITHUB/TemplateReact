import Axios from "axios";
import { getAxiosTokenisedInstance } from "utils/axiosTokenised";

const hasElementType = typeof Element !== "undefined";
const hasMap = typeof Map === "function";
const hasSet = typeof Set === "function";
const hasArrayBuffer =
	typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;

const equal = (a: any, b: any) => {
	if (a === b) return true;

	if (a && b && typeof a == "object" && typeof b == "object") {
		if (a.constructor !== b.constructor) return false;

		let length: any, i: any;
		if (Array.isArray(a)) {
			length = a.length;
			if (length != (b as Array<any>).length) return false;
			for (i = length; i-- !== 0; ) if (!equal(a[i], b[i])) return false;
			return true;
		}
		let it: any;
		if (hasMap && a instanceof Map && b instanceof Map) {
			if (a.size !== b.size) return false;
			it = a.entries();
			while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
			it = a.entries();
			while (!(i = it.next()).done)
				if (!equal(i.value[1], b.get(i.value[0]))) return false;
			return true;
		}

		if (hasSet && a instanceof Set && b instanceof Set) {
			if (a.size !== b.size) return false;
			it = a.entries();
			while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
			return true;
		}

		if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
			// @ts-ignore
			length = a.length;
			// @ts-ignore
			if (length != b.length) return false;
			// @ts-ignore
			for (i = length; i-- !== 0; ) if (a[i] !== b[i]) return false;
			return true;
		}

		if (a.constructor === RegExp)
			// @ts-ignore
			return a.source === b.source && a.flags === b.flags;
		if (a.valueOf !== Object.prototype.valueOf)
			return a.valueOf() === b.valueOf();
		if (a.toString !== Object.prototype.toString)
			return a.toString() === b.toString();

		const keys = Object.keys(a);
		length = keys.length;
		if (length !== Object.keys(b).length) return false;

		for (i = length; i-- !== 0; )
			if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
		if (hasElementType && a instanceof Element) return false;

		for (i = length; i-- !== 0; ) {
			if (
				(keys[i] === "_owner" ||
					keys[i] === "__v" ||
					keys[i] === "__o") &&
				// @ts-ignore
				a.$$typeof
			) {
				continue;
			}

			if (!equal(a[keys[i]], b[keys[i]])) return false;
		}
		return true;
	}

	return a !== a && b !== b;
};

export const isEqual = <A extends unknown = any, B extends unknown = any>(
	a: A,
	b: B
) => {
	try {
		return equal(a, b);
	} catch (error) {
		if (((error as any).message || "").match(/stack|recursion/i)) {
			// eslint-disable-next-line no-console
			console.warn("react-fast-compare cannot handle circular refs");
			return false;
		}
		throw error;
	}
};

export const loadProfileImageBlob = async () => {
	const axiosTokenised = await getAxiosTokenisedInstance();
	try {
		const imageSignedURL = (await axiosTokenised.get("user/profile")).data;
		const imageBlob = (
			await Axios.get(imageSignedURL.url, {
				responseType: "blob",
				headers: {
					"Access-Control-Allow-Origin": "*",
					"x-ms-blob-type": "BlockBlob",
				},
			})
		).data;
		const imageAsUrl = URL.createObjectURL(imageBlob);
		return imageAsUrl;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error("error while getting image URL:", { error });
		return "";
	}
};

export const getProfileImageBlobOfChatroomMembers = async (user_ids: any) => {
	const axiosTokenised = await getAxiosTokenisedInstance();
	try {
		const userIdImageUrlMap = (
			await axiosTokenised.post("user/profile/get/many", {
				user_ids: user_ids,
			})
		).data;
		return userIdImageUrlMap;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error("error while getting image URL list:", { error });
		return "";
	}
};

export const loadMemberImageBlob = async (image_url: string) => {
	const url = image_url;
	try {
		const imageBlob = (
			await Axios({
				url,
				method: "GET",
				responseType: "blob",
				headers: {
					"Access-Control-Allow-Origin": "*",
				},
			})
		).data;
		const imageAsUrl = URL.createObjectURL(imageBlob);
		return imageAsUrl;
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error("error while getting image URL:", { error });
		return "";
	}
};

export const getServiceIdToNameMap = async () => {
	const serviceIdToNameMap: { [serviceId: string]: string } = {};
	const axiosTokenisedInstance = await getAxiosTokenisedInstance();
	const getServiceIdAndNameIgqlQuery = {
		query: "select c.id, c.name from (ci as c) where c.citype = 'service' ",
	};
	const serviceIdAndNameDataApiResponse = (
		await axiosTokenisedInstance.post(
			"igql/executeIgql",
			getServiceIdAndNameIgqlQuery
		)
	).data;

	if (serviceIdAndNameDataApiResponse && serviceIdAndNameDataApiResponse.data)
		serviceIdAndNameDataApiResponse.data.forEach(
			(ciData: [string, string]) => {
				serviceIdToNameMap[ciData[0]] = ciData[1];
			}
		);
	return serviceIdToNameMap;
};


export const parseIfJson = (str: string) => {
	try {
		return JSON.parse(str);
	} catch (e) {
		return str;
	}
};

export const stringify = (data: object) => {
	try {
		return JSON.stringify(data, null, 2);
	} catch (e) {
		return String(data);
	}
};

export const chatgptSupportedTenantIds = [
	"61eefb67343b3a001dddad9a", // intelligeni
	"62de96bca3de1b001d4320e1", // cloudsupport
];
