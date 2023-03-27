import { Request, Response } from "express";

// Test to get api to run
const BRANDS = [
    { id: 1, name: ' '},
];

export const getBrands = (req: Request, res: Response) => {
    res.send(BRANDS);
}