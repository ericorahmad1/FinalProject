# PRD — Portfolio Pribadi Erico Rahmad

> **Status:** Draf v0.1 · **Pemilik produk:** Erico Rahmad · **Terakhir diperbarui:** 2026-05-29
> Draf ini dibuat berdasarkan kondisi proyek saat ini (single-page Astro + Tailwind, statis, GitHub Pages). Bagian bertanda **TODO** perlu dilengkapi.

## 1. Ringkasan & Problem Statement
Portfolio pribadi single-page untuk memperkenalkan diri, menampilkan karya, dan menyediakan jalur kontak. Awalnya situs multi-halaman Bootstrap 4/jQuery dengan banyak utang teknis (duplikasi markup, library ter-vendor, email terekspos, gambar hotlink). Versi ini dibangun ulang agar **modern, responsif, cepat, dan aman**.

**Masalah yang dipecahkan:** calon perekrut/klien butuh satu halaman ringkas untuk menilai kemampuan dan menghubungi pemilik tanpa friksi.

## 2. Tujuan & Sasaran (Goals / Non-Goals)
**Goals**
- Menyajikan profil, keahlian, dan karya secara ringkas dalam satu halaman.
- Menyediakan kontak yang berfungsi tanpa backend (form → Formspree).
- Performa & aksesibilitas tinggi (lihat metrik §7).

**Non-Goals (di luar cakupan saat ini)**
- Blog/CMS, multi-bahasa, autentikasi, dashboard, e-commerce.
- Analitik berat / tracking pihak ketiga.

## 3. Target Pengguna / Persona
| Persona | Kebutuhan | Implikasi desain |
|---|---|---|
| Perekrut / HR | Cepat menilai skill & cara kontak | Hero jelas, CTA kontak menonjol, ringkas |
| Sesama developer | Lihat kualitas kode & proyek | Tautan repo/demo di kartu portfolio |
| Calon klien | Yakin atas kredibilitas | Bukti karya nyata + kontak mudah |

## 4. Lingkup Fitur (saat ini)
| # | Fitur | Status | Catatan |
|---|---|---|---|
| F1 | Navbar sticky + scrollspy + smooth scroll | ✅ Selesai | Anchor in-page |
| F2 | Toggle dark/light (ikut sistem + simpan preferensi) | ✅ Selesai | Anti-FOUC |
| F3 | Section Hero (intro + CTA + sosial) | ✅ Selesai | Konten **TODO** disempurnakan |
| F4 | Section About (foto, bio, keahlian) | ✅ Selesai | Bio **TODO** |
| F5 | Section Portfolio (grid kartu data-driven) | ⚠️ Placeholder | Isi proyek nyata di `src/data/projects.ts` |
| F6 | Section Contact (form + validasi + status) | ⚠️ Perlu config | Ganti `YOUR_FORM_ID` Formspree |
| F7 | Footer (sosial + copyright) | ✅ Selesai | URL sosial **TODO** verifikasi |
| F8 | Responsif mobile-first + dark mode menyeluruh | ✅ Selesai | |
| F9 | SEO/OG + favicon | ✅ Sebagian | OG image PNG 1200×630 **TODO** |

## 5. Alur Pengguna Utama
1. Masuk → Hero → klik **Lihat Karya** (scroll ke Portfolio) atau **Hubungi Saya** (scroll ke Contact).
2. Telusuri Portfolio → buka Demo/Code di tab baru.
3. Isi form Contact → submit (fetch ke Formspree) → lihat status sukses/gagal.

## 6. Persyaratan Non-Fungsional
- **Performa:** statis, zero/min-JS, gambar dioptimasi (WebP/AVIF via `astro:assets`).
- **Aksesibilitas:** target WCAG 2.1 AA — kontras cukup, navigasi keyboard, `focus-visible`, skip-link, `aria-*`.
- **Keamanan:** CSP ketat (auto-generate Astro, tanpa `'unsafe-inline'`), tanpa email mentah di HTML, honeypot anti-spam, `rel="noopener noreferrer"` pada link eksternal.
- **Kompatibilitas:** browser modern (2 versi terakhir Chrome/Firefox/Safari/Edge).
- **Maintainability:** konten terpisah dari presentasi (`src/data/projects.ts`).

