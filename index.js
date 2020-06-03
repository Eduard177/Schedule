const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const { Agenda } = require('./models');

mongoose.connect(MONGO_URI, { useNewUrlParser: true });

function agregarTarea() {
    const tarea = new Agenda({ title: 'Jalarme el ganzo' });
    tarea.save().then(() => console.log('Tarea asignada'));

    Agenda.find().then(console.log);
};

function leerTareas() {

    Agenda.find()
        .then(console.log);

};

function updateTareas() {

    Agenda.findOneAndUpdate({ title: "Saludar" }, { title: 'Hola' },
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        }
    );
    Agenda.find()
        .then(console.log);
};

function deleteTarea() {

    Agenda.findOneAndDelete({ title: 'Hola' },
        function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        }
    );
    Agenda.find()
        .then(console.log);
}
agregarTarea()