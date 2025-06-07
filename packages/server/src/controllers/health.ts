import { Request, Response } from "express";
import { healthService } from "~/services/health";

export const healthController = async (req: Request, res: Response) => {
  const healthStatus = await healthService();
  res.status(200).json(healthStatus);
};
