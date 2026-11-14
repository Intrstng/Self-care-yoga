import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './Config';

export function sendForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const submitButton = document.getElementById('button');

    if (!contactForm || !submitButton || !formMessage) {
        console.error('Contact form elements not found');
        return;
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        submitButton.disabled = true;
        submitButton.value = 'Отправка...';

        try {
            emailjs.init({
                publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
            });

            await emailjs.sendForm(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                contactForm
            );

            formMessage.textContent = 'Сообщение успешно отправлено!';
            formMessage.style.color = 'green';

            contactForm.reset();
        } catch (error) {
            console.error('EmailJS error:', error);

            formMessage.textContent = 'Ошибка отправки. Попробуйте ещё раз.';
            formMessage.style.color = 'red';
        } finally {
            submitButton.disabled = false;
            submitButton.value = 'Отправить';
        }
    });
}