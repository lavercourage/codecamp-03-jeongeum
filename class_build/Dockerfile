FROM node:16

WORKDIR /class_build/
COPY . /class_build/

RUN yarn install
RUN yarn build:ssr
# RUN yarn start

CMD yarn start
# 도커파일은 1번씩밖에 못씀



