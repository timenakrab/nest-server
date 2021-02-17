import { Injectable } from "@nestjs/common";

interface IResultUserList {
  id: number;
  name: string;
}

const mockupUser = [
  { id: 1, name: "elfip ltusu" },
  { id: 2, name: "coqcv xjgjf" },
  { id: 3, name: "tuxht taztp" },
  { id: 4, name: "whwhl megqf" },
  { id: 5, name: "ucskw mlwge" },
  { id: 6, name: "dsmrf rteag" },
  { id: 7, name: "wkqzw xqhdz" },
  { id: 8, name: "cfimb radkr" },
  { id: 9, name: "gjsxe evyji" },
  { id: 10, name: "fougj uhrie" },
  { id: 11, name: "lumtz dbywk" },
  { id: 12, name: "gsqdy zdsiq" },
  { id: 13, name: "igaqb vqsfr" },
  { id: 14, name: "rwknm qespo" },
  { id: 15, name: "jqkod rujnu" },
  { id: 16, name: "ddjjj hnvxu" },
  { id: 17, name: "izbbf xodsw" },
  { id: 18, name: "vnenn vvqbt" },
  { id: 19, name: "rjgsj prpwz" },
  { id: 20, name: "vzluv dqpev" },
];

@Injectable()
export class UsersService {
  userList(): IResultUserList[] {
    return mockupUser;
  }

  findUserById(userId: number) {
    return mockupUser.find(({ id }) => userId === id);
  }
}
