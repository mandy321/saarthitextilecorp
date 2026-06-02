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

        // Simulate bot response
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

            // Log to console (in real app, this would be sent to server)
            console.log('Lead captured:', {
                name: name,
                email: email,
                message: message,
                timestamp: new Date().toISOString()
            });

            // Send to server (uncomment when backend is ready)
            // sendLeadToServer(name, email, message);
        }, 500);
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

    // Function to send lead data to server
    function sendLeadToServer(name, email, message) {
        const leadData = {
            name: name,
            email: email,
            message: message,
            timestamp: new Date().toISOString(),
            source: 'website_chatbot'
        };

        // Example fetch call (configure with actual backend endpoint)
        // fetch('/api/leads', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(leadData)
        // })
        // .then(response => response.json())
        // .then(data => console.log('Lead sent:', data))
        // .catch(error => console.error('Error:', error));
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
