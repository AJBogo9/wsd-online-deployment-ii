FROM denoland/deno:alpine-1.37.0

EXPOSE 7777

WORKDIR /app

COPY deps.js .

RUN deno cache deps.js

COPY . .

CMD [ "run", "--allow-net", "--allow-read", "--watch", "--unstable", "app.js" ]