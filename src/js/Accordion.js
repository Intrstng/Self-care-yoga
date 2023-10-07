const details = document.querySelectorAll('.questions__list > details');

function closeAccordionByClickOutside() {
  document.body.querySelectorAll('details[open]').forEach(e => e.open = false);
}

function toggleAccordionItems(e) {
  if (e.target.open) {
    document.querySelectorAll('.questions__list > details[open]').forEach(item => {
      // Exclude opened <details> from collection
      if (item === e.target) {
        return;
      }
      // Close all the rest <details>
      item.open = false;
    });
  }
}

export { details, toggleAccordionItems, closeAccordionByClickOutside }



