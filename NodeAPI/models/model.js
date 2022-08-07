const db = require("../config/db");

class Post {
  constructor(first_name, last_name, title, email, message) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.title = title;
    this.email = email;
    this.message = message;
  }

  save() {

    let sql = `
    INSERT INTO contact_form(
      first_name,
      last_name,
      title,
      email,
      message
    )
    VALUES(
      '${this.first_name}',
      '${this.last_name}',
      '${this.title}',
      '${this.email}',
      '${this.message}'
    )
    `;

    console.log(sql);

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM lorem_sections;";

    return db.execute(sql);
  }

  static findById(name) {
    let sql = `SELECT ` + name + ` FROM lorem_sections;`;

    return db.execute(sql);
  }
}

module.exports = Post;