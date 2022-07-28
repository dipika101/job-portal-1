import {expect} from 'chai';
import request from 'request';
// const { TESTING_URL } = require('../constants/tests')

describe('User API', () => {
  describe('CREATE USER', () => {
    describe('Create user validation ERROR', () => {
      describe('Create user missing field', () => {
        const payload = {
          firstName: '', 
          lastName: 'de',
          email: "johndoe@recraftrelic.com",
          password: "johndoe",
        }
  
        it('Status', done => {
          request.post('http://localhost:3000/auth/admin', {
            json: payload
          }, (_, res) => {
            expect(res.statusCode).to.equal(200)
            done()
          })
        })
  
        // it('Message', done => {
          // request.post('http://localhost:3000/auth/admin', {
            // json: payload
          // }, (_, res) => {
            // expect(res.body.message.firstName[0]).to.equal('Please fill out this field.')
            // done()
          // })
        // })
      })

      describe('Create user invalid email field', () => {
        const payload = {
          firstName: 'john', 
          lastName: "Doe",
          email: "johndoe",
          password: "johndoe"
        }
  
        it('Status', done => {
          request.post('http://localhost:3000/auth/admin', {
            json: payload
          }, (_, res) => {
            expect(res.statusCode).to.equal(200)
            done()
          })
        })
  
        // it('Message', done => {
          // request.post('http://localhost:3000/auth/admin', {
            // json: payload
          // }, (_, res) => {
            // expect(res.body.message.email[0]).to.equal('Email is invalid')
            // done()
          // })
        // })
      })

      describe('Create user duplicate', () => {
        const payload = {
          firstName: 'john', 
          lastName: "Doe",
          email: "johndoe@recraftrelic.com",
          password: "johndoe"
        }
  
        it('Status', done => {
          request.post('http://localhost:3000/auth/admin', {
            json: payload
          }, (_, res) => {
            expect(res.statusCode).to.equal(200)
            done()
          })
        })
  
        // it('Message', done => {
          // request.post('http://localhost:3000/auth/admin', {
            // json: payload
          // }, (_, res) => {
            // expect(res.body.message.duplicate[0]).to.equal('User with this email id already exist')
            // done()
          // })
        // })
      })
    })

    it('Create user SUCCESS', done => {
      request.post('http://localhost:3000/auth/admin', {
        json: {
          firstName: 'john', 
          lastName: "Doe",
          email: "johndoe@recraftrelic.com",
          password: "johndoe"
        }
      }, (_, res) => {
        expect(res.statusCode).to.equal(200)
        done()
      })
    })
  })
})
