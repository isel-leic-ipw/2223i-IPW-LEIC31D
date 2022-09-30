import assert from 'node:assert/strict'

import { filterProperties } from '../filter-props.mjs' 


describe('Filter properties module tests', function () {
  const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'}

  describe('#filterProperties tests', function () {
    it('should map only some properties', function () {
      // Arrange
      const props = ['b', 'd', 'g', 'a']

      // Act 
      const oFiltered = filterProperties(props, o)

      // Assert
      assert.deepEqual(oFiltered,  {a: 1, b: 'Thor', d: {x: 10}}, "Objects are not equal")


    
    })

    it('should map no properties', function () {
      // Arrange
      const props = ['x', 'y', 'z']

      // Act 
      const oFiltered = filterProperties(props, o)

      // Assert
      assert.deepEqual(oFiltered,  {}, "Objects are not equal")
    })

    it('should accept and empty property names array', function () {
      // Arrange
      const props = []

      // Act 
      const oFiltered = filterProperties(props, o)

      // Arrange
      assert.deepEqual(oFiltered,  {}, "Objects are not equal")
    })

    it('should throw exception when a null property names array is passed', function () {
      // Arrange
      

      // Act 
      try {
        const oFiltered = filterProperties(null, o)
      } catch(e) {
        console.log(e)
        assert.equal(e, "props argument should be an array")
        return 
      }
      // Assert
    
      assert.fail("Exception should be thrown")
      
    })

  })

  describe('#filterPropertiesN tests', function () {
    it('test1', function () {
      // Arrange
      

      // Act 
      

      // Assert
      

    })
    
    })
})

