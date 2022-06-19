import connectDb from "../connectDb.js";

export function tpGetAllComments(req, res) {
  const db = connectDb();
  db.collection("tpcomments")
    .get()
    .then((snapshot) => {
      const tpCommentArray = snapshot.docs.map((doc) => {
        let tpComment = doc.data();
        tpComment.id = doc.id;
        return tpComment;
      });
      res.send(tpCommentArray);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}

export function tpAddComments(req, res) {
  if (!req.body) {
    res.status(400).send("Invalid request");
    return;
  }
  const db = connectDb();
  db.collection("tpcomments")
    .add(req.body)
    .then((doc) => {
      res.send("Comment Created");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}
