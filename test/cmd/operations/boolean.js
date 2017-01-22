/* global describe, it, beforeEach, afterEach */
/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Mark van Seventer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// @see http://sharp.dimens.io/en/stable/api-operation/#boolean

// Strict mode.
'use strict'

// Standard lib.
const path = require('path')

// Package modules.
const chai = require('chai')
const sinonChai = require('sinon-chai')
const Yargs = require('yargs')

// Local modules.
const boolean = require('../../../cmd/operations/boolean')
const queue = require('../../../lib/queue')
const sharp = require('../../mocks/sharp')

// Configure.
chai.use(sinonChai)
const expect = chai.expect

// Test suite.
describe('boolean', () => {
  const cli = (new Yargs()).command(boolean)

  // Default input (avoid `path.join` to test for input normalizing).
  const input = `${__dirname}/../../fixtures/input.jpg`

  // Reset.
  afterEach('queue', () => queue.splice(0))
  afterEach('sharp', sharp.prototype.reset)

  describe('<operand> <operator>', () => {
    // Run.
    beforeEach((done) => cli.parse([ 'boolean', input, 'and' ], done))

    // Tests.
    it('should set the operand and operator flags', () => {
      const args = cli.parsed.argv
      expect(args).to.have.property('operand', path.normalize(input))
      expect(args).to.have.property('operator', 'and')
    })
    it('should update the pipeline', () => {
      expect(queue.pipeline).to.have.length(1)
      expect(queue.pipeline).to.include('boolean')
    })
    it('should execute the pipeline', () => {
      const pipeline = queue.drain(sharp())
      expect(pipeline.boolean).to.have.been.calledWith(path.normalize(input), 'and')
    })
  })
})