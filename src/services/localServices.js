export const localServ = {
    get: () => {
        let dataJson = localStorage.getItem('USER_INFOR')
        return JSON.parse(dataJson)
        // return null || Object
    },
    set: (userInfo) => {
        let dataJSON = JSON.stringify(userInfo)
        localStorage.setItem('USER_INFOR', dataJSON)
    },
    remove: () => {
        localStorage.removeItem('USER_INFOR')
    }
}