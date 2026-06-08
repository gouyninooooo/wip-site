const gallery = [
    // PROJET 1
    {
        project: "Aspect Wakemag",
        imgName: "Numéro 3 Front Cover",
        src: "images/01-aspect/aspect-01.jpg",
        desc: 'Direction artistique et mise en page de la revue annuelle Aspect Wakemag (N°3). Exploration des dimensions esthétiques et créatives du wakeboard. <a href="https://aspectwakemag.fr" target="_blank" style="text-decoration:underline">aspectwakemag.fr ↗</a>'
    },
    ...Array.from({length: 7}, (_, i) => ({
        project: "Aspect Wakemag",
        imgName: `Numéro 3 spread ${i + 2}`,
        src: `images/01-aspect/aspect-0${i + 2}.jpg`,
        desc: 'Direction artistique et mise en page pour l’édition 2026 d’Aspect Wakemag.'
    })),
    // PROJET 2
    {
        project: "Nike Signalétique Showroom",
        imgName: "swoosh details",
        src: "images/02-sp26/sp26-1.jpg", // Chemin mis à jour en minuscule
        desc: 'Conception de la signalétique et scénographie du showroom Nike Paris (300m²). Système modulaire en acier brut et d’une typographie sur mesure, inspirée de l’ossature métallique. <br> Agence : <a href="https://midiquinze.com/" target="_blank" style="text-decoration:underline">Midi:Quinze ↗</a>'
    },
    ...Array.from({length: 5}, (_, i) => ({
        project: "Nike Signalétique Showroom",
        imgName: `Showroom detail ${i + 2}`,
        src: `images/02-sp26/sp26-${i + 2}.${(i + 2 === 3 || i + 2 === 6) ? 'gif' : 'jpg'}`,
        desc: 'Système de signalétique modulaire en acier et typographie personnalisée.'
    })),
    // PROJET 3 - Carte de voeux (5 images)
    ...Array.from({length: 5}, (_, i) => ({
        project: "Carte de vœux 2025",
        imgName: `Vœux 2025 - ${i + 1}`,
        src: `images/04-cdv-25/cdv-${i + 1}.jpg`,
        desc: 'Conception d’un objet graphique pour l’année 2025. Le support invite le destinataire à s’approprier l’imprimé par une intervention directe, transformant l’imprimé en une pièce personnalisée.'
    })),
    // PROJET 4 - Nike x FFF (5 images)
    ...Array.from({length: 5}, (_, i) => ({
        project: "Nike x FFF — footamateur.fff.fr",
        imgName: `FFF - ${i + 1}`,
        src: `images/06-footamateur/fff-${i + 1}.jpg`, // Chemin mis à jour en minuscule
        desc: 'Direction artistique et production de contenus visuels pour une campagne sur la plateforme footamateur.fff.fr. Séries photographiques et système graphique inspiré des codes du football amateur. <br> Agence : <a href="https://midiquinze.com/" target="_blank" style="text-decoration:underline">Midi:Quinze ↗</a> <br> <a href="https://midiquinze.com/projets/nike-x-fff-footamateur-fff-fr/" target="_blank" style="text-decoration:underline">full project here↗</a>'
    })),
    // PROJET 5 - Revue Quête (11 images)
    ...Array.from({length: 11}, (_, i) => ({
        project: "Revue Quête (N°1 — Juillet 2025)",
        imgName: `Quête spread ${i + 1}`,
        src: `images/03-quete/quete-${i + 1}.jpg`,
        desc: 'Création complète de la revue Quête (N°1 — Juillet 2025) : écriture, interviews, ligne éditoriale et conception graphique. Une exploration du design par le prisme de la friction, interrogeant l’impact social et politique de la pratique créative.'
    })),
    // PROJET 6 - Yohan Nilias (4 images)
    ...Array.from({length: 4}, (_, i) => ({
        project: "Yohan Nilias",
        imgName: `YN - ${i + 1}`,
        src: `images/07-yn/yn-${i + 1}.jpg`,
        desc: 'Design graphique du pro-model 2025 pour l’athlète Yohan Nilias.'
    })),
    // PROJET 7 - Nike Paris Marathon (4 images)
    ...Array.from({length: 4}, (_, i) => ({
        project: "Nike Paris Marathon",
        imgName: `PM24 - ${i + 1}`,
        src: `images/10-pm24/pm24-${i + 1}.jpg`,
        desc: 'Graphismes pour une campagne interne Nike lors du Marathon pour Tous (Paris 2024). Création de visuels inspirés par la signalétique urbaine parisienne. <br> Agence : <a href="https://midiquinze.com/" target="_blank" style="text-decoration:underline">Midi:Quinze ↗</a>'
    })),
    // PROJET 8 - Artemis (5 images)
    ...Array.from({length: 5}, (_, i) => ({
        project: "Artem'is",
        imgName: `Artemis - ${i + 1}`,
        src: `images/05-artemis/artemis-${i + 1}.jpg`,
        desc: 'Identité visuelle et logotype "Signature" sur mesure pour Artem’is, société de location d’œuvres d’art haut de gamme. Conception de papeterie et catalogues, assurant une cohérence graphique rigoureuse.'
    })),
    // PROJET 9 - Napkey (8 images)
    ...Array.from({length: 8}, (_, i) => {
        const ext = (i + 1 === 5 || i + 1 === 6) ? 'gif' : 'jpg';
        return {
        project: "Napkey Instruments™",
        imgName: `Napkey - ${i + 1}`,
        src: `images/09-napkey/napkey-${i + 1}.${ext}`,
        desc: 'Identité visuelle inspirée des années 80 pour le lancement du Napkey Chord™, interface dédiée à la création musicale. Logotype, charte graphique et supports digitaux/print. <br> Agence : <a href="https://midiquinze.com/" target="_blank" style="text-decoration:underline">Midi:Quinze ↗</a>'
        };
    }),
    // PROJET 10 - Legendre (4 images)
    ...Array.from({length: 6}, (_, i) => ({
        project: "Legendre Automobile",
        imgName: `Legendre - ${i + 1}`,
        src: `images/08-lgd/lgd-${i + 1}.jpg`,
        desc: 'Logotype dessiné sur mesure et déclinaisons, pour Legendre Automobile.'
    })),
    // PROJET 11 - SUNBURNING (4 images)
    ...Array.from({length: 4}, (_, i) => ({
        project: "Sun Burning",
        imgName: `Sunburning - ${i + 1}`,
        src: `images/11-sun-burning/${i + 1}.jpg`,
        desc: 'Recherche visuelle et série de graphismes pour un court-métrage en collaboration avec Maïssane Dia-Deverre. <br> <a href="https://www.instagram.com/p/DY10fuiklKv/?img_index=3" target="_blank" style="text-decoration:underline">full project here↗</a>'
    }))
];

