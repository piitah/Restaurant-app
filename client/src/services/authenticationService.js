import Api from "../services/api.js"

export default {
    login(credentials) {
        return Api().post("login", credentials)
    },
    createAccount(credentials) {
        return Api().post("register", credentials)
    },
    getItems() {
        return Api().get("product")
    },
    getOrders() {
        return Api().get("Order")
    },
    getUsers() {
        return Api().get("login")
    },
    postOrders(orders) {
        return Api().post("orders", orders)
    },
    createProduct(credentials) {
        return Api().post("product", credentials)
    },
    deleteProduct(id) {
        return Api().delete(`product/${id}`)
    },
    editProduct(productId) {
        return Api().put(`product`, productId)
    },
    orderNow(credentials) {
        return Api().post("Order", credentials)
    },
    show(id) {
        return Api().get(`product/${id}`)
    }
}