import { toast } from 'react-toastify';

/**
   * Apagar cookie informado
   */
export async function eraseCookie(...name) {
        name.forEach(e => {
            document.cookie = `${e}=123;max-age=0;`;
        });
}

/**
   * Pegar o cookie no formato de objeto JSON
   * 
   * @param {string} cname nome do cookie
   */
export function getObjectCookie(cname) {
    const cookie = getCookie(cname);
    return cookie ? JSON.parse(cookie) : undefined;
}

/**
   * Pegar coookie em seu formato original e retornar apenas o objeto
   * 
   * @param {string} cname nome do cookie
   */
export function getCookie(cname) {
    const ca = document.cookie.split(';');
    const cookie = ca.find(cookieString => {
        return cookieString.includes(cname);
    })
    const removeKeyRegex = new RegExp(`^ *${cname}=`, 'g');

    return cookie ?
        cookie.replace(removeKeyRegex, '') :
        '';
}

/**
   * Mostrar notificação toast na tela
   * 
   * @param {string} type tipo de notificação
   * @param {string} message mensagem que vai aparecer
   */
export function notify({ type, message }) {
    toast[type](message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    });
}