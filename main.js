// Получаем все элементы навигации
const navLinks = document.querySelectorAll('nav a');

// Добавляем слушатель событий для каждого навигационного элемента
navLinks.forEach(link => {
  link.addEventListener('mouseover', function() {
    const title = this.getAttribute('data-title');
    if (title) {
      // Показываем подсказку с использованием data-title
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = title;

      // Добавляем подсказку в body
      document.body.appendChild(tooltip);

      // Позиционируем подсказку рядом с ссылкой
      const rect = this.getBoundingClientRect();
      tooltip.style.left = `${rect.left + window.scrollX}px`;
      tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;

      // Сохраняем подсказку для последующего удаления
      this.tooltip = tooltip;
    }
  });

  link.addEventListener('mouseout', function() {
    // Удаляем подсказку, когда курсор покидает ссылку
    if (this.tooltip) {
      document.body.removeChild(this.tooltip);
      this.tooltip = null;
    }
  });
});
