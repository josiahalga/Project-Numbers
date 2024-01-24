import Api from '@/services/Api'

export default {
    register (credentials) {
        return Api().post('register', credentials)
    },
    register_member (credentials) {
        return Api().post('add_member', credentials)
    }
}