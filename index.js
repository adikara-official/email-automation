var nodemailer = require("nodemailer");
var credentials = require("./config");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: credentials.user,
    pass: credentials.pass
  },
  maxConnections: 20,
  maxMessages: Infinity
});

send_mail = (message, recipient, from) => {
  const mailOptions = {
    from: credentials.user, // sender address
    to: recipient, // list of receivers
    subject: message, // Subject line
    html: `<h1>${message}</h1>` // plain text body
  };
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};

let count = 0;
let receipents = [];

main = data => {
  receipents = data;
  while (count < receipents.length) {
    send_mail(receipents[count].message, receipents[count++].email);
  }
};
module.exports = main;
