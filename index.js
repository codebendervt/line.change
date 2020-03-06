let counter = 1;

function changeColour(){
    
    $("div:nth-child("+counter+")").removeClass("line")
    counter++;
    console.log(counter)
    if(counter <= 3){
        $("div:nth-child("+counter+")").addClass("line")

    }else{
        $("div:nth-child("+counter+")").removeClass("line")
        counter = 0;
        counter ++
        $("div:nth-child("+counter+")").addClass("line")
    }
}