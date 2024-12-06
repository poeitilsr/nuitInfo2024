const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { exec } = require('child_process');
const app = express();
const PORT = 3000;
const path = require('path');
const fs = require('fs');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/generate-qrcode', (req, res) => {
    const link = req.body.link;

    if (!link) {
        return res.status(400).send('Lien est nécessaire.');
    }

    const assetsDirectory = path.join(__dirname, 'assets');
    
    fs.readdir(assetsDirectory, (err, files) => {
        if (err) {
            console.error(`Erreur lors de la lecture du dossier assets: ${err}`);
            return res.status(500).send('Erreur interne du serveur.');
        }

        // Filtrer uniquement les fichiers image (par exemple .png, .jpg, .jpeg)
        const imageFiles = files.filter(file => /\.(png|jpg|jpeg)$/i.test(file));
        
        if (imageFiles.length === 0) {
            return res.status(404).send('Aucune image trouvée dans le dossier assets.');
        }

        // Sélectionner un fichier image au hasard
        const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];

        const outputImage = `qrcode/qrcode-${link.replace('://', '').replace(/\//g, '')}.png`;

        // Exécuter le script Python pour générer le QR code avec l'image choisie
        exec(`python3 generate-qrcode.py -i ${path.join(assetsDirectory, randomImage)} -l ${link}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erreur lors de l'exécution du script Python: ${stderr}`);
                return res.status(500).send('Erreur interne du serveur.');
            }

            console.log(stdout);
            res.json({ imagePath: outputImage });
        });
    });
});

app.get('/qrcode', (req, res) => {
    const qrcodeDirectory = path.join(__dirname, './qrcode');

    fs.readdir(qrcodeDirectory, (err, files) => {
        if (err) {
            console.error(`Erreur lors de la lecture du dossier qrcode: ${err}`);
            return res.status(500).send('Erreur interne du serveur.');
        }

        const qrcodeFiles = files.filter(file => /\.png$/i.test(file));

        if (qrcodeFiles.length === 0) {
            return res.status(404).send('Aucun QR code trouvé dans le dossier qrcode.');
        }

        const qrcodesContent = qrcodeFiles.map(file => {
            const filePath = path.join(qrcodeDirectory, file);
            const fileContent = fs.readFileSync(filePath, 'base64');
            return { fileName: file, content: fileContent };
        });

        res.json({ qrcodes: qrcodesContent });
    });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
