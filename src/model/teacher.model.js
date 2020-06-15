import bcrypt from 'bcrypt';
import { config as dotConfig } from 'dotenv';
import jwt from 'jsonwebtoken';
import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import validator from 'validator';

dotConfig();

const teacherSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    username: {
      type: String,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid Email!');
        }
        return validator.isEmail(value);
      }
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isMobilePhone(value, ['en-NG', 'en-GH'])) {
          throw new Error('Invalid Phone Number!');
        }
        return validator.isMobilePhone(value);
      }
    },
    tokens: {
      type: [
        {
          token: {
            type: String,
            required: true
          }
        }
      ]
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    role: {
      type: String,
      default: 'user'
    },
    score: {
      type: Number
    },
    yearOfExperience: {
      type: String
    },
    school: {
      type: String,
      required: true
    },
    levelOfEducation: {
      type: String
    },
    courseOfStudy: {
      type: String
    },
    approved: {
      type: Boolean,
      default: false
    },
    address: {
      type: String
    },
    state: {
      type: String,
      required: true
    },
    country: {
      type: String,
      default: 'Nigeria'
    },
    grade: {
      type: String
    },
    gpa: {
      type: String
    },
    image: {
      type: String
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
      required: true
    },
    dateOfBirth: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ref) {
        delete ref.password;
        delete ref.tokens;
      }
    },
    toObject: {
      transform(doc, ref) {
        delete ref.password;
        delete ref.tokens;
      }
    }
  }
);

teacherSchema.pre('save', async function save(next) {
  try {
    const user = this;

    if (!user.isModified('password')) {
      return next();
    }
    user.password = await bcrypt.hash(user.password, 10);
    next();
  } catch (e) {
    next(e);
  }
});

teacherSchema.statics.findByCredentials = async (loginKey, password) => {
  const user =
    (await Teacher.findOne({ phone: loginKey })) ||
    (await Teacher.findOne({ username: loginKey })) ||
    (await Teacher.findOne({ email: loginKey }));

  if (!user) {
    throw new Error('Invalid login details');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Invalid login details');
  }

  return user;
};

teacherSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id, type: 'user' }, process.env.JWT_SECRETE_KEY);

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

teacherSchema.plugin(uniqueValidator, { message: '{TYPE} must be unique.' });

const Teacher = model('Teacher', teacherSchema);

export default Teacher;
