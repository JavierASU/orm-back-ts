import { Request, response, Response } from "express";

import { Estado } from "../entities/estado.cliente";

export const getEstado = async (req: Request, res: Response) => {
  try {
    const users = await Estado.find();
    console.log(users);
    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createEstado = async (req: Request, res: Response) => {
  try {
    const { UserId, estado } = req.body;
    const isExist = await Estado.findOne({ where: { UserId: UserId } });

    if (isExist) {
      res.status(400).json({ message: "El ID ya existe" });
    } else {
      const user = new Estado();
      user.UserId = UserId;
      user.estado = estado;

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
