import jwt from 'jsonwebtoken';
import { AuthModel } from '../../domains/model/Auth';


export function GenerateJwtToken(user: AuthModel): string {
    // Logic to generate JWT token
    const token = jwt.sign({ 
      authId: user.authId,
      fullname: user.fullname,
      username: user.username,
      email: user.email,
      roles: user.roles,
      iss: "FriendEase" 
    }, 'process.env.SECRET_KEY', 
    { expiresIn: '365d' }
    );
    return token;
  }