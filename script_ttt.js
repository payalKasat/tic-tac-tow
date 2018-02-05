/**
 * Created by ashwi on 11/17/2016.
 */

var cell_click = true;
var array =[];
var player1_image_array = [];
var player2_image_array = [];
var player3_image_array = [];
var player1 = false;
var player2 =false;
var player3 = false;
var counter = 0;

$(document).ready(function(){

    choose_game_option();        //calling choose_player function
    //win_condition();        //calling win_condition function
    restart_game();


});

function choose_game_option(){              //you can choose game option in this function, one modal coming up with 2 game options
    $('.game-area2').hide();
    $('.game-area').hide();
    $("#messageModal .modal-body").fadeIn().html("<h4>choose Game option</h4><br>").addClass('text');//modal showing choose game option message
    $("#messageModal").modal('show');   //showing modal

    var game_one = $("<input>").attr({'type':'radio','name':'option'}).addClass('game1');    //game1 radio button created
    var game_two = $("<input>").attr({'type':'radio','name':'option'}).addClass('game2');    //game2 radio button created
    var game1_label = $('<label>').html('<p>game 1 </p><h5>(regular 9 box tic tac toe game)</h5>');        //game1 label created
    var brake = $('<br>');                                                                           //brake tag created
    var game2_label = $('<label>').html('<p>game 2 </p><h5>(16 box tic tac tow game)</h5>');        //game2 label created
    $(".modal-body").append(game1_label,brake,game2_label);         //label and brake tag append to modal body
    game1_label.append(game_one);                                   //radio button append to label 1
    game2_label.append(game_two);                                   //radio button append to label 2
    $('.reset').hide();

    var game1 = $('.game1');
    var game2 = $('.game2');

    $('.game1').click(function () {                         //if click game 1 option, 2 player option model comes up
        choose_player2();                                   //calling choose player 2 function, in that again player option have to choose
    });
    $('.game2').click(function () {                         //if click game 2 option, 3 player option model comes up
        choose_player3();                                   //calling choose player 3 function, in that again player option have to choose
    });
}

function choose_player2(){       //choose player function appending player radio button and name to  modal body(2 player game)
    $('.game-area').show();

    $("#messageModal .modal-body").fadeIn().html("<h4>choose player</h4><br>").addClass('text');        //modal showing choose player message
    $('.modal-footer').html("<h4>Press the start button to begin</h4>");        //modal footer message
    $("#messageModal").modal('show');   //showing modal
    var start_button = $("<button>").addClass('btn btn-success').text('start');     //dynamically start button created
    var player_one = $("<input>").attr({'type':'radio','name':'turn'}).html('<h4>player1</h4>').addClass('player1');    //player1 radio button created
    var player_two = $("<input>").attr({'type':'radio','name':'turn'}).html('<h4>player2</h4>').addClass('player2');    //player2 radio button created
    var pl1_label = $('<label>').html('<p>player1</p>');        //player1 label created
    var pl1_image = $('<img>').attr('src','images/pirate_ttt.jpg').addClass('pl_img');      //player1 image created
    var brake = $('<br>');      //brake tag created
    var pl2_label = $('<label>').html('<p>player2</p>');        //player2 label created
    var pl2_image = $('<img>').attr('src','images/pirate_ttt1.jpg').addClass('pl_img');     //player2 image created
    var goback = $('<button>').addClass('btn btn-default go_back').text('Go back');

    $(".modal-body").append(pl1_label,pl1_image,brake,pl2_label,pl2_image);     //append player 1,2 and there images
    pl1_label.append(player_one);       //append player 1 radio button to player1 label
    pl2_label.append(player_two);       //append player 2 radio button to player2 label
    $(".modal-footer").append(start_button,goback);     //append start button and go back button

    $('.player1').click(function () {       //player1 radio button clicked, player1 font increases and color change
        player2 = true;                     //if player1 clicked, player2 equal to true
        player1 = false;
        $('.player1-symbol,.player1-name').css({'font-size': '150%', 'color': 'red'});
        $('.player2-symbol,.player2-name').css({'font-size': '100%', 'color': 'black'});      //

    });
    $('.player2').click(function () {       //player2 radio button clicked, player1 font increases and color change
        player1 = true;                     //if player2 clicked, player1 equal to true
        player2 = false;
        $('.player2-symbol,.player2-name').css({'font-size': '150%', 'color': 'red'});
        $('.player1-symbol,.player1-name').css({'font-size': '100%', 'color': 'black'});      //
    });
    click_start();      //calling click_start function
    click_goback();     //calling goback function
    game1_box9();
}       //choose player function ends here

