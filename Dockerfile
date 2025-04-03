# Sử dụng image Node.js chính thức làm base image
FROM node:18

# Đặt thư mục làm việc trong container
WORKDIR /usr/src/app

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

COPY . .
RUN npx prisma generate
ENV PORT=10000 

EXPOSE 10000 


RUN npm run build

RUN ls -R /usr/src/app
CMD ["node", "dist/main"]
