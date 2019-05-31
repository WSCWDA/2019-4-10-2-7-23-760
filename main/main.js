module.exports = function main(inputs) {
    if(inputs.distance < 2){
    	return 6 + Math.round(inputs.parkTime*0.25);
    }else if(inputs.distance <8){
    	return 6 + Math.round((inputs.distance-2)*0.8 +inputs.parkTime*0.25);
    }else{
    	return 6 + Math.round(0.8*6 + (inputs.distance-8)*1.2 +inputs.parkTime*0.25);
    }
};