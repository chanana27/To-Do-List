exports.getDate = ()=> {

const today = new Date();

const options = {
weekday: "long",
day: "numeric",
month: "long"
};

return today.toLocaleDateString("hi-in", options);

}

exports.getDay = function(){

    const today = new Date();
    
    const options = {
    weekday: "long"
    };
    
return today.toLocaleDateString("hi-in", options);
    
    }