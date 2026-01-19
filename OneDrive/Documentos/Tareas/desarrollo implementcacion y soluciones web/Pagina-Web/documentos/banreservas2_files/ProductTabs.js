// fixed-prod-tabs
// product-links

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container_cuerpo_producto');
    const productLinks = container?.querySelector('.product-links');
    const jumpLinks = document.querySelectorAll('.jumplink');

    if (!container || !productLinks) return;

    let isScrolling = false;
    let ticking = false;

    const OFFSET = -90;
    const FIXED_THRESHOLD = 0;
    const SECTION_DETECTION_OFFSET = 100;

    const sections = Array.from(jumpLinks).map(link => {
        const targetId = link.getAttribute('href')?.slice(1);
        const element = targetId ? document.getElementById(targetId) : null;
        return element ? { id: targetId, element, link } : null;
    }).filter(Boolean);

    function mStickNavegacion() {
        const containerTop = container.getBoundingClientRect().top;

        if (containerTop <= FIXED_THRESHOLD) {
            productLinks.classList.add('fixed-prod-tabs');
        } else {
            productLinks.classList.remove('fixed-prod-tabs');
        }
    }

    function actualizarSeccionActiva() {
        if (isScrolling) return;

        let activeSection = null;
        let closestDistance = Infinity;

        sections.forEach(({ element, link, id }) => {
            const rect = element.getBoundingClientRect();
            const distance = Math.abs(rect.top - SECTION_DETECTION_OFFSET);

            if (rect.top <= SECTION_DETECTION_OFFSET && rect.bottom > SECTION_DETECTION_OFFSET) {
                if (distance < closestDistance) {
                    closestDistance = distance;
                    activeSection = { element, link, id };
                }
            }
        });

        if (!activeSection) {
            sections.forEach(({ element, link, id }) => {
                const rect = element.getBoundingClientRect();
                if (rect.top <= SECTION_DETECTION_OFFSET) {
                    const distance = Math.abs(rect.top - SECTION_DETECTION_OFFSET);
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        activeSection = { element, link, id };
                    }
                }
            });
        }

        if (activeSection) {
            jumpLinks.forEach(link => link.classList.remove('current'));
            activeSection.link.classList.add('current');
        }
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                mStickNavegacion();
                actualizarSeccionActiva();
                ticking = false;
            });
            ticking = true;
        }
    }

    function scrollToSection(targetElement, link) {
        isScrolling = true;

        jumpLinks.forEach(l => l.classList.remove('current'));
        link.classList.add('current');

        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY + OFFSET;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }

    const tickyBar = document.querySelector('.product-links');

    function handleLinkClick(e) {
        const link = e.target.closest('.jumplink');
        if (!link) return;

        e.preventDefault();

        const targetId = link.getAttribute('href')?.slice(1);
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;


        tickyBar.classList.add('fixed-prod-tabs');

        scrollToSection(targetElement, link);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', handleLinkClick);

    mStickNavegacion();
    actualizarSeccionActiva();

    return function cleanup() {
        window.removeEventListener('scroll', onScroll);
        document.removeEventListener('click', handleLinkClick);
    };
});