const biblioteca = [
    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", tipo: "libro", imagen: "dist/assets/cien_años_de_soledad.webp", descripcion: "Obra maestra del realismo mágico." },
    { id: 2, titulo: "National Geographic", autor: "Edición Junio 2026", tipo: "revista", imagen: "dist/assets/National_geographic.webp", descripcion: "Revista de ciencia y naturaleza." },
    { id: 3, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", tipo: "libro", imagen: "dist/assets/Don_Quijote.webp", descripcion: "La cumbre de la literatura española." },
    { id: 4, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", tipo: "libro", imagen: "dist/assets/el_principito.webp", descripcion: "Cuento sobre la vida y amistad." },
    { id: 5, titulo: "1984", autor: "George Orwell", tipo: "libro", imagen: "dist/assets/1984.webp", descripcion: "Distopía clásica sobre el control." },
    { id: 6, titulo: "Hábitos Atómicos", autor: "James Clear", tipo: "audiolibro", imagen: "dist/assets/habitos_atomicos.webp", descripcion: "Guía para crear buenos hábitos." },
    { id: 7, titulo: "Deja de ser tú", autor: "Joe Dispenza", tipo: "audiolibro", imagen: "dist/assets/deja_de_ser_tu.webp", descripcion: "La mente crea la realidad." },
    { id: 8, titulo: "El Sótano", autor: "Roberto Leal", tipo: "libro", imagen: "dist/assets/el_sotano.webp", descripcion: "Ten cuidado, te están mirando." },
    { id: 9, titulo: "Boletín SZU", autor: "Gabriela Bentancur", tipo: "revista", imagen: "dist/assets/boletin-szu.webp", descripcion: "Noticias internacionales." },
    { id: 10, titulo: "La pulga", autor: "Graffiti Imprenta", tipo: "revista", imagen: "dist/assets/la_pulga.webp", descripcion: "La revista del país." }
];

function renderizarBiblioteca() {
    const contenedor = document.getElementById('biblioteca-container');
    contenedor.innerHTML = '';

    biblioteca.forEach(item => {
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 col-lg-4';
        card.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="position-relative">
                    <img src="${item.imagen}" class="card-img-top" alt="${item.titulo}" style="height:220px;object-fit:cover;">
                    <span class="tipo-badge tipo-${item.tipo}">${item.tipo}</span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${item.titulo}</h5>
                    <p class="text-muted mb-1"><small><i class="bi bi-person me-1"></i>${item.autor}</small></p>
                    <p class="card-text">${item.descripcion}</p>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });

    document.getElementById('total-libros').textContent = biblioteca.filter(i => i.tipo === 'libro').length;
    document.getElementById('total-revistas').textContent = biblioteca.filter(i => i.tipo === 'revista').length;
    document.getElementById('total-audiolibros').textContent = biblioteca.filter(i => i.tipo === 'audiolibro').length;
}

document.addEventListener('DOMContentLoaded', renderizarBiblioteca);