window.BOOK_CONTENT = {
  chapters: [
    {
      id: "bab-1",
      number: "01",
      title: "Apa itu Deep Learning?",
      summary: "Mengenal cara komputer belajar dari contoh, serta hubungan sederhana antara AI, machine learning, dan deep learning.",
      status: "Tersedia",
      notebook: "notebooks/latihan-bab-01.ipynb",
      sections: [
        {
          id: "gambaran-besar",
          title: "Gambaran besar",
          paragraphs: [
            "Deep learning adalah cara membuat komputer belajar dari banyak contoh. Kita tidak perlu menulis seluruh aturan satu per satu. Komputer mencari pola yang berguna dari data yang diberikan.",
            "Contohnya, untuk mengenali kucing, kita memperlihatkan banyak gambar beserta labelnya. Model kemudian belajar ciri visual yang sering muncul pada gambar kucing."
          ],
          points: ["Data adalah contoh yang dipelajari.", "Model adalah pola yang dibentuk komputer.", "Prediksi adalah jawaban model untuk data baru."]
        },
        {
          id: "ai-ml-dl",
          title: "AI, machine learning, dan deep learning",
          paragraphs: [
            "Artificial intelligence (AI) adalah bidang besarnya: usaha membuat mesin melakukan tugas yang biasanya membutuhkan kecerdasan manusia.",
            "Machine learning adalah bagian dari AI yang belajar melalui data. Deep learning adalah bagian dari machine learning yang memakai jaringan saraf dengan banyak lapisan."
          ]
        },
        {
          id: "mengapa-penting",
          title: "Mengapa deep learning penting?",
          paragraphs: [
            "Pendekatan ini bekerja sangat baik untuk data yang rumit seperti gambar, suara, dan teks. Pola pada data tersebut sulit dijelaskan dengan aturan manual, tetapi dapat dipelajari dari banyak contoh.",
            "Deep learning bukan jawaban untuk semua masalah. Hasilnya tetap bergantung pada kualitas data, tujuan yang jelas, dan cara kita mengevaluasi model."
          ],
          points: ["Cocok untuk pola yang kompleks.", "Biasanya membutuhkan cukup banyak data.", "Hasil model harus tetap diperiksa manusia."]
        },
        {
          id: "ringkasan",
          title: "Ringkasan bab",
          paragraphs: [
            "Deep learning membuat komputer belajar representasi dari contoh. Ia berada di dalam bidang machine learning, yang juga merupakan bagian dari AI. Setelah memahami gambaran ini, kita siap mengenal tensor dan cara data diproses oleh model."
          ]
        }
      ]
    },
    { id: "bab-2", number: "02", title: "Tensor dan operasi dasar", summary: "Bentuk data yang digunakan model dan cara mengolahnya.", status: "Segera hadir", notebook: null, sections: [] },
    { id: "bab-3", number: "03", title: "Memulai jaringan saraf", summary: "Dari data, proses belajar, hingga evaluasi hasil.", status: "Segera hadir", notebook: null, sections: [] }
  ]
};
