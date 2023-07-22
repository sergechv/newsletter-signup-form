const email = document.getElementById('email');
const submit = document.getElementById('btn');
const invalidMsg = document.getElementById('err-msg');
const form = document.querySelector('main');
const successCard = document.getElementById('success');
const emailSuccess = document.getElementById('email-success')
const dismissBtn = document.getElementById('dismiss');

submit.addEventListener('click', successMsg);
email.addEventListener('focus', removeErr);
dismissBtn.addEventListener('click', () => {
  successCard.style.display = 'none';
  form.style.display = 'flex';
  email.value = '';
  invalidMsg.innerText = '';
  invalidMsg.classList.remove('err-msg');
});

function successMsg() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email.value)) {
    form.style.display = 'none';
    successCard.style.display = 'flex';
    emailSuccess.innerText = email.value;
  } else {
    email.classList.add('error');
    invalidMsg.innerText = 'Valid email required';
    invalidMsg.classList.add('err-msg');
  }

}

function removeErr() {
  email.classList.remove('error');
  email.value = '';
}
