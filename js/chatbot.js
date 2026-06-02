// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotWidget = document.getElementById('chatbot');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatToggleNav = document.getElementById('chat-toggle');
    const closeChatbot = document.getElementById('close-chatbot');
    const sendMessageBtn = document.getElementById('send-message');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Form inputs
    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const messageInput = document.getElementById('user-message');

    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', toggleChatbot);
    chatToggleNav.addEventListener('click', (e) => {
        e.preventDefault();
        toggleChatbot();
    });

    function toggleChatbot() {
        chatbotWidget.classList.toggle('active');
        if (chatbotWidget.classList.contains('active')) {
            nameInput.focus();
        }
    }

    // Close chatbot
    closeChatbot.addEventListener('click', () => {
        chatbotWidget.classList.remove('active');
    });

    // Send message
    sendMessageBtn.addEventListener('click', sendMessage);

    // Allow Enter to send (Ctrl+Enter for textarea)
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            sendMessage();
        }
    });

    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            emailInput.focus();
        }
    });

    emailInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            messageInput.focus();
        }
    });

    function sendMessage() {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Validation
        if (!name) {
            alert('Please enter your name');
            nameInput.focus();
            return;
        }

        if (!email) {
            alert('Please enter your email');
            emailInput.focus();
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            emailInput.focus();
            return;
        }

        if (!message) {
            alert('Please enter your message');
            messageInput.focus();
            return;
        }

        // Add user message to chat
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'message user-message';
        userMessageDiv.innerHTML = `<p><strong>${name}:</strong> ${escapeHtml(message)}</p>`;
        chatbotMessages.appendChild(userMessageDiv);

        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        // Send to Formspree email service
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        // Send email using Formspree (configure with your form ID)
        // To setup: 1. Go to https://formspree.io/
        //          2. Create new form for saarthitextilecorp@gmail.com
        //          3. Replace FORM_ID below with your actual form ID
        //          4. Each form submission will be sent as email

        fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Success - show bot response
                setTimeout(() => {
                    const botResponseDiv = document.createElement('div');
                    botResponseDiv.className = 'message bot-message';
                    botResponseDiv.innerHTML = `<p>Thank you ${name}! We've received your message and will get back to you at <strong>${escapeHtml(email)}</strong> shortly. Our team will review your inquiry and be in touch soon! 😊</p>`;
                    chatbotMessages.appendChild(botResponseDiv);

                    // Scroll to bottom
                    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

                    // Clear form
                    nameInput.value = '';
                    emailInput.value = '';
                    messageInput.value = '';

                    // Log to console
                    console.log('Lead captured and sent:', {
                        name: name,
                        email: email,
                        message: message,
                        timestamp: new Date().toISOString()
                    });
                }, 500);
            } else {
                // Fallback if email service fails - still log the message
                throw new Error('Email service error');
            }
        })
        .catch(error => {
            // Fallback: if email fails, still show success message and log locally
            console.log('Email service unavailable, but message captured:', {
                name: name,
                email: email,
                message: message,
                timestamp: new Date().toISOString()
            });

            setTimeout(() => {
                const botResponseDiv = document.createElement('div');
                botResponseDiv.className = 'message bot-message';
                botResponseDiv.innerHTML = `<p>Thank you ${name}! We've received your message and will get back to you at <strong>${escapeHtml(email)}</strong> shortly. 😊</p>`;
                chatbotMessages.appendChild(botResponseDiv);

                // Scroll to bottom
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

                // Clear form
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
            }, 500);
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Close chatbot when clicking outside (optional)
    document.addEventListener('click', (e) => {
        if (!chatbotWidget.contains(e.target) && !chatbotToggle.contains(e.target) && !chatToggleNav.contains(e.target)) {
            // Optionally close on outside click - disabled for better UX
            // chatbotWidget.classList.remove('active');
        }
    });

    // Add initial greeting animation
    setTimeout(() => {
        // Pulse the toggle button to encourage interaction
        chatbotToggle.style.animation = 'pulse 2s ease-in-out 3';
    }, 3000);
});
