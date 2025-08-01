import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import fs from 'fs';
import path from 'path';
import logger from './logger';
dotenv.config();

const router: Express = express();

router.use(bodyParser.json());
router.use(cors());

// Root path for health checks and Coolify
router.get('/', (req, res) => {
  return res.status(200).json({ 
    status: 'ok', 
    message: 'MultiShock Modules API',
    endpoints: {
      api: '/api',
      modules: '/api/v1/modules'
    }
  });
});

router.get('/api', (req, res) => {
  const endpoints = {
    v1: '/api/v1',
  };

  return res.status(200).json(endpoints);
});

//#region v1
router.get('/api/v1', (req, res) => {
  const endpoints = {
    modules: '/api/v1/modules',
    moduleConfig: '/api/v1/module/:id/config',
    moduleImages: '/api/v1/module/:id/images',
    moduleDownload: '/api/v1/module/:id/download',
    moduleItem: '/api/v1/module/:id/:item',
  };

  return res.status(200).json(endpoints);
});

router.get('/api/v1/modules', async (req, res) => {
  try {
    const modulesPath = path.join(__dirname, '..', 'modules');
    logger.info(`Looking for modules in: ${modulesPath}`);
    
    if (!fs.existsSync(modulesPath)) {
      logger.error(`Modules directory does not exist: ${modulesPath}`);
      return res.status(500).json({ 
        error: 'Modules directory not found',
        path: modulesPath 
      });
    }

    const modules = fs.readdirSync(modulesPath)
      .filter(file => fs.statSync(path.join(modulesPath, file)).isDirectory());

    logger.info(`Found ${modules.length} modules: ${modules.join(', ')}`);
    return res.status(200).json(modules);
  } catch (error) {
    logger.error(`Error reading modules: ${error}`);
    return res.status(500).json({ 
      error: 'Failed to read modules',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
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

  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const files = fs.readdirSync(moduleFolderPath);

  const imageFiles = files.filter(file => {
    const extname = path.extname(file).toLowerCase();
    return extname === '.jpg' || extname === '.jpeg' || extname === '.png';
  });

  return res.status(200).json({ config, images: imageFiles });
});

router.get('/api/v1/module/:id/preview', async (req, res) => {
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

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${module} Preview</title>
    </head>
    <body>
      <h1>${module}</h1>
      <p>Author: ${config.author}</p>
      <p>Description: ${config.description}</p>
      <h2>Image Previews</h2>
      <ul>
        ${imageFiles.map(image => `<li><img src="/api/v1/module/${module}/${image}" alt="${image}"></li>`).join('')}
      </ul>
      <p> this is purely so you can see the images it is not ment to look good </p>
    </body>
    </html>
  `;

  res.send(htmlContent);
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

//#endregion

//#region v2

router.get('/api/v2', (req, res) => {
  const endpoints = {
    modules: '/api/v2/modules',
    module: '/api/v2/module/:id',
    moduleItem: '/api/v2/module/:id/:item',
  };

  return res.status(200).json(endpoints);
});

router.get('/api/v2/modules', async (req, res) => {
  const modulesDir = path.join(__dirname, '..', 'modules');
  const modules = fs.readdirSync(modulesDir)
    .filter(file => fs.statSync(path.join(modulesDir, file)).isDirectory())
    .map(module => {
      const configPath = path.join(modulesDir, module, 'config.json');
      if (fs.existsSync(configPath)) {
        const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        return {
          name: module,
          description: config.description,
          author: config.author
        };
      } else {
        return {
          name: module,
          description: 'No description available',
          author: 'Unknown'
        };
      }
    });

  return res.status(200).json(modules);
});

router.get('/api/v2/module/:id', async (req, res) => {
  const module = req.params.id as string;

  if (!module) {
    return res.status(400).json({ result: false });
  }

  const moduleDir = path.join(__dirname, '..', 'modules', module);
  const configPath = path.join(moduleDir, 'config.json');

  if (!fs.existsSync(configPath)) {
    return res.status(404).json({ result: false, message: 'Module not found' });
  }

  const config = require(configPath);
  const files = fs.readdirSync(moduleDir);

  const imageFiles = files.filter(file => {
    const extname = path.extname(file).toLowerCase();
    return extname === '.jpg' || extname === '.jpeg' || extname === '.png';
  });

  return res.status(200).json({ config, images: imageFiles });
});

router.get('/api/v2/module/:id/:item', async (req, res) => {
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

//#endregion

const PORT = process.env.PORT || 3000;

router.listen(PORT, '0.0.0.0', () => logger.info(`API started on port ${PORT}`));
