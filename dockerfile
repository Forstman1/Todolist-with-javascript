FROM node

COPY . /home/app

RUN apt upgrade -y && apt update -y && apt install mariadb-server -y && apt install systemctl -y && systemctl enable mariadb && service mariadb start

WORKDIR /home/app

CMD ["sleep", "1000000"]