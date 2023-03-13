export default class Api {
    constructor(options) {
        this._url = options.url
        this._headers = options.headers
    }

    getUserInfo() {
        return fetch(`{$this._options.baseUrl}/users/me`, {
            method: 'GET',
            headers: this._options.headers
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
    }

}