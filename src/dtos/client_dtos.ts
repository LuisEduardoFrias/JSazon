
export default class ClientDtos {
  constructor(key: string, name: string, alias: string | null, totalDebt: string) {
    this.key = key;
    this.name = name;
    this.alias = alias;
    this.totalDebt = totalDebt;
  }
}