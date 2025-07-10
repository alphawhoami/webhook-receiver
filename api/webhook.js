export default function handler(req, res) {
    global.lastHeaders = req.headers;
    global.lastBody = req.body;

    res.status(200).send('Received');
}

