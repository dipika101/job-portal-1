const expect = require('chai').expect;
const request = require('request');
const { TESTING_URL } = require('../constants/tests')

describe('User API', () => {
  describe('CREATE USER', () => {
    describe('Create user validation ERROR', () => {
      describe('Create user missing field', () => {
        const payload = {
          name: "",
          email: "johndoe@recraftrelic.com",
          password: "johndoe",
          id: "1234"
        }
  
        it('Status', done => {
          request.post(`${TESTING_URL}/user`, {
            json: payload
          }, (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          })
        })
  
        it('Message', done => {
          request.post(`${TESTING_URL}/user`, {
            json: payload
          }, (_, response) => {
            expect(response.body.errors.firstName[0]).to.equal('Name is required')
            done()
          })
        })
      })

      describe('Create user invalid email field', () => {
        const payload = {
          name: "Doe",
          email: "johndoe",
          password: "johndoe",
          id: "1234"
        }
  
        it('Status', done => {
          request.post(`${TESTING_URL}/user`, {
            json: payload
          }, (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          })
        })
  
        it('Message', done => {
          request.post(`${TESTING_URL}/user`, {
            json: payload
          }, (_, response) => {
            expect(response.body.errors.email[0]).to.equal('Email is invalid')
            done()
          })
        })
      })

      describe('Create user duplicate', () => {
        const payload = {
          name: "Doe",
          email: "johndoe@recraftrelic.com",
          password: "johndoe",
          id: "1234"
        }
  
        it('Status', done => {
          request.post(`${TESTING_URL}/user`, {
            json: payload
          }, (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          })
        })
  
        it('Message', done => {
          request.post(`${TESTING_URL}/user`, {
            json: payload
          }, (_, response) => {
            expect(response.body.errors.duplicate[0]).to.equal('User with this email id already exist')
            done()
          })
        })
      })
    })

    it('Create user SUCCESS', done => {
      request.post(`${TESTING_URL}/user`, {
        json: {
          name: "Doe",
          email: "johndoe@recraftrelic.com",
          password: "johndoe",
          id: "1234"
        }
      }, (_, response) => {
        expect(response.statusCode).to.equal(200)
        done()
      })
    })
  })
})
