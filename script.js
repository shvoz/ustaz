// Находим элементы
const sendButton = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const responseContainer = document.getElementById('response-container');

// Обработчик клика на кнопку
sendButton.addEventListener('click', async () => {
  const inputText = userInput.value;
  
  if (!inputText.trim()) {
    alert('Пожалуйста, введите тему');
    return;
  }

  // Очистить предыдущие ответы
  responseContainer.innerHTML = 'Загружаю...';

  // Отправка запроса на сервер с введённым текстом
  try {
    const response = await fetch('http://localhost:5000/chat', { // Убедитесь, что ваш сервер работает на этом порту
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputText })
    });

    const data = await response.json();

    // Отображаем ответ от ChatGPT
    if (data.message) {
      responseContainer.innerHTML = `<strong>Ответ:</strong> ${data.message}`;
    } else {
      responseContainer.innerHTML = `<strong>Ошибка:</strong> Не удалось получить ответ`;
    }
  } catch (error) {
    responseContainer.innerHTML = `<strong>Ошибка:</strong> ${error.message}`;
  }
});
