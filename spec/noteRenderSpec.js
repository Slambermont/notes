document.addEventListener("DOMContentLoaded", function() {
  expect(document.documentElement).toHaveContent('Note1')
  expect(document.documentElement).toHaveContent('Note2')
});
