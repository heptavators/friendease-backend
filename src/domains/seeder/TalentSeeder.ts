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
        talentId: "ac56a04d-aa98-4591-8e8c-2b188040c114",
        authId: "f6c44ee6-b695-4c00-901f-60efb44b45a1",
        verified_status: "unverified", 
        price: 75_000,
        rating: 4
      },

      { 
        talentId: "89341cbe-65d3-46bd-b905-32becfbbf0a4",
        authId: "3105781b-bd78-47b7-a36c-0e9e1e15ec73",
        verified_status: "unverified", 
        price: 75_000,
        rating: 5
      },

      { 
        talentId: "7f2f85fb-b6ed-4707-8763-2cc67c398b30",
        authId: "6a17fc03-6c40-4946-8b7c-ba8ccb470fed",
        verified_status: "unverified",
        price: 75_000, 
        rating: 3
      },
      { 
        talentId: "f0b8710a-7edd-4e67-a0fa-b3754bfd8576",
        authId: "2db05355-7785-487c-9112-4309dc9a846c",
        verified_status: "unverified", 
        price: 75_000,
        rating: 2.5
      },
  ];

  await TalentModel.destroy({ where: {} })
  await TalentModel.bulkCreate(talents.map(talent => ({...talent })));



  }
} 