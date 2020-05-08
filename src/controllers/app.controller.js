// Holds the logic for the teacher model
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
import TeacherModel from '../model/index';

const Appcontrol = {};
// Create new Teacher Application
Appcontrol.create = (req, res) => {
  // Request validation
  if (!req.body) {
    return res.status(400).send({
      message: 'Product content can not be empty'
    });
  }

  // Create a Application
  const teacher = new TeacherModel({
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    repassword: req.body.repassword,
    phonenumber: req.body.phonenumber,
    yoe: req.body.yearofexp,
    grade: req.body.grade,
    study: req.body.study
    // address.number: req.body.addNum,
    // address.street: req.body.street,
    // address.state: req.body.state
  });

  // Save Product in the database
  teacher.save()
    .then((data) => {
      res.status(201).json(data);
    }).catch((err) => {
      res.status(500).send({
        message: err.message || 'Something wrong while creating the product.'
      });
    });
};

// Retrieve all teachers from the database.
Appcontrol.getAll = (req, res) => {
  TeacherModel.find()
    .then((teachers) => {
      res.status(200).json(teachers);
    }).catch((err) => {
      res.status(500).send({
        message: err.message || 'Something wrong while retrieving products.'
      });
    });
};
// Find a single product with a productId
Appcontrol.getOne = (req, res) => {
  TeacherModel.findById(req.params.productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: `Product not found with id ${req.params.productId}`
        });
      }
      res.send(product);
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `Product not found with id ${req.params.productId}`
        });
      }
      return res.status(500).send({
        message: `Something wrong retrieving product with id ${req.params.productId}`
      });
    });
};

// Update a product
Appcontrol.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    return res.status(400).json({
      message: 'Please fill in the required fileds and try again'
    });
  }

  // Find and update product with the request body
  TeacherModel.findByIdAndUpdate(req.params.productId, {
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    repassword: req.body.repassword,
    phonenumber: req.body.phonenumber,
    yoe: req.body.yearofexp,
    grade: req.body.grade,
    study: req.body.study
    // address.number: req.body.addNum,
    // address.street: req.body.street,
    // address.state: req.body.state
  }, { new: true })
    .then((teacher) => {
      if (!teacher) {
        return res.status(404).json({
          message: `No teacher with this details ${req.params.productId}`
        });
      }
      res.json(teacher);
    }).catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: `No teacher with this details ${req.params.productId}`
        });
      }
      return res.status(500).send({
        message: `Something wrong while trying to update
         your profile, please check everything has been filled and try again`
      });
    });
};
// Delete a note with the specified noteId in the request
Appcontrol.delete = (req, res) => {
  TeacherModel.findByIdAndRemove(req.params.productId)
    .then((app) => {
      if (!app) {
        return res.status(404).json({
          message: `User not found with id ${req.params.productId}`
        });
      }
      res.json({ message: 'User deleted successfully!' });
    }).catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).json({
          message: `User not found with id ${req.params.productId}`
        });
      }
      return res.status(500).json({
        message: `Could not delete user with id ${req.params.productId}`
      });
    });
};

export default { Appcontrol };
