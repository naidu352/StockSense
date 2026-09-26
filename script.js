document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.querySelector("form");

    if (loginForm) {

        loginForm.addEventListener("submit", function () {

            const button = document.querySelector(".login-button");

            button.textContent = "Signing in...";
            button.disabled = true;

        });

    }

});

// ==========================================
// PRODUCT PAGE
// ==========================================

function openProductForm() {
    const modal = document.getElementById("productModal");

    if (modal) {
        modal.style.display = "flex";
    }
}


function closeProductForm() {
    const modal = document.getElementById("productModal");

    if (modal) {
        modal.style.display = "none";
    }
}


document.addEventListener("DOMContentLoaded", function () {

    const productForm = document.getElementById("productForm");

    if (productForm) {

        productForm.addEventListener("submit", function (event) {

            event.preventDefault();

            alert("Product added successfully!");

            closeProductForm();

            productForm.reset();

        });

    }


    const searchBox = document.getElementById("productSearch");

    if (searchBox) {

        searchBox.addEventListener("input", function () {

            const searchValue =
                searchBox.value.toLowerCase();

            const rows =
                document.querySelectorAll("#productsTable tbody tr");

            rows.forEach(function (row) {

                const text =
                    row.textContent.toLowerCase();

                row.style.display =
                    text.includes(searchValue) ? "" : "none";

            });

        });

    }

});