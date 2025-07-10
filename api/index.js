import ejs from 'ejs';
import fs from 'fs';
import path from 'path';

export const config = {
    api: {
        bodyParser: true,
    },
};

export default async function handler(req, res) {
    global.queryParams = req.query;

    const templatePath = path.resolve('./views/index.ejs');
    const template = fs.readFileSync(templatePath, 'utf8');

    const html = ejs.render(template, {
        queryParams: global.queryParams || {},
        headers: global.lastHeaders || {},
        body: global.lastBody || {},
    });

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
}

