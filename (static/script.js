document.getElementById("checkBalance").addEventListener("click", () => {
    const username = document.getElementById("username").value;

    fetch("/api/get_balance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
    })
        .then((response) => response.json())
        .then((data) => {
            const balanceDisplay = document.getElementById("balanceDisplay");
            if (data.success) {
                balanceDisplay.textContent = `Your balance is: $${data.balance}`;
            } else {
                balanceDisplay.textContent = data.message;
                balanceDisplay.style.color = "red";
            }
        });
});

document.getElementById("deposit").addEventListener("click", () => {
    handleTransaction("deposit");
});

document.getElementById("withdraw").addEventListener("click", () => {
    handle

                                                     
