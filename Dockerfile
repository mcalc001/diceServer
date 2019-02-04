FROM node:10.15.0-jessie


WORKDIR /usr/src/ServerDice 

copy ./ ./

RUN npm install 

CMD ["/bin/bash"]

EXPOSE 3000