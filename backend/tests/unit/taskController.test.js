const Task = require('../../models/Task');
const { getAllTasks } = require('../../controllers/taskController');

jest.mock('../../models/Task');

describe('Task Controller - getAllTasks', () => {
  it('should return all tasks', async () => {
    const mockTasks = [{ title: 'Test task' }];
    Task.find.mockResolvedValue(mockTasks);

    const req = {};
    const res = {
      json: jest.fn()
    };

    await getAllTasks(req, res);
    expect(res.json).toHaveBeenCalledWith(mockTasks);
  });
});