let currentIndex = 0;

// Sélection des éléments DOM
const mainImage = document.getElementById('main-image');
const imageZone = document.getElementById('image-clickzone');
const projectLinks = document.querySelectorAll('.project-link');
const sectionToggles = document.querySelectorAll('.section-toggle');
let menuFocusIndex = -1;

// Gestion du fondu au chargement
mainImage.onload = () => {
    mainImage.classList.add('loaded');
};

function preloadNextImage(index) {
    const currentProject = gallery[index].project;
    let nextIndex = index + 1;
    
    // On précharge l'image suivante si elle appartient au même projet
    if (nextIndex < gallery.length && gallery[nextIndex].project === currentProject) {
        const img = new Image();
        img.src = gallery[nextIndex].src;
    }
}

function updateGallery(index) {
    // Affiche le container s'il était masqué
    const container = document.querySelector('.portfolio-container');
    container.classList.remove('initial-hidden');

    // On réinitialise l'état avant de charger le nouveau contenu
    mainImage.classList.remove('loaded');

    const item = gallery[index];

    mainImage.src = item.src;
    mainImage.alt = item.imgName;
    
    // Gestion du format carré
    if (item.isSquare) {
        mainImage.classList.add('img-square-fit');
    } else {
        mainImage.classList.remove('img-square-fit');
    }

    // Calcul du compteur (1/X) au sein du même projet
    const currentProject = item.project;
    const projectImages = gallery.filter(i => i.project === currentProject);
    const projectStartIndex = gallery.findIndex(i => i.project === currentProject);
    const relativeIndex = (index - projectStartIndex) + 1;
    
    document.getElementById('image-counter').textContent = `${relativeIndex}/${projectImages.length}`;
    
    // Lancer le préchargement de la suivante
    preloadNextImage(index);
}

