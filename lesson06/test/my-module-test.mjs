
import { add } from '../my-module.mjs'
import assert from 'node:assert/strict';

import chai from 'chai'
const should = chai.should()



describe('add tests', function () {
    it("should add two numbers", function () {
        // Arrange

        // Act 
        let res = add(2, 3)

        // Assert
        //assert.equal(res, 5, "If you cannot even implement an add operation... Change (of) course")
        res.should.equal(5)

    })

    it("should throw exception when 2nd argument is not provided", function () {
        // Arrange

        // Act 
        // try {
        //     let res = add(5)
        // } catch(e) {
        //     return
        // }

        // // Assert
        // assert.fail("An exception should have been thrown")

        //assert.throws(function () { add(5) })
        should.Throw(() => add(2))
    })
})