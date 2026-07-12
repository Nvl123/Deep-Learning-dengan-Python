window.BOOK_CONTENT = {
  chapters: [
    {
      id: "bab-1",
      number: "01",
      title: "Apa itu Deep Learning?",
      summary: "Apa sebenarnya kecerdasan buatan (Artificial Intelligence/AI)? Benarkah teknologi ini akan menggantikan manusia? Sejauh mana kemampuan AI saat ini, dan ke mana arah perkembangannya di masa depan?",
      status: "Tersedia",
      notebook: "notebooks/latihan-bab-01.ipynb",
      sections: [
        {
          id: "Artificial intelligence, machine learning, and deep learning",
          title: "Artificial intelligence, machine learning, and deep learning",
          paragraphs: [
            "Sebelum mempelajari konsep kecerdasan buatan (Artificial Intelligence atau AI) lebih jauh, penting untuk memahami hubungan antara AI, machine learning, dan deep learning. Ketiga istilah ini sering digunakan secara bergantian, padahal memiliki makna dan cakupan yang berbeda. AI merupakan konsep yang paling luas, machine learning merupakan bagian dari AI, sedangkan deep learning merupakan bagian dari machine learning. Dengan memahami hubungan tersebut, pembahasan mengenai AI akan menjadi lebih mudah dipahami.",
            "<figure><img src='assets/subset_ai.png' alt='Subset AI'><figcaption>Gambar 1.1: Hubungan AI, ML, dan DL</figcaption></figure>"
          ],
        },
        {
          id: "Artificial intelligence",
          title: "Artificial intelligence",
          paragraphs: [
            "Kecerdasan buatan (**Artificial Intelligence** atau *AI*) mulai berkembang sebagai bidang penelitian pada tahun 1950-an. Pada masa itu, sekelompok ilmuwan di bidang ilmu komputer mulai mempertanyakan apakah komputer dapat dibuat untuk **berpikir** seperti manusia. Pertanyaan tersebut menjadi awal lahirnya berbagai penelitian yang hingga kini masih terus berkembang.",          
            "Meskipun berbagai gagasan yang mendasari AI telah muncul beberapa tahun bahkan beberapa dekade sebelumnya, istilah artificial intelligence secara resmi diperkenalkan sebagai bidang penelitian pada tahun 1956. Saat itu, **John McCarthy**, seorang asisten profesor matematika di **Dartmouth College**, mengadakan sebuah workshop penelitian yang mempertemukan sejumlah ilmuwan untuk membahas kemungkinan menciptakan mesin yang mampu meniru kecerdasan manusia. Mereka berangkat dari gagasan bahwa setiap aspek pembelajaran dan kecerdasan pada dasarnya dapat dijelaskan secara sistematis sehingga dapat disimulasikan oleh sebuah mesin. Workshop tersebut juga bertujuan mencari cara agar mesin mampu menggunakan bahasa, membentuk konsep dan abstraksi, menyelesaikan berbagai permasalahan yang selama ini hanya dapat dilakukan manusia, serta terus meningkatkan kemampuannya sendiri.",
            "Pada akhir workshop, berbagai tujuan tersebut memang belum berhasil dicapai sepenuhnya. Namun, pertemuan tersebut menjadi tonggak penting dalam sejarah AI karena dihadiri oleh banyak ilmuwan yang kemudian menjadi pelopor di bidang ini. Dari sinilah lahir revolusi intelektual yang hingga saat ini masih terus mendorong perkembangan teknologi kecerdasan buatan.",
            "Secara sederhana, AI dapat didefinisikan sebagai :",
            "> Upaya untuk mengotomatisasi tugas-tugas intelektual yang umumnya dilakukan oleh manusia", 
            "AI merupakan bidang yang sangat luas yang mencakup **machine learning** dan **deep learning**, serta berbagai pendekatan lain yang tidak selalu melibatkan proses pembelajaran.",
            "Sebelum tahun 1980-an, sebagian besar penelitian AI bahkan belum berfokus pada konsep pembelajaran (learning). Sebagai contoh, program catur pada masa awal dikembangkan menggunakan aturan-aturan yang ditulis secara eksplisit oleh programmer sehingga belum termasuk ke dalam kategori machine learning. Pada saat itu, banyak peneliti meyakini bahwa kecerdasan buatan setingkat manusia dapat diwujudkan dengan menyusun kumpulan aturan yang sangat banyak untuk memanipulasi pengetahuan yang tersimpan dalam basis data. Pendekatan ini dikenal sebagai **[symbolic AI| Pendekatan AI yang menggunakan seperangkat aturan logika dan simbol untuk memproses informasi (If-Else)]** dan menjadi paradigma utama dalam penelitian AI sejak tahun 1950-an hingga akhir 1980-an. Popularitasnya mencapai puncak pada era berkembangnya [expert systems| (Sistem Pakar) adalah salah satu cabang dari symblic AI yang dirancang untuk meniru kemampuan pengambilan keputusan seorang pakar manusia pada bidang tertentu dengan menggunakan kumpulan aturan (rule-based system).] pada dekade 1980-an.",
            "Meskipun symbolic AI berhasil menyelesaikan berbagai permasalahan yang memiliki aturan jelas dan bersifat logis, seperti permainan catur, pendekatan ini mengalami kesulitan ketika diterapkan pada permasalahan yang lebih kompleks dan tidak memiliki aturan yang pasti, seperti klasifikasi gambar, pengenalan suara, maupun penerjemahan bahasa alami. Keterbatasan tersebut mendorong lahirnya pendekatan baru, yaitu machine learning, yang kemudian secara bertahap menggantikan dominasi symbolic AI dalam berbagai bidang penerapan AI."
          ]
        },
        {
          id: "mengapa-penting",
          title: "Mengapa deep learning penting?",
          paragraphs: [
            "Pendekatan ini bekerja sangat baik untuk data yang rumit seperti gambar, suara, dan teks. Pola pada data tersebut sulit dijelaskan dengan aturan manual, tetapi dapat dipelajari dari banyak contoh.",
            "Deep learning bukan jawaban untuk semua masalah. Hasilnya tetap bergantung pada kualitas data, tujuan yang jelas, dan cara kita mengevaluasi model."
          ],
          points: ["Cocok untuk pola yang **kompleks**.", "Biasanya membutuhkan *cukup banyak data*.", "Hasil model harus tetap diperiksa manusia."]
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
