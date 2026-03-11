// Captura os elementos
const themeToggleButton = document.getElementById('theme-toggle');
const menuToggleButton = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Função para mudar o tema
const changeTheme = (theme) => {
  // Mudar o atributo 'data-theme' do body
  document.body.setAttribute('data-theme', theme);
  
  // Atualizar o texto do botão de alternância de tema
  if (theme === 'dark') {
    themeToggleButton.textContent = '☀️ Claro';
  } else {
    themeToggleButton.textContent = '🌙 Escuro';
  }

  // Salvar a escolha do tema no localStorage
  localStorage.setItem('theme', theme);
};

// Verifica o tema atual armazenado no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  // Se o tema salvo for 'dark', aplica o tema escuro
  changeTheme(savedTheme);
} else {
  // Se não houver tema salvo, define o tema claro como padrão
  changeTheme('light');
}

// Alterna o tema ao clicar no botão
themeToggleButton.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  changeTheme(newTheme);
});

// Alterna a visibilidade do menu lateral
menuToggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
  sidebar.classList.toggle('show');  // Mostra/Esconde o menu lateral
});

//Botãp de mostrar/esconder texto
// Seleciona todos os botões com a classe .toggleButton
document.querySelectorAll(".toggleButton").forEach(function(button) {
  button.addEventListener("click", function() {
      // Pega o ID do elemento associado ao botão
      var targetId = button.getAttribute("data-target");
      var targetElement = document.getElementById(targetId);
      
      // Alterna a visibilidade do elemento (pode ser um texto ou uma lista)
      if (targetElement.classList.contains("escondido")) {
          targetElement.classList.remove("escondido");
      } else {
          targetElement.classList.add("escondido");
      }
  });
});
