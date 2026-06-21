# Product Requirements Document (PRD)
## Website Portofolio Pribadi — Tema Warna #800E13

---

## 0. Profil Pemilik Website

- **Nama:** Alif Fajdhan Yudhistiro
- **Tagline:** Informatics Engineering Student | Fullstack Web Developer | AI-Assisted Development

---

## 1. Latar Belakang & Tujuan

**Latar Belakang:**
Dibutuhkan sebuah website portofolio pribadi untuk menampilkan profil, keahlian, proyek, dan kontak secara profesional kepada recruiter, klien, atau publik, dengan identitas visual yang kuat menggunakan warna utama **maroon/dark red (#800E13)**.

**Tujuan:**
- Menampilkan identitas profesional secara online
- Memamerkan proyek dan karya yang telah dikerjakan
- Memudahkan orang lain untuk menghubungi/menghire
- Membangun personal branding yang elegan & berani lewat warna maroon

---

## 2. Target Pengguna

| Persona | Kebutuhan |
|---|---|
| Recruiter / HR | Melihat skill, pengalaman, dan proyek dengan cepat |
| Calon klien (freelance) | Melihat portofolio dan cara menghubungi |
| Sesama developer / komunitas | Melihat proyek, source code, tech stack |

---

## 3. Desain & Palet Warna

**Warna utama:** `#800E13` (maroon/dark red) — kesan elegan, berani, profesional.

### Palet Warna Lengkap

| Role | Hex | Kegunaan |
|---|---|---|
| Primary | `#800E13` | Aksen utama, tombol, highlight, judul |
| Primary Dark | `#5C0A0E` | Hover state, gradient gelap |
| Primary Light | `#A83A3F` | Hover ringan, border |
| Background (Light mode) | `#FFFFFF` / `#FAFAFA` | Latar utama |
| Background (Dark mode) | `#0F0A0A` / `#1A1010` | Latar mode gelap (senada maroon gelap) |
| Text Primary | `#1A1A1A` (light) / `#F5F5F5` (dark) | Teks utama |
| Text Secondary | `#6B6B6B` (light) / `#B0B0B0` (dark) | Teks deskripsi |
| Accent / Neutral | `#D9C7A3` atau `#E8D5B5` (krem/gold lembut) | Kontras hangat terhadap maroon |
| Border / Divider | `#E5E5E5` (light) / `#2A1F1F` (dark) | Garis pemisah |

> Kombinasi maroon + krem/gold memberi kesan elegan & premium (cocok untuk portofolio profesional/personal brand).

### Konfigurasi Tailwind (contoh)

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#800E13',
        dark: '#5C0A0E',
        light: '#A83A3F',
      },
      accent: '#D9C7A3',
      background: {
        light: '#FAFAFA',
        dark: '#1A1010',
      },
    },
  },
},
```

---

## 4. Fitur Utama (Must Have)

### 4.1 Halaman Hero / Landing
- **Nama:** Alif Fajdhan Yudhistiro
- **Tagline:** Informatics Engineering Student | Fullstack Web Developer | AI-Assisted Development
- Foto profil / avatar dengan border/glow warna primary
- CTA button warna `#800E13` dengan hover ke `#5C0A0E`

### 4.2 About Me

**Konten About:**

> I am an Informatics Engineering student at Universitas Bani Saleh Bekasi with a strong ambition to become a fullstack web developer. I focus on building modern, scalable, and user-centered web applications that deliver real value.
>
> I am currently developing my skills across both frontend and backend technologies, including HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, React, Next.js, Node.js, and PHP. I enjoy transforming ideas into functional applications, from designing intuitive user interfaces to building efficient backend systems.
>
> In my learning process, I leverage AI-assisted development tools to enhance productivity, improve code quality, and accelerate problem-solving. I am continuously strengthening my fundamentals through hands-on projects and practical implementation.
>
> I am highly driven to grow, collaborate, and contribute to impactful projects as a future fullstack web developer. I am always open to internships, junior roles, and tech collaborations—let's connect!

