import axios from 'axios'
import { addAuthToken } from '../utils/axios-interceptors.utils'

export default class TicketService {
    http = axios.create({
        baseURL: 'https://javatravelers-backend.azurewebsites.net/'
    })

    constructor() {
        this.http.interceptors.request.use(request => addAuthToken(request))
    }

    /**
     * Listar todas passagens reservadas ou emitidas
     */
    async ticketsList() {
        await this.http.get('tickets/list')
            .then(res => res)
    }

    /**
     * Consulta básica de vôos
     * 
     * @param {number} adults quantidade de adultos
     * @param {number} childrens quantidade de crianças
     * @param {number} infants quantidade de bebês
     * @param {string} originCode lugar de partida
     * @param {string} destinationCode lugar de destino
     * @param {string} departureDate data de partida
     * @param {string} returnDate data de retorno
     * @param {string} currencyCode moeda de pagamento
     * @param {number} max máximo de resultados
     */
    async ticketsSearch({ adults, childrens, infants, originCode, destinationCode, departureDate, returnDate, currencyCode, max }) {
        const requestData = {
            adults,
            childrens,
            infants,
            originCode,
            destinationCode,
            departureDate,
            returnDate,
            currencyCode,
            max,
        }

        await this.http.post('tickets/offers', requestData)
            .then(res => res)
    }

    /**
     * Confirmação de preço da Passagem
     * 
     * @param {*} data 
     */
    // TODO: implementar
    async ticketConfirmPrice(data) {
        await this.http.post('tickets/offers/price', data)
            .then(res => res)
    }

    /**
     * Consulta avançada de vôos
     * 
     * @param {*} data 
     */
    // TODO: implementar
    async ticketsAdvancedSearch(data) {
        await this.http.post('tickets/offers/search', data)
            .then(res => res)
    }


    /**
     * Cancelar uma reserva após a compra
     * 
     * @param {number} flightOrderId id da reserva
     */
    async ticketCancel(flightOrderId) {
        await this.http.delete(`tickets/order?flightOrderId=${flightOrderId}`)
            .then(res => res)
    }

    /**
     * Consultar status do vôo
     * 
     * @param {number} flightOrderId id da reserva
     */
    async ticketView(flightOrderId) {
        await this.http.delete(`tickets/order?flightOrderId=${flightOrderId}`)
            .then(res => res)
    }

    /**
     * Consulta de cidades, países ou aeroportos
     * 
     * @param {string} location localidade
     */
    async ticketSearchLocation(location) {
        const requestData = {
            location
        }

        await this.http.post('tickets/search/location', requestData)
            .then(res => res)
    }
}