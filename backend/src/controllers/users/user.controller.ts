import { Request, Response } from 'express';
import userRepo from '../../database/repositories/user.repo';
import { logger } from '../../middlewares/logger.middleware';
import { ResponseStatusCodes } from '../../types/ResponseStatusCodes.types';

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userRepo.getUsers();
    res.status(ResponseStatusCodes.OK).json({ message: 'Users fetched successfully', data: users });
  } catch (error: any) {
    logger.error(`Error fetching users: ${error.message}`);
    res.status(ResponseStatusCodes.BAD_REQUEST).json({ message: error.message, data: [] });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const newUser = await userRepo.createUser(user);
    const response = {
      message: 'User created successfully',
      data: { user: newUser },
    };

    res.status(ResponseStatusCodes.CREATED).json(response);
  } catch (error: any) {
    logger.error(`Error creating user: ${error.message}`);
    res.status(ResponseStatusCodes.BAD_REQUEST).json({ message: error.message, data: [] });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    await userRepo.deleteUser(req.params.id);
    const response = {
      message: 'User deleted successfully',
      data: { userId: req.params.id },
    };

    res.status(ResponseStatusCodes.OK).json(response);
  } catch (error: any) {
    logger.error(`Error deleting user: ${error.message}`);
    res.status(ResponseStatusCodes.BAD_REQUEST).json({ message: error.message, data: [] });
  }
};

const acceptUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    await userRepo.acceptUser(userId);
    const response = {
      message: 'User accepted successfully',
      data: { userId: req.params.id },
    };

    res.status(ResponseStatusCodes.OK).json(response);
  } catch (error: any) {
    logger.error(`Error updating user: ${error.message}`);
    res.status(ResponseStatusCodes.BAD_REQUEST).json({ message: error.message, data: [] });
  }
};

const findUserById = async (req: Request, res: Response) => {
  try {
    const user = await userRepo.findUserById(req.params.id);
    const response = {
      message: 'User fetched successfully',
      data: { user: user },
    };

    res.status(ResponseStatusCodes.OK).json(response);
  } catch (error: any) {
    logger.error(`Error fetching user: ${error.message}`);
    res.status(ResponseStatusCodes.BAD_REQUEST).json({ message: error.message, data: [] });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = req.body;
    await userRepo.updateUser(userId, user);
    const response = {
      message: 'User updated successfully',
      data: { userId: userId },
    };

    res.status(ResponseStatusCodes.OK).json(response);
  } catch (error: any) {
    logger.error(`Error updating user: ${error.message}`);
    res.status(ResponseStatusCodes.BAD_REQUEST).json({ message: error.message, data: [] });
  }
};

const ChangeUserPassword = async (req: Request, res: Response) => {
  try {
    const password = req.body.password;
    await userRepo.ChangeUserPassword(req.params.id, password);
    const response = {
      message: 'Password updated successfully',
      data: { userId: req.params.id, password: password },
    };

    res.status(ResponseStatusCodes.OK).json(response);
  } catch (error: any) {
    logger.error(`Error updating password: ${error.message}`);
    res.status(ResponseStatusCodes.BAD_REQUEST).json({ message: error.message, data: [] });
  }
};

const acceptTerms = async (req: Request, res: Response) => {
  try {
    await userRepo.acceptTerms(req.params.id);
    const response = {
      message: 'Terms accepted successfully',
      data: { userId: req.params.id },
    };

    res.status(ResponseStatusCodes.OK).json(response);
  } catch (error: any) {
    logger.error(`Error accepting terms: ${error.message}`);
    res.status(ResponseStatusCodes.BAD_REQUEST).json({ message: error.message, data: [] });
  }
};

const rejectUser = async (req: Request, res: Response) => {
  try {
    await userRepo.rejectUser(req.params.id);
    const response = {
      message: 'User rejected successfully',
      data: { userId: req.params.id },
    };

    res.status(ResponseStatusCodes.OK).json(response);
  } catch (error: any) {
    logger.error(`Error rejecting user: ${error.message}`);
    res.status(ResponseStatusCodes.BAD_REQUEST).json({ message: error.message, data: [] });
  }
};

export { getUsers, deleteUser, acceptUser, findUserById, updateUser, createUser, ChangeUserPassword, acceptTerms, rejectUser };
