import request from 'supertest';
import app from '../src/index';

let token;
const user = {
  firstName: 'buildforsgd',
  lastName: 'build-sgd-013',
  phone: '08033333344',
  username: 'build-sgd-013',
  password: 'military',
  dateOfBirth: '23/11/1971',
  email: 'build-sgd-013@gmail.com',
  school: 'Adoni institute',
  gender: 'female',
  state: 'osun',
  role: 'admin'
};

beforeAll((done) => {
  jest.setTimeout(10000);
  request(app)
    .post('/api/teachers')
    .send(user)
    .end((err, response) => {
      token = response.body.data.token; // save the token!

      done();
    });
});

describe('GET/ teachers', () => {
  it('respond with json containing a list of all teacher', async () => {
    await request(app)
      .get('/api/teachers')
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('respond with json containing a teacher', async () => {
    await request(app)
      .get('/api/teachers/me')
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(200);
  });

  it('It should require authorization to list all teacher', async () => {
    await request(app).get('/api/teachers').expect('Content-Type', /json/).expect(401);
  });

  it('It should require authorization to list a teacher', async () => {
    await request(app).get('/api/teachers/me').expect('Content-Type', /json/).expect(401);
  });
});

describe('UPDATE/ teacher', () => {
  it('it should update a teacher info', async () => {
    await request(app)
      .put('/api/teachers/me')
      .set('Authorization', `Bearer ${token}`)
      .send({
        lastName: 'team123'
      })
      .expect(200);
  });

  it('It should require authorization to update a teacher info', async () => {
    await request(app).put('/api/teachers/me').expect('Content-Type', /json/).expect(401);
  });
});

describe('POST/ login', () => {
  it('it should test the login', async () => {
    await request(app)
      .post('/api/login')
      .send({
        loginKey: '08033424019',
        password: 'military'
      })
      .expect(200);
  });

  it('it should test the login for bad requests', async () => {
    await request(app)
      .post('/api/login')
      .send({
        loginKey: 'bad',
        password: 'bad'
      })
      .expect(400);
  });
});

describe('DELETE/ teacher', () => {
  it('It should require authorization to delete a teacher info', async () => {
    await request(app).delete('/api/teachers/me').expect('Content-Type', /json/).expect(401);
  });
  it('it should delete a teacher info', async () => {
    await request(app).delete('/api/teachers/me').set('Authorization', `Bearer ${token}`).expect(200);
  });
});
