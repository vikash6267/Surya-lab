              const { contactUsEmail } = require("../mails/contactFormRes")
              const { appointEmail } = require("../mails/apoiment")
              const mailSender = require("../utills/mailSender")

              exports.contactUsController = async (req, res) => {
                const { email, firstname, lastname, message, phoneNo, countrycode } = req.body
                console.log(req.body)
                try {
                  const emailRes = await mailSender(
                    email,
                    "Your Data send successfully",
                    contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode)
                  )
                  console.log("Email Res ", emailRes)
                  return res.json({
                    success: true,
                    message: "Email send successfully",
                  })
                } catch (error) {
                  console.log("Error", error)
                  console.log("Error message :", error.message)
                  return res.json({
                    success: false,
                    message: "Something went wrong...",
                  })
                }
              }











              exports.appointController = async (req, res) => {
                console.log(req.body)
                const { name, mobileNumber, location, area } = req.body;
                console.log(req.body);
                try {
                  // You can add your email logic here if needed
                  const emailRes = await mailSender(
                    "vikasmaheshwari6267@gmail.com",
                    "Appointment Request Received",
                    appointEmail(name, mobileNumber, location, area)
                  );
                  console.log("Email Res ", emailRes);
                  
                  return res.json({
                    success: true,
                    message: "Appointment request received successfully",
                  });
                } catch (error) {
                  console.log("Error", error);
                  console.log("Error message :", error.message);
                  return res.json({
                    success: false,
                    message: "Something went wrong...",
                  });
                }
              };
