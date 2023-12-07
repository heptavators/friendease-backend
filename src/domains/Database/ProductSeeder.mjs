import { PrismaClient, } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient()



export class ProductSeeder {
  async run(){
    const products = [
      { 
        id: uuidv4(),
        name: "Keyboard Gaming", 
        price: 700_000
      },
      { 
        id: uuidv4(),
        name: "Mouse", 
        price: 700_000
      },
      { 
        id: uuidv4(),
        name: "Monitor", 
        price: 700_000
      },
      { 
        id: uuidv4(),
        name: "Printer", 
        price: 700_000
      },
      { 
        id: uuidv4(),
        name: "Microphone", 
        price: 700_000
      },      
      { 
        id: uuidv4(),
        name: "PC Gaming", 
        price: 700_000
      },      
      { 
        id: uuidv4(),
        name: "Webcam", 
        price: 700_000
      },      
      { 
        id: uuidv4(),
        name: "Scanner", 
        price: 700_000
      },      
      { 
        id: uuidv4(),
        name: "Printer", 
        price: 700_000
      },      
      { 
        id: uuidv4(),
        name: "Speaker", 
        price: 700_000
      }, 
      { 
        id: uuidv4(),
        name: "SSD", 
        price: 700_000
      },
      { 
        id: uuidv4(),
        name: "HDD", 
        price: 700_000
      },  
      { 
        id: uuidv4(),
        name: "Power Supply", 
        price: 700_000
      },  
      { 
        id: uuidv4(),
        name: "Server", 
        price: 700_000
      }, 
      { 
        id: uuidv4(),
        name: "GPU", 
        price: 700_000
      },
    ];

    
      await prisma.product.deleteMany({})
      await prisma.product.createMany({ data: products });
      await prisma.$disconnect()


  }
} 
