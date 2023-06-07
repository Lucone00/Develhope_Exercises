const someTask = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("this is some data"), 2000);
});

console.log(someTask)

someTask.then(
    function (value) {
        console.log('value:', value)
        console.log('someTask:', someTask)
    },
    function (reason) {
        console.log('reason:', reason)
        console.log('someTask:', someTask)
    }
)