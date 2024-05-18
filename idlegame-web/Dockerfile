FROM node:latest AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN ["npm", "install"]
RUN ["npm", "install", "-g", "@angular/cli@latest"]
COPY . .
CMD ["npm", "run", "build", "--configuration=production", "--output-path=dist"]
EXPOSE 4200
#ENTRYPOINT ["ng"]
#CMD ["serve", "--configuration=production", "--host", "0.0.0.0", "--port", "4200"]
#ENTRYPOINT ["node"]
#CMD ["src/main.ts"]

FROM nginx:1.21
COPY --from=build /usr/src/app/dist/idlegame-web/browser /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
