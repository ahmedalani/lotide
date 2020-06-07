# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @s3leha/lotide`

**Require it:**

`const _ = require('@s3leha/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns the head of given array (first element)
* `tail`: takes an array and returns a new array equals the original but without the head
* `middle`: takes one array as parameter and return the middle element (one if odd, two if even)
* `assertArraysEqual`: takes two arrays and compare if they match
* `assertEqual`: takes 2 parameter and use the === operator to check if the params match
* `assertObjectsEqual`: takes 2 objects and check if they match
* `countLetters`: takes a string as parameter and return an obj with count of each letter
* `countOnly`: takes arry and opject as params, count array elements based on classification from the obj
* `eqArrays`: takes two arrays as parameters and return true if they match false otherwise
* `eqObjects`: takes 2 objects as params and return true or fals based on perfect match
* `findKey`: takes an object and a callback function loop through obj and return key of fuond value from the cb
* `findKeyByValue`: takes an obj and a value as params, returns the first key that contain the matching value
* `letterPositions`: takes a sentence as parameter and returns an obj with each letter index (zero based)
* `map`: takes an array and a callback, returns a new array


*** This library works, but it is far from done ***