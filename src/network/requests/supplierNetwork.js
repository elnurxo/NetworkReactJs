import { baseManager } from "../base/baseManager"


export const supplierNetwork = {
    getAllSuppliers : () => {
        return baseManager.getAll("suppliers")
    },
    deleteSupplierById: (id) => {
        return baseManager.deleteById(`suppliers/${id}`)
    },
    addSupplier : (payload) => {
        return baseManager.add("suppliers", payload)
    }
}