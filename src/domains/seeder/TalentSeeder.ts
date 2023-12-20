import { TalentModel } from '../model/Talent';

export class TalentSeeder {
  async run(){
    const talents = [
      { 
        talentId: "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
        authId: "d1f83072-c6d6-4626-9981-5df048799758",
        description: "Seorang musisi dengan keahlian sebagai gitaris dan penyanyi. Saya suka mengeksplorasi berbagai genre musik dan sering tampil di acara-acara musik lokal.",
        verified_status: "verified",
        price: 150_000,
        rating: 4.5
      },
      { 
        talentId: "6b908512-a145-4e3b-b072-96af84b00d87",
        authId: "821b35f9-5ee0-425a-ba7a-59ecbc5ffe6e",
        verified_status: "verified", 
        price: 150_000,
        rating: 4.8
      },
      { 
        talentId: "c1124cfc-3f62-4f9a-8182-2819d0624da5",
        authId: "636ba364-904b-4133-9cb6-dbb1185b8611",
        verified_status: "verified", 
        price: 150_000,
        rating: 4
      },
      { 
        talentId: "4b00656e-374f-4b99-ae45-e079bac5f3ee",
        authId: "d720cbef-4f9a-4376-905f-b0dc1a6b3d3d",
        verified_status: "verified", 
        price: 75_000,
        rating: 4.5
      },
      {
        talentId: "fc0f6e4b-c397-40a4-a24c-d08b92aedc45",
        authId: "b792c9c6-ebd2-4083-aafc-bab1b4d256e3",
        description: "Saya sangat menyukai Kpop, girlband favorit saya TWICE, bias saya Dahyun, saya sangat menyukai setiap lagu TWICE. Saya juga suka berolahraga khususnya badminton",
        verified_status: "verified",
        price: 150000,
        rating: 3.2
    },
    {
        talentId: "674c14d8-ed13-471a-aabf-ceef4e5bc44b",
        authId: "fcd812ab-ae94-4ae8-8e93-9b870796bf79",
        description: "Saya adalah seorang seniman visual yang mencintai seni abstrak. Ruang dan desain adalah inspirasi utama saya. Karya saya menciptakan hubungan antara bentuk dan warna.",
        verified_status: "verified",
        price: 150000,
        rating: 4.4
    },
    {
        talentId: "f2427a83-eb72-47dd-aeaf-cf131b5cefa2",
        authId: "74d2d34e-6b18-42a9-8b5a-4fca3fe1c2ce",
        description: "Pecinta kuliner dan petualangan! Saya suka mencoba makanan baru dari berbagai tempat di dunia. Traveling adalah kegiatan favorit saya untuk menemukan kelezatan baru.",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "ac56a04d-aa98-4591-8e8c-2b188040c114",
        authId: "0c1c78b1-c769-4fd8-b391-7db40ba290f8",
        description: "Seorang pengembang perangkat lunak yang bersemangat tentang teknologi dan inovasi. Coding adalah bahasa kedua saya. Saya senang menciptakan solusi baru dan efisien.",
        verified_status: "verified",
        price: 150000,
        rating: 4.3
    },
    {
        talentId: "d7a31753-7f7a-4d3a-80ec-bca26e578735",
        authId: "5a920486-2e21-4d2e-b845-60e2ec2e422c",
        description: "Pengajar bahasa Inggris yang juga pencinta literasi. Saya suka membaca berbagai genre buku dan membagikan pengetahuan melalui pengajaran. Literasi adalah kunci menuju pengetahuan yang lebih luas.",
        verified_status: "verified",
        price: 150000,
        rating: 1.6
    },
    {
        talentId: "89341cbe-65d3-46bd-b905-32becfbbf0a4",
        authId: "f37ecd29-7e44-4e48-b329-eb4b8c7efa3e",
        description: "Saya adalah seorang gamer sejati yang gemar bermain game online. Pengalaman saya dalam dunia teknologi dan komputer membuat saya memiliki wawasan yang mendalam tentang perangkat keras dan perangkat lunak terkini.",
        verified_status: "verified",
        price: 150000,
        rating: 4.9
    },
    {
        talentId: "26dfb855-9598-463e-ab05-2669f5cd43ea",
        authId: "7b9669f4-6c9e-48de-ac2b-49b545c4427b",
        description: "Seorang petualang alam yang senang mengeksplorasi keindahan alam. Hobi saya juga termasuk fotografi dan seni. Saya sering mengabadikan momen-momen indah selama perjalanan saya.",
        verified_status: "verified",
        price: 150000,
        rating: 3.5
    },
    {
        talentId: "0c9d4ade-c343-4697-a4c0-765fc4e5cf87",
        authId: "b19f3fae-d016-477c-a6c5-c98ea2bcb047",
        description: "Seorang pecinta fashion dan makeup yang memiliki bakat dalam dunia modeling. Saya sering berpartisipasi dalam sesi pemotretan dan membagikan inspirasi gaya hidup melalui media sosial.",
        verified_status: "verified",
        price: 150000,
        rating: 2.6
    },
    {
        talentId: "029b75a9-3275-4de9-b923-317b8baf7693",
        authId: "6b55fec3-0266-4aeb-8973-20068b3871aa",
        description: "Pecinta kuliner dan senang memasak berbagai hidangan lezat. Selain itu, saya juga suka traveling dan mencicipi berbagai masakan khas setiap daerah yang saya kunjungi.",
        verified_status: "verified",
        price: 150000,
        rating: 3.4
    },
    {
        talentId: "4e96ef4d-9abc-404d-b4c8-6c47de26c5de",
        authId: "ce5e6eb8-9e48-4e12-85fd-067a07886959",
        description: "Seorang fotografer berpengalaman yang senang berkeliling dunia untuk menangkap keindahan dalam setiap momen. Saya juga seorang blogger yang membagikan cerita perjalanan dan tips fotografi.",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "b8917216-c9cb-4916-8343-de5578cbe6dd",
        authId: "cb66c290-aefd-4fdc-bfc3-7eb4fb218f41",
        description: "Pengembang perangkat lunak dengan keahlian dalam pemrograman, pengembangan situs web, dan pengembangan game. Saya senang menciptakan solusi perangkat lunak yang inovatif dan efisien.",
        verified_status: "verified",
        price: 150000,
        rating: 4.2
    },
    {
        talentId: "ddc39acb-d29b-43f0-abcd-f54fe7be2904",
        authId: "1e3d2b97-171a-4da4-9def-f49bc338049b",
        description: "Pengajar kebugaran yang berkomitmen untuk membantu orang mencapai gaya hidup sehat. Saya memiliki pengetahuan tentang nutrisi dan memberikan saran tentang kebiasaan hidup sehat.",
        verified_status: "verified",
        price: 150000,
        rating: 1.7
    },
    {
        talentId: "64183f98-8491-43e5-bcec-b057ae943a57",
        authId: "1e21b7f5-7396-40d2-9629-02c3a2d71af3",
        description: "Seorang seniman kreatif yang mahir dalam seni dan kerajinan, serta ilustrasi. Saya sering membuat karya seni unik dan mengajar kursus seni untuk berbagi keterampilan saya.",
        verified_status: "verified",
        price: 150000,
        rating: 1.5
    },
    {
        talentId: "9d603bbd-b489-481a-93db-c55c5ef77a09",
        authId: "ccdba73a-9492-465f-a2f8-939d9bf286a1",
        description: "Pecinta buku yang suka menulis dan memiliki pengetahuan mendalam tentang sastra. Saya senang berbagi rekomendasi buku dan menulis ulasan sastra di blog pribadi saya.",
        verified_status: "verified",
        price: 150000,
        rating: 2.6
    },
    {
        talentId: "1b34b365-c0bc-48d9-a66f-042ba1cf090d",
        authId: "8f216ead-3c88-4621-b397-37146bf73bbf",
        description: "Seorang fotografer pecinta alam yang gemar melakukan perjalanan untuk mengabadikan keindahan alam dan pemandangan luar ruangan. Pengalaman saya dalam fotografi alam membuat saya dapat menangkap momen-momen yang unik dan indah.",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "366dfd5c-24fb-41dc-a02f-b9aac74b5068",
        authId: "fc9cf120-c443-4649-a97f-5ee10505fd61",
        description: "Seorang pengembang web dengan keahlian dalam pemrograman dan desain antarmuka pengguna (UI/UX). Saya memiliki pengalaman dalam pengembangan berbagai proyek web dan aplikasi dengan fokus pada pengalaman pengguna yang optimal.",
        verified_status: "verified",
        price: 150000,
        rating: 3.5
    },
    {
        talentId: "c6ae2bb0-c5e7-4c1f-be87-df1e26d03409",
        authId: "5facd4ab-5e0d-4fc6-9bfa-71db595c1941",
        description: "Seorang pecinta film yang memiliki bakat dalam seni berakting dan penulisan skenario. Saya telah terlibat dalam beberapa proyek film independen dan senang berkolaborasi dengan individu kreatif untuk menciptakan karya seni yang menginspirasi.",
        verified_status: "verified",
        price: 150000,
        rating: 1.5
    },
    {
        talentId: "180a1ad1-1770-4fbf-9947-9c2aca84df84",
        authId: "c7bbb722-94c2-47bc-be72-1bfed554f24c",
        description: "Pengajar kebugaran dan penyuka gaya hidup sehat. Saya memiliki pengalaman dalam memberikan pelatihan pribadi dan membantu orang mencapai tujuan kebugaran mereka. Selain itu, saya juga mempromosikan gaya hidup sehat melalui konten online.",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "fc2e42d4-d372-4975-9a32-bee337e9fcca",
        authId: "9218caa1-51cf-4532-9047-7d6fb3d5661f",
        description: "Pecinta kerajinan tangan dan proyek DIY. Saya suka menciptakan barang-barang unik dan handmade. Pengalaman saya melibatkan berbagai proyek seperti pembuatan kerajinan, dekorasi rumah, dan aksesori fashion.",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "0e7021a4-74d3-42fc-846d-b61c3a430572",
        authId: "086a06a2-9f3f-45fd-8001-281dd2e46c7b",
        description: "Saya pecinta perjalanan yang suka belajar bahasa asing dan membaca buku. Seringkali saya mencari pengalaman baru di berbagai negara dan belajar tentang budaya lokal.",
        verified_status: "verified",
        price: 150000,
        rating: 4.1
    },
    {
        talentId: "92c9844f-7539-4fbb-9244-14e55cd5c137",
        authId: "9987150a-67a9-4b68-897c-9e2bb557662f",
        description: "Seorang pendaki handal yang senang menjelajahi alam bebas. Hobi saya juga termasuk fotografi, di mana saya menangkap keindahan alam dan momen petualangan saya.",
        verified_status: "verified",
        price: 150000,
        rating: 1.3
    },
    {
        talentId: "c5699028-6b9a-4fd7-933c-baa19157c0e9",
        authId: "e430d287-eb82-4505-a2c7-d2640e38c3e1",
        description: "Saya seorang pengajar yang berkomitmen untuk meningkatkan pembelajaran dengan mengintegrasikan teknologi. Memiliki pengalaman dalam mengajar mata pelajaran terkait teknologi dan memberdayakan siswa dengan keterampilan digital.",
        verified_status: "verified",
        price: 150000,
        rating: 4.7
    },
    {
        talentId: "c6d962f7-0181-4214-9d04-e712fe488330",
        authId: "81d66592-299f-4073-b478-183b9313a045",
        description: "Desainer kreatif dengan keahlian dalam seni grafis dan pemasaran digital. Saya suka menciptakan desain yang menarik dan efektif untuk memenuhi kebutuhan klien dan pasar.",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "cfffe071-49b8-40de-b365-35189509bc48",
        authId: "6544602f-fb66-4ffa-b547-4127ad0590ef",
        description: "Seorang penulis dan jurnalis dengan minat dalam dunia sastra. Suka mengeksplorasi berbagai topik dan menyampaikan cerita melalui tulisan, baik dalam bentuk artikel berita maupun karya sastra.",
        verified_status: "verified",
        price: 150000,
        rating: 1.6
    },
    {
        talentId: "bf2cd5f5-4486-4b1d-97f1-65a1a8e1ad0f",
        authId: "69753e89-c3c4-416c-b9e0-d1e261e673d2",
        description: "Saya seorang travel vlogger yang suka berpetualang dan membagikan pengalaman seru dalam perjalanan saya. Bergabunglah dengan saya untuk mengeksplorasi tempat-tempat menarik di seluruh dunia!",
        verified_status: "verified",
        price: 150000,
        rating: 4.7
    },
    {
        talentId: "d92bdb5b-2540-4013-b423-b3f8c24449ef",
        authId: "cfcff923-aa33-4fb5-82d3-480f997c0eb3",
        description: "Seorang pengembang perangkat lunak dengan keahlian dalam berbagai bahasa pemrograman. Saya tertarik pada perkembangan teknologi terbaru dan selalu mencari solusi kreatif untuk tantangan pemrograman.",
        verified_status: "verified",
        price: 150000,
        rating: 1.6
    },
    {
        talentId: "494eac09-90fe-4288-a4c2-5afd32f0dc7c",
        authId: "805008f9-47c3-4713-93a8-06618d097d9b",
        description: "Saya seorang seniman yang mencintai seni rupa, terutama lukisan dan patung. Karya-karya saya mencerminkan ekspresi diri dan imajinasi. Saya senang berbagi keindahan seni dengan orang lain.",
        verified_status: "verified",
        price: 150000,
        rating: 5
    },
    {
        talentId: "f34bf80f-11c7-4e58-90cc-a056e190bba3",
        authId: "dd26da4d-89c2-4194-b700-7ff886d10136",
        description: "Seorang pendidik yang peduli dengan perkembangan pendidikan. Saya memiliki pengalaman dalam mengajar dan memotivasi siswa untuk mencapai potensi terbaik mereka. Bergabunglah dalam perjalanan belajar bersama saya!",
        verified_status: "verified",
        price: 150000,
        rating: 2.5
    },
    {
        talentId: "a39ab56e-1d23-4314-b1d9-9ca15eec389c",
        authId: "83cf42d6-3dee-40e4-905e-0dd2a1fbf256",
        description: "Seorang penyanyi dan pemain piano yang menyukai berbagai genre musik. Saya telah tampil di berbagai acara dan menghasilkan beberapa karya orisinal. Mari bersama-sama merayakan keindahan musik!",
        verified_status: "verified",
        price: 150000,
        rating: 4.3
    },
    {
        talentId: "e255773a-8c7e-47ad-9e55-0fec4a82e8d7",
        authId: "54177923-eb9f-4fd7-b347-8c9234267731",
        description: "Saya seorang penulis yang gemar mengekspresikan pikiran dan perasaan melalui kata-kata. Membaca dan puisi adalah cara saya berkomunikasi dengan dunia. Temukan keindahan dalam setiap kata yang saya tulis.",
        verified_status: "verified",
        price: 150000,
        rating: 2.8
    },
    {
        talentId: "890c5cfb-eb70-457b-951d-883507428c70",
        authId: "a4d00bc1-9d8d-43b5-a324-868e4eae71b0",
        description: "Seorang fotografer dengan fokus pada potret dan pemandangan. Saya berusaha menangkap momen-momen berharga dengan keindahan visual. Bergabunglah dan jadilah bagian dari kisah yang saya dokumentasikan melalui lensa saya.",
        verified_status: "verified",
        price: 150000,
        rating: 3.6
    },
    {
        talentId: "469ca29b-d98e-4004-a265-849563cfd695",
        authId: "718faaaf-5707-4df3-bcde-db89c04c9ae2",
        description: "Pecinta alam dan hiking yang senang menjelajahi jalur-jalur hiking menantang. Saya membagikan pengalaman seru di alam dan memberikan tips untuk persiapan hiking yang aman dan menyenangkan.",
        verified_status: "verified",
        price: 150000,
        rating: 1.4
    },
    {
        talentId: "182d6738-fb01-4af9-872c-e49fb422c07a",
        authId: "5d1d4358-9d40-4bd9-9bab-5a58186dffda",
        description: "Seorang instruktur fitness yang berkomitmen untuk membantu orang mencapai gaya hidup sehat. Dengan pengetahuan tentang nutrisi dan kebugaran, saya siap membimbing Anda dalam perjalanan kebugaran Anda.",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "34b384a4-cbb9-4e39-9f85-8b80423df524",
        authId: "1b38a608-2800-4f07-af3f-b6417122a68f",
        description: "Seorang desainer grafis yang memiliki keahlian dalam menciptakan desain kreatif dan inovatif. Saya percaya bahwa desain memiliki kekuatan untuk menyampaikan pesan dengan cara yang unik dan menarik.",
        verified_status: "verified",
        price: 150000,
        rating: 4.3
    },
    {
        talentId: "a6cf12e1-a125-4b00-bf43-cb87cd934152",
        authId: "55bd1e50-425d-4bc5-ba59-0d3a008586de",
        description: "Saya seorang penulis dan pelatih penulisan kreatif. Hobi saya mencakup membaca berbagai genre buku dan memberikan pelatihan untuk mengembangkan keterampilan menulis.",
        verified_status: "verified",
        price: 150000,
        rating: 1
    },
    {
        talentId: "48645e45-09b3-43cc-a42d-01eefd058880",
        authId: "aef19191-25dd-4b6c-b6fe-1464fe48e992",
        description: "Seorang seniman digital yang ahli dalam seni rupa dan desain. Saya sering membuat karya seni digital dan desain grafis yang menginspirasi.",
        verified_status: "verified",
        price: 150000,
        rating: 3.1
    },
    {
        talentId: "f842424e-f907-4a51-9240-a446a6fe065c",
        authId: "5dc035d6-6b8b-44e9-848f-5b64d28315f0",
        description: "Aktor/Aktris dan pecinta seni panggung. Saya berpengalaman dalam berbagai pertunjukan teater dan memiliki hasrat dalam seni perfilman.",
        verified_status: "verified",
        price: 150000,
        rating: 1.8
    },
    {
        talentId: "ec2443c4-c121-4a6d-b960-229b0fced2ac",
        authId: "7a32477f-5380-4781-b6c0-137f1eac80d0",
        description: "Seorang pengembang web yang mahir dalam pemrograman dan pengembangan situs web. Saya aktif mengikuti perkembangan teknologi terkini.",
        verified_status: "verified",
        price: 150000,
        rating: 5
    },
    {
        talentId: "fc16bbc1-20ff-4fb5-96e6-9dc0f36d8a6b",
        authId: "e1dbd190-bc1c-4b7b-a91b-751669ac83af",
        description: "Pianis dan komposer musik dengan kecintaan pada berbagai genre musik. Saya sering membuat komposisi musik sendiri dan tampil dalam konser piano.",
        verified_status: "verified",
        price: 150000,
        rating: 3.1
    },
    {
        talentId: "6fd6e431-5504-437e-b149-a23722d28ead",
        authId: "6894e313-5edf-4760-b186-153048043781",
        description: "Seorang fotografer dan videografer yang ahli dalam mengambil gambar dan membuat konten visual. Saya juga memiliki keterampilan dalam pengeditan foto dan video.",
        verified_status: "verified",
        price: 150000,
        rating: 4.5
    },
    {
        talentId: "25a83546-6b39-4319-91b4-4a057dc9f768",
        authId: "99abfdc6-d1d9-45f2-9072-e5506cac2382",
        description: "Pecinta olahraga dan fitness yang menjadi pelatih untuk membantu orang mencapai tujuan kesehatan dan kebugaran mereka.",
        verified_status: "verified",
        price: 150000,
        rating: 3.8
    },
    {
        talentId: "a30011f6-eb60-414a-ae57-e83afd3429a8",
        authId: "85c913b9-aef4-4747-b011-cf40cb0aa5cd",
        description: "Seorang penyanyi dan vokalis dengan fokus pada genre musik pop. Saya sering tampil di berbagai acara dan menyanyikan lagu-lagu pop terbaru.",
        verified_status: "verified",
        price: 150000,
        rating: 4.7
    },
    {
        talentId: "3f28953a-0361-4379-b831-8e994274e598",
        authId: "23d5517b-7968-4f85-97f1-1e4fb86cfb13",
        description: "Petualang yang sering melakukan perjalanan dan menjadi pemandu wisata. Saya memiliki pengetahuan mendalam tentang destinasi wisata dan keahlian sebagai pemandu.",
        verified_status: "verified",
        price: 150000,
        rating: 1.8
    },
    {
        talentId: "11eb224e-0956-4e13-93a6-ce60426a0124",
        authId: "610116a9-8511-478b-9f41-1b137fc58b5a",
        description: "Seorang pencinta buku dan senang menulis puisi. Saya memiliki koleksi buku yang luas dan sering menulis karya-karya kreatif dalam bentuk puisi.",
        verified_status: "verified",
        price: 150000,
        rating: 1.6
    },
    {
        talentId: "bafee4f6-cb52-4636-9617-398f3868ef35",
        authId: "b3ed0c72-f8da-4fab-919a-caf10ade3c68",
        description: "Seorang pengembang perangkat lunak yang ahli dalam pemrograman dan pengembangan web. Saya memiliki pengalaman dalam proyek-proyek besar dan memiliki kemampuan yang kuat dalam menyelesaikan masalah.",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "c3318550-6af5-42a2-86b3-08498b54c652",
        authId: "f4d9cbda-0f25-485d-82c1-0e32aa40ccc1",
        description: "Seorang desainer grafis yang memiliki keahlian dalam seni digital dan ilustrasi. Saya senang menciptakan karya seni visual yang unik dan kreatif.",
        verified_status: "verified",
        price: 150000,
        rating: 1
    },
    {
        talentId: "18857854-05cb-4c9a-9464-4f376e261c52",
        authId: "8d4f0a68-41b6-407e-bd34-cb28240dacf5",
        description: "Seorang travel blogger yang membagikan petualangan dan pengalaman melalui fotografi dan videografi. Saya senang menjelajahi tempat-tempat baru dan berbagi cerita melalui media sosial.",
        verified_status: "verified",
        price: 150000,
        rating: 3.8
    },
    {
        talentId: "8e1580d7-e778-457c-b77a-990c6a37fd70",
        authId: "4f33e28a-4e5e-4aab-ab69-48631a7d48df",
        description: "Seorang pendidik yang berkomitmen untuk memberikan pendidikan berkualitas. Saya memiliki pengalaman sebagai guru dan pengajar dalam berbagai mata pelajaran.",
        verified_status: "verified",
        price: 150000,
        rating: 4.9
    },
    {
        talentId: "8a126c7b-014b-42c6-b773-a8d553b49801",
        authId: "e48edbb6-edd9-4153-bcc8-db1fd4f75113",
        description: "Pengajar senam dan fitness yang berdedikasi untuk membantu orang mencapai gaya hidup sehat. Saya memiliki sertifikasi dalam instruksi senam dan kesehatan.",
        verified_status: "verified",
        price: 150000,
        rating: 1.8
    },
    {
        talentId: "44a99da4-3c55-4a41-b277-8dd5c5933165",
        authId: "3600f7ac-c302-4905-9895-63ad6a05b843",
        description: "Saya adalah seorang penulis dan penyair yang gemar menulis berbagai jenis karya sastra. Membaca-buku favorit saya meliputi klasik dan sastra modern.",
        verified_status: "verified",
        price: 150000,
        rating: 4.4
    },
    {
        talentId: "8a061039-6e31-48d1-9b95-8835af41eab5",
        authId: "c810e8e7-7638-4946-b165-bfc75d73fc95",
        description: "Seorang desainer grafis dan seniman visual yang memiliki kecintaan terhadap seni rupa. Keahlian saya termasuk ilustrasi digital dan desain kreatif.",
        verified_status: "verified",
        price: 150000,
        rating: 2.3
    },
    {
        talentId: "83feee56-1ad7-4bc1-bdb6-af716bc96d0c",
        authId: "863740c7-6e70-4e30-9c1e-4e6c4906c5e6",
        description: "Saya adalah seorang aktor yang memiliki pengalaman dalam dunia perfilman. Saya juga memiliki ketertarikan dalam sutradara dan seni pembuatan film.",
        verified_status: "verified",
        price: 150000,
        rating: 1.8
    },
    {
        talentId: "bacf4cdb-827b-4fc7-9863-8d5bceb04076",
        authId: "8618ada5-8af7-441d-b208-91ae548e992f",
        description: "Seorang ahli teknik dan pengembang perangkat lunak dengan minat khusus dalam robotika. Saya sering terlibat dalam proyek-proyek pemrograman dan pengembangan teknologi.",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "0fe3196b-75ac-4965-8f3e-4200fb821fa4",
        authId: "8c6488ef-8fce-4042-842b-fa0fe25bea52",
        description: "Seorang fotografer dan videografer yang ahli dalam mengambil gambar dan membuat konten visual. Saya juga memiliki keterampilan dalam pengeditan foto dan video.",
        verified_status: "verified",
        price: 150000,
        rating: 3.6
    },
    {
        talentId: "7dc481ba-a908-42a3-8fad-08467e8bbfd2",
        authId: "e188e6e1-9a75-4784-82f5-f0bb5fa0f377",
        description: "Saya memiliki kasih sayang yang besar terhadap binatang. Aktif dalam kegiatan konservasi dan memiliki pengalaman dalam merawat berbagai jenis hewan peliharaan.",
        verified_status: "verified",
        price: 150000,
        rating: 2.5
    },
    {
        talentId: "89e8b4a5-7e58-49d7-8887-8bde718435d5",
        authId: "c485ac96-ba03-4650-91df-eb22a0c0bbb1",
        description: "Seorang praktisi meditasi dan yoga yang memiliki perhatian khusus terhadap kesehatan mental. Saya senang berbagi teknik relaksasi untuk meningkatkan kesejahteraan.",
        verified_status: "verified",
        price: 150000,
        rating: 2.9
    },
    {
        talentId: "4c4974df-9563-452a-bda5-586a291a8547",
        authId: "140799af-e414-48bf-9f6d-fbb4f1b11b46",
        description: "Seorang seniman seni rupa yang juga memiliki bakat dalam dunia film dan akting. Saya senang menciptakan karya seni visual dan berpartisipasi dalam proyek-proyek film independen.",
        verified_status: "verified",
        price: 150000,
        rating: 1.5
    },
    {
        talentId: "bebf03bf-4b5c-421e-b84d-b07ca1054278",
        authId: "52c6fd62-2b13-4285-a065-ef77da46f42a",
        description: "Seorang ahli teknologi dengan keahlian dalam pemrograman dan inovasi. Saya sering mengembangkan aplikasi dan solusi teknologi untuk memecahkan masalah sehari-hari.",
        verified_status: "verified",
        price: 150000,
        rating: 2.1
    },
    {
        talentId: "6106d116-96c8-4775-8111-0c4b9077dc49",
        authId: "43e2c261-ec9c-425f-99dc-eac64ea364f0",
        description: "Seorang musisi dengan keahlian sebagai gitaris dan penyanyi. Saya suka mengeksplorasi berbagai genre musik dan sering tampil di acara-acara musik lokal.",
        verified_status: "verified",
        price: 150000,
        rating: 2.8
    },
    {
        talentId: "7fbb699f-bd88-46e9-94fb-6088e5233a30",
        authId: "d1840d1c-d5d4-4325-9b9f-184192d8f346",
        description: "Desainer grafis dengan fokus pada illustrasi dan identitas merek. Saya memiliki pengalaman dalam menciptakan desain yang kreatif dan menarik.",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "c6e3703a-1101-42d8-8a91-83b12733ebc5",
        authId: "b391f616-3f41-4959-8248-731406e424b1",
        description: "Seorang penulis dengan minat dalam penulisan buku dan puisi. Saya senang berbagi cerita dan pengalaman melalui kata-kata yang indah.",
        verified_status: "verified",
        price: 150000,
        rating: 2.9
    },
    {
        talentId: "7569cad6-a50b-43d0-a6f6-767eeca6c78b",
        authId: "d7aca8ed-4433-4645-adea-d46368be2c31",
        description: "Seorang pendidik yang berkomitmen untuk memberikan pembelajaran yang berkualitas. Saya memiliki keahlian dalam mengajar bahasa Inggris dan sering terlibat dalam proyek-proyek pendidikan.",
        verified_status: "verified",
        price: 150000,
        rating: 1.6
    },
    {
        talentId: "22a01486-5175-4996-bcf9-37da5ee8e161",
        authId: "83d1bb56-f0ba-4775-b2fa-711b6471c9ec",
        description: "Pengajar|kebugaran yang memiliki dedikasi untuk membantu orang mencapai tujuan kesehatan mereka. Saya ahli dalam merancang program latihan yang efektif.",
        verified_status: "verified",
        price: 150000,
        rating: 3.8
    },
    {
        talentId: "472186c2-1d03-4e3d-96fb-924efa8a225c",
        authId: "00fdca23-0242-4c4e-b7cd-0fe493ec85a1",
        description: "Seorang travel blogger yang senang berbagi pengalaman perjalanan dan review destinasi wisata. Saya sering melakukan petualangan untuk menemukan tempat-tempat unik dan menarik.",
        verified_status: "verified",
        price: 150000,
        rating: 3.6
    },
    {
        talentId: "4740e9c8-2fdf-48a5-b7f2-c45da2f25339",
        authId: "291ed023-1d88-41e8-af80-758e64a67c11",
        description: "Pembuat konten yang aktif di platform YouTube. Saya menciptakan video-vlog kreatif tentang berbagai topik yang menarik perhatian pemirsa.",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "22cf56e3-c73d-4678-a176-6478d9cbc59b",
        authId: "27bf90e5-cb7a-4549-8eb0-b6fe9cb01c74",
        description: "Seorang desainer interior dengan keahlian dalam arsitektur dan dekorasi. Saya suka menciptakan ruang yang indah dan fungsional.",
        verified_status: "verified",
        price: 150000,
        rating: 2.9
    },
    {
        talentId: "b4d2fe7c-1e5f-4fb0-ba86-a0685baa823d",
        authId: "bcc8f889-24d7-433c-83b6-6ba5fd476121",
        description: "Seorang pengajar bahasa yang gemar membaca buku. Saya memiliki pengalaman mengajar berbagai tingkat kemampuan bahasa dan senang membagikan pengetahuan melalui kegiatan belajar yang menyenangkan.",
        verified_status: "verified",
        price: 150000,
        rating: 2.7
    },
    {
        talentId: "3bfdaff9-5796-49bb-bfe9-014eaeb897c5",
        authId: "a439f77f-db5a-4b8c-b0e7-55d40699f64d",
        description: "Seorang seniman yang memiliki ketertarikan dalam seni pertunjukan. Saya mahir dalam menari dan berakting di atas panggung. Selain itu, saya juga aktif dalam berbagai kegiatan seni komunitas.",
        verified_status: "verified",
        price: 150000,
        rating: 1.8
    },
    {
        talentId: "93ac984d-cb32-4ded-8863-91b6cd380bca",
        authId: "e7de4c3a-4d60-4f3d-b5d6-7c37216a2161",
        description: "Seorang desainer grafis dan illustrator dengan kreativitas tinggi. Saya memiliki pengalaman dalam menciptakan desain visual yang menarik dan unik. Karya-karya saya sering kali dipublikasikan di berbagai platform.",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "4f0a8997-c297-4546-9e2b-fcd533e6507c",
        authId: "d5b51034-0573-41ca-9efd-a4f0464e63cd",
        description: "Seorang peneliti dengan minat dalam ilmu pengetahuan dan teknologi. Saya memiliki latar belakang pendidikan yang kuat dan aktif terlibat dalam penelitian-penelitian terkini di bidang teknologi.",
        verified_status: "verified",
        price: 150000,
        rating: 3.1
    },
    {
        talentId: "ac67cba9-6a1b-42c0-adc0-6fe5dd3591c2",
        authId: "bbd8138d-94e5-428d-8776-869fa9438e15",
        description: "Praktisi yoga yang juga memiliki minat dalam meditasi dan kesehatan holistik. Saya sering memberikan kelas yoga dan berbagi tips kesehatan melalui platform online.",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "4eb80d19-1a49-480e-82d7-5ee84b845e69",
        authId: "7192677d-05ed-4b3f-8bb7-31b39ab687b2",
        description: "Seorang programmer yang ahli dalam pengembangan web dan aplikasi mobile. Saya memiliki pengalaman dalam berbagai proyek pengembangan perangkat lunak dan terus memperbarui keterampilan teknis saya.",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "698b597a-e83b-4483-b2ea-5f115bcc3dd4",
        authId: "580136fd-fa36-431b-9220-ffafcac14078",
        description: "Seorang pengajar matematika yang penuh semangat. Saya memiliki metode pengajaran yang kreatif dan interaktif untuk membantu siswa memahami konsep matematika dengan mudah. Selain itu, saya juga aktif dalam kegiatan edukasi di komunitas.",
        verified_status: "verified",
        price: 150000,
        rating: 4.3
    },
    {
        talentId: "aea6b0d5-16b1-4a43-9543-9b518aca0b87",
        authId: "300ee49c-137a-4b30-9d28-556264eca2e4",
        description: "Fotografer perjalanan yang mencintai keindahan alam dan pemandangan. Saya memiliki portofolio yang kaya dengan foto-foto lanskap yang menakjubkan dari berbagai tempat di seluruh dunia. Sering berkolaborasi dengan majalah perjalanan untuk berbagi cerita melalui gambar.",
        verified_status: "verified",
        price: 150000,
        rating: 2.8
    },
    {
        talentId: "75d2d0c0-a9d2-4de4-88f7-46f38ddab13f",
        authId: "4363e3fb-0779-466a-bc52-5dba556c5c0b",
        description: "Seorang penulis yang gemar menulis cerpen dan novel. Karya-karya saya sering kali mengeksplorasi tema-tema kehidupan sehari-hari dan kompleksitas hubungan antarmanusia. Suka berbagi kisah inspiratif melalui tulisan saya.",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "85b5f43e-0e28-468a-bbdc-515d99c09a66",
        authId: "241a2427-dd72-498e-8330-244b064b8fe1",
        description: "Animator berbakat dengan fokus pada animasi 3D dan desain karakter. Saya telah bekerja pada berbagai proyek animasi dan memiliki keahlian dalam menciptakan karakter-karakter yang menarik. Selalu mencari tantangan baru dalam dunia animasi.",
        verified_status: "verified",
        price: 150000,
        rating: 3.3
    },
    {
        talentId: "3c20c6ad-827a-4732-8a53-443b60693120",
        authId: "02da88f9-c161-4ce7-b458-fe1883606027",
        description: "Seniman lukis yang mencintai kreativitas melalui cat dan kanvas. Gaya lukisan saya bervariasi, mulai dari realisme hingga abstrak. Sering mengadakan pameran seni untuk membagikan karya seni dan memperluas jaringan dalam dunia seni.",
        verified_status: "verified",
        price: 150000,
        rating: 4.1
    },
    {
        talentId: "cbf53ec5-b9cf-4597-b08b-4a2659faff44",
        authId: "ba4071e7-a460-4fc1-b944-2ee4b7b86224",
        description: "Psikolog yang berkomitmen untuk membantu individu mengatasi tantangan kesehatan mental. Menyediakan layanan konseling dengan pendekatan yang empati dan terapeutik. Sering memberikan seminar dan workshop untuk meningkatkan kesadaran tentang kesehatan mental.",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "89f5bf65-aa1c-4b74-9a82-cdc3ab861d31",
        authId: "88d1eded-4456-4339-800d-6cd3cd66894e",
        description: "Penyanyi dengan keahlian khusus dalam musikalisasi puisi dan vokal. Saya sering tampil di acara-acara seni dan menghasilkan karya seni yang menyatukan kata-kata indah dengan melodi memikat.",
        verified_status: "verified",
        price: 150000,
        rating: 3.8
    },
    {
        talentId: "6e5991cc-0291-4c9c-9668-f3b7f0ad4c1f",
        authId: "04d7b5f9-9ccb-43a7-b228-eb0ebf1573cb",
        description: "Dokter yang berfokus pada pengobatan holistik. Saya mengintegrasikan pendekatan medis konvensional dengan terapi alternatif untuk merawat pasien secara menyeluruh. Selalu berusaha untuk meningkatkan kesehatan dan kesejahteraan masyarakat.",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "f9b93b0f-db1b-4613-8767-292b7e29e9c9",
        authId: "3ea880d2-0e5e-4f04-a5d9-9ff03def2632",
        description: "Pengajar fitness yang ahli dalam Pilates dan kebugaran umum. Saya memiliki pengalaman melatih individu untuk mencapai tujuan kesehatan dan kebugaran mereka. Senang berbagi pengetahuan tentang gaya hidup sehat.",
        verified_status: "verified",
        price: 150000,
        rating: 5
    },
    {
        talentId: "53421c7b-5c31-4518-baa6-afd07473c8fb",
        authId: "845a2f33-02b4-472a-9ba6-4a186ba0fe1a",
        description: "Pembuat konten yang aktif di platform YouTube. Saya menciptakan video-vlog kreatif tentang berbagai topik yang menarik perhatian pemirsa.",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "3af93772-2cb0-4e98-85eb-37ea1eb79958",
        authId: "e4bc7ba1-8ea5-4419-bfdc-c7044d37d5c4",
        description: "Astronom yang memiliki ketertarikan dalam ilmu bintang dan pengamatan langit. Sering mengadakan acara pengamatan bintang untuk membagikan pengetahuan tentang alam semesta.",
        verified_status: "verified",
        price: 150000,
        rating: 1
    },
    {
        talentId: "197a7fe4-ca2e-430d-bf21-dc3929565e0e",
        authId: "89008e62-0fcf-41c2-b72e-f9015ff9f96e",
        description: "Perancang mode yang menciptakan desain busana unik. Saya selalu mencari inspirasi baru dan berkomitmen untuk menciptakan pakaian yang mencerminkan gaya dan kepribadian.",
        verified_status: "verified",
        price: 150000,
        rating: 5
    },
    {
        talentId: "9d7c4c25-b800-4ac3-baf8-aeab68a2c462",
        authId: "e3448572-06fd-4738-aeb1-67b1aef0bf90",
        description: "Koki dengan keahlian dalam memasak masakan tradisional dan kuliner dunia. Sering mengadakan kelas memasak dan menyukai eksperimen dengan bahan-bahan baru untuk menciptakan rasa yang unik.",
        verified_status: "verified",
        price: 150000,
        rating: 4.7
    },
    {
        talentId: "a88e96b9-c2d2-439e-9ace-71afddef6486",
        authId: "d4649185-867d-4cd0-b05e-86aeaec4e248",
        description: "Podcaster yang membahas topik pengembangan diri dan motivasi. Suka mengundang narasumber inspiratif untuk berbagi cerita dan tips untuk mencapai potensi terbaik dalam hidup.",
        verified_status: "verified",
        price: 150000,
        rating: 1.8
    },
    {
        talentId: "931c2814-1f84-404f-851a-7fb075835d95",
        authId: "951e879f-decc-4ac8-bc4b-8e1cfea2a925",
        description: "Pengajar bisnis yang membantu pemilik bisnis mengembangkan strategi bisnis yang efektif. Saya memiliki latar belakang dalam konsultasi bisnis dan senang melihat bisnis berkembang dan berhasil.",
        verified_status: "verified",
        price: 150000,
        rating: 3.1
    },
    {
        talentId: "fe74e622-43c9-4715-825a-034199bd48af",
        authId: "9cdca74c-95f3-46db-9093-26c64c803cf1",
        description: "Penyair dengan kecintaan pada kata-kata dan sastra. Sering menulis puisi yang menggugah dan mencerminkan berbagai aspek kehidupan. Aktif dalam pertemuan sastra untuk berbagi karya dan pengalaman dengan sesama penulis.",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "538f8301-6e6c-4820-9eb5-4fb077938ca9",
        authId: "fab2d2c1-0923-4a5d-91f8-f76f98d81915",
        description: "Dokumenter yang menghasilkan film-film dokumenter yang mendalam. Saya memiliki keahlian dalam menyampaikan cerita melalui medium visual dan sering berfokus pada isu-isu sosial dan lingkungan.",
        verified_status: "verified",
        price: 150000,
        rating: 3.1
    },
    {
        talentId: "cd23fd35-8b63-494a-a86d-5e3fc768c1ce",
        authId: "db6e73c2-abb6-4ef9-b5f6-daf15a5fb3d0",
        description: "Konsultan keuangan yang membantu individu dan perusahaan mengelola keuangan mereka. Saya memiliki pengalaman dalam memberikan saran investasi dan manajemen keuangan yang cerdas.",
        verified_status: "verified",
        price: 150000,
        rating: 4.1
    },
    {
        talentId: "8204f89e-38c2-469d-8562-a5e6ad814c34",
        authId: "2b01aee3-29b6-4b3b-9643-85d4adf5010b",
        description: "Penulis naskah dengan fokus pada drama dan skenario. Suka menciptakan cerita yang menggugah emosi dan memikat pemirsa. Sering berkolaborasi dengan sutradara dan produser untuk membawa kisah ke layar lebar.",
        verified_status: "verified",
        price: 150000,
        rating: 2.6
    },
    {
        talentId: "63033218-389c-4377-854c-dd415337b623",
        authId: "a3aad45e-335a-4e09-aeb7-17376c6fecdc",
        description: "Editor video yang berpengalaman dalam produksi multimedia dan efek visual. Saya memiliki pengalaman dalam menciptakan konten video yang menarik dan kreatif untuk berbagai platform.",
        verified_status: "verified",
        price: 150000,
        rating: 4.4
    },
    {
        talentId: "80603117-36c2-4c64-ae2a-df2bfe152caf",
        authId: "80941fa9-934f-4a40-9413-8261e6f4c2b5",
        description: "Pengajar yoga yang juga mempromosikan kesadaran diri dan kesehatan mental. Saya mengintegrasikan latihan yoga dengan prinsip mindfulness untuk membantu orang mencapai keseimbangan dalam kehidupan mereka.",
        verified_status: "verified",
        price: 150000,
        rating: 3.2
    },
    {
        talentId: "962d6932-2345-4a81-8935-3fec18407dbb",
        authId: "6b2b908f-1228-4d54-a807-be4e8247d68a",
        description: "Blogger yang fokus pada topik perjalanan dan gaya hidup. Sering membagikan pengalaman perjalanan, tips, dan tren gaya hidup melalui tulisan dan gambar. Suka berinteraksi dengan pembaca melalui platform blog.",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "16525664-936e-4d2f-881b-4ada79aaaa37",
        authId: "c1940dd6-69a5-49d6-b66a-5c7dc21dff82",
        description: "Fotografer yang mengkhususkan diri dalam pemotretan fashion dan editorial. Sering bekerja dengan model dan desainer untuk menciptakan portofolio yang menonjol. Memiliki visi artistik yang kuat dalam fotografi fashion.",
        verified_status: "verified",
        price: 150000,
        rating: 3.2
    },
    {
        talentId: "87ab9b72-a368-4f1f-b62e-deb71d03de32",
        authId: "d3bcf0ae-89f4-4601-88cd-c1a5ad6e6394",
        description: "Peneliti sosial dengan fokus pada studi gender dan keberagaman kultural. Saya aktif dalam proyek-proyek penelitian yang mendukung pemahaman tentang isu-isu sosial dan keberagaman di masyarakat.",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "18a3f3af-987f-4032-8b6f-18201756326b",
        authId: "7edb1c0c-8a1c-4aaa-80cc-b35199127dea",
        description: "Desainer interior dengan keahlian dalam arsitektur dan dekorasi. Suka menciptakan ruang yang estetis dan fungsional. Terampil dalam merancang berbagai jenis proyek, mulai dari rumah tinggal hingga ruang komersial.",
        verified_status: "verified",
        price: 150000,
        rating: 1.6
    },
    {
        talentId: "4a690553-dc10-422d-ad2d-8722ccb11640",
        authId: "458d71a1-863b-4c43-86f1-735d795246b1",
        description: "Guru seni yang mendidik siswa dalam seni rupa dan kreativitas. Sering mengadakan pameran seni siswa untuk mempromosikan karya-karya mereka. Memotivasi siswa untuk mengeksplorasi ekspresi kreatif mereka.",
        verified_status: "verified",
        price: 150000,
        rating: 3.2
    },
    {
        talentId: "b7e3b220-2c95-4400-9dd0-6eb73590f254",
        authId: "fb7160e7-dc00-4e35-bb97-0a84a5464e6e",
        description: "Perancang permainan dengan keahlian dalam pengembangan game. Suka menciptakan pengalaman bermain yang unik dan menarik. Terlibat dalam seluruh siklus pengembangan game, dari konsep hingga peluncuran.",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "1d152227-b6c7-4f1a-a878-f3ff5bd1ef4f",
        authId: "be00edd9-9594-4bf0-9c8d-3d777858a802",
        description: "Pendongeng yang spesialis dalam bercerita untuk anak-anak. Suka menggunakan cerita untuk mengajarkan nilai-nilai pendidikan dan moral. Sering tampil di sekolah-sekolah untuk memotivasi dan menghibur anak-anak.",
        verified_status: "verified",
        price: 150000,
        rating: 4.9
    },
    {
        talentId: "2a4b5b55-fabb-4dcc-9588-f1dab07e9225",
        authId: "2b9f0f10-2bb1-4ce0-9332-cbb0feed4080",
        description: "Konsultan keberlanjutan yang memberikan saran tentang praktik bisnis yang ramah lingkungan dan penerapan energi terbarukan. Berkomitmen untuk membantu perusahaan menuju arah yang lebih berkelanjutan.",
        verified_status: "verified",
        price: 150000,
        rating: 2.7
    },
    {
        talentId: "03d149b4-056b-4609-bc16-fc8bea09ff80",
        authId: "10975a7d-7754-4603-92c7-dcb2b6f9bac9",
        description: "Spesialis desain UX yang fokus pada menciptakan pengalaman pengguna yang intuitif dan menarik. Memahami kebutuhan pengguna dan menerapkan prinsip desain untuk meningkatkan kualitas produk digital.",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "4324ca33-e1b0-4693-8b66-5b48bef51e4d",
        authId: "2ea4daf2-688c-450c-af73-137c06009288",
        description: "Desainer interior dengan keahlian dalam arsitektur dan dekorasi. Suka menciptakan ruang yang estetis dan fungsional. Terampil dalam merancang berbagai jenis proyek, mulai dari rumah tinggal hingga ruang komersial.",
        verified_status: "verified",
        price: 150000,
        rating: 1.4
    },
    {
        talentId: "16ed6f94-cd3a-48be-9f06-248f25623112",
        authId: "35f75666-5908-4e84-a37d-a33aaa35bf5c",
        description: "Guru seni yang mendidik siswa dalam seni rupa dan kreativitas. Sering mengadakan pameran seni siswa untuk mempromosikan karya-karya mereka. Memotivasi siswa untuk mengeksplorasi ekspresi kreatif mereka.",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "8d68a99c-7644-4d2e-9c0b-9054ae202c38",
        authId: "f423a0bd-deb1-4e2e-ac04-2c882a88ff24",
        description: "Perancang permainan dengan keahlian dalam pengembangan game. Suka menciptakan pengalaman bermain yang unik dan menarik. Terlibat dalam seluruh siklus pengembangan game, dari konsep hingga peluncuran.",
        verified_status: "verified",
        price: 150000,
        rating: 4.5
    },
    {
        talentId: "bca6acfa-18bd-46ee-9896-ffcfd4c9f1d2",
        authId: "e89f03e8-6a31-464a-89bc-59dd309b31f6",
        description: "Ahli fisika dengan fokus pada penelitian energi nuklir. Suka menggali potensi energi alternatif dan berkontribusi pada pengembangan teknologi yang berkelanjutan.",
        verified_status: "verified",
        price: 150000,
        rating: 2.3
    },
    {
        talentId: "bfae1619-dac3-4082-bea8-8625548ac43a",
        authId: "16486b28-f284-4bf8-a533-92cec4fe36e9",
        description: "Pengajar bahasa asing yang memiliki keahlian dalam penerjemahan dan pemahaman budaya. Mendorong siswa untuk mengembangkan keterampilan bahasa dan memahami keanekaragaman budaya.",
        verified_status: "verified",
        price: 150000,
        rating: 3.6
    },
    {
        talentId: "7ca5ad83-b534-4aa7-8b55-553ed15636b5",
        authId: "6663f587-4c5d-4e38-b839-d9f5d119b705",
        description: "Pengajar senam yang mengajarkan kelas zumba dan kebugaran. Sering mengadakan sesi latihan yang energetik dan menyenangkan untuk membantu orang mencapai tujuan kebugaran mereka.",
        verified_status: "verified",
        price: 150000,
        rating: 2.9
    },
    {
        talentId: "cb29b720-efa0-4179-854b-2521c8f9c9e7",
        authId: "b148bf1c-b362-4673-be55-e2d482bbe94c",
        description: "Konsultan hubungan masyarakat yang ahli dalam membangun merek dan kehadiran online. Suka menciptakan strategi branding yang efektif dan memanfaatkan media sosial untuk mencapai audiens yang lebih luas.",
        verified_status: "verified",
        price: 150000,
        rating: 3.6
    },
    {
        talentId: "82040fd4-e978-4baf-95ee-b5ce4a1c4092",
        authId: "b2e20ba4-7204-4bcf-995f-b680d2498050",
        description: "Pemain cello dengan dedikasi pada musik klasik dan pertunjukan orkestra. Sering berkolaborasi dengan musisi lain untuk menciptakan harmoni yang indah. Menyukai eksplorasi musik dari berbagai periode.",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "f8518c6a-3883-46d9-89ba-08085d853c9a",
        authId: "7458cafc-8019-4195-aaba-b9c99884c2e9",
        description: "Ahli pemrograman Python yang berfokus pada machine learning dan kecerdasan buatan. Sering terlibat dalam proyek-proyek inovatif yang memanfaatkan teknologi terkini.",
        verified_status: "verified",
        price: 150000,
        rating: 2.7
    },
    {
        talentId: "6a55aaf6-4c71-4fba-ab7b-cf79c6bd22b9",
        authId: "090621f1-eebb-40e8-9100-00cb15b53239",
        description: "Animator karikatur dengan keahlian dalam animasi 2D dan karakter. Sering terlibat dalam proyek animasi yang menghibur dan memikat pemirsa. Menghasilkan karakter animasi yang unik dan menggemaskan.",
        verified_status: "verified",
        price: 150000,
        rating: 1.3
    },
    {
        talentId: "c524a8c4-cbca-49ea-ba23-1a79a88f98b9",
        authId: "b8beeb2e-d0b5-4747-b847-2398c1a7d388",
        description: "Pengajar matematika yang memberikan kursus online untuk membantu siswa memahami konsep matematika dengan cara yang interaktif dan menyenangkan. Mendorong pembelajaran mandiri dan pengembangan keterampilan matematika.",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "d7f32756-0a15-4280-9936-9f84069deeb3",
        authId: "73c20ccd-e509-41a3-8705-7c67b52810cf",
        description: "Pengembang aplikasi mobile yang memiliki keahlian dalam Flutter dan React Native. Sering membuat aplikasi mobile yang responsif dan inovatif. Memahami tren terkini dalam pengembangan aplikasi.",
        verified_status: "verified",
        price: 150000,
        rating: 2.7
    },
    {
        talentId: "f13cbfe4-b6ad-4e49-b2c2-e56b197b8407",
        authId: "30f40681-9892-474c-9b07-5ec76630b74e",
        description: "Konsultan keuangan pribadi yang membantu individu merencanakan dan mengelola keuangan mereka. Memberikan saran tentang investasi cerdas dan strategi perencanaan keuangan untuk mencapai tujuan keuangan.",
        verified_status: "verified",
        price: 150000,
        rating: 3.5
    },
    {
        talentId: "fd4126a9-6bee-48ec-b010-6da5c2179937",
        authId: "3bb13bb4-2d65-4801-a692-d4dfff08fbad",
        description: "Guru biologi yang berkomitmen pada pendidikan dan edukasi lingkungan. Sering mengadakan kegiatan belajar di alam terbuka dan memotivasi siswa untuk peduli terhadap keberlanjutan alam.",
        verified_status: "verified",
        price: 150000,
        rating: 4.3
    },
    {
        talentId: "0baf74b8-93aa-4b0f-ac7b-fc83e53fff2e",
        authId: "1cafba68-92cf-4adb-8050-c794d9b5331b",
        description: "Kreator konten kuliner yang menyajikan resep dan ulasan restoran melalui berbagai platform. Sering berbagi pengalaman kuliner dan memberikan inspirasi untuk memasak di rumah atau mencoba tempat makan baru.",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "429b90df-2a96-4dd5-bb7b-2cd6db827162",
        authId: "63d85b16-21b4-48e6-a3ad-4fbad9001470",
        description: "Penulis artikel ilmiah dengan fokus pada penelitian dan ilmu pengetahuan. Sering menerbitkan tulisan di jurnal-jurnal ilmiah dan berkontribusi pada pengembangan pengetahuan dalam bidang tertentu.",
        verified_status: "verified",
        price: 150000,
        rating: 1.3
    },
    {
        talentId: "8e4b7d2e-25a8-4ece-bb9b-83963bf2e8e4",
        authId: "741e6b5a-d535-4eef-9c49-62783177ab5a",
        description: "Pengajar Pilates yang berdedikasi untuk meningkatkan kesehatan fisik dan kesejahteraan. Memberikan kelas Pilates yang difokuskan pada penguatan inti dan fleksibilitas. Mendorong gaya hidup sehat melalui latihan fisik teratur.",
        verified_status: "verified",
        price: 150000,
        rating: 1.4
    },
    {
        talentId: "2da79e84-bcc7-4690-a5ac-73a37723ae21",
        authId: "a69d7cc7-d95b-422e-87e7-fcbbd4f75065",
        description: "Ahli keamanan informasi yang memahami pentingnya privasi dan keamanan data. Sering memberikan saran tentang praktik keamanan siber yang efektif dan terus memantau tren keamanan terkini.",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "af32318e-d85e-48a3-af1b-7f54891fd088",
        authId: "c31afad1-50cf-484a-88d0-45ac69cf0182",
        description: "Koreografer dengan keahlian dalam tari kontemporer dan teater musikal. Sering mengarahkan pertunjukan tari yang inovatif dan memukau. Menggabungkan elemen-elemen artistik untuk menciptakan pengalaman teater yang luar biasa.",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "ce9c6c39-ab1f-473f-8078-c95d29312061",
        authId: "c93a0775-931b-49aa-a768-fc0cf9ecc885",
        description: "Pengembang web dengan keahlian khusus dalam pemrograman Python dan pengembangan dengan kerangka kerja Django. Sering membuat aplikasi web yang responsif dan berkinerja tinggi.",
        verified_status: "verified",
        price: 150000,
        rating: 4.9
    },
    {
        talentId: "d7d013a3-c4f5-4777-b51e-b4b10739a0d0",
        authId: "8b76fef7-dd31-4468-8f48-30f05ee8e22f",
        description: "Ahli linguistik dengan minat pada studi bahasa dan penerjemahan. Sering terlibat dalam proyek penerjemahan dan menganalisis struktur bahasa untuk pemahaman mendalam tentang variasi linguistik.",
        verified_status: "verified",
        price: 150000,
        rating: 3.5
    },
    {
        talentId: "30b39bf9-cebe-4bff-9ef8-790597d502da",
        authId: "6f0859e0-8b1c-4c7e-9019-b5b9b7a278bc",
        description: "Penyanyi jazz dengan vokal yang merdu. Sering tampil dalam pertunjukan musik live di berbagai tempat. Menyajikan interpretasi unik pada lagu-lagu jazz klasik dan kontemporer.",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "05d1ee73-0475-40c6-89d4-5cb7e5abf18f",
        authId: "15a24570-b51e-4c0a-9e33-c031914e2037",
        description: "Konsultan pemasaran digital yang mengkhususkan diri dalam SEO dan strategi konten. Memberikan panduan untuk meningkatkan visibilitas online dan mencapai target audiens melalui kampanye pemasaran yang efektif.",
        verified_status: "verified",
        price: 150000,
        rating: 1.5
    },
    {
        talentId: "3e6dd873-fcd8-41b1-9663-29c15af4d624",
        authId: "21ef1b7f-ed2e-4b61-9661-a672dbf9717e",
        description: "Desainer logo dengan fokus pada branding dan identitas visual. Suka menciptakan desain yang mencerminkan nilai dan karakter unik setiap merek. Terampil dalam mengkomunikasikan pesan melalui elemen visual.",
        verified_status: "verified",
        price: 150000,
        rating: 3
    },
    {
        talentId: "cff8ab44-b250-4340-9e5c-9bb6cb96a85d",
        authId: "bb011a1d-1352-44af-8297-4d82ab2e3432",
        description: "Pengembang game mobile dengan keahlian dalam Unity dan kreativitas dalam pembuatan gameplay yang menarik. Sering menghadirkan ide-ide inovatif dalam pengembangan permainan mobile yang menarik pemain.",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "1b18b89b-5434-422d-b2d9-294e4c64657e",
        authId: "33fcdc5d-910d-47fe-bbde-43f5e5025c93",
        description: "Peneliti ekologi yang berfokus pada konservasi alam dan pemulihan ekosistem. Suka menyelidiki interaksi ekologis dan memberikan solusi untuk pelestarian keanekaragaman hayati.",
        verified_status: "verified",
        price: 150000,
        rating: 4.5
    },
    {
        talentId: "ea7201c8-b969-4f51-9faa-3f8e861c8356",
        authId: "459fcc55-9fa7-490c-93bb-9d03de1837d4",
        description: "Psikolog klinis yang menawarkan layanan terapi untuk mendukung kesehatan mental. Sering berpartisipasi dalam penelitian-penelitian kesehatan mental dan menyediakan solusi terapeutik untuk individu.",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "1d091616-24e0-41c1-929e-c240f0935d7b",
        authId: "090aebb4-2fcd-4283-9242-75dce3059720",
        description: "Pengajar seni musik dengan keahlian dalam mengajar instrumen dan teori musik. Mendorong siswa untuk mengeksplorasi ekspresi kreatif melalui musik dan memahami dasar-dasar teori musik.",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "26974fbe-40d2-4c50-8270-41443fdb95cf",
        authId: "fe100465-5c80-412f-ae7c-70ff638d5a4d",
        description: "Profesional analisis data dengan keahlian dalam statistik dan machine learning. Suka menggali wawasan dari data untuk mendukung pengambilan keputusan yang informasional.",
        verified_status: "verified",
        price: 150000,
        rating: 2.5
    },
    {
        talentId: "13132a45-bac1-454f-85d2-300d909ed895",
        authId: "8a944b0b-920a-4395-b815-6fb68df89276",
        description: "Kreator konten pendidikan yang menghasilkan materi edukasi melalui platform YouTube. Fokus pada penyampaian materi dengan cara yang menarik dan mudah dipahami.",
        verified_status: "verified",
        price: 150000,
        rating: 3
    },
    {
        talentId: "7bdad265-2df2-41ef-8925-79950844e121",
        authId: "806701b6-a7b4-4366-b86c-386a5af53eb5",
        description: "Desainer UI/UX yang ahli dalam prototyping dan desain antarmuka pengguna. Sering berkolaborasi dengan pengembang untuk menciptakan pengalaman pengguna yang intuitif dan estetis.",
        verified_status: "verified",
        price: 150000,
        rating: 3
    },
    {
        talentId: "971a931c-4873-4e5b-b1a2-81a4a39b317b",
        authId: "63fbcc6b-98d2-47b6-8931-b0304a4d0522",
        description: "Guru kimia yang mengajarkan pelajaran dengan pendekatan eksperimental. Sering melakukan eksperimen dalam pembelajaran untuk meningkatkan pemahaman siswa tentang konsep-konsep kimia.",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "de831a2d-4d6e-41aa-a092-e779003cc50f",
        authId: "280a03dc-579c-4441-a664-ee6d605c9a6f",
        description: "Peneliti teknologi yang berfokus pada inovasi dan pengembangan produk. Terlibat dalam proyek-proyek penelitian untuk menciptakan solusi teknologi yang revolusioner.",
        verified_status: "verified",
        price: 150000,
        rating: 2.7
    },
    {
        talentId: "63c79d40-29f1-48cb-bdd4-3a311fe5f310",
        authId: "cc94f679-adf5-462c-bef8-08ce8431186f",
        description: "Perancang kemasan dengan keahlian dalam branding dan desain produk. Suka menciptakan kemasan yang menarik dan berfungsi untuk memperkuat identitas merek. Terlibat dalam pengembangan desain produk yang estetis.",
        verified_status: "verified",
        price: 150000,
        rating: 4.6
    },
    {
        talentId: "364d3e46-c28f-4a0f-9a3a-fa16e06a9dae",
        authId: "4a955a94-c9c0-413d-83df-9b12123dee29",
        description: "Ahli analisis bisnis dengan fokus pada pengembangan strategi dan optimasi proses. Suka mencari cara untuk meningkatkan efisiensi operasional dan mencapai tujuan bisnis.",
        verified_status: "verified",
        price: 150000,
        rating: 3.8
    },
    {
        talentId: "cc3630f4-8920-480b-8a11-4cb98a1af8af",
        authId: "ba947262-e09c-4cf6-ae7c-0e0e8e2c4696",
        description: "Editor video dengan keahlian dalam post-production dan visual editing. Sering bekerja dengan proyek-proyek kreatif untuk menciptakan konten video yang menarik dan berkualitas tinggi.",
        verified_status: "verified",
        price: 150000,
        rating: 3.4
    },
    {
        talentId: "9c8a4c93-22ed-4739-9609-e033fca2ca3c",
        authId: "6a19abee-67fd-40c1-bc40-5da16d533b9b",
        description: "Ahli pertanian dengan fokus pada tanaman organik dan permaculture. Sering memberikan saran tentang praktik pertanian berkelanjutan dan metode penanaman yang ramah lingkungan.",
        verified_status: "verified",
        price: 150000,
        rating: 4.1
    },
    {
        talentId: "169b2050-8f9b-47d1-a46a-46cb97279f62",
        authId: "f5fc366b-b199-4286-a650-88fcecc70e04",
        description: "Animator 3D dengan keahlian dalam modeling dan teknik animasi. Sering menghasilkan animasi 3D yang realistis untuk berbagai proyek, mulai dari iklan hingga film animasi.",
        verified_status: "verified",
        price: 150000,
        rating: 3.1
    },
    {
        talentId: "19b60d3b-e615-4288-991b-95f5d2ff9221",
        authId: "49b2d761-425e-4780-b92a-b8d8d69af63f",
        description: "Ahli epidemiologi yang terlibat dalam penelitian kesehatan dan analisis pandemi. Suka menyelidiki pola penyebaran penyakit dan memberikan rekomendasi untuk pengendalian dan pencegahan.",
        verified_status: "verified",
        price: 150000,
        rating: 1.4
    },
    {
        talentId: "332b82dd-eb9a-46bd-8785-f28310580fbf",
        authId: "b4fca4dc-e802-4597-8aa0-efec3ba0ad8e",
        description: "Pengajar fotografi yang memberikan pelatihan tentang teknik pengambilan foto dan pengolahan gambar. Sering mengadakan workshop untuk meningkatkan keterampilan fotografi bagi para penggemar dan pemula.",
        verified_status: "verified",
        price: 150000,
        rating: 3.6
    },
    {
        talentId: "29d2c692-8e4e-4332-8d68-ec736759dd88",
        authId: "1cfd076c-3e9d-4675-b0e8-81daeac9b1e0",
        description: "Ahli kesehatan masyarakat yang berfokus pada promosi kesehatan dan penelitian kesehatan. Sering terlibat dalam proyek-proyek yang mendukung upaya pencegahan penyakit dan peningkatan kesejahteraan masyarakat.",
        verified_status: "verified",
        price: 150000,
        rating: 1.5
    },
    {
        talentId: "12e01139-b3c0-45ce-9294-0874665886c6",
        authId: "46532b2c-5132-4183-9c95-caf5e730cece",
        description: "Pengajar bahasa Inggris yang memberikan kursus online untuk pengembangan keterampilan berbahasa. Sering memberikan metode pengajaran inovatif untuk meningkatkan pemahaman dan kepercayaan diri berbahasa Inggris.",
        verified_status: "verified",
        price: 150000,
        rating: 4.5
    },
    {
        talentId: "49850020-8586-4d78-ba14-201a31091379",
        authId: "af98f94d-a3c6-4878-9290-1ea853f318dc",
        description: "Spesialis penyakit jantung yang fokus pada bidang kardiologi dan pencegahan penyakit jantung. Memberikan saran medis dan rekomendasi gaya hidup sehat untuk mencegah masalah kesehatan jantung.",
        verified_status: "verified",
        price: 150000,
        rating: 3
    },
    {
        talentId: "eb053056-95b9-4ed9-b69d-df5942949c36",
        authId: "15d9c62b-b3a6-467b-8c2c-3e41546ead7e",
        description: "Pemimpin proyek teknologi dengan keahlian dalam manajemen proyek dan inovasi. Sering memimpin tim pengembangan untuk menciptakan solusi teknologi yang efektif dan efisien.",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "434653d7-0a45-4e88-99fc-ad06249b201f",
        authId: "a792b6e6-2b0c-4971-a8c3-383dfa6c7ddd",
        description: "Pengembang front-end dengan keahlian dalam HTML, CSS, dan JavaScript. Sering menciptakan antarmuka pengguna yang responsif dan menarik untuk aplikasi web dan situs.",
        verified_status: "verified",
        price: 150000,
        rating: 5
    },
    {
        talentId: "1b716f0a-d95f-45fc-b46e-4443554ca3ff",
        authId: "201ebe2b-00cc-403e-a02a-2d8395be37b1",
        description: "Peneliti bioteknologi dengan fokus pada genetika dan mikrobiologi. Terlibat dalam penelitian untuk mengembangkan solusi inovatif dalam bidang bioteknologi dan kontribusi pada pemahaman lebih lanjut tentang genetika.",
        verified_status: "verified",
        price: 150000,
        rating: 5
    },
    {
        talentId: "77552341-9ea2-427d-b854-501ceb0360b3",
        authId: "b83893c8-657b-491d-95b5-73fef3606200",
        description: "Kurator museum dengan keahlian dalam seni dan riwayat alam. Bertanggung jawab atas pengelolaan dan pameran koleksi museum, serta mendokumentasikan artefak dan karya seni.",
        verified_status: "verified",
        price: 150000,
        rating: 1.1
    },
    {
        talentId: "2a335d19-d04e-454f-baf6-2399420847fe",
        authId: "1cfc873e-813b-4814-8d15-e03147a39d8a",
        description: "Pengembang backend dengan keahlian dalam Node.js, MongoDB, dan RESTful API. Sering merancang dan mengimplementasikan server yang dapat diandalkan untuk mendukung aplikasi web dan layanan.",
        verified_status: "verified",
        price: 150000,
        rating: 3
    },
    {
        talentId: "2bf3ca5f-d8e8-454c-be44-1d74af8a9909",
        authId: "c4982da1-0ba7-4f1c-b606-31e0615108ad",
        description: "Penulis fiksi dengan fokus pada penulisan cerpen dan novel. Sering mengeksplorasi tema-tema psikologis dan mendalam dalam karya-karya fiksi untuk menghadirkan pengalaman membaca yang memikat.",
        verified_status: "verified",
        price: 150000,
        rating: 3.6
    },
    {
        talentId: "8662529e-4c77-4d78-9499-2cb1aba0191f",
        authId: "67f12293-a16c-41f5-93db-962e4444ff18",
        description: "Ahli kecerdasan buatan dengan fokus pada deep learning dan pengolahan bahasa alami. Terlibat dalam penelitian dan pengembangan teknologi AI untuk meningkatkan kinerja sistem.",
        verified_status: "verified",
        price: 150000,
        rating: 1
    },
    {
        talentId: "f44d87a2-305a-4a96-821e-5c0953e0acdd",
        authId: "e7118a26-9f10-49a4-9930-f6b6be7353a7",
        description: "Pengajar kesehatan dengan pengetahuan dalam nutrisi dan kebugaran. Membantu individu mencapai tujuan kesehatan mereka melalui rencana nutrisi dan program latihan yang dipersonalisasi.",
        verified_status: "verified",
        price: 150000,
        rating: 4.9
    },
    {
        talentId: "7f82311f-0bc1-43cb-87e4-d1faa0a92e76",
        authId: "f50ab039-2035-4e7e-a635-2cb3396e37da",
        description: "Perancang mode dengan fokus pada busana dan tren terkini. Suka menciptakan desain pakaian yang unik dan berinovasi. Terlibat dalam proses produksi dari konsep hingga peluncuran koleksi.",
        verified_status: "verified",
        price: 150000,
        rating: 3.6
    },
    {
        talentId: "f1c44523-81cd-4719-90a3-01efc1dc48cc",
        authId: "42b0ae55-bc8b-4714-a453-694561f905e1",
        description: "Ahli teknologi informasi dengan keahlian dalam pengelolaan jaringan dan keamanan sistem. Sering memberikan solusi untuk meningkatkan efisiensi infrastruktur teknologi informasi dan melindungi data dari ancaman keamanan.",
        verified_status: "verified",
        price: 150000,
        rating: 4.7
    },
    {
        talentId: "4d66d8ff-2c96-430b-a550-bd6d45fa7c6c",
        authId: "87001c26-b290-496c-ae52-63dd64baa04a",
        description: "Konsultan manajemen dengan fokus pada pengembangan strategi bisnis dan efisiensi operasional. Sering bekerja dengan perusahaan untuk meningkatkan kinerja dan mencapai tujuan bisnis yang berkelanjutan.",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "ce3d0a7a-98fc-4381-965e-77e533b4e20a",
        authId: "b274544f-aa50-49bd-a6de-e143090aced5",
        description: "Pengajar yoga dengan pengetahuan dalam mindfulness dan kesehatan holistik. Memberikan kelas yoga untuk meningkatkan kesehatan fisik dan mental, serta membimbing praktik mindfulness untuk keseimbangan hidup.",
        verified_status: "verified",
        price: 150000,
        rating: 2.9
    },
    {
        talentId: "261269c4-a020-4b08-89f2-22f08d5167fa",
        authId: "ba7133f7-176d-4c5a-8dc9-e879c3a4601a",
        description: "Ahli astronomi dengan minat pada observasi bintang dan penelitian luar angkasa. Sering mengamati fenomena langit dan berkontribusi pada pemahaman kita tentang alam semesta.",
        verified_status: "verified",
        price: 150000,
        rating: 4.2
    },
    {
        talentId: "6db4c41e-e232-4598-b08b-6e36729fa98d",
        authId: "105bd01c-1f08-47cb-8bcc-945ece18cc47",
        description: "Pengajar seni rupa dengan keahlian dalam melukis dan seni kontemporer. Sering mengadakan kelas seni untuk membimbing siswa mengembangkan kreativitas mereka dan memahami berbagai teknik melukis.",
        verified_status: "verified",
        price: 150000,
        rating: 1.8
    },
    {
        talentId: "3d633317-d8f8-4d45-ac26-d62dca57d224",
        authId: "57bc6efc-48f9-439b-bb69-0ccc83fa5878",
        description: "Editor buku dengan keahlian dalam penyuntingan dan penulisan kreatif. Sering berkolaborasi dengan penulis untuk memperbaiki struktur naratif dan memastikan kualitas terjemahan naskah.",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "1ea16794-4504-4676-a74e-a5cccc60c4ab",
        authId: "32550163-8031-41e5-80e7-41287e763ea2",
        description: "Desainer interior dengan keahlian dalam arsitektur dan dekorasi. Suka menciptakan ruang yang estetis dan fungsional. Terampil dalam merancang berbagai jenis proyek, mulai dari rumah tinggal hingga ruang komersial.",
        verified_status: "verified",
        price: 150000,
        rating: 5
    },
    {
        talentId: "b7030114-6f10-4e83-93c1-882b2e9c704f",
        authId: "c8068acf-69d1-457c-b6cc-d86be21727e9",
        description: "Konsultan manajemen dengan fokus pada pengembangan strategi bisnis dan efisiensi operasional. Sering bekerja dengan perusahaan untuk meningkatkan kinerja dan mencapai tujuan bisnis yang berkelanjutan.",
        verified_status: "verified",
        price: 150000,
        rating: 3
    },
    {
        talentId: "fa5b5d64-0093-402f-a5f2-7f06201778d9",
        authId: "2108280d-2392-4f08-b736-772cf34b2134",
        description: "Pengembang aplikasi mobile dengan keahlian dalam Flutter dan React Native. Sering menciptakan aplikasi mobile yang responsif dan inovatif. Memahami tren terkini dalam pengembangan aplikasi.",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "d6a6bbdc-2d78-4a70-85bf-2f2319002ac1",
        authId: "00b9a37c-9784-4285-8d28-841c3630b06e",
        description: "Ahli hukum yang berfokus pada hukum bisnis dan perpajakan. Sering memberikan saran hukum untuk mendukung kegiatan bisnis dan memastikan kepatuhan terhadap peraturan perpajakan.",
        verified_status: "verified",
        price: 150000,
        rating: 3.2
    },
    {
        talentId: "42098ead-e940-4a23-b1d8-295d72e78522",
        authId: "48d2cb26-ab60-4314-9e9b-69da6d8279dc",
        description: "Ahli geologi dengan fokus pada penelitian bumi dan pemodelan geospasial. Sering terlibat dalam studi tentang struktur geologi dan perubahan lingkungan bumi.",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "ccf1a63a-b389-440e-9c62-f167cbcbf68c",
        authId: "2ffd334f-3110-4f3f-ad04-ffcc476cbf8e",
        description: "Pengembang web dengan keahlian dalam HTML, CSS, dan JavaScript. Sering menciptakan antarmuka pengguna yang responsif dan menarik untuk aplikasi web dan situs.",
        verified_status: "verified",
        price: 150000,
        rating: 4.4
    },
    {
        talentId: "03e20191-6827-473e-9ebc-444962d6456a",
        authId: "645c6991-cb80-4048-a1a1-2dffa2567326",
        description: "Konsultan manajemen dengan fokus pada pengembangan strategi bisnis dan efisiensi operasional. Sering bekerja dengan perusahaan untuk meningkatkan kinerja dan mencapai tujuan bisnis yang berkelanjutan.",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "5dbe1803-0eaa-44bb-9ae4-31457383d072",
        authId: "6c9e931c-0940-42fd-8165-13a81c59e8cf",
        description: "Peneliti sosial dengan fokus pada studi gender dan analisis kebijakan. Terlibat dalam penelitian untuk mendukung pembuatan kebijakan yang inklusif dan mendukung kesetaraan gender.",
        verified_status: "verified",
        price: 150000,
        rating: 2.6
    },
    {
        talentId: "c6b7d0a4-2857-4ccc-9d13-4b7ed760bc10",
        authId: "3490805d-0cb9-4981-a1f4-45b30acb13a5",
        description: "Konsultan lingkungan dengan keahlian dalam pengelolaan limbah dan energi terbarukan. Sering memberikan saran kepada perusahaan untuk mencapai keberlanjutan lingkungan dalam operasi mereka.",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "193aafb4-9873-4e18-be96-c9f1b9a6b470",
        authId: "d5da0baa-9284-457a-88eb-e6b248500e91",
        description: "Kreator konten gaming yang menyajikan streaming dan review game melalui berbagai platform. Sering berbagi pengalaman bermain dan memberikan panduan untuk pemain game.",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "ef9ce1a3-0048-433f-8f19-dc0b4596b4ea",
        authId: "d9d29bcb-7a2a-420a-abc2-cba7e3d5d98a",
        description: "Konsultan keuangan dengan keahlian dalam perencanaan keuangan dan investasi. Sering membantu klien untuk mengelola keuangan pribadi dan bisnis, serta memberikan saran tentang investasi yang cerdas.",
        verified_status: "verified",
        price: 150000,
        rating: 2.5
    },
    {
        talentId: "65c3d834-1cd5-4efa-b735-e49f25c2a7dd",
        authId: "70596eb0-b0a7-4789-bd17-003fb0c9b817",
        description: "Ahli bahasa pemrograman yang terlibat dalam penelitian dan pengembangan (R&D) serta pengembangan algoritma. Sering menciptakan solusi perangkat lunak inovatif untuk memecahkan masalah teknis yang kompleks.",
        verified_status: "verified",
        price: 150000,
        rating: 2.8
    },
    {
        talentId: "dae5ae9f-4dbb-43c9-843f-e109ad56f556",
        authId: "2803fa05-727e-4b41-b23b-5e9a1684b788",
        description: "Pengajar matematika dengan fokus pada pendidikan dan metode pengajaran yang efektif. Sering mengembangkan kurikulum dan metode pembelajaran yang mendukung pemahaman konsep matematika.",
        verified_status: "verified",
        price: 150000,
        rating: 4.2
    },
    {
        talentId: "8d9960c9-0043-4e98-b9fd-3b9a08ac945e",
        authId: "19da9b9c-ea31-4193-8716-91652ec60c54",
        description: "Desainer grafis dengan keahlian dalam ilustrasi dan branding visual. Suka menciptakan desain yang estetis dan berfungsi untuk memperkuat identitas merek atau menyampaikan pesan dengan jelas.",
        verified_status: "verified",
        price: 150000,
        rating: 1
    },
    {
        talentId: "ea393bba-ca47-4c66-ae15-90a8b86fc9bd",
        authId: "173732e7-fe2e-4060-8a2b-e2818d953bbe",
        description: "Programmer Java dengan keahlian dalam pengembangan backend menggunakan Spring Boot. Sering merancang dan mengimplementasikan solusi perangkat lunak yang andal dan efisien.",
        verified_status: "verified",
        price: 150000,
        rating: 4.5
    },
    {
        talentId: "c5950ec6-b65d-457f-84fe-e5b637a6a940",
        authId: "55a536a2-030d-4179-b0c3-0d5666e45228",
        description: "Penyanyi opera dengan vokal yang merdu. Sering tampil dalam pertunjukan musik live di berbagai tempat. Menyajikan interpretasi unik pada lagu-lagu opera klasik dan kontemporer.",
        verified_status: "verified",
        price: 150000,
        rating: 3.6
    },
    {
        talentId: "d927030f-2dba-4aa7-a2fc-466b9daa84c2",
        authId: "6289c5e7-05c4-4d26-a20b-d4c8c3f0b0ca",
        description: "Saya sangat menyukai Kpop, girlband favorit saya TWICE, bias saya Dahyun, saya sangat menyukai setiap lagu TWICE. Saya juga suka berolahraga khususnya badminton",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "3e3aa4f1-4ccf-47f2-be30-3a536944e859",
        authId: "696488b3-925c-4440-bd1a-16098e84e448",
        description: "Saya sangat menyukai game, game favorit saya adalah Mobile Legends, saya juga suka coding, saya juga suka menonton film, film favorit saya adalah Avengers, saya juga suka bermain musik",
        verified_status: "verified",
        price: 150000,
        rating: 4.1
    },
    {
        talentId: "e0d3c521-289a-41c2-8487-cab03cc54f31",
        authId: "9306f342-167c-4ed6-af3c-f3581f994157",
        description: "Pecinta kuliner dan traveler yang gemar berbagi pengalaman makanan lezat dari berbagai tempat. Saya juga memiliki hobi fotografi dan senang mengabadikan momen saat berpergian.",
        verified_status: "verified",
        price: 150000,
        rating: 2.7
    },
    {
        talentId: "1f17bf3f-dc60-4584-97d0-5f66d3c127e0",
        authId: "80ece3b1-87cc-42f6-8247-705bd3f2732f",
        description: "Seorang pecinta fashion dan makeup dengan ketertarikan dalam dunia seni. Saya senang bereksperimen dengan gaya pakaian dan makeup yang berbeda, dan juga memiliki minat dalam seni lukis dan seni rupa.",
        verified_status: "verified",
        price: 150000,
        rating: 4.3
    },
    {
        talentId: "0be48e47-7f6f-4c35-be74-82446d490878",
        authId: "b9af519b-1355-42c7-8736-407caef8c5eb",
        description: "Pecinta olahraga yang juga memiliki ketertarikan pada musik dan kegiatan mendaki gunung. Saya aktif dalam berbagai jenis olahraga, suka mendengarkan musik di waktu luang, dan senang menjelajahi keindahan alam melalui pendakian gunung.",
        verified_status: "verified",
        price: 150000,
        rating: 4.3
    },
    {
        talentId: "d5402612-6a20-436d-b325-b343274f2b72",
        authId: "e5561b9d-c863-40f1-8448-c3614e6b249e",
        description: "Pecinta buku yang memiliki keahlian dalam berbagai bahasa dan menulis puisi. Saya senang membaca buku dari berbagai genre, dan sering menghabiskan waktu luang dengan menulis puisi inspiratif.",
        verified_status: "verified",
        price: 150000,
        rating: 1
    },
    {
        talentId: "bce8e71b-7e46-43eb-8a49-8b5daeaf2662",
        authId: "f939e0ae-7482-4f0f-9305-88cf6aad65da",
        description: "Seorang ahli teknologi dengan keterampilan dalam desain dan videografi. Saya tertarik pada inovasi teknologi terbaru, memiliki bakat dalam merancang antarmuka pengguna, dan suka membuat video kreatif.",
        verified_status: "verified",
        price: 150000,
        rating: 3
    },
    {
        talentId: "2323d4a4-f43b-45b8-976c-9ac763685e7a",
        authId: "5af5e2cb-3ea9-40b5-9f8b-0346fa5e6294",
        description: "Guru dengan semangat untuk mendidik dan menciptakan lingkungan belajar yang menyenangkan. Selain menjadi pengajar, saya juga suka bepergian untuk menggali pengetahuan dan pengalaman baru yang dapat dibagikan kepada murid-murid.",
        verified_status: "verified",
        price: 150000,
        rating: 3.3
    },
    {
        talentId: "37b93456-69d8-426e-b571-ee804648a78d",
        authId: "1329504f-3cb9-4218-8bd3-aa0fa5f7fec6",
        description: "Pecinta Programmer dan teknologi terutama dalam bidang robotik. Saya suka mengembangkan perangkat lunak, merakit robot, dan eksplorasi teknologi gadget terbaru yang dapat meningkatkan kehidupan sehari-hari.",
        verified_status: "verified",
        price: 150000,
        rating: 3.8
    },
    {
        talentId: "d5acc419-edc0-48fb-927c-e30914003631",
        authId: "bd76d46a-ff07-4805-8dac-0252367f6d69",
        description: "Pecinta dunia seni pertunjukan dengan ketertarikan khusus pada film, teater, dan penulisan naskah. Saya senang menonton dan menganalisis film, berpartisipasi dalam produksi teater, dan menulis naskah untuk karya-karya kreatif.",
        verified_status: "verified",
        price: 150000,
        rating: 2.1
    },
    {
        talentId: "b4d122b1-e2c1-4cac-aaf8-0a2df06fd00e",
        authId: "c1bb3c69-8e2d-442a-a990-d64d4823adf8",
        description: "Pecinta hiking yang juga memiliki ketertarikan dalam fotografi alam. Saya senang menjelajahi jalur hiking yang menantang dan mengabadikan keindahan alam melalui kamera. Aktif berbagi pengalaman melalui platform media sosial.",
        verified_status: "verified",
        price: 150000,
        rating: 5
    },
    {
        talentId: "5c225724-4819-434e-83d8-aae4cba8b9a3",
        authId: "25348d80-fde0-4ec6-93ab-6b6fbd9a72e3",
        description: "Pecinta kuliner yang juga memiliki ketertarikan pada alam dan kegiatan traveling. Saya suka mencicipi makanan lezat dari berbagai tempat, dan senang menjelajahi keindahan alam melalui perjalanan.",
        verified_status: "verified",
        price: 150000,
        rating: 3.1
    },
    {
        talentId: "92b5ccd7-a5a8-4eea-bd5a-827be13cdc1b",
        authId: "4b80322e-70a7-4367-b42a-9be45430faa9",
        description: "Seniman yang memiliki bakat dalam seni rupa dan kerajinan tangan. Selain itu, saya juga suka membuat komedi dan menghibur orang dengan kecerdasan humor. Senang berpartisipasi dalam pameran seni lokal.",
        verified_status: "verified",
        price: 150000,
        rating: 4.9
    },
    {
        talentId: "68800989-fa3a-414d-93ba-2fc41eeb7c36",
        authId: "38354498-a93d-4c6a-b053-c55b66a40dfb",
        description: "Ilmuwan yang berdedikasi pada penelitian dalam bidang sains dan astronomi. Saya sering terlibat dalam proyek penelitian ilmiah dan memiliki minat khusus pada eksplorasi luar angkasa. Siap berbagi pengetahuan dengan sesama pecinta sains.",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "2ae4c607-2a81-42d8-8093-8c87aab013b9",
        authId: "f65aa4be-9851-4ac9-a3fa-eb2a0c1a3e0c",
        description: "Pecinta fashion yang juga memiliki ketertarikan pada pengembangan diri. Saya suka bereksperimen dengan gaya pakaian yang berbeda, dan senang berbagi tips dan trik untuk meningkatkan kepercayaan diri.",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "27f100e4-fca9-4bf8-bb4f-616ef745bc93",
        authId: "fd7dfdaa-870b-4b0b-9875-de04675b5794",
        description: "Seorang fotografer dengan kecintaan pada pemandangan dan budaya lokal. Saya tidak hanya mengabadikan momen indah, tetapi juga senang berbagi cerita tentang tempat-tempat yang saya kunjungi dan keanekaragaman budaya yang saya temui.",
        verified_status: "verified",
        price: 150000,
        rating: 4.7
    },
    {
        talentId: "167c23a2-5f3d-48f1-87a5-e7e8b4ce8e44",
        authId: "4b957ead-b927-405e-baba-92a8de54c4ad",
        description: "Pecinta musik yang memiliki kecintaan pada berbagai genre musik. Saya suka bermain musik dan sering berkolaborasi dengan musisi lain. Selalu terbuka untuk eksplorasi dalam dunia musik.",
        verified_status: "verified",
        price: 150000,
        rating: 2.1
    },
    {
        talentId: "d1dbc7ad-1001-4229-a463-ee3f8de759c4",
        authId: "52271c4f-0cb8-4ac2-91fd-fb8dba24f260",
        description: "Pengembang perangkat lunak dengan fokus pada pemrograman web dan desain antarmuka pengguna. Saya memiliki pengalaman dalam menciptakan pengalaman pengguna yang intuitif dan estetis. Suka berkembang dalam lingkungan teknologi yang dinamis.",
        verified_status: "verified",
        price: 150000,
        rating: 3.2
    },
    {
        talentId: "dd8dc271-1915-4700-b1b8-e7533323f9a8",
        authId: "16988314-c496-4e1d-8d87-a7ad74d5d6f3",
        description: "yoga yang mendalami meditasi dan kesehatan holistik. Saya senang membimbing orang untuk mencapai keseimbangan tubuh dan pikiran melalui praktik yoga dan meditasi. Aktif dalam komunitas kesehatan holistik.",
        verified_status: "verified",
        price: 150000,
        rating: 3.3
    },
    {
        talentId: "011fc393-1411-49d2-8218-9dda2d8667c5",
        authId: "e1447206-f665-4135-bc12-030a6169fbb3",
        description: "Pecinta binatang yang berkomitmen pada pelestarian dan konservasi satwa liar. Saya juga senang mengabadikan keindahan dan keunikan satwa melalui fotografi. Bergabung dalam kampanye untuk mendukung perlindungan lingkungan dan keanekaragaman hayati.",
        verified_status: "verified",
        price: 150000,
        rating: 4.7
    },
    {
        talentId: "52369898-ce44-41b6-b14b-7fce7e51baee",
        authId: "8254b096-84d3-4237-b204-8bbb908b389e",
        description: "Seorang penulis dan jurnalis yang juga berperan sebagai aktivis sosial. Saya senang menulis tentang isu-isu sosial dan berkomitmen untuk menyuarakan perubahan positif. Terlibat dalam kampanye dan kegiatan amal.",
        verified_status: "verified",
        price: 150000,
        rating: 4.7
    },
    {
        talentId: "ebeec989-30a1-49fb-a40b-02a4bfbb6633",
        authId: "bf1956c8-fd5d-4653-8012-98f4e950114c",
        description: "Pecinta seni yang memiliki ketertarikan pada alam dan fotografi. Saya suka menggambar dan melukis, serta mengabadikan keindahan alam melalui fotografi. Suka berbagi karya seni dan pengalaman melalui platform media sosial.",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "6c4fb384-1719-4608-be92-12257a8d84d5",
        authId: "a96da377-1784-47e6-9b5d-a1ca956c20b1",
        description: "Kreator konten yang menyajikan artikel dan video tentang berbagai topik. Saya suka menulis dan membuat video yang informatif dan menghibur. Suka berbagi pengetahuan dan pengalaman melalui platform media sosial.",
        verified_status: "verified",
        price: 150000,
        rating: 4.7
    },
    {
        talentId: "0aed5cdc-c51b-41ca-9c9a-48d6c7ae70d5",
        authId: "578d559d-9d27-427a-81cc-4d6df751856d",
        description: "Seniman visual dengan fokus pada seni lukis dan pembuatan komik. Saya senang mengekspresikan diri melalui lukisan dan menciptakan komik dengan alur cerita yang menarik. Terbuka untuk pameran seni dan proyek kolaboratif.",
        verified_status: "verified",
        price: 150000,
        rating: 1.8
    },
    {
        talentId: "541eb68b-c216-4f66-b444-b034683aca1c",
        authId: "cd7965fb-dca0-40e6-8d27-23ccdda987d1",
        description: "Desainer interior dan arsitek dengan minat pada seni daur ulang. Saya senang menciptakan lingkungan yang estetis dan berkelanjutan. Berusaha untuk menggabungkan seni dan keberlanjutan dalam setiap proyek desain.",
        verified_status: "verified",
        price: 150000,
        rating: 3.2
    },
    {
        talentId: "cd70a2b7-57b9-4c45-bfb8-ed93bcc87a78",
        authId: "f930a295-cf19-4868-ae98-aa4aa58928bf",
        description: "Pemandu wisata lokal yang memiliki pengetahuan mendalam tentang sejarah tempat-tempat tertentu. Saya juga suka mengabadikan keindahan pemandangan melalui fotografi. Memberikan pengalaman unik kepada para wisatawan.",
        verified_status: "verified",
        price: 150000,
        rating: 1.4
    },
    {
        talentId: "df943f83-aa80-4fa9-98f7-4fdb917eb87d",
        authId: "b82b479e-a66d-4fb8-a593-cf5a1431f181",
        description: "Spesialis dalam perencanaan acara, katering, dan seni dekorasi. Saya memiliki pengalaman dalam menciptakan acara yang tak terlupakan, mulai dari pernikahan hingga acara perusahaan. Memiliki bakat dalam menyusun menu katering yang kreatif.",
        verified_status: "verified",
        price: 150000,
        rating: 1.8
    },
    {
        talentId: "e557270c-fe36-455f-b9a7-ba5b478b8254",
        authId: "59d7f71a-ec02-41d0-b14a-069ae35d7df1",
        description: "Animator dengan keahlian dalam motion graphics dan desain karakter. Saya senang menciptakan animasi yang kreatif dan memikat. Terlibat dalam proyek animasi untuk iklan, film pendek, dan konten digital lainnya.",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "a56f1872-7588-4046-a283-a6da5f3bf98d",
        authId: "d31ca893-0a52-41d1-b759-d4fed109025f",
        description: "Pengajar bahasa yang juga mahir dalam menerjemahkan teks dari dan ke dalam beberapa bahasa. Saya memiliki minat dalam memahami dan mengajarkan budaya internasional. Sering terlibat dalam pertukaran budaya dan kegiatan multibahasa.",
        verified_status: "verified",
        price: 150000,
        rating: 2.7
    },
    {
        talentId: "e5da7b1e-c492-4f2b-9276-52bc6e116e3c",
        authId: "4e97663c-59db-45ee-9887-dd2276e6d19b",
        description: "Ahli teknik audio dan produser musik dengan pengalaman dalam studio recording. Saya terampil dalam menciptakan kualitas audio yang superior dan memproduksi musik berkualitas tinggi. Berkolaborasi dengan berbagai musisi dan artis.",
        verified_status: "verified",
        price: 150000,
        rating: 3.3
    },
    {
        talentId: "bcc2dff9-348a-4d9b-a618-6bc9c5fad384",
        authId: "08da877e-24e8-46d0-bac3-4956527c20c9",
        description: "Seniman perhiasan yang mahir dalam kerajinan tangan dan penggunaan batu mulia. Suka menciptakan perhiasan unik dengan desain yang elegan. Mengikuti tren fashion dan senang berbagi keterampilan dalam workshop.",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "88d4a5a5-51e1-4d26-b257-86d5fb80d037",
        authId: "f71c0050-a764-4e4d-be02-4fdd276d2009",
        description: "Pengajar kebugaran yang memiliki pengetahuan tentang nutrisi dan bodybuilding. Saya membantu orang mencapai tujuan kebugaran mereka, memberikan panduan tentang latihan dan diet yang sesuai. Senang melihat perubahan positif pada kesehatan dan kebugaran klien.",
        verified_status: "verified",
        price: 150000,
        rating: 3.5
    },
    {
        talentId: "c6d5eb8a-c99e-4974-9ad7-4a279cbddcab",
        authId: "94e1a848-4a96-4042-8d81-340fbc956866",
        description: "Pendongeng yang berfokus pada pertunjukan teater anak dan pendidikan karakter. Saya menghibur dan mengajarkan nilai-nilai positif melalui cerita-cerita menarik. Terlibat dalam kegiatan pendidikan untuk membentuk karakter anak-anak.",
        verified_status: "verified",
        price: 150000,
        rating: 4.2
    },
    {
        talentId: "cd7190cf-fcee-4eaa-a7fd-d96e10dfbb9d",
        authId: "b72dc393-2122-45c5-96b7-40ec51b2cd9b",
        description: "Profesional dalam pengembangan game dengan keahlian dalam desain game dan antusiasme terhadap realitas virtual. Saya senang menciptakan pengalaman game yang menarik dan inovatif. Terlibat dalam komunitas pengembang game.",
        verified_status: "verified",
        price: 150000,
        rating: 1.3
    },
    {
        talentId: "fa9afd16-3d8d-4c25-a2a1-d7b86758a35a",
        authId: "711fe35a-1572-46e1-8a0c-5e0fc3c3f8b8",
        description: "Pengajar bisnis yang membantu individu dan perusahaan untuk mencapai kesuksesan. Saya memiliki pengalaman dalam kewirausahaan dan manajemen. Memberikan panduan strategis untuk pertumbuhan bisnis dan pengembangan kepemimpinan.",
        verified_status: "verified",
        price: 150000,
        rating: 4.5
    },
    {
        talentId: "589229e8-4758-422e-b092-bae4fade661a",
        authId: "c571abcf-e651-41e9-b86c-5b6f961cf40d",
        description: "Penyair dengan minat dalam sastra dan pengembangan diri. Suka mengekspresikan perasaan melalui puisi dan terlibat dalam kegiatan literasi. Berbagi kisah dan inspirasi melalui karya-karya tulis.",
        verified_status: "verified",
        price: 150000,
        rating: 4.1
    },
    {
        talentId: "c05a8c7f-7903-47f4-a805-4d4e978acebf",
        authId: "05eb589d-6c04-44d2-88cc-7fcc3a5e2d10",
        description: "Profesional di bidang pengembangan aplikasi mobile dengan keahlian dalam desain antarmuka pengguna (UI/UX). Suka menciptakan aplikasi yang user-friendly dan inovatif. Terlibat dalam komunitas pengembang teknologi untuk berbagi pengetahuan.",
        verified_status: "verified",
        price: 150000,
        rating: 2.8
    },
    {
        talentId: "facf35ed-13fd-4ce1-b09c-5e4c97d8f95c",
        authId: "1f1104eb-ee10-4060-bf17-3bbc7dca1a7c",
        description: "Pecinta fashion yang memiliki ketertarikan pada dunia seni. Saya suka bereksperimen dengan gaya pakaian yang berbeda, dan senang berbagi tips dan trik untuk meningkatkan kepercayaan diri.",
        verified_status: "verified",
        price: 150000,
        rating: 4.5
    },
    {
        talentId: "9e7573c7-84f9-466b-9f79-b5ee81e2aeab",
        authId: "1a15f55d-a9af-46d6-8ddb-537a0d830583",
        description: "Peneliti medis dengan minat dalam inovasi di bidang kesehatan. Suka menjelajahi solusi baru untuk penyakit dan berkomitmen pada penemuan-penemuan yang dapat meningkatkan kesehatan manusia. Terlibat dalam proyek riset medis yang berdampak positif.",
        verified_status: "verified",
        price: 150000,
        rating: 3
    },
    {
        talentId: "18fcdceb-8a2d-4898-a3db-b98f1c130bf4",
        authId: "8c72f5e7-aa1b-44bf-a8e9-86af773819aa",
        description: "Videografer dengan keahlian dalam pengeditan video dan kreatif multimedia. Suka menciptakan konten visual yang menarik dan berinovasi. Terlibat dalam produksi video untuk berbagai keperluan seperti acara, promosi, dan dokumenter.",
        verified_status: "verified",
        price: 150000,
        rating: 1.4
    },
    {
        talentId: "edcc67ff-3c41-4a77-9e87-482c9fc8b5fb",
        authId: "9f3cd753-8727-4f7e-83ef-1edceddd93dc",
        description: "Perancang taman yang peduli pada lanskap dan konservasi alam. Suka menciptakan ruang hijau yang indah dan berfungsional. Terlibat dalam proyek-proyek pelestarian alam dan edukasi lingkungan.",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "6e7cf4de-e55b-4fd6-b86c-9c4b0891bfc3",
        authId: "4fdb1f4f-d610-45b7-98ef-b0cb1f940dc9",
        description: "Seniman mural yang berfokus pada seni jalanan dan pengembangan komunitas seni. Suka menciptakan mural yang mencerminkan keunikan dan identitas suatu daerah. Terlibat dalam kegiatan seni untuk membangun solidaritas di komunitas.",
        verified_status: "verified",
        price: 150000,
        rating: 3.4
    },
    {
        talentId: "b41d99bc-0952-459c-b2a5-d2f829a643df",
        authId: "fce42a4a-9c77-4360-8b05-579e3d689d29",
        description: "Pengajar musik yang ahli dalam berbagai instrumen dan orkestra. Suka mendidik generasi muda tentang keindahan musik dan keterampilan bermain instrumen. Terlibat dalam proyek musik kolaboratif dan pendidikan seni.",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "871ae025-9e1c-4d7e-8515-0cc39a8a89c4",
        authId: "4b73da3b-e643-4d79-b3c2-3c537753bf79",
        description: "Spesialis dalam pengembangan platform e-learning dan desain instruksional. Suka menciptakan pengalaman pembelajaran online yang efektif dan menarik. Terlibat dalam proyek-proyek inovatif di bidang pendidikan digital.",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "0a070f99-23ba-40da-bd74-12f7bf3a0ef4",
        authId: "adf3d4fe-5dde-4745-978e-3b12da7448a3",
        description: "Pengajar yoga yang mendalami teknik meditasi dan menjadi wellness coach. Suka membimbing orang menuju kehidupan sehat dan seimbang. Terlibat dalam program pelatihan dan retret wellness.",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "a0c5529b-dd28-45f3-af84-3763862ea309",
        authId: "7a59ce77-a9fd-478c-a53d-ce8443f78146",
        description: "Blogger dengan fokus pada konten kreatif dan perjalanan. Suka berbagi pengalaman perjalanan, tips, dan inspirasi melalui tulisan dan media sosial. Terlibat dalam kampanye promosi dan partnership dengan merek terkait perjalanan.",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "c68df494-6772-47f6-ae42-3f1389e1d0d0",
        authId: "23f7d4e2-4d2a-4abc-bc57-ecdef0ca8579",
        description: "Profesional dalam penyuntingan video, animasi, dan efek visual. Suka menciptakan konten yang mengesankan dan menarik. Terlibat dalam produksi video untuk iklan, film, dan proyek kreatif lainnya.",
        verified_status: "verified",
        price: 150000,
        rating: 1.8
    },
    {
        talentId: "d7547f07-3865-4e45-ac66-c30ff0918749",
        authId: "5f35a7b5-c03a-4d08-9641-7d40fd8ff58b",
        description: "Psikolog dengan fokus pada konseling dan pengembangan diri. Suka membantu individu mencapai kesejahteraan mental dan perkembangan pribadi. Terlibat dalam workshop dan seminar psikologi.",
        verified_status: "verified",
        price: 150000,
        rating: 4.5
    },
    {
        talentId: "e302d256-86ec-4e83-ac76-089c149ee7cd",
        authId: "a509c970-ab5f-4279-a990-d2c7201cb85b",
        description: "Pengelola media sosial yang ahli dalam strategi pemasaran dan branding. Suka menciptakan konten yang berdampak dan membangun identitas merek. Terlibat dalam kampanye pemasaran digital dan analisis kinerja sosial media.",
        verified_status: "verified",
        price: 150000,
        rating: 1.7
    },
    {
        talentId: "f2c9955e-331a-4213-8df7-d003e819db00",
        authId: "1f63e1bb-8d3d-4757-8087-9b547f7aea75",
        description: "Pakar dalam bidang lingkungan yang berfokus pada gaya hidup berkelanjutan dan pendidikan eco-friendly. Suka memberikan informasi tentang praktik-praktik yang ramah lingkungan dan cara berkontribusi pada pelestarian alam.",
        verified_status: "verified",
        price: 150000,
        rating: 3.8
    },
    {
        talentId: "60c22d64-ec40-43bd-927a-18a969bb8584",
        authId: "ce1b2596-714b-4263-8a67-fc9d9118280c",
        description: "Desainer mode yang peduli pada daur ulang fashion dan menjadi trendsetter dalam industri ini. Suka menciptakan pakaian dari bahan-bahan daur ulang dan menginspirasi orang untuk mengadopsi gaya hidup berkelanjutan.",
        verified_status: "verified",
        price: 150000,
        rating: 5
    },
    {
        talentId: "3a8bad8c-4708-4292-ba40-93c8efd92f71",
        authId: "a9c4e812-23cf-4160-afc3-776fb06f4606",
        description: "Seniman dan kurator seni rupa yang aktif dalam membawa karya seni ke masyarakat. Suka mengorganisir pameran seni, mendukung seniman lokal, dan berkolaborasi dengan galeri seni. Menyebarkan apresiasi seni rupa melalui kegiatan komunitas.",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "4f3e9ce9-544e-488f-ad4d-3ee442990608",
        authId: "e48d0ad1-1618-49d7-b4b4-a9abf7e002ac",
        description: "Pengembang game yang ahli dalam menciptakan aplikasi game dengan fokus pada realitas virtual dan pengalaman mendalam. Suka menghadirkan dunia virtual yang menarik dan imersif. Terlibat dalam proyek pengembangan teknologi game terkini.",
        verified_status: "verified",
        price: 150000,
        rating: 3.2
    },
    {
        talentId: "b4d4121c-fd3c-4ccb-9d21-49bb1e658f30",
        authId: "eb8a3e58-6933-4a11-86c5-86f3e641eea7",
        description: "Kreator konten digital yang menghadirkan cerita-cerita interaktif melalui podcast dan platform digital. Suka melibatkan pendengar dalam cerita dengan cara yang inovatif. Terlibat dalam komunitas kreator konten dan media digital.",
        verified_status: "verified",
        price: 150000,
        rating: 1.8
    },
    {
        talentId: "b78e4548-3e09-44f5-b3dc-14c1275b4429",
        authId: "93362785-119a-4d22-9001-45974876b736",
        description: "Pengajar seni yang ahli dalam seni lukis dan menyelenggarakan workshop kreatif. Suka berbagi teknik dan inspirasi seni kepada siswa. Terlibat dalam kegiatan komunitas seni untuk mendukung perkembangan bakat seni lokal.",
        verified_status: "verified",
        price: 150000,
        rating: 1.3
    },
    {
        talentId: "f5fa3538-8b4a-406e-8ad0-a466ba10ec9b",
        authId: "2bc11af5-593d-4de2-926a-a51c98b5f738",
        description: "Pengusaha kuliner dengan keahlian memasak dan menjadi chef. Suka berbagi resep dan pengalaman kuliner melalui blog makanan. Terlibat dalam industri kuliner dan sering berkolaborasi dengan restoran lokal.",
        verified_status: "verified",
        price: 150000,
        rating: 3
    },
    {
        talentId: "f43738a5-0c1d-4fcc-91e3-988ba07e8188",
        authId: "bf78ee58-be7b-4d1b-8082-9bae101a8a36",
        description: "Ilustrator dengan fokus pada pembuatan komik dan desain karakter. Suka menciptakan visual yang menarik dan mengembangkan karakter-karakter unik. Terlibat dalam proyek ilustrasi dan desain untuk media cetak dan digital.",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "6742ab46-c8ca-4acc-99b2-9ba1c5bfccb6",
        authId: "3c6e7ccc-e4e5-4748-b44a-549eab5933aa",
        description: "Fotografer yang mengkhususkan diri dalam fotografi kuliner dan styling makanan. Suka menciptakan gambar-gambar yang menggugah selera dan terlibat dalam proyek editorial makanan. Memiliki portofolio di industri kulinari.",
        verified_status: "verified",
        price: 150000,
        rating: 3.3
    },
    {
        talentId: "6b192734-016a-45e1-b9f2-2749c9178821",
        authId: "f70394ba-4ae6-4b05-b3dc-763a97690a91",
        description: "Ahli dalam pengembangan aplikasi berbasis augmented reality (AR) dan teknologi interaktif. Suka menciptakan pengalaman berbeda dengan integrasi AR. Terlibat dalam riset dan proyek inovatif di dunia teknologi.",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "a1036055-b413-4a1c-b802-ab5c6fc17d41",
        authId: "fefe7b9c-be0d-41db-8943-491f390dcee7",
        description: "Spesialis dalam pengembangan kecerdasan buatan (AI), machine learning, dan data science. Suka menciptakan solusi berbasis data untuk berbagai masalah kompleks. Terlibat dalam proyek-proyek riset dan pengembangan teknologi terkini.",
        verified_status: "verified",
        price: 150000,
        rating: 1.6
    },
    {
        talentId: "277c75d7-c903-4948-967d-ca47ca8942f9",
        authId: "8554bf93-1959-467a-9488-0c44dd59e17b",
        description: "Seniman tato yang memiliki keahlian dalam seni tubuh dan menciptakan karya unik. Suka bekerja sama dengan klien untuk menghasilkan desain tato yang penuh makna. Terlibat dalam komunitas seni tubuh dan pameran seni.",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "208d4c27-f370-4f89-99ed-a0cde5be0738",
        authId: "529c64c8-09e5-405b-8295-fdf823313cbb",
        description: "Penyanyi dengan spesialisasi dalam musik jazz dan pengajar vokal. Suka membawakan lagu-lagu jazz klasik dan memberikan pelajaran vokal kepada siswa. Terlibat dalam pertunjukan live dan acara musik jazz lokal.",
        verified_status: "verified",
        price: 150000,
        rating: 3.3
    },
    {
        talentId: "8f0da535-eb0d-4f05-825f-69a62420f698",
        authId: "becd46cf-7b66-4a85-962d-c3d6bb1aa3ec",
        description: "Animator dengan fokus pada animasi 3D, efek visual, dan simulasi. Suka menciptakan visualisasi yang realistis dan mengesankan. Terlibat dalam proyek animasi untuk film, iklan, dan simulasi virtual.",
        verified_status: "verified",
        price: 150000,
        rating: 3.3
    },
    {
        talentId: "a067a625-e075-426e-ac7a-6ed45c31a5c6",
        authId: "25edbf4a-dd74-465b-9e3d-a9e6dda7077e",
        description: "Pengajar sains, teknologi, rekayasa, dan matematika (STEM) yang kreatif. Suka melibatkan siswa dalam eksperimen dan pembelajaran interaktif. Terlibat dalam program pendidikan STEM di sekolah-sekolah.",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "a0733c1d-8def-4845-92ff-2a4c60327562",
        authId: "c63923d7-9f5c-4c46-898c-ee09a5d98193",
        description: "Saya seorang gitaris yang memiliki kecintaan terhadap musik rock. Saya senang mengumpulkan album vinyl dan menghadiri konser-konser musik live",
        verified_status: "verified",
        price: 150000,
        rating: 2.9
    },
    {
        talentId: "3203ab9c-c6c6-4d21-8994-4429fcacefd7",
        authId: "cd1d15b0-09a0-4833-adf3-ae0e95ff62e7",
        description: "Saya bekerja di industri film dan memiliki minat dalam pembuatan film. Selain itu, saya juga seorang desainer grafis yang suka menciptakan desain kreatif",
        verified_status: "verified",
        price: 150000,
        rating: 2.8
    },
    {
        talentId: "21a256e8-4f49-4f37-acaf-427ebdeb0b51",
        authId: "7fdf2966-6c02-4a3a-b078-bbab4b5786a7",
        description: "Saya seorang pengembang perangkat lunak yang tertarik pada teknologi terbaru. Saya suka mempelajari bahasa pemrograman baru dan menciptakan solusi perangkat lunak inovatif",
        verified_status: "verified",
        price: 150000,
        rating: 2.1
    },
    {
        talentId: "c21a169a-912b-4362-879c-ba4f698409b8",
        authId: "400b08ee-3218-4b26-a116-2a80d73d5701",
        description: "Saya seorang model dan desainer busana yang berdedikasi untuk dunia fashion. Saya senang menciptakan gaya unik dan berpartisipasi dalam proyek-proyek fashion menarik",
        verified_status: "verified",
        price: 150000,
        rating: 3.6
    },
    {
        talentId: "48455203-f083-409f-9c07-70c3a45efa23",
        authId: "e14acf62-ee46-48de-834b-837cea43a8e3",
        description: "Saya memiliki minat dalam dunia teknik dan senang menciptakan barang-barang dengan tangan sendiri. Saya juga penggemar mobil dan suka mengikuti perkembangan industri otomotif",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "c9195b81-3728-4279-8838-e39a55975e34",
        authId: "06777663-38f4-44dd-9dc5-37231361e6e0",
        description: "Saya seorang seniman lukis yang fokus pada lukisan abstrak. Karya-karya saya sering kali diinspirasi oleh emosi dan perasaan yang sulit diungkapkan dalam kata-kata",
        verified_status: "verified",
        price: 150000,
        rating: 2.7
    },
    {
        talentId: "fb8b5217-0ddd-41b2-9224-57c9d933f1f0",
        authId: "e6a5ecf2-7158-4756-a5c1-6f79bab247a1",
        description: "Saya aktif sebagai relawan di tempat penampungan hewan dan memiliki kecintaan khusus terhadap kucing. Saya juga senang mengabadikan momen-momen mereka melalui fotografi",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "60c8d4e3-f0da-44f8-a6c8-452fb50ce4e1",
        authId: "350da91a-851e-4c93-8a78-eba798bdf4b8",
        description: "Saya suka menggali pengetahuan sejarah di setiap tempat yang saya kunjungi. Selain itu, saya tertarik pada arsitektur bangunan-bangunan bersejarah",
        verified_status: "verified",
        price: 150000,
        rating: 3.4
    },
    {
        talentId: "1ad396cd-4261-4539-b82a-3eced43246e5",
        authId: "05f93d80-21c1-4588-b7a1-dd9776ec1d28",
        description: "Saya memiliki taman sendiri di rumah dan senang mengoleksi tanaman hias. Saya juga memiliki pengetahuan mendalam tentang berbagai jenis tanaman dan keahlian dalam merawatnya",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "d73ba380-5e20-4e9b-b15e-6ea8be31d724",
        authId: "7946c97c-cf98-4a15-8625-8041e59d3912",
        description: "Saya memiliki teleskop dan sering mengamati bintang-bintang di malam hari. Saya juga suka mempelajari segala hal tentang ilmu pengetahuan dan eksplorasi ruang angkasa",
        verified_status: "verified",
        price: 150000,
        rating: 1.1
    },
    {
        talentId: "fe095641-bdc3-40ed-892e-6f485d9eacd7",
        authId: "302f35a5-3eac-400c-b9ec-787fc9840c03",
        description: "Pecinta makanan dan musik sekaligus gamer. Saya suka mencicipi berbagai hidangan baru, mendengarkan berbagai genre musik, dan menghabiskan waktu luang dengan bermain game.",
        verified_status: "verified",
        price: 150000,
        rating: 4.6
    },
    {
        talentId: "85ccfc69-4f38-4373-bed3-ec0beecfb5cd",
        authId: "5d368b55-907d-461e-a2b2-a490629a6d2d",
        description: "Seorang petualang seni yang mencari inspirasi dari perjalanan. Saya senang berolahraga terutama hiking, dan saya sering menggambarkan pengalaman perjalanan dan keindahan alam dalam karya seni saya.",
        verified_status: "verified",
        price: 150000,
        rating: 3.5
    },
    {
        talentId: "f319979e-579a-47e9-815d-8e453fac749c",
        authId: "01a76aab-a2b4-42db-8a38-443c2d75a4e6",
        description: "Seorang pecinta teknologi dan pembaca buku yang berat. Saya suka mengikuti perkembangan terbaru di dunia teknologi dan menghabiskan waktu luang dengan membaca buku-buku ilmiah dan fiksi.",
        verified_status: "verified",
        price: 150000,
        rating: 2.9
    },
    {
        talentId: "8567b129-dcc8-47f0-be27-3584d77dea1d",
        authId: "58098dfa-5b2c-4cc2-947d-27e15bed4027",
        description: "Saya seorang desainer fashion dengan passion dalam seni kerajinan. Suka menciptakan pakaian yang unik dan memadukan elemen musik ke dalam desain fashion saya.",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "1ce4e249-4955-4439-ab0d-4f3ff02d5b89",
        authId: "233cd241-5f11-4e1f-b97a-3c92c7dc5b33",
        description: "Pecinta olahraga, gamer sejati, dan suka berpetualang. Saya menggabungkan ketiga minat tersebut dalam kehidupan sehari-hari dan senang berbagi pengalaman dengan orang lain.",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "ee0fda9f-161f-43d2-8e1b-40f4aa36f860",
        authId: "7434e7ee-97d5-4baa-9df8-a748ffb3bce0",
        description: "Seorang musisi dan seniman visual dengan ketertarikan pada teknologi. Saya menciptakan karya seni yang menggabungkan elemen musik, seni visual, dan teknologi modern.",
        verified_status: "verified",
        price: 150000,
        rating: 4.6
    },
    {
        talentId: "b351e8df-5df9-4672-ad01-d73d84628b40",
        authId: "1a31eca3-9f3a-40c9-af9e-0d83786e2da6",
        description: "Pecinta kuliner dan penggemar olahraga yang sering melakukan perjalanan. Saya suka mencoba makanan lokal saat berwisata dan menjalani gaya hidup aktif dengan berolahraga rutin.",
        verified_status: "verified",
        price: 150000,
        rating: 1.4
    },
    {
        talentId: "29f83a60-cf39-4ce0-9268-cc60b9f8f2b3",
        authId: "9da0fb6c-379e-415a-90d0-44818babc2f7",
        description: "Saya seorang pengrajin yang mendalami seni crafting, terutama pembuatan aksesoris fashion handmade. Selain itu, saya juga pecinta buku dan sering menghadiri klub buku lokal.",
        verified_status: "verified",
        price: 150000,
        rating: 4.9
    },
    {
        talentId: "f27b2958-48de-4f11-a94c-d2b39ea3433b",
        authId: "482d349f-dc74-4d96-a045-63fbaedea055",
        description: "Seorang pengembang perangkat lunak yang passionate tentang teknologi dan gaming. Saya suka mencoba permainan baru dan selalu mengikuti perkembangan terkini di dunia teknologi.",
        verified_status: "verified",
        price: 150000,
        rating: 1.6
    },
    {
        talentId: "f31e4b38-d953-4088-9bd2-6c6a7892e13f",
        authId: "62f3ad46-2f05-496c-a79e-d6204cbea096",
        description: "Pecinta olahraga, musisi, dan seniman sejati. Saya suka bermain musik, terutama di alam terbuka, dan menggabungkan elemen seni dalam gaya hidup sehat dengan rutin berolahraga.",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "af738bff-52f3-4358-b553-fc550953725c",
        authId: "fa7ca5a8-357a-4cec-8cf6-c69e16b0177e",
        description: "Seorang desainer fashion yang senang menggabungkan inspirasi dari seni dan perjalanan ke dalam koleksi pakaian. Setiap desain saya menceritakan kisah unik dan pengalaman perjalanan yang memukau.",
        verified_status: "verified",
        price: 150000,
        rating: 1.1
    },
    {
        talentId: "81602892-e2b3-4f7a-a885-961e3cbbc18d",
        authId: "4e7558f9-f8ac-4840-ae2a-950db4ca4348",
        description: "Pecinta literasi dan pengembang perangkat lunak. Saya menghabiskan waktu luang dengan membaca berbagai genre buku dan terus memperdalam pengetahuan saya dalam dunia Programmer dan teknologi.",
        verified_status: "verified",
        price: 150000,
        rating: 1.3
    },
    {
        talentId: "12d2d756-5079-4093-944e-c330b95c926b",
        authId: "4f33b5ac-729a-45ed-a701-81401ada0508",
        description: "Seorang atlet yang juga memiliki ketertarikan pada musik dan seni kerajinan. Saya menemukan keseimbangan antara kebugaran fisik, ekspresi artistik melalui musik, dan menciptakan kerajinan tangan unik.",
        verified_status: "verified",
        price: 150000,
        rating: 4.9
    },
    {
        talentId: "2c795930-10f6-4112-a695-ff61e16e915d",
        authId: "aa86107a-0ccd-4c7c-9cba-b1bb6cd60f22",
        description: "Petualang kuliner dan seniman yang mencari inspirasi dari keindahan alam dan keanekaragaman budaya. Saya suka menggambarkan pengalaman perjalanan dan kelezatan makanan dalam lukisan dan karya seni saya.",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "f3348f13-34d2-43f6-9c1e-af6fc33971f1",
        authId: "3dda15a8-2034-4072-9e0b-7b1ba10d7577",
        description: "Seorang gamer yang juga app developer dan pecinta olahraga. Saya menyukai tantangan dalam permainan, menciptakan aplikasi inovatif, dan menjaga kesehatan tubuh melalui rutinitas olahraga.",
        verified_status: "verified",
        price: 150000,
        rating: 3.9
    },
    {
        talentId: "67425414-f1e8-4297-b1e3-5940c7340e36",
        authId: "b54af582-3061-4b0c-a9c0-cd5f1cd0439f",
        description: "Seorang pelatih olahraga yang memiliki kecintaan pada fashion dan musik. Saya tidak hanya mengajarkan kedisiplinan olahraga, tetapi juga menggabungkan gaya dan ritme dalam kehidupan sehari-hari.",
        verified_status: "verified",
        price: 150000,
        rating: 3.9
    },
    {
        talentId: "00627d20-528b-4c4e-92de-d97c12c151d1",
        authId: "c9e55dfb-cb75-4433-b3b8-5203986cb797",
        description: "Seniman dan pengrajin yang sering mencari inspirasi melalui perjalanan. Saya menyukai eksplorasi seni dalam berbagai bentuk, mulai dari melukis hingga menciptakan karya seni dengan bahan-bahan crafting unik.",
        verified_status: "verified",
        price: 150000,
        rating: 2.1
    },
    {
        talentId: "9d157ac4-3d45-4fd4-bc7a-c6843a17a7d2",
        authId: "4d8d1429-2e49-4c7b-a21f-287146dfa875",
        description: "Seorang pengembang perangkat lunak yang gemar membaca dan mengikuti perkembangan teknologi terbaru. Saya suka memperdalam pengetahuan saya dengan membaca buku-buku informatif sekaligus menciptakan solusi teknologi baru.",
        verified_status: "verified",
        price: 150000,
        rating: 3.9
    },
    {
        talentId: "2f2aca26-7590-4ff5-929b-c40a1938fc49",
        authId: "4e304529-279d-4f7f-a282-8b563198e534",
        description: "Pecinta masakan, olahraga, dan fashion. Saya senang mencoba resep baru, berolahraga untuk menjaga kesehatan, dan menyusun gaya berpakaian yang unik dan mengikuti tren fashion terkini.",
        verified_status: "verified",
        price: 150000,
        rating: 3.4
    },
    {
        talentId: "f72728c2-0e1f-4a94-a936-d2e155f0bb6d",
        authId: "6043423c-9d21-4e66-8be4-3dfb2bfe1c21",
        description: "Seorang gamer yang juga penikmat musik dan ahli dalam teknologi. Saya suka menggabungkan ketiganya, membuat soundtrack game, dan mengeksplorasi penggunaan teknologi dalam menciptakan pengalaman gaming yang unik.",
        verified_status: "verified",
        price: 150000,
        rating: 1.8
    },
    {
        talentId: "153f007d-3ecd-4b3b-8033-d8ec4c7a3dd4",
        authId: "a87fa8e0-69f1-45b8-a66d-01a31470fb30",
        description: "Penggemar buku yang juga memiliki kecintaan pada crafting dan seni visual. Saya sering menciptakan bookmark dan ilustrasi kreatif berdasarkan cerita yang saya baca.",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "0622c7ee-b132-4e79-bcad-3a1a069e398a",
        authId: "ad5197c6-d113-43ab-98e2-740bc3397dd0",
        description: "Seorang petualang yang mencintai olahraga dan musik. Saya suka menjelajahi tempat-tempat baru, berpartisipasi dalam berbagai kegiatan olahraga, dan mendengarkan musik untuk memotivasi diri.",
        verified_status: "verified",
        price: 150000,
        rating: 4.3
    },
    {
        talentId: "eb2db970-b3d2-4986-a2b3-f5c08818021d",
        authId: "55418ff9-06a9-4130-86c6-c20bab7a7f92",
        description: "Desainer fashion yang juga ahli dalam teknologi dan gamer. Saya menciptakan busana yang futuristik, mengikuti perkembangan teknologi fashion, dan menyukai tantangan dalam berbagai permainan video.",
        verified_status: "verified",
        price: 150000,
        rating: 4.7
    },
    {
        talentId: "b87f96c8-9737-4a2a-a778-3b85ad452bb3",
        authId: "4dcfb74e-5e8b-4bb1-93d9-f744425350a2",
        description: "Pecinta crafting yang juga gemar berolahraga dan membaca buku. Saya menghabiskan waktu luang dengan membuat kerajinan tangan sambil menikmati buku-buku inspiratif dan motivasional.",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "73b35c83-3fee-441b-9984-424af3a4a6a0",
        authId: "7458ae0d-1eec-4973-9dbd-6a5eeb7b3e3b",
        description: "Seniman multi-talenta yang menggabungkan seni visual, musik, dan teknologi. Saya menciptakan instalasi seni interaktif dan menyusun komposisi musik elektronik dengan pendekatan kreatif dan inovatif.",
        verified_status: "verified",
        price: 150000,
        rating: 2.3
    },
    {
        talentId: "cd355ed9-6f80-414d-b22c-eb036a573c1f",
        authId: "1071397f-c0be-440a-b156-cc724706a035",
        description: "Seorang musisi yang juga gamer dan seniman. Saya menciptakan musik dengan inspirasi dari dunia game dan seni, menciptakan pengalaman multimedia yang unik.",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "e78110d2-feae-4802-81f5-dc226efdfd6e",
        authId: "05f1a095-df6d-45c8-983d-fdd1f9f2b6e0",
        description: "Pecinta masakan dan seni kerajinan yang aktif berolahraga. Saya suka menciptakan resep baru, membuat kerajinan tangan yang unik, dan menjaga kesehatan dengan berpartisipasi dalam kegiatan olahraga.",
        verified_status: "verified",
        price: 150000,
        rating: 4.2
    },
    {
        talentId: "f6ebce2c-2441-4787-b2fc-58666ae6a350",
        authId: "add5bd4c-4c27-4fa0-86ae-59a478951124",
        description: "Seorang penjelajah teknologi dengan kecintaan pada fashion. Saya mengunjungi tempat-tempat eksotis, mengikuti tren teknologi terkini, dan menggabungkan elemen fashion dalam gaya hidup sehari-hari.",
        verified_status: "verified",
        price: 150000,
        rating: 2.3
    },
    {
        talentId: "9c865f87-6e24-4564-bb58-6de1a0f25fb6",
        authId: "ac4bad6d-37b3-4e67-84cf-71560d3d18b2",
        description: "Penggemar buku dan seniman yang menemukan inspirasi dari perjalanan. Saya membaca berbagai genre buku, menggambar lukisan pemandangan yang indah, dan berbagi pengalaman perjalanan melalui seni visual.",
        verified_status: "verified",
        price: 150000,
        rating: 4.3
    },
    {
        talentId: "354977ae-55ad-493b-bdc9-dfa6452ba038",
        authId: "51d05c3e-5aed-4750-b14d-5c17a512c700",
        description: "Ahli teknologi yang juga gamer dan pecinta seni kerajinan. Saya mengembangkan perangkat lunak inovatif, menciptakan permainan video, dan senang membuat berbagai proyek kerajinan dengan sentuhan teknologi.",
        verified_status: "verified",
        price: 150000,
        rating: 4.6
    },
    {
        talentId: "a30f6183-4292-4f2e-98d2-40066b2e2dd9",
        authId: "50824424-3ed1-4a83-9c85-1d38f61b17d5",
        description: "Seorang pemain game kompetitif yang juga aktif berolahraga dan memiliki bakat seni. Saya mencapai keseimbangan antara ketiga minat tersebut, menjadi atlet game, atlet fisik, dan seniman di waktu luang.",
        verified_status: "verified",
        price: 150000,
        rating: 3
    },
    {
        talentId: "c20b68ea-920d-4370-b86f-7b644f2514c7",
        authId: "a24cb691-ab1b-41d3-a77b-e04c953ef284",
        description: "Pecinta kerajinan tangan yang sering bepergian dan memiliki hasrat pada musik. Saya suka membuat suvenir unik dari setiap tempat yang dikunjungi sambil mendengarkan musik sebagai sumber inspirasi kreatif.",
        verified_status: "verified",
        price: 150000,
        rating: 4.9
    },
    {
        talentId: "e71d690c-52f6-443a-9110-ef1bb1fb2ded",
        authId: "64463080-4809-4967-9dea-75429cfc0136",
        description: "Seorang ahli teknologi dengan minat pada literasi dan fashion. Saya mengembangkan solusi teknologi, membaca buku-buku ilmiah, dan mengikuti tren fashion terbaru untuk menciptakan gaya yang berpadu dengan dunia teknologi.",
        verified_status: "verified",
        price: 150000,
        rating: 2.3
    },
    {
        talentId: "41bd7898-5530-4912-bfde-cce49bf3e76a",
        authId: "b7813a02-d2bd-40ae-9918-3067e7ff3105",
        description: "Pecinta olahraga, seniman, dan penjelajah. Saya menjalani gaya hidup aktif, menciptakan karya seni yang terinspirasi dari keindahan alam selama perjalanan, dan berbagi pengalaman unik dengan komunitas.",
        verified_status: "verified",
        price: 150000,
        rating: 3.3
    },
    {
        talentId: "e48453b0-1697-4ff7-ab78-f7712a84e6ec",
        authId: "05952c19-09ba-4556-a3e9-d8e0a97d43dc",
        description: "Desainer fashion yang juga gamer dan petualang. Saya menciptakan busana dengan sentuhan gaming, menjelajahi dunia dengan gaya unik, dan menggabungkan elemen fashion dalam pengalaman perjalanan.",
        verified_status: "verified",
        price: 150000,
        rating: 3.5
    },
    {
        talentId: "7cef8e39-2317-45a3-9db7-e15230ab5c12",
        authId: "1065a4b0-5b48-4df2-a55c-baae5d3fe10c",
        description: "Seorang musisi yang juga atlet dan memiliki ketertarikan pada dunia teknologi. Saya menciptakan harmoni antara melodi musik, kebugaran fisik, dan eksplorasi teknologi dalam keseharian saya.",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "ccd96b4a-3a56-423b-b5f0-ed3947a0e549",
        authId: "31a03333-6532-4aaa-9209-1a8b9dbdb048",
        description: "Seniman kreatif yang hobi membuat kerajinan tangan dan menyukai dunia gaming. Saya sering menciptakan ilustrasi seni yang terinspirasi dari permainan favorit, sambil mengeksplorasi berbagai teknik crafting.",
        verified_status: "verified",
        price: 150000,
        rating: 1.7
    },
    {
        talentId: "b1da1227-d4be-443b-a78e-2c759d619e10",
        authId: "e847b518-d7f0-4bce-810a-ff4002993547",
        description: "Penggemar perjalanan yang memiliki minat dalam fashion dan literasi. Saya menciptakan gaya berpakaian yang unik dari setiap destinasi yang dikunjungi dan senang membaca buku tentang kebudayaan setempat.",
        verified_status: "verified",
        price: 150000,
        rating: 3.9
    },
    {
        talentId: "57d1da47-e5f6-482c-ad94-2f66acfbcc7c",
        authId: "1a517651-b334-4d00-be7e-8c32a2feda4b",
        description: "Pecinta olahraga yang juga ahli teknologi dan penggemar musik. Saya aktif berpartisipasi dalam kegiatan olahraga, mengembangkan aplikasi yang inovatif, dan menciptakan melodi yang menginspirasi.",
        verified_status: "verified",
        price: 150000,
        rating: 4.3
    },
    {
        talentId: "fd1b1b7a-8995-43b1-a8e0-b28e9343e0d3",
        authId: "3b2e8911-8704-4eff-89be-d78392f429af",
        description: "Pembaca buku yang juga memiliki kecintaan pada fashion dan seni kerajinan. Saya menyusun gaya berpakaian berdasarkan karakter buku favorit dan menciptakan kerajinan tangan dengan tema-tema dari cerita yang saya baca.",
        verified_status: "verified",
        price: 150000,
        rating: 3.3
    },
    {
        talentId: "90c8c35e-80d0-4478-8d78-9ec07e91c523",
        authId: "7ea9c2cf-cbe4-47bf-b8c2-2008559256b7",
        description: "Seorang penggemar alam bebas dan pendaki gunung. Saya suka menjelajahi tempat-tempat indah di alam dan mengabadikan kecantikan alam tersebut melalui fotografi. Pendakian gunung memberikan saya kepuasan dan ketenangan",
        verified_status: "verified",
        price: 150000,
        rating: 1.8
    },
    {
        talentId: "0f17e36a-3577-43e9-9789-e44f6505405d",
        authId: "d93add10-cd82-4e6f-a442-286ba64dbc14",
        description: "Seorang pengembang perangkat lunak yang memiliki passion di bidang Programmer dan teknologi. Saya suka menciptakan aplikasi dan game yang inovatif serta selalu mengikuti perkembangan teknologi terkini",
        verified_status: "verified",
        price: 150000,
        rating: 4.1
    },
    {
        talentId: "fcb6ed30-8621-492f-9058-4b1420bf4b2e",
        authId: "a413a5c5-8900-4d27-909b-bf2bf573e8e9",
        description: "Saya adalah seorang desainer grafis dan seniman rupa. Kreatif saya terpancar melalui desain dan seni visual. Saya senang menciptakan karya yang memukau dan memberikan dampak positif",
        verified_status: "verified",
        price: 150000,
        rating: 4.7
    },
    {
        talentId: "8bc16128-7bdd-4b9f-8992-9ae0d6f00018",
        authId: "6f61bb97-2bbf-4c50-b44d-b6c718cd161c",
        description: "Seorang praktisi yoga dan meditasi yang peduli dengan kesehatan holistik. Saya senang berbagi pengalaman dan pengetahuan tentang hidup sehat melalui yoga dan meditasi. Keseimbangan tubuh dan pikiran sangat penting bagiku",
        verified_status: "verified",
        price: 150000,
        rating: 2.5
    },
    {
        talentId: "72cce559-a16d-49b7-aa69-a30a52a9dddf",
        authId: "a4636fab-4480-47e9-8df0-bb65cb35ae80",
        description: "Seorang penyanyi dan pemain gitar yang menyukai berbagai genre musik. Saya sering tampil di acara-acara lokal dan senang berkolaborasi dengan musisi lain. Musisi adalah bahasa yang dapat menyatukan berbagai kalangan",
        verified_status: "verified",
        price: 150000,
        rating: 2.1
    },
    {
        talentId: "a563eb90-32d6-4145-b0ca-a571760cb409",
        authId: "2efe7efa-be48-4c8b-8476-68b958804c6c",
        description: "Saya adalah seorang pengajar yang memiliki passion dalam memberikan pendidikan berkualitas. Mata pelajaran utama saya adalah Bahasa Inggris, dan saya senang membantu murid-murid saya meraih potensi terbaik mereka dalam belajar",
        verified_status: "verified",
        price: 150000,
        rating: 4.7
    },
    {
        talentId: "a2ca8614-780e-4765-8545-1ed00ab30548",
        authId: "332ccade-48e2-4453-903e-bce1712be128",
        description: "Seorang desainer interior dan arsitek yang mencintai seni dalam menciptakan ruang yang indah dan fungsional. Saya memiliki pengalaman dalam mengubah ruang menjadi tempat yang memikat dan nyaman untuk ditinggali",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "2ab7d5ea-db1f-498e-ba54-68906fdd5a2d",
        authId: "b243aa78-42e9-47a1-8a3a-cc6e3d1a1bb9",
        description: "Saya adalah seorang vlogger dan content creator yang suka berbagi pengalaman traveling. Saya sering mengunggah konten-konten menarik tentang destinasi wisata, makanan, dan kebudayaan di berbagai tempat di seluruh dunia",
        verified_status: "verified",
        price: 150000,
        rating: 3.8
    },
    {
        talentId: "704aaa27-9e6d-4894-a99f-ae804113a4b0",
        authId: "c8489097-cdf6-45d9-a244-e577cad504a1",
        description: "Seorang fotografer profesional khususnya dalam bidang fotografi pernikahan dan potret. Saya berkomitmen untuk mengabadikan momen-momen istimewa dalam hidup orang melalui gambar yang indah dan berkesan",
        verified_status: "verified",
        price: 150000,
        rating: 4.7
    },
    {
        talentId: "cb42e0b3-b660-4702-8a7c-636b7f3fe684",
        authId: "bcbded10-e0b2-469a-b15c-343b5fed2d07",
        description: "Saya adalah seorang koki dengan spesialisasi dalam masakan Asia. Keahlian saya mencakup berbagai hidangan tradisional Asia dengan sentuhan kreatif. Saya senang berbagi kelezatan masakan lezat dengan orang-orang di sekitar saya",
        verified_status: "verified",
        price: 150000,
        rating: 1.1
    },
    {
        talentId: "7a4b91ad-968c-4dce-bdd0-d8d3b02ada8a",
        authId: "acd4c4ce-f75e-4182-b94f-da38deda4c49",
        description: "Seorang penulis dengan cinta pada dunia sastra. Saya sering menulis cerpen dan novel, menciptakan dunia imajiner yang memikat pembaca. Karya-karya saya mencakup berbagai genre sastra",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "77cfd5e7-3a9d-48f2-ad22-b90b3abc12a2",
        authId: "53e2801b-f0f3-437d-b610-db73897abd01",
        description: "Seorang programmer yang bersemangat dalam menciptakan solusi teknologi. Keterampilan saya mencakup coding, pengembangan aplikasi, dan eksplorasi teknologi terbaru. Saya senang berkolaborasi untuk mencapai proyek-proyek inovatif",
        verified_status: "verified",
        price: 150000,
        rating: 1.3
    },
    {
        talentId: "9c81654b-2935-45ac-bae3-4bded1db91d5",
        authId: "d174dc59-9f35-4c1c-8f79-25c0cab75f17",
        description: "Seorang petualang yang suka menjelajahi tempat-tempat eksotis di seluruh dunia. Saya berbagi pengalaman dan petualangan saya melalui blog perjalanan, menginspirasi orang untuk menjelajahi keindahan dunia ini",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "b3c2758a-75ec-4f86-8ce5-d854ab1dcc27",
        authId: "caa4d7f3-3956-4cfa-9896-fe6ad245ace1",
        description: "Seorang pengusaha yang memiliki semangat untuk inovasi dan wirausaha. Saya sering terlibat dalam proyek-proyek bisnis yang menantang dan memiliki visi untuk menciptakan perubahan positif dalam dunia bisnis",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "20c8f636-0405-4f64-a34f-a2b53db0f30b",
        authId: "8f5d9878-f06e-4db1-8f8f-ac4185c43d51",
        description: "Saya adalah desainer mode dengan kecintaan pada seni dan kreativitas. Koleksi-koleksi saya mencerminkan gaya unik dan ekspresi diri. Saya senang menghadirkan tren baru dan gaya yang memukau",
        verified_status: "verified",
        price: 150000,
        rating: 4.3
    },
    {
        talentId: "8a3c89c9-f92a-4790-b516-496f92aa81d5",
        authId: "7c8b7b4a-2967-41bd-8962-2f7eb9f510c9",
        description: "Seorang animator dengan keahlian dalam seni digital dan film animasi. Saya menciptakan karakter-karakter yang hidup dalam dunia animasi dan senang menyampaikan cerita melalui gambar bergerak",
        verified_status: "verified",
        price: 150000,
        rating: 4.1
    },
    {
        talentId: "7ea59d01-29dc-488c-9169-547da81dd047",
        authId: "d2323a67-d05c-412c-ab50-f6aedc4694ce",
        description: "Seorang psikolog yang peduli pada kesehatan mental dan kesejahteraan. Saya memiliki pengalaman dalam memberikan konseling dan dukungan kepada individu yang menghadapi berbagai tantangan mental dan emosional",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "676b2f1c-7181-4b4f-8529-3a5165ec3627",
        authId: "ac623b64-6e7e-467f-b538-d16e083b5ba5",
        description: "Seorang pengembang aplikasi mobile dengan fokus pada pengembangan solusi inovatif untuk perangkat seluler. Saya memiliki keahlian dalam berbagai platform dan teknologi terkini",
        verified_status: "verified",
        price: 150000,
        rating: 2.8
    },
    {
        talentId: "bcbbabdc-8c45-436c-9b90-692ebd1d9cd2",
        authId: "20667604-d2d6-4244-ab99-5c20bd8f3eec",
        description: "Seorang penyiar radio dengan suara yang merdu dan bakat dalam komunikasi. Saya senang berinteraksi dengan pendengar, menyampaikan informasi, dan menciptakan pengalaman mendengarkan yang menyenangkan",
        verified_status: "verified",
        price: 150000,
        rating: 1.3
    },
    {
        talentId: "065bb455-4fb1-410c-96a0-555d64751bc6",
        authId: "32bb7458-53e3-49cd-a8be-c4fff6e0a90b",
        description: "Seorang atlet yang berdedikasi pada olahraga dan mencapai prestasi tinggi. Saya memiliki disiplin diri yang tinggi dan senang berkompetisi dalam berbagai kejuaraan olahraga",
        verified_status: "verified",
        price: 150000,
        rating: 4.7
    },
    {
        talentId: "f0b8710a-7edd-4e67-a0fa-b3754bfd8576",
        authId: "6d05ce47-4cc5-4bc0-95fa-15236354d79d",
        description: "Seorang ilustrator dengan minat pada seni visual dan ilustrasi buku anak. Saya senang menciptakan gambar-gambar yang menarik dan berwarna, menghidupkan cerita-cerita anak-anak melalui visual yang menggugah imajinasi",
        verified_status: "verified",
        price: 150000,
        rating: 5
    },
    {
        talentId: "0a838c8e-09df-4855-93b2-639de08f8d6c",
        authId: "b9993ed5-bee0-4dd2-8530-7ac40c518a81",
        description: "Seorang pemandu wisata yang mencintai perjalanan dan memiliki pengetahuan mendalam tentang sejarah tempat-tempat wisata. Saya senang berbagi cerita dan fakta menarik kepada para wisatawan, menciptakan pengalaman berkesan",
        verified_status: "verified",
        price: 150000,
        rating: 3.5
    },
    {
        talentId: "423fb6bf-8d4f-4d0d-aebf-3cf110c0bf88",
        authId: "2a297338-25fe-4817-8d31-b54665425c98",
        description: "Seorang ahli biologi dengan fokus pada ilmu alam dan konservasi lingkungan. Saya memiliki pengalaman dalam penelitian dan upaya untuk melestarikan keanekaragaman hayati serta meningkatkan kesadaran akan pentingnya konservasi",
        verified_status: "verified",
        price: 150000,
        rating: 1
    },
    {
        talentId: "2cc66f5a-1c9e-4dc4-967b-e5b977ab42fa",
        authId: "90eff222-ac9e-4f8f-b3f2-d0f25a742a7f",
        description: "Seorang instruktur yoga yang mendalami praktik kesehatan dan meditasi. Saya memandu orang untuk mencapai keseimbangan tubuh dan pikiran melalui latihan yoga dan meditasi yang terarah",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "d9489933-0259-4490-8613-4e5acd45e2f2",
        authId: "312c0bd7-bd96-4cff-b80d-1d70eea6a418",
        description: "Seorang penari dengan kecintaan pada seni pertunjukan, khususnya tari tradisional. Saya memiliki keahlian dalam mempertahankan warisan budaya melalui gerakan tari dan senang berbagi keindahan tradisi dengan penonton",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "e76178e1-9165-4910-bd30-d8dd7f8b9387",
        authId: "67a2076a-70af-432d-bbf1-60df8b3ffd40",
        description: "Seorang editor video yang kreatif dengan bakat dalam produksi konten. Saya ahli dalam mengolah materi visual menjadi karya yang menarik dan berkualitas tinggi, mendukung keberhasilan proyek-proyek kreatif",
        verified_status: "verified",
        price: 150000,
        rating: 1.5
    },
    {
        talentId: "e44b9360-4605-4df2-b8e7-38779a99dce0",
        authId: "eaddf7c7-604f-4a12-afb1-8733c00abfed",
        description: "Seorang dokter dengan komitmen untuk memberikan pelayanan medis terbaik kepada pasien. Saya memiliki keahlian di berbagai bidang kesehatan dan selalu berusaha untuk meningkatkan kesejahteraan masyarakat",
        verified_status: "verified",
        price: 150000,
        rating: 3
    },
    {
        talentId: "e19c5ed2-57b4-48ac-b3fc-5de476bcc046",
        authId: "ed5f552f-9793-4997-a095-9319c9372ca8",
        description: "Seorang animator 3D yang memiliki keahlian dalam seni digital dan efek visual. Saya menciptakan animasi tiga dimensi yang memukau dan memadukan seni dengan teknologi untuk menciptakan pengalaman visual yang luar biasa",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "1815b57c-67c4-4a16-b3be-647862ad6b35",
        authId: "9d52e51c-81a8-4e2d-ad0a-6254fa376a76",
        description: "Seorang psikoterapis yang fokus pada kesehatan mental dan konseling individu. Saya membantu klien dalam menjalani perubahan positif dan mencapai kesejahteraan emosional dan psikologis",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "0d93c43b-bc76-4b16-ad6c-9a0e3f815736",
        authId: "8a3e165f-95a3-41cb-a5c8-81512a62ad38",
        description: "Seorang peneliti yang berdedikasi dalam bidang ilmu pengetahuan dan inovasi. Saya senang mengeksplorasi konsep-konsep baru dan berkontribusi pada perkembangan pengetahuan dalam komunitas ilmiah",
        verified_status: "verified",
        price: 150000,
        rating: 2.1
    },
    {
        talentId: "a3f089f0-399c-4e7f-a2c2-3f55cbea2189",
        authId: "d836a946-ce05-40a2-8442-16861bb864c8",
        description: "Seorang aktor dengan passion dalam seni peran dan teater. Saya mencintai proses kreatif dalam menghidupkan karakter dan menyampaikan emosi melalui panggung. peran adalah cara saya untuk berkomunikasi dengan dunia",
        verified_status: "verified",
        price: 150000,
        rating: 4.5
    },
    {
        talentId: "06ad747d-b1e1-42d1-aa1b-407b4fde8e81",
        authId: "218ef4be-6c58-402b-b52a-63b35cd3d50c",
        description: "Seorang pengembang game yang menciptakan pengalaman bermain yang menarik dan inovatif. Saya memiliki keahlian dalam pengembangan permainan video dan berkomitmen untuk menyajikan hiburan yang memukau",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "a009eab5-83ab-4fce-b087-522c09750334",
        authId: "cc7f985c-52c4-4c6f-8e34-e94455b80453",
        description: "Seorang penulis lagu yang mencintai dunia musik dan kreativitas. Saya mengekspresikan perasaan dan cerita melalui lirik-lirik lagu yang saya ciptakan. Musisi adalah bahasa yang universal dan mempersatukan berbagai emosi",
        verified_status: "verified",
        price: 150000,
        rating: 3.5
    },
    {
        talentId: "73b4c3dc-e442-4f44-a242-80a070fa0de6",
        authId: "5e0dd9f1-9ab8-437a-82bc-4106d54e8d7a",
        description: "Seorang dosen di bidang ilmu komputer yang berkomitmen untuk memberikan pendidikan tinggi berkualitas. Saya menyukai berbagi pengetahuan dengan mahasiswa dan terlibat dalam riset untuk kemajuan ilmu komputer",
        verified_status: "verified",
        price: 150000,
        rating: 1.7
    },
    {
        talentId: "f80f1cf5-af8d-4eff-9e0b-278df15a1cd8",
        authId: "539d121d-ac22-49fc-8798-6d0ffd4e3612",
        description: "Seorang astronom dengan minat pada ilmu pengetahuan dan penelitian antariksa. Saya mengamati bintang, planet, dan fenomena luar angkasa lainnya untuk memahami rahasia alam semesta",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "59844adb-3b0f-4ad8-8aca-0fb761c5b6ba",
        authId: "84c49a6a-0577-4722-9857-0516b7f993af",
        description: "Seorang ahli bahasa dan penerjemah yang fasih dalam berbagai bahasa. Saya memiliki pengetahuan mendalam tentang struktur bahasa dan senang membantu orang berkomunikasi melintasi batas bahasa",
        verified_status: "verified",
        price: 150000,
        rating: 2.3
    },
    {
        talentId: "6cc2e5c1-1bc4-4b42-8d84-26135a77709a",
        authId: "3550dbf0-2e35-4346-980d-49ac10723143",
        description: "Seorang pengembang web yang memiliki keahlian dalam Programmer dan desain antarmuka pengguna. Saya fokus pada menciptakan pengalaman pengguna yang responsif dan estetis dalam pengembangan situs web",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "de873eec-847b-4807-a67d-c1c63ea5c0d0",
        authId: "2d6bba32-5288-4c0a-a505-af7f3689a511",
        description: "Seorang konsultan keuangan yang memberikan saran tentang manajemen keuangan dan investasi. Saya berkomitmen untuk membantu klien mencapai tujuan keuangan mereka melalui perencanaan yang cermat",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "8e452ec6-b175-4fdf-b3c8-c17370c6cc7b",
        authId: "a3d7b8c8-a489-49d2-b52b-5ef7e9b84694",
        description: "Seorang penasihat karir yang membantu individu merencanakan dan mengelola karir mereka. Saya memberikan panduan dalam memilih jalur pendidikan dan mencari pekerjaan yang sesuai dengan minat dan keterampilan",
        verified_status: "verified",
        price: 150000,
        rating: 4.2
    },
    {
        talentId: "1f73feb0-74d1-40b5-9b5e-645c84651199",
        authId: "6bee901a-88e1-439c-852e-98a4473c0ec7",
        description: "Seorang seniman tattoo yang menciptakan karya seni pada tubuh. Saya memiliki keahlian dalam menggambarkan kreativitas dan makna melalui seni tatoo, menciptakan karya yang unik dan personal",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "28476cd6-1f0e-4117-acc4-cc61c2d806a4",
        authId: "16df0670-1cc0-438b-b293-61bbdffd3e69",
        description: "Seorang perancang mode yang menciptakan tren dan desain pakaian yang inovatif. Saya berdedikasi untuk membawa ide-ide kreatif menjadi kenyataan dalam dunia fashion, menjadikan setiap pakaian sebagai karya seni",
        verified_status: "verified",
        price: 150000,
        rating: 2.8
    },
    {
        talentId: "c8e4b98b-68fe-4a30-9b7a-b31db6e2a9b3",
        authId: "440f6720-a4da-44b0-bd03-11db44428986",
        description: "Seorang ahli fisika yang mendalami prinsip-prinsip dasar alam semesta. Saya terlibat dalam penelitian untuk memahami fenomena fisika yang kompleks dan berusaha membawa inovasi dalam bidang ilmu pengetahuan",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "20129291-44d8-4c62-b478-d346c4300a03",
        authId: "ce71938d-ad04-4dd4-8ae3-398c9a9ace9c",
        description: "Seorang pengajar seni yang berkomitmen untuk menginspirasi siswa dalam mengekspresikan diri melalui seni rupa. Saya membimbing mereka dalam mengembangkan kreativitas dan apresiasi terhadap keindahan seni",
        verified_status: "verified",
        price: 150000,
        rating: 4.4
    },
    {
        talentId: "39778b2c-e63f-4fa7-a5f7-c67f04734405",
        authId: "6e919b1e-e25f-490d-8949-6467c99023bc",
        description: "Seorang analis data yang ahli dalam menganalisis informasi dan menciptakan wawasan berharga melalui data. Saya menggunakan keterampilan analisis untuk mendukung pengambilan keputusan dan inovasi dalam teknologi",
        verified_status: "verified",
        price: 150000,
        rating: 3.8
    },
    {
        talentId: "faceb756-45b7-42cb-9ddb-3a398a4a70a1",
        authId: "f8d4bf84-5725-4705-9f57-8baf79a0a1ee",
        description: "Seorang desainer grafis yang mengkhususkan diri dalam seni digital dan branding. Saya menciptakan identitas visual yang unik untuk merepresentasikan merek atau produk dengan estetika yang menarik",
        verified_status: "verified",
        price: 150000,
        rating: 2.9
    },
    {
        talentId: "7581e40e-b56c-4204-b8c5-0df9f52f352b",
        authId: "bee27e13-ab29-4ceb-8dec-b48860832509",
        description: "Seorang terapis musik yang menggunakan keahlian musik untuk meningkatkan kesehatan dan kesejahteraan. Saya menyediakan sesi musikoterapi yang terapeutik untuk membantu individu mencapai tujuan kesehatan mereka",
        verified_status: "verified",
        price: 150000,
        rating: 3.5
    },
    {
        talentId: "dbb9bb27-5f8f-4b45-9977-4cb7a46f7934",
        authId: "000bee19-1e4f-41bb-8e9d-2a6cd2e231f6",
        description: "Seorang animator karakter dengan fokus pada pengembangan karakter dalam film animasi. Saya menciptakan karakter yang memukau dan memberikan dimensi emosional pada kisah melalui animasi",
        verified_status: "verified",
        price: 150000,
        rating: 5
    },
    {
        talentId: "9c35c311-85d9-4f44-a0cc-504675e120ab",
        authId: "ed451911-b8bd-414a-b565-fa7edd082c8c",
        description: "Seorang guru yoga yang mengajar berbagai teknik yoga untuk meningkatkan kesehatan dan keseimbangan. Saya membimbing murid-murid dalam praktik yoga untuk mencapai keadaan pikiran dan tubuh yang harmonis",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "24ef8ba2-456a-44e1-b8bd-bba475655256",
        authId: "e0a2c7ee-ce5a-41a6-bc13-d92e0ae01bf5",
        description: "Seorang peneliti sosial yang mendalami dinamika masyarakat dan kebudayaan. Saya terlibat dalam penelitian untuk memahami dampak perubahan sosial dan budaya serta memberikan wawasan yang berharga",
        verified_status: "verified",
        price: 150000,
        rating: 2.5
    },
    {
        talentId: "16afa7be-2b8d-458a-bcfa-c65e77997892",
        authId: "499ce9dd-1a59-406c-a3e5-091d7ed9943b",
        description: "Seorang pemandu alam yang menyukai petualangan di alam terbuka. Saya mengajak orang untuk menjelajahi keindahan alam, memberikan pengetahuan tentang flora dan fauna, serta melibatkan mereka dalam kegiatan petualangan seru",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "dc931d6c-84f2-4686-b905-bb61ecb5f590",
        authId: "f03a7c33-fc9f-4664-b5db-bc825806a93d",
        description: "Seorang editor buku yang berdedikasi untuk meningkatkan kualitas naskah dan membantu penulis mencapai potensi penuhnya. Saya memiliki keahlian dalam menyunting teks dan memberikan saran konstruktif",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "0bbbab8a-f643-4481-8b8f-80b321552949",
        authId: "c8129e80-ac6e-4976-bcfc-d166227600b0",
        description: "Seorang konsultan bisnis yang memberikan panduan dalam pengembangan strategi bisnis dan manajemen. Saya bekerja dengan perusahaan untuk mencapai tujuan bisnis mereka melalui analisis, perencanaan, dan implementasi strategi yang efektif",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "ca3286f5-6be3-4e77-91b3-928710cf8531",
        authId: "0fb071c8-0445-441a-94aa-002adfc995b8",
        description: "Seorang instruktur senam yang mengajar berbagai jenis senam untuk meningkatkan kesehatan dan kebugaran. Saya berfokus pada gerakan yang menyenangkan dan memberikan motivasi kepada peserta untuk menjalani gaya hidup aktif",
        verified_status: "verified",
        price: 150000,
        rating: 3.6
    },
    {
        talentId: "5cee7598-c17f-4417-90c7-ec6bad6a6ea1",
        authId: "2e7ef897-ed2f-4740-a916-f9fac9a297a5",
        description: "Seorang peneliti lingkungan yang meneliti dampak manusia terhadap lingkungan dan mencari solusi untuk pelestarian alam. Saya berdedikasi untuk meningkatkan kesadaran akan isu-isu lingkungan dan berkontribusi pada keberlanjutan planet kita",
        verified_status: "verified",
        price: 150000,
        rating: 1.1
    },
    {
        talentId: "ed9fe31a-7af6-4d52-b397-add9fb2dd7a5",
        authId: "645e1c3e-9134-4166-b8ab-277141286f23",
        description: "Seorang koki dengan spesialisasi dalam memasak masakan vegan dan nabati. Saya menciptakan hidangan lezat yang memenuhi kebutuhan gizi, menjadikan gaya makan vegan lebih beragam dan menarik",
        verified_status: "verified",
        price: 150000,
        rating: 1
    },
    {
        talentId: "f9b937a5-3940-4b81-90ce-f87f2900f405",
        authId: "fc7233fb-4a74-41d9-9c9e-9176b192ba69",
        description: "Seorang fotografer yang mengkhususkan diri dalam memotret arsitektur dan desain. Saya menangkap keindahan dan detail arsitektur melalui lensa kamera, menciptakan visual yang memukau dan inspiratif",
        verified_status: "verified",
        price: 150000,
        rating: 2.5
    },
    {
        talentId: "4ea4adc0-b279-496d-ace1-b6035a7d80d6",
        authId: "1e70758e-fb6c-4e21-b21a-001e05be7dfb",
        description: "Seorang pemrogram dengan fokus pada pengembangan perangkat lunak menggunakan bahasa pemrograman Python. Saya terlibat dalam menciptakan solusi perangkat lunak yang efisien dan dapat diandalkan",
        verified_status: "verified",
        price: 150000,
        rating: 3.6
    },
    {
        talentId: "d37e22fe-70a5-4bfe-9276-4435e8f56806",
        authId: "597f25b4-86b4-4318-8e64-054ae29685c5",
        description: "Seorang seniman digital yang menciptakan karya seni visual dan ilustrasi menggunakan perangkat lunak digital. Saya menyampaikan pesan dan emosi melalui karya seni digital yang modern dan kreatif",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "d8ea0671-fc3f-4daf-ad31-de9ef1f1743a",
        authId: "18a9c4f9-6c98-496c-a58a-f7f85f1df4d8",
        description: "Seorang konsultan kesehatan yang memberikan panduan mengenai pencegahan penyakit dan gaya hidup sehat. Saya bekerja dengan individu untuk mencapai tujuan kesehatan mereka dan meningkatkan kualitas hidup",
        verified_status: "verified",
        price: 150000,
        rating: 1.7
    },
    {
        talentId: "2919f72a-8281-4974-9264-c630af6807a7",
        authId: "2bf29cde-3e01-4674-b5c5-9279a9cc0e40",
        description: "Seorang editor video kreatif dengan keahlian dalam produksi konten. Saya memiliki pengalaman dalam mengedit dan merancang video untuk berbagai keperluan, menciptakan konten yang menarik dan berkualitas tinggi",
        verified_status: "verified",
        price: 150000,
        rating: 1.7
    },
    {
        talentId: "49d0b5d1-7c22-41f5-8ad3-6de1e7a34286",
        authId: "90f47ffe-7f32-4110-afae-2b6e54d5b798",
        description: "Seorang perancang layar dengan fokus pada desain antarmuka pengguna (UI/UX). Saya menciptakan pengalaman pengguna yang intuitif dan menarik, memastikan bahwa aplikasi dan situs web dapat digunakan dengan mudah",
        verified_status: "verified",
        price: 150000,
        rating: 2.5
    },
    {
        talentId: "91143442-7f8d-47f2-aa04-12c1a6467fde",
        authId: "cf2ba5d0-9dfd-49d9-9c68-f3411227af99",
        description: "Seorang peneliti medis yang terlibat dalam penelitian untuk mengembangkan inovasi dalam bidang kesehatan. Saya berfokus pada penemuan solusi baru untuk penyakit dan peningkatan metode pengobatan",
        verified_status: "verified",
        price: 150000,
        rating: 3.4
    },
    {
        talentId: "2590c3a6-5b61-49b6-971a-29422683070b",
        authId: "4ce0c1b2-48bc-407a-8538-f4a40ab60a2a",
        description: "Seorang seniman tato dengan keahlian dalam seni tubuh dan desain. Saya menciptakan karya seni permanen yang unik dan personal, menggambarkan cerita dan makna bagi setiap individu",
        verified_status: "verified",
        price: 150000,
        rating: 4.5
    },
    {
        talentId: "5b9fcb34-7903-4c68-8ca1-1e4b5c984d56",
        authId: "595a2709-fd1b-4c77-bf68-63c1839de934",
        description: "Seorang ahli gizi yang memberikan informasi dan panduan tentang nutrisi dan pola makan sehat. Saya membantu individu mencapai kesehatan optimal melalui pemahaman nutrisi yang baik",
        verified_status: "verified",
        price: 150000,
        rating: 1.7
    },
    {
        talentId: "110ca178-ecd9-4051-88ec-ca6895adcc19",
        authId: "a4e3a7be-787a-4fe1-a3ea-eefd2dff2c8d",
        description: "Seorang animator 2D yang ahli dalam seni digital dan film animasi. Saya menciptakan karakter dan adegan dengan gaya unik, membawa kehidupan pada gambar melalui animasi yang menghibur dan kreatif",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "53fc53f2-f43a-4aaf-8ebb-2166d89691c4",
        authId: "18d91dd1-05a3-4124-9c0e-fb2baa51e83e",
        description: "Seorang konsultan keamanan cyber yang memastikan perlindungan informasi dan sistem komputer. Saya membantu organisasi mengidentifikasi dan mengatasi potensi risiko keamanan cyber",
        verified_status: "verified",
        price: 150000,
        rating: 1.6
    },
    {
        talentId: "60f421c2-8710-4096-9726-4961c271ff38",
        authId: "baf74f13-61f9-41c3-bb26-017a3dabb076",
        description: "Seorang pelukis mural dengan passion pada seni rupa dan seni jalanan. Saya menciptakan karya seni besar di dinding publik, menghadirkan keindahan dan pesan artistik ke dalam ruang kota",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "65246c1c-271d-4b47-b9fb-b646b2a44576",
        authId: "02a792cd-c57f-4809-8a67-f5f997363c19",
        description: "Seorang pengembang aplikasi mobile yang berfokus pada menciptakan aplikasi inovatif untuk perangkat seluler. Saya terus mengikuti perkembangan teknologi terkini dalam pengembangan aplikasi",
        verified_status: "verified",
        price: 150000,
        rating: 4.6
    },
    {
        talentId: "67722a98-7109-4564-adb4-8e9121bc3695",
        authId: "386ed488-b8ce-4d7c-982b-f58edab02cd6",
        description: "Seorang peneliti pendidikan yang berdedikasi untuk meningkatkan metode pembelajaran dan inovasi pendidikan. Saya terlibat dalam penelitian untuk memahami dan menerapkan pendekatan yang efektif dalam dunia pendidikan",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "3230c4b0-ba0b-4590-8435-5e837b1f1ee7",
        authId: "2a9e087b-94a9-4404-9eec-f66a196fc178",
        description: "Seorang ahli kriptografi dengan keahlian dalam mengamankan informasi dan data. Saya mengembangkan algoritma dan protokol kriptografi untuk melindungi komunikasi dan informasi rahasia",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "8d29ecb8-b90c-4f60-90db-5d54fc740620",
        authId: "e6bfbecb-1168-4a6d-8587-a769dbeb0477",
        description: "Seorang pemimpin proyek yang berpengalaman dalam manajemen proyek dan kepemimpinan tim. Saya memastikan proyek-proyek selesai tepat waktu dan sesuai dengan tujuan yang telah ditetapkan",
        verified_status: "verified",
        price: 150000,
        rating: 4.9
    },
    {
        talentId: "df498b09-a284-4cd3-8ef6-3a3d0b3cadfd",
        authId: "a6f67872-0012-43b9-aac1-9af7dfe388d9",
        description: "Seorang desainer interior yang kreatif dan berbakat dalam menciptakan ruang yang estetis dan fungsional. Saya bekerja dengan klien untuk merancang interior yang mencerminkan gaya dan kebutuhan mereka",
        verified_status: "verified",
        price: 150000,
        rating: 2.8
    },
    {
        talentId: "4bfa2cde-c4c2-4448-a8ab-56271f15b886",
        authId: "be8f2b11-e201-4854-a3b1-80716585ab75",
        description: "Seorang pengajar bahasa asing yang memberikan pembelajaran yang menyenangkan dan efektif. Saya membantu siswa menguasai bahasa asing dengan metode pengajaran yang interaktif dan menarik",
        verified_status: "verified",
        price: 150000,
        rating: 1.7
    },
    {
        talentId: "eb183059-36e9-4418-bac7-f6a34aa19d7f",
        authId: "deeddc89-9dbf-4251-a940-2f988e99bce5",
        description: "Seorang peneliti yang fokus pada pengembangan energi terbarukan. Saya terlibat dalam penelitian untuk meningkatkan efisiensi dan keberlanjutan sumber energi alternatif",
        verified_status: "verified",
        price: 150000,
        rating: 1
    },
    {
        talentId: "109dd457-1c4c-4f1d-a574-948f4844204e",
        authId: "ff819273-94a0-41e5-9410-04ab149c9f5f",
        description: "Seorang ahli robotika dengan keahlian dalam merancang dan mengembangkan robot. Saya berdedikasi untuk menciptakan solusi robotik inovatif yang dapat meningkatkan efisiensi dalam berbagai industri",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "250e36a2-917d-4838-9b5d-7b2bbe3a5067",
        authId: "e221023a-43eb-4feb-b56d-af392e772709",
        description: "Seorang konsultan bisnis yang fokus pada prinsip-prinsip keberlanjutan. Saya membantu perusahaan merancang strategi keberlanjutan untuk mengurangi dampak lingkungan dan mencapai tanggung jawab sosial",
        verified_status: "verified",
        price: 150000,
        rating: 4.6
    },
    {
        talentId: "056f89b0-644e-40fc-a792-0f58b4a584bd",
        authId: "3667ad91-f1bd-48f7-81d0-3bea60715bf1",
        description: "Seorang pengembang yang ahli dalam menciptakan pengalaman augmented reality (AR). Saya berkontribusi dalam menggabungkan dunia fisik dan digital, menciptakan aplikasi AR yang memukau dan bermanfaat",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "d5d12239-1cb2-4bc8-8226-c04fffb57071",
        authId: "d95207d9-9058-44b8-8441-898f5baacd40",
        description: "Seorang kritik film yang senang berbagi pandangan dan ulasan tentang karya-karya sinematik. Saya membahas aspek-aspek artistik dan naratif film untuk membantu penonton membuat pilihan yang lebih informan",
        verified_status: "verified",
        price: 150000,
        rating: 1.5
    },
    {
        talentId: "3951cb57-16b4-4fc4-b1c6-9d4b14beb0c8",
        authId: "3afb7eed-e29f-4d5d-bdf2-a960caa9ad92",
        description: "Seorang pengajar musik yang berkomitmen untuk membimbing siswa dalam mengembangkan keterampilan musik mereka. Saya memberikan pelajaran tentang teori musik, instrumen, dan apresiasi seni musik",
        verified_status: "verified",
        price: 150000,
        rating: 4.7
    },
    {
        talentId: "fe723804-1ed2-4551-9be4-16f1eda2236e",
        authId: "e85ebe04-1f55-4ee0-86d0-c10d33e28bd4",
        description: "Seorang desainer perhiasan yang menciptakan karya seni unik dan indah. Saya berfokus pada merancang perhiasan dengan sentuhan kreatif dan makna mendalam, menciptakan keindahan yang abadi",
        verified_status: "verified",
        price: 150000,
        rating: 2.3
    },
    {
        talentId: "1fdce70b-cf23-497e-9658-6d07f1c568e5",
        authId: "ba0fbe8f-9569-4428-99f0-e8ecfab05403",
        description: "Seorang pemandu wisata yang khusus dalam menjelajahi tempat-tempat bersejarah. Saya membawa tamu untuk menggali dan memahami kekayaan sejarah dari setiap tempat yang kami kunjungi",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "239e6b47-80bb-41ae-8297-b0d7492ed472",
        authId: "fcb6ca32-e7ef-4fc6-a1a3-4a8227108cf0",
        description: "Seorang pengembang front-end yang berfokus pada pengembangan antarmuka pengguna website. Saya memiliki keterampilan dalam HTML, CSS, dan JavaScript untuk menciptakan pengalaman pengguna yang responsif dan menarik",
        verified_status: "verified",
        price: 150000,
        rating: 2.1
    },
    {
        talentId: "4ec23f2d-65d8-4446-9b3d-dc1c8177e296",
        authId: "e1d9218b-97ab-4c1f-a186-346c1b79f4c0",
        description: "Seorang pengajar yoga yang menggabungkan latihan fisik, pernapasan, dan meditasi untuk meningkatkan kesejahteraan holistik. Saya membimbing peserta untuk menemukan keseimbangan dan kedamaian dalam praktik yoga",
        verified_status: "verified",
        price: 150000,
        rating: 4.5
    },
    {
        talentId: "4a287f86-41c7-493d-a5c4-568fe6ae88f3",
        authId: "226fc5c5-9fae-4dc2-adfa-4d2f8baa8e39",
        description: "Seorang peneliti di bidang bioteknologi yang berupaya mengembangkan solusi inovatif untuk masalah kesehatan dan lingkungan. Saya terlibat dalam eksperimen dan penelitian untuk memajukan ilmu bioteknologi",
        verified_status: "verified",
        price: 150000,
        rating: 2.6
    },
    {
        talentId: "1f8966d7-f4aa-4a86-95a0-74888cefc6c9",
        authId: "c1bacf6f-765f-41f1-80a9-227841f3eb74",
        description: "Seorang profesional dalam analisis keuangan yang memberikan wawasan mendalam tentang kondisi keuangan dan strategi investasi. Saya membantu individu dan perusahaan membuat keputusan keuangan yang cerdas",
        verified_status: "verified",
        price: 150000,
        rating: 4.1
    },
    {
        talentId: "a448e568-1d77-4ebd-a7e3-dac2003e32c2",
        authId: "3dea4460-654f-48d1-9ea0-09de65e66173",
        description: "Seorang seniman keramik yang menciptakan karya seni unik dengan tanah liat. Saya mengekspresikan kreativitas melalui pembentukan dan dekorasi berbagai barang dari keramik",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "954386ab-4ad9-4c13-9705-b8873c143977",
        authId: "500d7a83-aa04-4679-bd17-3e13982c80c2",
        description: "Seorang konsultan hubungan masyarakat yang ahli dalam membangun citra dan branding. Saya bekerja dengan klien untuk merancang kampanye komunikasi yang efektif dan meningkatkan visibilitas merek",
        verified_status: "verified",
        price: 150000,
        rating: 4.1
    },
    {
        talentId: "9a49b79e-441a-4c98-9f13-ed718e682611",
        authId: "24ffb267-5619-4994-81ee-3392c6e23609",
        description: "Seorang pengembang back-end yang mengkhususkan diri dalam membangun fungsionalitas server dan database untuk aplikasi web. Saya memiliki keahlian dalam bahasa pemrograman seperti Python, Java, dan Node.js",
        verified_status: "verified",
        price: 150000,
        rating: 4.1
    },
    {
        talentId: "dd46ac25-bb9d-4d4d-81fb-f2001230a876",
        authId: "9c846b0a-972b-42ca-9048-01b195e96c97",
        description: "Seorang kritik sastra yang mengevaluasi dan memberikan wawasan tentang karya-karya sastra. Saya mengulas buku dan karya sastra untuk membantu pembaca memilih bacaan yang sesuai dengan minat mereka",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "bed45543-0790-484a-b676-f1359d17c9bc",
        authId: "f28cf14b-0434-4f7c-8013-5a658c4f31a6",
        description: "Seorang desainer kostum yang menciptakan pakaian kreatif dan unik untuk pertunjukan seni, film, atau acara khusus. Saya memiliki pemahaman mendalam tentang tren fashion dan estetika yang diperlukan dalam setiap desain kostum",
        verified_status: "verified",
        price: 150000,
        rating: 1.5
    },
    {
        talentId: "5806eb15-0473-44da-b626-d475a8632750",
        authId: "f004a15e-49f0-4988-8ab6-9f2aa67fa324",
        description: "Seorang pemandu wisata yang memandu perjalanan gastronomi, mengenalkan peserta kepada kekayaan kuliner dan budaya makanan suatu daerah. Saya membawa tamu untuk menjelajahi kelezatan berbagai hidangan lokal",
        verified_status: "verified",
        price: 150000,
        rating: 2.3
    },
    {
        talentId: "b0eaad2b-4a67-46b7-959d-acf130e02741",
        authId: "54bee31b-8fbd-4e87-9d59-b7013c361455",
        description: "Seorang pengembang game yang berdedikasi untuk menciptakan pengalaman game yang menghibur dan inovatif. Saya memiliki keahlian dalam pemrograman game, desain gameplay, dan integrasi teknologi terkini",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "38cb1d0f-8a15-4278-a0f3-0f56e769f4e0",
        authId: "9ead26d8-dfb1-436b-87c7-37170af7228e",
        description: "Seorang penulis yang fokus pada laporan dan analisis tentang perkembangan terkini di dunia teknologi. Saya menyampaikan informasi tentang inovasi, tren, dan peristiwa penting di industri teknologi",
        verified_status: "verified",
        price: 150000,
        rating: 4.2
    },
    {
        talentId: "2a0135f5-d942-4d8a-a358-924a17fe91ec",
        authId: "d19688eb-6ef8-469b-8f62-89d81794035f",
        description: "Seorang instruktur Pilates yang memberikan pelatihan untuk meningkatkan kekuatan inti dan fleksibilitas. Saya membimbing peserta untuk mencapai keseimbangan tubuh dan meningkatkan kesehatan fisik mereka",
        verified_status: "verified",
        price: 150000,
        rating: 1.8
    },
    {
        talentId: "5d2c5bf2-6965-4cc6-8732-10afe80d995f",
        authId: "e526bbe3-9e72-4514-8d1c-fb6471cbef0c",
        description: "Seorang pengajar bahasa yang membantu siswa memahami dan menguasai bahasa asing. Saya menggunakan metode pengajaran yang interaktif dan menyenangkan untuk meningkatkan keterampilan berbicara, mendengar, membaca, dan menulis",
        verified_status: "verified",
        price: 150000,
        rating: 2.8
    },
    {
        talentId: "6426411f-a89a-4514-9c4f-62dd3bc63c08",
        authId: "8c249e1d-756b-4ec2-9aa6-a2ff6d763a6a",
        description: "Seorang desainer grafis yang berfokus pada menciptakan identitas merek melalui desain grafis. Saya memadukan elemen seni dan komunikasi visual untuk membantu merek menyampaikan pesan mereka dengan efektif",
        verified_status: "verified",
        price: 150000,
        rating: 4.1
    },
    {
        talentId: "17f9b113-5f94-4b7d-98c6-d8522860dcdd",
        authId: "e3e571f6-c16e-4f09-81ce-d8f0be7bc60b",
        description: "Seorang ahli dalam menganalisis risiko keuangan dan mengembangkan strategi manajemen risiko yang efektif. Saya membantu perusahaan mengidentifikasi, mengukur, dan mengelola risiko untuk mencapai tujuan bisnis mereka",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "66300a1a-d95e-45c3-b09f-4cbd05f72f65",
        authId: "a331bd0b-686f-4cfd-9ad0-7a480beaf2a5",
        description: "Seorang seniman vektor yang menciptakan karya seni digital dengan gaya vektor. Saya menghasilkan ilustrasi yang bersih dan dapat diubah ukuran tanpa kehilangan kualitas, cocok untuk berbagai keperluan visual",
        verified_status: "verified",
        price: 150000,
        rating: 3.4
    },
    {
        talentId: "72dc9e51-7eea-46df-97ce-76674702c7fd",
        authId: "02d91486-8f9c-46d4-a400-29fc3d9409a8",
        description: "Seorang konsultan kesehatan mental yang memberikan dukungan dan bimbingan untuk meningkatkan kesejahteraan psikologis individu. Saya bekerja dengan klien untuk mengatasi tantangan mental dan emosional mereka",
        verified_status: "verified",
        price: 150000,
        rating: 1.3
    },
    {
        talentId: "8fae7796-c218-438c-8997-0b02453d54ca",
        authId: "8c257882-8a7f-40aa-9615-777dfc2bd7bb",
        description: "Seorang perancang taman yang menciptakan ruang hijau yang estetis dan fungsional. Saya merancang taman dengan memperhatikan aspek keindahan alam dan kebutuhan pengguna, menciptakan lingkungan yang nyaman dan indah",
        verified_status: "verified",
        price: 150000,
        rating: 1.3
    },
    {
        talentId: "e8cf8206-c7eb-45cb-b17e-9ae415a7e340",
        authId: "d1d6a59a-938d-442b-a45c-3fa182bd30f9",
        description: "Seorang pemandu yoga terapeutik yang mengkombinasikan prinsip-prinsip yoga dengan pendekatan terapeutik. Saya membantu individu mengelola dan mengatasi kondisi kesehatan tertentu melalui latihan yoga yang terarah",
        verified_status: "verified",
        price: 150000,
        rating: 3.8
    },
    {
        talentId: "c65435f7-9155-4911-9c0f-8029a7a502f5",
        authId: "70cc406b-9066-47ef-a06f-5e558eb17b5d",
        description: "Seorang pengembang aplikasi mobile yang berfokus pada menciptakan aplikasi inovatif untuk perangkat seluler. Saya menguasai berbagai platform dan teknologi terkini dalam pengembangan perangkat lunak mobile",
        verified_status: "verified",
        price: 150000,
        rating: 2.3
    },
    {
        talentId: "51acb038-3838-4bfe-a8ef-96af203b859d",
        authId: "074eeaf8-b834-4bcc-ac49-1127091e299c",
        description: "Seorang peneliti ekologi yang mempelajari interaksi antara organisme dan lingkungannya. Saya berkontribusi dalam pelestarian keanekaragaman hayati dan pemahaman terhadap ekosistem alam",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "799e7565-cf9d-41f6-8a6c-539fa2f7690e",
        authId: "eb68b664-b6a0-4e8b-847e-00a8f3b10799",
        description: "Seorang kurator museum yang mengelola dan merancang pameran seni atau riwayat budaya. Saya berkomitmen untuk mempresentasikan karya seni atau artefak sejarah dengan cara yang informatif dan menarik",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "bd5d45ec-717f-459e-a1ae-2d82bbb8e3b0",
        authId: "3ed60742-7754-40dd-b2d0-3e93b6bbfa2f",
        description: "Seorang desainer kemasan yang menciptakan desain kreatif untuk produk konsumen. Saya memperhatikan aspek estetika dan fungsionalitas kemasan, menciptakan penampilan yang menarik dan memikat",
        verified_status: "verified",
        price: 150000,
        rating: 5
    },
    {
        talentId: "d7cde959-603f-4d20-b590-fe752f6f1550",
        authId: "bd1e0661-c977-4e54-a011-c9a94d51512e",
        description: "Seorang pemandu wisata seni yang membawa peserta untuk menjelajahi dunia seni. Saya mengenalkan seni kontemporer, galeri seni, dan karya seni jalanan, memberikan wawasan mendalam tentang dunia seni saat ini",
        verified_status: "verified",
        price: 150000,
        rating: 3.5
    },
    {
        talentId: "0bddfd5e-bfc3-4524-af49-4608f32a1c50",
        authId: "90127d32-c337-4359-8855-57d22d500e91",
        description: "Seorang pengembang e-learning yang menciptakan materi pembelajaran interaktif dan mendidik. Saya menggunakan teknologi untuk meningkatkan pengalaman belajar, membuat pembelajaran lebih menarik dan efektif",
        verified_status: "verified",
        price: 150000,
        rating: 1.3
    },
    {
        talentId: "60f3a9d4-bb91-4c5a-a6b5-707fc70d3c5f",
        authId: "3de65a01-b017-46e5-b7c2-0d1302ea2f22",
        description: "Seorang peneliti sosial yang mempelajari interaksi sosial, struktur masyarakat, dan dinamika kebudayaan. Saya berkontribusi dalam pemahaman terhadap perubahan sosial dan dampaknya pada masyarakat",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "2ec41425-8d23-40bf-9a6b-ef278d90c083",
        authId: "408c0875-2ed0-4bb7-b4a5-9353d322fe26",
        description: "Seorang pengajar seni drama yang membimbing siswa dalam pengembangan kreativitas, ekspresi diri, dan keterampilan pertunjukan. Saya memfasilitasi kegiatan teater untuk meningkatkan kepercayaan diri dan keterampilan berkomunikasi",
        verified_status: "verified",
        price: 150000,
        rating: 3.5
    },
    {
        talentId: "c0a18259-6f15-46b0-af81-541406eec04d",
        authId: "a8e13fc1-59db-4d7b-afa6-c30390e50719",
        description: "Seorang peneliti yang fokus pada studi kanker dan pengembangan terapi baru. Saya terlibat dalam penelitian biomedis untuk memahami penyebab dan cara mengatasi kanker",
        verified_status: "verified",
        price: 150000,
        rating: 2.8
    },
    {
        talentId: "a0b105e5-ece8-434e-8b92-3eb9ea09e83a",
        authId: "c4b57133-d33c-48f6-ba58-b1a82868d30f",
        description: "Seorang animator 3D yang menciptakan animasi digital untuk film atau proyek seni lainnya. Saya memadukan keterampilan seni dan teknologi untuk menghasilkan visual yang menakjubkan",
        verified_status: "verified",
        price: 150000,
        rating: 4.9
    },
    {
        talentId: "cbd6faf9-edbb-453f-baaa-7ad8039d8e21",
        authId: "c4d8f26d-5a19-4740-adf6-e17c8336e4df",
        description: "Seorang perancang permainan yang mengembangkan konsep dan aturan permainan. Saya terlibat dalam membuat pengalaman bermain yang menyenangkan dan menantang untuk para pemain",
        verified_status: "verified",
        price: 150000,
        rating: 3.1
    },
    {
        talentId: "7f56707f-7aa2-432d-99b5-0c53aa7b58a3",
        authId: "de8cf13d-1368-4565-b424-c45e5599c3c0",
        description: "Seorang pengajar fisika yang memberikan pembelajaran yang menyenangkan dan interaktif. Saya membantu siswa memahami prinsip-prinsip fisika melalui eksperimen dan aplikasi konsep dalam kehidupan sehari-hari",
        verified_status: "verified",
        price: 150000,
        rating: 3.6
    },
    {
        talentId: "78b42c2f-363c-4b10-ac84-823dade17ecc",
        authId: "d53a9aac-de50-46dc-8951-c115369a55ad",
        description: "Seorang peneliti yang memfokuskan diri pada identifikasi dan penanganan risiko keamanan siber. Saya berkontribusi dalam meningkatkan keamanan sistem dan data melalui penelitian dan inovasi",
        verified_status: "verified",
        price: 150000,
        rating: 5
    },
    {
        talentId: "86360b66-0e8e-446a-b0f5-b9d7091874be",
        authId: "3128b6d7-5e33-4240-aaed-469d276ba96b",
        description: "Seorang seniman digital yang menciptakan karya seni menggunakan perangkat lunak dan teknologi digital. Saya memiliki gaya yang unik dan sering kali mengeksplorasi tema futuristik dalam karya-karya saya",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "97efae41-831f-4f05-8214-62cc57a2ae11",
        authId: "5a0a8e5e-1a4b-41be-99cf-d957a144964f",
        description: "Seorang pemandu wisata alam yang membawa peserta untuk menjelajahi keindahan alam. Saya memberikan pengetahuan tentang ekologi, flora, fauna, dan keberlanjutan alam selama perjalanan",
        verified_status: "verified",
        price: 150000,
        rating: 2.3
    },
    {
        talentId: "1029cc30-abd4-424c-8412-99b0c5b27229",
        authId: "cf3158e4-b803-4f34-8a22-7f49ab04e87a",
        description: "Seorang pengembang chatbot yang menciptakan asisten virtual untuk berinteraksi dengan pengguna. Saya memiliki keahlian dalam pemrograman dan kecerdasan buatan untuk membuat chatbot yang responsif dan efisien",
        verified_status: "verified",
        price: 150000,
        rating: 3
    },
    {
        talentId: "375f0442-ee85-4e8d-b55f-f6edd625a025",
        authId: "2580115f-2bda-4332-bfdc-ee4b5fd74d5a",
        description: "Seorang kritik musik yang memberikan tinjauan mendalam tentang karya-karya musik. Saya menyelidiki elemen-elemen artistik, lirik, dan pengaruh musik dalam memberikan ulasan yang informatif",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "b9fa6465-3fde-4095-859e-a72bce661422",
        authId: "0bf7e754-1656-48fc-a57a-0f541067379e",
        description: "Seorang ahli lingkungan yang berfokus pada pelestarian dan konservasi sumber daya alam. Saya terlibat dalam penelitian dan proyek untuk mengatasi masalah lingkungan dan mempromosikan keberlanjutan",
        verified_status: "verified",
        price: 150000,
        rating: 3.3
    },
    {
        talentId: "028b55d3-2c32-4410-a5e0-2c5526732f23",
        authId: "d4ffbfca-269f-4a65-8d6e-ae23fd39a403",
        description: "Seorang perancang algoritma yang ahli dalam mengembangkan algoritma untuk menyelesaikan masalah kompleks. Saya terlibat dalam merancang solusi efisien untuk tantangan pemrograman",
        verified_status: "verified",
        price: 150000,
        rating: 3.2
    },
    {
        talentId: "517fe12a-0da8-43b9-a671-788ec45a97fa",
        authId: "c905c633-8ebb-417c-8072-3bac6f1c19cd",
        description: "Seorang pemandu wisata kuliner yang memperkenalkan peserta pada berbagai kuliner lokal dan budaya makanan. Saya memberikan pengalaman menikmati makanan tradisional dan eksotis di destinasi tertentu",
        verified_status: "verified",
        price: 150000,
        rating: 1.6
    },
    {
        talentId: "43fd7789-be5c-4324-9f44-a6b241b1fec1",
        authId: "8ab866a7-8ddd-442b-8997-dd3ee4c6625e",
        description: "Seorang pengembang sistem operasi yang terlibat dalam merancang dan mengembangkan inti sistem operasi untuk perangkat komputasi. Saya memiliki pemahaman mendalam tentang arsitektur perangkat keras dan perangkat lunak",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "8fa59958-c0c6-4b0b-b387-a4a2fa559392",
        authId: "4eed8180-a7a0-4211-89d3-ec19f385e8be",
        description: "Seorang seniman fotografi yang menangkap momen-momen indah dan bermakna melalui lensa kamera. Saya menghasilkan karya fotografi yang menginspirasi dan mencerminkan keunikan setiap subjek",
        verified_status: "verified",
        price: 150000,
        rating: 1
    },
    {
        talentId: "7f2f85fb-b6ed-4707-8763-2cc67c398b30",
        authId: "38fc22af-e23b-4cb0-9341-40133f93cbf0",
        description: "Seorang pengajar matematika yang menyampaikan pembelajaran matematika dengan cara yang menyenangkan dan mudah dipahami. Saya membantu siswa mengembangkan pemahaman yang kuat tentang konsep matematika",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "ff456af0-73bb-4b8c-8ad0-9ba690c1940d",
        authId: "68b27635-3368-4758-a56e-3b03540976bb",
        description: "Seorang pengembang yang ahli dalam menciptakan pengalaman augmented reality (AR). Saya berkontribusi dalam menggabungkan dunia fisik dan digital, menciptakan aplikasi AR yang memukau dan bermanfaat",
        verified_status: "verified",
        price: 150000,
        rating: 1.6
    },
    {
        talentId: "e2c2e2f6-01ff-4707-8a48-8c5bbdcced95",
        authId: "d8c7116a-e561-4dc4-af37-c9bb97dee18d",
        description: "Seorang desainer perhiasan yang menciptakan karya seni unik dan indah. Saya berfokus pada merancang perhiasan dengan sentuhan kreatif dan makna mendalam, menciptakan keindahan yang abadi",
        verified_status: "verified",
        price: 150000,
        rating: 2.1
    },
    {
        talentId: "b5f7d6b6-658b-49fa-a538-ddd10f9a97b5",
        authId: "57602920-f104-4dbb-99b9-cef14a6d0dc5",
        description: "Seorang pemandu wisata yang khusus dalam menjelajahi tempat-tempat bersejarah. Saya membawa tamu untuk menggali dan memahami kekayaan sejarah dari setiap tempat yang kami kunjungi",
        verified_status: "verified",
        price: 150000,
        rating: 2.3
    },
    {
        talentId: "1e2362df-d081-44ed-9fab-140bd0b3c193",
        authId: "b1bf5f14-f6b1-4693-a132-0d14070196b1",
        description: "Seorang pengembang back-end yang mengkhususkan diri dalam membangun fungsionalitas server dan database untuk aplikasi web. Saya memiliki keahlian dalam bahasa pemrograman seperti Python, Java, dan Node.js",
        verified_status: "verified",
        price: 150000,
        rating: 2.1
    },
    {
        talentId: "97ff9e71-466d-4b01-bb9e-7167d8035fd9",
        authId: "845716c9-daa4-4857-9a7b-25eaea54d96c",
        description: "Seorang kritik sastra yang mengevaluasi dan memberikan wawasan tentang karya-karya sastra. Saya mengulas buku dan karya sastra untuk membantu pembaca memilih bacaan yang sesuai dengan minat",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "92e241e0-627f-4e0b-8de3-5930c3825ead",
        authId: "12647d8e-9aef-4612-8521-a141f564bebd",
        description: "Seorang ahli robotika dengan keahlian dalam merancang dan mengembangkan robot. Saya berdedikasi untuk menciptakan solusi robotik inovatif yang dapat meningkatkan efisiensi dalam berbagai industri",
        verified_status: "verified",
        price: 150000,
        rating: 1.6
    },
    {
        talentId: "99f8d198-932e-4a63-9e27-6e6a0b3acf60",
        authId: "329ca7a2-97d6-4ebc-ad68-8a9c96cf5b88",
        description: "Seorang konsultan bisnis yang fokus pada prinsip-prinsip keberlanjutan. Saya membantu perusahaan merancang strategi keberlanjutan untuk mengurangi dampak lingkungan dan mencapai tanggung jawab sosial",
        verified_status: "verified",
        price: 150000,
        rating: 2.6
    },
    {
        talentId: "d5b4fb02-5823-4da6-9c82-43eb78e449b5",
        authId: "cd368e47-f96c-4b2c-a17b-23b1380e129c",
        description: "Seorang pengajar musik yang berkomitmen untuk membimbing siswa dalam mengembangkan keterampilan musik mereka. Saya memberikan pelajaran tentang teori musik, instrumen, dan apresiasi seni musik",
        verified_status: "verified",
        price: 150000,
        rating: 4.5
    },
    {
        talentId: "e2d93ab6-e078-4309-8793-b5ee22ca50a7",
        authId: "7ab84c2b-2d7c-45cb-8692-6dd0053835fb",
        description: "Seorang kritik film yang senang berbagi pandangan dan ulasan tentang karya-karya sinematik. Saya membahas aspek-aspek artistik dan naratif film untuk membantu penonton membuat pilihan yang lebih informan",
        verified_status: "verified",
        price: 150000,
        rating: 1.8
    },
    {
        talentId: "70b8125a-c8d5-4e59-af64-2e95ee7f09bf",
        authId: "38ec1fd0-ac8a-4e5b-8c94-7dd6b728b893",
        description: "Seorang pengajar yoga yang menggabungkan latihan fisik, pernapasan, dan meditasi untuk meningkatkan kesejahteraan holistik. Saya membimbing peserta untuk menemukan keseimbangan dan kedamaian dalam praktik yoga",
        verified_status: "verified",
        price: 150000,
        rating: 4.2
    },
    {
        talentId: "3abf53aa-0df2-4cad-8bae-d143b9a4d7cd",
        authId: "b4813762-0284-413d-8dfe-10c945965edf",
        description: "Seorang perancang pengalaman pengguna (UX) yang berfokus pada menciptakan antarmuka yang intuitif dan menarik. Saya memahami kebutuhan pengguna dan menerapkan desain yang meningkatkan kenyamanan dan kepuasan pengguna",
        verified_status: "verified",
        price: 150000,
        rating: 4.3
    },
    {
        talentId: "698f855c-536d-4636-835a-c1d3d8d21990",
        authId: "06ce6a43-d37f-4468-8aa2-8cfea757cf1f",
        description: "Seorang pemandu wisata seni rupa yang membawa peserta untuk menjelajahi galeri seni dan studio seniman. Saya memberikan informasi mendalam tentang berbagai karya seni, teknik, dan gaya seniman",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "deadbcb3-0965-4734-8e7b-7e7262c85545",
        authId: "566dbcaa-4780-49b5-ae45-f911c164ddd4",
        description: "Seorang pengembang aplikasi mobile yang terampil dalam menciptakan aplikasi yang responsif dan inovatif. Saya memiliki keahlian dalam pemrograman mobile dan memastikan pengalaman pengguna yang lancar",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "245759f1-781d-4509-a35b-afc915ff5a57",
        authId: "0a58a041-e4f9-407c-96d0-1ea57059e2df",
        description: "Seorang peneliti lingkungan yang fokus pada pemahaman dan pelestarian ekosistem. Saya melakukan penelitian tentang dampak lingkungan dan memberikan solusi untuk mendukung keberlanjutan",
        verified_status: "verified",
        price: 150000,
        rating: 2.7
    },
    {
        talentId: "cbd630af-38c0-4f8b-a64d-53529d01a18f",
        authId: "7deb43fb-113a-4aff-b65d-acfe5d669da0",
        description: "Seorang pengajar bahasa asing yang memberikan pelajaran bahasa dengan pendekatan komunikatif. Saya membantu siswa memperoleh keterampilan berbicara, mendengar, membaca, dan menulis dalam bahasa asing",
        verified_status: "verified",
        price: 150000,
        rating: 3.9
    },
    {
        talentId: "ca0ad2c1-0d38-484b-94d8-c09a2f23d6a5",
        authId: "27b850c3-d5b1-4f61-ab0e-55c8b0538208",
        description: "Seorang pengembang front-end yang ahli dalam menciptakan antarmuka pengguna yang menarik dan responsif. Saya memiliki pemahaman yang kuat tentang HTML, CSS, dan JavaScript untuk menciptakan pengalaman pengguna yang optimal",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "50df03a0-4522-4908-940e-8f638c6eb77d",
        authId: "779fb367-c0a8-4e53-bea1-67eb2e7d9351",
        description: "Seorang perancang interior yang menciptakan ruang fungsional dan estetis. Saya memadukan elemen desain, warna, dan pencahayaan untuk menciptakan lingkungan yang sesuai dengan kebutuhan dan selera klien",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "d1c2e8c3-abfd-4c46-a4ad-8929bc8133e7",
        authId: "83d014c1-056c-4a3b-8e1a-43601ac14376",
        description: "Seorang pemandu wisata petualangan yang membawa peserta untuk mengeksplorasi destinasi penuh tantangan. Saya menyediakan pengalaman mendebarkan seperti hiking, mendaki gunung, dan petualangan alam",
        verified_status: "verified",
        price: 150000,
        rating: 4.6
    },
    {
        talentId: "84e3e587-ec6c-489d-9e11-81f11af5b36b",
        authId: "60da68e7-88e8-4a4c-8655-fb193c96ddf5",
        description: "Seorang peneliti yang fokus pada studi dan pengembangan material baru. Saya terlibat dalam eksperimen dan analisis untuk meningkatkan kualitas dan keberlanjutan material yang digunakan dalam berbagai aplikasi",
        verified_status: "verified",
        price: 150000,
        rating: 1.5
    },
    {
        talentId: "18e716ea-264e-4029-bf64-786456417d18",
        authId: "c77cca5d-7e08-49a7-8707-1316edcede62",
        description: "Seorang kritik mode yang memberikan tinjauan tentang tren mode dan desainer terkini. Saya mengulas koleksi fashion, acara mode, dan tren industri fashion untuk membimbing pembaca dalam dunia mode",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "0ba00fbb-b53c-4ab2-a4cc-141c51621846",
        authId: "c22d4aeb-69c8-47e6-b62f-9ec4134d614a",
        description: "Seorang pengajar biologi yang menyampaikan materi pembelajaran dengan cara yang menarik dan interaktif. Saya menggunakan pendekatan praktis untuk membantu siswa memahami konsep biologi dengan lebih baik",
        verified_status: "verified",
        price: 150000,
        rating: 4.9
    },
    {
        talentId: "478ad7cd-8db6-4bb8-a202-c94d5a3fc25d",
        authId: "44c957bd-268f-4362-b4cd-5c85e511261c",
        description: "Seorang desainer logo yang menciptakan identitas visual untuk merek dan bisnis. Saya memahami makna dan nilai merek untuk menciptakan logo yang mencerminkan karakter dan tujuan bisnis",
        verified_status: "verified",
        price: 150000,
        rating: 2.6
    },
    {
        talentId: "70565bce-47a8-4e3e-a1bf-7997d1c96790",
        authId: "d1a3f131-db0a-4268-a657-c049e7de3cd9",
        description: "Seorang pemandu wisata yang membawa peserta untuk menjelajahi situs-situs purbakala dan warisan sejarah. Saya memberikan informasi mendalam tentang kebudayaan dan peradaban masa lalu",
        verified_status: "verified",
        price: 150000,
        rating: 3.3
    },
    {
        talentId: "55a0c88e-14a2-40ce-a107-30e3edbfab76",
        authId: "e87643cf-068b-403c-8fb3-70267aa3e765",
        description: "Seorang pengembang situs web yang mahir dalam membangun dan memelihara situs web. Saya menggunakan berbagai teknologi web untuk menciptakan pengalaman online yang optimal",
        verified_status: "verified",
        price: 150000,
        rating: 2.8
    },
    {
        talentId: "54b7bebe-6c3c-47a6-a7eb-a79d5bff96ce",
        authId: "2f372721-04c9-4677-8604-c43cf50f2a59",
        description: "Seorang kritik kuliner yang mengevaluasi dan memberikan ulasan tentang berbagai pengalaman kuliner. Saya mengeksplorasi restoran, masakan, dan tren kuliner untuk memberikan panduan yang informatif",
        verified_status: "verified",
        price: 150000,
        rating: 1.3
    },
    {
        talentId: "9ad2441a-4900-4cdc-96e9-615ecc8365c8",
        authId: "60b0e2eb-468f-40d5-a03b-3baa48870da1",
        description: "Saya sangat menyukai Kpop, girlband favorit saya TWICE, bias saya Dahyun, saya sangat menyukai setiap lagu TWICE. Saya juga suka berolahraga khususnya badminton",
        verified_status: "verified",
        price: 150000,
        rating: 4.4
    },
    {
        talentId: "75f10848-aa17-42c5-9832-9359cbfadffe",
        authId: "791eae99-e14f-43d6-bdb4-8f813aa2ebd7",
        description: "Saya seorang seniman yang mencintai seni rupa dan perfilman. Saya suka bepergian untuk mendapatkan inspirasi baru untuk karya seni saya",
        verified_status: "verified",
        price: 150000,
        rating: 4.6
    },
    {
        talentId: "9da11f69-4be1-4dcc-86a9-1aae410362c5",
        authId: "1f9cfe1b-d0a4-4e85-9ad5-f7039074a7ef",
        description: "Saya adalah pecinta kuliner dan senang mencoba makanan baru dari berbagai tempat di seluruh dunia. Saya juga hobi fotografi untuk mengabadikan momen saat bepergian",
        verified_status: "verified",
        price: 150000,
        rating: 3.5
    },
    {
        talentId: "a40c164a-4218-4262-a693-0b7051b0cf02",
        authId: "79852939-5e24-4b34-8b7d-b9bd5d7daf78",
        description: "Seorang pengembang perangkat lunak yang memiliki minat dalam teknologi, gaming, dan Programmer. Saya suka menciptakan aplikasi yang inovatif dan menantang",
        verified_status: "verified",
        price: 150000,
        rating: 4.6
    },
    {
        talentId: "5914ab27-c5d8-4a91-be53-598bb190794e",
        authId: "0cc07fe1-7e13-4e96-ad52-b4e213376038",
        description: "Saya memiliki minat dalam dunia fashion dan senang berkeliling untuk mengeksplorasi tren fashion dari berbagai budaya. Selain itu, saya selalu berusaha untuk melakukan self-improvement",
        verified_status: "verified",
        price: 150000,
        rating: 2.7
    },
    {
        talentId: "0b97ee33-d654-41cb-a56d-67227e00e20a",
        authId: "bfda3c4b-e601-474f-92bf-4f32bab87b74",
        description: "Seorang guru olahraga yang berdedikasi untuk membimbing siswa dalam mencapai potensi mereka di bidang olahraga. Saya memiliki latar belakang pendidikan yang kuat dan senang melibatkan siswa dalam kegiatan fisik yang menyenangkan",
        verified_status: "verified",
        price: 150000,
        rating: 3.6
    },
    {
        talentId: "65dc9397-df69-4246-adfb-f84148cb8a43",
        authId: "7338f615-f3db-4b3f-ab99-d8a44895d224",
        description: "Saya adalah seorang musisi yang juga mengajar musik kepada siswa-siswa yang berminat. Saya memiliki pengalaman dalam mengajar berbagai instrumen musik dan senang berbagi pengetahuan saya tentang musik",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "b46ae63f-cb55-485e-9e76-1f1cc5126cbb",
        authId: "70223dd1-9a68-4df5-89b2-7b6ef34fbe4d",
        description: "Seorang fotografer profesional yang mencintai seni visual dan senang berkeliling dunia untuk mengabadikan keindahan alam dan keanekaragaman budaya melalui lensa kamera",
        verified_status: "verified",
        price: 150000,
        rating: 1.4
    },
    {
        talentId: "281540a7-fdbf-4d07-845c-df8e95278a98",
        authId: "751904fd-d602-4862-9923-af472693a255",
        description: "Saya adalah penulis yang juga memberikan kursus kreatif menulis. Saya memiliki passion dalam mengembangkan kreativitas dan keterampilan menulis pada orang lain",
        verified_status: "verified",
        price: 150000,
        rating: 1.1
    },
    {
        talentId: "e67e4248-e452-49f2-b0c8-540a3949c388",
        authId: "0c47fc9e-1424-43a7-9e88-d8e108800033",
        description: "Seorang mahasiswa teknik informatika yang memiliki keahlian dalam pengembangan perangkat lunak. Saya suka berkolaborasi dalam proyek-proyek teknologi dan senang mengikuti perkembangan terbaru dalam dunia teknologi",
        verified_status: "verified",
        price: 150000,
        rating: 3.1
    },
    {
        talentId: "4809b462-0c50-427b-ad76-0642a6e619af",
        authId: "cdded182-7429-4fc1-beef-891ffa0e3ef9",
        description: "Saya seorang food blogger yang senang berkeliling dunia mencoba berbagai hidangan lezat. Selain itu, saya juga tertarik dengan pengembangan diri dan sering membagikan tips dan trik untuk hidup lebih baik",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "96a902eb-fc45-4606-94d8-13e872ecca0f",
        authId: "42f532e7-1374-4560-9d9c-f679be424d7f",
        description: "Seorang seniman visual yang mengajar seni rupa dan fotografi. Saya percaya bahwa seni adalah cara yang indah untuk mengekspresikan diri, dan saya senang membagikan pengetahuan dan keterampilan seni kepada orang lain",
        verified_status: "verified",
        price: 150000,
        rating: 2.5
    },
    {
        talentId: "95f662d3-6469-4839-bc5a-1cb93918d407",
        authId: "60cd0e34-a80f-4abc-8f0c-395cc2718827",
        description: "Seorang gamer dan streamer yang memiliki minat dalam dunia teknologi. Saya sering berbagi pengalaman bermain game dan membahas perkembangan teknologi terbaru dalam saluran streaming saya",
        verified_status: "verified",
        price: 150000,
        rating: 3.1
    },
    {
        talentId: "8d5bf569-a9b7-433c-b19d-fc7dbe3e5cc4",
        authId: "3a55146c-a4e3-4d9d-a4cb-9f26386c0e05",
        description: "Seorang pendidik yang senang mengajak siswa untuk belajar melalui perjalanan. Saya yakin bahwa pembelajaran dapat terjadi di mana saja, dan saya berusaha menciptakan pengalaman belajar yang menyenangkan dan bermakna",
        verified_status: "verified",
        price: 150000,
        rating: 3.4
    },
    {
        talentId: "9340dc4b-26ec-4911-bc2a-57100b0c8c9d",
        authId: "3d842ff6-24e8-4d3b-a229-d989c52ff73a",
        description: "Seorang penyanyi yang bersemangat dengan cinta untuk musik. Saya sering tampil di berbagai acara dan senang berbagi kebahagiaan melalui suara saya yang merdu",
        verified_status: "verified",
        price: 150000,
        rating: 3.3
    },
    {
        talentId: "53e32cd2-1f91-4333-81a4-e4350ccf24f1",
        authId: "3e8e2777-3bf5-4e24-b270-db2764276da3",
        description: "Seorang instruktur pemrograman yang berkomitmen untuk membagikan pengetahuannya dalam dunia teknologi dan pengembangan perangkat lunak. Saya menyukai tantangan baru dan senang melihat siswa-siswa saya tumbuh dalam keterampilan pemrograman mereka",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "22212c57-5181-4cef-a285-b812a45e4d2e",
        authId: "32091cae-43f4-44c7-ae0c-eac18ef03cc6",
        description: "Saya adalah instruktur fitness yang fokus pada kesehatan holistik. Saya berdedikasi membantu orang mencapai tujuan kesehatan mereka melalui latihan fisik, nutrisi, dan pola hidup sehat",
        verified_status: "verified",
        price: 150000,
        rating: 3.9
    },
    {
        talentId: "ce0b1701-fc01-41b5-a337-f67498111b42",
        authId: "5d7e6dcb-8785-4976-894e-355658987044",
        description: "Seorang pengarah seni dengan minat dalam pembuatan film. Saya berfokus pada penciptaan visual yang memukau dan suka berkolaborasi dengan tim untuk menghasilkan karya yang menginspirasi",
        verified_status: "verified",
        price: 150000,
        rating: 2.6
    },
    {
        talentId: "2be939d0-35cc-4ab1-99c7-bdc64f8c2dd0",
        authId: "d3615b05-cf5b-473a-9980-38afd72652c8",
        description: "Saya seorang penulis fiksi dengan imajinasi yang kaya. Karya-karya saya sering menggabungkan elemen fantasi dan petualangan. Saya senang membawa pembaca ke dunia baru melalui kata-kata",
        verified_status: "verified",
        price: 150000,
        rating: 3.3
    },
    {
        talentId: "e1728725-672b-49ca-b2ef-09e91aab4adb",
        authId: "be7d0f66-f1c0-4231-8249-c7ca7e2a16e7",
        description: "Seorang pengembang AI yang tertarik pada pengembangan teknologi kecerdasan buatan. Saya berfokus pada menciptakan solusi inovatif dan berkontribusi pada perkembangan AI di dunia",
        verified_status: "verified",
        price: 150000,
        rating: 3.3
    },
    {
        talentId: "e296c826-23c7-43b0-948a-ce88727a8816",
        authId: "641c1e86-51ad-4df4-be90-05dc147cf8c6",
        description: "Saya seorang model dengan passion dalam industri fashion dan seni. Saya senang menjadi bagian dari proyek-proyek kreatif dan berkolaborasi dengan desainer untuk menghadirkan koleksi yang unik",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "c0b4be2f-e359-4de3-a208-5746cd44c5a7",
        authId: "866ecc5e-3d5c-4303-920e-db158e950b3c",
        description: "Seorang gitaris yang tidak hanya menekuni musik, tetapi juga senang berbagi pengetahuannya melalui mengajar. Saya percaya bahwa musik adalah bahasa universal yang dapat menyatukan orang",
        verified_status: "verified",
        price: 150000,
        rating: 2.1
    },
    {
        talentId: "61fca343-d1b1-407c-88cb-4b399f405827",
        authId: "149f6d68-a477-477e-9166-788496c4931c",
        description: "Seorang pelatih olahraga yang memahami pentingnya kebugaran fisik. Saya berfokus pada membantu klien mencapai tujuan kebugaran mereka dan meningkatkan kesehatan secara menyeluruh",
        verified_status: "verified",
        price: 150000,
        rating: 2.9
    },
    {
        talentId: "81f6cceb-499d-4e7c-9b0e-1015ec740887",
        authId: "0a97b970-e437-4cf8-9459-3fa61dc8e267",
        description: "Seorang desainer grafis dan ilustrator yang kreatif. Saya senang menciptakan desain yang memukau dan unik, serta mengekspresikan ide melalui seni visual",
        verified_status: "verified",
        price: 150000,
        rating: 1.7
    },
    {
        talentId: "953f9d50-5471-4c09-907b-cc4f974836cb",
        authId: "e81a229d-d826-4e09-a780-c362577d3000",
        description: "Saya adalah pengajar bahasa yang juga tertarik dalam memperkenalkan kebudayaan. Saya senang berbagi pengetahuan tentang bahasa dan tradisi kepada para siswa",
        verified_status: "verified",
        price: 150000,
        rating: 4.9
    },
    {
        talentId: "bc9e4ba8-b3ac-4e68-a052-cc053f1e9f62",
        authId: "fc0701d7-8749-4a93-a030-b89555203e41",
        description: "Seorang ahli dalam pengembangan Internet of Things (IoT) dan perangkat keras. Saya tertarik dalam menciptakan solusi pintar yang mengintegrasikan teknologi untuk meningkatkan kehidupan sehari-hari",
        verified_status: "verified",
        price: 150000,
        rating: 2.3
    },
    {
        talentId: "a34c01d7-51fe-4856-a6cd-2d97d8dbfbbb",
        authId: "241c3b4f-a9d3-4e06-a3df-9667572ce11e",
        description: "Saya seorang penulis naskah dan produser film yang berpengalaman. Saya senang menciptakan cerita yang memukau dan mengawasi proses produksi untuk membawa ide-ide tersebut menjadi kenyataan",
        verified_status: "verified",
        price: 150000,
        rating: 1.4
    },
    {
        talentId: "7ff10a48-0f1a-40af-93c8-6960d345309a",
        authId: "0aa5cdfd-e084-4747-b994-8fbf74d8fe7b",
        description: "Seorang guru matematika yang berkomitmen untuk membantu siswa memahami konsep matematika secara mendalam. Saya menggunakan pendekatan kreatif untuk membuat pembelajaran lebih menarik",
        verified_status: "verified",
        price: 150000,
        rating: 4.2
    },
    {
        talentId: "b2ba297d-22e6-42d1-87d3-5c0ac8a122b4",
        authId: "84b3bc95-b276-4508-951c-270f2e182f24",
        description: "Saya seorang seniman mural yang menciptakan karya seni di tempat umum. Saya percaya bahwa seni dapat menginspirasi dan menyatukan masyarakat",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "537405d0-4004-4f46-b7b0-a10857c22a74",
        authId: "1e66f126-32c5-4267-b2c1-1640923fa7eb",
        description: "Seorang produser musik yang memiliki kemampuan dalam menghasilkan dan mengkomposisi berbagai genre musik. Saya senang menciptakan karya-karya yang memadukan inovasi dan keberagaman",
        verified_status: "verified",
        price: 150000,
        rating: 2.3
    },
    {
        talentId: "f614ec88-a7ff-48dc-9586-7f7768eb44b8",
        authId: "2ed4d9bb-8216-467a-8bc7-f93251189565",
        description: "Seorang jurnalis perjalanan dan petualang yang senang menjelajahi tempat-tempat eksotis di seluruh dunia. Saya berbagi pengalaman petualangan saya melalui tulisan dan fotografi",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "5f8037a6-6fa7-493b-8456-100ff1d49374",
        authId: "e5a55130-8df8-493a-aa44-6368110e8674",
        description: "Seorang pemain sepak bola yang berdedikasi untuk mencapai prestasi tertinggi dalam olahraga ini. Saya senang berlatih keras dan berkompetisi di level tertinggi",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "931a56d1-04c6-4216-ba88-90fff6aad1e0",
        authId: "8766982a-ff4a-4e56-8153-5270457a3b8b",
        description: "Seorang pengembang aplikasi mobile yang juga memiliki keahlian dalam desain antarmuka pengguna (UI/UX). Saya fokus pada menciptakan pengalaman pengguna yang intuitif dan menarik",
        verified_status: "verified",
        price: 150000,
        rating: 2
    },
    {
        talentId: "aa7ba2ca-7f10-48dd-993f-dce72a021b15",
        authId: "4df49f40-e0b4-46bf-bd51-3eaa520bd6f0",
        description: "Saya adalah seorang penata rambut yang kreatif dan berbakat. Saya senang menciptakan gaya rambut yang unik sesuai dengan kepribadian klien",
        verified_status: "verified",
        price: 150000,
        rating: 1
    },
    {
        talentId: "55346d91-7c51-48d6-b3a5-c58e79c76abd",
        authId: "3806c34c-efcf-49f9-9254-064b6cdcbca8",
        description: "Seorang guru fisika yang berkomitmen untuk membuat konsep fisika lebih mudah dipahami oleh siswa. Saya menggunakan pendekatan praktis dalam pengajaran untuk meningkatkan pemahaman siswa",
        verified_status: "verified",
        price: 150000,
        rating: 4.3
    },
    {
        talentId: "428d63e4-e03e-47e2-8257-2e86f169200b",
        authId: "ce10b763-ec85-47b1-a12e-530819657839",
        description: "Seorang stylist fashion yang juga aktif sebagai model. Saya memiliki pemahaman mendalam tentang tren fashion dan senang menciptakan gaya yang unik untuk setiap sesi pemotretan",
        verified_status: "verified",
        price: 150000,
        rating: 4.3
    },
    {
        talentId: "9594fdcf-15bd-47c9-9b90-0e725ecd4184",
        authId: "66ac657a-41ce-4ed7-91a2-9e7d2bbf9db5",
        description: "Seorang ahli analisis data dengan latar belakang ilmu komputer. Saya senang menggali wawasan dari data untuk mengambil keputusan yang informatif dan strategis",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "23bb553c-997c-4489-ba49-25345267f309",
        authId: "2dd883cf-be00-4d0c-af9f-3665d05b3124",
        description: "Seorang guru sejarah yang bersemangat dalam membagikan pengetahuan tentang masa lalu kepada siswa. Saya percaya bahwa memahami sejarah dapat memberikan wawasan yang berharga untuk masa depan",
        verified_status: "verified",
        price: 150000,
        rating: 3
    },
    {
        talentId: "d104a22b-7d7d-4764-a89a-e9a4e9fd2794",
        authId: "bcfe3ce8-26c4-4e2d-a145-35b47fab18e4",
        description: "Seorang pengajar tari dan koreografer yang mencintai seni gerak. Saya senang mengajarkan siswa teknik tari dan menciptakan koreografi yang menginspirasi",
        verified_status: "verified",
        price: 150000,
        rating: 4.5
    },
    {
        talentId: "723eb914-3915-4884-9fe3-0bae82c50e1a",
        authId: "b8af3587-710e-46fb-a31c-3eec370cfcb6",
        description: "Seorang videografer yang suka membuat konten perjalanan. Saya berbagi pengalaman petualangan saya melalui video yang men captur keindahan tempat yang saya kunjungi",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "219a0def-9568-4d15-ae9c-02ffce9ac4a7",
        authId: "0783684c-c105-44dc-9f28-403b31740b1c",
        description: "Seorang pelatih fitness yang tidak hanya berfokus pada latihan fisik, tetapi juga memberikan perhatian khusus pada aspek nutrisi. Saya membantu klien mencapai kesehatan optimal melalui kombinasi latihan dan pola makan sehat",
        verified_status: "verified",
        price: 150000,
        rating: 4.6
    },
    {
        talentId: "082e524f-4bb3-4115-b047-3b77e03f2f8a",
        authId: "03c6409c-e992-4a6d-9c9a-c6297db430dc",
        description: "Seorang penyunting video dengan keahlian dalam efek visual. Saya menghasilkan konten video yang mengesankan dan memikat, seringkali menambahkan efek visual untuk meningkatkan kualitas produksi",
        verified_status: "verified",
        price: 150000,
        rating: 4
    },
    {
        talentId: "dec0a794-803c-4a77-ab00-fece93c2d94a",
        authId: "3e812b44-7371-46ff-9efe-be3007d8ffae",
        description: "Seorang guru kimia yang berkomitmen untuk membuat pembelajaran kimia lebih menarik dan mudah dipahami. Saya menggunakan eksperimen praktis untuk memperkaya pengalaman belajar siswa",
        verified_status: "verified",
        price: 150000,
        rating: 2.5
    },
    {
        talentId: "ed212b7b-6654-47b9-bdd1-2fed2ee50b7e",
        authId: "c5734e3b-e20d-41f8-8b6d-b24c5ce76fbb",
        description: "Saya adalah pematung yang menciptakan karya seni dari berbagai bahan, termasuk batu, kayu, dan logam. Saya senang menggambarkan ekspresi dan emosi melalui seni patung",
        verified_status: "verified",
        price: 150000,
        rating: 2.9
    },
    {
        talentId: "5a84cfab-2a96-4c5c-a741-4e9da4b884b8",
        authId: "ca863911-5220-4a7f-ae78-9b8f47cfa48c",
        description: "Seorang guru biologi yang memiliki hasrat untuk menyebarkan keajaiban dunia hayat. Saya menggunakan metode interaktif untuk menjelaskan konsep biologi kepada siswa dengan cara yang menyenangkan dan edukatif",
        verified_status: "verified",
        price: 150000,
        rating: 4.5
    },
    {
        talentId: "b65b0a58-bdf2-4738-9f2d-6efdbe262da8",
        authId: "109983cf-98ef-48dd-b09c-c03e05ab4bc6",
        description: "Seorang pianis yang juga menciptakan komposisi musik. Saya senang menggali ekspresi seni melalui sentuhan tuts piano dan menghasilkan karya-karya orisinal",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "dd449733-0583-40f6-8531-9861fc8e0761",
        authId: "584c7c5c-bbd6-49a3-b6d5-6a1f00f197fd",
        description: "Seorang pengembang game yang memiliki keahlian dalam merancang dan mengembangkan permainan. Saya senang menciptakan pengalaman bermain yang menarik dan inovatif",
        verified_status: "verified",
        price: 150000,
        rating: 2.1
    },
    {
        talentId: "79acdf8c-54cd-48d2-9dd1-52de35b9be29",
        authId: "794b31ed-f6a2-442f-b1ee-100e6dd40a64",
        description: "Saya adalah desainer fashion yang fokus pada kreativitas dan keunikan. Saya menciptakan pakaian dan aksesori handmade untuk mengekspresikan gaya dan kepribadian",
        verified_status: "verified",
        price: 150000,
        rating: 1.1
    },
    {
        talentId: "e67e4913-c591-4908-82bb-818426396238",
        authId: "c4b12bf9-e868-4b9d-a8c0-db14f39a9fc2",
        description: "Seorang pengajar bahasa Inggris yang berkomitmen untuk meningkatkan kemampuan berbahasa Inggris siswa. Saya menggunakan metode interaktif dan kegiatan praktis dalam pengajaran",
        verified_status: "verified",
        price: 150000,
        rating: 1.2
    },
    {
        talentId: "f7733e52-223e-4a35-a2c1-d003aed83a67",
        authId: "79413fd2-7b98-44ee-81e6-06d39e35da94",
        description: "Seorang atletik yang telah berpengalaman dan sekarang menjadi pelatih atletik. Saya membimbing atlet untuk mencapai prestasi tertinggi dalam berbagai cabang olahraga atletik",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "afac4f24-18f2-4fc4-930e-2cb1f439953a",
        authId: "c3795947-1faa-42ed-aa69-e5cb5aa24f6b",
        description: "Seorang aktor yang juga berkecimpung dalam dunia modeling. Saya senang menghidupkan karakter-karakter dalam peran film dan juga menjadi wajah untuk berbagai merek fashion",
        verified_status: "verified",
        price: 150000,
        rating: 3.2
    },
    {
        talentId: "a897d16b-b8ee-472d-ad39-df50aa6ae82f",
        authId: "b99242c5-112f-40cd-be58-d8a285a0e7fb",
        description: "Seorang ahli keamanan TI yang fokus pada analisis keamanan dan etika hacking. Saya membantu organisasi untuk memastikan keamanan sistem dan melindungi data dari ancaman keamanan cyber",
        verified_status: "verified",
        price: 150000,
        rating: 1.6
    },
    {
        talentId: "1dc02527-ebe6-44ff-b900-cd5fb296d7be",
        authId: "27da3b30-77d1-4f3e-85d2-0a5e6b7652a0",
        description: "Seorang fotografer potret yang mengkhususkan diri dalam mengabadikan momen indah dan ekspresi unik melalui lensa kamera. Saya senang bekerja dengan individu dan keluarga untuk menciptakan kenangan abadi",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "f7d19853-608b-4f77-807d-2e3b88afb36b",
        authId: "ef073bf9-4600-4023-a0f1-a1a1b925d1a5",
        description: "Seorang pengajar musik yang ahli dalam instrumen tiup, terutama klarinet. Saya berbagi kecintaan saya terhadap musik dan membimbing siswa untuk mengembangkan keterampilan bermain instrumen tiup mereka",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "d9b90682-f5b4-45f7-b1ed-8b8044c945e1",
        authId: "9668d78d-16f8-40d9-8841-4e8c640fa2d2",
        description: "Seorang mantan pemain bulu tangkis yang beralih menjadi pelatih. Saya membimbing pemain muda untuk mengembangkan keterampilan dan strategi dalam olahraga bulu tangkis",
        verified_status: "verified",
        price: 150000,
        rating: 2.1
    },
    {
        talentId: "484ee130-c1ee-4fa3-ace3-f50ca80443b3",
        authId: "f2b6798f-bc30-4b10-98e9-91c4b0905c50",
        description: "Saya seorang model yang juga memiliki keahlian dalam merancang pakaian. Saya menciptakan koleksi pakaian yang mencerminkan gaya dan kepribadian saya",
        verified_status: "verified",
        price: 150000,
        rating: 1.3
    },
    {
        talentId: "2868823c-eedb-4dbf-9e98-75e71801a8a6",
        authId: "5cfa8406-674c-4aec-998a-fd3de6324ea3",
        description: "Seorang pengembang web dengan fokus pada desain antarmuka pengguna yang menarik dan responsif. Saya menciptakan pengalaman online yang optimal untuk pengguna",
        verified_status: "verified",
        price: 150000,
        rating: 1.9
    },
    {
        talentId: "62dd6719-32e9-4509-8ef4-f9bd03302e4f",
        authId: "1a372d61-4099-467f-96cb-d8343cb74485",
        description: "Seorang pengajar bahasa Spanyol yang memiliki hasrat untuk mendidik siswa tentang keindahan dan kekayaan budaya Spanyol. Saya menciptakan lingkungan belajar yang menyenangkan dan interaktif",
        verified_status: "verified",
        price: 150000,
        rating: 4.6
    },
    {
        talentId: "db509fda-df86-4854-bce6-5cdeecaa5385",
        authId: "3d87c0b5-2034-4948-b6a7-3d41adac82f0",
        description: "Seorang pematung yang menciptakan karya seni patung dari berbagai bahan. Saya menyampaikan pesan dan emosi melalui bentuk dan tekstur dalam setiap karya saya",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "0790910d-0408-458e-b2f7-d63095f5a934",
        authId: "93155ee8-7c97-4520-9339-98552f98ddf4",
        description: "Seorang pemain biola yang juga menciptakan komposisi musik. Saya memadukan keindahan suara biola dengan kreasi musik orisinal",
        verified_status: "verified",
        price: 150000,
        rating: 2.1
    },
    {
        talentId: "ab59d7c4-a279-4042-b3f6-ac0e412136b3",
        authId: "3975dfdc-2e6a-4200-8885-5972136ad7f3",
        description: "Seorang mantan pemain basket yang kini menjadi pelatih. Saya berfokus pada pengembangan keterampilan dan strategi permainan untuk membantu atlet mencapai potensi maksimal",
        verified_status: "verified",
        price: 150000,
        rating: 2.1
    },
    {
        talentId: "d9db76d1-da55-4fff-8c9d-5de9c074f573",
        authId: "35a1748c-b53c-40f3-b99e-94f508c298d2",
        description: "Seorang pengembang aplikasi mobile yang ahli dalam penggunaan teknologi augmented reality. Saya menciptakan pengalaman unik yang menggabungkan dunia nyata dengan elemen virtual",
        verified_status: "verified",
        price: 150000,
        rating: 2.2
    },
    {
        talentId: "57915238-27e5-48a4-84af-ecfd641ac80f",
        authId: "01a79ce3-7786-411e-b645-96bfbf8d744a",
        description: "Seorang desainer keramik yang menciptakan karya seni unik dari tanah liat. Saya menggabungkan keahlian tradisional dengan desain modern dalam setiap karya saya",
        verified_status: "verified",
        price: 150000,
        rating: 2.6
    },
    {
        talentId: "277fe1d3-30ac-4b72-a0c9-3e28079638c4",
        authId: "e51b119e-a4c3-43ac-a0e9-82e2353cdb45",
        description: "Seorang pengajar matematika tingkat perguruan tinggi yang berdedikasi untuk memberikan pendidikan tingkat tinggi kepada mahasiswa. Saya memfasilitasi pembelajaran yang mendalam dan kritis",
        verified_status: "verified",
        price: 150000,
        rating: 4.4
    },
    {
        talentId: "952cb4e1-fb04-47ea-ac27-f02c7dada141",
        authId: "391dc0cc-faba-42ed-81f2-2526b73e04de",
        description: "Seorang sutradara film yang juga menulis naskah. Saya senang menciptakan narasi yang menginspirasi dan mengarahkan para aktor untuk memberikan penampilan terbaik",
        verified_status: "verified",
        price: 150000,
        rating: 4.8
    },
    {
        talentId: "61601bd4-79b7-4399-b6b3-4bad407c2e06",
        authId: "874c7b63-49aa-4fb4-ad08-f838501ccc23",
        description: "Seorang model yang juga memiliki keahlian sebagai makeup artist. Saya senang menciptakan tampilan yang unik dan menarik untuk setiap sesi pemotretan",
        verified_status: "verified",
        price: 150000,
        rating: 3.4
    },
    {
        talentId: "7fe44c69-7944-4e56-a529-f6168a102f8c",
        authId: "9f173915-cbe6-4cd2-8ed9-dfd065b4689e",
        description: "Seorang pengembang backend dengan fokus pada manajemen database. Saya memastikan bahwa sistem backend beroperasi dengan efisien dan data tetap aman",
        verified_status: "verified",
        price: 150000,
        rating: 3.7
    },
    {
        talentId: "c24fd25f-5784-4c9c-9703-b0076c83c110",
        authId: "3b3cdd58-8bd9-4c69-a075-9724882f0fea",
        description: "Seorang pemain golf berpengalaman yang juga menjadi pelatih. Saya membantu para pemain golf dalam mengasah keterampilan teknis dan taktis mereka di lapangan",
        verified_status: "verified",
        price: 150000,
        rating: 2.4
    },
    {
        talentId: "82be1c14-f2dd-43ed-87c4-bcb1e787be3d",
        authId: "bb739be2-0c24-4351-bf16-252dbf9859f1",
        description: "Seorang ilustrator dan komikus yang menciptakan karya seni visual yang memukau. Saya menyampaikan cerita melalui gambar-gambar yang ekspresif dan penuh imajinasi",
        verified_status: "verified",
        price: 150000,
        rating: 3.6
    },
    {
        talentId: "19e583a1-1422-4c00-8bea-a628fdfcc245",
        authId: "fb18b312-2039-437b-b04f-a63ad5b66ed0",
        description: "Seorang penyair yang juga menciptakan musik dan bernyanyi. Saya menyampaikan perasaan dan pikiran melalui kata-kata dan melodi yang indah",
        verified_status: "verified",
        price: 150000,
        rating: 1.3
    }
  ];

  await TalentModel.destroy({ where: {} })
  await TalentModel.bulkCreate(talents.map(talent => ({...talent })));
  }
} 
