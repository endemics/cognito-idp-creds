FROM node:4-onbuild
COPY env.json /usr/src/app/
CMD [ "npm", "start", "--loglevel=silent" ]
