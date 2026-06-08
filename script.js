const gallery = [
    // PROJET 1
    {
        project: "Aspect Wakemag",
        imgName: "Numéro 3 Front Cover",
        src: "images/01-aspect/aspect-01.jpg",
        desc: 'Aspect est une revue dédiée à la culture du wakeboard, explorant les dimensions esthétiques et créatives de la discipline. Chaque édition annuelle s’appuie sur une direction artistique forte, collaborant avec de nombreux photographes internationaux pour offrir une perspective visuelle unique. L’édition 2026 est disponible en versions française et anglaise. <a href="https://aspectwakemag.fr" target="_blank" style="text-decoration:underline">aspectwakemag.fr ↗</a>'
    },
    {
        project: "Aspect Wakemag",
        imgName: "Numéro 3 page 134-135",
        src: "images/01-aspect/aspect-02.jpg",
        desc: 'Revue dédiée à la culture du wakeboard, explorant les dimensions esthétiques et créatives de la discipline.'
    },
    {
        project: "Aspect Wakemag",
        imgName: "Numéro 3 page 136-137",
        src: "images/01-aspect/aspect-03.jpg",
        desc: 'Revue dédiée à la culture du wakeboard, explorant les dimensions esthétiques et créatives de la discipline.'
    },
    {
        project: "Aspect Wakemag",
        imgName: "Numéro 3 spread",
        src: "images/01-aspect/aspect-04.jpg",
        desc: 'Revue dédiée à la culture du wakeboard, explorant les dimensions esthétiques et créatives de la discipline.'
    },
    {
        project: "Aspect Wakemag",
        imgName: "Numéro 3 spread",
        src: "images/01-aspect/aspect-05.jpg",
        desc: 'Revue dédiée à la culture du wakeboard, explorant les dimensions esthétiques et créatives de la discipline.'
    },
    {
        project: "Aspect Wakemag",
        imgName: "Numéro 3 spread",
        src: "images/01-aspect/aspect-06.jpg",
        desc: 'Revue dédiée à la culture du wakeboard, explorant les dimensions esthétiques et créatives de la discipline.'
    },
    {
        project: "Aspect Wakemag",
        imgName: "Numéro 3 spread",
        src: "images/01-aspect/aspect-07.jpg",
        desc: 'Revue dédiée à la culture du wakeboard, explorant les dimensions esthétiques et créatives de la discipline.'
    },
    {
        project: "Aspect Wakemag",
        imgName: "Numéro 3 spread",
        src: "images/01-aspect/aspect-08.jpg",
        desc: 'Revue dédiée à la culture du wakeboard, explorant les dimensions esthétiques et créatives de la discipline.'
    },
    // PROJET 2
    {
        project: "Nike Signalétique Showroom",
        imgName: "swoosh details",
        src: "images/02-sp26/sp26-1.jpg",
        desc: 'Conception de la signalétique et de la scénographie du showroom parisien de Nike (300 m²). Le dispositif repose sur un système modulaire composé de structures en acier brut et de panneaux interchangeables. Une typographie sur mesure, inspirée de l’ossature métallique des modules, prolonge cette identité dans l’espace, en signalétique comme en ambiance. Agence : <a href="https://midiquinze.com/" target="_blank" style="text-decoration:underline">midi:quinze ↗</a>'
    },
    {
        project: "Nike Signalétique Showroom",
        imgName: "showroom panel",
        src: "images/02-sp26/sp26-2.jpg",
        desc: 'Une typographie sur mesure, inspirée de l’ossature métallique des modules, prolonge cette identité dans l’espace, en signalétique comme en ambiance.'
    },
    {
        project: "Nike Signalétique Showroom",
        imgName: "Custom font",
        src: "images/02-sp26/sp26-3.gif",
        desc: 'Une typographie sur mesure, inspirée de l’ossature métallique des modules, prolonge cette identité dans l’espace, en signalétique comme en ambiance.'
    },
    {
        project: "Nike Signalétique Showroom",
        imgName: "detail photo",
        src: "images/02-sp26/sp26-4.jpg",
        desc: 'Conception de la signalétique et de la scénographie du showroom parisien de Nike. Une typographie sur mesure, inspirée de l’ossature métallique des modules, prolonge cette identité dans l’espace, en signalétique comme en ambiance.'
    },
    {
        project: "Nike Signalétique Showroom",
        imgName: "detail photo",
        src: "images/02-sp26/sp26-5.jpg",
        desc: 'Conception de la signalétique et de la scénographie du showroom parisien de Nike. Une typographie sur mesure, inspirée de l’ossature métallique des modules, prolonge cette identité dans l’espace, en signalétique comme en ambiance.'
    },
    {
        project: "Nike Signalétique Showroom",
        imgName: "detail photo",
        src: "images/02-sp26/sp26-6.gif",
        desc: 'Conception de la signalétique et de la scénographie du showroom parisien de Nike. Une typographie sur mesure, inspirée de l’ossature métallique des modules, prolonge cette identité dans l’espace, en signalétique comme en ambiance.'
    },
    // PROJET 3 - Revue Quete (11 images)
    ...Array.from({length: 11}, (_, i) => ({
        project: "Revue Quête",
        imgName: `Quête spread ${i + 1}`,
        src: `images/03-quete/quete-${i + 1}.jpg`,
        desc: 'Revue mensuelle dédiée à l’exploration du design par le prisme de la friction et de l’opposition. Quête met en lumière le contraste entre le travail de créatifs engagés — mobilisant le design à des fins sociales ou politiques — et des projets esthétiques dépourvus de sens. Cette mise en tension analytique interroge le rôle des communicants et l’impact de leur pratique sur la société contemporaine.'
    })),
    // PROJET 4 - Carte de voeux (5 images)
    ...Array.from({length: 5}, (_, i) => ({
        project: "Carte de Vœux 2025",
        imgName: `Vœux 2025 - ${i + 1}`,
        src: `images/04-cdv-25/cdv-${i + 1}.jpg`,
        desc: 'Conception d’un objet graphique participatif pour l’année 2025. Cette carte de vœux invite le destinataire à s’approprier le support par une intervention directe, transformant l’imprimé en une pièce personnalisée. Le concept valorise l’interaction et la projection individuelle au seuil d’une nouvelle année.'
    })),
    // PROJET 5 - Artemis (5 images)
    ...Array.from({length: 5}, (_, i) => ({
        project: "Artem'is",
        imgName: `Artemis - ${i + 1}`,
        src: `images/05-artemis/artemis-${i + 1}.jpg`,
        desc: 'Identité visuelle et accompagnement global pour Artem’is, société spécialisée dans la location d’œuvres d’art. Le projet s’articule autour d’un logotype sur mesure reflétant un univers haut de gamme. La mission s’est étendue à la conception d’un système de supports imprimés — papeterie et catalogues — assurant une cohérence graphique rigoureuse sur l’ensemble des points de contact.'
    })),
    // PROJET 6 - Footamateur (5 images)
    ...Array.from({length: 5}, (_, i) => ({
        project: "footamateur.fff.fr",
        imgName: `FFF - ${i + 1}`,
        src: `images/06-footamateur/FFF-${i + 1}.jpg`,
        desc: 'Direction artistique et production de contenus visuels pour la plateforme footamateur.fff.fr de la Fédération Française de Football. L’intervention porte sur la redynamisation de l’image du support à travers des séries photographiques et un système graphique inspiré des codes du football amateur. Le projet intègre une déclinaison spécifique aux couleurs du club de Saint-Germain-lès-Arpajon. Agence : <a href="https://midiquinze.com/" target="_blank" style="text-decoration:underline">midi:quinze ↗</a> <br><br> <a href="https://midiquinze.com/projets/nike-x-fff-footamateur-fff-fr/" target="_blank" style="text-decoration:underline">full project here ↗</a>'
    })),
    // PROJET 7 - Yohan Nilias (4 images)
    ...Array.from({length: 4}, (_, i) => {
        return {
        project: "Yohan Nilias",
        imgName: `YN - ${i + 1}`,
        src: `images/07-yn/yn-${i + 1}.jpg`,
        desc: 'Conception graphique du pro-model 2025 pour l’athlète Yohan Nilias. Le design propose une identité visuelle forte et singulière, pensée pour s’intégrer aux contraintes techniques et esthétiques de l’équipement professionnel.'
        };
    }),
    // PROJET 8 - Legendre (4 images)
    ...Array.from({length: 4}, (_, i) => ({
        project: "Legendre Automobile",
        imgName: `Legendre - ${i + 1}`,
        src: `images/08-lgd/lgd-${i + 1}.jpg`,
        desc: 'Développement de l’identité visuelle de Legendre Automobile. Le projet s’appuie sur la création d’un logotype dessiné sur mesure, soulignant l’expertise et la rigueur de cet atelier de mécanique. L’identité a fait l’objet de déclinaisons sur divers supports de communication et outils opérationnels adaptés.'
    })),
    // PROJET 9 - Napkey (8 images)
    ...Array.from({length: 8}, (_, i) => {
        const ext = (i + 1 === 5 || i + 1 === 6) ? 'gif' : 'jpg';
        return {
        project: "Napkey Instrument™",
        imgName: `Napkey - ${i + 1}`,
        src: `images/09-napkey/napkey-${i + 1}.${ext}`,
        desc: 'Conception de l’identité visuelle pour Napkey Instruments à l’occasion du lancement du Napkey Chord, interface dédiée à la création musicale intuitive. L’intervention comprend la création d’un logotype et d’une charte graphique globale. Le système visuel a été déployé sur une variété de supports digitaux et imprimés, affirmant un positionnement moderne et technologique. Agence : <a href="https://midiquinze.com/" target="_blank" style="text-decoration:underline">midi:quinze ↗</a>'
        };
    }),
    // NIKE PARIS MARATHON 24 (4 images)
    ...Array.from({length: 4}, (_, i) => ({
        project: "Nike Paris Marathon 24",
        imgName: `PM24 - ${i + 1}`,
        src: `images/10-pm24/pm24-${i + 1}.jpg`,
        desc: 'Conception graphique réalisée pour une campagne de communication interne Nike à l’occasion du Marathon pour Tous (Paris 2024). Le projet accompagne le récit d’une préparation athlétique authentique, valorisant une vision inclusive de la performance et de l’engagement sportif. Agence : <a href="https://midiquinze.com/" target="_blank" style="text-decoration:underline">midi:quinze ↗</a>'
    })),
    // SUNBURNING (4 images)
    ...Array.from({length: 4}, (_, i) => ({
        project: "Sun Burning",
        imgName: `Sunburning - ${i + 1}`,
        src: `images/11-sun-burning/${i + 1}.jpg`,
        desc: 'Série de graphismes réalisée pour un court-métrage en collaboration avec Maïssane Dia-Deverre. Le projet s’articule autour d’une recherche visuelle spécifique visant à accompagner l’univers narratif du film. Collaboration : <a href="https://www.instagram.com/maissane.ddv/" target="_blank" style="text-decoration:underline">Maïssane Dia-Deverre ↗</a> <br><br> <a href="https://www.instagram.com/p/DY10fuiklKv/?img_index=3" target="_blank" style="text-decoration:underline">full project here ↗</a>'
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
        
        // Alternative plus robuste : trouver l'index par le nom du projet
        const projectName = link.textContent.replace('/', '');
        const foundIndex = gallery.findIndex(item => item.project.toLowerCase().includes(projectName.toLowerCase()));
        
        currentIndex = foundIndex !== -1 ? foundIndex : parseInt(e.target.getAttribute('data-start'));

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