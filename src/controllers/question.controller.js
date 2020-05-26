import axios from 'axios';
import { BaseController } from './base.controller';

export class QuestionsController extends BaseController {
  constructor() {
    super();
  }

  async getQuestion(req, res) {

    const uri = `https://questions.aloc.ng/api/m?subject=${req.body.course}`;
    await axios.get(uri)
      .then((data) => {
        super.success(res, data.data, 'Questions successfully received', 200);
      })
      .catch((e) => {
        super.error(res, e);
      });
  }
}
