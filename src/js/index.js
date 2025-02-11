import { renderDashboard } from "./render"; // Import fungsi untuk render dashboard
import "../sass/main.scss"; // Import SCSS utama

const app = document.getElementById("app");

// Fungsi untuk menampilkan halaman dashboard
const showDashboard = () => {
  // Mengosongkan konten lama
  app.innerHTML = "";

  // Render halaman dashboard
  renderDashboard(app);

  // Menambahkan kelas 'active' pada tombol Dashboard
  document.getElementById("nav-dashboard").classList.add("active");
  document.getElementById("nav-addStory").classList.remove("active");
};

// Fungsi untuk menampilkan halaman tambah story
const showAddStoryForm = () => {
  // Mengosongkan konten lama
  app.innerHTML = "";

  // Menambahkan HTML untuk form tambah story
  app.innerHTML = `
    <div class="container mt-4">
      <h1>Tambah Story</h1>
      <form id="storyForm" class="needs-validation" novalidate>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea class="form-control" id="description" rows="3" required></textarea>
          <div class="invalid-feedback">Description is required.</div>
        </div>
        <div class="mb-3">
          <label for="photo" class="form-label">Photo URL</label>
          <input type="url" class="form-control" id="photo" required />
          <div class="invalid-feedback">Valid photo URL is required.</div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  `;

  // Menambahkan kelas 'active' pada tombol Add Story
  document.getElementById("nav-addStory").classList.add("active");
  document.getElementById("nav-dashboard").classList.remove("active");

  // Menambahkan event listener untuk menangani submit form
  document.getElementById("storyForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const newStory = {
      name: "New User",
      description: document.getElementById("description").value,
      photoUrl: document.getElementById("photo").value,
      createdAt: new Date().toISOString(),
    };

    console.log("New Story:", newStory);
    alert("Story berhasil ditambahkan!");
  });
};

// Inisialisasi aplikasi, langsung tampilkan dashboard saat pertama kali dibuka
const init = () => {
  showDashboard(); // Tampilkan dashboard pertama kali

  // Menambahkan event listener untuk tombol navbar
  document
    .getElementById("nav-dashboard")
    .addEventListener("click", showDashboard);
  document
    .getElementById("nav-addStory")
    .addEventListener("click", showAddStoryForm);
};

init(); // Jalankan fungsi inisialisasi saat aplikasi dimuat
