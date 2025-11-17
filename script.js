// Elementos
const menu = document.getElementById('side-menu');
const toggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-menu');
const links = document.querySelectorAll('#side-menu a');
const filtro = document.getElementById('filtro');

// Abrir/fechar
toggle.addEventListener('click', () => menu.classList.add('open'));
closeBtn.addEventListener('click', () => menu.classList.remove('open'));

// Fechar menu ao clicar num link e mostrar seção
links.forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const target = a.getAttribute('data-target');
    mostrarSecao(target);
    menu.classList.remove('open');
  });
});

// Mostrar seção por id
function mostrarSecao(id){
  document.querySelectorAll('.secao').forEach(s=> s.classList.remove('ativa'));
  const el = document.getElementById(id);
  if(el) el.classList.add('ativa');
  // rolar para top do conteúdo no mobile para melhorar UX
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Filtrar cards
if (filtro) {
  filtro.addEventListener('change', filtrarCards);
}
function filtrarCards(){
  const value = filtro.value;
  const cards = document.querySelectorAll('.card');
  cards.forEach(card=>{
    const cat = card.dataset.cat;
    card.style.display = (value === 'todos' || value === cat) ? 'block' : 'none';
  });
}

// Inicial: garantir que haja uma seção ativa
if(!document.querySelector('.secao.ativa')){
  const first = document.querySelector('.secao');
  if(first) first.classList.add('ativa');
}
