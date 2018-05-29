function expect (value1) {

 return {
		toEqual: function (value2) {
			if (value1 === value2) {
				console.log('%cTest passed!', 'color: green')
      } else {
        console.log(`%cTest failed: expected ${value1} to equal ${value2}.`, 'color: red')
      }

		}
	}

}

function it (description, callBack) {

	console.log(description)
	callBack()

}
