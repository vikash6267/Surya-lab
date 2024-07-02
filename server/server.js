const bodyParser = require("body-parser");

const express = require("express")
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");
const {errorHandler} = require("./middlewares/errorHandler")
const imageRoute = require("./routes/imageRoute");
const productsRoutes = require("./routes/products")
const userRoutes = require("./routes/userRoutes")
const Product = require("./models/Product");
const { appointController } = require("./controllers/ContactUs");

dotenv.config();

// Setting up port number
const PORT = process.env.PORT || 4000;
// Connecting to database
database.connect();

// Middlewares
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
app.use(cookieParser());

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);


// Connecting to cloudinary
cloudinaryConnect();


// Setting up routes
app.use("/api/v1/product", productsRoutes);
app.use("/api/v1/user",userRoutes)
app.post("/book",appointController)
app.use("/api/v1/image", imageRoute);


app.post('/save-investigations', async (req, res) => {
    const { investigations } = req.body;

    try {
        // Use Mongoose to save each investigation to the database
        const savedInvestigations = await Product.insertMany(investigations);

        res.status(201).json({ message: 'Investigations saved successfully', data: savedInvestigations });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to save investigations' });
    }
});



app.use(errorHandler)
// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

// Listening to the server
app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});

// End of code.
