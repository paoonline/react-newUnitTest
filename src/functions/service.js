import { apiGatewayInstance } from '../util/axiosInstance'

export const ProductList = () => {
    try {
        return apiGatewayInstance.get('/product_list', {
        }).then((val) => {
            return val.data
        })
    } catch (error) {
        throw error
    }
}