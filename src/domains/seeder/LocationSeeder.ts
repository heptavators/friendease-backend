import { v4 as uuidv4 } from 'uuid';
import { LocationModel } from '../model/Location';




export class LocationSeeder {
  async run(){
    const locations = [
      {
          locationId: "8b325c8c-7838-47b0-ba8c-2f3f1fbaa480",
          province: "Aceh",
          city: "Banda Aceh"
      },
      {
          locationId: "e5004308-a42d-4d11-a07f-58a28589ef7a",
          province: "Aceh",
          city: "Langsa"
      },
      {
          locationId: "8f061975-a6da-45b6-8bb9-9327d0791787",
          province: "Aceh",
          city: "Lhokseumawe"
      },
      {
          locationId: "ce4b9172-b77d-4949-ac4c-aeac57a7a1c0",
          province: "Aceh",
          city: "Sabang"
      },
      {
          locationId: "f2a9d053-809e-4432-af8a-9d9f6157e314",
          province: "Aceh",
          city: "Subulussalam"
      },
      {
          locationId: "daecb333-d211-410c-91d3-79b38cf854e5",
          province: "Sumatera Utara",
          city: "Binjai"
      },
      {
          locationId: "4bed718f-bc0e-47d4-8430-cc16e3231e58",
          province: "Sumatera Utara",
          city: "Gunungsitoli"
      },
      {
          locationId: "f72d1cbd-2437-48b3-b474-c6c636fcffd1",
          province: "Sumatera Utara",
          city: "Medan"
      },
      {
          locationId: "1e8009d4-3244-4058-b36d-aaa85be7b6b9",
          province: "Sumatera Utara",
          city: "Padangsidimpuan"
      },
      {
          locationId: "c2cd2c5c-39e5-4dde-bba8-7dbf2a9c2902",
          province: "Sumatera Utara",
          city: "Pematangsiantar"
      },
      {
          locationId: "2eeedf1d-e0f0-461f-8415-a687cf2c9f9f",
          province: "Sumatera Utara",
          city: "Sibolga"
      },
      {
          locationId: "af267cd1-d82e-4604-9622-160d5a25c766",
          province: "Sumatera Utara",
          city: "Tanjungbalai"
      },
      {
          locationId: "80e4ab3b-83a8-4525-8183-5eb03d9ff973",
          province: "Sumatera Utara",
          city: "Tebing Tinggi"
      },
      {
          locationId: "92cc7160-cb78-41b7-b0d3-c33e913329e6",
          province: "Sumatera Barat",
          city: "Lima Puluh Kota"
      },
      {
          locationId: "5eaa5b4c-7b43-444a-9c9b-b9c01430dda3",
          province: "Sumatera Barat",
          city: "Bukittinggi"
      },
      {
          locationId: "01eee901-f2c4-43cf-9ead-b1518999e6a4",
          province: "Sumatera Barat",
          city: "Padang"
      },
      {
          locationId: "b6e09e8a-52b2-421f-8d49-3652553cdffa",
          province: "Sumatera Barat",
          city: "Padang Panjang"
      },
      {
          locationId: "125919c2-fe86-47fb-a854-7d452a959781",
          province: "Sumatera Barat",
          city: "Pariaman"
      },
      {
          locationId: "52acd224-78eb-42e4-9010-d77c0a9a2b93",
          province: "Sumatera Barat",
          city: "Payakumbuh"
      },
      {
          locationId: "6b7ba797-e75e-4122-acbd-ce45fdc2adcc",
          province: "Sumatera Barat",
          city: "Sawahlunto"
      },
      {
          locationId: "aecbe0f2-f234-4b67-bc5e-88b79322f7f8",
          province: "Sumatera Barat",
          city: "Solok"
      },
      {
          locationId: "38f47a5f-8829-456d-ac36-77b24e737960",
          province: "Riau",
          city: "Dumai"
      },
      {
          locationId: "3ae4a102-b11d-4018-8584-77db9b39441b",
          province: "Riau",
          city: "Pekanbaru"
      },
      {
          locationId: "9a822ab9-9081-4e20-8d2c-261d96687c4a",
          province: "Jambi",
          city: "Jambi"
      },
      {
          locationId: "eb359379-2301-4518-bfe8-9ff2d52767fb",
          province: "Jambi",
          city: "Sungai Penuh"
      },
      {
          locationId: "8263bb76-3d47-4f7d-a527-2beee7729646",
          province: "Sumatera Selatan",
          city: "Lubuk Linggau"
      },
      {
          locationId: "7f3011dd-3159-4e11-95f3-82bbe6590161",
          province: "Sumatera Selatan",
          city: "Pagaralam"
      },
      {
          locationId: "d3c5c81a-19b2-4afd-9015-43aa5b967d6c",
          province: "Sumatera Selatan",
          city: "Palembang"
      },
      {
          locationId: "dfcd5670-4001-4195-b45b-8accf1256bc9",
          province: "Sumatera Selatan",
          city: "Prabumulih"
      },
      {
          locationId: "98a9e73a-30e8-427b-8430-18b7fba4fada",
          province: "Bengkulu",
          city: "Bengkulu"
      },
      {
          locationId: "2a27d9b8-7257-4a91-8c0d-1188af026dde",
          province: "Lampung",
          city: "Bandar Lampung"
      },
      {
          locationId: "0e123080-7aa6-4a90-a17a-df0753014a47",
          province: "Lampung",
          city: "Metro"
      },
      {
          locationId: "542448b7-5a38-4e2c-940b-64fcbd550a97",
          province: "Kepulauan Riau",
          city: "Pangkalpinang"
      },
      {
          locationId: "5a9e730a-2dbf-4b30-855a-5c6af28bcd2b",
          province: "Kepulauan Bangka Belitung",
          city: "Batam"
      },
      {
          locationId: "f50bae2f-46da-4f39-9a01-0934e8815d5b",
          province: "Kepulauan Bangka Belitung",
          city: "Tanjungpinang"
      },
      {
          locationId: "f1e96bee-5f33-4863-b802-dec342de5c8a",
          province: "DKI Jakarta",
          city: "Administrasi Jakarta Barat"
      },
      {
          locationId: "6dcffc95-bcf4-4f66-9757-2fa27b050f04",
          province: "DKI Jakarta",
          city: "Administrasi Jakarta Pusat"
      },
      {
          locationId: "480c749c-c0bf-47c7-92aa-f2973b14ebe3",
          province: "DKI Jakarta",
          city: "Administrasi Jakarta Selatan"
      },
      {
          locationId: "56c0537f-8eb1-4a7f-a80d-9a7829d28275",
          province: "DKI Jakarta",
          city: "Administrasi Jakarta Timur"
      },
      {
          locationId: "e961053d-9942-413f-8acc-aaa3e5248b05",
          province: "DKI Jakarta",
          city: "Administrasi Jakarta Utara"
      },
      {
          locationId: "c6598df6-f15f-45fc-8622-b34095c43510",
          province: "Jawa Barat",
          city: "Bandung"
      },
      {
          locationId: "0bbfc0e6-001d-4465-9928-f9afae8a9516",
          province: "Jawa Barat",
          city: "Banjar"
      },
      {
          locationId: "82ed6b55-bfa5-4ef8-b81b-045fd6b62734",
          province: "Jawa Barat",
          city: "Bekasi"
      },
      {
          locationId: "eb6a2b18-2904-4a70-b0ed-98f29af52b64",
          province: "Jawa Barat",
          city: "Bogor"
      },
      {
          locationId: "5fed18a0-d7a0-49df-abc3-d217533abea5",
          province: "Jawa Barat",
          city: "Cimahi"
      },
      {
          locationId: "fffea0f3-4802-4fe2-8041-222a2b403266",
          province: "Jawa Barat",
          city: "Cirebon"
      },
      {
          locationId: "9df72434-572c-4a91-a54e-91e7119aa166",
          province: "Jawa Barat",
          city: "Depok"
      },
      {
          locationId: "aab553a1-b547-4669-9d50-cff2bc8b5792",
          province: "Jawa Barat",
          city: "Sukabumi"
      },
      {
          locationId: "be5ec8ae-a526-47d0-b2ba-926a5c225a70",
          province: "Jawa Barat",
          city: "Tasikmalaya"
      },
      {
          locationId: "d57e7bb4-8f35-40f0-aae9-421f84ace123",
          province: "Jawa Tengah",
          city: "Magelang"
      },
      {
          locationId: "a58d6a9b-30fa-4517-bcdd-aecceb4e0634",
          province: "Jawa Tengah",
          city: "Pekalongan"
      },
      {
          locationId: "15071248-3e79-45c7-9355-dd25e9089ee2",
          province: "Jawa Tengah",
          city: "Salatiga"
      },
      {
          locationId: "517c2122-0133-4dde-bea0-975be0fbcf5b",
          province: "Jawa Tengah",
          city: "Semarang"
      },
      {
          locationId: "6f32131a-cd30-4ec7-b8ef-2b0730273387",
          province: "Jawa Tengah",
          city: "Surakarta"
      },
      {
          locationId: "b1f11737-f8af-4f27-9e92-cc318074c292",
          province: "Jawa Tengah",
          city: "Tegal"
      },
      {
          locationId: "a06bdcc6-69a5-4aa7-92ae-3be04d1f11ea",
          province: "DI Yogyakarta",
          city: "Yogyakarta"
      },
      {
          locationId: "d0cab1c6-ca40-45ec-9065-ad43fcf44ca3",
          province: "Jawa Timur",
          city: "Batu"
      },
      {
          locationId: "58fcb3b5-a663-40b7-97d9-d5ce22bcda08",
          province: "Jawa Timur",
          city: "Blitar"
      },
      {
          locationId: "f389c55f-a26e-4c31-934d-0085ecc35bf9",
          province: "Jawa Timur",
          city: "Kediri"
      },
      {
          locationId: "61226cfa-1524-4a66-a824-712e808f816a",
          province: "Jawa Timur",
          city: "Madiun"
      },
      {
          locationId: "b0a24b89-19f4-49e6-9b44-c63b770fa6e8",
          province: "Jawa Timur",
          city: "Malang"
      },
      {
          locationId: "39007219-504d-4c46-94c4-1643532725db",
          province: "Jawa Timur",
          city: "Mojokerto"
      },
      {
          locationId: "6cdd46e9-19e9-40b4-b8ac-33cd1777bc28",
          province: "Jawa Timur",
          city: "Pasuruan"
      },
      {
          locationId: "50a6dbe2-304c-4c0b-a823-e893c7ccaeef",
          province: "Jawa Timur",
          city: "Probolinggo"
      },
      {
          locationId: "a1778bea-da67-4ea2-b745-a47d14047e73",
          province: "Jawa Timur",
          city: "Surabaya"
      },
      {
          locationId: "fc2e0860-a994-4dbc-be5a-e7338e6c0ebe",
          province: "Banten",
          city: "Cilegon"
      },
      {
          locationId: "61fb7d67-ba48-4cbc-a787-1757ff199cb2",
          province: "Banten",
          city: "Serang"
      },
      {
          locationId: "1dcb4319-82dd-48e0-b72a-25229f7ffecf",
          province: "Banten",
          city: "Tangerang"
      },
      {
          locationId: "32549878-a73a-4199-9e39-9d5384a7136c",
          province: "Banten",
          city: "Tangerang Selatan"
      },
      {
          locationId: "6bad71ab-cf01-4127-800c-15b5ac8a2787",
          province: "Bali",
          city: "Denpasar"
      },
      {
          locationId: "f0c0ebb5-4ab1-4907-bf73-69b7ed2201fa",
          province: "Nusa Tenggara Barat",
          city: "Bima"
      },
      {
          locationId: "d76001eb-366e-4f8a-adc4-9e9397e30b79",
          province: "Nusa Tenggara Barat",
          city: "Mataram"
      },
      {
          locationId: "a2ae7049-e8b9-4b7f-b915-e089a6392c39",
          province: "Nusa Tenggara Timur",
          city: "Kupang"
      },
      {
          locationId: "69775c88-e59a-4d76-9d22-5d1f1956f6f3",
          province: "Kalimantan Barat",
          city: "Pontianak"
      },
      {
          locationId: "da065997-09c5-4154-8ef4-f8a15ea4b175",
          province: "Kalimantan Barat",
          city: "Singkawang"
      },
      {
          locationId: "c60eeb59-c0a7-4a14-ac69-86761c307e62",
          province: "Kalimantan Tengah",
          city: "Kotawaringin Barat"
      },
      {
          locationId: "33e31a90-9712-4ff2-a0cf-4341be2c1257",
          province: "Kalimantan Tengah",
          city: "Kotawaringin Timur"
      },
      {
          locationId: "b0f780b6-116b-4473-9b70-561ca8bd7470",
          province: "Kalimantan Tengah",
          city: "Palangka Raya"
      },
      {
          locationId: "ef7560b6-2599-4bba-949f-d4d1ed5da6bf",
          province: "Kalimantan Selatan",
          city: "Kotabaru"
      },
      {
          locationId: "57c126a9-1e7c-4518-b60e-7bb0d4bf8dea",
          province: "Kalimantan Selatan",
          city: "Banjarbaru"
      },
      {
          locationId: "0c89158d-0232-4723-88c0-3548ef534f97",
          province: "Kalimantan Selatan",
          city: "Banjarmasin"
      },
      {
          locationId: "56e79c56-a69c-4f6b-9bda-79972b467369",
          province: "Kalimantan Timur",
          city: "Balikpapan"
      },
      {
          locationId: "9c251e8e-2f42-4fee-aabc-7970922a90ed",
          province: "Kalimantan Timur",
          city: "Bontang"
      },
      {
          locationId: "6b624b62-6c50-42da-a401-716f321a778c",
          province: "Kalimantan Timur",
          city: "Samarinda"
      },
      {
          locationId: "0470336d-f9ab-454b-9b0c-0352c27efc07",
          province: "Kalimantan Utara",
          city: "Tarakan"
      },
      {
          locationId: "825f0194-7850-4924-8f27-d54a5204695b",
          province: "Sulawesi Utara",
          city: "Bitung"
      },
      {
          locationId: "ab10c1c7-0403-4137-b2f8-0d9f04566ac0",
          province: "Sulawesi Utara",
          city: "Kotamobagu"
      },
      {
          locationId: "c34ce1cc-06d2-44ab-9f72-ddb35aba131e",
          province: "Sulawesi Utara",
          city: "Manado"
      },
      {
          locationId: "49163208-d30a-4c12-b2a5-9f48e0894292",
          province: "Sulawesi Utara",
          city: "Tomohon"
      },
      {
          locationId: "fc4c2fa2-3169-4ee4-be8d-5786b822cd85",
          province: "Sulawesi Tengah",
          city: "Palu"
      },
      {
          locationId: "8e51d561-7755-4920-a016-99ec3fc26c26",
          province: "Sulawesi Selatan",
          city: "Makassar"
      },
      {
          locationId: "0ecb96fa-2536-49df-9657-3ba330a38e5c",
          province: "Sulawesi Selatan",
          city: "Palopo"
      },
      {
          locationId: "dfc73902-4d51-44de-9d79-e3fd499922e2",
          province: "Sulawesi Selatan",
          city: "Parepare"
      },
      {
          locationId: "2a098c54-46a1-4fd8-b881-7d1c5dd74afc",
          province: "Sulawesi Tenggara",
          city: "Baubau"
      },
      {
          locationId: "ef2b58c5-8377-421e-a70f-8bdd15ca2046",
          province: "Sulawesi Tenggara",
          city: "Kendari"
      },
      {
          locationId: "7a80da83-daae-4c9b-bdbc-cbcb57e0442e",
          province: "Gorontalo",
          city: "Gorontalo"
      },
      {
          locationId: "d2e0d4cc-3373-4ef6-a60a-1dc833d683d0",
          province: "Maluku",
          city: "Ambon"
      },
      {
          locationId: "5f2b2815-707c-431f-aa63-65cbe9522cb7",
          province: "Maluku",
          city: "Tual"
      },
      {
          locationId: "f290ab65-7c76-4b78-9d9d-570fa266b1cf",
          province: "Maluku Utara",
          city: "Ternate"
      },
      {
          locationId: "e4c5f2d8-5deb-4742-ab54-08cd1a184af3",
          province: "Maluku Utara",
          city: "Tidore Kepulauan"
      },
      {
          locationId: "57b353b0-e2f4-4c4d-9b60-6a55713ca5a9",
          province: "Papua",
          city: "Jayapura"
      },
      {
          locationId: "114ab3d9-4c41-4973-8297-4b68f56e2956",
          province: "Papua Barat Daya",
          city: "Sorong"
      }
  ]
  await LocationModel.destroy({ where: {} })
  await LocationModel.bulkCreate(locations.map(location => ({...location })));



  }
} 
