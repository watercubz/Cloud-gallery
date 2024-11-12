# Usa una imagen de Node como base para construir la aplicación
FROM node:20.16.0-slim AS build

# Configura el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y el pnpm-lock.yaml (si existe) e instala pnpm
COPY package.json pnpm-lock.yaml* ./

# Instala pnpm de manera global
RUN npm install -g pnpm

# Instala las dependencias utilizando pnpm
RUN pnpm install

# Copia el resto de los archivos al contenedor
COPY . .

# Construye la aplicación de React
RUN pnpm run build

# Segunda etapa: usa Nginx para servir los archivos estáticos
FROM nginx:alpine

# Copia los archivos estáticos generados en el paso de construcción al directorio de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80 para servir la aplicación
EXPOSE 80

# Comando para iniciar Nginx
CMD [ "nginx", "-g", "daemon off;" ]
