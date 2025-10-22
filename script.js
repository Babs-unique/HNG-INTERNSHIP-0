    const time = document.querySelector('[data-testid="test-user-time"]');
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('success');
    function updateTime(){
        const timeUpdate = Date.now();
        time.textContent = timeUpdate;
    }

    setInterval(updateTime,1000)


    form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMsg.textContent = '';

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    let valid = true;
    document.querySelectorAll('.error').forEach(err => err.textContent = '');

    if (!name) {
        document.getElementById('error-name').textContent = 'Full name is required.';
        valid = false;
    }

    if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        document.getElementById('error-email').textContent = 'Enter a valid email.';
        valid = false;
    }

    if (!subject) {
        document.getElementById('error-subject').textContent = 'Subject is required.';
        valid = false;
    }

    if (!message || message.length < 10) {
        document.getElementById('error-message').textContent = 'Message must be at least 10 characters.';
        valid = false;
    }

    if (valid) {
        successMsg.textContent = '✅ Message sent successfully!';
        form.reset();
    }
    });
    updateTime();
    console.log(successMsg)