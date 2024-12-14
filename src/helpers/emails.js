// email.js
import emailjs from "@emailjs/browser";

const _status = {
    didInit: false,
    config: null,
};

export const useEmails = () => {
    /**
     * Initialise le service EmailJS avec la configuration fournie.
     * @param {Object} config - Configuration pour EmailJS.
     * @param {string} config.publicKey - La clé publique d'EmailJS.
     * @param {string} config.serviceId - L'ID du service EmailJS.
     * @param {string} config.templateId - L'ID du modèle EmailJS.
     */
    const init = (config) => {
        if (!config || !config.publicKey || !config.serviceId || !config.templateId) {
            console.error("La configuration est invalide. Veuillez fournir publicKey, serviceId et templateId.");
            return;
        }

        try {
            emailjs.init(config.publicKey);
            _status.config = config;
            _status.didInit = true;
            console.log("EmailJS a été initialisé avec succès.");
        } catch (error) {
            console.error("Erreur lors de l'initialisation d'EmailJS :", error);
        }
    };

    /**
     * Vérifie si le service EmailJS est initialisé.
     * @return {boolean}
     */
    const isInitialized = () => {
        return _status.didInit;
    };

    /**
     * Envoie un e-mail de contact via EmailJS.
     * @param {string} fromName - Le nom de l'expéditeur.
     * @param {string} fromEmail - L'e-mail de l'expéditeur.
     * @param {string} customSubject - Le sujet personnalisé de l'e-mail.
     * @param {string} message - Le contenu du message.
     * @return {Promise<boolean>} - Retourne `true` si l'e-mail est envoyé avec succès, sinon `false`.
     */
    const sendContactEmail = async (fromName, fromEmail, customSubject, message) => {
        if (!isInitialized()) {
            console.error("Le service EmailJS n'a pas été initialisé.");
            return false;
        }

        if (!fromName || !fromEmail || !customSubject || !message) {
            console.error("Tous les champs (nom, e-mail, sujet et message) doivent être remplis.");
            return false;
        }

        const params = {
            from_name: fromName,
            from_email: fromEmail,
            custom_subject: customSubject,
            message: message,
        };

        try {
            const response = await emailjs.send(
                _status.config.serviceId,
                _status.config.templateId,
                params
            );
            console.log("E-mail envoyé avec succès :", response);
            return response.status === 200;
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'e-mail :", error);
            return false;
        }
    };

    return {
        init,
        isInitialized,
        sendContactEmail,
    };
};