function choose_player3(){       //choose player function appending player radio button and name to  modal body(3 player game)
    $('.game-area2').show();

    $("#messageModal .modal-body").fadeIn().html("<h4>choose player</h4><br>").addClass('text');        //modal showing choose player message
    $('.modal-footer').html("<h4>Press the start button to begin</h4>");        //modal footer message
    $("#messageModal").modal('show');   //showing modal
    var start_button = $("<button>").addClass('btn btn-success').text('start');     //dynamically start button created
    var player_one = $("<input>").attr({'type':'radio','name':'turn'}).html('<h4>player1</h4>').addClass('player1');    //player1 radio button created
    var player_two = $("<input>").attr({'type':'radio','name':'turn'}).html('<h4>player2</h4>').addClass('player2');    //player2 radio button created
    var player_three = $("<input>").attr({'type':'radio','name':'turn'}).html('<h4>player3</h4>').addClass('player3');    //player3 radio button created

    var pl1_label = $('<label>').html('<p>player1</p>');        //player1 label created
    var pl1_image = $('<img>').attr('src','images/pirate_ttt.jpg').addClass('pl_img');      //player1 image created dynamically
    var brake = $('<br>');      //brake tag created
    var pl2_label = $('<label>').html('<p>player2</p>');        //player2 label created
    var pl2_image = $('<img>').attr('src','images/pirate_ttt1.jpg').addClass('pl_img');     //player2 image created dynamically
    var brake1 = $('<br>');      //brake tag created
    var pl3_label = $('<label>').html('<p>player3</p>');        //player2 label created
    var pl3_image = $('<img>').attr('src','images/pirate_ttt2.jpg').addClass('pl_img');     //player3 image created dynamically
    var goback = $('<button>').addClass('btn btn-default go_back').text('Go back');
    $(".modal-body").append(pl1_label,pl1_image,brake,pl2_label,pl2_image,brake1,pl3_label,pl3_image);      //append player 1,2,3 and there images
    pl1_label.append(player_one);       //append player 1 radio button to player1 label
    pl2_label.append(player_two);       //append player 2 radio button to player2 label
    pl3_label.append(player_three);     //append player 3 radio button to player3 label
    $(".modal-footer").append(start_button,goback);     //append start button and go back button to model footer

    $('.player1').click(function () {           //player1 radio button clicked, player1 font increases and color change
        player2 = true;                         //and player 2 and 3 equal to true
        player3 = true;
        player1 = false;
        $('.player1-symbol,.player1-name').css({'font-size': '150%', 'color': 'red'});  //css jquery method to increase font and color change
        $('.player3-symbol,.player3-name').css({'font-size': '100%', 'color': 'black'});      //
        $('.player2-symbol,.player2-name').css({'font-size': '100%', 'color': 'black'});      //


    });
    $('.player2').click(function () {           //player2 radio button clicked, player1 font increases and color change
        player1 = true;                         //and player 1 and 3 equal to true
        player3 = true;
        player2 = false;
        $('.player2-symbol,.player2-name').css({'font-size': '150%', 'color': 'red'});  //changing font and color
        $('.player1-symbol,.player1-name').css({'font-size': '100%', 'color': 'black'});      //
        $('.player3-symbol,.player3-name').css({'font-size': '100%', 'color': 'black'});      //

    });
    $('.player3').click(function () {       //player2 radio button clicked, player1 font increases and color change
        player1 = true;                     //and player 1 and 3 equal to true
        player2 = true;
        player3 = false;
        $('.player3-symbol,.player3-name').css({'font-size': '150%', 'color': 'red'});
        $('.player1-symbol,.player1-name').css({'font-size': '100%', 'color': 'black'});      //
        $('.player2-symbol,.player2-name').css({'font-size': '100%', 'color': 'black'});      //

    });
    click_start();      //calling click_start function
    click_goback();     //calling goback function
    game2_box16();

}       //choose player function ends here

function click_start() {        //click start function hiding messageModal and shoeing game board
    $('.btn-success').click(function () {
        $("#messageModal").modal('hide');
    });
}
function click_goback() {       //click goback function going back and calling choose_game_option function
    $('.go_back').click(function () {           //jquery method click go back button
        choose_game_option();               //calling game choose function
        $('.player-list_area >ul li').hide();
        $('.game-area > .game-cell').hide();
        $('.game-area2 > .game-cell').hide();

    });
}

