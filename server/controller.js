// Controller here
let todos = ['study for the TA', 'graduate from HR', 'get a job'];

const controller = {
  get: (req, res) => {
    res.status(200).send(todos);
  },
  post: (req, res) => {
    let { todo } = req.body; // let todo = req.body.todo
    todos.push(todo);
    res.status(201).send(`successfully added ${todo}`);
  },
  delete: (req, res) => {
    let { index } = req.params;
    let deleted = todos.splice(index, 1);
    res.status(202).send(`successfully deleted ${deleted}`);
  },
  getName: (req, res) => {
    res.status(200).send('Liezel')
  }
}

module.exports = controller;