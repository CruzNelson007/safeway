const referral_mail = require("@sendgrid/mail");

referral_mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const msg = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

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
  
        #email {
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
      <div id="email">
        <table
          role="presentation"
          border="0"
          cellpadding="0"
          cellspacing="10px"
          style="padding: 30px"
        >
          <tr>
            <td>
              <h2>Referral Form</h2>
            </td>
          </tr>
          <!-- Credentialed Service Requested -->
          <tr>
            <td>
              <h2>Credentialed Service Requested</h2>
              <p>
                Service requested : ${body.serviceRequested} <br />
                Hours of Service per week : ${body.hoursOfService} <br />
              </p>
            </td>
          </tr>
          <!-- First Parent -->        
          <tr>
            <td>
              <h2>First Parent</h2>
              <p>
                First Name: ${body.parentOneFname} <br />
                Last Name: ${body.parentOneLname} <br />
                Primary Phone: ${body.parentOnePrimary} <br />
                Secondary Phone: ${body.parentOneSecondary} <br />
                Address: ${body.parentOneAddress} <br />
                City: ${body.parentOneCity} <br />
                State: ${body.parentOneState} <br />
                Zip Code: ${body.parentOneZipCode}< b> Service Participant:
                ${body.parentOneRadio} <br />
              </p>
            </td>
          </tr>
          <!-- Second Parent -->
          <tr>
            <td>
              <h2>Second Parent</h2>
              <p>
                First Name: ${body.parentTwoFname}<br />
                Last Name: ${body.parentTwoLname}<br />
                Primary Phone: ${body.parentTwoPrimary}<br />
                Secondary Phone: ${body.parentTwoSecondary}<br />
                Address: ${body.parentTwoAddress}<br />
                City: ${body.parentTwoCity}<br />
                State: ${body.parentTwoState}<br />
                Zip Code: ${body.parentTwoZipCode}<br />
                Service Participant: ${body.parentTwoRadio}<br />
              </p>
            </td>
          </tr>
          <!-- Caregiver Information -->
          <tr>
            <td>
              <h2>Caregiver Information</h2>
              <p>
                DCF Case Status: ${body.childOneDcfCaseStatus}<br />
                Caregiver: ${body.childOneCaregiver}<br />
                Relationship: ${body.childOneCaregiverRelationship}<br />
                Primary Phone: ${body.childOneCaregiverPrimary}<br />
                Secondary Phone: ${body.childOneCaregiverSecondary}<br />
                Address: ${body.childOneCaregiverAddress}<br />
                City: ${body.childOneCaregiverCity}<br />
                State: ${body.childOneCaregiverState}<br />
                Zip Code: ${body.childOneCaregiverZipCode}<br />
                Service Participant: ${body.childOneCaregiverRadio}<br />
              </p>
            </td>
          </tr>
          <!-- Assigned DCF Worker Information -->
          <tr>
            <td>
              <h2>Assigned DCF Worker Information</h2>
              <p>
                First Name: ${body.childOneDcfWorkerFname}<br />
                Last Name: ${body.childOneDcfWorkerLname}<br />
                DCF Link#: ${body.childOneDcfLink}<br />
                DCF Child#: ${body.childOneDcfChildLink}<br />
                DCF Office: ${body.childOneDcfWorkerOffice}<br />
                Region: ${body.childOneDcfWorkerRegion}<br />
                Primary Phone: ${body.childOneDcfPrimary}<br />
                Secondary Phone: ${body.childOneDcfSecondary}<br />
                Email: ${body.childOneDcfWorkerEmail}<br />
              </p>
            </td>
          </tr>
  
          <!-- DCF Supervisor -->
          <tr>
            <td>
              <h2>DCF Supervisor</h2>
              <p>
                First Name: ${body.dcfSupervisorFname}<br />
                Last Name: ${body.dcfSupervisorLname}<br />
                Primary Phone: ${body.dcfSupervisorPrimary}<br />
                Secondary Phone: ${body.dcfSupervisorSecondary}<br />
                Email: ${body.dcfSupervisorEmail}<br />
              </p>
            </td>
          </tr>
          <!-- Family Needs & Strengths -->
          <tr>
            <td>
              <h2>Family Needs & Strengths</h2>
              <p>
                <i>Transportation</i><br />
                Child(ren) Name: ${body.transportationChildName}<br />
                Parent(s) Name: ${body.transportationParentName}<br />
                <br /><i>Pick Up/Drop Off Location</i><br />
                Child(ren) Pickup/Drop Off: ${body.pickUpLocationChildName}<br />
                Parent(s) Pickup/Drop Off: ${body.pickUpLocationParentName}<br />
                <br>Medications/Medical Concerns/Allergies for Child:
                ${body.medications}<br />
                DCF Case Plan Goal for this family: ${body.dcfCasePlanGoal}<br />
                Critical Family Needs: ${body.criticalFamilyNeeds}<br />
                Family Strengths: ${body.familyStrengths}<br />
                Safety Concerns: ${body.safetyConcerns}<br />
                Expected Outcome: ${body.expectedOutcome}<br />
                Other Services in place or completed: ${body.otherServices}<br />
                Other special considerations: ${body.specialConsiderations}<br />
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
    subject: "Safewayfamilyservices | Referral",
    text: msg,
    html: msg.replace(/\r\n/g, "<br>"),
  };

  referral_mail.send(data);

  res.status(200).json({ status: "Ok" });
}
