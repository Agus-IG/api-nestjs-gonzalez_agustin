// backup-logs.js
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Directorio de los logs y directorio de respaldo
const logDir = path.join(__dirname, 'logs');
const backupDir = path.join(__dirname, 'log-backups');

// Crear directorio de respaldo si no existe
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

// Nombre del archivo de respaldo
const backupFilename = `backup-${new Date().toISOString().slice(0, 10)}.zip`;
const backupFilepath = path.join(backupDir, backupFilename);

// Crear archivo ZIP
const output = fs.createWriteStream(backupFilepath);
const archive = archiver('zip', {
  zlib: { level: 9 }, // Nivel de compresión
});

output.on('close', () => {
  console.log(`Backup completo: ${backupFilepath} (${archive.pointer()} bytes)`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Añadir archivos de log al archivo ZIP
archive.directory(logDir, false);

// Finalizar el proceso de archivado
archive.finalize();
