import express from 'express';
import cors from 'cors';// middleware에서 사용
import helmet from 'helmet';// middleware에서 사용
import dayjs from 'dayjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const app = express();

app.use(cors());// middleware 등록
app.use(helmet());// middleware 등록

const today = new Date();
const toadyToDayjs= dayjs(today).format("YYYY-MM-DD");
console.log({toadyToDayjs});

//해당 사이트에만 middleware 등록
/*app.use(
  cors({
    origin: "https://naver.com",
  })
);*/

const password = "1234";
const hashedPassword = bcrypt.hashSync(password, 10);
console.log({hashedPassword});

const token = jwt.sign("1234", "keuhigjfbn", /*{
  expiresIn: "1h",
}*/);
console.log({token});

//req = 요청_request
//res = 응단_response
app.get("/", (req, res) =>{
  res.send("Node Study");
});

app.listen(8000, () =>{
  console.log('서버가 시작되었습니다.');
});
