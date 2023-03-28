'use strict';

document.addEventListener('DOMContentLoaded', function (e) {
  e.preventDefault();
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');
  openModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });
  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    const certificate_modals = document.querySelectorAll('.certificates-modal.active');
    modals.forEach((modal) => {
      closeModal(modal);
    });
    certificate_modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      const certificate_modals = button.closest('.certificates-modal');
      closeModal(modal);
      closeModal(certificate_modals);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }
});
