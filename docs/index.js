document.addEventListener("DOMContentLoaded", function(){
    const messages$ = document.querySelector('.messages');
    const promptInput$ = document.querySelector('#prompt');
    const promptBtn$ = document.querySelector('#promptBtn');

    const addPromptMessage = (prompt) => {
        const message = document.createElement('div');
        message.classList.add('prompt-text');
        message.classList.add('bubble');
        message.innerHTML = prompt;
        messages$.appendChild(message);
        promptInput$.value = '';
        promptInput$.focus();
        scrollDown();
    }

    const addResponseMessage = (response) => {
        const message = document.createElement('div');
        message.classList.add('response-text');
        message.classList.add('bubble');
        message.innerHTML = response;
        messages$.appendChild(message);
        scrollDown();
    }

    promptBtn$.addEventListener('click', () => {
        const prompt = promptInput$.value;


        if(prompt) {
            addPromptMessage(prompt)
            makeAIRequest(prompt).then(response => {
                addResponseMessage(response.data.response);
            })
        }

    });

    const scrollDown = () => {
        messages$.scrollTop = messages$.scrollHeight;
    }

    async function makeAIRequest(prompt) {
        messages$.classList.add('loading');
        const response = await fetch('http://localhost:3930/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({prompt}),
        });
        messages$.classList.remove('loading');
        return response.json();
    }


});
