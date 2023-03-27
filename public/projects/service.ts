import { Projects } from '../projects/Projects';

export class Service {
  private static readonly API = "https://api.github.com/users/rafael-a-s/repos";
  

  static async searchImagesByKeyword(count: number = 10): Promise<string[]> {
    const APIIMG = `https://api.unsplash.com/photos/random?query=tecnologia&${count}&client_id=dYRojBtnx8XFESXpNsIs7wgEWzVfU448tIQ9Fys9bXg`;
    const response = await fetch(APIIMG);

    const data = await response.json();
    const imageUrls = data.results.map((result: any) => result.urls.regular);

    return imageUrls;
  }

  static async getRepositories(): Promise<Projects[]> {
    const response = await fetch(this.API);

    if (!response.ok) {
      throw new Error('Não foi possível obter a lista de repositórios.');
    }

    const repositories = await response.json();

    const projects = repositories.map((repository: any, index: number) => ({
      name: repository.name,
      description: repository.description,
      html_url: repository.html_url,
    }));

    return projects;
  };
}
