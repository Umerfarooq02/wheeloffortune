const button = document.getElementById('submitButton');
const popup = document.getElementById('codePopup');
const codeText = document.getElementById('codeText');
const closeButton = document.getElementById('closeButton');

// Updated voucherCodes object
const voucherCodes = {
    "EXOSCYBER": {
        name: `SC-900: Microsoft Security, Compliance, and Identity Fundamentals 50% off`,
        code: "MSE25212784F"
    },
    "EXOSIT": {
        name: `AZ-900: Microsoft Azure Fundamentals 50% off`,
        code: "MSE269760D98"
    },
    "EXOSTALENT": {
        name: 'MB-910: Microsoft Dynamics 365 Fundamentals (CRM) 50% off',
        code: "MSE25212784F"
    },
    // Add more names and codes as needed
};

button.addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput').value.trim();
    const voucher = voucherCodes[nameInput];

    if (voucher) {
        codeText.textContent = `Here is your unique voucher: ${voucher.name}\nCode: ${voucher.code}`;
        popup.style.display = 'block';
    } else {
        alert('No code found for this name.');
    }
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});
