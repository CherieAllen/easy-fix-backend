import connectDb from "../connectDb.js";

export function getAllComments(req,res){
    const db= connectDb();
    db.collection("comments").get()
    .then(snapshot => {
        const commentArray = snapshot.docs.map(doc => {
            let comment = doc.data();
            comment.id = doc.id;
            return comment;
        });
        res.send(commentArray);
    })
    .catch(err =>{
        res.status(500).send(err);
    });

}

export function addComments(req,res){
    if(!req.body){
        res.status(400).send('Invalid request')
        return;
    }
    const db = connectDb();
    db.collection("comments").add(req.body)
    .then(doc =>{
        res.send('Comment Created')
    })
    .catch(err =>{
        res.status(500).send(err);
    });

}