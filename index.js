var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "irizviali@gmail.com",
    pass: "vintageVRT5$"
  },
  maxConnections: 20,
  maxMessages: Infinity
});

send_mail = (message, recipient) => {
  const mailOptions = {
    from: "irizviali@gmail.com", // sender address
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

main = (data, message) => {
  receipents = data;
  while (count < receipents.length) {
    send_mail(receipents[count].message, receipents[count++].email);
  }
};
module.exports = main;
