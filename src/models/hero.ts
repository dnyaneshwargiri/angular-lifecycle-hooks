export class Hero {
  public id: number;
  public name: string;
  public superPower: string;
  public hide: boolean;

  constructor(id: number, name: string, superPower: string, hide: boolean) {
    this.id = id;
    this.name = name;
    this.superPower = superPower;
    this.hide = hide;
  }
}
