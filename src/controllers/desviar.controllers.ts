import { Request, response, Response } from "express";

import { Desviar } from "../entities/desviarEncuesta";

export const getDesviar = async (req: Request, res: Response) => {
  try {
    const users = await Desviar.find();
    console.log(users);
    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createDesviar = async (req: Request, res: Response) => {
  try {
    const { UserId, desviado, inputdesviar } = req.body;
    const isExist = await Desviar.findOne({ where: { UserId: UserId } });

    if (isExist) {
      res.status(400).json({ message: "El ID ya existe" });
    } else {
      const user = new Desviar();
      user.UserId = UserId;
      user.desviado = desviado;
      user.inputdesviar = inputdesviar;

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
