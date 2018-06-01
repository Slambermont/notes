document.addEventListener('DOMContentLoaded', () => {
  const message = 'William has a huge pet dog, called Bedser';
  const shortMessage = `${message.slice(0, 20)}...`
  document.getElementById('noteform').value = message;
  document.getElementById('submit').click();

  expect(document.documentElement).toHaveContent(shortMessage);
});
