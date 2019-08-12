let todos = ['study for the TA', 'graduate from HR', 'get a job'];

const controller = {
  get: (req, res) => {
    res.status(200).send(todos);
  },
  post: (req, res) => {
    let { todo } = req.body;
    todos.push(todo);
    res.status(201).send(`successfully added ${todo}`);
  },
  delete: (req, res) => {
    let { index } = req.params;
    let deleted = todos.splice(index, 1);
    res.status(202).send(`successfully deleted ${deleted}`);
  },
  put: (req, res) => {
    let { index } = req.params;
    let { todo } = req.body;
    todos[index] = todo;
    res.status(200).send(`successfully updated ${todo}`)
  }
}

module.exports = controller;