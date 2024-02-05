function countOccurences(tab){
	var result = {};
	tab.forEach(function(elem){
		if(elem in result){
			result[elem] = ++result[elem];
		}
		else{
			result[elem] = 1;
		}
	});
	return result;
}
countOccurences([1,2,3,3,3,3,4,4]);