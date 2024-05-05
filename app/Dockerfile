FROM node:20.8.0-alpine3.17 as base

WORKDIR /app

COPY ./app ./ 

# To keep container active for testing
# ENTRYPOINT ["tail", "-f", "/dev/null"]