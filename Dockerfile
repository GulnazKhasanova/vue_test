FROM ubuntu:latest
CMD ["/bin/sh"]
RUN   apt update -y  \
    &&   apt install nodejs -y \
    &&  apt install npm -y
WORKDIR /var/www/html
COPY .  /var/www/html
EXPOSE 80