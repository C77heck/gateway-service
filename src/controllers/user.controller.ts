import bcrypt from 'bcryptjs';
import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ERROR_MESSAGES } from '../libs/constants';
import { handleError } from "../libs/error-handler";
import { HttpError } from '../models/http.error';


export const whoami = async (req: any, res: any, next: NextFunction) => {

};
