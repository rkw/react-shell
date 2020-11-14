export interface IEmployee {
  id: number,
  name: string,
  email: string
} 

export default class ExternalService {
  async getEmployees() : Promise<IEmployee[]> {
    let data :IEmployee[] = [];

    await fetch('/api/users')
      .then((response)=> response.json())
      .then((json) => { data = json });

    return data;
  }
}