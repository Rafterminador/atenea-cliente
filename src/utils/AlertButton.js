import Success from "../assets/images/success.svg";
const AlertButton = {
    dataAlert: function (texto) {
        const data = {
            icon: 'question',
            iconHtml: `<img src=${Success}>`,
            title: texto,
            timer: 2000,
            customClass: {
                icon: 'no-border'
            },
            showConfirmButton: false
        }
        return data
    }
}
export { AlertButton }