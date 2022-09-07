function wordcnt(){
    let word = document.getElementById('1').value;
    let c=0;
    let s = "";
    for(let i=0;i<word.length;i++){
        if(((word[i]>='a' && word[i]<='z') || (word[i]>='A' && word[i]<='Z'))){
           s = s + word[i];
           console.log(s);
        }
        else{
            if(s.length>0)
            c++;
            s="";
        }
        if(s.length>0 && i==word.length-1)
        c++;
    }
    //c=c+1;
    //let count = c;
    //document.getElementById('display').innerHTML = `no of words : ${count}`;
    console.log(c);
}
function wordcount(){
    let word = document.getElementById('1').value;
    let c=0;
    let s = "";
    for(let i=0;i<word.length;i++){
        if(((word[i]>='a' && word[i]<='z') || (word[i]>='A' && word[i]<='Z'))){
           s = s + word[i];
           console.log(s);
        }
        else{
            if(s.length>0)
            c++;
            s="";
        }
        if(s.length>0 && i==word.length-1)
        c++;
    }
    document.getElementById('display').innerHTML = `no of words : ${c}`;
    const cnt = document.getElementById('1').value;
    let ct=0;
    for(let i=0;i<cnt.length;i++){
        if((cnt[i]>='a' && cnt[i]<='z') || (cnt[i]>='A' && cnt[i]<='Z')){
           ct++;
           console.log(ct);
        }
    }
    document.getElementById('2').innerHTML = `no of letters : ${ct}`;
    console.log(ct); 

}