import { Request, Response } from "express";
import { HealthService } from "~/services/HealthService";

export const HealthController = async (req: Request, res: Response) => {
  const healthStatus = await HealthService();
  res.status(200).json(healthStatus);
};
