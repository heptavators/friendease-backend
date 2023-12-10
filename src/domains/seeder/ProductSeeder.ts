import { v4 as uuidv4 } from 'uuid';
import { ProductModel } from '../model/Product'; 

export class ProductSeeder {
  async run(){
    const products = [
      { 
        productId: uuidv4(),
        name: "Keyboard Gaming", 
        price: 700_000
      },
      { 
        productId: uuidv4(),
        name: "Mouse", 
        price: 700_000
      },
      { 
        productId: uuidv4(),
        name: "Monitor", 
        price: 700_000
      },
      { 
        productId: uuidv4(),
        name: "Printer", 
        price: 700_000
      },
      { 
        productId: uuidv4(),
        name: "Microphone", 
        price: 700_000
      },      
      { 
        productId: uuidv4(),
        name: "PC Gaming", 
        price: 700_000
      },      
      { 
        productId: uuidv4(),
        name: "Webcam", 
        price: 700_000
      },      
      { 
        productId: uuidv4(),
        name: "Scanner", 
        price: 700_000
      },      
      { 
        productId: uuidv4(),
        name: "Printer", 
        price: 700_000
      },      
      { 
        productId: uuidv4(),
        name: "Speaker", 
        price: 700_000
      }, 
      { 
        productId: uuidv4(),
        name: "SSD", 
        price: 700_000
      },
      { 
        productId: uuidv4(),
        name: "HDD", 
        price: 700_000
      },  
      { 
        productId: uuidv4(),
        name: "Power Supply", 
        price: 700_000
      },  
      { 
        productId: uuidv4(),
        name: "Server", 
        price: 700_000
      }, 
      { 
        productId: uuidv4(),
        name: "GPU", 
        price: 700_000
      },
    ];

    
      await ProductModel.destroy({ where: {} })
      await ProductModel.bulkCreate(products.map(product => ({...product })));


  }
} 
