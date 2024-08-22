import contactModel from "../models/contactModel.js";

export const contactFormController = async (req, res) => {
  try {
    const { name, email, number, message } = req.body;

    // Validation

    switch (true) {
      case !name:
        return res.status(400).send({ error: "Name is Required" });
      case !email:
        return res.status(400).send({ error: "Email is Required" });
      case !number:
        return res.status(400).send({ error: "Number is Required" });
      case !message:
        return res.status(400).send({ error: "Message is Required" });
    }

    const contact = new contactModel({ ...req.body });
    await contact.save();
    res.status(201).send({
      success: true,
      message: "Message Send Successfully",
      contact,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Sending Message",
    });
  }
};
