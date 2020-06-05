const path = require('path');

function render(file, res) {
    return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class HomeController {
    async index(req, res) {
        return render('home', res);
    }
}

module.exports = new HomeController();