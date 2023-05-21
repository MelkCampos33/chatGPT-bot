
const chatLog = document.getElementById('chat-log')
userInput = document.getElementById('user-input')
sendButton = document.getElementById('send-button')
buttonIcon = document.getElementById('button-icon')
info = document.querySelector('.info')

sendButton.addEventListener('click', sendMessage)

userInput.addEventListener('keydown', (event) => {

    if(event.key === 'Enter') {
        sendMessage()
    }
})

function sendMessage() {

    const message = userInput.value.trim()

    // se não houver mensagem o programa não faz nada
    if(message === '') {
        return
    } 
    
    // se for digitado 'developer' o chat ira mostrarm o nome do criador
    else if(message === 'developer'){

        // limpando o valor do 'input'
        userInput.value = '' 
        appendMessage('user', message)

        // cria um timeout fake mostrando o carregamento no envio da mensagem atravez do button
        setTimeout(() => {
            // programando função para a palavra 'bot' quando for digitada
            appendMessage('bot', 'This source coded by Melquisedeque F. Campos')
            buttonIcon.classList.add('fa-solid', 'fa-paper-plane') 

            // muda o icone do botão para padrão
            buttonIcon.classList.remove('fas', 'fa-spinner', 'fa-pulse')
        }, 2000)
        return
    }

    // caso contrário, se nenhum dos itens a cima 
    //anexar a mensagem do usuário à tela

    appendMessage('user', message)
    userInput.value = ''

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '0946a3360bmsh7f8be67c1f76406p156475jsn9f2340c3cf2c',
            'X-RapidAPI-Host': 'chatgpt53.p.rapidapi.com'
        },
        body: `{"messages":[{"role":"user","content":"${message}"}]}`
    }





}





