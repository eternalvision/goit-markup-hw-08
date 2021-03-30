// MODAL WINDOW
            (() => {
                const refs = {
                    openModalBtn: document.querySelector('[data-modal-open]'),
                    closeModalBtn: document.querySelector('[data-modal-close]'),
                    modal: document.querySelector('[data-modal]'),
                };

                refs.openModalBtn.addEventListener('click', toggleModal);
                refs.closeModalBtn.addEventListener('click', toggleModal);

                function toggleModal() {
                    refs.modal.classList.toggle('is-hidden');
                }
            })();
            // FORM
            (() => {
                document
                    .querySelector('.js-speaker-form')
                    .addEventListener('submit', e => {
                        e.preventDefault();

                        new FormData(e.currentTarget).forEach((value, name) =>
                            console.log(`${name}: ${value}`),
                        );
                    });
            })();
            // MOBILE MENU
            (() => {
                const mobileMenu = document.querySelector('.js-menu-container');
                const openMenuBtn = document.querySelector('.js-open-menu');
                const closeMenuBtn = document.querySelector('.js-close-menu');

                const toggleMenu = () => {
                    const isMenuOpen =
                        openMenuBtn.getAttribute('aria-expanded') === 'true' ||
                        false;
                    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
                    mobileMenu.classList.toggle('is-open');
                };

                openMenuBtn.addEventListener('click', toggleMenu);
                closeMenuBtn.addEventListener('click', toggleMenu);

                // Закрываем мобильное меню на более широких экранах
                // в случае изменения ориентации устройства.
                window
                    .matchMedia('(min-width: 768)')
                    .addEventListener('change', e => {
                        if (!e.matches) return;
                        mobileMenu.classList.remove('is-open');
                        openMenuBtn.setAttribute('aria-expanded', false);
                    });
            })();