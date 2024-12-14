// contactForm.jsx
import React, { useEffect, useState } from 'react';
import Article from '/src/components/wrappers/Article.jsx';
import { useParser } from '/src/helpers/parser.js';
import { Col } from 'react-bootstrap';
import FormInput from '/src/components/forms/FormInput.jsx';
import { useLanguage } from '/src/providers/LanguageProvider.jsx';
import FormTextArea from '/src/components/forms/FormTextArea.jsx';
import Form from '/src/components/forms/Form.jsx';
import { useEmails } from '/src/helpers/emails.js';
import StatusMessage from '/src/components/generic/StatusMessage.jsx';
import { useTheme } from '/src/providers/ThemeProvider.jsx';
import { useFeedbacks } from '/src/providers/FeedbacksProvider.jsx';

function ArticleContactForm({ data }) {
    const parser = useParser();
    const emails = useEmails();
    const { showActivitySpinner, hideActivitySpinner, displayNotification } = useFeedbacks();
    const { getString } = useLanguage();
    const { getSelectedTheme } = useTheme();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [didSubmitMessage, setDidSubmitMessage] = useState(false);

    const parsedData = parser.parseArticleData(data);

    const emailConfig = {
        publicKey: 'MwgGhub-9ylALpwej', // Remplace par ta clé publique
        serviceId: 'service_9goj064',    // Remplace par ton ID de service
        templateId: 'template_hvb0pms',  // Remplace par ton ID de modèle
    };

    useEffect(() => {
        emails.init(emailConfig);
        _resetForm();
    }, [getSelectedTheme]);

    const _resetForm = () => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    const _onSubmitButton = async (e) => {
        e.preventDefault();
        showActivitySpinner('submitting');
        await _submitMessage();
    };

    const _submitMessage = async () => {
        if (!emails.isInitialized()) {
            hideActivitySpinner('submitting');
            _onSubmitError();
            return;
        }

        const success = await emails.sendContactEmail(name, email, subject, message);
        if (success) {
            _onSubmitSuccess();
        } else {
            _onSubmitError();
        }
    };

    const _onSubmitSuccess = () => {
        hideActivitySpinner('submitting');
        setDidSubmitMessage(true);
        _resetForm();
    };

    const _onSubmitError = () => {
        hideActivitySpinner('submitting');
        displayNotification('error', getString('uhOh'), getString('message_sent_error'));
    };

    return (
        <Article className="article-contact-form pb-2" title={parsedData.title}>
            {!didSubmitMessage && (
                <Form
                    id="contact-form"
                    submitIcon="fa-solid fa-envelope"
                    submitLabel={getString('send_message')}
                    onSubmit={_onSubmitButton}
                >
                    <Col className="col-12 col-xl-6">
                        <FormInput
                            id="name"
                            type="text"
                            value={name}
                            valueSetter={setName}
                            faIcon="fa-solid fa-signature"
                            placeholder={getString('name')}
                            required
                        />

                        <FormInput
                            id="email"
                            type="email"
                            value={email}
                            valueSetter={setEmail}
                            faIcon="fa-solid fa-envelope"
                            placeholder={getString('email')}
                            required
                        />

                        <FormInput
                            id="subject"
                            type="text"
                            value={subject}
                            valueSetter={setSubject}
                            faIcon="fa-solid fa-pen-to-square"
                            placeholder={getString('subject')}
                            required
                        />
                    </Col>

                    <Col className="col-12 col-xl-6 d-flex">
                        <FormTextArea
                            id="message"
                            value={message}
                            valueSetter={setMessage}
                            placeholder={getString('message')}
                            required
                        />
                    </Col>
                </Form>
            )}

            {didSubmitMessage && (
                <StatusMessage
                    title={getString('yay')}
                    faIcon="fa-solid fa-check"
                    type="success"
                    message={getString('message_sent_success')}
                />
            )}
        </Article>
    );
}

export default ArticleContactForm;
