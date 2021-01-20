export interface IEmployee {
  id: number,
  name: string,
  email: string
} 

export interface IProduct {
  id: number,
  product: string,
  price: number
} 

export default class ExternalService {
  async getEmployees() : Promise<IEmployee[]> {
    let data :IEmployee[] = [];

    await fetch('http://www.somewhere.com/api/users')
      .then((response)=> response.json())
      .then((json) => { data = json });

    return data;
  }
  async getProducts() : Promise<IProduct[]> {
    let data :IProduct[] = [];

    await fetch('http://www.somewhere.com/api/products')
      .then((response)=> response.json())
      .then((json) => { data = json });

    return data;
  }
}