import Success from "../assets/images/success.svg";
import Warning from "../assets/images/warning.svg";
const AlertButton = {
    dataAlertSuccess: function (texto) {
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
    },
    dataAlertWarning: function (titulo, texto) {
        const data = {
            icon: 'question',
            title: titulo,
            iconHtml: `<img src=${Warning}>`,
            customClass: {
                icon: 'no-border',
                title: '',
                
                confirmButton: 'sweet-confirmation-button'
            },
            buttonsStyling: false,
            titleStyling: false,
            showCancelButton: false,
            
            confirmButtonText: texto,
        }
        return data
    },
    dataAlertUnBotonMorado: function (titulo, textoBoton1, textoBoton2, img) {
        const data = {
            icon: 'question',
            title: titulo,
            iconHtml: `<img src=${img}>`,
            customClass: {
                icon: 'no-border',
                cancelButton: 'sweet-cancel-button',
                confirmButton: 'sweet-confirmation-button'
            },
            buttonsStyling: false,
            titleStyling: false,
            showCancelButton: true,
            cancelButtonText: textoBoton2,
            confirmButtonText: textoBoton1,
        }
        return data
    }
}
export { AlertButton }