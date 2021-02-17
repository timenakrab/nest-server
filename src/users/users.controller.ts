import { Controller, Get, Post, Res, Req } from "@nestjs/common";
import { Request, Response } from "express";

import { UsersService } from "./users.service";

@Controller("account")
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}
  @Get("/")
  index(@Res() res: Response) {
    res.status(404).send("Not found");
  }

  @Get("/:user_id/result")
  getUserData(@Req() req: Request, @Res() res: Response) {
    const { user_id: userId } = req.params;
    const result = this.UsersService.findUserById(Number(userId));
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).send("Not found");
    }
  }

  @Get("/list")
  getUserList(@Res() res: Response) {
    const result = this.UsersService.userList();
    res.status(200).json(result);
  }
}
