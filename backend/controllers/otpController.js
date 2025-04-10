const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
const client = new twilio(accountSid, authToken);

const otpStorage = {}; // Temporary storage, use a database for production

exports.sendOtp = async (req, res) => {
    const { mobile } = req.body;
    if (!mobile) return res.status(400).json({ success: false, message: "Mobile number required" });

    const otp = Math.floor(100000 + Math.random() * 900000);
    otpStorage[mobile] = otp;

    try {
        await client.messages.create({
            body: `Your OTP is: ${otp}`,
            to: `+91${mobile}`,
            from: twilioPhone
        });
        res.json({ success: true, message: "OTP sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to send OTP" });
    }
};

exports.verifyOtp = (req, res) => {
    const { mobile, otp } = req.body;
    if (otpStorage[mobile] == otp) {
        delete otpStorage[mobile];
        res.json({ success: true, message: "OTP verified successfully!" });
    } else {
        res.status(400).json({ success: false, message: "Invalid OTP" });
    }
};
