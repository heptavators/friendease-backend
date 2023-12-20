import { TagTalent } from '../model/TagTalent';
import { TalentModel } from '../model/Talent';
import { v4 as uuidv4 } from 'uuid';

export class TagTalentSeeder {
  async run(){
    const tagstalents = [
      { 
        tagTalentId: uuidv4(),
        talentId: "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
        tagId: "5611418a-15d8-4696-89fa-55337f0d07e1"
      },
      { 
        tagTalentId: uuidv4(),
        talentId: "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
        tagId: "a1c959b1-8f18-4144-8904-f2cb3558f483"
      },
      { 
        tagTalentId: uuidv4(),
        talentId: "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
        tagId: "39dd7cf3-a15f-4de7-a744-6ea9035f8046"
      },
      { 
        tagTalentId: uuidv4(),
        talentId: "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
        tagId: "8aff57d8-ec74-4e5f-b741-570115c05a6d"
      },
      { 
        tagTalentId: uuidv4(),
        talentId: "dc8a0ff0-1d0e-414a-9f37-ebe70fae5fc4",
        tagId: "597add33-257c-4d86-9812-e655f6a52b94"
      },
  ];

  await TagTalent.destroy({ where: {} })
  await TagTalent.bulkCreate(tagstalents.map(tagtalent => ({...tagtalent })));



  }
} 