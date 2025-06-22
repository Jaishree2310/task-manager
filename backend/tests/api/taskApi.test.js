const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../server'); // <- import express app
const Task = require('../../models/Task');

let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

afterEach(async () => {
  await Task.deleteMany(); // Clean DB after each test
});

describe('Task API Tests', () => {
  it('GET /api/tasks → should return empty array', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('POST /api/tasks → should create a task', async () => {
    const res = await request(app).post('/api/tasks').send({
      title: 'New Task',
      description: 'This is a test task',
      completed: false,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('New Task');
  });
    it('PUT /api/tasks/:id → should update a task', async () => {
    const task = await Task.create({ title: 'Old Title', status: 'pending' });

    const res = await request(app)
        .put(`/api/tasks/${task._id}`)
        .send({ status: 'completed' });

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('completed');
    });

  it('DELETE /api/tasks/:id → should delete a task', async () => {
    const task = await Task.create({ title: 'Delete Me' });
    const res = await request(app).delete(`/api/tasks/${task._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Task deleted');
  });
});
