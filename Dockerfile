FROM node:16-alpine3.14 as builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build


FROM nginx:1.23.2-alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN sed -i "s/80;/3000;/g"  /etc/nginx/conf.d/default.conf
RUN sed -i "/index  index.html.*/a\        try_files \$uri \$uri/ /index.html;" /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
