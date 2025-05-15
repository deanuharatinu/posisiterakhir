FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./


FROM base AS builder
RUN npm install
COPY . .

ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY

RUN npm run build

FROM base AS production
WORKDIR /app

ENV NODE_ENV=production
RUN npm ci && \
  addgroup -g 1001 -S posisiterakhir && \
  adduser -S -u 1001 -G posisiterakhir dev
USER dev

COPY --from=builder --chown=dev:posisiterakhir /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

ENV PORT=80

CMD ["npm", "start"]

FROM base AS development
ENV NODE_ENV=development

RUN npm install
COPY . .

ENV PORT=80

CMD ["npm", "run", "dev"]