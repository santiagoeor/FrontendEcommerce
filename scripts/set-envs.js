const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/env/env.ts';
const targetPathEnv = './src/environments/environment.ts';

const envFileContent = `
const env = {
    url_backend: "${process.env['URL_BACKEND']}",
};

export const url_api_backend = env.url_backend;

const urlLogos = {
  logo_ecommerce: '${process.env['URL_LOGO']}',
}

export const url_logo = urlLogos.logo_ecommerce;
`;

const envFileContentEnv = `
import { url_api_backend, url_logo } from "../env/env";

export const environment = {
  url_backend: url_api_backend,
};

export const urlLogo = {
  urlSeleccionada: url_logo
};
`;

mkdirSync('./src/env', { recursive: true });
writeFileSync(targetPath, envFileContent);
mkdirSync('./src/environments', { recursive: true });
writeFileSync(targetPathEnv, envFileContentEnv);
