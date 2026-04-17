/**
 * Modal "Selecionar lojas" — abre ao clicar em .btn-select-stores
 * DOM: #modal_custom_segmentation.modal, #modal-stores-backdrop
 */
(function () {
  var modal = document.getElementById("modal_custom_segmentation");
  var backdrop = document.getElementById("modal-stores-backdrop");
  var openBtn = document.getElementById("btn-open-modal-stores");

  if (!modal || !backdrop) return;

  function openModal() {
    modal.classList.add("in");
    modal.setAttribute("aria-hidden", "false");
    backdrop.classList.add("in");
    document.body.classList.add("modal-open");
    var firstFocus = modal.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (firstFocus) firstFocus.focus();
  }

  function closeModal() {
    modal.classList.remove("in");
    modal.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("in");
    document.body.classList.remove("modal-open");
    if (openBtn) openBtn.focus();
  }

  if (openBtn) {
    openBtn.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  }

  modal.querySelectorAll('[data-dismiss="modal"]').forEach(function (el) {
    el.addEventListener("click", closeModal);
  });

  backdrop.addEventListener("click", function () {
    if (modal.classList.contains("in")) closeModal();
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("in")) {
      closeModal();
    }
  });

  var countEl = document.getElementById("modal-stores-selection-count");
  function updateSelectionCount() {
    if (!countEl) return;
    var n = modal.querySelectorAll("#table_custom_segmentation tbody input.checkbox:checked").length;
    var unit = countEl.getAttribute("data-count-unit");
    if (unit === "item") {
      if (n === 0) countEl.textContent = "0 itens selecionados";
      else if (n === 1) countEl.textContent = "1 item selecionado";
      else countEl.textContent = n + " itens selecionados";
      return;
    }
    if (n === 0) countEl.textContent = "0 lojas selecionadas";
    else if (n === 1) countEl.textContent = "1 loja selecionada";
    else countEl.textContent = n + " lojas selecionadas";
  }

  var selectAll = document.getElementById("modal-select-all-stores");
  function rowChecks() {
    return modal.querySelectorAll("#table_custom_segmentation tbody input.checkbox");
  }

  if (selectAll) {
    selectAll.addEventListener("change", function () {
      var checked = selectAll.checked;
      rowChecks().forEach(function (cb) {
        cb.checked = checked;
        cb.indeterminate = false;
      });
      updateSelectionCount();
    });
  }

  rowChecks().forEach(function (cb) {
    cb.addEventListener("change", function () {
      updateSelectionCount();
      var total = rowChecks().length;
      var n = modal.querySelectorAll("#table_custom_segmentation tbody input.checkbox:checked").length;
      if (selectAll) {
        selectAll.checked = n === total && total > 0;
        selectAll.indeterminate = n > 0 && n < total;
      }
    });
  });
})();

/**
 * Modal "Processamento da segmentação" — #segmentationProcessingModal + mesmo backdrop
 */
(function () {
  var modal = document.getElementById("segmentationProcessingModal");
  var storesModal = document.getElementById("modal_custom_segmentation");
  var backdrop = document.getElementById("modal-stores-backdrop");
  var openBtn = document.getElementById("btn-open-processing-modal");

  if (!modal || !backdrop) return;

  function openModal() {
    if (storesModal && storesModal.classList.contains("in")) {
      storesModal.classList.remove("in");
      storesModal.setAttribute("aria-hidden", "true");
    }
    modal.classList.add("in");
    modal.setAttribute("aria-hidden", "false");
    backdrop.classList.add("in");
    document.body.classList.add("modal-open");
    var firstFocus = modal.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (firstFocus) firstFocus.focus();
  }

  function closeModal() {
    modal.classList.remove("in");
    modal.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("in");
    document.body.classList.remove("modal-open");
    if (openBtn) openBtn.focus();
  }

  if (openBtn) {
    openBtn.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  }

  modal.querySelectorAll('[data-dismiss="modal"]').forEach(function (el) {
    el.addEventListener("click", closeModal);
  });

  backdrop.addEventListener("click", function () {
    if (modal.classList.contains("in")) closeModal();
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("in")) {
      closeModal();
    }
  });
})();
