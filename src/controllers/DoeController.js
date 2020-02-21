import db from '../config/ConfigureConnection';

class DoeController {
  store(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const sangue = req.body.sangue;

    if (name == "" || email == "" || sangue == "") {
      return res.send("todos os campos são Obrigatorios !")
    }

    const query = `
      insert into doadores ("name", "email", "sangue")
       values($1, $2, $3)`;

    const values = [name, email, sangue];

    db.query(query, values, (err) => {
      if (err) return res.status(401).json({ error: 'error in database' })
      return res.redirect('/');
    });
  }

  index(req, res) {
    const query = `select * from doadores`;

    db.query(query, (err, result) => {
      if (err) return res.status(401).json({ error: 'error in database' })
      const doadores = result.rows;
      return res.render('index.html', { doadores });
    });
  }
}

export default new DoeController();