## 7. Metrik Keberhasilan (KPI)
- Lighthouse (mobile) ≥ **95** untuk Performance / Accessibility / Best Practices / SEO.
- LCP < 2.0s, CLS < 0.1 pada koneksi 4G simulasi.
- Form Contact: tingkat keberhasilan kirim ≥ 99% (di luar spam).
- Target keterlibatan *(usulan — sesuaikan)*: ≥ 5 pesan kontak relevan / bulan dan ≥ 20 klik tautan repo-demo / bulan setelah go-live.

## 8. Kriteria Penerimaan (contoh, format Given/When/Then)
- **Dark mode:** *Given* preferensi sistem gelap, *when* halaman dimuat, *then* tema gelap tampil tanpa kedip.
- **Scrollspy:** *when* menggulir ke sebuah section, *then* link navbar terkait menjadi aktif.
- **Form:** *given* email kosong/invalid, *when* submit, *then* muncul pesan error dan tidak terkirim.
- **Base path:** *when* diakses di `…/FinalProject/`, *then* semua aset & link berfungsi (tanpa 404).

## 9. Rilis & Tahapan
- **MVP (sekarang):** F1–F9 dengan placeholder → deploy GitHub Pages.
- **v1.0:** konten nyata terisi (proyek, bio, sosial, Formspree ID, OG PNG).
- **v1.1 (opsional):** animasi scroll halus, halaman detail proyek, form analytics.

## 10. Risiko & Asumsi
- Formspree gratis punya batas kuota → pantau bila traffic naik.
- GitHub Pages tak bisa set HTTP header → CSP lewat `<meta>` (frame-ancestors tidak berlaku via meta).
- Konten nyata belum tersedia → MVP memakai placeholder.

## 11. Keputusan (sebelumnya pertanyaan terbuka)
> Nilai berikut adalah **keputusan awal yang diusulkan** — ubah bila kebutuhan berbeda.
- **Domain:** Mulai dengan `ericorahmad1.github.io/FinalProject` (gratis, cepat live). Domain kustom dipertimbangkan di v1.1 sebagai peningkatan branding.
- **CV/Resume:** **Ya** — sediakan tombol "Unduh CV" (PDF di `public/cv.pdf`) di Hero dan/atau section Contact. Ditambahkan pada milestone konten (M2).
- **Bahasa:** **Indonesia saja** untuk v1.0 (situs sudah `lang="id"`). Versi bilingual (ID/EN) menjadi item opsional v1.1 bila menyasar perekrut internasional.

---

## Rekomendasi
1. **Isi placeholder secepatnya** (proyek, Formspree ID, sosial) — situs belum "siap pamer" tanpa ini.
2. **Tambah 1–2 bukti nyata** (screenshot proyek, tautan demo langsung) untuk kredibilitas.
3. **Sediakan CV PDF** yang bisa diunduh dari Hero/Contact.
4. **Pasang analitik ringan & privasi-aware** (mis. Plausible/Umami) bila ingin mengukur KPI §7 — ingat tambahkan domainnya ke CSP.
5. **Pertimbangkan domain kustom** untuk personal branding yang lebih kuat.
6. **Siapkan OG image PNG 1200×630** agar tampilan share di sosmed bagus (SVG tak didukung sebagian scraper).

## Outline (kerangka dokumen ini)
1. Ringkasan & Problem Statement
2. Tujuan & Sasaran (Goals/Non-Goals)
3. Target Pengguna/Persona
4. Lingkup Fitur
5. Alur Pengguna
6. Persyaratan Non-Fungsional
7. Metrik Keberhasilan (KPI)
8. Kriteria Penerimaan
9. Rilis & Tahapan
10. Risiko & Asumsi
11. Pertanyaan Terbuka
+ Rekomendasi
