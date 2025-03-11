import jwt from "jsonwebtoken";

const generatekey =(data) =>{
    return jwt.sign(data, "$dfdfdsrw34/effed", { expiresIn: "5min" });
}

export default generatekey;