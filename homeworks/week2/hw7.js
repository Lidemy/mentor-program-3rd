// https://blog.techbridge.cc/2016/09/24/binary-search-introduction/

function search(arr, target){
    let L = 0, R = arr.length-1;

    while(L<=R){
        let middle = Math.floor((R-L)/2 + L);

        // console.log('L-->', L);
        // console.log('med--->', middle);
        // console.log('R-->', R);
        
        if(arr[middle] == target){
            return middle
        }else if(arr[middle] > target){
            R = middle - 1
        }else{
            L = middle + 1
        }
    }

    return -1;
}

console.log(search ([1,3,5,7,8,9,10,14,15,16,17,20,39], 20 )) 