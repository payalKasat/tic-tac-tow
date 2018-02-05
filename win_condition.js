/**
 * Created by ashwi on 11/17/2016.
 */
function box_click(element) {               //box click function =, one parameter passed
    var cell_id = parseInt($(element).attr('id'));                //
    if (cell_click == false) {      //condition checking, whether cell is clicked or not
        return;
    }
    else {
        if ($(element).hasClass('lock')) {
            return;
        }
        else {
            if (player1 == false) {       //checking if player 1 is false condition
                $('.player1-symbol,.player1-name').css({'font-size': '100%', 'color': 'black'});      //
                $('.player2-symbol,.player2-name').css({'font-size': '150%', 'color': 'red'});
                player1 = true;
                $(element).html('<img src="images/pirate_ttt.jpg">');
                player1_image_array.push(cell_id);
                $(element).addClass('lock');
                player2 = false;
                +counter++;
                +console.log('counter', counter);
                if (player1_image_array.length >= 3) {
                    win_condition(player1_image_array);
                }
            }
            else if (player2 == false) {
                $('.player2-symbol,.player2-name').css({'font-size': '100%', 'color': 'black'});
                $('.player1-symbol,.player1-name').css({'font-size': '150%', 'color': 'red'});
                player2 = true;
                $(element).html('<img src="images/pirate_ttt1.jpg">');
                player2_image_array.push(cell_id);
                $(element).addClass('lock');
                player1 = false;
                +counter++;
                if (player2_image_array.length >= 3) {
                    win_condition(player2_image_array);
                }
            }
        }
        restart_game();
    }
}
    //store_player_image.push(cell_id);
    function win_condition(player_array) {
        var win_condition_array =[
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2],
            [0,1,2],
            [3,4,5],
            [6,7,8]
        ];
        for(var i =0; i<win_condition_array.length; i++){
            for(var j =0; j < win_condition_array[i].length ; j++){
                if(player_array.indexOf(win_condition_array[i][j]) == -1){
                    break;
                }
            }
            if(j == win_condition_array[i].length){
                if(player1 == true){
                    win_modal('player1 won');
                    console.log('player 1 win');
                }
                else if(player2 == true){
                    win_modal('player2 won');
                    console.log('player 2 win');
                }
                break;
            }
                        if(player_array.indexOf(win_condition_array[i]) != -1){
                            if(counter == 9){
                    +                win_modal('tie');
                    console.log('tie');
                }
            }
        }  //win condition function ends here
    } //box click function ends here

    function box_click2(element) {               //box click function =, one parameter passed
        var cell_id = parseInt($(element).attr('id'));                //
        if (cell_click == false) {      //condition checking, whether cell is clicked or not
            return;
        }
        else {
            if ($(element).hasClass('lock')) {
                return;
            }
            else {
                if (player1 == false) {       //checking if player 1 is false condition
                    $('.player1-symbol,.player1-name').css({'font-size': '100%', 'color': 'black'});      //
                    $('.player2-symbol,.player2-name').css({'font-size': '150%', 'color': 'red'});
                    $('.player3-symbol,.player3-name').css({'font-size': '100%', 'color': 'black'});
                    player1 = true;
                    player3 = null;
                    $(element).html('<img src="images/pirate_ttt.jpg">');
                    player1_image_array.push(cell_id);
                    $(element).addClass('lock');
                    player2 = false;
                    +                counter++;
                    if(player1_image_array.length >=4){
                        win_condition2(player1_image_array);
                    }
                }
                else if (player2 == false) {
                    $('.player2-symbol,.player2-name').css({'font-size': '100%', 'color': 'black'});
                    $('.player1-symbol,.player1-name').css({'font-size': '100%', 'color': 'black'});
                    $('.player3-symbol,.player3-name').css({'font-size': '150%', 'color': 'red'});
                    player2 = true;
                    player1 = null;
                    $(element).html('<img src="images/pirate_ttt1.jpg">');
                    player2_image_array.push(cell_id);
                    $(element).addClass('lock');
                    player3 = false;
                    +                counter++;
                    if(player2_image_array.length >= 4){
                        win_condition2(player2_image_array);
                    }
                }
                else if (player3 == false) {
                    $('.player2-symbol,.player2-name').css({'font-size': '100%', 'color': 'black'});
                    $('.player1-symbol,.player1-name').css({'font-size': '150%', 'color': 'red'});
                    $('.player3-symbol,.player3-name').css({'font-size': '100%', 'color': 'black'});
                    player3 = true;
                    player2 = null;
                    $(element).html('<img src="images/pirate_ttt2.jpg">');
                    player3_image_array.push(cell_id);
                    $(element).addClass('lock');
                    player1 = false;
                    +                counter++;
                    if(player3_image_array.length >= 4){
                        win_condition2(player3_image_array);
                    }
                }
            }
        }
        //store_player_image.push(cell_id);
        function win_condition2(player_array) {
            var win_condition2_array =[
                [0,4,8,12],
                [1,5,9,13],
                [2,6,10,14],
                [3,7,11,15],
                [0,5,10,15],
                [3,6,9,12],
                [0,1,2,3],
                [4,5,6,7],
                [8,9,10,11],
                [12,13,14,15]
            ];
            for(var i =0; i<win_condition2_array.length; i++){
                for(var j =0; j < win_condition2_array[i].length ; j++){
                    if(player_array.indexOf(win_condition2_array[i][j]) == -1){
                        break;
                    }
                }
                if(j == win_condition2_array[i].length){
                    if(player1 == true){
                        win_modal('player1 won');
                        console.log('player 1 win');
                    }
                    else if(player2 == true){
                        win_modal('player2 won');
                        console.log('player 2 win');
                    }
                    else if(player3 == true){
                        win_modal('player3 won');
                        console.log('player 3 win');
                    }
                    break;
                }
                            if(counter == 16){
                                    win_modal('tie');
                                    console.log('tie');
                                }
            }
        }  //win condition function ends here
    } //box click function ends here


    function win_modal(message){
        var restart_button = $("<button>",{
            id :'game-reset',
            class :'btn btn-success reset',
            text : 'Restart'
        });
        $("#messageModal .modal-body").fadeIn().html("<h4>"+message+"</h4><br>").addClass('text');//modal showing choose game option message
        $('.modal-footer').html("<h4>Press the Restart button to begin new game</h4>");        //modal footer message
        $("#messageModal").modal('show');   //showing modal
        $('.modal-footer').append(restart_button);
        restart_game_modal();

    }
    //
    function restart_game_modal(){
        $('.reset').click(function () {
            choose_game_option();
            cell_click = true;
            array = [];
            player1_image_array = [];
            player2_image_array = [];
            player3_image_array = [];
            player1 = false;
            player2 = false;
            player3 = false;
            counter = 0;
            $('.player-list_area >ul li').hide();
            $('.game-area > .game-cell').hide();
            $('.game-area2 > .game-cell').hide();
            choose_game_option();

        });
    }
