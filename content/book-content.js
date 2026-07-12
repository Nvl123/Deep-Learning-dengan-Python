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
          id: "Machine learning",
          title: "Machine learning",
          paragraphs: [
            "Pada [era Victoria | (Victorian era) adalah kurun waktu ketika Ratu Victoria memerintah Kerajaan Inggris, tepatnya dari tahun 1837 hingga 1901.] di Inggris, Lady Ada Lovelace merupakan sahabat sekaligus rekan kolaborasi Charles Babbage, penemu [Analytical Engine|Rancangan komputer mekanis serbaguna pertama di dunia yang didesain oleh Charles Babbage pada tahun 1837; menggunakan sistem kartu berlubang (punch cards) dan menjadi cikal bakal arsitektur komputer modern.], komputer mekanis serbaguna pertama yang pernah dirancang. Meskipun sangat visioner dan jauh melampaui zamannya, Analytical Engine pada saat dirancang pada dekade 1830-an dan 1840-an sebenarnya belum dimaksudkan sebagai komputer serbaguna, karena konsep komputasi serbaguna saat itu masih belum dikenal. Mesin tersebut hanya dirancang sebagai alat untuk mengotomatiskan berbagai perhitungan dalam bidang analisis matematika melalui mekanisme mekanis, sehingga diberi nama Analytical Engine.",
            "Dengan demikian, mesin ini merupakan hasil pengembangan dari berbagai upaya sebelumnya untuk merepresentasikan operasi matematika menggunakan roda gigi, seperti [Pascaline|Alat hitung mekanis (kalkulator) roda gigi pertama di dunia yang diciptakan oleh Blaise Pascal pada tahun 1642; dirancang khusus untuk melakukan operasi penjumlahan dan pengurangan secara otomatis.] dan [Step Reckoner|Alat hitung mekanis pertama yang dapat melakukan empat operasi aritmatika dasar (penjumlahan, pengurangan, perkalian, pembagian); diciptakan oleh Gottfried Wilhelm Leibniz pada tahun 1673 menggunakan mekanisme silinder bergerigi (Leibniz wheel)], yang merupakan penyempurnaan dari Pascaline. Pascaline sendiri dirancang oleh Blaise Pascal pada tahun 1642 ketika usianya baru 19 tahun. Alat ini merupakan kalkulator mekanis pertama di dunia yang mampu melakukan operasi penjumlahan dan pengurangan. Selanjutnya, Leibniz mengembangkan Step Reckoner yang menambahkan kemampuan untuk melakukan perkalian dan pembagian secara mekanis.",
            "Pada tahun 1843, Ada Lovelace mengemukakan pandangannya mengenai Analytical Engine sebagai berikut:",
            "> **Analytical Engine** sama sekali tidak memiliki kemampuan untuk menciptakan sesuatu yang benar-benar baru. Mesin ini hanya dapat melakukan apa pun yang kita perintahkan untuk dikerjakan. Perannya adalah membantu kita memanfaatkan pengetahuan yang telah kita miliki.",
            "Bahkan setelah hampir dua abad berlalu, pernyataan Lady Lovelace tersebut tetap menarik untuk direnungkan. Apakah komputer serbaguna benar-benar dapat **menciptakan** sesuatu yang baru, ataukah selamanya hanya akan menjalankan serangkaian proses yang sepenuhnya telah dipahami oleh manusia? Mungkinkah komputer memiliki pemikiran yang orisinal? Dapatkah komputer belajar dari pengalaman? Mampukah komputer menunjukkan kreativitas?",
            "Pernyataan tersebut kemudian dikutip oleh pelopor kecerdasan buatan, Alan Turing, dalam makalahnya pada tahun 1950 yang berjudul [Computing Machinery and Intelligence](https://courses.cs.umbc.edu/471/papers/turing.pdf). Dalam makalah tersebut, Turing menyebut pandangan Ada Lovelace sebagai Lovelace's Objection, yaitu argumen bahwa komputer tidak dapat menciptakan sesuatu yang benar-benar baru, melainkan hanya menjalankan instruksi yang diberikan. Makalah yang sama juga memperkenalkan [Turing Test|Metode pengujian kecerdasan kecerdasan buatan (AI) yang diusulkan oleh Alan Turing pada tahun 1950; bertujuan untuk menguji apakah suatu mesin mampu menunjukkan perilaku cerdas yang tidak dapat dibedakan dari manusia dalam percakapan berbasis teks.] serta berbagai konsep yang menjadi dasar perkembangan kecerdasan buatan (Artificial Intelligence/AI). Pada masa itu, Turing mengemukakan gagasan yang kontroversial bahwa, pada prinsipnya, komputer dapat dirancang untuk meniru berbagai aspek kecerdasan manusia.",
            "Agar komputer dapat melakukan tugas tertentu, seorang programmer menuliskan serangkaian aturan atau instruksi yang disebut program komputer. Program tersebut mengubah data masukan menjadi keluaran yang diinginkan. Prinsip ini serupa dengan cara Lady Ada Lovelace menyusun langkah-langkah yang harus dijalankan oleh Analytical Engine untuk menyelesaikan suatu perhitungan.",
            "Machine learning membalik pendekatan tersebut. Alih-alih manusia yang menentukan seluruh aturan secara eksplisit, mesin diberikan data masukan beserta jawaban yang benar, kemudian mesin mempelajari sendiri pola-pola di dalam data tersebut untuk menyimpulkan aturan yang diperlukan",
            "<figure><img src='assets/cara_lama_vs_machine_learning.png' alt='pendekatan lama vs machine learning'><figcaption>Gambar 1.2: Perbedaan pendekatan lama dan pendekatan machine learning</figcaption></figure>",
            "Berbeda dengan program komputer biasa, sistem machine learning tidak diberi aturan secara langsung. Sebaliknya, sistem dilatih menggunakan banyak contoh data. Dari contoh-contoh tersebut, sistem mempelajari pola yang kemudian digunakan untuk menyelesaikan tugas secara otomatis.",
            "Sebagai contoh, jika Anda ingin mengotomatiskan pemberian label pada foto-foto liburan, Anda dapat melatih sistem machine learning menggunakan banyak foto yang telah diberi label oleh manusia. Dari contoh-contoh tersebut, sistem mempelajari pola yang menghubungkan karakteristik gambar dengan label tertentu, seperti landscape (pemandangan) atau food (makanan).",
            "Meskipun machine learning baru mulai berkembang pesat pada dekade 1990-an, bidang ini dengan cepat menjadi cabang kecerdasan buatan (AI) yang paling populer dan paling berhasil. Perkembangan tersebut didorong oleh tersedianya perangkat keras yang semakin cepat serta kumpulan data (dataset) yang semakin besar.",
            "Machine learning memiliki keterkaitan erat dengan statistika matematika, tetapi keduanya berbeda dalam beberapa aspek penting. Hubungan ini dapat dianalogikan seperti hubungan antara ilmu kedokteran dan kimia. Kedokteran memang berlandaskan kimia, tetapi tidak dapat sepenuhnya direduksi menjadi kimia karena mempelajari sistem yang memiliki karakteristik dan prinsipnya sendiri.",
            "Berbeda dengan statistika klasik, machine learning umumnya menangani kumpulan data yang sangat besar dan kompleks, misalnya jutaan gambar digital yang masing-masing terdiri atas puluhan ribu piksel. Pada skala seperti ini, metode analisis statistik tradisional, seperti analisis Bayesian, sering kali menjadi tidak praktis untuk diterapkan.",
            "Akibatnya, machine learning, khususnya deep learning, memiliki landasan teori matematika yang relatif terbatas. Bidang ini lebih banyak berkembang sebagai disiplin rekayasa (engineering) yang berfokus pada penerapan. Berbeda dengan fisika teoretis atau matematika yang menekankan pengembangan teori, kemajuan machine learning terutama didorong oleh hasil eksperimen serta perkembangan perangkat lunak dan perangkat keras."
          ],
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
    { id: "bab-2", 
      number: "02", 
      title: "Tensor dan operasi dasar", 
      summary: "Bentuk data yang digunakan model dan cara mengolahnya.", 
      status: "Segera hadir", 
      notebook: null, 
      sections: [] },
    { id: "bab-3", number: "03", title: "Memulai jaringan saraf", summary: "Dari data, proses belajar, hingga evaluasi hasil.", status: "Segera hadir", notebook: null, sections: [] }
  ]
};
