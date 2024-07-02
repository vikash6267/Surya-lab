exports.appointEmail = (name, mobileNumber, location, area) => {
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Appointment Request Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
            .cta {
                display: inline-block;
                padding: 10px 20px;
                background-color: #FFD60A;
                color: #000000;
                text-decoration: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
            .highlight {
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="container">
                        
            <div class="message">Appointment Request </div>
            <div class="body">
                <p>Dear Admin,</p>
                <p>Here are the details Patient provided:</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
                <p><strong>Location:</strong> ${location}</p>
                <p><strong>Area:</strong> ${area}</p>
            </div>
          
        </div>
    </body>
    </html>`;
  };
  