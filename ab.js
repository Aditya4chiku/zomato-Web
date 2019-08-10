

function wait(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
  }
  
  async function test() {
    for (let i = 0; i < 10; ++i) {
      await wait(1000);
      // Prints out "Hello, World!" once per second and then exits
      console.log('Hello, World!');
    }
  }
  


function Ruko(ms)
{
    return new Promise(resolve =>setTimeout(()=>resolve(),ms))
}

async function kro()
{
     for(var i=0;i<5;i++)
     {
         
       await  Ruko(1000);
              console.log(i);

     }
}
kro()

