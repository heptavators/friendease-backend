import { v4 as uuidv4 } from 'uuid';
import { TagModel } from '../model/Tag'; 

export class TagSeeder {
  async run(){

    const listOfTags = [
        "Skena",
        "Anak-Senja",
        "Berjiwa-petualang",
        "Penuh-semangat",
        "Kreatif",
        "Kutu-buku",
        "Perfeksionis",
        "Sabar",
        "Berjiwa-sosial",
        "Romantis",
        "Kritis",
        "Terorganisir",
        "Inovatif",
        "Optimis",
        "Penuh-daya-juang",
        "Ramah",
        "Fleksibel",
        "Analitis",
        "Introspektif",
        "Pecinta-alam",
        "Ambisius",
        "Independen",
        "Humoris",
        "Disiplin",
        "Percaya-diri",
        "Dermawan",
        "Suka-menolong",
        "Keibuan",
        "Cerdas",
        "Ramah-lingkungan",
        "Penuh-energi",
        "Patriotik",
        "Intelektual",
        "Riang",
        "Visioner",
        "Rendah-hati",
        "Bekerja",
        "Self-development",
        "Penari",
        "Penyanyi",
        "Pelukis",
        "Penulis",
        "Fotografer",
        "Pramugari",
        "Musisi",
        "Koki",
        "Ilustrator",
        "Aktor/Aktris",
        "Desainer-grafis",
        "Pemandu-wisata",
        "Penulis-lagu",
        "Penyiar-radio",
        "Penata-rambut",
        "Perawat",
        "Peneliti",
        "Ahli-biologi",
        "Astronom",
        "Arsitek",
        "Ahli-hukum",
        "Arkeolog",
        "Ilmuwan-data",
        "Animator",
        "Konsultan",
        "Pengajar",
        "Jurnalis",
        "Penerjemah",
        "Ahli-nutrisi",
        "Dokter",
        "Ahli-ekologi",
        "Psikolog",
        "Kurator",
        "Montir-mobil",
        "Desainer-interior",
        "Diplomat",
        "Seniman",
        "Pialang-saham",
        "Geolog",
        "Nakhoda-kapal",
        "Programmer",
        "Analis-keamanan",
        "Sutradara",
        "Pemadam-kebakaran",
        "Pembuat-perhiasan",
        "3D-Modelling",
        "Content-creator",
        "Cosplay",
        "Desain",
        "Desain-Ui",
        "Dubbing",
        "Editor",
        "Filsafat",
        "Multimedia",
        "Stylist",
        "Binaraga",
        "Pendaki",
        "Motivator",
        "Komposer",
        "Manajemen",
        "Pengusaha",
        "Model",
        "Atlet",
        "Menari",
        "Menyanyi",
        "Pet-lovers",
        "Kpopers",
        "Basket",
        "Petualangan",
        "Belanja",
        "Kuliner",
        "Sejarah",
        "Teknologi",
        "Budaya",
        "Bersepeda",
        "Mendaki",
        "Surfing",
        "Berkebun",
        "Yoga",
        "Jalan-jalan",
        "Berkuda",
        "Memancing",
        "Memasak",
        "Memanjat",
        "Main-kartu",
        "Catur",
        "Membaca",
        "Menjahit",
        "Golf",
        "Sepak-bola",
        "Menyelam",
        "Belajar",
        "Poker",
        "Menulis",
        "Grafity",
        "Astrografi",
        "Badminton",
        "Basket",
        "Berdiskusi",
        "Berenang",
        "Berhitung",
        "Berkebun",
        "Berkuda",
        "Rubik",
        "Bernyanyi",
        "Berpikir",
        "Bersepeda",
        "Billiard",
        "Browsing",
        "Catur",
        "Diskusi",
        "Eksperimen",
        "Fotografi",
        "Futsal",
        "Gym",
        "Hang-Out",
        "Hiking",
        "Ice-skating",
        "Jogging",
        "Kerja",
        "Kuliner",
        "Lari",
        "Melukis",
        "Memancing",
        "Memasak",
        "Membaca",
        "Menari",
        "Menggambar",
        "Menjahit",
        "Menonton",
        "Menulis",
        "Merenung",
        "Merokok",
        "Ngopi",
        "Olahraga",
        "Prank",
        "Puzzle",
        "Rebahan",
        "Sosmed",
        "Sulap",
        "Tenis-meja",
        "Tidur",
        "Touring",
        "Trading",
        "Traveling",
        "Voli",
        "Menari",
        "Menyanyi",
        "Pet-lovers",
        "Gamers",
        "Kpopers",
        "Seni",
        "Basket",
        "Petualangan",
        "Belanja",
        "Kuliner",
        "Sejarah",
        "Teknologi",
        "Bersepeda",
        "Mendaki",
        "Surfing",
        "Berkebun",
        "Yoga",
        "Jalan-jalan",
        "Berkuda",
        "Memancing",
        "Memasak",
        "Memanjat",
        "Main-kartu",
        "Catur",
        "Membaca",
        "Menjahit",
        "Golf",
        "Sepak-bola",
        "Menyelam",
        "Belajar",
        "Poker",
        "Menulis",
        "Grafity",
        "Astrografi",
        "Badminton",
        "Basket",
        "Berdiskusi",
        "Berenang",
        "Berhitung",
        "Berkebun",
        "Berkuda",
        "Rubik",
        "Bernyanyi",
        "Berpikir",
        "Bersepeda",
        "Browsing",
        "Catur",
        "Diskusi",
        "Fotografi",
        "Futsal",
        "Gym",
        "Hang-Out",
        "Ice-skating",
        "Jogging",
        "Kerja",
        "Kuliner",
        "Lari",
        "Melukis",
        "Memancing",
        "Memasak",
        "Membaca",
        "Menari",
        "Menggambar",
        "Menjahit",
        "Menonton",
        "Menulis",
        "Merenung",
        "Merokok",
        "Ngopi",
        "Prank",
        "Puzzle",
        "Rebahan",
        "Sosmed",
        "Sulap",
        "Tenis-meja",
        "Tidur",
        "Touring",
        "Trading",
        "Traveling",
        "Voli",
        "Mendaki",
        "Bisnis",
        "Sastra",
        "Film",
        "Robotika",
        "Kesehatan",
        "Kecerdasan-buatan",
        "Konservasi",
        "Videografi",
        "Meditasi",
    ]

    const tagWithUUIDS = [
      {
        tagId: "5611418a-15d8-4696-89fa-55337f0d07e1",
        name: "Bermain-musik"
      },
      {
        tagId: "a1c959b1-8f18-4144-8904-f2cb3558f483",
        name: "Curhat"
      },
      {
        tagId: "76cc7aae-ebb2-4577-862d-75e34f8f3f24",
        name:  "Coding"
      },
      {
        tagId: "916f9aa9-20be-4480-b75d-603cf40b9680",
        name: "Fashion"
      },
      {
        tagId: "c62e99e9-7e43-4449-a6f4-f8d7be4a2611", 
        name: "Olahraga",
      },
      {
        tagId: "39dd7cf3-a15f-4de7-a744-6ea9035f8046",
        name: "Mendengarkan-musik",
      },
      {
        tagId: "5d38001e-8dbf-44a3-8479-994bbebbfa17",
        name:  "Cosplayer",
      },
      {
        tagId: "8aff57d8-ec74-4e5f-b741-570115c05a6d",
        name: "Wibu",
      },
      {
        tagId: "597add33-257c-4d86-9812-e655f6a52b94",
        name: "Akting",
      }
    ]

    const tagObjects = listOfTags.map(tag => ({
        tagId: uuidv4(),
        name: tag,
    }));


    
      await TagModel.destroy({ where: {} })
      await TagModel.bulkCreate(tagWithUUIDS.map(tagWithUUID => ({...tagWithUUID })));
      await TagModel.bulkCreate(tagObjects.map(tagObject => ({...tagObject })));


  }
} 