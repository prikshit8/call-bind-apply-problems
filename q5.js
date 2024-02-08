// output?
// bind chaining won't work

function f(){
    console.log(this.name);
}

f = f.bind({name : 'hdfc'}).bind({name: 'sbi'});

f();
