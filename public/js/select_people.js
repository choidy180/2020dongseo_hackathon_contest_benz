const man_1 = ['맨투맨','슬랙스','코트','구두','man_1']
const man_2 = ['맨투맨','청바지','아우터','운동화','man_2']
const man_3 = ['후드','청바지','아우터','운동화','man_3']
const man_4 = ['맨투맨','청바지','아우터','스니커즈','man_4']
const man_5 = ['반팔','청바지','아우터','운동화','man_5']
const man_summer_1 = ['반팔','반바지','아우터','슬리퍼','man_summer_1']
const man_summer_3 = ['셔츠','반바지','아우터','슬리퍼','man_summer_3']
const man_winter_1 = ['맨투맨','슬랙스','패딩','운동화','man_winter_1']
const man_winter_2 = ['맨투맨','청바지','패딩','운동화','man_winter_2']

const woman_1=["블라우스","롱스커트","아우터","구두","woman_1"]
const woman_2=["니트","미니스커트","아우터","부츠","woman_2"]
const woman_3=["맨투맨","청바지","코트","스니커즈","woman_3"]
const woman_4=["블라우스","","아우터","부츠","woman_4"]
const woman_5=["블라우스","롱스커트","아우터","스니커즈","woman_5"]
const woman_winter_1=["니트","","패딩","부츠","woman_winter_1"]
const woman_summer_1=["반팔","반바지","아우터","스니커즈","woman_summer_1"]
const woman_summer_2=["민소매","반바지","아우터","스니커즈","woman_summer_2"]

const test_button2 = document.getElementById('target');
const select_sex2 = document.getElementById('select_sex');
const select_top2 = document.getElementById('select_top');
const select_bottom2 = document.getElementById('select_bottom');
const select_outer2 = document.getElementById('select_outer');
const select_shoes2 = document.getElementById('select_shoes');

test_button2.addEventListener('click',function(){
    console.log("ㅎㅇ")
    const choice_style = [select_top2.value, select_bottom2.value, select_outer2.value, select_shoes2.value,];
    const man_list =[man_1,man_2,man_3,man_4,man_5,man_summer_1,man_summer_3, man_winter_1,man_winter_2];
    const woman_list = [woman_1, woman_2, woman_3, woman_4, woman_5, woman_winter_1, woman_summer_1, woman_summer_2];
    const man_score_4 =[]
    const man_score_3 =[]
    const man_score_2 =[]
    const man_score_1 =[]
    const man_score_0 =[]
    const woman_score_4 =[]
    const woman_score_3 =[]
    const woman_score_2 =[]
    const woman_score_1 =[]
    const woman_score_0 =[]
    for (var i =0; i < man_list.length; i++){
        var conut = 0;
        for( var index =0; index < 4; index++){
            if(man_list[i][index] == choice_style[index]){
                conut++;
            }
        }
        if (conut == 0 ){
            man_score_0.push(man_list[i][4]);
        }
        if (conut == 1 ){
            man_score_1.push(man_list[i][4]);
        }
        if (conut == 2 ){
            man_score_2.push(man_list[i][4]);
        }
        if (conut == 3 ){
            man_score_3.push(man_list[i][4]);
        }
        if (conut == 4 ){
            man_score_4.push(man_list[i][4]);
        }
    }
    if(man_score_4[0] != undefined){
        document.getElementById('left_stylist_box_img').src="man/"+man_score_4[0]+'.png';

    }
    else if(man_score_3[0] != undefined){
        document.getElementById('left_stylist_box_img').src="man/"+man_score_3[0]+'.png';

    }  
    else if(man_score_2[0] != undefined){
        document.getElementById('left_stylist_box_img').src="man/"+man_score_2[0]+'.png';

    }  
    else if(man_score_1[0] != undefined){
        document.getElementById('left_stylist_box_img').src="man/"+man_score_1[0]+'.png';

    }
    else if(man_score_0[0] != undefined){
        document.getElementById('left_stylist_box_img').src="man/"+man_score_0[0]+'.png';

    } 
    
    for (var i =0; i < woman_list.length; i++){
        var conut = 0;
        for( var index =0; index < 4; index++){
            if(woman_list[i][index] == choice_style[index]){
                conut++;
            }
        }
        if (conut == 0 ){
            woman_score_0.push(woman_list[i][4]);
        }
        if (conut == 1 ){
            woman_score_1.push(woman_list[i][4]);
        }
        if (conut == 2 ){
            woman_score_2.push(woman_list[i][4]);
        }
        if (conut == 3 ){
            woman_score_3.push(woman_list[i][4]);
        }
        if (conut == 4 ){
            woman_score_4.push(woman_list[i][4]);
        }
    }
    console.log(woman_score_2);
    if(woman_score_4[0] != undefined){
        document.getElementById('right_stylist_box_img').src="woman/"+woman_score_4[0]+'.png';
        return;
    }
    if(woman_score_3[0] != undefined){
        document.getElementById('right_stylist_box_img').src="woman/"+woman_score_3[0]+'.png';
        return;
    }  
    if(woman_score_2[0] != undefined){
        document.getElementById('right_stylist_box_img').src="woman/"+woman_score_2[0]+'.png';
        return;
    }  
    if(woman_score_1[0] != undefined){
        document.getElementById('right_stylist_box_img').src="woman/"+woman_score_1[0]+'.png';
        return;
    }
    if(woman_score_0[0] != undefined){
        document.getElementById('right_stylist_box_img').src="woman/"+woman_score_0[0]+'.png';
        return;
    }
})
