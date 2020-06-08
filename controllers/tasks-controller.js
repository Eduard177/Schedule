const path = require('path');
// const { addTask } = require('./models-task-controller');
const { Agenda } = require('../models');


function render(file, res) {
    return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}


class TasksController {
    async add(req, res) {
        let body = req.body;

        let agenda = new Agenda({
            title: body.title,
            descripcion: body.descripcion,
            day: body.day

        });

        await agenda.save((err, agendaDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            } else {
                res.json({
                    ok: true,
                    agenda: agendaDB,
                    message: 'Tarea Guardada'
                });
            }
        }).catch(err => {
            console.log(err)
        })

    };
    async see(req, res) {

        render('task', res)
        Agenda.find().then(console.log)

    }
    async put(req, res) {
        let body = req.body;
        Agenda.findOneAndUpdate({ _id: body.id }, {
                title: body.title,
                descripcion: body.descripcion,
                day: body.day
            },
            function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                }
            }
        )
    };
}

module.exports = new TasksController();