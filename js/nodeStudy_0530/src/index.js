import express from 'express';

const app = express();

//req = 요청_request
//res = 응단_response
app.get("/", (req, res) =>{
  res.send("Node Study");
});

app.listen(8000, () =>{
  console.log('서버가 시작되었습니다.');
});
