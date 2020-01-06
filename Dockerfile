FROM nginx

LABEL author="Konda Reddy"

WORKDIR /usr/share/nginx/html

COPY /dist .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]