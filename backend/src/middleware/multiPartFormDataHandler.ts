const Busboy = require('busboy');
export const multiPartFormDataMiddleware = (req, res, next) => {
    let formData = {};
    let files=[]
    let chunks = [], fname, ftype, fEncoding;
    const busboy = Busboy({ headers: req.headers });
    busboy.on(
      "field",
      (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
        formData = { ...formData, [fieldname]: val };
      },
    );
    busboy.on('file', function(fieldname, file, filename:string, encoding, mimetype) {
        fname = filename["filename"].replace(/ /g,"_");
        ftype = filename["mimetype"]; 
        fEncoding = filename["encoding"];
        file.on('data', function(data) {
            chunks.push(data)
        });
        file.on('end', function() {
            files.push({
                "fname":fname,
                "ftype":ftype,
                "fEncoding":fEncoding,
                "chunks":chunks
            })
        });
    });
    busboy.on("finish", () => {
      req.body["form"] = formData;
      req.body["files"]=files
      next();
    });
  
    req.pipe(busboy);
  };