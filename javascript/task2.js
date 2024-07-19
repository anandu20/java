// a=[{name:"alan",class:"10",mark:20,sub:"malayalam",},{name:"alan",class:"10",mark:20,sub:"malayalam",},{name:"alan",class:"10",mark:20,sub:"malayalam",},{name:"alan",class:"10",mark:20,sub:"malayalam",}]
// str=JSON.stringify(a)
// console.log(str);

// obj=JSON.parse(str)
// console.log(obj);


b=[];
while(true){
    choice=prompt("1:Add Data \n  2:Display Data\n 3:Edit Data\n 4:Delete Data\n 5:Exit \n Enter your choice");
    if(choice==1){
        data1=prompt("Enter Name")
        data2=promot("Enter Phn")
        b.push({name:data1,phn:data2});

    }
    else if(choice==2){
        str=``;
        for(i=0;i<b.length;i++){
            str+=`${i+1} \tName:${b(i).name} \tphn:${b(i).phn}`
        }
        alert(str)
    }
    else if(choice==3){
        str=``;
        for(i=0;i<b.length;i++){
            str+=`${i+1} \tName:${b(i).name} \tphn:${b(i).phn}`
        }
        inp=prompt(str+"Enter the index number");
        inp1=prompt("enter the Number");
        inp2=prompt("Enter the phn Number");
        b[inp-1].name=inp1;
        b[inp-1].phn=inp2;
    }
    else if(choice==4){
        str=``;
        for(i=0;i<b.length;i++){
            str+=`${i+1} \tName:${b(i).name} \tphn:${b(i).phn}`
        }
        ans=prompt(str+"Enter the index number");
        b.splice(b.indexOf(ans-1),1);
    }
    else if(choice==5){
        break;
    } 
    else{
        alert("invalid choice")
    }

}