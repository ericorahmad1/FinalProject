# BRD — Portfolio Pribadi Erico Rahmad

> **Status:** Draf v0.1 · **Penyusun:** Erico Rahmad · **Terakhir diperbarui:** 2026-05-29
> BRD berfokus pada **alasan bisnis** (mengapa), sedangkan PRD berfokus pada **apa & bagaimana produknya**. Bagian **TODO** perlu dilengkapi pemilik.

## 1. Latar Belakang
Erico Rahmad menyelesaikan final project JavaScript Development (Hacktiv8 × DevC). Situs portfolio digunakan sebagai aset **personal branding** untuk mendukung pencarian peluang kerja/proyek. Versi lama (Bootstrap 4/jQuery, multi-halaman) tidak representatif secara teknis, sehingga dibangun ulang.

## 2. Tujuan Bisnis (Business Objectives)
- **BO1:** Meningkatkan peluang dilirik perekrut/klien melalui kehadiran online yang profesional.
- **BO2:** Menyediakan satu tautan ringkas yang bisa dibagikan di CV, LinkedIn, dan lamaran.
- **BO3:** Menunjukkan kompetensi teknis terkini (web modern, performa, keamanan) sebagai bukti skill.
- **BO4 (target terukur, usulan — sesuaikan):** Memperoleh ≥ 3 panggilan interview / inquiry relevan dalam 3 bulan pertama setelah situs dibagikan secara publik.

## 3. Pemangku Kepentingan (Stakeholders)
| Peran | Pihak | Kepentingan |
|---|---|---|
| Pemilik / pembuat | Erico Rahmad | Branding, akuisisi peluang |
| Pengguna akhir | Perekrut, klien, sesama dev | Menilai & menghubungi |
| Penilai akademik | Mentor Hacktiv8 × DevC | Kelulusan final project |
| Penyedia layanan | GitHub Pages, Formspree | Hosting & penerusan pesan |

## 4. Kebutuhan Bisnis → Solusi
| # | Kebutuhan bisnis | Solusi pada produk |
|---|---|---|
| BR1 | Tampil profesional & modern | Single-page Astro + Tailwind, dark mode, responsif |
| BR2 | Mudah dihubungi | Form Contact (Formspree) tanpa backend |
| BR3 | Memuat cepat di perangkat apa pun | Statis, gambar dioptimasi, zero/min-JS |
| BR4 | Aman & menjaga privasi | CSP ketat, email tidak diekspos, anti-spam |
| BR5 | Murah & mudah dirawat | Hosting gratis GitHub Pages, konten data-driven |

## 5. Lingkup (Scope)
**In-scope:** situs statis single-page (Home/About/Portfolio/Contact), deploy otomatis, dark mode, SEO dasar.
**Out-of-scope:** backend/database, autentikasi, blog/CMS, e-commerce, pembayaran, dukungan multi-bahasa (kecuali diputuskan kemudian).

## 6. Batasan & Asumsi (Constraints & Assumptions)
- **Biaya:** nol/sangat rendah → GitHub Pages (gratis) + Formspree (free tier).
- **Teknis:** statis, tanpa server → tidak ada logika sisi-server; pengiriman form via layanan eksternal.
- **Platform:** GitHub Pages tidak bisa set HTTP header (CSP via `<meta>`); situs disajikan di subpath `/FinalProject`.
- **Asumsi:** pemilik akan menyediakan konten nyata (proyek, bio, sosial) dan akun Formspree.

## 7. Manfaat & Justifikasi (Business Value)
- Meningkatkan kredibilitas profesional dengan biaya mendekati nol.
- Aset reusable & mudah diperbarui (ubah `src/data/projects.ts`).
- Sekaligus menjadi bukti portofolio teknis itu sendiri.

## 8. Kriteria Sukses (Success Criteria)
- Situs live di GitHub Pages dan dapat dibagikan publik.
- Form Contact mengirim pesan ke email pemilik dengan andal.
- Memenuhi target kualitas teknis di PRD §7 (Lighthouse ≥95, dll.).
- Indikator hasil *(usulan — sesuaikan)*: ≥ 3 inquiry/interview relevan dan ≥ 5 pesan kontak per bulan dalam 3 bulan pertama pasca go-live.

## 9. Risiko & Mitigasi
| Risiko | Dampak | Mitigasi |
|---|---|---|
| Spam pada form | Inbox kotor | Honeypot + (opsi) reCAPTCHA Formspree |
| Kuota Formspree habis | Pesan gagal terkirim | Pantau kuota; upgrade bila perlu |
| Konten placeholder dibiarkan | Kesan tidak profesional | Checklist isi konten sebelum dibagikan |
| Ketergantungan layanan pihak ketiga | Form/hosting down | Pilihan alternatif (Netlify Forms, dsb.) |

## 10. Timeline & Milestone (indikatif)
| Milestone | Output | Target |
|---|---|---|
| M1 — Rebuild teknis | Situs MVP + deploy | ✅ Selesai (2026-05-29) |
| M2 — Pengisian konten | Proyek, bio, sosial, Formspree ID, OG PNG, CV PDF | Usulan: 2026-06-13 |
| M3 — Go-live publik | Dibagikan di CV/LinkedIn | Usulan: 2026-06-20 |
| M4 — Iterasi | Analitik, domain kustom, bilingual (opsional) | Usulan: 2026-07+ |

---

## Rekomendasi
1. **Tetapkan target bisnis terukur** (BO/Success Criteria) agar dampak situs bisa dievaluasi, bukan sekadar "ada".
2. **Selesaikan M2 (konten)** sebelum membagikan tautan — ini penentu utama nilai bisnis.
3. **Tambahkan domain kustom + CV PDF** untuk meningkatkan kesan profesional.
4. **Pertimbangkan analitik privasi-aware** untuk mengukur kunjungan & klik kontak.
5. **Siapkan rencana cadangan layanan form** (mis. Netlify Forms) untuk mengurangi ketergantungan tunggal.

## Outline (kerangka dokumen ini)
1. Latar Belakang
2. Tujuan Bisnis
3. Pemangku Kepentingan
4. Kebutuhan Bisnis → Solusi
5. Lingkup (Scope)
6. Batasan & Asumsi
7. Manfaat & Justifikasi
8. Kriteria Sukses
9. Risiko & Mitigasi
10. Timeline & Milestone
+ Rekomendasi
