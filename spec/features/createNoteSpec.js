document.addEventListener('DOMContentLoaded', () => {
  const message = 'This is a sick single page app';
  document.getElementById('noteform').value = message;
  document.getElementById('submit').click();

  expect(document.documentElement).toHaveContent(message);
});
