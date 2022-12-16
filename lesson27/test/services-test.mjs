import assert from  'assert'

import * as tasksData from '../data/tasks-data-mem.mjs'
import * as usersData from '../data/users-data-mem.mjs'
import tasksServicesInit from '../services/tasks-services.mjs'


const tasksServices = tasksServicesInit(tasksData, usersData)


describe('Tasks services', function () {
  describe('#get all tasks', function () {
    it('should return all tasks', async function (done) {
        let tasks = await tasksServices.getTasks()
        // asserts

        done()
    })
  })
})