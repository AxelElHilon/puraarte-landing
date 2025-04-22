// Animaciones de entrada para las personas
const personas = document.querySelectorAll('.persona');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-10');
    }
  });
}, { threshold: 0.6 });

personas.forEach(p => observer.observe(p));

// Función para abrir el modal
function openModal(person) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');

  modalTitle.textContent = person.name;
  modalContent.innerHTML = `
    <p><strong>Profesión:</strong> ${person.profession}</p>
    <p><strong>Descripción:</strong> ${person.description}</p>
    <p><strong>Intereses:</strong> ${person.interests}</p>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex', 'scale-95', 'transition', 'duration-300');

  // Animación suave al aparecer
  setTimeout(() => {
    modal.classList.remove('scale-95');
  }, 10);
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Datos de las personas
const pame = {
  name: "Pamela Spahn",
  profession: "Profe de primaria y artista autodidacta",
  description: "Explora técnicas sin estructura académica formal. Le apasiona el arte como forma de expresión personal y de conexión con los demás.",
  interests: "Artes plásticas, naturaleza, creatividad sin límites."
};

const ani = {
  name: "Analia Petruccelli",
  profession: "Psicopedagoga y docente",
  description: "Cree en el arte como camino de transformación y autoconocimiento. Le interesa acompañar a los demás en su proceso de crecimiento personal.",
  interests: "Arte terapéutico, pedagogía, creatividad en la educación."
};

// Esperar a que cargue todo el DOM
document.addEventListener("DOMContentLoaded", () => {
  // Botones para abrir modal
  const pameBtn = document.querySelector("#pame button");
  const aniBtn = document.querySelector("#ani button");

  if (pameBtn) pameBtn.addEventListener('click', () => openModal(pame));
  if (aniBtn) aniBtn.addEventListener('click', () => openModal(ani));

  // Cerrar modal al hacer clic fuera del contenido
  const modal = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === this) closeModal();
    });
  }

  // Menú mobile
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.add("hidden");
      }
    });
  }
});

const talleres = [
  {
    name: "Pintura en Tote Bag",
    profession: "Taller artístico con textil",
    description: "Incluye una tote bag de tela para pintar, diseños para elegir y teoría del color aplicada al diseño textil.",
    interests: "Creatividad, pintura libre, diseño artesanal."
  },
  {
    name: "Botánica y Macetas",
    profession: "Taller de plantas y pintura creativa",
    description: "Aprendé a armar tu sustrato, conocer los cuidados básicos de las plantas y decorá tu propia maceta con pintura.",
    interests: "Naturaleza, arte, autocuidado verde."
  },
  {
    name: "Botánica y Grabado de Sellos",
    profession: "Taller botánico con técnicas gráficas",
    description: "Incluye la creación de tintura madre, oráculo herbal y un sello en linóleo de una planta medicinal elegida por vos.",
    interests: "Botánica mágica, grabado manual, herbalismo creativo."
  },
  {
    name: "Sahumos y Cerámica",
    profession: "Rituales y artesanía",
    description: "Aprendé a crear sahumos con plantas naturales y diseñá tu propio sahumador en cerámica desde cero.",
    interests: "Ceremonia, manualidades, conexión espiritual."
  }
];
