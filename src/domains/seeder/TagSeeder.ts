import { v4 as uuidv4 } from 'uuid';
import { TagModel } from '../model/Tag'; 

export class TagSeeder {
  async run(){

    const tags = [
        {
            tagId: "1a96a320-b40a-4d06-b89c-6184cc1f4b43",
            name: "Basket"
        },
        {
            tagId: "1abe28f4-d7d9-41e9-bac2-9d2b5cb4642b",
            name: "Memasak"
        },
        {
            tagId: "2b1bd2e8-4f56-4dde-a3d7-645c2d4c011c",
            name: "Desainer grafis"
        },
        {
            tagId: "c7077f8c-e405-4139-9532-2c8e0db094d1",
            name: "Disiplin"
        },
        {
            tagId: "3777cf7b-fd9a-475c-9ec3-8f237161e218",
            name: "Mendengarkan musik"
        },
        {
            tagId: "dae9794a-eac6-4072-ae71-debb91a9b169",
            name: "Peneliti"
        },
        {
            tagId: "91820d8f-7935-4dd4-80c5-a3442b92b5f9",
            name: "Penuh semangat"
        },
        {
            tagId: "1177ac48-bed8-42d2-a0ad-97255d1b77d0",
            name: "Rebahan"
        },
        {
            tagId: "9960d597-0336-46ec-af77-b80bee4d8028",
            name: "Ramah lingkungan"
        },
        {
            tagId: "f077c4ad-655e-4b52-930d-d2be93e11f38",
            name: "Binaraga"
        },
        {
            tagId: "4a3e0383-1023-4a9d-8df2-1db87f4de14a",
            name: "Atlet"
        },
        {
            tagId: "e406a9e8-9eac-4fd0-9f1e-e9360034f2a4",
            name: "Sutradara"
        },
        {
            tagId: "fdb05d5d-b41e-4dba-8478-585f72de5adf",
            name: "Motivator"
        },
        {
            tagId: "d7316a6e-2e18-4274-854e-d5bf2b6a972b",
            name: "Kecerdasan buatan"
        },
        {
            tagId: "809f8ddf-5e01-49fc-92fc-47495aebe6aa",
            name: "Curhat"
        },
        {
            tagId: "fb5650b4-2d26-4805-b514-7ce3d75284e1",
            name: "Seniman"
        },
        {
            tagId: "b724ff95-1fab-4cd1-a703-249cb39b4064",
            name: "Romantis"
        },
        {
            tagId: "8278b336-367e-43b0-a139-2074d2a76998",
            name: "Lari"
        },
        {
            tagId: "f7ceaca7-c3e6-4f62-8227-440e3468fb11",
            name: "Koki"
        },
        {
            tagId: "2215f811-6fcf-4c2d-8be7-cf6ffd6bde70",
            name: "Merokok"
        },
        {
            tagId: "40b679b3-dfee-4c29-96a2-1f65973c0fcb",
            name: "Menyanyi"
        },
        {
            tagId: "d5ca1155-475c-4a1c-bb6d-963e23be7bb7",
            name: "Tidur"
        },
        {
            tagId: "a19a9301-6bc4-4860-abf0-ce007cb552fc",
            name: "Film"
        },
        {
            tagId: "244cde7b-cc56-4a1e-8b23-a9547cda0814",
            name: "Robotika"
        },
        {
            tagId: "9aa38632-c085-4d11-89e8-75ebc9580354",
            name: "Golf"
        },
        {
            tagId: "9f4b7c92-a54f-4d7d-bc68-7f641e518fa9",
            name: "Model"
        },
        {
            tagId: "3d17e40d-f72c-446b-8287-345a7ec37a13",
            name: "Perfeksionis"
        },
        {
            tagId: "21babc7a-eec7-41bf-972b-c7c4567e9353",
            name: "Ilmuwan data"
        },
        {
            tagId: "b99b0ed9-fab3-47fa-bf11-0865f82f4a60",
            name: "Stylist"
        },
        {
            tagId: "e1eaa7a3-33a4-4669-a40d-f5842e95bcb9",
            name: "Bisnis"
        },
        {
            tagId: "932c988a-b84f-4bcd-89a8-11a137771625",
            name: "Analitis"
        },
        {
            tagId: "9b0adc9c-a778-459a-a143-4a734b38628d",
            name: "Psikolog"
        },
        {
            tagId: "595eda94-2c5a-4788-9279-5d3b2bcfa9f2",
            name: "Arsitek"
        },
        {
            tagId: "542dc2b2-bd27-43ec-b52a-9e6326891b15",
            name: "Pembuat perhiasan"
        },
        {
            tagId: "7ff12400-df00-4701-9b7d-2ea07fff675a",
            name: "Inovatif"
        },
        {
            tagId: "70ca1c49-b180-4a14-8214-caa90d788dbf",
            name: "Ambisius"
        },
        {
            tagId: "a8ceb646-dafc-4ed0-a952-c53a0c2787f2",
            name: "Berdiskusi"
        },
        {
            tagId: "327e1f45-ff1b-47f5-b883-9a28b55d4292",
            name: "Puzzle"
        },
        {
            tagId: "3f607280-b1bb-4543-9dd4-e327b339ab22",
            name: "Pet lovers"
        },
        {
            tagId: "70d9b90e-8770-4597-a488-eba825d26f08",
            name: "Berhitung"
        },
        {
            tagId: "19fbea25-e02d-4324-932b-7bf75545424d",
            name: "Pemandu wisata"
        },
        {
            tagId: "9ffe4d46-ea6f-41ff-a83d-242c6ab2a731",
            name: "Futsal"
        },
        {
            tagId: "06e94a23-9601-4f20-bc18-d1359624ad89",
            name: "Ilustrator"
        },
        {
            tagId: "66981a20-bb5d-42db-86d3-1968eb83aa04",
            name: "Animator"
        },
        {
            tagId: "ddb1ddfb-0b8b-4955-ba1c-f53ecbf42ef4",
            name: "Diplomat"
        },
        {
            tagId: "82404563-41ea-485c-95e3-09a8990e392c",
            name: "Kritis"
        },
        {
            tagId: "7e7de680-8a96-49a4-9ff4-57e87179225d",
            name: "Meditasi"
        },
        {
            tagId: "94d882a3-ee43-4023-b638-b116d2b8d6e1",
            name: "Humoris"
        },
        {
            tagId: "792f6857-d8c6-4aa7-b005-21417504287f",
            name: "Patriotik"
        },
        {
            tagId: "e87a0e22-aa58-4bb4-91e2-96279a3c2367",
            name: "Petualangan"
        },
        {
            tagId: "4beb809c-4918-444c-9ce8-4f5f58088995",
            name: "Cerdas"
        },
        {
            tagId: "08e5b2fe-27bc-4025-8c89-0f40f2e77b05",
            name: "Cosplayer"
        },
        {
            tagId: "a54fef35-9297-4d60-ad52-d025de1b8e8e",
            name: "Diskusi"
        },
        {
            tagId: "4e56e77d-4a7a-486d-809d-558fa68b1ab5",
            name: "Desain"
        },
        {
            tagId: "dc877f87-41f9-4624-9d40-7a5d8aa2b8fb",
            name: "Geolog"
        },
        {
            tagId: "176d61d8-79aa-4dcf-82e2-b4d64ddcc56c",
            name: "Jogging"
        },
        {
            tagId: "ca7549c2-b073-4fc2-9f15-41fc88242ffa",
            name: "Intelektual"
        },
        {
            tagId: "6ecc77b1-857d-44ed-abc9-3861620f8307",
            name: "Penulis"
        },
        {
            tagId: "2bb6c52a-44d3-461c-84d8-2b7d4af484ab",
            name: "Fotografi"
        },
        {
            tagId: "123fe9f7-7327-443e-b4f6-9fc9fb638b9b",
            name: "Percaya diri"
        },
        {
            tagId: "3b5f16ae-3eb3-4adf-9650-962ec8c1827d",
            name: "Penuh daya juang"
        },
        {
            tagId: "40550592-502a-4f46-95c0-b69a01afa12b",
            name: "Penari"
        },
        {
            tagId: "7f7b93d2-af9f-4c90-ad2e-33ad52f1932b",
            name: "Seni"
        },
        {
            tagId: "679532e4-4833-4af5-b6f8-b4c1ce4a58dd",
            name: "Desainer interior"
        },
        {
            tagId: "221146e8-ed0f-4504-99eb-0fa6bd473bf6",
            name: "Sejarah"
        },
        {
            tagId: "8f6ea3e8-8889-4cb5-ac0d-04d015756ae1",
            name: "Optimis"
        },
        {
            tagId: "e8844046-48b2-443d-be0f-ceb9b22044de",
            name: "Touring"
        },
        {
            tagId: "d5be8cd5-29ea-4e0f-9f61-37513301fbf8",
            name: "Ice skating"
        },
        {
            tagId: "5efb8f81-17ee-4846-8cba-f42d72e9d3f9",
            name: "Pramugari"
        },
        {
            tagId: "8c645295-a180-482c-8407-7349a957d096",
            name: "Eksperimen"
        },
        {
            tagId: "5f6436fd-fb20-4850-a370-ba6cd64b024c",
            name: "Konsultan"
        },
        {
            tagId: "6e0f3e31-e212-4612-b4c3-1d2674feee16",
            name: "Penata rambut"
        },
        {
            tagId: "60f70712-50bb-43be-a91e-c31409098940",
            name: "Suka menolong"
        },
        {
            tagId: "ab77d852-14da-4ded-a3b5-3b994ca830d4",
            name: "Belajar"
        },
        {
            tagId: "a12047ef-5af6-4f63-9df0-36111852e5c3",
            name: "Gym"
        },
        {
            tagId: "2259dd17-874c-4dae-94ea-6293378c66f5",
            name: "Bermain musik"
        },
        {
            tagId: "6881ac93-81bd-4ff0-a955-67b7452acd87",
            name: "Filsafat"
        },
        {
            tagId: "773695b7-7859-4da8-a6c2-16648be0031a",
            name: "Komposer"
        },
        {
            tagId: "9732fc35-8b4b-45c9-9dcf-73b04bfcc7ac",
            name: "Ramah"
        },
        {
            tagId: "ae9b9572-f1da-42b1-b3f4-1221cccbadcb",
            name: "Kpopers"
        },
        {
            tagId: "31993d20-9425-4c5f-89a7-f985c8912c7d",
            name: "Voli"
        },
        {
            tagId: "031ab0d3-0a44-4538-ae6d-8a205c6fc76f",
            name: "Kreatif"
        },
        {
            tagId: "2b2131ea-e304-4e36-a161-15489e599859",
            name: "Fleksibel"
        },
        {
            tagId: "3fc4df63-123e-4594-ae89-33b71e139586",
            name: "Menulis"
        },
        {
            tagId: "c86056a8-8e70-471a-bd40-8eb4e927d394",
            name: "Penuh energi"
        },
        {
            tagId: "2f3a2c01-8c25-403a-8592-1caaff25f37b",
            name: "Penulis lagu"
        },
        {
            tagId: "cdb5949a-f819-4e34-bf3c-0cceb02d5491",
            name: "Dermawan"
        },
        {
            tagId: "b5270a34-4cd9-4aab-8e6c-fd2ebcf53efa",
            name: "Tenis meja"
        },
        {
            tagId: "09fa13d8-83e0-4dc0-803b-ac9b7821c61e",
            name: "Catur"
        },
        {
            tagId: "3f8606a3-ea27-4f87-bf35-d7c63d77d2b4",
            name: "Independen"
        },
        {
            tagId: "cdb9b42e-193f-4f2c-83d7-11b5ebdbb858",
            name: "Analis keamanan"
        },
        {
            tagId: "99e81107-0704-4a0f-97e2-1913b3df5571",
            name: "Sabar"
        },
        {
            tagId: "c55be375-52bb-44e0-8fca-66c6d47a593f",
            name: "Dokter"
        },
        {
            tagId: "cfe23255-d8bc-48af-9c47-f3853623b909",
            name: "Hang Out"
        },
        {
            tagId: "27e8973b-0e23-4c8e-8448-d431b1adf337",
            name: "Akting"
        },
        {
            tagId: "693df138-9f75-4a59-b4a2-0a451669a2c7",
            name: "Fashion"
        },
        {
            tagId: "d08faa92-967b-43f7-ad6d-daddb890bed4",
            name: "Poker"
        },
        {
            tagId: "83781e2a-a933-4f80-a023-bc107f365f39",
            name: "Olahraga"
        },
        {
            tagId: "78057954-175d-4dc6-a581-8b385079b6f5",
            name: "Nakhoda kapal"
        },
        {
            tagId: "98449367-8dfe-44b9-b644-edd09b5a47e8",
            name: "Sosmed"
        },
        {
            tagId: "c279a107-444a-4851-aefd-b7e653fdd7d6",
            name: "Pialang saham"
        },
        {
            tagId: "e4e59e33-0930-4b48-a582-54961aab8f01",
            name: "Billiard"
        },
        {
            tagId: "03ba3fb6-c610-43bd-ad78-de32ce5d6efb",
            name: "Pelukis"
        },
        {
            tagId: "31508fcc-987a-40c0-88ff-e60dd57edc23",
            name: "Trading"
        },
        {
            tagId: "7bcc3c94-a304-4730-9384-dc9381e2b6c2",
            name: "Wibu"
        },
        {
            tagId: "78475c2c-418c-4337-8a20-b259b7653a97",
            name: "Programmer"
        },
        {
            tagId: "e2fd9b64-8050-4ef6-b211-375a77548f2c",
            name: "Bekerja"
        },
        {
            tagId: "850cb037-cd00-4109-a548-91ab3bb7282b",
            name: "Ahli nutrisi"
        },
        {
            tagId: "6f299e20-ed0c-4e6e-9cca-98406557156a",
            name: "Kurator"
        },
        {
            tagId: "3ee40ced-bbc4-45f4-911e-e73d1f34a0f1",
            name: "Sulap"
        },
        {
            tagId: "c83b72d2-4d96-4c57-a53c-cab0d71af96a",
            name: "Kutu buku"
        },
        {
            tagId: "fe8ccd14-d10b-4727-aa37-3a1888365a1f",
            name: "Fotografer"
        },
        {
            tagId: "246745e1-3e7a-4c75-95a1-af4813dd8bf8",
            name: "Pengusaha"
        },
        {
            tagId: "1d10f600-2a2f-4938-86f3-0b283e736de0",
            name: "Yoga"
        },
        {
            tagId: "1611c27b-76c8-4352-b314-c42573bbab5c",
            name: "Desain Ui"
        },
        {
            tagId: "3bd1450e-572a-4786-9696-d1c2a347d61f",
            name: "Jurnalis"
        },
        {
            tagId: "a796c3ba-bfa7-4ebc-a8a4-286a085e5006",
            name: "Aktor/Aktris"
        },
        {
            tagId: "9e3ef8e1-9eb0-4d70-8bac-71a1a15088eb",
            name: "Menyelam"
        },
        {
            tagId: "510d76d9-551c-46ef-902e-3e359aa692b1",
            name: "Menonton"
        },
        {
            tagId: "f7b7da30-22d1-4fca-a258-23fcf61b3ccc",
            name: "Anak Senja"
        },
        {
            tagId: "f0cc7889-f49a-4308-a5dd-b03327e6c24d",
            name: "Ahli ekologi"
        },
        {
            tagId: "a196c6b5-b6fa-4b68-ad72-427ede39a653",
            name: "Rendah hati"
        },
        {
            tagId: "3fbcd3f6-9661-4d34-b2c8-351a270017c5",
            name: "Coding"
        },
        {
            tagId: "3da2fe7f-6bac-422a-93e6-20ba96ba6cca",
            name: "Teknologi"
        },
        {
            tagId: "2f4602b9-3233-466c-a995-bd6a9c644b2d",
            name: "Traveling"
        },
        {
            tagId: "78631574-0ebf-4162-b1fa-42777b5c30ce",
            name: "Self development"
        },
        {
            tagId: "faac46c9-ff39-426d-aff8-0ca3927398e4",
            name: "Kerja"
        },
        {
            tagId: "874b0e76-ab5b-4ae0-bc6f-88db111a211a",
            name: "Content creator"
        },
        {
            tagId: "b7a74ecc-b9aa-475d-b8bb-5cf73c93a79b",
            name: "Gamers"
        },
        {
            tagId: "07fb72f9-5e5a-4dac-9075-0318e3b17669",
            name: "Hiking"
        },
        {
            tagId: "3003dcdc-0d6a-4586-84bb-da2d5bf7acba",
            name: "Belanja"
        },
        {
            tagId: "3aa0e15a-0200-47ca-a4c9-437c81fc77ef",
            name: "Astrografi"
        },
        {
            tagId: "d2036267-9cc2-4af4-ae09-8c1bb8758820",
            name: "Berpikir"
        },
        {
            tagId: "552328d1-c3e4-4228-8d91-3fe7554e2d69",
            name: "Berkebun"
        },
        {
            tagId: "5f1e0078-6bc3-4a7b-9d15-69afa91f04fd",
            name: "Menggambar"
        },
        {
            tagId: "c598e12c-46e1-4c76-a2a1-25bf89e3c073",
            name: "Sepak bola"
        },
        {
            tagId: "c5e5b7cd-2c79-4361-8c05-af3a25dd1169",
            name: "Visioner"
        },
        {
            tagId: "ee08355d-2dfb-4feb-af1f-03a8570e3f65",
            name: "Melukis"
        },
        {
            tagId: "4d9e25dd-0f50-4fca-bb7b-25bcc29b6974",
            name: "Pendaki"
        },
        {
            tagId: "ba8cd514-b63f-4109-8d5d-1faca1c343bf",
            name: "Kuliner"
        },
        {
            tagId: "29dadb5a-fa6d-4bb0-a088-782136134c3c",
            name: "Berjiwa petualang"
        },
        {
            tagId: "5eae177d-cb08-42cf-aa1b-ae765a3e8f9b",
            name: "Rubik"
        },
        {
            tagId: "8c21ffdd-eb6d-4f60-bd1a-d01ec209602c",
            name: "Kesehatan"
        },
        {
            tagId: "f3e604d0-71b7-48ee-8ab8-f5de9f9d878d",
            name: "3D Modelling"
        },
        {
            tagId: "217ca70b-c34f-42f7-80d8-8c5c8131d56d",
            name: "Riang"
        },
        {
            tagId: "8cf52ccf-675e-425a-999a-f2bf2d8df8cc",
            name: "Multimedia"
        },
        {
            tagId: "24e91079-d7e3-4fe9-9900-2bc59862335d",
            name: "Cosplay"
        },
        {
            tagId: "bd4f2b85-133c-4f7d-8d70-850800008478",
            name: "Musisi"
        },
        {
            tagId: "438e4bbe-8aca-42f0-85d7-f7b563f4390b",
            name: "Keibuan"
        },
        {
            tagId: "852beaf3-7ac6-46f8-8fe6-f45b64faabc5",
            name: "Penerjemah"
        },
        {
            tagId: "49c31673-12a1-4a1e-8c9d-f77b630dc66d",
            name: "Ahli biologi"
        },
        {
            tagId: "013b9dfe-1711-440a-a995-d0b4efad872f",
            name: "Main kartu"
        },
        {
            tagId: "bac82bec-c872-4653-86b5-6529298cd180",
            name: "Browsing"
        },
        {
            tagId: "8227b824-d9a1-4ba3-a0c4-27a124048027",
            name: "Menari"
        },
        {
            tagId: "90193172-d0cd-4435-a157-2a22c508ae81",
            name: "Jalan jalan"
        },
        {
            tagId: "4e7f5bb0-8de5-4512-9b9c-8b0863835325",
            name: "Skena"
        },
        {
            tagId: "d1beeeaa-8bc3-464f-b34b-59908e9f43e7",
            name: "Berenang"
        },
        {
            tagId: "3e4fa46f-3ed9-4d2e-9412-1d0c6f527bd3",
            name: "Merenung"
        },
        {
            tagId: "5a2cdad7-fa65-45d4-bbca-9f82a17df902",
            name: "Videografi"
        },
        {
            tagId: "63dfc3d5-9065-4b23-8f0e-fd4e84b777f1",
            name: "Dubbing"
        },
        {
            tagId: "37760420-4bd4-49f1-9a92-831dbc719050",
            name: "Montir mobil"
        },
        {
            tagId: "276f7160-e41e-4f45-8b68-6a5d39627a9b",
            name: "Bernyanyi"
        },
        {
            tagId: "4d5598c3-15a9-4f39-a55f-d16415945395",
            name: "Menjahit"
        },
        {
            tagId: "1674f86e-9294-49d8-96fd-8c80f7183177",
            name: "Penyanyi"
        },
        {
            tagId: "9951aa1c-9d12-4d07-a3ca-d9236dd15902",
            name: "Prank"
        },
        {
            tagId: "9df151b5-1a8e-4f24-9dea-9e0ccd183723",
            name: "Berkuda"
        },
        {
            tagId: "8907ea50-e2b6-42e3-a311-eb53801f0d7f",
            name: "Sastra"
        },
        {
            tagId: "fe9aa18a-ee45-471c-8aab-6697d5d75330",
            name: "Manajemen"
        },
        {
            tagId: "0b2bec51-b188-490a-9c8f-751c8366e542",
            name: "Bersepeda"
        },
        {
            tagId: "d49454e4-6c34-498d-a39f-3a4be547cffc",
            name: "Editor"
        },
        {
            tagId: "9d99aec6-5e45-4317-a602-198a769d6298",
            name: "Mendaki"
        },
        {
            tagId: "378833f3-b4da-4dd3-9fb7-68acbeed7b2a",
            name: "Membaca"
        },
        {
            tagId: "c0ef8a1c-8668-4ffd-96a0-1ce3755fde6c",
            name: "Budaya"
        },
        {
            tagId: "41a08dbb-3d9e-45c0-830e-0dce7d73e6d2",
            name: "Surfing"
        },
        {
            tagId: "26076559-eda2-4637-a6b2-5811dd695793",
            name: "Penyiar radio"
        },
        {
            tagId: "6fe51f53-1681-4ce8-b244-6fd14aff632d",
            name: "Pemadam kebakaran"
        },
        {
            tagId: "72a83cd4-23d3-4820-8fb9-e9245436240a",
            name: "Grafity"
        },
        {
            tagId: "d7626b7e-c049-4785-81f3-fd74eee55776",
            name: "Astronom"
        },
        {
            tagId: "fb376e2c-69e7-4bc4-9c96-1777aa7260b0",
            name: "Konservasi"
        },
        {
            tagId: "7a94957f-80c4-446c-b0e7-dd41b985ef7c",
            name: "Pecinta alam"
        },
        {
            tagId: "dff03376-c82c-444f-8036-3079342c0473",
            name: "Introspektif"
        },
        {
            tagId: "b2321f81-b623-4f37-8846-a0438aee3ebd",
            name: "Memancing"
        },
        {
            tagId: "b38643b7-50ce-43eb-98d2-d855b4c8d097",
            name: "Pengajar"
        },
        {
            tagId: "4475b2fb-f9cd-4dd5-a91e-f5563ebdd95f",
            name: "Terorganisir"
        },
        {
            tagId: "028441bb-6c39-445a-ac70-78974555bd2c",
            name: "Ahli hukum"
        },
        {
            tagId: "77a4c997-0ed5-405a-b972-f50140d7b2b0",
            name: "Badminton"
        },
        {
            tagId: "82344ab7-9ea1-409a-bdd6-124ce3eb95d3",
            name: "Berjiwa sosial"
        },
        {
            tagId: "83529fa5-d107-4179-8008-6c9030e50a35",
            name: "Arkeolog"
        },
        {
            tagId: "5baf90b5-9886-4e54-9f06-767cadc69fa3",
            name: "Perawat"
        },
        {
            tagId: "eff6e33d-cfab-4ac8-9fe2-e6f9a474927c",
            name: "Ngopi"
        },
        {
            tagId: "746db689-5d3f-4dde-a66a-478a2fd11d67",
            name: "Memanjat"
        }
    ]
    



    
      await TagModel.destroy({ where: {} })
      await TagModel.bulkCreate(tags.map(tag => ({...tag })));


  }
} 
