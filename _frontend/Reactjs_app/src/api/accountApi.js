class accountApi {
    login = (params) => {
        const url = '/account/login';
        return axiosClient.post(url, { params });
    };
    }
const accountApi = new accountApi();
export default accountApi;