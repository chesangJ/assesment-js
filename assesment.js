let food=["eating"]
let x= food.reverse()
console.log(x)


function divideArray(arr2){
    if(arr2.length<=1){
        return arr2
    }

    let middle=Math.floor(arr2.length/2);
    let left=arr2.slice(0,middle);
    let right=arr2.slice(middle);
     return merge(divideArray(left),divideArray(right))
}

function merge(left,right){
    let emptyarray=[];
    while(left.length && right.length){
        if (right[0]>=left[0]){
            emptyarray.push(right.shift())
        }
        else{
            emptyarray.push(left.shift())
        }
       
    }
    return[...emptyarray,...left,...right]
}

function find(arr2,target2){
    let left=0;
    let right=arr2.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if (arr2[middle]===target2){
            return middle;
        
        }
        else if(arr2[middle]>target2){
            right=middle-1;
        }
        else{
            left=middle+1;
        }
    }
    return null
}

let arr2=[2,8,0,23,5,45,76];
let target2=23
console.log(find(arr2,target2))































let numArray = [12,87,45,75,23,64,73];

for (i=0;i<numArray.length;i++){
    if (i*4){
        console.log(numArray[i])
    }
}