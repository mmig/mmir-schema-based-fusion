(function(){
  var semanticInterpreter = require("semanticInterpreter");
var grammarFunc = function(asr_recognized_text){
  var theGrammarConverterInstance = this;

 
  var _$result = '';
  var _$v_show_imp = {};
  var _$v_close_imp = {};
  var _$info = {};
  var _$contact = {};
  var _$that = {};
  var _$this = {};
  var _$and = {};
  var _$not = {};
  var _$one = {};
  var _$two = {};
  var _$multiple = {};
  var _$exactly = {};
  var _$new = {};
  var _$add = {};
  var _$position = {};
  var _$preposition = {};
  var _$locadverb = {};
  var _$more = {};
  var _$back = {};
  var _$wpaint = {};
  var _$create = {};
  var _$delete = {};
  var _$move = {};
  var _$wchange = {};
  var _$have = {};
  var _$lights = {};
  var _$light = {};
  var _$venue = {};
  var _$black = {};
  var _$white = {};
  var _$red = {};
  var _$orange = {};
  var _$yellow = {};
  var _$green = {};
  var _$blue = {};
  var _$pink = {};
  var _$purple = {};
  var _$wcolor = {};
  var _$wswitch = {};
  var _$wdo = {};
  var _$wdisable = {};
  var _$wenable = {};
  var _$won = {};
  var _$woff = {};
  var _$wall = {};
  var _$pcolor = {};
  var _$plight = {};
  var _$pswitch = {};
  var _$switchlight = {};
  var _$pchangecolor = {};
  var _$paint_it = {};
  var _$move_color = {};
  var _$paddlight = {};
  var _$add_light = {};
  var _$add_two_lights = {};
  var _$pchangeposition = {};
  var _$move_lights = {};
  var _$delete_light = {};
  var _$delete_lights = {};
  var _$show_info = {};
  var _$show_kontakt = {};
  var _$close_info = {};
  var _$back_info = {};


/*
	JS/CC: A LALR(1) Compiler-Compiler written in JavaScript
	Copyright (C) 2007, 2008 by J.M.K S.F. Software Technologies, Jan Max Meyer
	http://www.jmksf.com ++ jscc<-AT->jmksf.com
	
	File:	jscc.html
	Author:	Jan Max Meyer
	Usage:	Modified parser template for the Web Environment Module
			Based on "driver_web.js_" parser template, but NOT in the public domain!
	
	You may use, modify and distribute this software under the terms and conditions
	of the Artistic License. Please see ARTISTIC for more information.

	Driver for the JS/CC Web Environment with integrated HTML parse tree generator!
	
	Features:
	- Parser trace messages
	- Integrated panic-mode error recovery
	- Parse tree construction for the JS/CC web environment
*/

var _dbg_withtrace		= false;
var _dbg_string			= new String();

function __dbg_print( text )
{
	_dbg_string += text + "\n";
}

function __lex( info )
{
	var state		= 0;
	var match		= -1;
	var match_pos	= 0;
	var start		= 0;
	var pos			= info.offset + 1;

	do
	{
		pos--;
		state = 0;
		match = -2;
		start = pos;

		if( info.src.length <= start )
			return 67;

		do
		{

switch( state )
{
	case 0:
		if( info.src.charCodeAt( pos ) == 9 || info.src.charCodeAt( pos ) == 32 ) state = 1;
		else if( info.src.charCodeAt( pos ) == 76 ) state = 47;
		else if( info.src.charCodeAt( pos ) == 97 ) state = 72;
		else if( info.src.charCodeAt( pos ) == 98 ) state = 85;
		else if( info.src.charCodeAt( pos ) == 99 ) state = 92;
		else if( info.src.charCodeAt( pos ) == 100 ) state = 94;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 95;
		else if( info.src.charCodeAt( pos ) == 102 ) state = 96;
		else if( info.src.charCodeAt( pos ) == 104 ) state = 97;
		else if( info.src.charCodeAt( pos ) == 105 ) state = 98;
		else if( info.src.charCodeAt( pos ) == 107 ) state = 99;
		else if( info.src.charCodeAt( pos ) == 108 ) state = 100;
		else if( info.src.charCodeAt( pos ) == 109 ) state = 101;
		else if( info.src.charCodeAt( pos ) == 110 ) state = 102;
		else if( info.src.charCodeAt( pos ) == 111 ) state = 103;
		else if( info.src.charCodeAt( pos ) == 112 ) state = 104;
		else if( info.src.charCodeAt( pos ) == 114 ) state = 105;
		else if( info.src.charCodeAt( pos ) == 115 ) state = 106;
		else if( info.src.charCodeAt( pos ) == 116 ) state = 107;
		else if( info.src.charCodeAt( pos ) == 117 ) state = 108;
		else if( info.src.charCodeAt( pos ) == 118 ) state = 109;
		else if( info.src.charCodeAt( pos ) == 119 ) state = 110;
		else if( info.src.charCodeAt( pos ) == 122 ) state = 111;
		else if( info.src.charCodeAt( pos ) == 126 ) state = 112;
		else if( info.src.charCodeAt( pos ) == 103 ) state = 371;
		else state = -1;
		break;

	case 1:
		state = -1;
		match = 1;
		match_pos = pos;
		break;

	case 2:
		state = -1;
		match = 17;
		match_pos = pos;
		break;

	case 3:
		if( info.src.charCodeAt( pos ) == 108 ) state = 385;
		else if( info.src.charCodeAt( pos ) == 122 ) state = 445;
		else if( info.src.charCodeAt( pos ) == 115 ) state = 593;
		else state = -1;
		match = 44;
		match_pos = pos;
		break;

	case 4:
		if( info.src.charCodeAt( pos ) == 115 ) state = 8;
		else if( info.src.charCodeAt( pos ) == 104 ) state = 154;
		else if( info.src.charCodeAt( pos ) == 118 ) state = 155;
		else if( info.src.charCodeAt( pos ) == 122 ) state = 156;
		else if( info.src.charCodeAt( pos ) == 116 ) state = 492;
		else state = -1;
		match = 18;
		match_pos = pos;
		break;

	case 5:
		if( info.src.charCodeAt( pos ) == 117 ) state = 10;
		else state = -1;
		match = 10;
		match_pos = pos;
		break;

	case 6:
		if( info.src.charCodeAt( pos ) == 101 ) state = 52;
		else state = -1;
		match = 41;
		match_pos = pos;
		break;

	case 7:
		if( info.src.charCodeAt( pos ) == 115 ) state = 195;
		else state = -1;
		match = 45;
		match_pos = pos;
		break;

	case 8:
		if( info.src.charCodeAt( pos ) == 32 ) state = 451;
		else state = -1;
		match = 7;
		match_pos = pos;
		break;

	case 9:
		if( info.src.charCodeAt( pos ) == 101 ) state = 55;
		else state = -1;
		match = 26;
		match_pos = pos;
		break;

	case 10:
		if( info.src.charCodeAt( pos ) == 101 ) state = 56;
		else state = -1;
		match = 14;
		match_pos = pos;
		break;

	case 11:
		state = -1;
		match = 16;
		match_pos = pos;
		break;

	case 12:
		state = -1;
		match = 32;
		match_pos = pos;
		break;

	case 13:
		state = -1;
		match = 39;
		match_pos = pos;
		break;

	case 14:
		state = -1;
		match = 8;
		match_pos = pos;
		break;

	case 15:
		state = -1;
		match = 46;
		match_pos = pos;
		break;

	case 16:
		state = -1;
		match = 36;
		match_pos = pos;
		break;

	case 17:
		state = -1;
		match = 6;
		match_pos = pos;
		break;

	case 18:
		if( info.src.charCodeAt( pos ) == 108 ) state = 482;
		else state = -1;
		match = 34;
		match_pos = pos;
		break;

	case 19:
		state = -1;
		match = 31;
		match_pos = pos;
		break;

	case 20:
		if( info.src.charCodeAt( pos ) == 114 ) state = 240;
		else state = -1;
		match = 4;
		match_pos = pos;
		break;

	case 21:
		if( info.src.charCodeAt( pos ) == 101 ) state = 59;
		else state = -1;
		match = 9;
		match_pos = pos;
		break;

	case 22:
		state = -1;
		match = 28;
		match_pos = pos;
		break;

	case 23:
		if( info.src.charCodeAt( pos ) == 101 ) state = 242;
		else state = -1;
		match = 27;
		match_pos = pos;
		break;

	case 24:
		state = -1;
		match = 38;
		match_pos = pos;
		break;

	case 25:
		if( info.src.charCodeAt( pos ) == 101 ) state = 248;
		else state = -1;
		match = 19;
		match_pos = pos;
		break;

	case 26:
		state = -1;
		match = 11;
		match_pos = pos;
		break;

	case 27:
		state = -1;
		match = 37;
		match_pos = pos;
		break;

	case 28:
		state = -1;
		match = 29;
		match_pos = pos;
		break;

	case 29:
		if( info.src.charCodeAt( pos ) == 101 ) state = 62;
		else state = -1;
		match = 2;
		match_pos = pos;
		break;

	case 30:
		if( info.src.charCodeAt( pos ) == 101 ) state = 258;
		else state = -1;
		match = 5;
		match_pos = pos;
		break;

	case 31:
		state = -1;
		match = 24;
		match_pos = pos;
		break;

	case 32:
		state = -1;
		match = 12;
		match_pos = pos;
		break;

	case 33:
		state = -1;
		match = 21;
		match_pos = pos;
		break;

	case 34:
		if( info.src.charCodeAt( pos ) == 110 ) state = 65;
		else state = -1;
		match = 3;
		match_pos = pos;
		break;

	case 35:
		state = -1;
		match = 30;
		match_pos = pos;
		break;

	case 36:
		state = -1;
		match = 13;
		match_pos = pos;
		break;

	case 37:
		state = -1;
		match = 23;
		match_pos = pos;
		break;

	case 38:
		state = -1;
		match = 33;
		match_pos = pos;
		break;

	case 39:
		state = -1;
		match = 22;
		match_pos = pos;
		break;

	case 40:
		if( info.src.charCodeAt( pos ) == 110 ) state = 69;
		else state = -1;
		match = 40;
		match_pos = pos;
		break;

	case 41:
		state = -1;
		match = 25;
		match_pos = pos;
		break;

	case 42:
		state = -1;
		match = 20;
		match_pos = pos;
		break;

	case 43:
		if( info.src.charCodeAt( pos ) == 110 ) state = 70;
		else state = -1;
		match = 43;
		match_pos = pos;
		break;

	case 44:
		state = -1;
		match = 42;
		match_pos = pos;
		break;

	case 45:
		if( info.src.charCodeAt( pos ) == 110 ) state = 71;
		else state = -1;
		match = 35;
		match_pos = pos;
		break;

	case 46:
		state = -1;
		match = 15;
		match_pos = pos;
		break;

	case 47:
		if( info.src.charCodeAt( pos ) == 97 ) state = 113;
		else state = -1;
		break;

	case 48:
		if( info.src.charCodeAt( pos ) == 102 ) state = 170;
		else state = -1;
		match = 17;
		match_pos = pos;
		break;

	case 49:
		state = -1;
		match = 44;
		match_pos = pos;
		break;

	case 50:
		state = -1;
		match = 18;
		match_pos = pos;
		break;

	case 51:
		if( info.src.charCodeAt( pos ) == 101 ) state = 75;
		else if( info.src.charCodeAt( pos ) == 115 ) state = 87;
		else if( info.src.charCodeAt( pos ) == 105 ) state = 450;
		else state = -1;
		match = 10;
		match_pos = pos;
		break;

	case 52:
		state = -1;
		match = 41;
		match_pos = pos;
		break;

	case 53:
		state = -1;
		match = 45;
		match_pos = pos;
		break;

	case 54:
		state = -1;
		match = 7;
		match_pos = pos;
		break;

	case 55:
		state = -1;
		match = 26;
		match_pos = pos;
		break;

	case 56:
		state = -1;
		match = 14;
		match_pos = pos;
		break;

	case 57:
		state = -1;
		match = 34;
		match_pos = pos;
		break;

	case 58:
		state = -1;
		match = 4;
		match_pos = pos;
		break;

	case 59:
		if( info.src.charCodeAt( pos ) == 115 ) state = 79;
		else state = -1;
		match = 9;
		match_pos = pos;
		break;

	case 60:
		if( info.src.charCodeAt( pos ) == 101 ) state = 90;
		else state = -1;
		match = 28;
		match_pos = pos;
		break;

	case 61:
		state = -1;
		match = 27;
		match_pos = pos;
		break;

	case 62:
		state = -1;
		match = 2;
		match_pos = pos;
		break;

	case 63:
		state = -1;
		match = 5;
		match_pos = pos;
		break;

	case 64:
		if( info.src.charCodeAt( pos ) == 116 ) state = 33;
		else state = -1;
		match = 21;
		match_pos = pos;
		break;

	case 65:
		state = -1;
		match = 3;
		match_pos = pos;
		break;

	case 66:
		if( info.src.charCodeAt( pos ) == 32 ) state = 312;
		else state = -1;
		match = 13;
		match_pos = pos;
		break;

	case 67:
		if( info.src.charCodeAt( pos ) == 110 ) state = 37;
		else state = -1;
		match = 23;
		match_pos = pos;
		break;

	case 68:
		if( info.src.charCodeAt( pos ) == 110 ) state = 39;
		else state = -1;
		match = 22;
		match_pos = pos;
		break;

	case 69:
		state = -1;
		match = 40;
		match_pos = pos;
		break;

	case 70:
		state = -1;
		match = 43;
		match_pos = pos;
		break;

	case 71:
		if( info.src.charCodeAt( pos ) == 108 ) state = 471;
		else state = -1;
		match = 35;
		match_pos = pos;
		break;

	case 72:
		if( info.src.charCodeAt( pos ) == 98 || info.src.charCodeAt( pos ) == 109 ) state = 2;
		else if( info.src.charCodeAt( pos ) == 110 ) state = 3;
		else if( info.src.charCodeAt( pos ) == 107 ) state = 114;
		else if( info.src.charCodeAt( pos ) == 108 ) state = 115;
		else if( info.src.charCodeAt( pos ) == 117 ) state = 116;
		else if( info.src.charCodeAt( pos ) == 103 ) state = 373;
		else state = -1;
		break;

	case 73:
		if( info.src.charCodeAt( pos ) == 109 ) state = 2;
		else if( info.src.charCodeAt( pos ) == 114 ) state = 86;
		else state = -1;
		match = 17;
		match_pos = pos;
		break;

	case 74:
		if( info.src.charCodeAt( pos ) == 104 ) state = 227;
		else state = -1;
		match = 18;
		match_pos = pos;
		break;

	case 75:
		state = -1;
		match = 10;
		match_pos = pos;
		break;

	case 76:
		if( info.src.charCodeAt( pos ) == 101 ) state = 52;
		else state = -1;
		match = 41;
		match_pos = pos;
		break;

	case 77:
		if( info.src.charCodeAt( pos ) == 115 ) state = 198;
		else state = -1;
		match = 7;
		match_pos = pos;
		break;

	case 78:
		if( info.src.charCodeAt( pos ) == 115 ) state = 58;
		else state = -1;
		match = 4;
		match_pos = pos;
		break;

	case 79:
		state = -1;
		match = 9;
		match_pos = pos;
		break;

	case 80:
		if( info.src.charCodeAt( pos ) == 101 ) state = 242;
		else state = -1;
		match = 28;
		match_pos = pos;
		break;

	case 81:
		if( info.src.charCodeAt( pos ) == 115 ) state = 61;
		else state = -1;
		match = 27;
		match_pos = pos;
		break;

	case 82:
		if( info.src.charCodeAt( pos ) == 112 ) state = 551;
		else state = -1;
		match = 5;
		match_pos = pos;
		break;

	case 83:
		if( info.src.charCodeAt( pos ) == 101 ) state = 91;
		else state = -1;
		match = 3;
		match_pos = pos;
		break;

	case 84:
		state = -1;
		match = 35;
		match_pos = pos;
		break;

	case 85:
		if( info.src.charCodeAt( pos ) == 101 ) state = 117;
		else if( info.src.charCodeAt( pos ) == 108 ) state = 118;
		else if( info.src.charCodeAt( pos ) == 114 ) state = 119;
		else state = -1;
		break;

	case 86:
		if( info.src.charCodeAt( pos ) == 126 ) state = 572;
		else state = -1;
		match = 17;
		match_pos = pos;
		break;

	case 87:
		if( info.src.charCodeAt( pos ) == 99 ) state = 595;
		else state = -1;
		match = 10;
		match_pos = pos;
		break;

	case 88:
		if( info.src.charCodeAt( pos ) == 114 ) state = 54;
		else if( info.src.charCodeAt( pos ) == 115 ) state = 552;
		else state = -1;
		match = 7;
		match_pos = pos;
		break;

	case 89:
		if( info.src.charCodeAt( pos ) == 101 ) state = 197;
		else state = -1;
		match = 4;
		match_pos = pos;
		break;

	case 90:
		if( info.src.charCodeAt( pos ) == 110 ) state = 61;
		else state = -1;
		match = 28;
		match_pos = pos;
		break;

	case 91:
		if( info.src.charCodeAt( pos ) == 110 ) state = 65;
		else state = -1;
		match = 3;
		match_pos = pos;
		break;

	case 92:
		if( info.src.charCodeAt( pos ) == 104 ) state = 120;
		else state = -1;
		break;

	case 93:
		if( info.src.charCodeAt( pos ) == 114 ) state = 2;
		else if( info.src.charCodeAt( pos ) == 103 ) state = 333;
		else state = -1;
		match = 17;
		match_pos = pos;
		break;

	case 94:
		if( info.src.charCodeAt( pos ) == 97 ) state = 4;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 121;
		else if( info.src.charCodeAt( pos ) == 105 ) state = 122;
		else if( info.src.charCodeAt( pos ) == 111 ) state = 123;
		else if( info.src.charCodeAt( pos ) == 117 ) state = 124;
		else if( info.src.charCodeAt( pos ) == 114 ) state = 374;
		else state = -1;
		break;

	case 95:
		if( info.src.charCodeAt( pos ) == 105 ) state = 125;
		else if( info.src.charCodeAt( pos ) == 114 ) state = 126;
		else if( info.src.charCodeAt( pos ) == 110 ) state = 376;
		else if( info.src.charCodeAt( pos ) == 98 ) state = 436;
		else state = -1;
		break;

	case 96:
		if( info.src.charCodeAt( pos ) == 97 ) state = 372;
		else if( info.src.charCodeAt( pos ) == 111 ) state = 377;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 435;
		else if( info.src.charCodeAt( pos ) == 126 ) state = 579;
		else state = -1;
		break;

	case 97:
		if( info.src.charCodeAt( pos ) == 97 ) state = 129;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 130;
		else if( info.src.charCodeAt( pos ) == 105 ) state = 131;
		else if( info.src.charCodeAt( pos ) == 126 ) state = 606;
		else state = -1;
		break;

	case 98:
		if( info.src.charCodeAt( pos ) == 109 ) state = 2;
		else if( info.src.charCodeAt( pos ) == 110 ) state = 48;
		else state = -1;
		break;

	case 99:
		if( info.src.charCodeAt( pos ) == 101 ) state = 132;
		else if( info.src.charCodeAt( pos ) == 111 ) state = 379;
		else state = -1;
		break;

	case 100:
		if( info.src.charCodeAt( pos ) == 97 ) state = 133;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 134;
		else if( info.src.charCodeAt( pos ) == 105 ) state = 135;
		else if( info.src.charCodeAt( pos ) == 117 ) state = 540;
		else if( info.src.charCodeAt( pos ) == 126 ) state = 587;
		else state = -1;
		break;

	case 101:
		if( info.src.charCodeAt( pos ) == 97 ) state = 136;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 137;
		else state = -1;
		break;

	case 102:
		if( info.src.charCodeAt( pos ) == 101 ) state = 5;
		else if( info.src.charCodeAt( pos ) == 97 ) state = 138;
		else if( info.src.charCodeAt( pos ) == 105 ) state = 384;
		else state = -1;
		break;

	case 103:
		if( info.src.charCodeAt( pos ) == 114 ) state = 139;
		else state = -1;
		break;

	case 104:
		if( info.src.charCodeAt( pos ) == 97 ) state = 378;
		else if( info.src.charCodeAt( pos ) == 111 ) state = 380;
		else if( info.src.charCodeAt( pos ) == 105 ) state = 439;
		else state = -1;
		break;

	case 105:
		if( info.src.charCodeAt( pos ) == 111 ) state = 140;
		else if( info.src.charCodeAt( pos ) == 97 ) state = 382;
		else if( info.src.charCodeAt( pos ) == 126 ) state = 603;
		else state = -1;
		break;

	case 106:
		if( info.src.charCodeAt( pos ) == 111 ) state = 141;
		else if( info.src.charCodeAt( pos ) == 99 ) state = 383;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 437;
		else if( info.src.charCodeAt( pos ) == 116 ) state = 438;
		else state = -1;
		break;

	case 107:
		if( info.src.charCodeAt( pos ) == 117 ) state = 6;
		else if( info.src.charCodeAt( pos ) == 111 ) state = 142;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 440;
		else state = -1;
		break;

	case 108:
		if( info.src.charCodeAt( pos ) == 109 ) state = 2;
		else if( info.src.charCodeAt( pos ) == 110 ) state = 143;
		else state = -1;
		break;

	case 109:
		if( info.src.charCodeAt( pos ) == 101 ) state = 144;
		else if( info.src.charCodeAt( pos ) == 111 ) state = 145;
		else if( info.src.charCodeAt( pos ) == 105 ) state = 472;
		else state = -1;
		break;

	case 110:
		if( info.src.charCodeAt( pos ) == 101 ) state = 146;
		else state = -1;
		break;

	case 111:
		if( info.src.charCodeAt( pos ) == 117 ) state = 73;
		else if( info.src.charCodeAt( pos ) == 119 ) state = 147;
		else if( info.src.charCodeAt( pos ) == 105 ) state = 375;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 381;
		else state = -1;
		break;

	case 112:
		if( info.src.charCodeAt( pos ) == 126 ) state = 148;
		else state = -1;
		break;

	case 113:
		if( info.src.charCodeAt( pos ) == 109 ) state = 149;
		else state = -1;
		break;

	case 114:
		if( info.src.charCodeAt( pos ) == 116 ) state = 441;
		else state = -1;
		break;

	case 115:
		if( info.src.charCodeAt( pos ) == 108 ) state = 150;
		else state = -1;
		break;

	case 116:
		if( info.src.charCodeAt( pos ) == 102 ) state = 2;
		else if( info.src.charCodeAt( pos ) == 115 ) state = 7;
		else state = -1;
		break;

	case 117:
		if( info.src.charCodeAt( pos ) == 115 ) state = 474;
		else if( info.src.charCodeAt( pos ) == 119 ) state = 476;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 490;
		else state = -1;
		break;

	case 118:
		if( info.src.charCodeAt( pos ) == 97 ) state = 151;
		else if( info.src.charCodeAt( pos ) == 126 ) state = 152;
		else state = -1;
		break;

	case 119:
		if( info.src.charCodeAt( pos ) == 97 ) state = 442;
		else state = -1;
		break;

	case 120:
		if( info.src.charCodeAt( pos ) == 105 ) state = 153;
		else if( info.src.charCodeAt( pos ) == 117 ) state = 444;
		else state = -1;
		break;

	case 121:
		if( info.src.charCodeAt( pos ) == 114 ) state = 54;
		else if( info.src.charCodeAt( pos ) == 97 ) state = 157;
		else if( info.src.charCodeAt( pos ) == 116 ) state = 158;
		else state = -1;
		break;

	case 122:
		if( info.src.charCodeAt( pos ) == 101 ) state = 77;
		else state = -1;
		break;

	case 123:
		if( info.src.charCodeAt( pos ) == 99 ) state = 159;
		else if( info.src.charCodeAt( pos ) == 114 ) state = 160;
		else state = -1;
		break;

	case 124:
		if( info.src.charCodeAt( pos ) == 110 ) state = 388;
		else state = -1;
		break;

	case 125:
		if( info.src.charCodeAt( pos ) == 110 ) state = 51;
		else state = -1;
		break;

	case 126:
		if( info.src.charCodeAt( pos ) == 115 ) state = 163;
		else state = -1;
		break;

	case 127:
		if( info.src.charCodeAt( pos ) == 108 ) state = 166;
		else if( info.src.charCodeAt( pos ) == 110 ) state = 389;
		else if( info.src.charCodeAt( pos ) == 114 ) state = 392;
		else if( info.src.charCodeAt( pos ) == 104 ) state = 503;
		else state = -1;
		break;

	case 128:
		if( info.src.charCodeAt( pos ) == 101 ) state = 491;
		else if( info.src.charCodeAt( pos ) == 126 ) state = 588;
		else state = -1;
		break;

	case 129:
		if( info.src.charCodeAt( pos ) == 98 ) state = 9;
		else state = -1;
		break;

	case 130:
		if( info.src.charCodeAt( pos ) == 114 ) state = 50;
		else if( info.src.charCodeAt( pos ) == 108 ) state = 167;
		else state = -1;
		break;

	case 131:
		if( info.src.charCodeAt( pos ) == 101 ) state = 168;
		else if( info.src.charCodeAt( pos ) == 110 ) state = 169;
		else if( info.src.charCodeAt( pos ) == 108 ) state = 391;
		else state = -1;
		break;

	case 132:
		if( info.src.charCodeAt( pos ) == 105 ) state = 171;
		else state = -1;
		break;

	case 133:
		if( info.src.charCodeAt( pos ) == 109 ) state = 172;
		else if( info.src.charCodeAt( pos ) == 110 ) state = 173;
		else state = -1;
		break;

	case 134:
		if( info.src.charCodeAt( pos ) == 117 ) state = 475;
		else state = -1;
		break;

	case 135:
		if( info.src.charCodeAt( pos ) == 108 ) state = 174;
		else if( info.src.charCodeAt( pos ) == 110 ) state = 175;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 393;
		else if( info.src.charCodeAt( pos ) == 99 ) state = 443;
		else state = -1;
		break;

	case 136:
		if( info.src.charCodeAt( pos ) == 99 ) state = 176;
		else if( info.src.charCodeAt( pos ) == 103 ) state = 510;
		else state = -1;
		break;

	case 137:
		if( info.src.charCodeAt( pos ) == 104 ) state = 177;
		else state = -1;
		break;

	case 138:
		if( info.src.charCodeAt( pos ) == 99 ) state = 178;
		else state = -1;
		break;

	case 139:
		if( info.src.charCodeAt( pos ) == 116 ) state = 11;
		else if( info.src.charCodeAt( pos ) == 97 ) state = 448;
		else state = -1;
		break;

	case 140:
		if( info.src.charCodeAt( pos ) == 116 ) state = 12;
		else state = -1;
		break;

	case 141:
		if( info.src.charCodeAt( pos ) == 119 ) state = 398;
		else state = -1;
		break;

	case 142:
		if( info.src.charCodeAt( pos ) == 110 ) state = 13;
		else state = -1;
		break;

	case 143:
		if( info.src.charCodeAt( pos ) == 100 ) state = 14;
		else state = -1;
		break;

	case 144:
		if( info.src.charCodeAt( pos ) == 114 ) state = 185;
		else state = -1;
		break;

	case 145:
		if( ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 110 ) ) state = 2;
		else state = -1;
		break;

	case 146:
		if( info.src.charCodeAt( pos ) == 105 ) state = 187;
		else if( info.src.charCodeAt( pos ) == 114 ) state = 188;
		else if( info.src.charCodeAt( pos ) == 99 ) state = 397;
		else if( info.src.charCodeAt( pos ) == 110 ) state = 453;
		else state = -1;
		break;

	case 147:
		if( info.src.charCodeAt( pos ) == 101 ) state = 191;
		else state = -1;
		break;

	case 148:
		if( info.src.charCodeAt( pos ) == 48 ) state = 386;
		else state = -1;
		break;

	case 149:
		if( info.src.charCodeAt( pos ) == 112 ) state = 192;
		else state = -1;
		break;

	case 150:
		if( info.src.charCodeAt( pos ) == 101 ) state = 15;
		else state = -1;
		break;

	case 151:
		if( info.src.charCodeAt( pos ) == 117 ) state = 16;
		else state = -1;
		break;

	case 152:
		if( info.src.charCodeAt( pos ) == 126 ) state = 446;
		else state = -1;
		break;

	case 153:
		if( info.src.charCodeAt( pos ) == 101 ) state = 196;
		else if( info.src.charCodeAt( pos ) == 108 ) state = 399;
		else state = -1;
		break;

	case 154:
		if( info.src.charCodeAt( pos ) == 105 ) state = 196;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 480;
		else state = -1;
		break;

	case 155:
		if( info.src.charCodeAt( pos ) == 111 ) state = 197;
		else state = -1;
		break;

	case 156:
		if( info.src.charCodeAt( pos ) == 117 ) state = 17;
		else state = -1;
		break;

	case 157:
		if( info.src.charCodeAt( pos ) == 107 ) state = 494;
		else state = -1;
		break;

	case 158:
		if( info.src.charCodeAt( pos ) == 97 ) state = 495;
		else state = -1;
		break;

	case 159:
		if( info.src.charCodeAt( pos ) == 104 ) state = 17;
		else state = -1;
		break;

	case 160:
		if( info.src.charCodeAt( pos ) == 116 ) state = 74;
		else state = -1;
		break;

	case 161:
		if( info.src.charCodeAt( pos ) == 110 ) state = 200;
		else state = -1;
		break;

	case 162:
		if( info.src.charCodeAt( pos ) == 102 ) state = 402;
		else state = -1;
		break;

	case 163:
		if( info.src.charCodeAt( pos ) == 116 ) state = 455;
		else state = -1;
		break;

	case 164:
		if( info.src.charCodeAt( pos ) == 98 ) state = 201;
		else state = -1;
		break;

	case 165:
		if( info.src.charCodeAt( pos ) == 103 ) state = 496;
		else state = -1;
		break;

	case 166:
		if( info.src.charCodeAt( pos ) == 98 ) state = 18;
		else state = -1;
		break;

	case 167:
		if( info.src.charCodeAt( pos ) == 108 ) state = 19;
		else state = -1;
		break;

	case 168:
		if( info.src.charCodeAt( pos ) == 114 ) state = 369;
		else state = -1;
		break;

	case 169:
		if( info.src.charCodeAt( pos ) == 122 ) state = 404;
		else state = -1;
		break;

	case 170:
		if( info.src.charCodeAt( pos ) == 111 ) state = 20;
		else state = -1;
		break;

	case 171:
		if( info.src.charCodeAt( pos ) == 110 ) state = 21;
		else state = -1;
		break;

	case 172:
		if( info.src.charCodeAt( pos ) == 98 ) state = 22;
		else if( info.src.charCodeAt( pos ) == 112 ) state = 60;
		else state = -1;
		break;

	case 173:
		if( info.src.charCodeAt( pos ) == 103 ) state = 23;
		else if( info.src.charCodeAt( pos ) == 100 ) state = 80;
		else state = -1;
		break;

	case 174:
		if( info.src.charCodeAt( pos ) == 97 ) state = 24;
		else state = -1;
		break;

	case 175:
		if( info.src.charCodeAt( pos ) == 100 ) state = 207;
		else state = -1;
		break;

	case 176:
		if( info.src.charCodeAt( pos ) == 104 ) state = 76;
		else state = -1;
		break;

	case 177:
		if( info.src.charCodeAt( pos ) == 114 ) state = 25;
		else state = -1;
		break;

	case 178:
		if( info.src.charCodeAt( pos ) == 104 ) state = 2;
		else state = -1;
		break;

	case 179:
		if( info.src.charCodeAt( pos ) == 104 ) state = 209;
		else state = -1;
		break;

	case 180:
		if( info.src.charCodeAt( pos ) == 114 ) state = 26;
		else state = -1;
		break;

	case 181:
		if( info.src.charCodeAt( pos ) == 107 ) state = 27;
		else state = -1;
		break;

	case 182:
		if( info.src.charCodeAt( pos ) == 105 ) state = 211;
		else state = -1;
		break;

	case 183:
		if( info.src.charCodeAt( pos ) == 109 ) state = 28;
		else state = -1;
		break;

	case 184:
		if( info.src.charCodeAt( pos ) == 108 ) state = 212;
		else if( info.src.charCodeAt( pos ) == 119 ) state = 405;
		else if( info.src.charCodeAt( pos ) == 97 ) state = 454;
		else if( info.src.charCodeAt( pos ) == 105 ) state = 506;
		else if( info.src.charCodeAt( pos ) == 109 ) state = 545;
		else state = -1;
		break;

	case 185:
		if( info.src.charCodeAt( pos ) == 115 ) state = 215;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 400;
		else if( info.src.charCodeAt( pos ) == 119 ) state = 409;
		else if( info.src.charCodeAt( pos ) == 108 ) state = 456;
		else if( info.src.charCodeAt( pos ) == 100 ) state = 512;
		else if( info.src.charCodeAt( pos ) == 126 ) state = 542;
		else state = -1;
		break;

	case 186:
		if( info.src.charCodeAt( pos ) == 108 ) state = 216;
		else state = -1;
		break;

	case 187:
		if( info.src.charCodeAt( pos ) == 110 ) state = 217;
		else if( info.src.charCodeAt( pos ) == 126 ) state = 564;
		else state = -1;
		break;

	case 188:
		if( info.src.charCodeAt( pos ) == 98 || info.src.charCodeAt( pos ) == 100 ) state = 218;
		else state = -1;
		break;

	case 189:
		if( info.src.charCodeAt( pos ) == 103 ) state = 29;
		else state = -1;
		break;

	case 190:
		if( info.src.charCodeAt( pos ) == 109 ) state = 517;
		else state = -1;
		break;

	case 191:
		if( info.src.charCodeAt( pos ) == 105 ) state = 26;
		else state = -1;
		break;

	case 192:
		if( info.src.charCodeAt( pos ) == 114 ) state = 521;
		else state = -1;
		break;

	case 193:
		if( info.src.charCodeAt( pos ) == 116 ) state = 30;
		else state = -1;
		break;

	case 194:
		if( info.src.charCodeAt( pos ) == 118 ) state = 565;
		else state = -1;
		break;

	case 195:
		if( info.src.charCodeAt( pos ) == 99 ) state = 220;
		else state = -1;
		break;

	case 196:
		if( info.src.charCodeAt( pos ) == 110 ) state = 50;
		else state = -1;
		break;

	case 197:
		if( info.src.charCodeAt( pos ) == 110 ) state = 58;
		else state = -1;
		break;

	case 198:
		if( info.src.charCodeAt( pos ) == 101 ) state = 88;
		else state = -1;
		break;

	case 199:
		if( info.src.charCodeAt( pos ) == 101 ) state = 228;
		else state = -1;
		break;

	case 200:
		if( info.src.charCodeAt( pos ) == 115 ) state = 229;
		else state = -1;
		break;

	case 201:
		if( info.src.charCodeAt( pos ) == 101 ) state = 13;
		else if( info.src.charCodeAt( pos ) == 116 ) state = 232;
		else state = -1;
		break;

	case 202:
		if( info.src.charCodeAt( pos ) == 117 ) state = 235;
		else state = -1;
		break;

	case 203:
		if( info.src.charCodeAt( pos ) == 101 ) state = 63;
		else state = -1;
		break;

	case 204:
		if( info.src.charCodeAt( pos ) == 97 ) state = 241;
		else state = -1;
		break;

	case 205:
		if( info.src.charCodeAt( pos ) == 116 ) state = 370;
		else state = -1;
		break;

	case 206:
		if( info.src.charCodeAt( pos ) == 101 ) state = 31;
		else state = -1;
		break;

	case 207:
		if( info.src.charCodeAt( pos ) == 110 ) state = 243;
		else state = -1;
		break;

	case 208:
		if( info.src.charCodeAt( pos ) == 101 ) state = 244;
		else if( info.src.charCodeAt( pos ) == 110 ) state = 245;
		else state = -1;
		break;

	case 209:
		if( info.src.charCodeAt( pos ) == 116 ) state = 79;
		else state = -1;
		break;

	case 210:
		if( info.src.charCodeAt( pos ) == 103 ) state = 249;
		else state = -1;
		break;

	case 211:
		if( info.src.charCodeAt( pos ) == 116 ) state = 497;
		else state = -1;
		break;

	case 212:
		if( info.src.charCodeAt( pos ) == 105 ) state = 414;
		else state = -1;
		break;

	case 213:
		if( info.src.charCodeAt( pos ) == 101 ) state = 14;
		else state = -1;
		break;

	case 214:
		if( info.src.charCodeAt( pos ) == 100 ) state = 252;
		else state = -1;
		break;

	case 215:
		if( info.src.charCodeAt( pos ) == 101 ) state = 417;
		else if( info.src.charCodeAt( pos ) == 99 ) state = 459;
		else state = -1;
		break;

	case 216:
		if( info.src.charCodeAt( pos ) == 101 ) state = 32;
		else state = -1;
		break;

	case 217:
		if( info.src.charCodeAt( pos ) == 114 ) state = 254;
		else if( info.src.charCodeAt( pos ) == 32 ) state = 498;
		else state = -1;
		break;

	case 218:
		if( info.src.charCodeAt( pos ) == 101 ) state = 33;
		else state = -1;
		break;

	case 219:
		if( info.src.charCodeAt( pos ) == 69 ) state = 256;
		else state = -1;
		break;

	case 220:
		if( info.src.charCodeAt( pos ) == 104 ) state = 260;
		else state = -1;
		break;

	case 221:
		if( info.src.charCodeAt( pos ) == 101 ) state = 34;
		else state = -1;
		break;

	case 222:
		if( info.src.charCodeAt( pos ) == 122 ) state = 261;
		else state = -1;
		break;

	case 223:
		if( info.src.charCodeAt( pos ) == 101 ) state = 196;
		else state = -1;
		break;

	case 224:
		if( info.src.charCodeAt( pos ) == 32 ) state = 264;
		else state = -1;
		break;

	case 225:
		if( info.src.charCodeAt( pos ) == 97 ) state = 368;
		else state = -1;
		break;

	case 226:
		if( info.src.charCodeAt( pos ) == 108 ) state = 78;
		else state = -1;
		break;

	case 227:
		if( info.src.charCodeAt( pos ) == 105 ) state = 196;
		else state = -1;
		break;

	case 228:
		if( info.src.charCodeAt( pos ) == 108 ) state = 35;
		else state = -1;
		break;

	case 229:
		if( info.src.charCodeAt( pos ) == 111 ) state = 36;
		else state = -1;
		break;

	case 230:
		if( info.src.charCodeAt( pos ) == 114 ) state = 420;
		else state = -1;
		break;

	case 231:
		if( info.src.charCodeAt( pos ) == 108 ) state = 412;
		else state = -1;
		break;

	case 232:
		if( info.src.charCodeAt( pos ) == 111 ) state = 142;
		else state = -1;
		break;

	case 233:
		if( info.src.charCodeAt( pos ) == 114 ) state = 37;
		else state = -1;
		break;

	case 234:
		if( info.src.charCodeAt( pos ) == 70 ) state = 267;
		else if( info.src.charCodeAt( pos ) == 69 ) state = 582;
		else state = -1;
		break;

	case 235:
		if( info.src.charCodeAt( pos ) == 115 ) state = 268;
		else state = -1;
		break;

	case 236:
		if( info.src.charCodeAt( pos ) == 103 ) state = 33;
		else state = -1;
		break;

	case 237:
		if( info.src.charCodeAt( pos ) == 104 ) state = 36;
		else state = -1;
		break;

	case 238:
		if( info.src.charCodeAt( pos ) == 105 ) state = 196;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 269;
		else state = -1;
		break;

	case 239:
		if( info.src.charCodeAt( pos ) == 102 ) state = 270;
		else state = -1;
		break;

	case 240:
		if( info.src.charCodeAt( pos ) == 109 ) state = 415;
		else state = -1;
		break;

	case 241:
		if( info.src.charCodeAt( pos ) == 107 ) state = 271;
		else state = -1;
		break;

	case 242:
		if( info.src.charCodeAt( pos ) == 110 ) state = 61;
		else state = -1;
		break;

	case 243:
		if( info.src.charCodeAt( pos ) == 101 ) state = 255;
		else state = -1;
		break;

	case 244:
		if( info.src.charCodeAt( pos ) == 114 ) state = 61;
		else state = -1;
		break;

	case 245:
		if( info.src.charCodeAt( pos ) == 97 ) state = 464;
		else state = -1;
		break;

	case 246:
		if( info.src.charCodeAt( pos ) == 70 ) state = 273;
		else state = -1;
		break;

	case 247:
		if( info.src.charCodeAt( pos ) == 116 ) state = 174;
		else state = -1;
		break;

	case 248:
		if( info.src.charCodeAt( pos ) == 114 ) state = 216;
		else state = -1;
		break;

	case 249:
		if( info.src.charCodeAt( pos ) == 101 ) state = 38;
		else state = -1;
		break;

	case 250:
		if( info.src.charCodeAt( pos ) == 116 ) state = 274;
		else state = -1;
		break;

	case 251:
		if( info.src.charCodeAt( pos ) == 98 ) state = 206;
		else state = -1;
		break;

	case 252:
		if( info.src.charCodeAt( pos ) == 111 ) state = 423;
		else state = -1;
		break;

	case 253:
		if( info.src.charCodeAt( pos ) == 98 ) state = 218;
		else state = -1;
		break;

	case 254:
		if( info.src.charCodeAt( pos ) == 111 ) state = 140;
		else state = -1;
		break;

	case 255:
		if( info.src.charCodeAt( pos ) == 114 ) state = 28;
		else state = -1;
		break;

	case 256:
		if( info.src.charCodeAt( pos ) == 52 ) state = 282;
		else state = -1;
		break;

	case 257:
		if( info.src.charCodeAt( pos ) == 99 ) state = 283;
		else state = -1;
		break;

	case 258:
		if( info.src.charCodeAt( pos ) == 110 ) state = 63;
		else state = -1;
		break;

	case 259:
		if( info.src.charCodeAt( pos ) == 110 ) state = 39;
		else state = -1;
		break;

	case 260:
		if( info.src.charCodeAt( pos ) == 97 ) state = 461;
		else state = -1;
		break;

	case 261:
		if( info.src.charCodeAt( pos ) == 101 ) state = 55;
		else state = -1;
		break;

	case 262:
		if( info.src.charCodeAt( pos ) == 69 ) state = 285;
		else state = -1;
		break;

	case 263:
		if( info.src.charCodeAt( pos ) == 101 ) state = 62;
		else state = -1;
		break;

	case 264:
		if( info.src.charCodeAt( pos ) == 110 ) state = 286;
		else state = -1;
		break;

	case 265:
		if( info.src.charCodeAt( pos ) == 118 ) state = 287;
		else state = -1;
		break;

	case 266:
		if( info.src.charCodeAt( pos ) == 100 ) state = 290;
		else state = -1;
		break;

	case 267:
		if( info.src.charCodeAt( pos ) == 67 ) state = 424;
		else state = -1;
		break;

	case 268:
		if( info.src.charCodeAt( pos ) == 111 ) state = 66;
		else state = -1;
		break;

	case 269:
		if( info.src.charCodeAt( pos ) == 114 ) state = 50;
		else state = -1;
		break;

	case 270:
		if( info.src.charCodeAt( pos ) == 126 ) state = 576;
		else state = -1;
		break;

	case 271:
		if( info.src.charCodeAt( pos ) == 116 ) state = 82;
		else state = -1;
		break;

	case 272:
		if( info.src.charCodeAt( pos ) == 101 ) state = 90;
		else state = -1;
		break;

	case 273:
		if( info.src.charCodeAt( pos ) == 54 ) state = 573;
		else state = -1;
		break;

	case 274:
		if( info.src.charCodeAt( pos ) == 101 ) state = 40;
		else state = -1;
		break;

	case 275:
		if( info.src.charCodeAt( pos ) == 115 ) state = 296;
		else state = -1;
		break;

	case 276:
		if( info.src.charCodeAt( pos ) == 114 ) state = 297;
		else state = -1;
		break;

	case 277:
		if( info.src.charCodeAt( pos ) == 122 ) state = 35;
		else state = -1;
		break;

	case 278:
		if( info.src.charCodeAt( pos ) == 105 ) state = 300;
		else state = -1;
		break;

	case 279:
		if( info.src.charCodeAt( pos ) == 122 ) state = 206;
		else state = -1;
		break;

	case 280:
		if( info.src.charCodeAt( pos ) == 108 ) state = 41;
		else state = -1;
		break;

	case 281:
		if( info.src.charCodeAt( pos ) == 114 ) state = 42;
		else state = -1;
		break;

	case 282:
		if( info.src.charCodeAt( pos ) == 126 ) state = 467;
		else state = -1;
		break;

	case 283:
		if( info.src.charCodeAt( pos ) == 104 ) state = 304;
		else state = -1;
		break;

	case 284:
		if( info.src.charCodeAt( pos ) == 110 ) state = 62;
		else state = -1;
		break;

	case 285:
		if( info.src.charCodeAt( pos ) == 52 ) state = 487;
		else state = -1;
		break;

	case 286:
		if( info.src.charCodeAt( pos ) == 111 ) state = 307;
		else state = -1;
		break;

	case 287:
		if( info.src.charCodeAt( pos ) == 105 ) state = 309;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 427;
		else state = -1;
		break;

	case 288:
		if( info.src.charCodeAt( pos ) == 101 ) state = 67;
		else state = -1;
		break;

	case 289:
		if( info.src.charCodeAt( pos ) == 101 ) state = 68;
		else state = -1;
		break;

	case 290:
		if( info.src.charCodeAt( pos ) == 101 ) state = 54;
		else state = -1;
		break;

	case 291:
		if( info.src.charCodeAt( pos ) == 104 ) state = 57;
		else state = -1;
		break;

	case 292:
		if( info.src.charCodeAt( pos ) == 67 ) state = 570;
		else state = -1;
		break;

	case 293:
		if( info.src.charCodeAt( pos ) == 116 ) state = 313;
		else state = -1;
		break;

	case 294:
		if( info.src.charCodeAt( pos ) == 104 ) state = 61;
		else state = -1;
		break;

	case 295:
		if( info.src.charCodeAt( pos ) == 110 ) state = 11;
		else state = -1;
		break;

	case 296:
		if( info.src.charCodeAt( pos ) == 115 ) state = 83;
		else state = -1;
		break;

	case 297:
		if( info.src.charCodeAt( pos ) == 101 ) state = 13;
		else state = -1;
		break;

	case 298:
		if( info.src.charCodeAt( pos ) == 116 ) state = 11;
		else state = -1;
		break;

	case 299:
		if( info.src.charCodeAt( pos ) == 101 ) state = 65;
		else state = -1;
		break;

	case 300:
		if( info.src.charCodeAt( pos ) == 101 ) state = 251;
		else state = -1;
		break;

	case 301:
		if( info.src.charCodeAt( pos ) == 69 ) state = 549;
		else state = -1;
		break;

	case 302:
		if( info.src.charCodeAt( pos ) == 68 ) state = 315;
		else state = -1;
		break;

	case 303:
		if( info.src.charCodeAt( pos ) == 70 ) state = 567;
		else state = -1;
		break;

	case 304:
		if( info.src.charCodeAt( pos ) == 116 ) state = 81;
		else state = -1;
		break;

	case 305:
		if( info.src.charCodeAt( pos ) == 101 ) state = 43;
		else state = -1;
		break;

	case 306:
		if( info.src.charCodeAt( pos ) == 112 ) state = 317;
		else state = -1;
		break;

	case 307:
		if( info.src.charCodeAt( pos ) == 114 ) state = 469;
		else state = -1;
		break;

	case 308:
		if( info.src.charCodeAt( pos ) == 114 ) state = 605;
		else state = -1;
		break;

	case 309:
		if( info.src.charCodeAt( pos ) == 101 ) state = 489;
		else state = -1;
		break;

	case 310:
		if( info.src.charCodeAt( pos ) == 97 ) state = 54;
		else state = -1;
		break;

	case 311:
		if( info.src.charCodeAt( pos ) == 126 ) state = 93;
		else state = -1;
		break;

	case 312:
		if( info.src.charCodeAt( pos ) == 119 ) state = 428;
		else state = -1;
		break;

	case 313:
		if( info.src.charCodeAt( pos ) == 105 ) state = 321;
		else state = -1;
		break;

	case 314:
		if( info.src.charCodeAt( pos ) == 101 ) state = 324;
		else state = -1;
		break;

	case 315:
		if( info.src.charCodeAt( pos ) == 70 ) state = 533;
		else state = -1;
		break;

	case 316:
		if( info.src.charCodeAt( pos ) == 110 ) state = 325;
		else state = -1;
		break;

	case 317:
		if( info.src.charCodeAt( pos ) == 97 ) state = 515;
		else state = -1;
		break;

	case 318:
		if( info.src.charCodeAt( pos ) == 101 ) state = 44;
		else state = -1;
		break;

	case 319:
		if( info.src.charCodeAt( pos ) == 126 ) state = 45;
		else state = -1;
		break;

	case 320:
		if( info.src.charCodeAt( pos ) == 116 ) state = 336;
		else state = -1;
		break;

	case 321:
		if( info.src.charCodeAt( pos ) == 111 ) state = 337;
		else state = -1;
		break;

	case 322:
		if( info.src.charCodeAt( pos ) == 115 ) state = 338;
		else state = -1;
		break;

	case 323:
		if( info.src.charCodeAt( pos ) == 116 ) state = 484;
		else state = -1;
		break;

	case 324:
		if( info.src.charCodeAt( pos ) == 115 ) state = 33;
		else state = -1;
		break;

	case 325:
		if( info.src.charCodeAt( pos ) == 100 ) state = 568;
		else state = -1;
		break;

	case 326:
		if( info.src.charCodeAt( pos ) == 110 ) state = 53;
		else state = -1;
		break;

	case 327:
		if( info.src.charCodeAt( pos ) == 117 ) state = 499;
		else state = -1;
		break;

	case 328:
		if( info.src.charCodeAt( pos ) == 105 ) state = 341;
		else state = -1;
		break;

	case 329:
		if( info.src.charCodeAt( pos ) == 101 ) state = 342;
		else state = -1;
		break;

	case 330:
		if( info.src.charCodeAt( pos ) == 98 ) state = 223;
		else state = -1;
		break;

	case 331:
		if( info.src.charCodeAt( pos ) == 110 ) state = 49;
		else state = -1;
		break;

	case 332:
		if( info.src.charCodeAt( pos ) == 98 ) state = 343;
		else state = -1;
		break;

	case 333:
		if( info.src.charCodeAt( pos ) == 101 ) state = 46;
		else state = -1;
		break;

	case 334:
		if( info.src.charCodeAt( pos ) == 101 ) state = 36;
		else state = -1;
		break;

	case 335:
		if( info.src.charCodeAt( pos ) == 104 ) state = 344;
		else state = -1;
		break;

	case 336:
		if( info.src.charCodeAt( pos ) == 116 ) state = 263;
		else state = -1;
		break;

	case 337:
		if( info.src.charCodeAt( pos ) == 110 ) state = 89;
		else state = -1;
		break;

	case 338:
		if( info.src.charCodeAt( pos ) == 99 ) state = 346;
		else state = -1;
		break;

	case 339:
		if( info.src.charCodeAt( pos ) == 126 ) state = 19;
		else state = -1;
		break;

	case 340:
		if( info.src.charCodeAt( pos ) == 116 ) state = 350;
		else state = -1;
		break;

	case 341:
		if( info.src.charCodeAt( pos ) == 115 ) state = 63;
		else state = -1;
		break;

	case 342:
		if( info.src.charCodeAt( pos ) == 110 ) state = 44;
		else state = -1;
		break;

	case 343:
		if( info.src.charCodeAt( pos ) == 101 ) state = 64;
		else if( info.src.charCodeAt( pos ) == 117 ) state = 433;
		else state = -1;
		break;

	case 344:
		if( info.src.charCodeAt( pos ) == 98 ) state = 523;
		else state = -1;
		break;

	case 345:
		if( info.src.charCodeAt( pos ) == 111 ) state = 258;
		else state = -1;
		break;

	case 346:
		if( info.src.charCodeAt( pos ) == 104 ) state = 288;
		else state = -1;
		break;

	case 347:
		if( info.src.charCodeAt( pos ) == 105 ) state = 432;
		else state = -1;
		break;

	case 348:
		if( info.src.charCodeAt( pos ) == 110 ) state = 325;
		else state = -1;
		break;

	case 349:
		if( info.src.charCodeAt( pos ) == 99 ) state = 351;
		else state = -1;
		break;

	case 350:
		if( info.src.charCodeAt( pos ) == 110 ) state = 353;
		else state = -1;
		break;

	case 351:
		if( info.src.charCodeAt( pos ) == 107 ) state = 42;
		else state = -1;
		break;

	case 352:
		if( info.src.charCodeAt( pos ) == 101 ) state = 41;
		else state = -1;
		break;

	case 353:
		if( info.src.charCodeAt( pos ) == 101 ) state = 358;
		else state = -1;
		break;

	case 354:
		if( info.src.charCodeAt( pos ) == 99 ) state = 359;
		else state = -1;
		break;

	case 355:
		if( info.src.charCodeAt( pos ) == 103 ) state = 13;
		else state = -1;
		break;

	case 356:
		if( info.src.charCodeAt( pos ) == 105 ) state = 360;
		else state = -1;
		break;

	case 357:
		if( info.src.charCodeAt( pos ) == 104 ) state = 12;
		else state = -1;
		break;

	case 358:
		if( info.src.charCodeAt( pos ) == 114 ) state = 63;
		else state = -1;
		break;

	case 359:
		if( info.src.charCodeAt( pos ) == 104 ) state = 16;
		else state = -1;
		break;

	case 360:
		if( info.src.charCodeAt( pos ) == 110 ) state = 272;
		else state = -1;
		break;

	case 361:
		if( info.src.charCodeAt( pos ) == 104 ) state = 84;
		else state = -1;
		break;

	case 362:
		if( info.src.charCodeAt( pos ) == 103 ) state = 363;
		else state = -1;
		break;

	case 363:
		if( info.src.charCodeAt( pos ) == 101 ) state = 364;
		else state = -1;
		break;

	case 364:
		if( info.src.charCodeAt( pos ) == 110 ) state = 46;
		else state = -1;
		break;

	case 365:
		if( info.src.charCodeAt( pos ) == 98 ) state = 366;
		else state = -1;
		break;

	case 366:
		if( info.src.charCodeAt( pos ) == 101 ) state = 367;
		else state = -1;
		break;

	case 367:
		if( info.src.charCodeAt( pos ) == 110 ) state = 54;
		else state = -1;
		break;

	case 368:
		if( info.src.charCodeAt( pos ) == 32 ) state = 421;
		else state = -1;
		match = 7;
		match_pos = pos;
		break;

	case 369:
		if( info.src.charCodeAt( pos ) == 104 ) state = 238;
		else state = -1;
		match = 18;
		match_pos = pos;
		break;

	case 370:
		if( info.src.charCodeAt( pos ) == 101 ) state = 244;
		else state = -1;
		match = 28;
		match_pos = pos;
		break;

	case 371:
		if( info.src.charCodeAt( pos ) == 101 ) state = 127;
		else if( info.src.charCodeAt( pos ) == 108 ) state = 128;
		else if( info.src.charCodeAt( pos ) == 114 ) state = 597;
		else state = -1;
		break;

	case 372:
		if( info.src.charCodeAt( pos ) == 114 ) state = 164;
		else state = -1;
		break;

	case 373:
		if( info.src.charCodeAt( pos ) == 101 ) state = 473;
		else state = -1;
		break;

	case 374:
		if( info.src.charCodeAt( pos ) == 126 ) state = 580;
		else state = -1;
		break;

	case 375:
		if( info.src.charCodeAt( pos ) == 109 ) state = 190;
		else state = -1;
		break;

	case 376:
		if( info.src.charCodeAt( pos ) == 116 ) state = 162;
		else state = -1;
		break;

	case 377:
		if( info.src.charCodeAt( pos ) == 108 ) state = 165;
		else state = -1;
		break;

	case 378:
		if( info.src.charCodeAt( pos ) == 97 ) state = 180;
		else state = -1;
		break;

	case 379:
		if( info.src.charCodeAt( pos ) == 110 ) state = 449;
		else state = -1;
		break;

	case 380:
		if( info.src.charCodeAt( pos ) == 115 ) state = 182;
		else state = -1;
		break;

	case 381:
		if( info.src.charCodeAt( pos ) == 105 ) state = 189;
		else state = -1;
		break;

	case 382:
		if( info.src.charCodeAt( pos ) == 117 ) state = 183;
		else state = -1;
		break;

	case 383:
		if( info.src.charCodeAt( pos ) == 104 ) state = 184;
		else state = -1;
		break;

	case 384:
		if( info.src.charCodeAt( pos ) == 99 ) state = 179;
		else state = -1;
		break;

	case 385:
		if( info.src.charCodeAt( pos ) == 101 ) state = 543;
		else state = -1;
		break;

	case 386:
		if( info.src.charCodeAt( pos ) == 48 ) state = 219;
		else state = -1;
		break;

	case 387:
		if( info.src.charCodeAt( pos ) == 112 ) state = 208;
		else state = -1;
		break;

	case 388:
		if( info.src.charCodeAt( pos ) == 107 ) state = 199;
		else state = -1;
		break;

	case 389:
		if( info.src.charCodeAt( pos ) == 97 ) state = 202;
		else state = -1;
		break;

	case 390:
		if( info.src.charCodeAt( pos ) == 110 ) state = 481;
		else state = -1;
		break;

	case 391:
		if( info.src.charCodeAt( pos ) == 102 ) state = 203;
		else state = -1;
		break;

	case 392:
		if( info.src.charCodeAt( pos ) == 116 ) state = 505;
		else state = -1;
		break;

	case 393:
		if( info.src.charCodeAt( pos ) == 98 ) state = 206;
		else state = -1;
		break;

	case 394:
		if( info.src.charCodeAt( pos ) == 103 ) state = 206;
		else state = -1;
		break;

	case 395:
		if( info.src.charCodeAt( pos ) == 122 ) state = 206;
		else state = -1;
		break;

	case 396:
		if( info.src.charCodeAt( pos ) == 100 ) state = 221;
		else state = -1;
		break;

	case 397:
		if( info.src.charCodeAt( pos ) == 104 ) state = 403;
		else state = -1;
		break;

	case 398:
		if( info.src.charCodeAt( pos ) == 105 ) state = 213;
		else state = -1;
		break;

	case 399:
		if( info.src.charCodeAt( pos ) == 108 ) state = 223;
		else state = -1;
		break;

	case 400:
		if( info.src.charCodeAt( pos ) == 114 ) state = 253;
		else state = -1;
		break;

	case 401:
		if( info.src.charCodeAt( pos ) == 99 ) state = 237;
		else state = -1;
		break;

	case 402:
		if( info.src.charCodeAt( pos ) == 101 ) state = 230;
		else state = -1;
		break;

	case 403:
		if( info.src.charCodeAt( pos ) == 115 ) state = 485;
		else state = -1;
		break;

	case 404:
		if( info.src.charCodeAt( pos ) == 117 ) state = 239;
		else state = -1;
		break;

	case 405:
		if( info.src.charCodeAt( pos ) == 97 ) state = 411;
		else state = -1;
		break;

	case 406:
		if( info.src.charCodeAt( pos ) == 110 ) state = 247;
		else state = -1;
		break;

	case 407:
		if( info.src.charCodeAt( pos ) == 103 ) state = 500;
		else state = -1;
		break;

	case 408:
		if( info.src.charCodeAt( pos ) == 116 ) state = 272;
		else state = -1;
		break;

	case 409:
		if( info.src.charCodeAt( pos ) == 105 ) state = 483;
		else state = -1;
		break;

	case 410:
		if( info.src.charCodeAt( pos ) == 104 ) state = 263;
		else state = -1;
		break;

	case 411:
		if( info.src.charCodeAt( pos ) == 114 ) state = 277;
		else state = -1;
		break;

	case 412:
		if( info.src.charCodeAt( pos ) == 108 ) state = 289;
		else state = -1;
		break;

	case 413:
		if( info.src.charCodeAt( pos ) == 115 ) state = 422;
		else state = -1;
		break;

	case 414:
		if( info.src.charCodeAt( pos ) == 101 ) state = 275;
		else state = -1;
		break;

	case 415:
		if( info.src.charCodeAt( pos ) == 97 ) state = 293;
		else state = -1;
		break;

	case 416:
		if( info.src.charCodeAt( pos ) == 70 ) state = 547;
		else state = -1;
		break;

	case 417:
		if( info.src.charCodeAt( pos ) == 116 ) state = 279;
		else state = -1;
		break;

	case 418:
		if( info.src.charCodeAt( pos ) == 111 ) state = 295;
		else state = -1;
		break;

	case 419:
		if( info.src.charCodeAt( pos ) == 99 ) state = 291;
		else state = -1;
		break;

	case 420:
		if( info.src.charCodeAt( pos ) == 110 ) state = 288;
		else state = -1;
		break;

	case 421:
		if( info.src.charCodeAt( pos ) == 100 ) state = 308;
		else state = -1;
		break;

	case 422:
		if( info.src.charCodeAt( pos ) == 115 ) state = 299;
		else state = -1;
		break;

	case 423:
		if( info.src.charCodeAt( pos ) == 114 ) state = 298;
		else state = -1;
		break;

	case 424:
		if( info.src.charCodeAt( pos ) == 126 ) state = 311;
		else state = -1;
		break;

	case 425:
		if( info.src.charCodeAt( pos ) == 104 ) state = 306;
		else state = -1;
		break;

	case 426:
		if( info.src.charCodeAt( pos ) == 116 ) state = 314;
		else state = -1;
		break;

	case 427:
		if( info.src.charCodeAt( pos ) == 114 ) state = 318;
		else state = -1;
		break;

	case 428:
		if( info.src.charCodeAt( pos ) == 105 ) state = 334;
		else state = -1;
		break;

	case 429:
		if( info.src.charCodeAt( pos ) == 101 ) state = 326;
		else state = -1;
		break;

	case 430:
		if( info.src.charCodeAt( pos ) == 115 ) state = 345;
		else state = -1;
		break;

	case 431:
		if( info.src.charCodeAt( pos ) == 105 ) state = 354;
		else state = -1;
		break;

	case 432:
		if( info.src.charCodeAt( pos ) == 99 ) state = 357;
		else state = -1;
		break;

	case 433:
		if( info.src.charCodeAt( pos ) == 110 ) state = 355;
		else state = -1;
		break;

	case 434:
		if( info.src.charCodeAt( pos ) == 99 ) state = 361;
		else state = -1;
		break;

	case 435:
		if( info.src.charCodeAt( pos ) == 114 ) state = 390;
		else state = -1;
		break;

	case 436:
		if( info.src.charCodeAt( pos ) == 101 ) state = 161;
		else state = -1;
		break;

	case 437:
		if( info.src.charCodeAt( pos ) == 116 ) state = 395;
		else state = -1;
		break;

	case 438:
		if( info.src.charCodeAt( pos ) == 97 ) state = 478;
		else state = -1;
		break;

	case 439:
		if( info.src.charCodeAt( pos ) == 110 ) state = 181;
		else state = -1;
		break;

	case 440:
		if( info.src.charCodeAt( pos ) == 115 ) state = 140;
		else state = -1;
		break;

	case 441:
		if( info.src.charCodeAt( pos ) == 105 ) state = 194;
		else state = -1;
		break;

	case 442:
		if( info.src.charCodeAt( pos ) == 117 ) state = 544;
		else state = -1;
		break;

	case 443:
		if( info.src.charCodeAt( pos ) == 104 ) state = 205;
		else state = -1;
		break;

	case 444:
		if( info.src.charCodeAt( pos ) == 99 ) state = 447;
		else state = -1;
		break;

	case 445:
		if( info.src.charCodeAt( pos ) == 101 ) state = 555;
		else state = -1;
		break;

	case 446:
		if( info.src.charCodeAt( pos ) == 48 ) state = 504;
		else state = -1;
		break;

	case 447:
		if( info.src.charCodeAt( pos ) == 107 ) state = 224;
		else state = -1;
		break;

	case 448:
		if( info.src.charCodeAt( pos ) == 110 ) state = 210;
		else state = -1;
		break;

	case 449:
		if( info.src.charCodeAt( pos ) == 116 ) state = 204;
		else state = -1;
		break;

	case 450:
		if( info.src.charCodeAt( pos ) == 103 ) state = 216;
		else state = -1;
		break;

	case 451:
		if( info.src.charCodeAt( pos ) == 100 ) state = 225;
		else state = -1;
		break;

	case 452:
		if( info.src.charCodeAt( pos ) == 104 ) state = 408;
		else state = -1;
		break;

	case 453:
		if( info.src.charCodeAt( pos ) == 105 ) state = 407;
		else state = -1;
		break;

	case 454:
		if( info.src.charCodeAt( pos ) == 108 ) state = 250;
		else state = -1;
		break;

	case 455:
		if( info.src.charCodeAt( pos ) == 101 ) state = 231;
		else state = -1;
		break;

	case 456:
		if( info.src.charCodeAt( pos ) == 97 ) state = 413;
		else state = -1;
		break;

	case 457:
		if( info.src.charCodeAt( pos ) == 110 ) state = 266;
		else state = -1;
		break;

	case 458:
		if( info.src.charCodeAt( pos ) == 105 ) state = 265;
		else state = -1;
		break;

	case 459:
		if( info.src.charCodeAt( pos ) == 104 ) state = 278;
		else state = -1;
		break;

	case 460:
		if( info.src.charCodeAt( pos ) == 114 ) state = 253;
		else state = -1;
		break;

	case 461:
		if( info.src.charCodeAt( pos ) == 108 ) state = 468;
		else state = -1;
		break;

	case 462:
		if( info.src.charCodeAt( pos ) == 101 ) state = 276;
		else state = -1;
		break;

	case 463:
		if( info.src.charCodeAt( pos ) == 70 ) state = 292;
		else state = -1;
		break;

	case 464:
		if( info.src.charCodeAt( pos ) == 99 ) state = 294;
		else state = -1;
		break;

	case 465:
		if( info.src.charCodeAt( pos ) == 100 ) state = 310;
		else state = -1;
		break;

	case 466:
		if( info.src.charCodeAt( pos ) == 114 ) state = 426;
		else state = -1;
		break;

	case 467:
		if( info.src.charCodeAt( pos ) == 126 ) state = 316;
		else state = -1;
		break;

	case 468:
		if( info.src.charCodeAt( pos ) == 116 ) state = 429;
		else state = -1;
		break;

	case 469:
		if( info.src.charCodeAt( pos ) == 114 ) state = 328;
		else state = -1;
		break;

	case 470:
		if( info.src.charCodeAt( pos ) == 101 ) state = 331;
		else state = -1;
		break;

	case 471:
		if( info.src.charCodeAt( pos ) == 105 ) state = 434;
		else state = -1;
		break;

	case 472:
		if( info.src.charCodeAt( pos ) == 101 ) state = 186;
		else state = -1;
		break;

	case 473:
		if( info.src.charCodeAt( pos ) == 110 ) state = 193;
		else state = -1;
		break;

	case 474:
		if( info.src.charCodeAt( pos ) == 105 ) state = 479;
		else state = -1;
		break;

	case 475:
		if( info.src.charCodeAt( pos ) == 99 ) state = 452;
		else state = -1;
		break;

	case 476:
		if( info.src.charCodeAt( pos ) == 101 ) state = 394;
		else state = -1;
		break;

	case 477:
		if( info.src.charCodeAt( pos ) == 48 ) state = 234;
		else state = -1;
		break;

	case 478:
		if( info.src.charCodeAt( pos ) == 110 ) state = 214;
		else state = -1;
		break;

	case 479:
		if( info.src.charCodeAt( pos ) == 116 ) state = 222;
		else state = -1;
		break;

	case 480:
		if( info.src.charCodeAt( pos ) == 105 ) state = 183;
		else state = -1;
		break;

	case 481:
		if( info.src.charCodeAt( pos ) == 101 ) state = 233;
		else state = -1;
		break;

	case 482:
		if( info.src.charCodeAt( pos ) == 105 ) state = 419;
		else state = -1;
		break;

	case 483:
		if( info.src.charCodeAt( pos ) == 114 ) state = 466;
		else state = -1;
		break;

	case 484:
		if( info.src.charCodeAt( pos ) == 108 ) state = 347;
		else state = -1;
		break;

	case 485:
		if( info.src.charCodeAt( pos ) == 101 ) state = 280;
		else state = -1;
		break;

	case 486:
		if( info.src.charCodeAt( pos ) == 114 ) state = 305;
		else state = -1;
		break;

	case 487:
		if( info.src.charCodeAt( pos ) == 126 ) state = 526;
		else state = -1;
		break;

	case 488:
		if( info.src.charCodeAt( pos ) == 116 ) state = 470;
		else state = -1;
		break;

	case 489:
		if( info.src.charCodeAt( pos ) == 114 ) state = 329;
		else state = -1;
		break;

	case 490:
		if( info.src.charCodeAt( pos ) == 110 ) state = 396;
		else state = -1;
		break;

	case 491:
		if( info.src.charCodeAt( pos ) == 105 ) state = 401;
		else state = -1;
		break;

	case 492:
		if( info.src.charCodeAt( pos ) == 101 ) state = 197;
		else state = -1;
		break;

	case 493:
		if( info.src.charCodeAt( pos ) == 48 ) state = 246;
		else state = -1;
		break;

	case 494:
		if( info.src.charCodeAt( pos ) == 116 ) state = 458;
		else state = -1;
		break;

	case 495:
		if( info.src.charCodeAt( pos ) == 105 ) state = 226;
		else state = -1;
		break;

	case 496:
		if( info.src.charCodeAt( pos ) == 101 ) state = 457;
		else state = -1;
		break;

	case 497:
		if( info.src.charCodeAt( pos ) == 105 ) state = 418;
		else state = -1;
		break;

	case 498:
		if( info.src.charCodeAt( pos ) == 114 ) state = 254;
		else state = -1;
		break;

	case 499:
		if( info.src.charCodeAt( pos ) == 108 ) state = 431;
		else state = -1;
		break;

	case 500:
		if( info.src.charCodeAt( pos ) == 101 ) state = 281;
		else state = -1;
		break;

	case 501:
		if( info.src.charCodeAt( pos ) == 126 ) state = 502;
		else state = -1;
		break;

	case 502:
		if( info.src.charCodeAt( pos ) == 114 ) state = 332;
		else state = -1;
		break;

	case 503:
		if( info.src.charCodeAt( pos ) == 101 ) state = 196;
		else state = -1;
		break;

	case 504:
		if( info.src.charCodeAt( pos ) == 48 ) state = 262;
		else state = -1;
		break;

	case 505:
		if( info.src.charCodeAt( pos ) == 105 ) state = 236;
		else state = -1;
		break;

	case 506:
		if( info.src.charCodeAt( pos ) == 101 ) state = 251;
		else state = -1;
		break;

	case 507:
		if( info.src.charCodeAt( pos ) == 101 ) state = 486;
		else state = -1;
		break;

	case 508:
		if( info.src.charCodeAt( pos ) == 126 ) state = 319;
		else state = -1;
		break;

	case 509:
		if( info.src.charCodeAt( pos ) == 114 ) state = 430;
		else state = -1;
		break;

	case 510:
		if( info.src.charCodeAt( pos ) == 101 ) state = 406;
		else state = -1;
		break;

	case 511:
		if( info.src.charCodeAt( pos ) == 48 ) state = 416;
		else state = -1;
		break;

	case 512:
		if( info.src.charCodeAt( pos ) == 101 ) state = 460;
		else state = -1;
		break;

	case 513:
		if( info.src.charCodeAt( pos ) == 101 ) state = 284;
		else state = -1;
		break;

	case 514:
		if( info.src.charCodeAt( pos ) == 126 ) state = 320;
		else state = -1;
		break;

	case 515:
		if( info.src.charCodeAt( pos ) == 114 ) state = 340;
		else state = -1;
		break;

	case 516:
		if( info.src.charCodeAt( pos ) == 48 ) state = 463;
		else state = -1;
		break;

	case 517:
		if( info.src.charCodeAt( pos ) == 101 ) state = 255;
		else state = -1;
		break;

	case 518:
		if( info.src.charCodeAt( pos ) == 126 ) state = 322;
		else state = -1;
		break;

	case 519:
		if( info.src.charCodeAt( pos ) == 114 ) state = 352;
		else state = -1;
		break;

	case 520:
		if( info.src.charCodeAt( pos ) == 48 ) state = 524;
		else state = -1;
		break;

	case 521:
		if( info.src.charCodeAt( pos ) == 101 ) state = 257;
		else state = -1;
		break;

	case 522:
		if( info.src.charCodeAt( pos ) == 126 ) state = 323;
		else state = -1;
		break;

	case 523:
		if( info.src.charCodeAt( pos ) == 114 ) state = 356;
		else state = -1;
		break;

	case 524:
		if( info.src.charCodeAt( pos ) == 48 ) state = 301;
		else state = -1;
		break;

	case 525:
		if( info.src.charCodeAt( pos ) == 101 ) state = 259;
		else state = -1;
		break;

	case 526:
		if( info.src.charCodeAt( pos ) == 126 ) state = 327;
		else state = -1;
		break;

	case 527:
		if( info.src.charCodeAt( pos ) == 48 ) state = 302;
		else state = -1;
		break;

	case 528:
		if( info.src.charCodeAt( pos ) == 126 ) state = 330;
		else state = -1;
		break;

	case 529:
		if( info.src.charCodeAt( pos ) == 48 ) state = 303;
		else state = -1;
		break;

	case 530:
		if( info.src.charCodeAt( pos ) == 126 ) state = 335;
		else state = -1;
		break;

	case 531:
		if( info.src.charCodeAt( pos ) == 48 ) state = 586;
		else state = -1;
		break;

	case 532:
		if( info.src.charCodeAt( pos ) == 126 ) state = 534;
		else state = -1;
		break;

	case 533:
		if( info.src.charCodeAt( pos ) == 126 ) state = 339;
		else state = -1;
		break;

	case 534:
		if( info.src.charCodeAt( pos ) == 126 ) state = 348;
		else state = -1;
		break;

	case 535:
		if( info.src.charCodeAt( pos ) == 126 ) state = 349;
		else state = -1;
		break;

	case 536:
		if( info.src.charCodeAt( pos ) == 126 ) state = 537;
		else state = -1;
		break;

	case 537:
		if( info.src.charCodeAt( pos ) == 126 ) state = 362;
		else state = -1;
		break;

	case 538:
		if( info.src.charCodeAt( pos ) == 126 ) state = 539;
		else state = -1;
		break;

	case 539:
		if( info.src.charCodeAt( pos ) == 126 ) state = 365;
		else state = -1;
		break;

	case 540:
		if( info.src.charCodeAt( pos ) == 109 ) state = 387;
		else state = -1;
		break;

	case 541:
		if( info.src.charCodeAt( pos ) == 48 ) state = 477;
		else state = -1;
		break;

	case 542:
		if( info.src.charCodeAt( pos ) == 126 ) state = 520;
		else state = -1;
		break;

	case 543:
		if( info.src.charCodeAt( pos ) == 103 ) state = 525;
		else state = -1;
		break;

	case 544:
		if( info.src.charCodeAt( pos ) == 99 ) state = 410;
		else state = -1;
		break;

	case 545:
		if( info.src.charCodeAt( pos ) == 105 ) state = 462;
		else state = -1;
		break;

	case 546:
		if( info.src.charCodeAt( pos ) == 99 ) state = 425;
		else state = -1;
		break;

	case 547:
		if( info.src.charCodeAt( pos ) == 67 ) state = 558;
		else state = -1;
		break;

	case 548:
		if( info.src.charCodeAt( pos ) == 126 ) state = 501;
		else state = -1;
		break;

	case 549:
		if( info.src.charCodeAt( pos ) == 52 ) state = 532;
		else state = -1;
		break;

	case 550:
		if( info.src.charCodeAt( pos ) == 67 ) state = 508;
		else state = -1;
		break;

	case 551:
		if( info.src.charCodeAt( pos ) == 101 ) state = 509;
		else state = -1;
		break;

	case 552:
		if( info.src.charCodeAt( pos ) == 32 ) state = 465;
		else state = -1;
		match = 7;
		match_pos = pos;
		break;

	case 553:
		if( info.src.charCodeAt( pos ) == 103 ) state = 513;
		else state = -1;
		break;

	case 554:
		if( info.src.charCodeAt( pos ) == 48 ) state = 511;
		else state = -1;
		break;

	case 555:
		if( info.src.charCodeAt( pos ) == 105 ) state = 553;
		else state = -1;
		break;

	case 556:
		if( info.src.charCodeAt( pos ) == 108 ) state = 488;
		else state = -1;
		break;

	case 557:
		if( info.src.charCodeAt( pos ) == 70 ) state = 550;
		else state = -1;
		break;

	case 558:
		if( info.src.charCodeAt( pos ) == 126 ) state = 528;
		else state = -1;
		break;

	case 559:
		if( info.src.charCodeAt( pos ) == 48 ) state = 557;
		else state = -1;
		break;

	case 560:
		if( info.src.charCodeAt( pos ) == 48 ) state = 527;
		else state = -1;
		break;

	case 561:
		if( info.src.charCodeAt( pos ) == 101 ) state = 546;
		else state = -1;
		break;

	case 562:
		if( info.src.charCodeAt( pos ) == 126 ) state = 535;
		else state = -1;
		break;

	case 563:
		if( info.src.charCodeAt( pos ) == 48 ) state = 493;
		else state = -1;
		break;

	case 564:
		if( info.src.charCodeAt( pos ) == 126 ) state = 560;
		else state = -1;
		break;

	case 565:
		if( info.src.charCodeAt( pos ) == 105 ) state = 507;
		else state = -1;
		break;

	case 566:
		if( info.src.charCodeAt( pos ) == 126 ) state = 514;
		else state = -1;
		break;

	case 567:
		if( info.src.charCodeAt( pos ) == 67 ) state = 562;
		else state = -1;
		break;

	case 568:
		if( info.src.charCodeAt( pos ) == 101 ) state = 519;
		else state = -1;
		break;

	case 569:
		if( info.src.charCodeAt( pos ) == 48 ) state = 516;
		else state = -1;
		break;

	case 570:
		if( info.src.charCodeAt( pos ) == 126 ) state = 530;
		else state = -1;
		break;

	case 571:
		if( info.src.charCodeAt( pos ) == 48 ) state = 529;
		else state = -1;
		break;

	case 572:
		if( info.src.charCodeAt( pos ) == 126 ) state = 571;
		else state = -1;
		break;

	case 573:
		if( info.src.charCodeAt( pos ) == 126 ) state = 518;
		else state = -1;
		break;

	case 574:
		if( info.src.charCodeAt( pos ) == 67 ) state = 536;
		else state = -1;
		break;

	case 575:
		if( info.src.charCodeAt( pos ) == 48 ) state = 559;
		else state = -1;
		break;

	case 576:
		if( info.src.charCodeAt( pos ) == 126 ) state = 531;
		else state = -1;
		break;

	case 577:
		if( info.src.charCodeAt( pos ) == 126 ) state = 522;
		else state = -1;
		break;

	case 578:
		if( info.src.charCodeAt( pos ) == 67 ) state = 538;
		else state = -1;
		break;

	case 579:
		if( info.src.charCodeAt( pos ) == 126 ) state = 541;
		else state = -1;
		break;

	case 580:
		if( info.src.charCodeAt( pos ) == 126 ) state = 554;
		else state = -1;
		break;

	case 581:
		if( info.src.charCodeAt( pos ) == 114 ) state = 561;
		else state = -1;
		break;

	case 582:
		if( info.src.charCodeAt( pos ) == 52 ) state = 548;
		else state = -1;
		break;

	case 583:
		if( info.src.charCodeAt( pos ) == 97 ) state = 556;
		else state = -1;
		break;

	case 584:
		if( info.src.charCodeAt( pos ) == 54 ) state = 577;
		else state = -1;
		break;

	case 585:
		if( info.src.charCodeAt( pos ) == 70 ) state = 574;
		else state = -1;
		break;

	case 586:
		if( info.src.charCodeAt( pos ) == 48 ) state = 585;
		else state = -1;
		break;

	case 587:
		if( info.src.charCodeAt( pos ) == 126 ) state = 563;
		else state = -1;
		break;

	case 588:
		if( info.src.charCodeAt( pos ) == 126 ) state = 569;
		else state = -1;
		break;

	case 589:
		if( info.src.charCodeAt( pos ) == 52 ) state = 566;
		else state = -1;
		break;

	case 590:
		if( info.src.charCodeAt( pos ) == 70 ) state = 578;
		else state = -1;
		break;

	case 591:
		if( info.src.charCodeAt( pos ) == 48 ) state = 590;
		else state = -1;
		break;

	case 592:
		if( info.src.charCodeAt( pos ) == 126 ) state = 575;
		else state = -1;
		break;

	case 593:
		if( info.src.charCodeAt( pos ) == 112 ) state = 581;
		else state = -1;
		break;

	case 594:
		if( info.src.charCodeAt( pos ) == 69 ) state = 589;
		else state = -1;
		break;

	case 595:
		if( info.src.charCodeAt( pos ) == 104 ) state = 583;
		else state = -1;
		break;

	case 596:
		if( info.src.charCodeAt( pos ) == 70 ) state = 584;
		else state = -1;
		break;

	case 597:
		if( info.src.charCodeAt( pos ) == 126 ) state = 592;
		else state = -1;
		break;

	case 598:
		if( info.src.charCodeAt( pos ) == 48 ) state = 594;
		else state = -1;
		break;

	case 599:
		if( info.src.charCodeAt( pos ) == 48 ) state = 596;
		else state = -1;
		break;

	case 600:
		if( info.src.charCodeAt( pos ) == 48 ) state = 591;
		else state = -1;
		break;

	case 601:
		if( info.src.charCodeAt( pos ) == 48 ) state = 599;
		else state = -1;
		break;

	case 602:
		if( info.src.charCodeAt( pos ) == 126 ) state = 600;
		else state = -1;
		break;

	case 603:
		if( info.src.charCodeAt( pos ) == 126 ) state = 601;
		else state = -1;
		break;

	case 604:
		if( info.src.charCodeAt( pos ) == 48 ) state = 598;
		else state = -1;
		break;

	case 605:
		if( info.src.charCodeAt( pos ) == 126 ) state = 602;
		else state = -1;
		break;

	case 606:
		if( info.src.charCodeAt( pos ) == 126 ) state = 604;
		else state = -1;
		break;

}


			pos++;

		}
		while( state > -1 );

	}
	while( 1 > -1 && match == 1 );

	if( match > -1 )
	{
		info.att = info.src.substr( start, match_pos - start );
		info.offset = match_pos;
		
switch( match )
{
	case 2:
		{
		 _$v_show_imp[info.att] = info.att; 
		}
		break;

	case 3:
		{
		 _$v_close_imp[info.att] = info.att; 
		}
		break;

	case 4:
		{
		 _$info[info.att] = info.att; 
		}
		break;

	case 5:
		{
		 _$contact[info.att] = info.att; 
		}
		break;

	case 6:
		{
		 _$that[info.att] = info.att; 
		}
		break;

	case 7:
		{
		 _$this[info.att] = info.att; 
		}
		break;

	case 8:
		{
		 _$and[info.att] = info.att; 
		}
		break;

	case 9:
		{
		 _$not[info.att] = info.att; 
		}
		break;

	case 10:
		{
		 _$one[info.att] = info.att; 
		}
		break;

	case 11:
		{
		 _$two[info.att] = info.att; 
		}
		break;

	case 12:
		{
		 _$multiple[info.att] = info.att; 
		}
		break;

	case 13:
		{
		 _$exactly[info.att] = info.att; 
		}
		break;

	case 14:
		{
		 _$new[info.att] = info.att; 
		}
		break;

	case 15:
		{
		 _$add[info.att] = info.att; 
		}
		break;

	case 16:
		{
		 _$position[info.att] = info.att; 
		}
		break;

	case 17:
		{
		 _$preposition[info.att] = info.att; 
		}
		break;

	case 18:
		{
		 _$locadverb[info.att] = info.att; 
		}
		break;

	case 19:
		{
		 _$more[info.att] = info.att; 
		}
		break;

	case 20:
		{
		 _$back[info.att] = info.att; 
		}
		break;

	case 21:
		{
		 _$wpaint[info.att] = info.att; 
		}
		break;

	case 22:
		{
		 _$create[info.att] = info.att; 
		}
		break;

	case 23:
		{
		 _$delete[info.att] = info.att; 
		}
		break;

	case 24:
		{
		 _$move[info.att] = info.att; 
		}
		break;

	case 25:
		{
		 _$wchange[info.att] = info.att; 
		}
		break;

	case 26:
		{
		 _$have[info.att] = info.att; 
		}
		break;

	case 27:
		{
		 _$lights[info.att] = info.att; 
		}
		break;

	case 28:
		{
		 _$light[info.att] = info.att; 
		}
		break;

	case 29:
		{
		 _$venue[info.att] = info.att; 
		}
		break;

	case 30:
		{
		 _$black[info.att] = info.att; 
		}
		break;

	case 31:
		{
		 _$white[info.att] = info.att; 
		}
		break;

	case 32:
		{
		 _$red[info.att] = info.att; 
		}
		break;

	case 33:
		{
		 _$orange[info.att] = info.att; 
		}
		break;

	case 34:
		{
		 _$yellow[info.att] = info.att; 
		}
		break;

	case 35:
		{
		 _$green[info.att] = info.att; 
		}
		break;

	case 36:
		{
		 _$blue[info.att] = info.att; 
		}
		break;

	case 37:
		{
		 _$pink[info.att] = info.att; 
		}
		break;

	case 38:
		{
		 _$purple[info.att] = info.att; 
		}
		break;

	case 39:
		{
		 _$wcolor[info.att] = info.att; 
		}
		break;

	case 40:
		{
		 _$wswitch[info.att] = info.att; 
		}
		break;

	case 41:
		{
		 _$wdo[info.att] = info.att; 
		}
		break;

	case 42:
		{
		 _$wdisable[info.att] = info.att; 
		}
		break;

	case 43:
		{
		 _$wenable[info.att] = info.att; 
		}
		break;

	case 44:
		{
		 _$won[info.att] = info.att; 
		}
		break;

	case 45:
		{
		 _$woff[info.att] = info.att; 
		}
		break;

	case 46:
		{
		 _$wall[info.att] = info.att; 
		}
		break;

}


	}
	else
	{
		info.att = new String();
		match = -1;
	}

	return match;
}


function __parse( src, err_off, err_la, semanticAnnotationResult )
{
	var		sstack			= new Array();
	var		vstack			= new Array();
	var 	err_cnt			= 0;
	var		act;
	var		go;
	var		la;
	var		rval;
	var 	parseinfo		= new Function( "", "var offset; var src; var att;" );
	var		info			= new parseinfo();
	
	//Visual parse tree generation
	var 	treenode		= new Function( "", "var sym; var att; var child;" );
	var		treenodes		= new Array();
	var		tree			= new Array();
	var		tmptree			= null;
	
/* Pop-Table */
var pop_tab = new Array(
	new Array( 0/* utterance' */, 1 ),
	new Array( 48/* utterance */, 1 ),
	new Array( 49/* pCOLOR */, 1 ),
	new Array( 49/* pCOLOR */, 2 ),
	new Array( 49/* pCOLOR */, 1 ),
	new Array( 49/* pCOLOR */, 2 ),
	new Array( 49/* pCOLOR */, 1 ),
	new Array( 49/* pCOLOR */, 2 ),
	new Array( 49/* pCOLOR */, 1 ),
	new Array( 49/* pCOLOR */, 2 ),
	new Array( 49/* pCOLOR */, 1 ),
	new Array( 49/* pCOLOR */, 2 ),
	new Array( 49/* pCOLOR */, 1 ),
	new Array( 49/* pCOLOR */, 2 ),
	new Array( 49/* pCOLOR */, 1 ),
	new Array( 49/* pCOLOR */, 2 ),
	new Array( 49/* pCOLOR */, 1 ),
	new Array( 49/* pCOLOR */, 2 ),
	new Array( 49/* pCOLOR */, 1 ),
	new Array( 49/* pCOLOR */, 2 ),
	new Array( 50/* pLIGHT */, 2 ),
	new Array( 50/* pLIGHT */, 4 ),
	new Array( 50/* pLIGHT */, 2 ),
	new Array( 50/* pLIGHT */, 1 ),
	new Array( 50/* pLIGHT */, 1 ),
	new Array( 50/* pLIGHT */, 3 ),
	new Array( 50/* pLIGHT */, 1 ),
	new Array( 50/* pLIGHT */, 2 ),
	new Array( 51/* pSWITCH */, 1 ),
	new Array( 51/* pSWITCH */, 1 ),
	new Array( 52/* SWITCHLIGHT */, 4 ),
	new Array( 52/* SWITCHLIGHT */, 3 ),
	new Array( 52/* SWITCHLIGHT */, 2 ),
	new Array( 52/* SWITCHLIGHT */, 4 ),
	new Array( 52/* SWITCHLIGHT */, 3 ),
	new Array( 52/* SWITCHLIGHT */, 2 ),
	new Array( 53/* pCHANGECOLOR */, 1 ),
	new Array( 53/* pCHANGECOLOR */, 1 ),
	new Array( 53/* pCHANGECOLOR */, 1 ),
	new Array( 53/* pCHANGECOLOR */, 1 ),
	new Array( 54/* PAINT_IT */, 3 ),
	new Array( 54/* PAINT_IT */, 2 ),
	new Array( 54/* PAINT_IT */, 1 ),
	new Array( 54/* PAINT_IT */, 2 ),
	new Array( 54/* PAINT_IT */, 3 ),
	new Array( 55/* MOVE_COLOR */, 5 ),
	new Array( 55/* MOVE_COLOR */, 4 ),
	new Array( 55/* MOVE_COLOR */, 4 ),
	new Array( 55/* MOVE_COLOR */, 5 ),
	new Array( 56/* pADDLIGHT */, 1 ),
	new Array( 56/* pADDLIGHT */, 1 ),
	new Array( 56/* pADDLIGHT */, 1 ),
	new Array( 56/* pADDLIGHT */, 1 ),
	new Array( 57/* ADD_LIGHT */, 4 ),
	new Array( 57/* ADD_LIGHT */, 3 ),
	new Array( 57/* ADD_LIGHT */, 2 ),
	new Array( 57/* ADD_LIGHT */, 3 ),
	new Array( 57/* ADD_LIGHT */, 4 ),
	new Array( 57/* ADD_LIGHT */, 3 ),
	new Array( 57/* ADD_LIGHT */, 2 ),
	new Array( 58/* ADD_TWO_LIGHTS */, 7 ),
	new Array( 58/* ADD_TWO_LIGHTS */, 6 ),
	new Array( 58/* ADD_TWO_LIGHTS */, 6 ),
	new Array( 58/* ADD_TWO_LIGHTS */, 5 ),
	new Array( 58/* ADD_TWO_LIGHTS */, 4 ),
	new Array( 58/* ADD_TWO_LIGHTS */, 5 ),
	new Array( 58/* ADD_TWO_LIGHTS */, 7 ),
	new Array( 58/* ADD_TWO_LIGHTS */, 6 ),
	new Array( 58/* ADD_TWO_LIGHTS */, 4 ),
	new Array( 58/* ADD_TWO_LIGHTS */, 3 ),
	new Array( 59/* pCHANGEPOSITION */, 1 ),
	new Array( 59/* pCHANGEPOSITION */, 1 ),
	new Array( 59/* pCHANGEPOSITION */, 2 ),
	new Array( 59/* pCHANGEPOSITION */, 3 ),
	new Array( 60/* MOVE_LIGHTS */, 5 ),
	new Array( 60/* MOVE_LIGHTS */, 4 ),
	new Array( 60/* MOVE_LIGHTS */, 7 ),
	new Array( 60/* MOVE_LIGHTS */, 3 ),
	new Array( 60/* MOVE_LIGHTS */, 2 ),
	new Array( 60/* MOVE_LIGHTS */, 5 ),
	new Array( 60/* MOVE_LIGHTS */, 4 ),
	new Array( 60/* MOVE_LIGHTS */, 3 ),
	new Array( 60/* MOVE_LIGHTS */, 2 ),
	new Array( 61/* DELETE_LIGHT */, 4 ),
	new Array( 61/* DELETE_LIGHT */, 2 ),
	new Array( 61/* DELETE_LIGHT */, 3 ),
	new Array( 62/* DELETE_LIGHTS */, 4 ),
	new Array( 62/* DELETE_LIGHTS */, 3 ),
	new Array( 62/* DELETE_LIGHTS */, 3 ),
	new Array( 62/* DELETE_LIGHTS */, 2 ),
	new Array( 63/* SHOW_INFO */, 2 ),
	new Array( 63/* SHOW_INFO */, 3 ),
	new Array( 63/* SHOW_INFO */, 3 ),
	new Array( 63/* SHOW_INFO */, 2 ),
	new Array( 63/* SHOW_INFO */, 2 ),
	new Array( 63/* SHOW_INFO */, 2 ),
	new Array( 64/* SHOW_KONTAKT */, 2 ),
	new Array( 64/* SHOW_KONTAKT */, 2 ),
	new Array( 64/* SHOW_KONTAKT */, 1 ),
	new Array( 65/* CLOSE_INFO */, 1 ),
	new Array( 65/* CLOSE_INFO */, 2 ),
	new Array( 65/* CLOSE_INFO */, 3 ),
	new Array( 65/* CLOSE_INFO */, 2 ),
	new Array( 66/* BACK_INFO */, 2 ),
	new Array( 66/* BACK_INFO */, 1 ),
	new Array( 66/* BACK_INFO */, 3 ),
	new Array( 66/* BACK_INFO */, 2 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 ),
	new Array( 47/* phrases */, 1 )
);

/* Action-Table */
var act_tab = new Array(
	/* State 0 */ new Array( 30/* "BLACK" */,21 , 17/* "PREPOSITION" */,22 , 31/* "WHITE" */,23 , 32/* "RED" */,24 , 33/* "ORANGE" */,25 , 34/* "YELLOW" */,26 , 35/* "GREEN" */,27 , 36/* "BLUE" */,28 , 37/* "PINK" */,29 , 38/* "PURPLE" */,30 , 7/* "THIS" */,31 , 28/* "LIGHT" */,32 , 27/* "LIGHTS" */,33 , 14/* "NEW" */,34 , 40/* "wSWITCH" */,35 , 41/* "wDO" */,36 , 21/* "wPAINT" */,37 , 25/* "wCHANGE" */,38 , 2/* "V_SHOW_IMP" */,39 , 8/* "AND" */,40 , 26/* "HAVE" */,41 , 15/* "ADD" */,42 , 22/* "CREATE" */,43 , 18/* "LOCADVERB" */,44 , 24/* "MOVE" */,45 , 23/* "DELETE" */,46 , 4/* "INFO" */,47 , 19/* "MORE" */,48 , 5/* "CONTACT" */,49 , 3/* "V_CLOSE_IMP" */,50 , 20/* "BACK" */,51 ),
	/* State 1 */ new Array( 67/* "$" */,0 ),
	/* State 2 */ new Array( 67/* "$" */,-1 ),
	/* State 3 */ new Array( 67/* "$" */,-42 ),
	/* State 4 */ new Array( 45/* "wOFF" */,53 , 44/* "wON" */,54 , 30/* "BLACK" */,21 , 17/* "PREPOSITION" */,22 , 31/* "WHITE" */,23 , 32/* "RED" */,24 , 33/* "ORANGE" */,25 , 34/* "YELLOW" */,26 , 35/* "GREEN" */,27 , 36/* "BLUE" */,28 , 37/* "PINK" */,29 , 38/* "PURPLE" */,30 , 67/* "$" */,-108 ),
	/* State 5 */ new Array( 46/* "wALL" */,56 , 7/* "THIS" */,31 , 28/* "LIGHT" */,32 , 27/* "LIGHTS" */,33 , 14/* "NEW" */,57 , 67/* "$" */,-36 , 30/* "BLACK" */,-36 , 17/* "PREPOSITION" */,-36 , 31/* "WHITE" */,-36 , 32/* "RED" */,-36 , 33/* "ORANGE" */,-36 , 34/* "YELLOW" */,-36 , 35/* "GREEN" */,-36 , 36/* "BLUE" */,-36 , 37/* "PINK" */,-36 , 38/* "PURPLE" */,-36 ),
	/* State 6 */ new Array( 67/* "$" */,-110 ),
	/* State 7 */ new Array( 7/* "THIS" */,31 , 28/* "LIGHT" */,32 , 27/* "LIGHTS" */,33 , 14/* "NEW" */,57 , 30/* "BLACK" */,21 , 17/* "PREPOSITION" */,22 , 31/* "WHITE" */,23 , 32/* "RED" */,24 , 33/* "ORANGE" */,25 , 34/* "YELLOW" */,26 , 35/* "GREEN" */,27 , 36/* "BLUE" */,28 , 37/* "PINK" */,29 , 38/* "PURPLE" */,30 , 67/* "$" */,-111 ),
	/* State 8 */ new Array( 67/* "$" */,-112 ),
	/* State 9 */ new Array( 67/* "$" */,-113 ),
	/* State 10 */ new Array( 11/* "TWO" */,60 , 10/* "ONE" */,61 , 18/* "LOCADVERB" */,62 , 28/* "LIGHT" */,63 , 7/* "THIS" */,31 , 27/* "LIGHTS" */,33 , 14/* "NEW" */,57 , 67/* "$" */,-114 ),
	/* State 11 */ new Array( 67/* "$" */,-115 ),
	/* State 12 */ new Array( 67/* "$" */,-116 ),
	/* State 13 */ new Array( 28/* "LIGHT" */,65 , 7/* "THIS" */,66 , 67/* "$" */,-117 ),
	/* State 14 */ new Array( 67/* "$" */,-118 ),
	/* State 15 */ new Array( 67/* "$" */,-119 ),
	/* State 16 */ new Array( 67/* "$" */,-120 ),
	/* State 17 */ new Array( 67/* "$" */,-121 ),
	/* State 18 */ new Array( 67/* "$" */,-122 ),
	/* State 19 */ new Array( 67/* "$" */,-123 ),
	/* State 20 */ new Array( 67/* "$" */,-124 ),
	/* State 21 */ new Array( 67/* "$" */,-2 ),
	/* State 22 */ new Array( 38/* "PURPLE" */,67 , 37/* "PINK" */,68 , 36/* "BLUE" */,69 , 35/* "GREEN" */,70 , 34/* "YELLOW" */,71 , 33/* "ORANGE" */,72 , 32/* "RED" */,73 , 31/* "WHITE" */,74 , 30/* "BLACK" */,75 ),
	/* State 23 */ new Array( 67/* "$" */,-4 ),
	/* State 24 */ new Array( 67/* "$" */,-6 ),
	/* State 25 */ new Array( 67/* "$" */,-8 ),
	/* State 26 */ new Array( 67/* "$" */,-10 ),
	/* State 27 */ new Array( 67/* "$" */,-12 ),
	/* State 28 */ new Array( 67/* "$" */,-14 ),
	/* State 29 */ new Array( 67/* "$" */,-16 ),
	/* State 30 */ new Array( 67/* "$" */,-18 ),
	/* State 31 */ new Array( 27/* "LIGHTS" */,76 , 39/* "wCOLOR" */,77 , 28/* "LIGHT" */,78 , 67/* "$" */,-23 , 44/* "wON" */,-23 , 45/* "wOFF" */,-23 , 30/* "BLACK" */,-23 , 17/* "PREPOSITION" */,-23 , 31/* "WHITE" */,-23 , 32/* "RED" */,-23 , 33/* "ORANGE" */,-23 , 34/* "YELLOW" */,-23 , 35/* "GREEN" */,-23 , 36/* "BLUE" */,-23 , 37/* "PINK" */,-23 , 38/* "PURPLE" */,-23 , 13/* "EXACTLY" */,-23 , 18/* "LOCADVERB" */,-23 ),
	/* State 32 */ new Array( 17/* "PREPOSITION" */,79 , 67/* "$" */,-24 , 44/* "wON" */,-24 , 45/* "wOFF" */,-24 , 30/* "BLACK" */,-24 , 31/* "WHITE" */,-24 , 32/* "RED" */,-24 , 33/* "ORANGE" */,-24 , 34/* "YELLOW" */,-24 , 35/* "GREEN" */,-24 , 36/* "BLUE" */,-24 , 37/* "PINK" */,-24 , 38/* "PURPLE" */,-24 , 13/* "EXACTLY" */,-24 , 18/* "LOCADVERB" */,-24 ),
	/* State 33 */ new Array( 67/* "$" */,-26 , 44/* "wON" */,-26 , 45/* "wOFF" */,-26 , 30/* "BLACK" */,-26 , 17/* "PREPOSITION" */,-26 , 31/* "WHITE" */,-26 , 32/* "RED" */,-26 , 33/* "ORANGE" */,-26 , 34/* "YELLOW" */,-26 , 35/* "GREEN" */,-26 , 36/* "BLUE" */,-26 , 37/* "PINK" */,-26 , 38/* "PURPLE" */,-26 , 13/* "EXACTLY" */,-26 , 18/* "LOCADVERB" */,-26 ),
	/* State 34 */ new Array( 28/* "LIGHT" */,80 , 67/* "$" */,-52 , 18/* "LOCADVERB" */,-52 , 7/* "THIS" */,-52 , 27/* "LIGHTS" */,-52 , 14/* "NEW" */,-52 , 10/* "ONE" */,-52 , 11/* "TWO" */,-52 ),
	/* State 35 */ new Array( 67/* "$" */,-28 , 46/* "wALL" */,-28 , 7/* "THIS" */,-28 , 28/* "LIGHT" */,-28 , 27/* "LIGHTS" */,-28 , 14/* "NEW" */,-28 , 30/* "BLACK" */,-28 , 17/* "PREPOSITION" */,-28 , 31/* "WHITE" */,-28 , 32/* "RED" */,-28 , 33/* "ORANGE" */,-28 , 34/* "YELLOW" */,-28 , 35/* "GREEN" */,-28 , 36/* "BLUE" */,-28 , 37/* "PINK" */,-28 , 38/* "PURPLE" */,-28 ),
	/* State 36 */ new Array( 67/* "$" */,-29 , 46/* "wALL" */,-29 , 7/* "THIS" */,-29 , 28/* "LIGHT" */,-29 , 27/* "LIGHTS" */,-29 , 14/* "NEW" */,-29 , 30/* "BLACK" */,-29 , 17/* "PREPOSITION" */,-29 , 31/* "WHITE" */,-29 , 32/* "RED" */,-29 , 33/* "ORANGE" */,-29 , 34/* "YELLOW" */,-29 , 35/* "GREEN" */,-29 , 36/* "BLUE" */,-29 , 37/* "PINK" */,-29 , 38/* "PURPLE" */,-29 ),
	/* State 37 */ new Array( 67/* "$" */,-37 , 7/* "THIS" */,-37 , 28/* "LIGHT" */,-37 , 27/* "LIGHTS" */,-37 , 14/* "NEW" */,-37 , 30/* "BLACK" */,-37 , 17/* "PREPOSITION" */,-37 , 31/* "WHITE" */,-37 , 32/* "RED" */,-37 , 33/* "ORANGE" */,-37 , 34/* "YELLOW" */,-37 , 35/* "GREEN" */,-37 , 36/* "BLUE" */,-37 , 37/* "PINK" */,-37 , 38/* "PURPLE" */,-37 ),
	/* State 38 */ new Array( 7/* "THIS" */,81 , 16/* "POSITION" */,82 , 67/* "$" */,-38 , 28/* "LIGHT" */,-38 , 27/* "LIGHTS" */,-38 , 14/* "NEW" */,-38 , 30/* "BLACK" */,-38 , 17/* "PREPOSITION" */,-38 , 31/* "WHITE" */,-38 , 32/* "RED" */,-38 , 33/* "ORANGE" */,-38 , 34/* "YELLOW" */,-38 , 35/* "GREEN" */,-38 , 36/* "BLUE" */,-38 , 37/* "PINK" */,-38 , 38/* "PURPLE" */,-38 ),
	/* State 39 */ new Array( 20/* "BACK" */,83 , 5/* "CONTACT" */,84 , 4/* "INFO" */,85 , 67/* "$" */,-39 , 7/* "THIS" */,-39 , 28/* "LIGHT" */,-39 , 27/* "LIGHTS" */,-39 , 14/* "NEW" */,-39 , 30/* "BLACK" */,-39 , 17/* "PREPOSITION" */,-39 , 31/* "WHITE" */,-39 , 32/* "RED" */,-39 , 33/* "ORANGE" */,-39 , 34/* "YELLOW" */,-39 , 35/* "GREEN" */,-39 , 36/* "BLUE" */,-39 , 37/* "PINK" */,-39 , 38/* "PURPLE" */,-39 ),
	/* State 40 */ new Array( 18/* "LOCADVERB" */,86 ),
	/* State 41 */ new Array( 67/* "$" */,-49 , 18/* "LOCADVERB" */,-49 , 7/* "THIS" */,-49 , 28/* "LIGHT" */,-49 , 27/* "LIGHTS" */,-49 , 14/* "NEW" */,-49 , 10/* "ONE" */,-49 , 11/* "TWO" */,-49 ),
	/* State 42 */ new Array( 67/* "$" */,-50 , 18/* "LOCADVERB" */,-50 , 7/* "THIS" */,-50 , 28/* "LIGHT" */,-50 , 27/* "LIGHTS" */,-50 , 14/* "NEW" */,-50 , 10/* "ONE" */,-50 , 11/* "TWO" */,-50 ),
	/* State 43 */ new Array( 67/* "$" */,-51 , 18/* "LOCADVERB" */,-51 , 7/* "THIS" */,-51 , 28/* "LIGHT" */,-51 , 27/* "LIGHTS" */,-51 , 14/* "NEW" */,-51 , 10/* "ONE" */,-51 , 11/* "TWO" */,-51 ),
	/* State 44 */ new Array( 8/* "AND" */,87 , 10/* "ONE" */,89 , 7/* "THIS" */,31 , 28/* "LIGHT" */,32 , 27/* "LIGHTS" */,33 , 14/* "NEW" */,57 ),
	/* State 45 */ new Array( 67/* "$" */,-70 , 7/* "THIS" */,-70 , 28/* "LIGHT" */,-70 ),
	/* State 46 */ new Array( 12/* "MULTIPLE" */,91 , 18/* "LOCADVERB" */,92 , 7/* "THIS" */,31 , 28/* "LIGHT" */,32 , 27/* "LIGHTS" */,33 , 14/* "NEW" */,57 ),
	/* State 47 */ new Array( 3/* "V_CLOSE_IMP" */,93 , 6/* "THAT" */,94 , 2/* "V_SHOW_IMP" */,95 ),
	/* State 48 */ new Array( 4/* "INFO" */,96 ),
	/* State 49 */ new Array( 2/* "V_SHOW_IMP" */,97 , 67/* "$" */,-98 ),
	/* State 50 */ new Array( 6/* "THAT" */,98 , 4/* "INFO" */,99 , 67/* "$" */,-99 ),
	/* State 51 */ new Array( 4/* "INFO" */,100 , 67/* "$" */,-104 ),
	/* State 52 */ new Array( 67/* "$" */,-43 ),
	/* State 53 */ new Array( 67/* "$" */,-35 ),
	/* State 54 */ new Array( 67/* "$" */,-32 ),
	/* State 55 */ new Array( 44/* "wON" */,101 , 45/* "wOFF" */,102 ),
	/* State 56 */ new Array( 7/* "THIS" */,31 , 28/* "LIGHT" */,32 , 27/* "LIGHTS" */,33 , 14/* "NEW" */,57 ),
	/* State 57 */ new Array( 28/* "LIGHT" */,80 ),
	/* State 58 */ new Array( 17/* "PREPOSITION" */,105 , 13/* "EXACTLY" */,106 , 30/* "BLACK" */,21 , 31/* "WHITE" */,23 , 32/* "RED" */,24 , 33/* "ORANGE" */,25 , 34/* "YELLOW" */,26 , 35/* "GREEN" */,27 , 36/* "BLUE" */,28 , 37/* "PINK" */,29 , 38/* "PURPLE" */,30 ),
	/* State 59 */ new Array( 67/* "$" */,-41 ),
	/* State 60 */ new Array( 27/* "LIGHTS" */,107 ),
	/* State 61 */ new Array( 11/* "TWO" */,109 , 7/* "THIS" */,31 , 28/* "LIGHT" */,32 , 27/* "LIGHTS" */,33 , 14/* "NEW" */,57 ),
	/* State 62 */ new Array( 10/* "ONE" */,110 , 8/* "AND" */,111 ),
	/* State 63 */ new Array( 17/* "PREPOSITION" */,79 , 18/* "LOCADVERB" */,112 , 67/* "$" */,-24 ),
	/* State 64 */ new Array( 18/* "LOCADVERB" */,113 , 67/* "$" */,-59 ),
	/* State 65 */ new Array( 67/* "$" */,-78 ),
	/* State 66 */ new Array( 28/* "LIGHT" */,114 ),
	/* State 67 */ new Array( 67/* "$" */,-19 ),
	/* State 68 */ new Array( 67/* "$" */,-17 ),
	/* State 69 */ new Array( 67/* "$" */,-15 ),
	/* State 70 */ new Array( 67/* "$" */,-13 ),
	/* State 71 */ new Array( 67/* "$" */,-11 ),
	/* State 72 */ new Array( 67/* "$" */,-9 ),
	/* State 73 */ new Array( 67/* "$" */,-7 ),
	/* State 74 */ new Array( 67/* "$" */,-5 ),
	/* State 75 */ new Array( 67/* "$" */,-3 ),
	/* State 76 */ new Array( 67/* "$" */,-22 , 44/* "wON" */,-22 , 45/* "wOFF" */,-22 , 30/* "BLACK" */,-22 , 17/* "PREPOSITION" */,-22 , 31/* "WHITE" */,-22 , 32/* "RED" */,-22 , 33/* "ORANGE" */,-22 , 34/* "YELLOW" */,-22 , 35/* "GREEN" */,-22 , 36/* "BLUE" */,-22 , 37/* "PINK" */,-22 , 38/* "PURPLE" */,-22 , 13/* "EXACTLY" */,-22 , 18/* "LOCADVERB" */,-22 ),
	/* State 77 */ new Array( 7/* "THIS" */,115 ),
	/* State 78 */ new Array( 67/* "$" */,-20 , 44/* "wON" */,-20 , 45/* "wOFF" */,-20 , 30/* "BLACK" */,-20 , 17/* "PREPOSITION" */,-20 , 31/* "WHITE" */,-20 , 32/* "RED" */,-20 , 33/* "ORANGE" */,-20 , 34/* "YELLOW" */,-20 , 35/* "GREEN" */,-20 , 36/* "BLUE" */,-20 , 37/* "PINK" */,-20 , 38/* "PURPLE" */,-20 , 13/* "EXACTLY" */,-20 , 18/* "LOCADVERB" */,-20 ),
	/* State 79 */ new Array( 29/* "VENUE" */,116 ),
	/* State 80 */ new Array( 67/* "$" */,-27 , 44/* "wON" */,-27 , 45/* "wOFF" */,-27 , 30/* "BLACK" */,-27 , 17/* "PREPOSITION" */,-27 , 31/* "WHITE" */,-27 , 32/* "RED" */,-27 , 33/* "ORANGE" */,-27 , 34/* "YELLOW" */,-27 , 35/* "GREEN" */,-27 , 36/* "BLUE" */,-27 , 37/* "PINK" */,-27 , 38/* "PURPLE" */,-27 , 13/* "EXACTLY" */,-27 , 18/* "LOCADVERB" */,-27 ),
	/* State 81 */ new Array( 16/* "POSITION" */,117 ),
	/* State 82 */ new Array( 67/* "$" */,-72 , 7/* "THIS" */,-72 , 28/* "LIGHT" */,-72 ),
	/* State 83 */ new Array( 4/* "INFO" */,118 , 67/* "$" */,-106 ),
	/* State 84 */ new Array( 67/* "$" */,-96 ),
	/* State 85 */ new Array( 6/* "THAT" */,119 , 17/* "PREPOSITION" */,120 , 67/* "$" */,-90 ),
	/* State 86 */ new Array( 30/* "BLACK" */,21 , 17/* "PREPOSITION" */,22 , 31/* "WHITE" */,23 , 32/* "RED" */,24 , 33/* "ORANGE" */,25 , 34/* "YELLOW" */,26 , 35/* "GREEN" */,27 , 36/* "BLUE" */,28 , 37/* "PINK" */,29 , 38/* "PURPLE" */,30 ),
	/* State 87 */ new Array( 18/* "LOCADVERB" */,122 ),
	/* State 88 */ new Array( 67/* "$" */,-55 ),
	/* State 89 */ new Array( 7/* "THIS" */,31 , 28/* "LIGHT" */,32 , 27/* "LIGHTS" */,33 , 14/* "NEW" */,57 ),
	/* State 90 */ new Array( 18/* "LOCADVERB" */,124 , 67/* "$" */,-84 ),
	/* State 91 */ new Array( 7/* "THIS" */,31 , 28/* "LIGHT" */,32 , 27/* "LIGHTS" */,33 , 14/* "NEW" */,57 ),
	/* State 92 */ new Array( 10/* "ONE" */,126 , 12/* "MULTIPLE" */,127 ),
	/* State 93 */ new Array( 67/* "$" */,-102 ),
	/* State 94 */ new Array( 67/* "$" */,-95 ),
	/* State 95 */ new Array( 67/* "$" */,-93 ),
	/* State 96 */ new Array( 67/* "$" */,-94 ),
	/* State 97 */ new Array( 67/* "$" */,-97 ),
	/* State 98 */ new Array( 4/* "INFO" */,128 ),
	/* State 99 */ new Array( 67/* "$" */,-100 ),
	/* State 100 */ new Array( 67/* "$" */,-103 ),
	/* State 101 */ new Array( 67/* "$" */,-31 ),
	/* State 102 */ new Array( 67/* "$" */,-34 ),
	/* State 103 */ new Array( 45/* "wOFF" */,129 , 44/* "wON" */,130 ),
	/* State 104 */ new Array( 67/* "$" */,-40 ),
	/* State 105 */ new Array( 38/* "PURPLE" */,67 , 37/* "PINK" */,68 , 36/* "BLUE" */,69 , 35/* "GREEN" */,70 , 34/* "YELLOW" */,71 , 33/* "ORANGE" */,72 , 32/* "RED" */,73 , 31/* "WHITE" */,74 , 30/* "BLACK" */,75 , 7/* "THIS" */,131 , 28/* "LIGHT" */,32 , 27/* "LIGHTS" */,33 , 14/* "NEW" */,57 ),
	/* State 106 */ new Array( 7/* "THIS" */,31 , 28/* "LIGHT" */,32 , 27/* "LIGHTS" */,33 , 14/* "NEW" */,57 ),
	/* State 107 */ new Array( 67/* "$" */,-69 ),
	/* State 108 */ new Array( 67/* "$" */,-58 ),
	/* State 109 */ new Array( 27/* "LIGHTS" */,134 ),
	/* State 110 */ new Array( 7/* "THIS" */,31 , 28/* "LIGHT" */,32 , 27/* "LIGHTS" */,33 , 14/* "NEW" */,57 ),
	/* State 111 */ new Array( 18/* "LOCADVERB" */,136 ),
	/* State 112 */ new Array( 8/* "AND" */,137 ),
	/* State 113 */ new Array( 67/* "$" */,-56 ),
	/* State 114 */ new Array( 18/* "LOCADVERB" */,138 , 17/* "PREPOSITION" */,139 , 67/* "$" */,-77 ),
	/* State 115 */ new Array( 28/* "LIGHT" */,140 ),
	/* State 116 */ new Array( 67/* "$" */,-25 , 44/* "wON" */,-25 , 45/* "wOFF" */,-25 , 30/* "BLACK" */,-25 , 17/* "PREPOSITION" */,-25 , 31/* "WHITE" */,-25 , 32/* "RED" */,-25 , 33/* "ORANGE" */,-25 , 34/* "YELLOW" */,-25 , 35/* "GREEN" */,-25 , 36/* "BLUE" */,-25 , 37/* "PINK" */,-25 , 38/* "PURPLE" */,-25 , 13/* "EXACTLY" */,-25 , 18/* "LOCADVERB" */,-25 ),
	/* State 117 */ new Array( 67/* "$" */,-73 , 7/* "THIS" */,-73 , 28/* "LIGHT" */,-73 ),
	/* State 118 */ new Array( 67/* "$" */,-105 ),
	/* State 119 */ new Array( 67/* "$" */,-91 ),
	/* State 120 */ new Array( 67/* "$" */,-92 ),
	/* State 121 */ new Array( 67/* "$" */,-44 ),
	/* State 122 */ new Array( 28/* "LIGHT" */,141 , 10/* "ONE" */,142 ),
	/* State 123 */ new Array( 67/* "$" */,-54 ),
	/* State 124 */ new Array( 67/* "$" */,-85 ),
	/* State 125 */ new Array( 67/* "$" */,-87 ),
	/* State 126 */ new Array( 7/* "THIS" */,31 , 28/* "LIGHT" */,32 , 27/* "LIGHTS" */,33 , 14/* "NEW" */,57 ),
	/* State 127 */ new Array( 7/* "THIS" */,31 , 28/* "LIGHT" */,32 , 27/* "LIGHTS" */,33 , 14/* "NEW" */,57 ),
	/* State 128 */ new Array( 67/* "$" */,-101 ),
	/* State 129 */ new Array( 67/* "$" */,-33 ),
	/* State 130 */ new Array( 67/* "$" */,-30 ),
	/* State 131 */ new Array( 27/* "LIGHTS" */,76 , 39/* "wCOLOR" */,145 , 28/* "LIGHT" */,78 , 67/* "$" */,-23 ),
	/* State 132 */ new Array( 67/* "$" */,-47 ),
	/* State 133 */ new Array( 67/* "$" */,-46 ),
	/* State 134 */ new Array( 67/* "$" */,-68 ),
	/* State 135 */ new Array( 67/* "$" */,-53 ),
	/* State 136 */ new Array( 10/* "ONE" */,146 ),
	/* State 137 */ new Array( 18/* "LOCADVERB" */,147 ),
	/* State 138 */ new Array( 67/* "$" */,-75 ),
	/* State 139 */ new Array( 18/* "LOCADVERB" */,148 ),
	/* State 140 */ new Array( 67/* "$" */,-21 , 44/* "wON" */,-21 , 45/* "wOFF" */,-21 , 30/* "BLACK" */,-21 , 17/* "PREPOSITION" */,-21 , 31/* "WHITE" */,-21 , 32/* "RED" */,-21 , 33/* "ORANGE" */,-21 , 34/* "YELLOW" */,-21 , 35/* "GREEN" */,-21 , 36/* "BLUE" */,-21 , 37/* "PINK" */,-21 , 38/* "PURPLE" */,-21 , 13/* "EXACTLY" */,-21 , 18/* "LOCADVERB" */,-21 ),
	/* State 141 */ new Array( 67/* "$" */,-64 ),
	/* State 142 */ new Array( 14/* "NEW" */,149 , 28/* "LIGHT" */,150 ),
	/* State 143 */ new Array( 67/* "$" */,-83 ),
	/* State 144 */ new Array( 67/* "$" */,-86 ),
	/* State 145 */ new Array( 7/* "THIS" */,115 , 67/* "$" */,-45 ),
	/* State 146 */ new Array( 28/* "LIGHT" */,151 , 14/* "NEW" */,152 ),
	/* State 147 */ new Array( 67/* "$" */,-65 ),
	/* State 148 */ new Array( 17/* "PREPOSITION" */,153 , 67/* "$" */,-74 ),
	/* State 149 */ new Array( 28/* "LIGHT" */,154 ),
	/* State 150 */ new Array( 67/* "$" */,-63 ),
	/* State 151 */ new Array( 67/* "$" */,-61 ),
	/* State 152 */ new Array( 28/* "LIGHT" */,155 ),
	/* State 153 */ new Array( 18/* "LOCADVERB" */,156 ),
	/* State 154 */ new Array( 67/* "$" */,-62 ),
	/* State 155 */ new Array( 67/* "$" */,-60 ),
	/* State 156 */ new Array( 67/* "$" */,-76 )
);

/* Goto-Table */
var goto_tab = new Array(
	/* State 0 */ new Array( 48/* utterance */,1 , 47/* phrases */,2 , 49/* pCOLOR */,3 , 50/* pLIGHT */,4 , 51/* pSWITCH */,5 , 52/* SWITCHLIGHT */,6 , 53/* pCHANGECOLOR */,7 , 54/* PAINT_IT */,8 , 55/* MOVE_COLOR */,9 , 56/* pADDLIGHT */,10 , 57/* ADD_LIGHT */,11 , 58/* ADD_TWO_LIGHTS */,12 , 59/* pCHANGEPOSITION */,13 , 60/* MOVE_LIGHTS */,14 , 61/* DELETE_LIGHT */,15 , 62/* DELETE_LIGHTS */,16 , 63/* SHOW_INFO */,17 , 64/* SHOW_KONTAKT */,18 , 65/* CLOSE_INFO */,19 , 66/* BACK_INFO */,20 ),
	/* State 1 */ new Array(  ),
	/* State 2 */ new Array(  ),
	/* State 3 */ new Array(  ),
	/* State 4 */ new Array( 49/* pCOLOR */,52 ),
	/* State 5 */ new Array( 50/* pLIGHT */,55 ),
	/* State 6 */ new Array(  ),
	/* State 7 */ new Array( 50/* pLIGHT */,58 , 49/* pCOLOR */,59 ),
	/* State 8 */ new Array(  ),
	/* State 9 */ new Array(  ),
	/* State 10 */ new Array( 50/* pLIGHT */,64 ),
	/* State 11 */ new Array(  ),
	/* State 12 */ new Array(  ),
	/* State 13 */ new Array(  ),
	/* State 14 */ new Array(  ),
	/* State 15 */ new Array(  ),
	/* State 16 */ new Array(  ),
	/* State 17 */ new Array(  ),
	/* State 18 */ new Array(  ),
	/* State 19 */ new Array(  ),
	/* State 20 */ new Array(  ),
	/* State 21 */ new Array(  ),
	/* State 22 */ new Array(  ),
	/* State 23 */ new Array(  ),
	/* State 24 */ new Array(  ),
	/* State 25 */ new Array(  ),
	/* State 26 */ new Array(  ),
	/* State 27 */ new Array(  ),
	/* State 28 */ new Array(  ),
	/* State 29 */ new Array(  ),
	/* State 30 */ new Array(  ),
	/* State 31 */ new Array(  ),
	/* State 32 */ new Array(  ),
	/* State 33 */ new Array(  ),
	/* State 34 */ new Array(  ),
	/* State 35 */ new Array(  ),
	/* State 36 */ new Array(  ),
	/* State 37 */ new Array(  ),
	/* State 38 */ new Array(  ),
	/* State 39 */ new Array(  ),
	/* State 40 */ new Array(  ),
	/* State 41 */ new Array(  ),
	/* State 42 */ new Array(  ),
	/* State 43 */ new Array(  ),
	/* State 44 */ new Array( 50/* pLIGHT */,88 ),
	/* State 45 */ new Array(  ),
	/* State 46 */ new Array( 50/* pLIGHT */,90 ),
	/* State 47 */ new Array(  ),
	/* State 48 */ new Array(  ),
	/* State 49 */ new Array(  ),
	/* State 50 */ new Array(  ),
	/* State 51 */ new Array(  ),
	/* State 52 */ new Array(  ),
	/* State 53 */ new Array(  ),
	/* State 54 */ new Array(  ),
	/* State 55 */ new Array(  ),
	/* State 56 */ new Array( 50/* pLIGHT */,103 ),
	/* State 57 */ new Array(  ),
	/* State 58 */ new Array( 49/* pCOLOR */,104 ),
	/* State 59 */ new Array(  ),
	/* State 60 */ new Array(  ),
	/* State 61 */ new Array( 50/* pLIGHT */,108 ),
	/* State 62 */ new Array(  ),
	/* State 63 */ new Array(  ),
	/* State 64 */ new Array(  ),
	/* State 65 */ new Array(  ),
	/* State 66 */ new Array(  ),
	/* State 67 */ new Array(  ),
	/* State 68 */ new Array(  ),
	/* State 69 */ new Array(  ),
	/* State 70 */ new Array(  ),
	/* State 71 */ new Array(  ),
	/* State 72 */ new Array(  ),
	/* State 73 */ new Array(  ),
	/* State 74 */ new Array(  ),
	/* State 75 */ new Array(  ),
	/* State 76 */ new Array(  ),
	/* State 77 */ new Array(  ),
	/* State 78 */ new Array(  ),
	/* State 79 */ new Array(  ),
	/* State 80 */ new Array(  ),
	/* State 81 */ new Array(  ),
	/* State 82 */ new Array(  ),
	/* State 83 */ new Array(  ),
	/* State 84 */ new Array(  ),
	/* State 85 */ new Array(  ),
	/* State 86 */ new Array( 49/* pCOLOR */,121 ),
	/* State 87 */ new Array(  ),
	/* State 88 */ new Array(  ),
	/* State 89 */ new Array( 50/* pLIGHT */,123 ),
	/* State 90 */ new Array(  ),
	/* State 91 */ new Array( 50/* pLIGHT */,125 ),
	/* State 92 */ new Array(  ),
	/* State 93 */ new Array(  ),
	/* State 94 */ new Array(  ),
	/* State 95 */ new Array(  ),
	/* State 96 */ new Array(  ),
	/* State 97 */ new Array(  ),
	/* State 98 */ new Array(  ),
	/* State 99 */ new Array(  ),
	/* State 100 */ new Array(  ),
	/* State 101 */ new Array(  ),
	/* State 102 */ new Array(  ),
	/* State 103 */ new Array(  ),
	/* State 104 */ new Array(  ),
	/* State 105 */ new Array( 50/* pLIGHT */,132 ),
	/* State 106 */ new Array( 50/* pLIGHT */,133 ),
	/* State 107 */ new Array(  ),
	/* State 108 */ new Array(  ),
	/* State 109 */ new Array(  ),
	/* State 110 */ new Array( 50/* pLIGHT */,135 ),
	/* State 111 */ new Array(  ),
	/* State 112 */ new Array(  ),
	/* State 113 */ new Array(  ),
	/* State 114 */ new Array(  ),
	/* State 115 */ new Array(  ),
	/* State 116 */ new Array(  ),
	/* State 117 */ new Array(  ),
	/* State 118 */ new Array(  ),
	/* State 119 */ new Array(  ),
	/* State 120 */ new Array(  ),
	/* State 121 */ new Array(  ),
	/* State 122 */ new Array(  ),
	/* State 123 */ new Array(  ),
	/* State 124 */ new Array(  ),
	/* State 125 */ new Array(  ),
	/* State 126 */ new Array( 50/* pLIGHT */,143 ),
	/* State 127 */ new Array( 50/* pLIGHT */,144 ),
	/* State 128 */ new Array(  ),
	/* State 129 */ new Array(  ),
	/* State 130 */ new Array(  ),
	/* State 131 */ new Array(  ),
	/* State 132 */ new Array(  ),
	/* State 133 */ new Array(  ),
	/* State 134 */ new Array(  ),
	/* State 135 */ new Array(  ),
	/* State 136 */ new Array(  ),
	/* State 137 */ new Array(  ),
	/* State 138 */ new Array(  ),
	/* State 139 */ new Array(  ),
	/* State 140 */ new Array(  ),
	/* State 141 */ new Array(  ),
	/* State 142 */ new Array(  ),
	/* State 143 */ new Array(  ),
	/* State 144 */ new Array(  ),
	/* State 145 */ new Array(  ),
	/* State 146 */ new Array(  ),
	/* State 147 */ new Array(  ),
	/* State 148 */ new Array(  ),
	/* State 149 */ new Array(  ),
	/* State 150 */ new Array(  ),
	/* State 151 */ new Array(  ),
	/* State 152 */ new Array(  ),
	/* State 153 */ new Array(  ),
	/* State 154 */ new Array(  ),
	/* State 155 */ new Array(  ),
	/* State 156 */ new Array(  )
);



/* Symbol labels */
var labels = new Array(
	"utterance'" /* Non-terminal symbol */,
	"WHITESPACE" /* Terminal symbol */,
	"V_SHOW_IMP" /* Terminal symbol */,
	"V_CLOSE_IMP" /* Terminal symbol */,
	"INFO" /* Terminal symbol */,
	"CONTACT" /* Terminal symbol */,
	"THAT" /* Terminal symbol */,
	"THIS" /* Terminal symbol */,
	"AND" /* Terminal symbol */,
	"NOT" /* Terminal symbol */,
	"ONE" /* Terminal symbol */,
	"TWO" /* Terminal symbol */,
	"MULTIPLE" /* Terminal symbol */,
	"EXACTLY" /* Terminal symbol */,
	"NEW" /* Terminal symbol */,
	"ADD" /* Terminal symbol */,
	"POSITION" /* Terminal symbol */,
	"PREPOSITION" /* Terminal symbol */,
	"LOCADVERB" /* Terminal symbol */,
	"MORE" /* Terminal symbol */,
	"BACK" /* Terminal symbol */,
	"wPAINT" /* Terminal symbol */,
	"CREATE" /* Terminal symbol */,
	"DELETE" /* Terminal symbol */,
	"MOVE" /* Terminal symbol */,
	"wCHANGE" /* Terminal symbol */,
	"HAVE" /* Terminal symbol */,
	"LIGHTS" /* Terminal symbol */,
	"LIGHT" /* Terminal symbol */,
	"VENUE" /* Terminal symbol */,
	"BLACK" /* Terminal symbol */,
	"WHITE" /* Terminal symbol */,
	"RED" /* Terminal symbol */,
	"ORANGE" /* Terminal symbol */,
	"YELLOW" /* Terminal symbol */,
	"GREEN" /* Terminal symbol */,
	"BLUE" /* Terminal symbol */,
	"PINK" /* Terminal symbol */,
	"PURPLE" /* Terminal symbol */,
	"wCOLOR" /* Terminal symbol */,
	"wSWITCH" /* Terminal symbol */,
	"wDO" /* Terminal symbol */,
	"wDISABLE" /* Terminal symbol */,
	"wENABLE" /* Terminal symbol */,
	"wON" /* Terminal symbol */,
	"wOFF" /* Terminal symbol */,
	"wALL" /* Terminal symbol */,
	"phrases" /* Non-terminal symbol */,
	"utterance" /* Non-terminal symbol */,
	"pCOLOR" /* Non-terminal symbol */,
	"pLIGHT" /* Non-terminal symbol */,
	"pSWITCH" /* Non-terminal symbol */,
	"SWITCHLIGHT" /* Non-terminal symbol */,
	"pCHANGECOLOR" /* Non-terminal symbol */,
	"PAINT_IT" /* Non-terminal symbol */,
	"MOVE_COLOR" /* Non-terminal symbol */,
	"pADDLIGHT" /* Non-terminal symbol */,
	"ADD_LIGHT" /* Non-terminal symbol */,
	"ADD_TWO_LIGHTS" /* Non-terminal symbol */,
	"pCHANGEPOSITION" /* Non-terminal symbol */,
	"MOVE_LIGHTS" /* Non-terminal symbol */,
	"DELETE_LIGHT" /* Non-terminal symbol */,
	"DELETE_LIGHTS" /* Non-terminal symbol */,
	"SHOW_INFO" /* Non-terminal symbol */,
	"SHOW_KONTAKT" /* Non-terminal symbol */,
	"CLOSE_INFO" /* Non-terminal symbol */,
	"BACK_INFO" /* Non-terminal symbol */,
	"$" /* Terminal symbol */
);


	
	info.offset = 0;
	info.src = src;
	info.att = new String();
	
	if( !err_off )
		err_off	= new Array();
	if( !err_la )
	err_la = new Array();
	
	sstack.push( 0 );
	vstack.push( 0 );
	
	la = __lex( info );

	while( true )
	{
		act = 158;
		for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
		{
			if( act_tab[sstack[sstack.length-1]][i] == la )
			{
				act = act_tab[sstack[sstack.length-1]][i+1];
				break;
			}
		}

		if( _dbg_withtrace && sstack.length > 0 )
		{
			__dbg_print( "\nState " + sstack[sstack.length-1] + "\n" +
							"\tLookahead: " + labels[la] + " (\"" + info.att + "\")\n" +
							"\tAction: " + act + "\n" + 
							"\tSource: \"" + info.src.substr( info.offset, 30 ) + ( ( info.offset + 30 < info.src.length ) ?
									"..." : "" ) + "\"\n" +
							"\tStack: " + sstack.join() + "\n" +
							"\tValue stack: " + vstack.join() + "\n" );
		}
		
			
		//Panic-mode: Try recovery when parse-error occurs!
		if( act == 158 )
		{
			if( _dbg_withtrace )
				__dbg_print( "Error detected: There is no reduce or shift on the symbol " + labels[la] );
			
			err_cnt++;
			err_off.push( info.offset - info.att.length );			
			err_la.push( new Array() );
			for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
				err_la[err_la.length-1].push( labels[act_tab[sstack[sstack.length-1]][i]] );
			
			//Remember the original stack!
			var rsstack = new Array();
			var rvstack = new Array();
			for( var i = 0; i < sstack.length; i++ )
			{
				rsstack[i] = sstack[i];
				rvstack[i] = vstack[i];
			}
			
			while( act == 158 && la != 67 )
			{
				if( _dbg_withtrace )
					__dbg_print( "\tError recovery\n" +
									"Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
									"Action: " + act + "\n\n" );
				if( la == -1 )
					info.offset++;
					
				while( act == 158 && sstack.length > 0 )
				{
					sstack.pop();
					vstack.pop();
					
					if( sstack.length == 0 )
						break;
						
					act = 158;
					for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
					{
						if( act_tab[sstack[sstack.length-1]][i] == la )
						{
							act = act_tab[sstack[sstack.length-1]][i+1];
							break;
						}
					}
				}
				
				if( act != 158 )
					break;
				
				for( var i = 0; i < rsstack.length; i++ )
				{
					sstack.push( rsstack[i] );
					vstack.push( rvstack[i] );
				}
				
				la = __lex( info );
			}
			
			if( act == 158 )
			{
				if( _dbg_withtrace )
					__dbg_print( "\tError recovery failed, terminating parse process..." );
				break;
			}


			if( _dbg_withtrace )
				__dbg_print( "\tError recovery succeeded, continuing" );
		}
		
		/*
		if( act == 158 )
			break;
		*/
		
		
		//Shift
		if( act > 0 )
		{
			//Parse tree
			var node = new treenode();
			node.sym = labels[ la ];
			node.att = info.att;
			node.child = new Array();
			tree.push( treenodes.length );
			treenodes.push( node );
			
			if( _dbg_withtrace )
				__dbg_print( "Shifting symbol: " + labels[la] + " (" + info.att + ")" );
		
			sstack.push( act );
			vstack.push( info.att );
			
			la = __lex( info );
			
			if( _dbg_withtrace )
				__dbg_print( "\tNew lookahead symbol: " + labels[la] + " (" + info.att + ")" );
		}
		//Reduce
		else
		{		
			act *= -1;
			
			if( _dbg_withtrace )
				__dbg_print( "Reducing by producution: " + act );
			
			rval = void(0);
			
			if( _dbg_withtrace )
				__dbg_print( "\tPerforming semantic action..." );
			
switch( act )
{
	case 0:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 1:
	{
		  _$result['semantic'] = _$result['semantic'].replace(/"{/g,'{').replace(/}"/g,'}'); console.log(_$result); semanticAnnotationResult.result = _$result
	}
	break;
	case 2:
	{
		 rval = vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['black'] = {};pcolor_temp['phrases']['black'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 3:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['preposition'] = {};pcolor_temp['phrases']['preposition'][0] = vstack[ vstack.length - 2 ]; pcolor_temp['phrases']['black'] = {};pcolor_temp['phrases']['black'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 4:
	{
		 rval = vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['white'] = {};pcolor_temp['phrases']['white'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 5:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['preposition'] = {};pcolor_temp['phrases']['preposition'][0] = vstack[ vstack.length - 2 ]; pcolor_temp['phrases']['white'] = {};pcolor_temp['phrases']['white'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 6:
	{
		 rval = vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['red'] = {};pcolor_temp['phrases']['red'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 7:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['preposition'] = {};pcolor_temp['phrases']['preposition'][0] = vstack[ vstack.length - 2 ]; pcolor_temp['phrases']['red'] = {};pcolor_temp['phrases']['red'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 8:
	{
		 rval = vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['orange'] = {};pcolor_temp['phrases']['orange'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 9:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['preposition'] = {};pcolor_temp['phrases']['preposition'][0] = vstack[ vstack.length - 2 ]; pcolor_temp['phrases']['orange'] = {};pcolor_temp['phrases']['orange'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 10:
	{
		 rval = vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['yellow'] = {};pcolor_temp['phrases']['yellow'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 11:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['preposition'] = {};pcolor_temp['phrases']['preposition'][0] = vstack[ vstack.length - 2 ]; pcolor_temp['phrases']['yellow'] = {};pcolor_temp['phrases']['yellow'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 12:
	{
		 rval = vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['green'] = {};pcolor_temp['phrases']['green'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 13:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['preposition'] = {};pcolor_temp['phrases']['preposition'][0] = vstack[ vstack.length - 2 ]; pcolor_temp['phrases']['green'] = {};pcolor_temp['phrases']['green'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 14:
	{
		 rval = vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['blue'] = {};pcolor_temp['phrases']['blue'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 15:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['preposition'] = {};pcolor_temp['phrases']['preposition'][0] = vstack[ vstack.length - 2 ]; pcolor_temp['phrases']['blue'] = {};pcolor_temp['phrases']['blue'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 16:
	{
		 rval = vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['pink'] = {};pcolor_temp['phrases']['pink'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 17:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['preposition'] = {};pcolor_temp['phrases']['preposition'][0] = vstack[ vstack.length - 2 ]; pcolor_temp['phrases']['pink'] = {};pcolor_temp['phrases']['pink'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 18:
	{
		 rval = vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['purple'] = {};pcolor_temp['phrases']['purple'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 19:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var pcolor_temp = {}; pcolor_temp['phrases'] = {};pcolor_temp['phrases']['preposition'] = {};pcolor_temp['phrases']['preposition'][0] = vstack[ vstack.length - 2 ]; pcolor_temp['phrases']['purple'] = {};pcolor_temp['phrases']['purple'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pcolor_temp['phrase']=_$phrase; pcolor_temp['semantic'] = '{"color":"' + function(){try{return _$phrase;} catch(e){return 'undefined';}}() + '"}'; _$pcolor[_$phrase] = pcolor_temp; _$result = pcolor_temp; 
	}
	break;
	case 20:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var plight_temp = {}; plight_temp['phrases'] = {};plight_temp['phrases']['this'] = {};plight_temp['phrases']['this'][0] = vstack[ vstack.length - 2 ]; plight_temp['phrases']['light'] = {};plight_temp['phrases']['light'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; plight_temp['phrase']=_$phrase; plight_temp['semantic'] = '{"light":"' + function(){try{return _$light[plight_temp['phrases']['light'][0]];} catch(e){return 'undefined';}}() + '","lights":"' + function(){try{return _$lights[plight_temp['phrases']['lights'][0]];} catch(e){return 'undefined';}}() + '","object":"' + function(){try{return _$this[plight_temp['phrases']['this'][0]];} catch(e){return 'undefined';}}() + '"}'; _$plight[_$phrase] = plight_temp; _$result = plight_temp; 
	}
	break;
	case 21:
	{
		 rval = vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var plight_temp = {}; plight_temp['phrases'] = {};plight_temp['phrases']['this'] = {};plight_temp['phrases']['this'][0] = vstack[ vstack.length - 4 ]; plight_temp['phrases']['wcolor'] = {};plight_temp['phrases']['wcolor'][0] = vstack[ vstack.length - 3 ]; plight_temp['phrases']['this'][1] = vstack[ vstack.length - 2 ]; plight_temp['phrases']['light'] = {};plight_temp['phrases']['light'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; plight_temp['phrase']=_$phrase; plight_temp['semantic'] = '{"light":"' + function(){try{return _$light[plight_temp['phrases']['light'][0]];} catch(e){return 'undefined';}}() + '","lights":"' + function(){try{return _$lights[plight_temp['phrases']['lights'][0]];} catch(e){return 'undefined';}}() + '","object":"' + function(){try{return _$this[plight_temp['phrases']['this'][0]];} catch(e){return 'undefined';}}() + '"}'; _$plight[_$phrase] = plight_temp; _$result = plight_temp; 
	}
	break;
	case 22:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var plight_temp = {}; plight_temp['phrases'] = {};plight_temp['phrases']['this'] = {};plight_temp['phrases']['this'][0] = vstack[ vstack.length - 2 ]; plight_temp['phrases']['lights'] = {};plight_temp['phrases']['lights'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; plight_temp['phrase']=_$phrase; plight_temp['semantic'] = '{"light":"' + function(){try{return _$light[plight_temp['phrases']['light'][0]];} catch(e){return 'undefined';}}() + '","lights":"' + function(){try{return _$lights[plight_temp['phrases']['lights'][0]];} catch(e){return 'undefined';}}() + '","object":"' + function(){try{return _$this[plight_temp['phrases']['this'][0]];} catch(e){return 'undefined';}}() + '"}'; _$plight[_$phrase] = plight_temp; _$result = plight_temp; 
	}
	break;
	case 23:
	{
		 rval = vstack[ vstack.length - 1 ]; var plight_temp = {}; plight_temp['phrases'] = {};plight_temp['phrases']['this'] = {};plight_temp['phrases']['this'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; plight_temp['phrase']=_$phrase; plight_temp['semantic'] = '{"light":"' + function(){try{return _$light[plight_temp['phrases']['light'][0]];} catch(e){return 'undefined';}}() + '","lights":"' + function(){try{return _$lights[plight_temp['phrases']['lights'][0]];} catch(e){return 'undefined';}}() + '","object":"' + function(){try{return _$this[plight_temp['phrases']['this'][0]];} catch(e){return 'undefined';}}() + '"}'; _$plight[_$phrase] = plight_temp; _$result = plight_temp; 
	}
	break;
	case 24:
	{
		 rval = vstack[ vstack.length - 1 ]; var plight_temp = {}; plight_temp['phrases'] = {};plight_temp['phrases']['light'] = {};plight_temp['phrases']['light'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; plight_temp['phrase']=_$phrase; plight_temp['semantic'] = '{"light":"' + function(){try{return _$light[plight_temp['phrases']['light'][0]];} catch(e){return 'undefined';}}() + '","lights":"' + function(){try{return _$lights[plight_temp['phrases']['lights'][0]];} catch(e){return 'undefined';}}() + '","object":"' + function(){try{return _$this[plight_temp['phrases']['this'][0]];} catch(e){return 'undefined';}}() + '"}'; _$plight[_$phrase] = plight_temp; _$result = plight_temp; 
	}
	break;
	case 25:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var plight_temp = {}; plight_temp['phrases'] = {};plight_temp['phrases']['light'] = {};plight_temp['phrases']['light'][0] = vstack[ vstack.length - 3 ]; plight_temp['phrases']['preposition'] = {};plight_temp['phrases']['preposition'][0] = vstack[ vstack.length - 2 ]; plight_temp['phrases']['venue'] = {};plight_temp['phrases']['venue'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; plight_temp['phrase']=_$phrase; plight_temp['semantic'] = '{"light":"' + function(){try{return _$light[plight_temp['phrases']['light'][0]];} catch(e){return 'undefined';}}() + '","lights":"' + function(){try{return _$lights[plight_temp['phrases']['lights'][0]];} catch(e){return 'undefined';}}() + '","object":"' + function(){try{return _$this[plight_temp['phrases']['this'][0]];} catch(e){return 'undefined';}}() + '"}'; _$plight[_$phrase] = plight_temp; _$result = plight_temp; 
	}
	break;
	case 26:
	{
		 rval = vstack[ vstack.length - 1 ]; var plight_temp = {}; plight_temp['phrases'] = {};plight_temp['phrases']['lights'] = {};plight_temp['phrases']['lights'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; plight_temp['phrase']=_$phrase; plight_temp['semantic'] = '{"light":"' + function(){try{return _$light[plight_temp['phrases']['light'][0]];} catch(e){return 'undefined';}}() + '","lights":"' + function(){try{return _$lights[plight_temp['phrases']['lights'][0]];} catch(e){return 'undefined';}}() + '","object":"' + function(){try{return _$this[plight_temp['phrases']['this'][0]];} catch(e){return 'undefined';}}() + '"}'; _$plight[_$phrase] = plight_temp; _$result = plight_temp; 
	}
	break;
	case 27:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var plight_temp = {}; plight_temp['phrases'] = {};plight_temp['phrases']['new'] = {};plight_temp['phrases']['new'][0] = vstack[ vstack.length - 2 ]; plight_temp['phrases']['light'] = {};plight_temp['phrases']['light'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; plight_temp['phrase']=_$phrase; plight_temp['semantic'] = '{"light":"' + function(){try{return _$light[plight_temp['phrases']['light'][0]];} catch(e){return 'undefined';}}() + '","lights":"' + function(){try{return _$lights[plight_temp['phrases']['lights'][0]];} catch(e){return 'undefined';}}() + '","object":"' + function(){try{return _$this[plight_temp['phrases']['this'][0]];} catch(e){return 'undefined';}}() + '"}'; _$plight[_$phrase] = plight_temp; _$result = plight_temp; 
	}
	break;
	case 28:
	{
		 rval = vstack[ vstack.length - 1 ]; var pswitch_temp = {}; pswitch_temp['phrases'] = {};pswitch_temp['phrases']['wswitch'] = {};pswitch_temp['phrases']['wswitch'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pswitch_temp['phrase']=_$phrase; pswitch_temp['semantic'] = '{"switch":{}}'; _$pswitch[_$phrase] = pswitch_temp; _$result = pswitch_temp; 
	}
	break;
	case 29:
	{
		 rval = vstack[ vstack.length - 1 ]; var pswitch_temp = {}; pswitch_temp['phrases'] = {};pswitch_temp['phrases']['wdo'] = {};pswitch_temp['phrases']['wdo'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pswitch_temp['phrase']=_$phrase; pswitch_temp['semantic'] = '{"switch":{}}'; _$pswitch[_$phrase] = pswitch_temp; _$result = pswitch_temp; 
	}
	break;
	case 30:
	{
		 rval = vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ] + ' ' + vstack[ vstack.length - 0 ]; var switchlight_temp = {}; switchlight_temp['phrases'] = {};switchlight_temp['phrases']['pswitch'] = {};switchlight_temp['phrases']['pswitch'][0] = vstack[ vstack.length - 4 ]; switchlight_temp['phrases']['wall'] = {};switchlight_temp['phrases']['wall'][0] = vstack[ vstack.length - 3 ]; switchlight_temp['phrases']['plight'] = {};switchlight_temp['phrases']['plight'][0] = vstack[ vstack.length - 2 ]; switchlight_temp['phrases']['won'] = {};switchlight_temp['phrases']['won'][0] = vstack[ vstack.length - 1 ]; switchlight_temp['phrases'][''] = {};switchlight_temp['phrases'][''][0] = vstack[ vstack.length - 0 ]; var _$phrase = rval; switchlight_temp['phrase']=_$phrase; switchlight_temp['semantic'] = '{"switchLight":{},"light":"' + function(){try{return _$plight[switchlight_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '","on":"' + function(){try{return _$on[switchlight_temp['phrases']['on'][0]];} catch(e){return 'undefined';}}() + '","off":"' + function(){try{return _$off[switchlight_temp['phrases']['off'][0]];} catch(e){return 'undefined';}}() + '","all":"' + function(){try{return _$wall[switchlight_temp['phrases']['wall'][0]];} catch(e){return 'undefined';}}() + '"}'; _$switchlight[_$phrase] = switchlight_temp; _$result = switchlight_temp; 
	}
	break;
	case 31:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var switchlight_temp = {}; switchlight_temp['phrases'] = {};switchlight_temp['phrases']['pswitch'] = {};switchlight_temp['phrases']['pswitch'][0] = vstack[ vstack.length - 3 ]; switchlight_temp['phrases']['plight'] = {};switchlight_temp['phrases']['plight'][0] = vstack[ vstack.length - 2 ]; switchlight_temp['phrases']['won'] = {};switchlight_temp['phrases']['won'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; switchlight_temp['phrase']=_$phrase; switchlight_temp['semantic'] = '{"switchLight":{},"light":"' + function(){try{return _$plight[switchlight_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '","on":"' + function(){try{return _$on[switchlight_temp['phrases']['on'][0]];} catch(e){return 'undefined';}}() + '","off":"' + function(){try{return _$off[switchlight_temp['phrases']['off'][0]];} catch(e){return 'undefined';}}() + '","all":"' + function(){try{return _$wall[switchlight_temp['phrases']['wall'][0]];} catch(e){return 'undefined';}}() + '"}'; _$switchlight[_$phrase] = switchlight_temp; _$result = switchlight_temp; 
	}
	break;
	case 32:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var switchlight_temp = {}; switchlight_temp['phrases'] = {};switchlight_temp['phrases']['plight'] = {};switchlight_temp['phrases']['plight'][0] = vstack[ vstack.length - 2 ]; switchlight_temp['phrases']['won'] = {};switchlight_temp['phrases']['won'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; switchlight_temp['phrase']=_$phrase; switchlight_temp['semantic'] = '{"switchLight":{},"light":"' + function(){try{return _$plight[switchlight_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '","on":"' + function(){try{return _$on[switchlight_temp['phrases']['on'][0]];} catch(e){return 'undefined';}}() + '","off":"' + function(){try{return _$off[switchlight_temp['phrases']['off'][0]];} catch(e){return 'undefined';}}() + '","all":"' + function(){try{return _$wall[switchlight_temp['phrases']['wall'][0]];} catch(e){return 'undefined';}}() + '"}'; _$switchlight[_$phrase] = switchlight_temp; _$result = switchlight_temp; 
	}
	break;
	case 33:
	{
		 rval = vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var switchlight_temp = {}; switchlight_temp['phrases'] = {};switchlight_temp['phrases']['pswitch'] = {};switchlight_temp['phrases']['pswitch'][0] = vstack[ vstack.length - 4 ]; switchlight_temp['phrases']['wall'] = {};switchlight_temp['phrases']['wall'][0] = vstack[ vstack.length - 3 ]; switchlight_temp['phrases']['plight'] = {};switchlight_temp['phrases']['plight'][0] = vstack[ vstack.length - 2 ]; switchlight_temp['phrases']['woff'] = {};switchlight_temp['phrases']['woff'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; switchlight_temp['phrase']=_$phrase; switchlight_temp['semantic'] = '{"switchLight":{},"light":"' + function(){try{return _$plight[switchlight_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '","on":"' + function(){try{return _$on[switchlight_temp['phrases']['on'][0]];} catch(e){return 'undefined';}}() + '","off":"' + function(){try{return _$off[switchlight_temp['phrases']['off'][0]];} catch(e){return 'undefined';}}() + '","all":"' + function(){try{return _$wall[switchlight_temp['phrases']['wall'][0]];} catch(e){return 'undefined';}}() + '"}'; _$switchlight[_$phrase] = switchlight_temp; _$result = switchlight_temp; 
	}
	break;
	case 34:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var switchlight_temp = {}; switchlight_temp['phrases'] = {};switchlight_temp['phrases']['pswitch'] = {};switchlight_temp['phrases']['pswitch'][0] = vstack[ vstack.length - 3 ]; switchlight_temp['phrases']['plight'] = {};switchlight_temp['phrases']['plight'][0] = vstack[ vstack.length - 2 ]; switchlight_temp['phrases']['woff'] = {};switchlight_temp['phrases']['woff'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; switchlight_temp['phrase']=_$phrase; switchlight_temp['semantic'] = '{"switchLight":{},"light":"' + function(){try{return _$plight[switchlight_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '","on":"' + function(){try{return _$on[switchlight_temp['phrases']['on'][0]];} catch(e){return 'undefined';}}() + '","off":"' + function(){try{return _$off[switchlight_temp['phrases']['off'][0]];} catch(e){return 'undefined';}}() + '","all":"' + function(){try{return _$wall[switchlight_temp['phrases']['wall'][0]];} catch(e){return 'undefined';}}() + '"}'; _$switchlight[_$phrase] = switchlight_temp; _$result = switchlight_temp; 
	}
	break;
	case 35:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var switchlight_temp = {}; switchlight_temp['phrases'] = {};switchlight_temp['phrases']['plight'] = {};switchlight_temp['phrases']['plight'][0] = vstack[ vstack.length - 2 ]; switchlight_temp['phrases']['woff'] = {};switchlight_temp['phrases']['woff'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; switchlight_temp['phrase']=_$phrase; switchlight_temp['semantic'] = '{"switchLight":{},"light":"' + function(){try{return _$plight[switchlight_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '","on":"' + function(){try{return _$on[switchlight_temp['phrases']['on'][0]];} catch(e){return 'undefined';}}() + '","off":"' + function(){try{return _$off[switchlight_temp['phrases']['off'][0]];} catch(e){return 'undefined';}}() + '","all":"' + function(){try{return _$wall[switchlight_temp['phrases']['wall'][0]];} catch(e){return 'undefined';}}() + '"}'; _$switchlight[_$phrase] = switchlight_temp; _$result = switchlight_temp; 
	}
	break;
	case 36:
	{
		 rval = vstack[ vstack.length - 1 ]; var pchangecolor_temp = {}; pchangecolor_temp['phrases'] = {};pchangecolor_temp['phrases']['pswitch'] = {};pchangecolor_temp['phrases']['pswitch'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pchangecolor_temp['phrase']=_$phrase; pchangecolor_temp['semantic'] = '{"switch":{}}'; _$pchangecolor[_$phrase] = pchangecolor_temp; _$result = pchangecolor_temp; 
	}
	break;
	case 37:
	{
		 rval = vstack[ vstack.length - 1 ]; var pchangecolor_temp = {}; pchangecolor_temp['phrases'] = {};pchangecolor_temp['phrases']['wpaint'] = {};pchangecolor_temp['phrases']['wpaint'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pchangecolor_temp['phrase']=_$phrase; pchangecolor_temp['semantic'] = '{"switch":{}}'; _$pchangecolor[_$phrase] = pchangecolor_temp; _$result = pchangecolor_temp; 
	}
	break;
	case 38:
	{
		 rval = vstack[ vstack.length - 1 ]; var pchangecolor_temp = {}; pchangecolor_temp['phrases'] = {};pchangecolor_temp['phrases']['wchange'] = {};pchangecolor_temp['phrases']['wchange'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pchangecolor_temp['phrase']=_$phrase; pchangecolor_temp['semantic'] = '{"switch":{}}'; _$pchangecolor[_$phrase] = pchangecolor_temp; _$result = pchangecolor_temp; 
	}
	break;
	case 39:
	{
		 rval = vstack[ vstack.length - 1 ]; var pchangecolor_temp = {}; pchangecolor_temp['phrases'] = {};pchangecolor_temp['phrases']['v_show_imp'] = {};pchangecolor_temp['phrases']['v_show_imp'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pchangecolor_temp['phrase']=_$phrase; pchangecolor_temp['semantic'] = '{"switch":{}}'; _$pchangecolor[_$phrase] = pchangecolor_temp; _$result = pchangecolor_temp; 
	}
	break;
	case 40:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var paint_it_temp = {}; paint_it_temp['phrases'] = {};paint_it_temp['phrases']['pchangecolor'] = {};paint_it_temp['phrases']['pchangecolor'][0] = vstack[ vstack.length - 3 ]; paint_it_temp['phrases']['plight'] = {};paint_it_temp['phrases']['plight'][0] = vstack[ vstack.length - 2 ]; paint_it_temp['phrases']['pcolor'] = {};paint_it_temp['phrases']['pcolor'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; paint_it_temp['phrase']=_$phrase; paint_it_temp['semantic'] = '{"paintLight":"' + function(){try{return _$pcolor[paint_it_temp['phrases']['pcolor'][0]]['semantic'];} catch(e){return 'undefined';}}() + '"}'; _$paint_it[_$phrase] = paint_it_temp; _$result = paint_it_temp; 
	}
	break;
	case 41:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var paint_it_temp = {}; paint_it_temp['phrases'] = {};paint_it_temp['phrases']['pchangecolor'] = {};paint_it_temp['phrases']['pchangecolor'][0] = vstack[ vstack.length - 2 ]; paint_it_temp['phrases']['pcolor'] = {};paint_it_temp['phrases']['pcolor'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; paint_it_temp['phrase']=_$phrase; paint_it_temp['semantic'] = '{"paintLight":"' + function(){try{return _$pcolor[paint_it_temp['phrases']['pcolor'][0]]['semantic'];} catch(e){return 'undefined';}}() + '"}'; _$paint_it[_$phrase] = paint_it_temp; _$result = paint_it_temp; 
	}
	break;
	case 42:
	{
		 rval = vstack[ vstack.length - 1 ]; var paint_it_temp = {}; paint_it_temp['phrases'] = {};paint_it_temp['phrases']['pcolor'] = {};paint_it_temp['phrases']['pcolor'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; paint_it_temp['phrase']=_$phrase; paint_it_temp['semantic'] = '{"paintLight":"' + function(){try{return _$pcolor[paint_it_temp['phrases']['pcolor'][0]]['semantic'];} catch(e){return 'undefined';}}() + '"}'; _$paint_it[_$phrase] = paint_it_temp; _$result = paint_it_temp; 
	}
	break;
	case 43:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var paint_it_temp = {}; paint_it_temp['phrases'] = {};paint_it_temp['phrases']['plight'] = {};paint_it_temp['phrases']['plight'][0] = vstack[ vstack.length - 2 ]; paint_it_temp['phrases']['pcolor'] = {};paint_it_temp['phrases']['pcolor'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; paint_it_temp['phrase']=_$phrase; paint_it_temp['semantic'] = '{"paintLight":"' + function(){try{return _$pcolor[paint_it_temp['phrases']['pcolor'][0]]['semantic'];} catch(e){return 'undefined';}}() + '"}'; _$paint_it[_$phrase] = paint_it_temp; _$result = paint_it_temp; 
	}
	break;
	case 44:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var paint_it_temp = {}; paint_it_temp['phrases'] = {};paint_it_temp['phrases']['and'] = {};paint_it_temp['phrases']['and'][0] = vstack[ vstack.length - 3 ]; paint_it_temp['phrases']['locadverb'] = {};paint_it_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 2 ]; paint_it_temp['phrases']['pcolor'] = {};paint_it_temp['phrases']['pcolor'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; paint_it_temp['phrase']=_$phrase; paint_it_temp['semantic'] = '{"paintLight":"' + function(){try{return _$pcolor[paint_it_temp['phrases']['pcolor'][0]]['semantic'];} catch(e){return 'undefined';}}() + '"}'; _$paint_it[_$phrase] = paint_it_temp; _$result = paint_it_temp; 
	}
	break;
	case 45:
	{
		 rval = vstack[ vstack.length - 5 ] + ' ' + vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var move_color_temp = {}; move_color_temp['phrases'] = {};move_color_temp['phrases']['pchangecolor'] = {};move_color_temp['phrases']['pchangecolor'][0] = vstack[ vstack.length - 5 ]; move_color_temp['phrases']['plight'] = {};move_color_temp['phrases']['plight'][0] = vstack[ vstack.length - 4 ]; move_color_temp['phrases']['preposition'] = {};move_color_temp['phrases']['preposition'][0] = vstack[ vstack.length - 3 ]; move_color_temp['phrases']['this'] = {};move_color_temp['phrases']['this'][0] = vstack[ vstack.length - 2 ]; move_color_temp['phrases']['wcolor'] = {};move_color_temp['phrases']['wcolor'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; move_color_temp['phrase']=_$phrase; move_color_temp['semantic'] = '{"moveColor":{}}'; _$move_color[_$phrase] = move_color_temp; _$result = move_color_temp; 
	}
	break;
	case 46:
	{
		 rval = vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var move_color_temp = {}; move_color_temp['phrases'] = {};move_color_temp['phrases']['pchangecolor'] = {};move_color_temp['phrases']['pchangecolor'][0] = vstack[ vstack.length - 4 ]; move_color_temp['phrases']['plight'] = {};move_color_temp['phrases']['plight'][0] = vstack[ vstack.length - 3 ]; move_color_temp['phrases']['exactly'] = {};move_color_temp['phrases']['exactly'][0] = vstack[ vstack.length - 2 ]; move_color_temp['phrases']['plight'][1] = vstack[ vstack.length - 1 ]; var _$phrase = rval; move_color_temp['phrase']=_$phrase; move_color_temp['semantic'] = '{"moveColor":{}}'; _$move_color[_$phrase] = move_color_temp; _$result = move_color_temp; 
	}
	break;
	case 47:
	{
		 rval = vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var move_color_temp = {}; move_color_temp['phrases'] = {};move_color_temp['phrases']['pchangecolor'] = {};move_color_temp['phrases']['pchangecolor'][0] = vstack[ vstack.length - 4 ]; move_color_temp['phrases']['plight'] = {};move_color_temp['phrases']['plight'][0] = vstack[ vstack.length - 3 ]; move_color_temp['phrases']['preposition'] = {};move_color_temp['phrases']['preposition'][0] = vstack[ vstack.length - 2 ]; move_color_temp['phrases']['plight'][1] = vstack[ vstack.length - 1 ]; var _$phrase = rval; move_color_temp['phrase']=_$phrase; move_color_temp['semantic'] = '{"moveColor":{}}'; _$move_color[_$phrase] = move_color_temp; _$result = move_color_temp; 
	}
	break;
	case 48:
	{
		 rval = vstack[ vstack.length - 5 ] + ' ' + vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var move_color_temp = {}; move_color_temp['phrases'] = {};move_color_temp['phrases']['pchangecolor'] = {};move_color_temp['phrases']['pchangecolor'][0] = vstack[ vstack.length - 5 ]; move_color_temp['phrases']['plight'] = {};move_color_temp['phrases']['plight'][0] = vstack[ vstack.length - 4 ]; move_color_temp['phrases']['preposition'] = {};move_color_temp['phrases']['preposition'][0] = vstack[ vstack.length - 3 ]; move_color_temp['phrases']['this'] = {};move_color_temp['phrases']['this'][0] = vstack[ vstack.length - 2 ]; move_color_temp['phrases']['wcolor'] = {};move_color_temp['phrases']['wcolor'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; move_color_temp['phrase']=_$phrase; move_color_temp['semantic'] = '{"moveColor":{}}'; _$move_color[_$phrase] = move_color_temp; _$result = move_color_temp; 
	}
	break;
	case 49:
	{
		 rval = vstack[ vstack.length - 1 ]; var paddlight_temp = {}; paddlight_temp['phrases'] = {};paddlight_temp['phrases']['have'] = {};paddlight_temp['phrases']['have'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; paddlight_temp['phrase']=_$phrase; paddlight_temp['semantic'] = '{"addLight":{}}'; _$paddlight[_$phrase] = paddlight_temp; _$result = paddlight_temp; 
	}
	break;
	case 50:
	{
		 rval = vstack[ vstack.length - 1 ]; var paddlight_temp = {}; paddlight_temp['phrases'] = {};paddlight_temp['phrases']['add'] = {};paddlight_temp['phrases']['add'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; paddlight_temp['phrase']=_$phrase; paddlight_temp['semantic'] = '{"addLight":{}}'; _$paddlight[_$phrase] = paddlight_temp; _$result = paddlight_temp; 
	}
	break;
	case 51:
	{
		 rval = vstack[ vstack.length - 1 ]; var paddlight_temp = {}; paddlight_temp['phrases'] = {};paddlight_temp['phrases']['create'] = {};paddlight_temp['phrases']['create'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; paddlight_temp['phrase']=_$phrase; paddlight_temp['semantic'] = '{"addLight":{}}'; _$paddlight[_$phrase] = paddlight_temp; _$result = paddlight_temp; 
	}
	break;
	case 52:
	{
		 rval = vstack[ vstack.length - 1 ]; var paddlight_temp = {}; paddlight_temp['phrases'] = {};paddlight_temp['phrases']['new'] = {};paddlight_temp['phrases']['new'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; paddlight_temp['phrase']=_$phrase; paddlight_temp['semantic'] = '{"addLight":{}}'; _$paddlight[_$phrase] = paddlight_temp; _$result = paddlight_temp; 
	}
	break;
	case 53:
	{
		 rval = vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_light_temp = {}; add_light_temp['phrases'] = {};add_light_temp['phrases']['paddlight'] = {};add_light_temp['phrases']['paddlight'][0] = vstack[ vstack.length - 4 ]; add_light_temp['phrases']['locadverb'] = {};add_light_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 3 ]; add_light_temp['phrases']['one'] = {};add_light_temp['phrases']['one'][0] = vstack[ vstack.length - 2 ]; add_light_temp['phrases']['plight'] = {};add_light_temp['phrases']['plight'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_light_temp['phrase']=_$phrase; add_light_temp['semantic'] = '{"addLight":"' + function(){try{return _$plight[add_light_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '"}'; _$add_light[_$phrase] = add_light_temp; _$result = add_light_temp; 
	}
	break;
	case 54:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_light_temp = {}; add_light_temp['phrases'] = {};add_light_temp['phrases']['locadverb'] = {};add_light_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 3 ]; add_light_temp['phrases']['one'] = {};add_light_temp['phrases']['one'][0] = vstack[ vstack.length - 2 ]; add_light_temp['phrases']['plight'] = {};add_light_temp['phrases']['plight'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_light_temp['phrase']=_$phrase; add_light_temp['semantic'] = '{"addLight":"' + function(){try{return _$plight[add_light_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '"}'; _$add_light[_$phrase] = add_light_temp; _$result = add_light_temp; 
	}
	break;
	case 55:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_light_temp = {}; add_light_temp['phrases'] = {};add_light_temp['phrases']['locadverb'] = {};add_light_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 2 ]; add_light_temp['phrases']['plight'] = {};add_light_temp['phrases']['plight'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_light_temp['phrase']=_$phrase; add_light_temp['semantic'] = '{"addLight":"' + function(){try{return _$plight[add_light_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '"}'; _$add_light[_$phrase] = add_light_temp; _$result = add_light_temp; 
	}
	break;
	case 56:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_light_temp = {}; add_light_temp['phrases'] = {};add_light_temp['phrases']['paddlight'] = {};add_light_temp['phrases']['paddlight'][0] = vstack[ vstack.length - 3 ]; add_light_temp['phrases']['plight'] = {};add_light_temp['phrases']['plight'][0] = vstack[ vstack.length - 2 ]; add_light_temp['phrases']['locadverb'] = {};add_light_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_light_temp['phrase']=_$phrase; add_light_temp['semantic'] = '{"addLight":"' + function(){try{return _$plight[add_light_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '"}'; _$add_light[_$phrase] = add_light_temp; _$result = add_light_temp; 
	}
	break;
	case 57:
	{
		 rval = vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_light_temp = {}; add_light_temp['phrases'] = {};add_light_temp['phrases']['paddlight'] = {};add_light_temp['phrases']['paddlight'][0] = vstack[ vstack.length - 4 ]; add_light_temp['phrases']['locadverb'] = {};add_light_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 3 ]; add_light_temp['phrases']['one'] = {};add_light_temp['phrases']['one'][0] = vstack[ vstack.length - 2 ]; add_light_temp['phrases']['plight'] = {};add_light_temp['phrases']['plight'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_light_temp['phrase']=_$phrase; add_light_temp['semantic'] = '{"addLight":"' + function(){try{return _$plight[add_light_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '"}'; _$add_light[_$phrase] = add_light_temp; _$result = add_light_temp; 
	}
	break;
	case 58:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_light_temp = {}; add_light_temp['phrases'] = {};add_light_temp['phrases']['paddlight'] = {};add_light_temp['phrases']['paddlight'][0] = vstack[ vstack.length - 3 ]; add_light_temp['phrases']['one'] = {};add_light_temp['phrases']['one'][0] = vstack[ vstack.length - 2 ]; add_light_temp['phrases']['plight'] = {};add_light_temp['phrases']['plight'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_light_temp['phrase']=_$phrase; add_light_temp['semantic'] = '{"addLight":"' + function(){try{return _$plight[add_light_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '"}'; _$add_light[_$phrase] = add_light_temp; _$result = add_light_temp; 
	}
	break;
	case 59:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_light_temp = {}; add_light_temp['phrases'] = {};add_light_temp['phrases']['paddlight'] = {};add_light_temp['phrases']['paddlight'][0] = vstack[ vstack.length - 2 ]; add_light_temp['phrases']['plight'] = {};add_light_temp['phrases']['plight'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_light_temp['phrase']=_$phrase; add_light_temp['semantic'] = '{"addLight":"' + function(){try{return _$plight[add_light_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '"}'; _$add_light[_$phrase] = add_light_temp; _$result = add_light_temp; 
	}
	break;
	case 60:
	{
		 rval = vstack[ vstack.length - 7 ] + ' ' + vstack[ vstack.length - 6 ] + ' ' + vstack[ vstack.length - 5 ] + ' ' + vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_two_lights_temp = {}; add_two_lights_temp['phrases'] = {};add_two_lights_temp['phrases']['paddlight'] = {};add_two_lights_temp['phrases']['paddlight'][0] = vstack[ vstack.length - 7 ]; add_two_lights_temp['phrases']['locadverb'] = {};add_two_lights_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 6 ]; add_two_lights_temp['phrases']['and'] = {};add_two_lights_temp['phrases']['and'][0] = vstack[ vstack.length - 5 ]; add_two_lights_temp['phrases']['locadverb'][1] = vstack[ vstack.length - 4 ]; add_two_lights_temp['phrases']['one'] = {};add_two_lights_temp['phrases']['one'][0] = vstack[ vstack.length - 3 ]; add_two_lights_temp['phrases']['new'] = {};add_two_lights_temp['phrases']['new'][0] = vstack[ vstack.length - 2 ]; add_two_lights_temp['phrases']['light'] = {};add_two_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_two_lights_temp['phrase']=_$phrase; add_two_lights_temp['semantic'] = '{"addTwoLights":{}}'; _$add_two_lights[_$phrase] = add_two_lights_temp; _$result = add_two_lights_temp; 
	}
	break;
	case 61:
	{
		 rval = vstack[ vstack.length - 6 ] + ' ' + vstack[ vstack.length - 5 ] + ' ' + vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_two_lights_temp = {}; add_two_lights_temp['phrases'] = {};add_two_lights_temp['phrases']['paddlight'] = {};add_two_lights_temp['phrases']['paddlight'][0] = vstack[ vstack.length - 6 ]; add_two_lights_temp['phrases']['locadverb'] = {};add_two_lights_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 5 ]; add_two_lights_temp['phrases']['and'] = {};add_two_lights_temp['phrases']['and'][0] = vstack[ vstack.length - 4 ]; add_two_lights_temp['phrases']['locadverb'][1] = vstack[ vstack.length - 3 ]; add_two_lights_temp['phrases']['one'] = {};add_two_lights_temp['phrases']['one'][0] = vstack[ vstack.length - 2 ]; add_two_lights_temp['phrases']['light'] = {};add_two_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_two_lights_temp['phrase']=_$phrase; add_two_lights_temp['semantic'] = '{"addTwoLights":{}}'; _$add_two_lights[_$phrase] = add_two_lights_temp; _$result = add_two_lights_temp; 
	}
	break;
	case 62:
	{
		 rval = vstack[ vstack.length - 6 ] + ' ' + vstack[ vstack.length - 5 ] + ' ' + vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_two_lights_temp = {}; add_two_lights_temp['phrases'] = {};add_two_lights_temp['phrases']['locadverb'] = {};add_two_lights_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 6 ]; add_two_lights_temp['phrases']['and'] = {};add_two_lights_temp['phrases']['and'][0] = vstack[ vstack.length - 5 ]; add_two_lights_temp['phrases']['locadverb'][1] = vstack[ vstack.length - 4 ]; add_two_lights_temp['phrases']['one'] = {};add_two_lights_temp['phrases']['one'][0] = vstack[ vstack.length - 3 ]; add_two_lights_temp['phrases']['new'] = {};add_two_lights_temp['phrases']['new'][0] = vstack[ vstack.length - 2 ]; add_two_lights_temp['phrases']['light'] = {};add_two_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_two_lights_temp['phrase']=_$phrase; add_two_lights_temp['semantic'] = '{"addTwoLights":{}}'; _$add_two_lights[_$phrase] = add_two_lights_temp; _$result = add_two_lights_temp; 
	}
	break;
	case 63:
	{
		 rval = vstack[ vstack.length - 5 ] + ' ' + vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_two_lights_temp = {}; add_two_lights_temp['phrases'] = {};add_two_lights_temp['phrases']['locadverb'] = {};add_two_lights_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 5 ]; add_two_lights_temp['phrases']['and'] = {};add_two_lights_temp['phrases']['and'][0] = vstack[ vstack.length - 4 ]; add_two_lights_temp['phrases']['locadverb'][1] = vstack[ vstack.length - 3 ]; add_two_lights_temp['phrases']['one'] = {};add_two_lights_temp['phrases']['one'][0] = vstack[ vstack.length - 2 ]; add_two_lights_temp['phrases']['light'] = {};add_two_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_two_lights_temp['phrase']=_$phrase; add_two_lights_temp['semantic'] = '{"addTwoLights":{}}'; _$add_two_lights[_$phrase] = add_two_lights_temp; _$result = add_two_lights_temp; 
	}
	break;
	case 64:
	{
		 rval = vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_two_lights_temp = {}; add_two_lights_temp['phrases'] = {};add_two_lights_temp['phrases']['locadverb'] = {};add_two_lights_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 4 ]; add_two_lights_temp['phrases']['and'] = {};add_two_lights_temp['phrases']['and'][0] = vstack[ vstack.length - 3 ]; add_two_lights_temp['phrases']['locadverb'][1] = vstack[ vstack.length - 2 ]; add_two_lights_temp['phrases']['light'] = {};add_two_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_two_lights_temp['phrase']=_$phrase; add_two_lights_temp['semantic'] = '{"addTwoLights":{}}'; _$add_two_lights[_$phrase] = add_two_lights_temp; _$result = add_two_lights_temp; 
	}
	break;
	case 65:
	{
		 rval = vstack[ vstack.length - 5 ] + ' ' + vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_two_lights_temp = {}; add_two_lights_temp['phrases'] = {};add_two_lights_temp['phrases']['paddlight'] = {};add_two_lights_temp['phrases']['paddlight'][0] = vstack[ vstack.length - 5 ]; add_two_lights_temp['phrases']['light'] = {};add_two_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 4 ]; add_two_lights_temp['phrases']['locadverb'] = {};add_two_lights_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 3 ]; add_two_lights_temp['phrases']['and'] = {};add_two_lights_temp['phrases']['and'][0] = vstack[ vstack.length - 2 ]; add_two_lights_temp['phrases']['locadverb'][1] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_two_lights_temp['phrase']=_$phrase; add_two_lights_temp['semantic'] = '{"addTwoLights":{}}'; _$add_two_lights[_$phrase] = add_two_lights_temp; _$result = add_two_lights_temp; 
	}
	break;
	case 66:
	{
		 rval = vstack[ vstack.length - 7 ] + ' ' + vstack[ vstack.length - 6 ] + ' ' + vstack[ vstack.length - 5 ] + ' ' + vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_two_lights_temp = {}; add_two_lights_temp['phrases'] = {};add_two_lights_temp['phrases']['paddlight'] = {};add_two_lights_temp['phrases']['paddlight'][0] = vstack[ vstack.length - 7 ]; add_two_lights_temp['phrases']['locadverb'] = {};add_two_lights_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 6 ]; add_two_lights_temp['phrases']['and'] = {};add_two_lights_temp['phrases']['and'][0] = vstack[ vstack.length - 5 ]; add_two_lights_temp['phrases']['locadverb'][1] = vstack[ vstack.length - 4 ]; add_two_lights_temp['phrases']['one'] = {};add_two_lights_temp['phrases']['one'][0] = vstack[ vstack.length - 3 ]; add_two_lights_temp['phrases']['new'] = {};add_two_lights_temp['phrases']['new'][0] = vstack[ vstack.length - 2 ]; add_two_lights_temp['phrases']['light'] = {};add_two_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_two_lights_temp['phrase']=_$phrase; add_two_lights_temp['semantic'] = '{"addTwoLights":{}}'; _$add_two_lights[_$phrase] = add_two_lights_temp; _$result = add_two_lights_temp; 
	}
	break;
	case 67:
	{
		 rval = vstack[ vstack.length - 6 ] + ' ' + vstack[ vstack.length - 5 ] + ' ' + vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_two_lights_temp = {}; add_two_lights_temp['phrases'] = {};add_two_lights_temp['phrases']['paddlight'] = {};add_two_lights_temp['phrases']['paddlight'][0] = vstack[ vstack.length - 6 ]; add_two_lights_temp['phrases']['locadverb'] = {};add_two_lights_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 5 ]; add_two_lights_temp['phrases']['and'] = {};add_two_lights_temp['phrases']['and'][0] = vstack[ vstack.length - 4 ]; add_two_lights_temp['phrases']['locadverb'][1] = vstack[ vstack.length - 3 ]; add_two_lights_temp['phrases']['one'] = {};add_two_lights_temp['phrases']['one'][0] = vstack[ vstack.length - 2 ]; add_two_lights_temp['phrases']['light'] = {};add_two_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_two_lights_temp['phrase']=_$phrase; add_two_lights_temp['semantic'] = '{"addTwoLights":{}}'; _$add_two_lights[_$phrase] = add_two_lights_temp; _$result = add_two_lights_temp; 
	}
	break;
	case 68:
	{
		 rval = vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_two_lights_temp = {}; add_two_lights_temp['phrases'] = {};add_two_lights_temp['phrases']['paddlight'] = {};add_two_lights_temp['phrases']['paddlight'][0] = vstack[ vstack.length - 4 ]; add_two_lights_temp['phrases']['one'] = {};add_two_lights_temp['phrases']['one'][0] = vstack[ vstack.length - 3 ]; add_two_lights_temp['phrases']['two'] = {};add_two_lights_temp['phrases']['two'][0] = vstack[ vstack.length - 2 ]; add_two_lights_temp['phrases']['lights'] = {};add_two_lights_temp['phrases']['lights'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_two_lights_temp['phrase']=_$phrase; add_two_lights_temp['semantic'] = '{"addTwoLights":{}}'; _$add_two_lights[_$phrase] = add_two_lights_temp; _$result = add_two_lights_temp; 
	}
	break;
	case 69:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var add_two_lights_temp = {}; add_two_lights_temp['phrases'] = {};add_two_lights_temp['phrases']['paddlight'] = {};add_two_lights_temp['phrases']['paddlight'][0] = vstack[ vstack.length - 3 ]; add_two_lights_temp['phrases']['two'] = {};add_two_lights_temp['phrases']['two'][0] = vstack[ vstack.length - 2 ]; add_two_lights_temp['phrases']['lights'] = {};add_two_lights_temp['phrases']['lights'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; add_two_lights_temp['phrase']=_$phrase; add_two_lights_temp['semantic'] = '{"addTwoLights":{}}'; _$add_two_lights[_$phrase] = add_two_lights_temp; _$result = add_two_lights_temp; 
	}
	break;
	case 70:
	{
		 rval = vstack[ vstack.length - 1 ]; var pchangeposition_temp = {}; pchangeposition_temp['phrases'] = {};pchangeposition_temp['phrases']['move'] = {};pchangeposition_temp['phrases']['move'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pchangeposition_temp['phrase']=_$phrase; pchangeposition_temp['semantic'] = '{"changePosition":{}}'; _$pchangeposition[_$phrase] = pchangeposition_temp; _$result = pchangeposition_temp; 
	}
	break;
	case 71:
	{
		 rval = vstack[ vstack.length - 1 ]; var pchangeposition_temp = {}; pchangeposition_temp['phrases'] = {};pchangeposition_temp['phrases']['wchange'] = {};pchangeposition_temp['phrases']['wchange'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pchangeposition_temp['phrase']=_$phrase; pchangeposition_temp['semantic'] = '{"changePosition":{}}'; _$pchangeposition[_$phrase] = pchangeposition_temp; _$result = pchangeposition_temp; 
	}
	break;
	case 72:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var pchangeposition_temp = {}; pchangeposition_temp['phrases'] = {};pchangeposition_temp['phrases']['wchange'] = {};pchangeposition_temp['phrases']['wchange'][0] = vstack[ vstack.length - 2 ]; pchangeposition_temp['phrases']['position'] = {};pchangeposition_temp['phrases']['position'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pchangeposition_temp['phrase']=_$phrase; pchangeposition_temp['semantic'] = '{"changePosition":{}}'; _$pchangeposition[_$phrase] = pchangeposition_temp; _$result = pchangeposition_temp; 
	}
	break;
	case 73:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var pchangeposition_temp = {}; pchangeposition_temp['phrases'] = {};pchangeposition_temp['phrases']['wchange'] = {};pchangeposition_temp['phrases']['wchange'][0] = vstack[ vstack.length - 3 ]; pchangeposition_temp['phrases']['this'] = {};pchangeposition_temp['phrases']['this'][0] = vstack[ vstack.length - 2 ]; pchangeposition_temp['phrases']['position'] = {};pchangeposition_temp['phrases']['position'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; pchangeposition_temp['phrase']=_$phrase; pchangeposition_temp['semantic'] = '{"changePosition":{}}'; _$pchangeposition[_$phrase] = pchangeposition_temp; _$result = pchangeposition_temp; 
	}
	break;
	case 74:
	{
		 rval = vstack[ vstack.length - 5 ] + ' ' + vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var move_lights_temp = {}; move_lights_temp['phrases'] = {};move_lights_temp['phrases']['pchangeposition'] = {};move_lights_temp['phrases']['pchangeposition'][0] = vstack[ vstack.length - 5 ]; move_lights_temp['phrases']['this'] = {};move_lights_temp['phrases']['this'][0] = vstack[ vstack.length - 4 ]; move_lights_temp['phrases']['light'] = {};move_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 3 ]; move_lights_temp['phrases']['preposition'] = {};move_lights_temp['phrases']['preposition'][0] = vstack[ vstack.length - 2 ]; move_lights_temp['phrases']['locadverb'] = {};move_lights_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; move_lights_temp['phrase']=_$phrase; move_lights_temp['semantic'] = '{"moveLight":{}}'; _$move_lights[_$phrase] = move_lights_temp; _$result = move_lights_temp; 
	}
	break;
	case 75:
	{
		 rval = vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var move_lights_temp = {}; move_lights_temp['phrases'] = {};move_lights_temp['phrases']['pchangeposition'] = {};move_lights_temp['phrases']['pchangeposition'][0] = vstack[ vstack.length - 4 ]; move_lights_temp['phrases']['this'] = {};move_lights_temp['phrases']['this'][0] = vstack[ vstack.length - 3 ]; move_lights_temp['phrases']['light'] = {};move_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 2 ]; move_lights_temp['phrases']['locadverb'] = {};move_lights_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; move_lights_temp['phrase']=_$phrase; move_lights_temp['semantic'] = '{"moveLight":{}}'; _$move_lights[_$phrase] = move_lights_temp; _$result = move_lights_temp; 
	}
	break;
	case 76:
	{
		 rval = vstack[ vstack.length - 7 ] + ' ' + vstack[ vstack.length - 6 ] + ' ' + vstack[ vstack.length - 5 ] + ' ' + vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var move_lights_temp = {}; move_lights_temp['phrases'] = {};move_lights_temp['phrases']['pchangeposition'] = {};move_lights_temp['phrases']['pchangeposition'][0] = vstack[ vstack.length - 7 ]; move_lights_temp['phrases']['this'] = {};move_lights_temp['phrases']['this'][0] = vstack[ vstack.length - 6 ]; move_lights_temp['phrases']['light'] = {};move_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 5 ]; move_lights_temp['phrases']['preposition'] = {};move_lights_temp['phrases']['preposition'][0] = vstack[ vstack.length - 4 ]; move_lights_temp['phrases']['locadverb'] = {};move_lights_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 3 ]; move_lights_temp['phrases']['preposition'][1] = vstack[ vstack.length - 2 ]; move_lights_temp['phrases']['locadverb'][1] = vstack[ vstack.length - 1 ]; var _$phrase = rval; move_lights_temp['phrase']=_$phrase; move_lights_temp['semantic'] = '{"moveLight":{}}'; _$move_lights[_$phrase] = move_lights_temp; _$result = move_lights_temp; 
	}
	break;
	case 77:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var move_lights_temp = {}; move_lights_temp['phrases'] = {};move_lights_temp['phrases']['pchangeposition'] = {};move_lights_temp['phrases']['pchangeposition'][0] = vstack[ vstack.length - 3 ]; move_lights_temp['phrases']['this'] = {};move_lights_temp['phrases']['this'][0] = vstack[ vstack.length - 2 ]; move_lights_temp['phrases']['light'] = {};move_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; move_lights_temp['phrase']=_$phrase; move_lights_temp['semantic'] = '{"moveLight":{}}'; _$move_lights[_$phrase] = move_lights_temp; _$result = move_lights_temp; 
	}
	break;
	case 78:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var move_lights_temp = {}; move_lights_temp['phrases'] = {};move_lights_temp['phrases']['pchangeposition'] = {};move_lights_temp['phrases']['pchangeposition'][0] = vstack[ vstack.length - 2 ]; move_lights_temp['phrases']['light'] = {};move_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; move_lights_temp['phrase']=_$phrase; move_lights_temp['semantic'] = '{"moveLight":{}}'; _$move_lights[_$phrase] = move_lights_temp; _$result = move_lights_temp; 
	}
	break;
	case 79:
	{
		 rval = vstack[ vstack.length - 5 ] + ' ' + vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var move_lights_temp = {}; move_lights_temp['phrases'] = {};move_lights_temp['phrases']['pchangeposition'] = {};move_lights_temp['phrases']['pchangeposition'][0] = vstack[ vstack.length - 5 ]; move_lights_temp['phrases']['this'] = {};move_lights_temp['phrases']['this'][0] = vstack[ vstack.length - 4 ]; move_lights_temp['phrases']['light'] = {};move_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 3 ]; move_lights_temp['phrases']['preposition'] = {};move_lights_temp['phrases']['preposition'][0] = vstack[ vstack.length - 2 ]; move_lights_temp['phrases']['locadverb'] = {};move_lights_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; move_lights_temp['phrase']=_$phrase; move_lights_temp['semantic'] = '{"moveLight":{}}'; _$move_lights[_$phrase] = move_lights_temp; _$result = move_lights_temp; 
	}
	break;
	case 80:
	{
		 rval = vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var move_lights_temp = {}; move_lights_temp['phrases'] = {};move_lights_temp['phrases']['pchangeposition'] = {};move_lights_temp['phrases']['pchangeposition'][0] = vstack[ vstack.length - 4 ]; move_lights_temp['phrases']['this'] = {};move_lights_temp['phrases']['this'][0] = vstack[ vstack.length - 3 ]; move_lights_temp['phrases']['light'] = {};move_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 2 ]; move_lights_temp['phrases']['locadverb'] = {};move_lights_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; move_lights_temp['phrase']=_$phrase; move_lights_temp['semantic'] = '{"moveLight":{}}'; _$move_lights[_$phrase] = move_lights_temp; _$result = move_lights_temp; 
	}
	break;
	case 81:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var move_lights_temp = {}; move_lights_temp['phrases'] = {};move_lights_temp['phrases']['pchangeposition'] = {};move_lights_temp['phrases']['pchangeposition'][0] = vstack[ vstack.length - 3 ]; move_lights_temp['phrases']['this'] = {};move_lights_temp['phrases']['this'][0] = vstack[ vstack.length - 2 ]; move_lights_temp['phrases']['light'] = {};move_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; move_lights_temp['phrase']=_$phrase; move_lights_temp['semantic'] = '{"moveLight":{}}'; _$move_lights[_$phrase] = move_lights_temp; _$result = move_lights_temp; 
	}
	break;
	case 82:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var move_lights_temp = {}; move_lights_temp['phrases'] = {};move_lights_temp['phrases']['pchangeposition'] = {};move_lights_temp['phrases']['pchangeposition'][0] = vstack[ vstack.length - 2 ]; move_lights_temp['phrases']['light'] = {};move_lights_temp['phrases']['light'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; move_lights_temp['phrase']=_$phrase; move_lights_temp['semantic'] = '{"moveLight":{}}'; _$move_lights[_$phrase] = move_lights_temp; _$result = move_lights_temp; 
	}
	break;
	case 83:
	{
		 rval = vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var delete_light_temp = {}; delete_light_temp['phrases'] = {};delete_light_temp['phrases']['delete'] = {};delete_light_temp['phrases']['delete'][0] = vstack[ vstack.length - 4 ]; delete_light_temp['phrases']['locadverb'] = {};delete_light_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 3 ]; delete_light_temp['phrases']['one'] = {};delete_light_temp['phrases']['one'][0] = vstack[ vstack.length - 2 ]; delete_light_temp['phrases']['plight'] = {};delete_light_temp['phrases']['plight'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; delete_light_temp['phrase']=_$phrase; delete_light_temp['semantic'] = '{"deleteLight":"' + function(){try{return _$plight[delete_light_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '"}'; _$delete_light[_$phrase] = delete_light_temp; _$result = delete_light_temp; 
	}
	break;
	case 84:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var delete_light_temp = {}; delete_light_temp['phrases'] = {};delete_light_temp['phrases']['delete'] = {};delete_light_temp['phrases']['delete'][0] = vstack[ vstack.length - 2 ]; delete_light_temp['phrases']['plight'] = {};delete_light_temp['phrases']['plight'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; delete_light_temp['phrase']=_$phrase; delete_light_temp['semantic'] = '{"deleteLight":"' + function(){try{return _$plight[delete_light_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '"}'; _$delete_light[_$phrase] = delete_light_temp; _$result = delete_light_temp; 
	}
	break;
	case 85:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var delete_light_temp = {}; delete_light_temp['phrases'] = {};delete_light_temp['phrases']['delete'] = {};delete_light_temp['phrases']['delete'][0] = vstack[ vstack.length - 3 ]; delete_light_temp['phrases']['plight'] = {};delete_light_temp['phrases']['plight'][0] = vstack[ vstack.length - 2 ]; delete_light_temp['phrases']['locadverb'] = {};delete_light_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; delete_light_temp['phrase']=_$phrase; delete_light_temp['semantic'] = '{"deleteLight":"' + function(){try{return _$plight[delete_light_temp['phrases']['plight'][0]]['semantic'];} catch(e){return 'undefined';}}() + '"}'; _$delete_light[_$phrase] = delete_light_temp; _$result = delete_light_temp; 
	}
	break;
	case 86:
	{
		 rval = vstack[ vstack.length - 4 ] + ' ' + vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var delete_lights_temp = {}; delete_lights_temp['phrases'] = {};delete_lights_temp['phrases']['delete'] = {};delete_lights_temp['phrases']['delete'][0] = vstack[ vstack.length - 4 ]; delete_lights_temp['phrases']['locadverb'] = {};delete_lights_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 3 ]; delete_lights_temp['phrases']['multiple'] = {};delete_lights_temp['phrases']['multiple'][0] = vstack[ vstack.length - 2 ]; delete_lights_temp['phrases']['plight'] = {};delete_lights_temp['phrases']['plight'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; delete_lights_temp['phrase']=_$phrase; delete_lights_temp['semantic'] = '{"deleteLights":{}}'; _$delete_lights[_$phrase] = delete_lights_temp; _$result = delete_lights_temp; 
	}
	break;
	case 87:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var delete_lights_temp = {}; delete_lights_temp['phrases'] = {};delete_lights_temp['phrases']['delete'] = {};delete_lights_temp['phrases']['delete'][0] = vstack[ vstack.length - 3 ]; delete_lights_temp['phrases']['multiple'] = {};delete_lights_temp['phrases']['multiple'][0] = vstack[ vstack.length - 2 ]; delete_lights_temp['phrases']['plight'] = {};delete_lights_temp['phrases']['plight'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; delete_lights_temp['phrase']=_$phrase; delete_lights_temp['semantic'] = '{"deleteLights":{}}'; _$delete_lights[_$phrase] = delete_lights_temp; _$result = delete_lights_temp; 
	}
	break;
	case 88:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var delete_lights_temp = {}; delete_lights_temp['phrases'] = {};delete_lights_temp['phrases']['delete'] = {};delete_lights_temp['phrases']['delete'][0] = vstack[ vstack.length - 3 ]; delete_lights_temp['phrases']['plight'] = {};delete_lights_temp['phrases']['plight'][0] = vstack[ vstack.length - 2 ]; delete_lights_temp['phrases']['locadverb'] = {};delete_lights_temp['phrases']['locadverb'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; delete_lights_temp['phrase']=_$phrase; delete_lights_temp['semantic'] = '{"deleteLights":{}}'; _$delete_lights[_$phrase] = delete_lights_temp; _$result = delete_lights_temp; 
	}
	break;
	case 89:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var delete_lights_temp = {}; delete_lights_temp['phrases'] = {};delete_lights_temp['phrases']['delete'] = {};delete_lights_temp['phrases']['delete'][0] = vstack[ vstack.length - 2 ]; delete_lights_temp['phrases']['plight'] = {};delete_lights_temp['phrases']['plight'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; delete_lights_temp['phrase']=_$phrase; delete_lights_temp['semantic'] = '{"deleteLights":{}}'; _$delete_lights[_$phrase] = delete_lights_temp; _$result = delete_lights_temp; 
	}
	break;
	case 90:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var show_info_temp = {}; show_info_temp['phrases'] = {};show_info_temp['phrases']['v_show_imp'] = {};show_info_temp['phrases']['v_show_imp'][0] = vstack[ vstack.length - 2 ]; show_info_temp['phrases']['info'] = {};show_info_temp['phrases']['info'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; show_info_temp['phrase']=_$phrase; show_info_temp['semantic'] = '{"ShowInfo":{}}'; _$show_info[_$phrase] = show_info_temp; _$result = show_info_temp; 
	}
	break;
	case 91:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var show_info_temp = {}; show_info_temp['phrases'] = {};show_info_temp['phrases']['v_show_imp'] = {};show_info_temp['phrases']['v_show_imp'][0] = vstack[ vstack.length - 3 ]; show_info_temp['phrases']['info'] = {};show_info_temp['phrases']['info'][0] = vstack[ vstack.length - 2 ]; show_info_temp['phrases']['that'] = {};show_info_temp['phrases']['that'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; show_info_temp['phrase']=_$phrase; show_info_temp['semantic'] = '{"ShowInfo":{}}'; _$show_info[_$phrase] = show_info_temp; _$result = show_info_temp; 
	}
	break;
	case 92:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var show_info_temp = {}; show_info_temp['phrases'] = {};show_info_temp['phrases']['v_show_imp'] = {};show_info_temp['phrases']['v_show_imp'][0] = vstack[ vstack.length - 3 ]; show_info_temp['phrases']['info'] = {};show_info_temp['phrases']['info'][0] = vstack[ vstack.length - 2 ]; show_info_temp['phrases']['preposition'] = {};show_info_temp['phrases']['preposition'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; show_info_temp['phrase']=_$phrase; show_info_temp['semantic'] = '{"ShowInfo":{}}'; _$show_info[_$phrase] = show_info_temp; _$result = show_info_temp; 
	}
	break;
	case 93:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var show_info_temp = {}; show_info_temp['phrases'] = {};show_info_temp['phrases']['info'] = {};show_info_temp['phrases']['info'][0] = vstack[ vstack.length - 2 ]; show_info_temp['phrases']['v_show_imp'] = {};show_info_temp['phrases']['v_show_imp'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; show_info_temp['phrase']=_$phrase; show_info_temp['semantic'] = '{"ShowInfo":{}}'; _$show_info[_$phrase] = show_info_temp; _$result = show_info_temp; 
	}
	break;
	case 94:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var show_info_temp = {}; show_info_temp['phrases'] = {};show_info_temp['phrases']['more'] = {};show_info_temp['phrases']['more'][0] = vstack[ vstack.length - 2 ]; show_info_temp['phrases']['info'] = {};show_info_temp['phrases']['info'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; show_info_temp['phrase']=_$phrase; show_info_temp['semantic'] = '{"ShowInfo":{}}'; _$show_info[_$phrase] = show_info_temp; _$result = show_info_temp; 
	}
	break;
	case 95:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var show_info_temp = {}; show_info_temp['phrases'] = {};show_info_temp['phrases']['info'] = {};show_info_temp['phrases']['info'][0] = vstack[ vstack.length - 2 ]; show_info_temp['phrases']['that'] = {};show_info_temp['phrases']['that'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; show_info_temp['phrase']=_$phrase; show_info_temp['semantic'] = '{"ShowInfo":{}}'; _$show_info[_$phrase] = show_info_temp; _$result = show_info_temp; 
	}
	break;
	case 96:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var show_kontakt_temp = {}; show_kontakt_temp['phrases'] = {};show_kontakt_temp['phrases']['v_show_imp'] = {};show_kontakt_temp['phrases']['v_show_imp'][0] = vstack[ vstack.length - 2 ]; show_kontakt_temp['phrases']['contact'] = {};show_kontakt_temp['phrases']['contact'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; show_kontakt_temp['phrase']=_$phrase; show_kontakt_temp['semantic'] = '{"ShowKontakt":{}}'; _$show_kontakt[_$phrase] = show_kontakt_temp; _$result = show_kontakt_temp; 
	}
	break;
	case 97:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var show_kontakt_temp = {}; show_kontakt_temp['phrases'] = {};show_kontakt_temp['phrases']['contact'] = {};show_kontakt_temp['phrases']['contact'][0] = vstack[ vstack.length - 2 ]; show_kontakt_temp['phrases']['v_show_imp'] = {};show_kontakt_temp['phrases']['v_show_imp'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; show_kontakt_temp['phrase']=_$phrase; show_kontakt_temp['semantic'] = '{"ShowKontakt":{}}'; _$show_kontakt[_$phrase] = show_kontakt_temp; _$result = show_kontakt_temp; 
	}
	break;
	case 98:
	{
		 rval = vstack[ vstack.length - 1 ]; var show_kontakt_temp = {}; show_kontakt_temp['phrases'] = {};show_kontakt_temp['phrases']['contact'] = {};show_kontakt_temp['phrases']['contact'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; show_kontakt_temp['phrase']=_$phrase; show_kontakt_temp['semantic'] = '{"ShowKontakt":{}}'; _$show_kontakt[_$phrase] = show_kontakt_temp; _$result = show_kontakt_temp; 
	}
	break;
	case 99:
	{
		 rval = vstack[ vstack.length - 1 ]; var close_info_temp = {}; close_info_temp['phrases'] = {};close_info_temp['phrases']['v_close_imp'] = {};close_info_temp['phrases']['v_close_imp'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; close_info_temp['phrase']=_$phrase; close_info_temp['semantic'] = '{"back":{}}'; _$close_info[_$phrase] = close_info_temp; _$result = close_info_temp; 
	}
	break;
	case 100:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var close_info_temp = {}; close_info_temp['phrases'] = {};close_info_temp['phrases']['v_close_imp'] = {};close_info_temp['phrases']['v_close_imp'][0] = vstack[ vstack.length - 2 ]; close_info_temp['phrases']['info'] = {};close_info_temp['phrases']['info'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; close_info_temp['phrase']=_$phrase; close_info_temp['semantic'] = '{"back":{}}'; _$close_info[_$phrase] = close_info_temp; _$result = close_info_temp; 
	}
	break;
	case 101:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var close_info_temp = {}; close_info_temp['phrases'] = {};close_info_temp['phrases']['v_close_imp'] = {};close_info_temp['phrases']['v_close_imp'][0] = vstack[ vstack.length - 3 ]; close_info_temp['phrases']['that'] = {};close_info_temp['phrases']['that'][0] = vstack[ vstack.length - 2 ]; close_info_temp['phrases']['info'] = {};close_info_temp['phrases']['info'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; close_info_temp['phrase']=_$phrase; close_info_temp['semantic'] = '{"back":{}}'; _$close_info[_$phrase] = close_info_temp; _$result = close_info_temp; 
	}
	break;
	case 102:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var close_info_temp = {}; close_info_temp['phrases'] = {};close_info_temp['phrases']['info'] = {};close_info_temp['phrases']['info'][0] = vstack[ vstack.length - 2 ]; close_info_temp['phrases']['v_close_imp'] = {};close_info_temp['phrases']['v_close_imp'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; close_info_temp['phrase']=_$phrase; close_info_temp['semantic'] = '{"back":{}}'; _$close_info[_$phrase] = close_info_temp; _$result = close_info_temp; 
	}
	break;
	case 103:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var back_info_temp = {}; back_info_temp['phrases'] = {};back_info_temp['phrases']['back'] = {};back_info_temp['phrases']['back'][0] = vstack[ vstack.length - 2 ]; back_info_temp['phrases']['info'] = {};back_info_temp['phrases']['info'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; back_info_temp['phrase']=_$phrase; back_info_temp['semantic'] = '{"back":{}}'; _$back_info[_$phrase] = back_info_temp; _$result = back_info_temp; 
	}
	break;
	case 104:
	{
		 rval = vstack[ vstack.length - 1 ]; var back_info_temp = {}; back_info_temp['phrases'] = {};back_info_temp['phrases']['back'] = {};back_info_temp['phrases']['back'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; back_info_temp['phrase']=_$phrase; back_info_temp['semantic'] = '{"back":{}}'; _$back_info[_$phrase] = back_info_temp; _$result = back_info_temp; 
	}
	break;
	case 105:
	{
		 rval = vstack[ vstack.length - 3 ] + ' ' + vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var back_info_temp = {}; back_info_temp['phrases'] = {};back_info_temp['phrases']['v_show_imp'] = {};back_info_temp['phrases']['v_show_imp'][0] = vstack[ vstack.length - 3 ]; back_info_temp['phrases']['back'] = {};back_info_temp['phrases']['back'][0] = vstack[ vstack.length - 2 ]; back_info_temp['phrases']['info'] = {};back_info_temp['phrases']['info'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; back_info_temp['phrase']=_$phrase; back_info_temp['semantic'] = '{"back":{}}'; _$back_info[_$phrase] = back_info_temp; _$result = back_info_temp; 
	}
	break;
	case 106:
	{
		 rval = vstack[ vstack.length - 2 ] + ' ' + vstack[ vstack.length - 1 ]; var back_info_temp = {}; back_info_temp['phrases'] = {};back_info_temp['phrases']['v_show_imp'] = {};back_info_temp['phrases']['v_show_imp'][0] = vstack[ vstack.length - 2 ]; back_info_temp['phrases']['back'] = {};back_info_temp['phrases']['back'][0] = vstack[ vstack.length - 1 ]; var _$phrase = rval; back_info_temp['phrase']=_$phrase; back_info_temp['semantic'] = '{"back":{}}'; _$back_info[_$phrase] = back_info_temp; _$result = back_info_temp; 
	}
	break;
	case 107:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 108:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 109:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 110:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 111:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 112:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 113:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 114:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 115:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 116:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 117:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 118:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 119:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 120:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 121:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 122:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 123:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 124:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
}



			tmptree = new Array();

			if( _dbg_withtrace )
				__dbg_print( "\tPopping " + pop_tab[act][1] + " off the stack..." );
				
			for( var i = 0; i < pop_tab[act][1]; i++ )
			{			
				tmptree.push( tree.pop() );

				sstack.pop();
				vstack.pop();
			}
									
			go = -1;
			for( var i = 0; i < goto_tab[sstack[sstack.length-1]].length; i+=2 )
			{
				if( goto_tab[sstack[sstack.length-1]][i] == pop_tab[act][0] )
				{
					go = goto_tab[sstack[sstack.length-1]][i+1];
					break;
				}
			}
			
			//Parse tree
			var node = new treenode();
			node.sym = labels[ pop_tab[act][0] ];
			node.att = rval;
			node.child = tmptree.reverse();
			tree.push( treenodes.length );
			treenodes.push( node );
			
			if( act == 0 )
				break;
				
			if( _dbg_withtrace )
				__dbg_print( "\tPushing non-terminal " + labels[ pop_tab[act][0] ] );
				
			sstack.push( go );
			vstack.push( rval );			
		}
		
		if( _dbg_withtrace )
		{		
			alert( _dbg_string );
			_dbg_string = new String();
		}
	}

	if( _dbg_withtrace )
	{
		__dbg_print( "\nParse complete." );
		alert( _dbg_string );
	}
	
	if( err_cnt == 0 )
	{}
	
	return err_cnt;
}

function __dbg_image( name )
{
	return "<img src=\"img/" + name + ".png\" style=\"border: 0px; margin: 0px; padding: 0px;\" />";
}

function __dbg_get_tree_depth( nodes, tree, max )
{
	var		tmp		= 0;
	
	for( var i = 0; i < tree.length; i++ )
	{
		if( nodes[ tree[i] ].child.length > 0 )
			if( max < ( tmp = __dbg_get_tree_depth( nodes, nodes[ tree[i] ].child, max+1 ) ) )
				max = tmp;
	}
	
	return max;
}

function __dbg_parsetree( prev, cnt, depth, nodes, tree )
{
	var str = new String();
	
	if( cnt == 0 )
		str += "<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"parsetree\">";
	
	if( !prev )
		prev = new Array();
		
	if( cnt > 0 )
		prev[cnt-1] = true;
			
	for( var i = 0; i < tree.length; i++ )
	{
		str += "<tr>";

		for( var j = 0; j < cnt; j++ )
		{
			str += "<td>";

			if( prev[j] )
			{
				if( j == cnt - 1 && i == tree.length - 1 )
					str += __dbg_image( "ll" );
				else if( j == cnt - 1 )
					str += __dbg_image( "la" );
				else
					str += __dbg_image( "l" );
			}
			else
				str += __dbg_image( "e" );
				
			str += "</td>";
		}
		
		if( cnt > 0 && i == tree.length - 1 )
			prev[cnt-1] = false;

		str += "<td>";
		if( nodes[ tree[i] ].child.length > 0 )
			if( cnt == 0 )
				str += __dbg_image( "rn" );
			else
				str += __dbg_image( "n" );	
		else
			str += __dbg_image( "t" );
		str += "</td>";
		
		str += "<td class=\"node_name\" colspan=\"" + ( depth - cnt + 1 ) + "\">" + nodes[ tree[i] ].sym ;
		if( nodes[ tree[i] ].att && nodes[ tree[i] ].att != "" )
			str += ":<span>" + nodes[ tree[i] ].att + "</span>" ;
			
		str += "</td>";

		if( nodes[ tree[i] ].child.length > 0 )
			str += __dbg_parsetree( prev, cnt+1, depth, nodes, nodes[ tree[i] ].child );
	}
	
	if( cnt == 0 )
		str += "</table>";
	
	return str;
}

function __dbg_parsetree_phpSyntaxTree( nodes, tree )
{
	var str = new String();
	
	for( var i = 0; i < tree.length; i++ )
	{
		str += " [ ";

		str += nodes[ tree[i] ].sym;
		if( nodes[ tree[i] ].att && nodes[ tree[i] ].att != "" )
		{
			var attr = new String( nodes[ tree[i] ].att );
			str += ":\"" + attr.replace( / |\t|\r|\n|\[|\]/g, "_" ) + "\"";
		}
			
		str += " ";

		if( nodes[ tree[i] ].child.length > 0 )
			str += __dbg_parsetree_phpSyntaxTree( nodes, nodes[ tree[i] ].child );

		str += " ] ";
	}
	
	return str;
}



var _semanticAnnotationResult = { result: {}};
__parse( asr_recognized_text, new Array(), new Array(), _semanticAnnotationResult);
return _semanticAnnotationResult.result;
};
semanticInterpreter.addGrammar("de", grammarFunc);

semanticInterpreter.setStopwords("de",["bitte","dem","den","des","mir","mal","jetzt","lass","möchte","ich","ihr","bla","ach","gerne","gern","hinzu","hinzugehen","ja"]);
return grammarFunc;
})();
