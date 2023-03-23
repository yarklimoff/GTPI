'use strict';

document.addEventListener('DOMContentLoaded', function () {
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
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });
  $('#form').submit(function (e) {
    var popup = $('#popup_text');
    e.preventDefault();
    $.ajax({
      url: '/send.php',
      type: 'POST',
      data: $('#form').serialize(),
      success: function (response) {
        popup.html('Ваше сообщение успешно отправлено!').delay(2000).fadeOut(1000);

        $('#fio').val('');
        $('#phone').val('');
        $('#problem').val('');
      },
      error: function (response) {},
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      closeModal(modal);
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