function showNext() {
    const currentProject = gallery[currentIndex].project;
    let nextIndex = currentIndex + 1;

    // Si l'image suivante change de projet ou dépasse la liste, on revient au début du projet actuel
    if (nextIndex >= gallery.length || gallery[nextIndex].project !== currentProject) {
        nextIndex = gallery.findIndex(item => item.project === currentProject);
    }

    currentIndex = nextIndex;
    updateGallery(currentIndex);
}

// Event Listeners
imageZone.addEventListener('click', showNext);

// Navigation via le menu
projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Gestion de l'état actif (opacité 100%)
        projectLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Cache toutes les autres descriptions du menu
        document.querySelectorAll('.menu-description').forEach(d => d.classList.add('hidden'));

        // Affiche la description sous le projet cliqué
        const descDiv = link.nextElementSibling;
        
          // Utilise directement data-start pour trouver l'index de départ du projet
        currentIndex = parseInt(link.getAttribute('data-start'));

        updateGallery(currentIndex);

        if (descDiv && descDiv.classList.contains('menu-description')) {
            descDiv.innerHTML = gallery[currentIndex].desc;
            descDiv.classList.remove('hidden');
        }
    });
});

// Navigation au clavier
document.addEventListener('keydown', (e) => {
    // On récupère uniquement les boutons actuellement visibles dans le DOM
    const visibleBtns = Array.from(document.querySelectorAll('.nav-btn')).filter(btn => {
        return !!(btn.offsetWidth || btn.offsetHeight || btn.getClientRects().length);
    });

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        
        // Supprime le focus précédent
        if (menuFocusIndex !== -1 && visibleBtns[menuFocusIndex]) {
            visibleBtns[menuFocusIndex].classList.remove('kb-focus');
        }

        if (e.key === 'ArrowDown') {
            menuFocusIndex = (menuFocusIndex + 1) % visibleBtns.length;
        } else {
            menuFocusIndex = (menuFocusIndex - 1 + visibleBtns.length) % visibleBtns.length;
        }

        // Applique le nouveau focus
        visibleBtns[menuFocusIndex].classList.add('kb-focus');
        
        // Optionnel : scroller si le menu devient trop long
        visibleBtns[menuFocusIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    } else if (e.key === 'Enter') {
        if (menuFocusIndex !== -1 && visibleBtns[menuFocusIndex]) {
            visibleBtns[menuFocusIndex].click();
            // Réinitialise le focus après un clic sur un projet pour ne pas interférer
            if (visibleBtns[menuFocusIndex].classList.contains('project-link')) {
                visibleBtns[menuFocusIndex].classList.remove('kb-focus');
                menuFocusIndex = -1;
            }
        }
    }
});

// Gestion du menu accordéon
sectionToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const targetId = toggle.getAttribute('data-target');
        const targetGroup = document.getElementById(targetId);
        const isHidden = targetGroup.classList.contains('hidden');

        // Si on clique sur About ou Selected Works (Exclusifs entre eux)
        if (targetId === 'about-list' || targetId === 'works-list') {
            const otherId = targetId === 'about-list' ? 'works-list' : 'about-list';
            const otherToggle = document.querySelector(`[data-target="${otherId}"]`);
            
            document.getElementById(otherId).classList.add('hidden');
            otherToggle.classList.remove('active');

            // Au clic sur /about (ouverture ou fermeture), on masque ses sous-menus
            if (targetId === 'about-list') {
                document.getElementById('clients-list').classList.add('hidden');
                document.getElementById('exhib-list').classList.add('hidden');
                document.querySelector('[data-target="clients-list"]').classList.remove('active');
                document.querySelector('[data-target="exhib-list"]').classList.remove('active');
            }
        }
        
        // Note : contact-list et les sous-menus (clients-list, exhib-list) 
        // ne ferment pas les autres sections via cette logique.

        if (isHidden) {
            targetGroup.classList.remove('hidden');
            toggle.classList.add('active');
        } else {
            targetGroup.classList.add('hidden');
            toggle.classList.remove('active');
        }
    });
});