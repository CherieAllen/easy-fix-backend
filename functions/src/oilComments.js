import connectDb from "../connectDb.js";

export function getOilComments(req, res) {
  const db = connectDb();
  db.collection("oilcomments")
    .get()
    .then((snapshot) => {
      const oilcommentArray = snapshot.docs.map((doc) => {
        let oilcomment = doc.data();
        oilcomment.id = doc.id;
        return oilcomment;
      });
      res.send(oilcommentArray);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

export function addOilComments(req, res) {
  if (!req.body) {
    res.status(400).send("Invalid request");
    return;
  }
  const db = connectDb();
  db.collection("oilcomments")
    .add(req.body)
    .then((doc) => {
      res.send("Comment Created");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}
