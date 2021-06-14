const con = require("./conn");

exports.addData = (req,res) => {
    console.log(req.body);

    let sql = `insert into candidate(student_name,email) values("${req.body.name}", "${req.body.email}")`;
    con.query(sql,(err)=>{
        if(err) throw err;
        console.log('data added!' );
    });
    res.status(200).send({status:"success", meassage:"data added successfully", })
};

exports.addScore = (req,res)=>{
 console.log(req.body);
let sql = `insert into test_score(first_round,second_round,third_round) values(${req.body.first_round_score},${req.body.second_round_score},${req.body.third_round_score})`;
con.query(sql,(err)=>{
    if(err) throw err;
    console.log('score added successfully' );
})
res.status(200).send({status:"success", message:"Score added successfully"});
}