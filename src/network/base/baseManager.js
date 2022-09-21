import { axiosInstance } from "../axiosInstance/axiosInstance"

export const baseManager = {

    getAll: async (url) => {
        let responseData = [];
        await axiosInstance.get(url)
            .then(res => {
                if (res.status === 200) {
                    responseData = res.data;
                }
                else {
                    throw new Error('Error Has Occurred while getting...')
                }
            })
            .catch(err => {
                throw err
            })

        return responseData;

    },
    getById: () => {

    },
    add: async (url, payload) => {
        console.log(payload)
        let response = null;
        await axiosInstance.post(url,  payload )
            .then(res => {
                if (res.status === 201) {
                    response = res.data;
                }
                else {
                    throw new Error('Error Has Occurred while posting...')
                }
            })
            .catch(err => {
                throw err
            })
        return response;
    },
    update: () => {

    },
    deleteById: async (url,id) => {
        let response = null;
        await axiosInstance.delete(url,id)
        .then(res=> {
            if (res.status===200) {
                response = res.data;
            }
            else{
                throw new Error('Error Has Occurred while deleting...')
            }
        })
        .catch(error=>{
            throw error
        })

        return response;
    }

}