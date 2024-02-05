function mostOccurred(array)
{
    if(array.length == 0)
        return null;
    let modeMap = {};
    let max = array[0], maxCount = 1;
    for(let i = 0; i < array.length; i++)
    {
        let x = array[i];
        if(modeMap[x] == null)
            modeMap[x] = 1;
        else
            modeMap[x]++;  
        if(modeMap[x] > maxCount)
        {
            max = x;
            maxCount = modeMap[x];
        }
    }
    return max;
}

mostOccurred([4, 2, 2, 7, 2]);