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

        Agenda.find().then(console.log)
        render('task', res)

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
                    render('update', res)
                }
            }
        )
    };
    async delete(req, res) {
        let body = req.body;
        Agenda.findOneAndDelete({ title: body.title },
            function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    if (result == null) {
                        console.log('No hay tarea asignadas con ese nombre');
                        render('delete', res)
                    } else {
                        console.log(result);
                        console.log('Tarea borrada');
                        render('delete', res)
                    }
                }
            }
        )
    };

}

module.exports = new TasksController();