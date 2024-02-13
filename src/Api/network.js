import axios from "axios";

export function getResource(path, onSuccess, onFail, reqAuth = true) {
	let requestData = {
		method: "get",
		url:  path,
		headers:{
		"accept-account" : "961c06eb-7e25-406c-87d5-d0742e09d96c",
		"accept-company" : "900a776e-a060-422e-a5e3-979ef669f16b"
		},
		
	};

	axios(requestData)
		.then((res) => {
			onSuccess(res.data);
		})
		.catch((fail) => {
			onFail(fail.response);
		});
}
