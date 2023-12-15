FROM node:18-alpine AS base

FROM base AS dependencies

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

FROM base AS builder

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

COPY . .

ARG NEXT_PUBLIC_API_URL

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs

RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
