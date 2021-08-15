const contact_mail = require("@sendgrid/mail");

contact_mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const msg = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
  lang="en"
>
  <head>
    <link
      rel="stylesheet"
      type="text/css"
      hs-webfonts="true"
      href="https://fonts.googleapis.com/css?family=Lato|Lato:i,b,bi"
    />
    <title>Email template</title>
    <meta property="og:title" content="Email template" />

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <style type="text/css">
      a {
        text-decoration: underline;
        color: inherit;
        font-weight: bold;
        color: #253342;
      }

      h1 {
        font-size: 56px;
      }

      h2 {
        font-size: 28px;
        font-weight: 900;
      }

      p {
        font-weight: 100;
      }

      td {
        vertical-align: top;
      }

      #contact {
        margin: auto;
        width: 600px;
        background-color: white;
      }
    </style>
  </head>

  <body
    bgcolor="#F5F8FA"
    style="
      width: 100%;
      margin: auto 0;
      padding: 0;
      font-family: Lato, sans-serif;
      font-size: 18px;
      color: #33475b;
      word-break: break-word;
    "
  >
    <div id="contact">
      <table
        role="presentation"
        border="0"
        cellpadding="0"
        cellspacing="10px"
        style="padding: 30px"
      >
        <tr>
          <td>
            <h4>Message from Safewayfamilyservices.org</h4>
          </td>
        </tr>
        <!-- Message -->
        <tr>
          <td>            
            <p>
             Name: ${body.name} <br /><br />
              Subject: ${body.subject} <br/><br />
              Message: ${body.message} <br/><br />
            </p>
          </td>
        </tr>
       </table>
    </div>
  </body>
</html>
  `;

  const data = {
    to: "cruz.nelson.m@gmail.com",
    from: "Referral@nutmeghemp.com", // Use the email address or domain you verified above
    subject: "Safewayfamilyservices | Message",
    text: msg,
    html: msg.replace(/\r\n/g, "<br>"),
  };

  contact_mail.send(data);

  res.status(200).json({ status: "Ok" });
}
