import axios from 'axios'
import { eraseCookie, getCookie } from '../utils/app.utils'

export class AuthService {
    http = axios.create({
        baseURL: 'https://javatravelers-backend.azurewebsites.net/',
    })

    /**
     * Salvar token de Authorization nos Cookies
     * 
     * @param {string} token token para salvar
     */
    async createTokenCookie(token) {
        eraseCookie('token')
        const expires = 3600

        const tokenCookieString = 'token=' + token + ';Max-Age=' + expires
        // TODO: optimizar depois, pois no CHROME uma string concatenada com 2 params ta demorando muito para carregar e acaba não salvando o cookie
        await new Promise((resolve) => {
            setTimeout(() => {
                document.cookie = tokenCookieString
                resolve()
            }, 1000)
        })
    }

    /**
     * Realizar logout
     */
    async logout() {
        await eraseCookie('token')
        // TODO: quando definir rota de login, implementar abaixo
        // this.history.push('login');
        window.stop()
    }

    /**
     * Realizar login
     * 
     * @param {string} login email de login do usuário
     * @param {string} password senha do usuário
     */
    async login({ login, password }) {
        const requestData = {
            usuario: login,
            senha: password
        }

        await this.http.post('login', requestData)
            .then(async (tokenInfo) => await this.createTokenCookie(tokenInfo.data.token))
            .then(() => Promise.resolve())
    }

    /**
     * Realizar Cadastro
     * 
     * @param {string} name nome do usuário
     * @param {number} cpf CPF do usuário
     * @param {string} email email do usuário
     * @param {string} login login do usuário
     * @param {string} senha senha do usuário
     */
    async signup({ nome, cpf, email, login, senha }) {
        const requestData = {
            nome,
            cpf,
            email,
            login,
            senha
        }

        await this.http.post('signup', requestData)
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(err.response.data))
    }

    /**
     * Verificar se usuário está logado
    */
    isLogged() {
        const tokenCookie = getCookie('token');
        return Boolean(tokenCookie);
    }
}