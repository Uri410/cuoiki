function redirectToPage() {
    const roleSelect = document.getElementById('role');
    const selectedRole = roleSelect.value;

    if (selectedRole === "1") {
        window.location.href = "/1/index1.html";
    } else if (selectedRole === "2") {
        window.location.href = "/main/index.html";
    }
}
