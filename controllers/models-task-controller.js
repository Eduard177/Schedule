function addTask() {
    new Agenda({ title: 'Jalarme el ganzo' });
    tarea.save().then(() => console.log('Tarea asignada'));

    Agenda.find().then(console.log);
};

function readTask() {

    Agenda.find()
        .then(console.log);

};

function updateTask() {

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

function deleteTask() {

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

module.exports = {
    addTask,
    readTask,
    updateTask,
    deleteTask
};