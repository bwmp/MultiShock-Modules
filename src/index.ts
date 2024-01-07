import express, { Express, Response } from 'express';
import bodyParser from 'body-parser';
import logger from './logger';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const router: Express = express();

router.use(bodyParser.json());

router.get('/api/v1/modules', async (req, res) => {
  const modules = fs.readdirSync(path.join(__dirname, '..', 'modules'))
    .filter(file => fs.statSync(path.join(__dirname, '..', 'modules', file)).isDirectory());

  return res.status(200).json(modules);
});

router.get('/api/v1/module/:id/config', async (req, res) => {
  const module = req.params.id as string;

  if (!module) {
    return res.status(400).json({ result: false });
  }

  const configPath = path.join(__dirname, '..', 'modules', module, 'config.json');

  if (!fs.existsSync(configPath)) {
    return res.status(404).json({ result: false, message: 'Module not found' });
  }

  const config = require(configPath);

  return res.status(200).json(config);
});

router.get('/api/v1/module/:id/images', async (req, res) => {
  const module = req.params.id as string;

  if (!module) {
    return res.status(400).json({ result: false });
  }

  const moduleFolderPath = path.join(__dirname, '..', 'modules', module);
  const configPath = path.join(moduleFolderPath, 'config.json');

  if (!fs.existsSync(configPath)) {
    return res.status(404).json({ result: false, message: 'Module not found' });
  }

  const files = fs.readdirSync(moduleFolderPath);

  const imageFiles = files.filter(file => {
    const extname = path.extname(file).toLowerCase();
    return extname === '.jpg' || extname === '.jpeg' || extname === '.png';
  });

  return res.status(200).json(imageFiles);
});

router.get('/api/v1/module/:id/download', async (req, res) => {
  const module = req.params.id as string;

  if (!module) {
    return res.status(400).json({ result: false });
  }

  const moduleFolderPath = path.join(__dirname, '..', 'modules', module);
  const configPath = path.join(moduleFolderPath, 'config.json');

  if (!fs.existsSync(configPath)) {
    return res.status(404).json({ result: false, message: 'Module not found' });
  }

  const config = require(configPath);

  const files = fs.readdirSync(moduleFolderPath);

  const imageFiles = files.filter(file => {
    const extname = path.extname(file).toLowerCase();
    return extname === '.jpg' || extname === '.jpeg' || extname === '.png';
  });

  return res.status(200).json({ config, images: imageFiles });
});

router.get('/api/v1/module/:id/:item', async (req, res) => {
  const module = req.params.id as string;
  const item = req.params.item as string;

  if (!module || !item) {
    return res.status(400).json({ result: false, message: 'Invalid module or item' });
  }

  const moduleFolderPath = path.join(__dirname, '..', 'modules', module);
  const filePath = path.join(moduleFolderPath, item);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ result: false, message: 'File not found' });
  }

  res.sendFile(filePath);
});

const PORT = process.env.PORT || 3000;

router.listen(PORT, () => logger.info(`API started on port ${PORT}`));
