cd /app && prisma -v;
cd /app/prisma && prisma deploy;
cd /app;
node /app/dist/index.js;
