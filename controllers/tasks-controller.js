const path = require('path');
const { addTask } = require('./models-task-controller')

function render(file, res) {
    return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}


class TasksController {
    async add(req, res) {
        let body = req.body;

        if (body.title === undefined) {
            res.status(400).json({
                ok: false,
                message: 'El titulo es necesario'
            });
        } else {
            res.json({
                body
            });
        }

        return render('create', res)
    };
    async put(req, res) {
        return render('update', res)
    };
    async post(req, res) {

    }

}

module.exports = new TasksController();