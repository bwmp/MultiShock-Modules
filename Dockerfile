FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

CMD ["npx", "ts-node", "--transpileOnly", "src/index.ts"]