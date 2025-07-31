# Rasmni yaratish
FROM node:18.20.7-alpine

# Ishchi katalog
WORKDIR /app

# package.json va lock faylni nusxalash
COPY package*.json ./

# Paketlarni o‘rnatish
RUN npm install

# Qolgan barcha fayllarni nusxalash
COPY . .

# Vite serverni tashqi portga chiqarish (agar `vite.config.ts` da port 5173 bo‘lsa)
EXPOSE 5174

# Loyihani ishga tushurish
CMD ["npm", "run", "dev"]
