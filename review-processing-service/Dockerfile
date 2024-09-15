# review-processing-service/Dockerfile for production
FROM node:22-slim

# Create a new user named "nodeuser"
RUN useradd --user-group --create-home --system --skel /dev/null --shell /bin/false nodeuser

# Switch to the new user
USER nodeuser

# ENV NODE_ENV production
WORKDIR /home/nodeuser/app

COPY --chown=nodeuser:nodeuser package*.json ./

RUN npm ci --include=dev

COPY --chown=nodeuser:nodeuser . .

RUN npm run build

RUN npm prune --production

EXPOSE 9080 

CMD npm start
