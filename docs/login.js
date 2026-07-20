document.addEventListener("DOMContentLoaded", function () {
  // Switch between login and signup forms
  document.getElementById("showSignup").addEventListener("click", function () {
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("loginSection").style.display = "none";
  });

  document.getElementById("showLogin").addEventListener("click", function () {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginSection").style.display = "block";
  });

  // Show/hide password
  const togglePasswordBtns = document.querySelectorAll(".toggle-password");
  togglePasswordBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const fieldId = this.getAttribute("data-target");
      const input = document.getElementById(fieldId);
      if (input.type === "password") {
        input.type = "text";
        this.textContent = "🙈";
      } else {
        input.type = "password";
        this.textContent = "👁️";
      }
    });
  });

  // Login form submission
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
      alert("❗ Please enter both email and password.");
    } else {
      alert("✅ Login successful!");
      window.location.href = "indexweb.html";
    }
  });

  // Vendor role logic
  const roleDropdown = document.getElementById("role");
  roleDropdown.addEventListener("change", function () {
    const isVendor = this.value === "vendor";
    document.getElementById("vendor-code-section").style.display = isVendor ? "block" : "none";
    document.getElementById("vendor-password-section").style.display = "none";
  });

  const vendorCodeInput = document.getElementById("vendor-code");
  vendorCodeInput.addEventListener("input", function () {
    const correctCode = "VENDOR123";
    const vendorPasswordSection = document.getElementById("vendor-password-section");

    if (this.value === correctCode) {
      vendorPasswordSection.style.display = "block";
    } else {
      vendorPasswordSection.style.display = "none";
    }
  });

  // Sign up form submission
  const signupForm = document.getElementById("signup-form");
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;

    if (name === "" || email === "" || password === "") {
      alert("❗ Please fill in all fields.");
      return;
    }

    // Password must be at least 6 chars with 1 letter and 1 number
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    if (password.length < 6 || !hasLetter || !hasNumber) {
      alert("❗ Password must be at least 6 characters and include both letters and numbers.");
      return;
    }

    alert("✅ Account created successfully!");
    window.location.href = "submit.html"; // Redirect to success page
  });
});

  // === HAMBURGER MENU TOGGLE ===
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
