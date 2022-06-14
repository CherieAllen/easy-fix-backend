import connectDb from "../connectDb.js";

export function getAllRepairs(req, res) {
  const repairId = req.params.repairId; // null with repairs

  const db = connectDb();
  db.collection("repairs")
    .get()
    .then((snapshot) => {
      const repairArray = snapshot.docs.map((doc) => {
        let repair = doc.data();
        repair.id = doc.id;
        return repair;
      });

      if (repairId) {
        // filter out the repair.id that doesn't match the repairId value
        repairArray = repairArray.filter((repair) => repair.id == repairId);
      }

      res.send(repairArray);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
}