function game1_box9(){

    var player_ul = $("<ul>",{
        id :'player_list'
    });
    var player1_li = $("<li>",{
        id :'player1',
        class :'current_player'
    });
    var player2_li = $("<li>",{
        id :'player2'
    });
    var player1_name = $("<div>").addClass('player1-name').html('player1');
    var player2_name = $("<div>").addClass('player2-name').html('player2');
    var player1_symbol = $("<div>").addClass('player1-symbol').html('X');
    var player2_symbol = $("<div>").addClass('player2-symbol').html('O');


    $('.player-list_area').append(player_ul);
    player_ul.append(player1_li,player2_li);
    player1_li.append(player1_name,player1_symbol);
    player2_li.append(player2_name,player2_symbol);



    var game_cell_1_div = $("<div>",{
        class:'game-cell',
        id: '0'
    });
    var game_cell_2_div = $("<div>",{
        class:'game-cell',
        id: '1'
    });
    var game_cell_3_div = $("<div>",{
        class:'game-cell',
        id: '2'
    });
    var game_cell_4_div = $("<div>",{
        class:'game-cell',
        id: '3'
    });
    var game_cell_5_div = $("<div>",{
        class:'game-cell',
        id: '4'
    });
    var game_cell_6_div = $("<div>",{
        class:'game-cell',
        id: '5'
    });
    var game_cell_7_div = $("<div>",{
        class:'game-cell',
        id: '6'
    });
    var game_cell_8_div = $("<div>",{
        class:'game-cell',
        id: '7'
    });
    var game_cell_9_div = $("<div>",{
        class:'game-cell',
        id: '8'
    });

    //$('.game-area2').hide();
    $('.game-area').append(game_cell_1_div,game_cell_2_div,game_cell_3_div,game_cell_4_div,game_cell_5_div,game_cell_6_div,game_cell_7_div,game_cell_8_div,game_cell_9_div);
    $('.game-cell').click(function(){       //clicking game cell(box)
        box_click(this);        //calling box_click function
    });
}

function game2_box16() {
    var player_ul = $("<ul>",{
        id :'player_list'
    });
    var player1_li = $("<li>",{
        id :'player1',
        class :'current_player'
    });
    var player2_li = $("<li>",{
        id :'player2'
    });
    var player3_li = $("<li>",{
        id :'player3'
    });
    var player1_name = $("<div>").addClass('player1-name').html('player1');
    var player2_name = $("<div>").addClass('player2-name').html('player2');
    var player3_name = $("<div>").addClass('player3-name').html('player3');

    var player1_symbol = $("<div>").addClass('player1-symbol').html('X');
    var player2_symbol = $("<div>").addClass('player2-symbol').html('O');
    var player3_symbol = $("<div>").addClass('player3-symbol').html('T');

    $('.player-list_area').append(player_ul);
    player_ul.append(player1_li,player2_li,player3_li);
    player1_li.append(player1_name,player1_symbol);
    player2_li.append(player2_name,player2_symbol);
    player3_li.append(player3_name,player3_symbol);

    //var game_div = $("<div>", {
    //    class: 'game-area2',
    //    id: 'game-area2'
    //});
    var game_cell_1_div = $("<div>", {
        class: 'game-cell',
        id: '0'
    });
    var game_cell_2_div = $("<div>", {
        class: 'game-cell',
        id: '1'
    });
    var game_cell_3_div = $("<div>", {
        class: 'game-cell',
        id: '2'
    });
    var game_cell_4_div = $("<div>", {
        class: 'game-cell',
        id: '3'
    });
    var game_cell_5_div = $("<div>", {
        class: 'game-cell',
        id: '4'
    });
    var game_cell_6_div = $("<div>", {
        class: 'game-cell',
        id: '5'
    });
    var game_cell_7_div = $("<div>", {
        class: 'game-cell',
        id: '6'
    });
    var game_cell_8_div = $("<div>", {
        class: 'game-cell',
        id: '7'
    });
    var game_cell_9_div = $("<div>", {
        class: 'game-cell',
        id: '8'
    });
    var game_cell_10_div = $("<div>", {
        class: 'game-cell',
        id: '9'
    });
    var game_cell_11_div = $("<div>", {
        class: 'game-cell',
        id: '10'
    });
    var game_cell_12_div = $("<div>", {
        class: 'game-cell',
        id: '11'
    });
    var game_cell_13_div = $("<div>", {
        class: 'game-cell',
        id: '12'
    });
    var game_cell_14_div = $("<div>", {
        class: 'game-cell',
        id: '13'
    });
    var game_cell_15_div = $("<div>", {
        class: 'game-cell',
        id: '14'
    });
    var game_cell_16_div = $("<div>", {
        class: 'game-cell',
        id: '15'
    });
        //$('.game-area').hide();
            //$('.main').append(game_div);

                $('.game-area2').append(game_cell_1_div, game_cell_2_div, game_cell_3_div, game_cell_4_div, game_cell_5_div, game_cell_6_div, game_cell_7_div, game_cell_8_div, game_cell_9_div,game_cell_10_div,game_cell_11_div,game_cell_12_div,game_cell_13_div,game_cell_14_div,game_cell_15_div,game_cell_16_div);
    $('.game-cell').click(function(){       //clicking game cell(box)
        box_click2(this);        //calling box_click function
    });

}

function restart_game(){
    $('.reset_button').click(function(){
                cell_click = true;
                 cell_click = true;
        array =[];
        player1_image_array = [];
        player2_image_array = [];
        player3_image_array = [];
        player1 = false;
        player2 =false;
        player3 = false;
                $('.player-list_area >ul li').hide();
                $('.game-area > .game-cell').hide();
                $('.game-area2 > .game-cell').hide();
                choose_game_option();
        counter =0;

        $('.player-list_area >ul li').hide();
        $('.game-area > .game-cell').hide();
        $('.game-area2 > .game-cell').hide();
        choose_game_option();

    });
}


