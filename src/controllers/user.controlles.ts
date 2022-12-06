import { Request, response, Response } from "express";

import { Vasist } from "../entities/User";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await Vasist.find();
    console.log(users);
    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const {
      userId,
      question,
      question1,
      question2,
      question3,
      question4,
      questionTxt,
      questionTxt1,
      questionTxt2,
      questionTxt3,
      questionTxt4,
    } = req.body;
    const isExist = await Vasist.findOne({ where: { userId: userId } });

    if (isExist) {
      res.status(400).json({ message: "El ID ya existe" });
    } else {
      const user = new Vasist();

      user.userId = userId;
      user.question = question;
      user.question1 = question1;
      user.question2 = question2;
      user.question3 = question3;
      user.question4 = question4;
      user.questionTxt = questionTxt;
      user.questionTxt1 = questionTxt1;
      user.questionTxt2 = questionTxt2;
      user.questionTxt3 = questionTxt3;
      user.questionTxt4 = questionTxt4;

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

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await Vasist.findOneBy({ id: parseInt(id) });

    if (!user) {
      return res.status(404).json({ message: "ID no existe" });
    } else {
      return res.json(user);
      console.log(user);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

/* export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await Vasist.findOneBy({ id: parseInt(id) });
    if (!user) return res.status(404).json({ message: "Not user found" });

    await Vasist.update({ id: parseInt(id) }, req.body);
    console.log(user);
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}; */

/* export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Vasist.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "User not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}; */
