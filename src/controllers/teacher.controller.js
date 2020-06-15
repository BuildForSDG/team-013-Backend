import { BaseController } from '.';
import { Teacher } from '../model';
import { throwError } from '../utils/handleErrors';

export class TeacherController extends BaseController {
  constructor() {
    super();
  }

  async register(req, res) {
    try {
      const data = req.body;

      if (req.file) {
        data.image = req.file.path;
      }

      const newTeacher = new Teacher(data);
      const teacher = await newTeacher.save();
      const token = await teacher.generateAuthToken();
      const body = { teacher, token };

      super.success(res, body, 'Teacher Registration Successful', 201);
    } catch (e) {
      super.error(res, e);
    }
  }

  async login(req, res) {
    try {
      const { loginKey, password } = req.body;
      const teacher = await Teacher.findByCredentials(loginKey, password);
      const token = await teacher.generateAuthToken();
      const body = { teacher, token };

      super.success(res, body, 'Login Successful');
    } catch (e) {
      super.error(res, e);
    }
  }

  async logOut(req, res) {
    try {
      req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token;
      });

      await req.user.save();

      super.success(res, [], 'Logout Successful');
    } catch (e) {
      super.error(res, e);
    }
  }

  async readAll(req, res) {
    try {
      const teachers = await Teacher.find({});

      super.success(res, teachers || [], 'Successfully Retrieved all Teachers.');
    } catch (e) {
      super.error(res, e);
    }
  }

  async readAllApprovedTeachers(req, res) {
    try {
      const teachers = await Teacher.find({ approved: true });

      super.success(res, teachers || [], 'Successfully Retrieved all Teachers.');
    } catch (e) {
      super.error(res, e);
    }
  }

  async deleteAll(req, res) {
    try {
      await Teacher.deleteMany({});

      super.success(res, [], 'Delete Successful.');
    } catch (e) {
      super.error(res, e);
    }
  }

  async readOne(req, res) {
    try {
      super.success(res, req.user, 'Successfully Retrieved Users Profile.');
    } catch (e) {
      super.error(res, e);
    }
  }

  async update(req, res) {
    try {
      const updates = Object.keys(req.body);
      const allowedUpdates = [
        'phone',
        'firstName',
        'lastName',
        'username',
        'email',
        'password',
        'yearsOfExperience',
        'school',
        'levelOfEducation',
        'courseOfStudy',
        'gpa',
        'dateOfBirth',
        'image',
        'state',
        'country',
        'address'
      ];
      const isValidUpdate = updates.every((update) => {
        return allowedUpdates.includes(update);
      });

      if (!isValidUpdate) {
        throwError(400, 'Invalid Field.');
      }

      const teacherUpdate = req.body;

      updates.map((update) => {
        req.user[update] = teacherUpdate[update];
      });

      if (req.file) {
        req.user.image = req.file.path;
      }

      const updatedTeacher = await req.user.save();
      super.success(res, updatedTeacher, 'Update Successful');
    } catch (e) {
      super.error(res, e);
    }
  }

  async deleteOne(req, res) {
    try {
      const teacher = await req.user.remove();

      super.success(res, teacher, 'Delete Successful');
    } catch (e) {
      super.error(res, e);
    }
  }

  async updateTeacherScore(req, res) {
    try {
      const { score } = req.body;

      // Update teacher's score
      req.user.score = score;

      // Approve the teacher if he scores 80 and above
      if (score >= 80) {
        req.user.approved = true;
      }

      // Save the Teacher's updated data to DB
      const updatedTeacher = await req.user.save();

      // Respond to the client with the saved data
      super.success(res, updatedTeacher, 'Update Successful');
    } catch (e) {
      super.error(res, e);
    }
  }
}
