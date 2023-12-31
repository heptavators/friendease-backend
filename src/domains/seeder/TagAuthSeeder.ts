import { TagAuth } from '../model/TagAuth';
import { v4 as uuidv4 } from 'uuid';

export class TagAuthSeeder {
  async run(){
    const tagsauths = [
      { 
        tagAuthId: uuidv4(),
        authId: "d1f83072-c6d6-4626-9981-5df048799758",
        tagId: "5611418a-15d8-4696-89fa-55337f0d07e1"
      },
      { 
        tagAuthId: uuidv4(),
        authId: "d1f83072-c6d6-4626-9981-5df048799758",
        tagId: "a1c959b1-8f18-4144-8904-f2cb3558f483"
      },
      { 
        tagAuthId: uuidv4(),
        authId: "d1f83072-c6d6-4626-9981-5df048799758",
        tagId: "39dd7cf3-a15f-4de7-a744-6ea9035f8046"
      },
      { 
        tagAuthId: uuidv4(),
        authId: "d1f83072-c6d6-4626-9981-5df048799758",
        tagId: "8aff57d8-ec74-4e5f-b741-570115c05a6d"
      },
      { 
        tagAuthId: uuidv4(),
        authId: "d1f83072-c6d6-4626-9981-5df048799758",
        tagId: "597add33-257c-4d86-9812-e655f6a52b94"
      },
  ];

  await TagAuth.destroy({ where: {} })
  await TagAuth.bulkCreate(tagsauths.map(tagauth => ({...tagauth })));



  }
} 