**Catatan tampilan:**
- Bisa dipecah jadi 2-3 paragraf pendek di section About
- Highlight kata kunci (fullstack web developer, AI-assisted development) dengan warna primary `#800E13`
- Tambahkan CTA kecil di akhir: "Open to internships & collaborations" sebagai badge

### 4.3 Skills / Tech Stack
- Daftar teknologi yang dikuasai (logo + nama):
  - **Frontend:** HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, React, Next.js
  - **Backend:** Node.js, PHP
  - **Lainnya:** AI-Assisted Development Tools (Cursor, Windsurf, dll)
- Badge/tag dengan aksen warna primary atau accent

### 4.4 Projects / Portfolio
- Grid/list kartu proyek dengan border/hover warna primary
- Setiap kartu: gambar/thumbnail, judul, deskripsi singkat, tech stack, link demo & repo

### 4.5 Contact
- Form kontak (nama, email, pesan) atau
- Link langsung ke email, LinkedIn, GitHub, Instagram
- Tombol download CV bertema primary

### 4.6 Navigasi
- Navbar responsif (sticky/fixed), logo/nama dengan aksen primary
- Smooth scroll ke section
- Dark mode toggle (disarankan, karena maroon tampil elegan di dark mode)

---

## 5. Fitur Tambahan (Nice to Have)

- Animasi transisi (Framer Motion)
- Blog sederhana (MDX)
- Testimoni / rekomendasi
- Multi-bahasa (ID/EN)
- Sertifikat/achievement section
- Analytics (Vercel Analytics / Google Analytics)

---

## 6. User Flow

```
Landing Page
   │
   ├── Scroll → About
   ├── Scroll → Skills
   ├── Scroll → Projects → Klik Proyek → Detail/Link Demo
   ├── Scroll → Contact → Isi Form / Klik Sosial Media
   └── Klik Navbar → Lompat ke section terkait
```

---

## 7. Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS (custom theme #800E13) |
| Animasi | Framer Motion *(opsional)* |
| Icon | Lucide React / React Icons |
| Form handling | React Hook Form + (Resend/EmailJS untuk kirim email) |
| Deployment | Vercel |
| Font | next/font (Google Fonts) |

---

## 8. Struktur Halaman & Komponen (Saran)

```
app/
 ├── page.tsx                # Landing/Home (1 page scroll)
 ├── layout.tsx
 components/
 ├── Navbar.tsx
 ├── Hero.tsx
 ├── About.tsx
 ├── Skills.tsx
 ├── Projects.tsx
 ├── ProjectCard.tsx
 ├── Contact.tsx
 └── Footer.tsx
public/
 ├── images/
 └── cv.pdf
```

---

## 9. Non-Functional Requirements

- **Responsive:** mobile, tablet, desktop
- **Performance:** skor Lighthouse > 90
- **SEO:** meta tag, Open Graph untuk share di sosial media
- **Accessibility:** kontras warna maroon vs background dicek agar tetap memenuhi standar WCAG AA
- **Loading cepat:** gunakan next/image untuk optimasi gambar

---

## 10. Out of Scope (v1)

- Sistem login/admin dashboard untuk update konten dari UI
- E-commerce / pembayaran
- Komentar pada blog (jika ada blog)

---

## 11. Kriteria Keberhasilan

- Website dapat diakses publik (deploy ke Vercel)
- Semua section tampil baik di mobile & desktop dengan konsistensi warna #800E13
- Link proyek dan kontak berfungsi
- Skor performa Lighthouse baik (>90 performance & accessibility)

---

## 12. Timeline (Contoh Estimasi)

| Tahap | Estimasi Waktu |
|---|---|
| Setup project + struktur + tema warna | 0.5 hari |
| Hero + Navbar | 0.5 hari |
| About + Skills | 0.5 hari |
| Projects | 1 hari |
| Contact + Footer | 0.5 hari |
| Polishing + responsive + deploy | 1 hari |

---

*Catatan: PRD ini bisa langsung dijadikan acuan prompt saat vibe coding di Cursor/Windsurf — salin bagian palet warna, fitur, dan tech stack sebagai konteks awal agar hasil AI konsisten dengan tema maroon.*
