# Deep Learning dengan Python (Terjemahan Pribadi)

Website ini dibuat untuk membantu pembaca Indonesia yang belum nyaman dengan bahasa Inggris tetap bisa mempelajari deep learning dengan lebih mudah.

Sumber utama: **Deep Learning with Python** oleh **François Chollet**.
Website resmi buku asli: [https://deeplearningwithpython.io/](https://deeplearningwithpython.io/)

## Website Live

Akses langsung:

[https://nvl123.github.io/Deep-Learning-dengan-Python/](https://nvl123.github.io/Deep-Learning-dengan-Python/)

## Disclaimer

- Terjemahan ini tidak resmi dan ditujukan untuk edukasi/pembelajaran.
- Bukan pengganti buku asli.
- Hak cipta konten asli tetap milik penulis dan penerbit terkait.

## Struktur Proyek

- `index.html` -> halaman utama.
- `styles.css` -> style halaman utama.
- `bab-01.html` -> contoh isi bab.
- `README.md` -> panduan penggunaan proyek.
- `.nojekyll` -> memastikan GitHub Pages men-serve file statis apa adanya.

## Workflow Singkat (Setiap Kali Update)

1. Edit konten bab (`bab-xx.html`).
2. Update daftar bab di `index.html`.
3. Update progress bar di sidebar `index.html`.
4. Cek hasil di browser.
5. Commit dan push.

## Cara Mengubah Isi Halaman Utama

Edit file `index.html`, fokus bagian ini:

- Judul: tag `<h1>` di section hero.
- Deskripsi proyek: `<p class="lead">`.
- Kredit penulis: `<p class="credit">`.
- Visi/format: section `<article class="panel">`.

## Cara Menambahkan Bab Baru

1. Duplikat `bab-01.html` menjadi file baru, misal `bab-02.html`.
2. Ubah judul dan isi file baru.
3. Buka `index.html`, lalu tambah link di daftar bab:

```html
<ol class="chapters">
  <li><a href="bab-01.html">Bab 1 - Apa itu Deep Learning?</a></li>
  <li><a href="bab-02.html">Bab 2 - Tensor dan Operasi Dasar</a></li>
</ol>
```

4. Simpan lalu klik link dari homepage untuk memastikan terbuka.

## Cara Mengedit Progress Bar

Progress bar ada di `index.html`, section `<div class="progress-list">`.

Contoh item:

```html
<div class="progress-item">
  <div class="progress-head"><span>Bab 02</span><span>70%</span></div>
  <div class="bar"><span style="width:70%"></span></div>
</div>
```

Aturan penting:

1. Angka persen di teks harus sama dengan nilai `width`.
2. Nilai `width` pakai format persen, misal `45%`, `80%`, `100%`.
3. Untuk bab baru, copy 1 blok `progress-item` lalu ganti nomor + persennya.

Contoh jika Bab 3 progres 55%:

```html
<div class="progress-item">
  <div class="progress-head"><span>Bab 03</span><span>55%</span></div>
  <div class="bar"><span style="width:55%"></span></div>
</div>
```

## Cara Membuat Link

### 1) Link ke halaman bab (file lain)

```html
<a href="bab-03.html">Bab 3 - Klasifikasi dan Regresi</a>
```

### 2) Link ke bagian dalam halaman yang sama

Target section:

```html
<section id="bab">
  ...
</section>
```

Link pemanggil:

```html
<a href="#bab">Lompat ke Daftar Bab</a>
```

### 3) Link kembali ke beranda dari halaman bab

Sudah ada di template bab:

```html
<a class="back" href="index.html">← Kembali ke Beranda</a>
```

## Format Isi Bab (Rekomendasi)

Karena fokus proyek ini adalah **terjemahan penuh** (bukan ringkasan), pakai pola ini:

1. Judul bab asli + judul versi Indonesia.
2. Terjemahan isi per subbagian (urut mengikuti buku).
3. Glosarium mini (opsional, hanya istilah yang sulit).
4. Catatan pemudah (contoh analogi sederhana).

Gunakan `bab-01.html` sebagai template awal, lalu isi dengan terjemahan bertahap.

## Gaya Bahasa yang Dipakai

Target gaya: bahasa Indonesia yang sangat sederhana, seperti menjelaskan ke pemula total.

Aturan praktis:

1. Gunakan kalimat pendek.
2. Hindari istilah teknis yang belum dijelaskan.
3. Jika ada istilah Inggris wajib, beri arti langsung setelahnya.
4. Jelaskan konsep dengan analogi sehari-hari.
5. Prioritaskan "mudah dipahami" daripada "terdengar akademis".

## Menjalankan Lokal

Klik dua kali `index.html` atau buka manual melalui browser.

## Publish ke GitHub Pages

1. Push semua file ke branch `main`.
2. Buka GitHub repo -> `Settings` -> `Pages`.
3. Pada `Build and deployment`:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - Folder: `/ (root)`
4. Save, tunggu 1-5 menit sampai URL aktif.

## Git Command yang Umum Dipakai

```bash
git add .
git commit -m "Update bab 2 dan progress"
git push origin main
```

## Checklist Sebelum Push

- Semua link bab bisa diklik.
- Progress bar sesuai status nyata.
- Tidak ada `href="#"` untuk bab yang sudah ada filenya.
- Kredit François Chollet tetap ada.
- Disclaimer tetap ada.
