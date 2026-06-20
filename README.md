# Deep Learning dengan Python — Catatan Indonesia

Website belajar berbahasa Indonesia yang menyederhanakan konsep dari *Deep Learning with Python* karya François Chollet. Proyek ini bersifat independen, nonkomersial, dan bukan terjemahan resmi.

## Struktur proyek

- `index.html` — kerangka dan elemen utama halaman.
- `styles.css` — seluruh desain responsif.
- `content/book-content.js` — isi bab dan subbab.
- `app.js` — menampilkan konten ke halaman.
- `notebooks/` — berkas latihan Jupyter untuk tiap bab.
- `PANDUAN-PENGISIAN.md` — panduan lengkap untuk menulis dan menambah konten.
- `bab-01.html` — pengalihan untuk tautan lama.

## Menambah bab

1. Buka `content/book-content.js`.
2. Tambahkan objek bab baru ke dalam `chapters`.
3. Isi `sections` dengan subbab, paragraf, dan poin penting.
4. Simpan notebook di folder `notebooks/`, lalu tulis lokasinya pada properti `notebook`.

Jika suatu bab tidak memiliki notebook, isi properti tersebut dengan `null`. Lihat contoh lengkap dalam `PANDUAN-PENGISIAN.md`.

Bab tanpa isi `sections` otomatis ditampilkan sebagai **Segera hadir** dan tidak dapat dibuka.

## Menjalankan lokal

Buka `index.html` langsung di browser, atau jalankan server statis sederhana dari folder proyek:

```powershell
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Sumber dan hak cipta

Sumber utama: [Deep Learning with Python](https://deeplearningwithpython.io/) oleh François Chollet. Hak cipta materi asli tetap milik penulis dan penerbit terkait. Gunakan buku resmi sebagai sumber otoritatif.
