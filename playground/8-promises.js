const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve([7, 4, 1]);
    reject("Things went wrong!");
    //resolve([2, 3, 2]); It just checks weather reject or resolve is called. once it sees reject or resolve it fulfills the promise function
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log("Sucess!", result);
  })
  .catch((error) => {
    console.log("Error!", error);
  });

//
//
//                          fulfilled
//                        /
//Promise -- pending -->
//                        \
//                          rejected
//
//
//
