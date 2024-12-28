FROM node:20-bullseye-slim AS builder

WORKDIR /usr/src/app

# Copy entire backend first to ensure proper dependency resolution
COPY backend/ .

# Install dependencies
RUN npm ci

# Run tests in build stage
RUN npm test

# Build the app
RUN npm run build

# Production stage
FROM node:20-bullseye-slim

WORKDIR /usr/src/app

# Copy package files
COPY --from=builder /usr/src/app/package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy built artifacts
COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["npm", "start"]