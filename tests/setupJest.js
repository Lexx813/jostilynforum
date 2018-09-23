
/*
* Hi lui,
* Does create react app comes with testing framework or some configuration?? i assumed it does not and implemented jest
* If not with react i will probably use it at backend anyway
*/


// Default jest timeout is 5 seconds, may not be enough for testing. I set it to 10 seconds for development and 30 to continuous integration
if (process.env.NODE_ENV === 'ci') {
   jest.setTimeout(30000);
} else {
   jest.setTimeout(10000);
}