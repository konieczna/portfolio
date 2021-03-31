export class Projects {
  public id: number;
  public name: string;
  public image: string;
  public description: string;
  public url: string;

  constructor(id: number, name: string, img: string, desc: string, url: string) {
    this.id = id;
    this.name = name;
    this.image = img;
    this.description = desc;
    this.url = url;
  }
}
