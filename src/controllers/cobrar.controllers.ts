import { Request, response, Response } from "express";

import { Cobrar } from "../entities/cobranza";

export const getCobrar = async (req: Request, res: Response) => {
  try {
    const users = await Cobrar.find();
    console.log(users);
    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createCobrar = async (req: Request, res: Response) => {
  try {
    const { UserId, select,select1 } = req.body;
    const isExist = await Cobrar.findOne({ where: { UserId: UserId } });

    if (isExist) {
      res.status(400).json({ message: "El ID ya existe" });
    } else {
      const user = new Cobrar();
      user.UserId = UserId;
      user.select = select;
      user.select1 = select1;

      await user.save();
      console.log(user);
      return res.json(user);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: "User no create" });
    }
  }
};
