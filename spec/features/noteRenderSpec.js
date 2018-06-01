document.addEventListener('DOMContentLoaded', () => {
  expect(document.documentElement).toHaveContent('Notes');
  expect(document.documentElement).toHaveContent('Create');
});
