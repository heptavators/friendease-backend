import { v4 as uuidv4 } from 'uuid';
import { LocationModel } from '../model/Location';




export class LocationSeeder {
  async run(){
    const locations = [
        { locationId: "0a7ad9fe-f50e-4f3e-83cd-f82772c51520", province: 'Aceh', city: 'Banda Aceh' },
        { locationId: "107354c2-fa87-40df-8e8e-3358e662a1ef", province: 'Aceh', city: 'Langsa' },
        { locationId: "18346e39-acc0-4239-bc75-9a05090c753b", province: 'Aceh', city: 'Lhokseumawe' },
        { locationId: "186f5a5c-a22d-49e2-a5d6-9b7f0dba541b", province: 'Aceh', city: 'Sabang' },
        { locationId: "1a57d079-540f-4199-8847-ab6ee6e4913d", province: 'Aceh', city: 'Subulussalam' },
        { locationId: "1b48ee2e-82d7-49b8-ad37-e945150c7d2f", province: 'Sumatera Utara', city: 'Binjai' },
        { locationId: "1bc7694f-b5cd-44c7-9897-529fec5bef8a", province: 'Sumatera Utara', city: 'Gunungsitoli' },
        { locationId: "223fea51-dcf1-460c-874e-8025b21bc2a2", province: 'Sumatera Utara', city: 'Medan' },
        { locationId: "2b856b11-f462-4959-8421-2dfa6d4f566b", province: 'Sumatera Utara', city: 'Padangsidimpuan' },
        { locationId: "2e855806-a032-47d2-9c01-0a7bd1ab44f9", province: 'Sumatera Utara', city: 'Pematangsiantar' },
        { locationId: "2f1baf2e-2801-4a71-8a85-1600ed6b3cbf", province: 'Sumatera Utara', city: 'Sibolga' },
        { locationId: "314100b5-aab7-407b-af2b-842907c56afc", province: 'Sumatera Utara', city: 'Tanjungbalai' },
        { locationId: "34f77ff4-e78f-42f0-ad5b-4e5b57e07cd4", province: 'Sumatera Utara', city: 'Tebing Tinggi' },
        { locationId: "386cdefb-8e63-4b6e-9720-794dbf90c39d", province: 'Sumatera Barat', city: 'Lima Puluh Kota' },
        { locationId: "3afe00ab-1d3c-4297-a04a-99df9e3c84f0", province: 'Sumatera Barat', city: 'Bukittinggi' },
        { locationId: "3d5a92ee-ed03-4aa8-8161-388ed1ab0e7f", province: 'Sumatera Barat', city: 'Padang' },
        { locationId: "4129e977-efcb-419d-98d5-654bed8bb325", province: 'Sumatera Barat', city: 'Padang Panjang' },
        { locationId: "44f4a050-4fdd-44e3-adf6-7240ac153ce9", province: 'Sumatera Barat', city: 'Pariaman' },
        { locationId: "453e9047-e60e-4928-acf7-073e2a80b8b4", province: 'Sumatera Barat', city: 'Payakumbuh' },
        { locationId: "48d8608a-bceb-4081-bcb5-29a2b5bc57a9", province: 'Sumatera Barat', city: 'Sawahlunto' },
        { locationId: "49217141-e957-463e-8642-275a10ba986a", province: 'Sumatera Barat', city: 'Solok' },
        { locationId: "4d77a7eb-f903-4a18-8f91-5adf69e71ce3", province: 'Riau', city: 'Dumai' },
        { locationId: "500e31e3-6138-4942-896e-7404668fcad2", province: 'Riau', city: 'Pekanbaru' },
        { locationId: "5773043a-268f-464a-bedd-a5a3ecf07b71", province: 'Jambi', city: 'Jambi' },
        { locationId: "5a6a747a-73a9-4a47-84ed-022800622f44", province: 'Jambi', city: 'Sungai Penuh' },
        { locationId: "625cfa3c-3a51-4a1f-81b5-12ded2e31e8e", province: 'Sumatera Selatan', city: 'Lubuk Linggau' },
        { locationId: "630b07cc-0d73-4dbf-a19d-22b48b8603cd", province: 'Sumatera Selatan', city: 'Pagaralam' },
        { locationId: "644c1263-ad92-4f54-b942-cc4d4bd54631", province: 'Sumatera Selatan', city: 'Palembang' },
        { locationId: "655a4cba-ddb5-4661-b286-3e0c3060a990", province: 'Sumatera Selatan', city: 'Prabumulih' },
        { locationId: "676987fd-abca-48e8-9156-53bd6dcd4b86", province: 'Bengkulu', city: 'Bengkulu' },
        { locationId: "6bb58e5c-023a-40a0-b914-a9bfc48820cd", province: 'Lampung', city: 'Bandar Lampung' },
        { locationId: "6c0ecaae-f2b0-428d-ad99-c67528a7dc23", province: 'Lampung', city: 'Metro' },
        { locationId: "6d1a54cc-3bf9-4026-8bcf-8616df4bafc7", province: 'Kepulauan Riau', city: 'Pangkalpinang' },
        { locationId: "7425e95c-18f9-4f8e-856b-0a1fa54777ba", province: 'Kepulauan Bangka Belitung', city: 'Batam' },
        { locationId: "76e317d7-bdef-43c3-b693-7ead68f40c5c", province: 'Kepulauan Bangka Belitung', city: 'Tanjungpinang' },
        { locationId: "7b7c9e87-0cd3-4b0e-87af-d9e2b0a3b1d1", province: 'DKI Jakarta', city: 'Administrasi Jakarta Pusat' },
        { locationId: "7be1ac0b-fd8e-42d4-8c59-5883ebd953e0", province: 'DKI Jakarta', city: 'Administrasi Jakarta Selatan' },
        { locationId: "81919d30-4c5b-420c-a5f1-3edef465976f", province: 'DKI Jakarta', city: 'Administrasi Jakarta Timur' },
        { locationId: "81942a9a-98cd-4268-b652-766d34523372", province: 'DKI Jakarta', city: 'Administrasi Jakarta Utara' },
        { locationId: "82ed406a-93cb-4994-b84f-eab36099fec8", province: 'Jawa Barat', city: 'Bandung' },
        { locationId: "86456edc-d371-43c0-8bb5-8bbd0d1e9be8", province: 'Jawa Barat', city: 'Banjar' },
        { locationId: "877af26c-91cd-4f5f-996e-16432205e1ba", province: 'Jawa Barat', city: 'Bekasi' },
        { locationId: "894e412c-1100-45b4-b21b-d8ce52e2fa8f", province: 'Jawa Barat', city: 'Bogor' },
        { locationId: "8c729a38-6d7f-4da0-8cdd-6071a6885adf", province: 'Jawa Barat', city: 'Cimahi' },
        { locationId: "8d8a9bab-f778-4084-86eb-a828b39cd8eb", province: 'Jawa Barat', city: 'Cirebon' },
        { locationId: "8ebc3fc1-2e08-4ef6-8061-ef4cd92e6650", province: 'Jawa Barat', city: 'Depok' },
        { locationId: "8f160033-58d8-4794-9b1c-6c1399890b11", province: 'Jawa Barat', city: 'Sukabumi' },
        { locationId: "94b5710e-3432-488a-9218-18ce0bab13f0", province: 'Jawa Barat', city: 'Tasikmalaya' },
        { locationId: "987bbd10-61ce-467b-9e54-e782b5c1761c", province: 'Jawa Tengah', city: 'Magelang' },
        { locationId: "9b9736b8-701b-4ed4-9e6b-0230e02bb853", province: 'Jawa Tengah', city: 'Pekalongan' },
        { locationId: "a029dc1a-d1b9-418a-ae9c-13b2a1f2a026", province: 'Jawa Tengah', city: 'Salatiga' },
        { locationId: "a579e449-a680-4aca-8260-d5522db9c219", province: 'Jawa Tengah', city: 'Semarang' },
        { locationId: "a6a48f1c-2dba-4e1e-9336-6f4759f6f6d2", province: 'Jawa Tengah', city: 'Surakarta' },
        { locationId: "a7cb3a6e-fb03-4b97-9b20-b3beb17ff236", province: 'Jawa Tengah', city: 'Tegal' },
        { locationId: "ac27c64b-4346-4b91-bc4e-1fd9b68fed1a", province: 'DI Yogyakarta', city: 'Yogyakarta' },
        { locationId: "ad09d048-3a7d-46a8-8460-76c02dbe9a39", province: 'Jawa Timur', city: 'Batu' },
        { locationId: "ad754c6c-43e5-4d1e-8867-b1cfb5f51515", province: 'Jawa Timur', city: 'Blitar' },
        { locationId: "afd915b5-8e34-47f4-a7f7-f203af961db7", province: 'Jawa Timur', city: 'Kediri' },
        { locationId: "b369b86e-e849-4a8a-8ae3-b2210bf791b9", province: 'Jawa Timur', city: 'Madiun' },
        { locationId: "b423d93e-a341-4453-a66c-4124bae2cd8b", province: 'Jawa Timur', city: 'Malang' },
        { locationId: "b71df538-fd16-4491-87d6-efc55b2f11dd", province: 'Jawa Timur', city: 'Mojokerto' },
        { locationId: "b721a887-5c6c-4265-a63b-9be1e0e40fe2", province: 'Jawa Timur', city: 'Pasuruan' },
        { locationId: "b94748cb-3201-40c8-a3a2-45bf324ee702", province: 'Jawa Timur', city: 'Probolinggo' },
        { locationId: "bcd6159e-e66f-492e-bcdc-e1d912161f7d", province: 'Jawa Timur', city: 'Surabaya' },
        { locationId: "be378755-0168-4571-b2f1-cd58660e1efd", province: 'Banten', city: 'Cilegon' },
        { locationId: "c05117a0-d741-4ab8-8b42-e3d73e9cadac", province: 'Banten', city: 'Serang' },
        { locationId: "c0a4b46d-f5fe-4732-9b60-50649f68b87b", province: 'Banten', city: 'Tangerang' },
        { locationId: "c3665946-e280-42a7-b87d-6f7018f8d11d", province: 'Banten', city: 'Tangerang Selatan' },
        { locationId: "c6253689-c06f-45a8-b54f-0ffdc5bfb39b", province: 'Bali', city: 'Denpasar' },
        { locationId: "c6cb8a45-b5b2-4eef-bd37-e07f3b167632", province: 'Nusa Tenggara Barat', city: 'Bima' },
        { locationId: "ca2e1480-c141-41ec-a033-23aeb47523ad", province: 'Nusa Tenggara Barat', city: 'Mataram' },
        { locationId: "ca5f6875-0e77-4bc6-9a34-50db68d1e517", province: 'Nusa Tenggara Timur', city: 'Kupang' },
        { locationId: "cc048e34-415a-494e-8a3a-3094654874a4", province: 'Kalimantan Barat', city: 'Pontianak' },
        { locationId: "ccb2a789-fc3e-41c7-aee8-bf3130932711", province: 'Kalimantan Barat', city: 'Singkawang' },
        { locationId: "cec102e4-f9e6-4bdc-bdd7-11ad703c0842", province: 'Kalimantan Tengah', city: 'Kotawaringin Barat' },
        { locationId: "cf960945-6a89-4a99-9ec8-ab454ab58eee", province: 'Kalimantan Tengah', city: 'Kotawaringin Timur' },
        { locationId: "d0a30854-0e2e-4e7f-916e-88761a01744d", province: 'Kalimantan Tengah', city: 'Palangka Raya' },
        { locationId: "d392613f-33eb-47ad-9658-d837aafdd23d", province: 'Kalimantan Selatan', city: 'Kotabaru' },
        { locationId: "d47e7b92-6351-45e8-ae90-406ea6d0c034", province: 'Kalimantan Selatan', city: 'Banjarbaru' },
        { locationId: "d555885e-c5b0-4638-883e-73c54ad6f28e", province: 'Kalimantan Selatan', city: 'Banjarmasin' },
        { locationId: "d62abf30-cb6f-4690-aee9-a7dd9be70aeb", province: 'Kalimantan Timur', city: 'Balikpapan' },
        { locationId: "d6e40a3f-c9a5-44b4-af2d-7ca219d524de", province: 'Kalimantan Timur', city: 'Bontang' },
        { locationId: "d7655ceb-f460-46c9-8c47-9d078bf783e3", province: 'Kalimantan Timur', city: 'Samarinda' },
        { locationId: "dc2385a0-a632-4e47-8ad2-cc8b6cee6699", province: 'Kalimantan Utara', city: 'Tarakan' },
        { locationId: "ddd44b63-859c-48f0-aeb5-06882f786e8f", province: 'Sulawesi Utara', city: 'Bitung' },
        { locationId: "deb2cb56-06c2-4a97-bb1d-5e63ae90d3fa", province: 'Sulawesi Utara', city: 'Kotamobagu' },
        { locationId: "e638e516-6c0a-4550-81c6-a6f856963b51", province: 'Sulawesi Utara', city: 'Manado' },
        { locationId: "e7ae6323-70dd-4066-8403-fb5be56f62c4", province: 'Sulawesi Utara', city: 'Tomohon' },
        { locationId: "e9d5c595-f1a7-45b1-9318-f1b1f5a85aa9", province: 'Sulawesi Tengah', city: 'Palu' },
        { locationId: "ed88209d-be59-4e5a-92fd-fb1a631694d4", province: 'Sulawesi Selatan', city: 'Makassar' },
        { locationId: "ed9eabbf-bb0b-42b6-8ee2-ac9690413f77", province: 'Sulawesi Selatan', city: 'Palopo' },
        { locationId: "eeb66684-7bbe-44d9-811c-29fe72620fcf", province: 'Sulawesi Selatan', city: 'Parepare' },
        { locationId: "ef97c82d-399b-4ccb-be9a-03a2b9bbdd60", province: 'Sulawesi Tenggara', city: 'Baubau' },
        { locationId: "efaf9a59-da67-465c-8028-726f4ab8fc8c", province: 'Sulawesi Tenggara', city: 'Kendari' },
        { locationId: "f36884da-82c5-4923-b3da-359683fc3d8b", province: 'Gorontalo', city: 'Gorontalo' },
        { locationId: "f598ce86-357f-48bf-ac64-1c4227c863b8", province: 'Maluku', city: 'Ambon' },
        { locationId: "f5b43898-02e9-4fa5-bdbf-427fdc7db5a7", province: 'Maluku', city: 'Tual' },
        { locationId: "f5bb245f-fd33-4f30-9ec1-48c252a44562", province: 'Maluku Utara', city: 'Ternate' },
        { locationId: "f5e251ac-7019-4033-b3dc-110a9e04228c", province: 'Maluku Utara', city: 'Tidore Kepulauan' },
        { locationId: "f90e22ba-ab76-44ae-833d-d39fe78ada17", province: 'Papua', city: 'Jayapura' },
        { locationId: "ffe08440-5e14-4636-ae43-14b6c550c4ef", province: 'Papua Barat Daya', city: 'Sorong' },
    ];

  await LocationModel.destroy({ where: {} })
  await LocationModel.bulkCreate(locations.map(location => ({...location })));



  }
} 