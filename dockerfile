FROM node

COPY . /home/app

RUN  apt update -y && apt upgrade -y 
# RUN npm install mysql

WORKDIR /home/app

CMD ["sleep", "1000000"]