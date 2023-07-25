FROM node:16.18.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Expose port for service
EXPOSE 5000

# Install and configure `serve`.
RUN npm install -g serve
RUN apk update && apk add bash

# Copy **only** the build to image
# COPY . .
COPY build build
COPY env2js.sh env2js.sh
COPY start.sh start.sh
COPY run run


# Install dependencies
# RUN yarn

# RUN yarn build

# RUN yarn cache clean

# remove node_modules, they're no longer needed
# RUN rm -rf node_modules/


RUN chmod +x /usr/src/app/run
RUN chmod +x /usr/src/app/env2js.sh
RUN chmod +x /usr/src/app/start.sh
RUN ls -alhrt
CMD ["/usr/src/app/run"]

# Build app and start server from script
#CMD ["serve", "-s", "build"]
