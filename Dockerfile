FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

COPY . .

RUN pnpm install

# Set environment variables needed for Prisma during build
ENV UPLOADS_DIR=/app/uploads
ENV DATABASE_URL=file:/app/data/prod.db

RUN pnpm run deploy

CMD ["ts-node", "--transpileOnly", "src/index.ts"]