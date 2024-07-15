FROM node:20 AS builder

WORKDIR /app

COPY index.ts package.json ./

RUN npm install

RUN npm run build

FROM public.ecr.aws/lambda/nodejs:20

COPY --from=builder /app/dist/index.js ${LAMBDA_TASK_ROOT}

CMD [ "index.handler" ]
