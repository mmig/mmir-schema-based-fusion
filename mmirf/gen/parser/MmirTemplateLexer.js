// $ANTLR 3.3 Nov 30, 2010 12:50:56 ../MmirTemplate.g 2013-08-13 18:04:02

var MmirTemplateLexer = function(input, state) {
// alternate constructor @todo
// public MmirTemplateLexer(CharStream input)
// public MmirTemplateLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){

    		//FIXME
//    		mmir.parser.extendMmirTemplateProcessor(this);
	    	var extendMmirTemplateProcessor = require('templateProcessor');
	    	extendMmirTemplateProcessor(this);
        	

    }).call(this);

    this.dfa6 = new MmirTemplateLexer.DFA6(this);
    MmirTemplateLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(MmirTemplateLexer, {
    EOF: -1,
    CHAR: 4,
    NL: 5,
    END: 6,
    EscapeExit: 7,
    ESC_DoEnter: 8,
    COMMENT: 9,
    DoEnterBlock: 10,
    DoEnterStatement: 11,
    DoEnterIncludeScript: 12,
    DoEnterIncludeStyle: 13,
    DoEnterLocalize: 14,
    DoEnterYieldDeclaration: 15,
    DoEnterYieldContent: 16,
    DoEnterIfStatement: 17,
    DoEnterElseStatement: 18,
    DoEnterForStatement: 19,
    DoEnterDeclareVar: 20,
    DoEnterHelper: 21,
    DoEnterRender: 22,
    END_SCRIPT: 23,
    HEX_DIGIT: 24,
    UNICODE_ESC: 25,
    OCTAL_ESC: 26,
    ESC_SEQ: 27
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(MmirTemplateLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    CHAR : 4,
    NL : 5,
    END : 6,
    EscapeExit : 7,
    ESC_DoEnter : 8,
    COMMENT : 9,
    DoEnterBlock : 10,
    DoEnterStatement : 11,
    DoEnterIncludeScript : 12,
    DoEnterIncludeStyle : 13,
    DoEnterLocalize : 14,
    DoEnterYieldDeclaration : 15,
    DoEnterYieldContent : 16,
    DoEnterIfStatement : 17,
    DoEnterElseStatement : 18,
    DoEnterForStatement : 19,
    DoEnterDeclareVar : 20,
    DoEnterHelper : 21,
    DoEnterRender : 22,
    END_SCRIPT : 23,
    HEX_DIGIT : 24,
    UNICODE_ESC : 25,
    OCTAL_ESC : 26,
    ESC_SEQ : 27,
    getGrammarFileName: function() { return "../MmirTemplate.g"; }
});
org.antlr.lang.augmentObject(MmirTemplateLexer.prototype, {
    // $ANTLR start EscapeExit
    mEscapeExit: function()  {
        try {
            var _type = this.EscapeExit;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var s=null;

            // ../MmirTemplate.g:73:2: (s= '}@@' )
            // ../MmirTemplate.g:73:4: s= '}@@'
            var sStart = this.getCharIndex();
            this.match("}@@"); 
            var s = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, sStart, this.getCharIndex()-1);
                //the 'functional' token definition for this is in MmirScriptContent
            	     // (i.e. actually escaping the EXIT) ... we need the token here (again)
            	     //  for creating a 'replacement-element', so that we know, we need
            	     //  to replace '}@@' -> '}@'
                         var result = this.processEscape('}@','ESCAPE_exit');
                         result.start = s.getStartIndex();
            	     result.end   = s.getStopIndex() + 1;
            	     result.type  = this.INTERNAL_ESCAPE_EXIT;
            	



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EscapeExit",

    // $ANTLR start ESC_DoEnter
    mESC_DoEnter: function()  {
        try {
            var _type = this.ESC_DoEnter;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var s=null;

            // ../MmirTemplate.g:85:14: (s= '@@' )
            // ../MmirTemplate.g:85:16: s= '@@'
            var sStart = this.getCharIndex();
            this.match("@@"); 
            var s = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, sStart, this.getCharIndex()-1);

                         var result = this.processEscape('@', 'ESCAPE_enter');
                         result.start = s.getStartIndex();
                         result.end   = s.getStopIndex() + 1;
            	     result.type  = this.INTERNAL_ESCAPE_ENTER;
                        



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ESC_DoEnter",

    // $ANTLR start DoEnterBlock
    mDoEnterBlock: function()  {
        try {
            var _type = this.DoEnterBlock;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var s=null;

            // ../MmirTemplate.g:94:14: (s= '@{' )
            // ../MmirTemplate.g:94:16: s= '@{'
            var sStart = this.getCharIndex();
            this.match("@{"); 
            var s = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, sStart, this.getCharIndex()-1);

                         var result = this.enterBlock(_channel, 'main', this.processBlock, 'BLOCK');
                         result.start = s.getStartIndex();
            	     result.end = result.end + 3;
            	     result.type  = this.INTERNAL_BLOCK;
                        
            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DoEnterBlock",

    // $ANTLR start DoEnterStatement
    mDoEnterStatement: function()  {
        try {
            var _type = this.DoEnterStatement;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var s=null;

            // ../MmirTemplate.g:104:18: (s= '@(' )
            // ../MmirTemplate.g:104:22: s= '@('
            var sStart = this.getCharIndex();
            this.match("@("); 
            var s = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, sStart, this.getCharIndex()-1);

                         var result = this.enterScript(_channel, 'main', this.processStatement, 'STATEMENT');
                         result.start = s.getStartIndex();
            	     result.end = result.end + 2;
            	     result.type  = this.INTERNAL_STATEMENT;
                        
            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DoEnterStatement",

    // $ANTLR start DoEnterIncludeScript
    mDoEnterIncludeScript: function()  {
        try {
            var _type = this.DoEnterIncludeScript;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var s=null;

            // ../MmirTemplate.g:114:22: (s= '@script(' )
            // ../MmirTemplate.g:114:26: s= '@script('
            var sStart = this.getCharIndex();
            this.match("@script("); 
            var s = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, sStart, this.getCharIndex()-1);

                         var result = this.enterJavaScript(_channel, 'embeddedCallStatement', this.processIncludeScript, 'INCLUDE_SCRIPT');
                         //correct start/end positions to include enclosing @script() statement
                         result.start = s.getStartIndex();
            	     result.end = result.end + 2;
            	     result.type  = this.INTERNAL_INCLUDE_SCRIPT;
                        
            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DoEnterIncludeScript",

    // $ANTLR start DoEnterIncludeStyle
    mDoEnterIncludeStyle: function()  {
        try {
            var _type = this.DoEnterIncludeStyle;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var s=null;

            // ../MmirTemplate.g:125:21: (s= '@style(' )
            // ../MmirTemplate.g:125:25: s= '@style('
            var sStart = this.getCharIndex();
            this.match("@style("); 
            var s = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, sStart, this.getCharIndex()-1);

                         var result = this.enterJavaScript(_channel, 'embeddedCallStatement', this.processIncludeStyle, 'INCLUDE_STYLE');
                         //correct start/end positions to include enclosing @style() statement
                         result.start = s.getStartIndex();
            	     result.end = result.end + 2;
            	     result.type  = this.INTERNAL_INCLUDE_STYLE;
                        
            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DoEnterIncludeStyle",

    // $ANTLR start DoEnterLocalize
    mDoEnterLocalize: function()  {
        try {
            var _type = this.DoEnterLocalize;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var s=null;

            // ../MmirTemplate.g:136:17: (s= '@localize(' )
            // ../MmirTemplate.g:136:21: s= '@localize('
            var sStart = this.getCharIndex();
            this.match("@localize("); 
            var s = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, sStart, this.getCharIndex()-1);

                         var result = this.enterJavaScript(_channel, 'embeddedCallStatement', this.processLocalize, 'LOCALIZE');
                         //correct start/end positions to include enclosing @locale() statement
                         result.start = s.getStartIndex();
            	     result.end = result.end + 2;
            	     result.type  = this.INTERNAL_LOCALIZE;
                        
            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DoEnterLocalize",

    // $ANTLR start DoEnterDeclareVar
    mDoEnterDeclareVar: function()  {
        try {
            var _type = this.DoEnterDeclareVar;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var s=null;

            // ../MmirTemplate.g:147:19: (s= '@var(' )
            // ../MmirTemplate.g:147:23: s= '@var('
            var sStart = this.getCharIndex();
            this.match("@var("); 
            var s = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, sStart, this.getCharIndex()-1);

                         var result = this.enterJavaScript(_channel, 'embeddedCallStatement', this.processDeclareVar, 'DECLARE_VAR');
                         //correct start/end positions to include enclosing @locale() statement
                         result.start = s.getStartIndex();
            	     result.end = result.end + 2;
            	     result.type  = this.INTERNAL_VAR_DECLARATION;
                        
            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DoEnterDeclareVar",

    // $ANTLR start DoEnterHelper
    mDoEnterHelper: function()  {
        try {
            var _type = this.DoEnterHelper;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var s=null;

            // ../MmirTemplate.g:158:15: (s= '@helper(' )
            // ../MmirTemplate.g:158:19: s= '@helper('
            var sStart = this.getCharIndex();
            this.match("@helper("); 
            var s = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, sStart, this.getCharIndex()-1);

                         var result = this.enterJavaScript(_channel, 'embeddedDataCallStatement', this.processHelperFunction, 'HELPER_FUNCTION');
                         //correct start/end positions to include enclosing @helper() statement
                         result.start = s.getStartIndex();
            	     result.end = result.end + 2;
            	     result.type  = this.INTERNAL_HELPER;
                        
            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DoEnterHelper",

    // $ANTLR start DoEnterRender
    mDoEnterRender: function()  {
        try {
            var _type = this.DoEnterRender;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var s=null;

            // ../MmirTemplate.g:169:15: (s= '@render(' )
            // ../MmirTemplate.g:169:19: s= '@render('
            var sStart = this.getCharIndex();
            this.match("@render("); 
            var s = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, sStart, this.getCharIndex()-1);

                         var result = this.enterJavaScript(_channel, 'embeddedRenderControlStatement', this.processRenderPartial, 'RENDER_PARTIAL');
                         //correct start/end positions to include enclosing @render() statement
                         result.start = s.getStartIndex();
            	     result.end = result.end + 2;
            	     result.type  = this.INTERNAL_RENDER;
                        
            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DoEnterRender",

    // $ANTLR start DoEnterYieldDeclaration
    mDoEnterYieldDeclaration: function()  {
        try {
            var _type = this.DoEnterYieldDeclaration;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var s=null;

            // ../MmirTemplate.g:180:25: (s= '@yield(' )
            // ../MmirTemplate.g:180:29: s= '@yield('
            var sStart = this.getCharIndex();
            this.match("@yield("); 
            var s = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, sStart, this.getCharIndex()-1);

                         var result = this.enterJavaScript(_channel, 'embeddedCallStatement', this.processYieldDeclaration, 'YieldDeclaration');
                         //correct start/end positions to include enclosing @yield() statement
                         result.start = s.getStartIndex();
            	     result.end = result.end + 2;
            	     result.type  = this.INTERNAL_YIELD_DECLARATION;
                        
            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DoEnterYieldDeclaration",

    // $ANTLR start DoEnterYieldContent
    mDoEnterYieldContent: function()  {
        try {
            var _type = this.DoEnterYieldContent;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var s=null;

            // ../MmirTemplate.g:191:21: (s= '@contentFor(' )
            // ../MmirTemplate.g:191:25: s= '@contentFor('
            var sStart = this.getCharIndex();
            this.match("@contentFor("); 
            var s = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, sStart, this.getCharIndex()-1);

                         var result = this.enterJavaScript(_channel, 'embeddedCallStatement', this.processYieldContentParam, 'YieldContentParam');
                         //correct start/end positions to include enclosing @contentFor(){ ... }@ statement
                         result.start = s.getStartIndex();
                         
                         result = this.enterContent(_channel, 'content', this.processYieldContent, 'YieldContent', result);
                         
            	     result.end = result.end + 3;
            	     result.type  = this.INTERNAL_YIELD_CONTENT;
            	     
                        
            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DoEnterYieldContent",

    // $ANTLR start DoEnterIfStatement
    mDoEnterIfStatement: function()  {
        try {
            var _type = this.DoEnterIfStatement;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var s=null;

            // ../MmirTemplate.g:206:20: (s= '@if(' )
            // ../MmirTemplate.g:206:24: s= '@if('
            var sStart = this.getCharIndex();
            this.match("@if("); 
            var s = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, sStart, this.getCharIndex()-1);

                         var result = this.enterJavaScript(_channel, 'embeddedIfExpressionFragment', this.processIfExpr, 'IfExpr');
                         //correct start/end positions to include enclosing @if(){ ... }@ statement
                         result.start = s.getStartIndex();
                         
                         result = this.enterContent(_channel, 'content', this.processIfContent, 'IfContent', result);
                         
            	     result.end = result.end + 3;
            	     result.type  = this.INTERNAL_IF;
            	     
                        
            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DoEnterIfStatement",

    // $ANTLR start DoEnterElseStatement
    mDoEnterElseStatement: function()  {
        try {
            var _type = this.DoEnterElseStatement;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var s=null;

            // ../MmirTemplate.g:221:22: (s= '@else' )
            // ../MmirTemplate.g:221:26: s= '@else'
            var sStart = this.getCharIndex();
            this.match("@else"); 
            var s = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, sStart, this.getCharIndex()-1);

                         var result = this.enterContent(_channel, 'content', this.processElse, 'ELSE', result);
                         
                         //correct start/end positions to include enclosing @else{ ... }@ statement
                         result.start = s.getStartIndex();
            	     result.end = result.end + 3;
            	     result.type  = this.INTERNAL_ELSE;
            	     
                        
            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DoEnterElseStatement",

    // $ANTLR start DoEnterForStatement
    mDoEnterForStatement: function()  {
        try {
            var _type = this.DoEnterForStatement;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var s=null;

            // ../MmirTemplate.g:234:21: (s= '@for(' )
            // ../MmirTemplate.g:234:25: s= '@for('
            var sStart = this.getCharIndex();
            this.match("@for("); 
            var s = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, sStart, this.getCharIndex()-1);

                         var result = this.enterJavaScript(_channel, 'embeddedForControlStatement', this.processForControl, 'ForControl');
                         //correct start/end positions to include enclosing @if(){ ... }@ statement
                         result.start = s.getStartIndex();
                         
                         result = this.enterContent(_channel, 'content', this.processForContent, 'ForContent', result);
                         
            	     result.end = result.end + 3;
            	     result.type  = this.INTERNAL_FOR;
            	     
                        
            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DoEnterForStatement",

    // $ANTLR start NL
    mNL: function()  {
        try {
            var _type = this.NL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ../MmirTemplate.g:250:2: ( ( '\\r' )? '\\n' | '\\r' | '\\u2028' | '\\u2029' )
            var alt2=4;
            switch ( this.input.LA(1) ) {
            case '\r':
                var LA2_1 = this.input.LA(2);

                if ( (LA2_1=='\n') ) {
                    alt2=1;
                }
                else {
                    alt2=2;}
                break;
            case '\n':
                alt2=1;
                break;
            case '\u2028':
                alt2=3;
                break;
            case '\u2029':
                alt2=4;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 2, 0, this.input);

                throw nvae;
            }

            switch (alt2) {
                case 1 :
                    // ../MmirTemplate.g:250:4: ( '\\r' )? '\\n'
                    // ../MmirTemplate.g:250:4: ( '\\r' )?
                    var alt1=2;
                    var LA1_0 = this.input.LA(1);

                    if ( (LA1_0=='\r') ) {
                        alt1=1;
                    }
                    switch (alt1) {
                        case 1 :
                            // ../MmirTemplate.g:250:4: '\\r'
                            this.match('\r'); 


                            break;

                    }

                    this.match('\n'); 


                    break;
                case 2 :
                    // ../MmirTemplate.g:251:4: '\\r'
                    this.match('\r'); 


                    break;
                case 3 :
                    // ../MmirTemplate.g:252:4: '\\u2028'
                    this.match('\u2028'); 


                    break;
                case 4 :
                    // ../MmirTemplate.g:253:4: '\\u2029'
                    this.match('\u2029'); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NL",

    // $ANTLR start END_SCRIPT
    mEND_SCRIPT: function()  {
        try {
            var _type = this.END_SCRIPT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ../MmirTemplate.g:256:12: ( '}@' )
            // ../MmirTemplate.g:256:14: '}@'
            this.match("}@"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "END_SCRIPT",

    // $ANTLR start CHAR
    mCHAR: function()  {
        try {
            var _type = this.CHAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ../MmirTemplate.g:258:6: (~ ( '\\n' | '\\r' ) )
            // ../MmirTemplate.g:258:8: ~ ( '\\n' | '\\r' )
            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='\uFFFF') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CHAR",

    // $ANTLR start COMMENT
    mCOMMENT: function()  {
        try {
            var _type = this.COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            var start=null;
            var end=null;

            // ../MmirTemplate.g:261:5: (start= '@*' ( options {greedy=false; } : . )* end= '*@' )
            // ../MmirTemplate.g:261:9: start= '@*' ( options {greedy=false; } : . )* end= '*@'
            var startStart = this.getCharIndex();
            this.match("@*"); 
            var start = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, startStart, this.getCharIndex()-1);
            // ../MmirTemplate.g:261:20: ( options {greedy=false; } : . )*
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( (LA3_0=='*') ) {
                    var LA3_1 = this.input.LA(2);

                    if ( (LA3_1=='@') ) {
                        alt3=2;
                    }
                    else if ( ((LA3_1>='\u0000' && LA3_1<='?')||(LA3_1>='A' && LA3_1<='\uFFFF')) ) {
                        alt3=1;
                    }


                }
                else if ( ((LA3_0>='\u0000' && LA3_0<=')')||(LA3_0>='+' && LA3_0<='\uFFFF')) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // ../MmirTemplate.g:261:48: .
                    this.matchAny(); 


                    break;

                default :
                    break loop3;
                }
            } while (true);

            var endStart = this.getCharIndex();
            this.match("*@"); 
            var end = new org.antlr.runtime.CommonToken(this.input, org.antlr.runtime.Token.INVALID_TOKEN_TYPE, org.antlr.runtime.Token.DEFAULT_CHANNEL, endStart, this.getCharIndex()-1);

                	var result = this.processComment('COMMENT');
                	result.start = start.getStartIndex();
                	result.end   = end.getStopIndex() + 1;
                	result.type  = this.INTERNAL_COMMENT;
                



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMENT",

    // $ANTLR start HEX_DIGIT
    mHEX_DIGIT: function()  {
        try {
            // ../MmirTemplate.g:281:11: ( ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' ) )
            // ../MmirTemplate.g:281:13: ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )
            if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='F')||(this.input.LA(1)>='a' && this.input.LA(1)<='f') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "HEX_DIGIT",

    // $ANTLR start ESC_SEQ
    mESC_SEQ: function()  {
        try {
            // ../MmirTemplate.g:285:5: ( '\\\\' ( 'b' | 't' | 'n' | 'f' | 'r' | '\\\"' | '\\'' | '\\\\' ) | UNICODE_ESC | OCTAL_ESC )
            var alt4=3;
            var LA4_0 = this.input.LA(1);

            if ( (LA4_0=='\\') ) {
                switch ( this.input.LA(2) ) {
                case '\"':
                case '\'':
                case '\\':
                case 'b':
                case 'f':
                case 'n':
                case 'r':
                case 't':
                    alt4=1;
                    break;
                case 'u':
                    alt4=2;
                    break;
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                    alt4=3;
                    break;
                default:
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 4, 1, this.input);

                    throw nvae;
                }

            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 4, 0, this.input);

                throw nvae;
            }
            switch (alt4) {
                case 1 :
                    // ../MmirTemplate.g:285:9: '\\\\' ( 'b' | 't' | 'n' | 'f' | 'r' | '\\\"' | '\\'' | '\\\\' )
                    this.match('\\'); 
                    if ( this.input.LA(1)=='\"'||this.input.LA(1)=='\''||this.input.LA(1)=='\\'||this.input.LA(1)=='b'||this.input.LA(1)=='f'||this.input.LA(1)=='n'||this.input.LA(1)=='r'||this.input.LA(1)=='t' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;
                case 2 :
                    // ../MmirTemplate.g:286:9: UNICODE_ESC
                    this.mUNICODE_ESC(); 


                    break;
                case 3 :
                    // ../MmirTemplate.g:287:9: OCTAL_ESC
                    this.mOCTAL_ESC(); 


                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "ESC_SEQ",

    // $ANTLR start OCTAL_ESC
    mOCTAL_ESC: function()  {
        try {
            // ../MmirTemplate.g:292:5: ( '\\\\' ( '0' .. '3' ) ( '0' .. '7' ) ( '0' .. '7' ) | '\\\\' ( '0' .. '7' ) ( '0' .. '7' ) | '\\\\' ( '0' .. '7' ) )
            var alt5=3;
            var LA5_0 = this.input.LA(1);

            if ( (LA5_0=='\\') ) {
                var LA5_1 = this.input.LA(2);

                if ( ((LA5_1>='0' && LA5_1<='3')) ) {
                    var LA5_2 = this.input.LA(3);

                    if ( ((LA5_2>='0' && LA5_2<='7')) ) {
                        var LA5_4 = this.input.LA(4);

                        if ( ((LA5_4>='0' && LA5_4<='7')) ) {
                            alt5=1;
                        }
                        else {
                            alt5=2;}
                    }
                    else {
                        alt5=3;}
                }
                else if ( ((LA5_1>='4' && LA5_1<='7')) ) {
                    var LA5_3 = this.input.LA(3);

                    if ( ((LA5_3>='0' && LA5_3<='7')) ) {
                        alt5=2;
                    }
                    else {
                        alt5=3;}
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 5, 1, this.input);

                    throw nvae;
                }
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 5, 0, this.input);

                throw nvae;
            }
            switch (alt5) {
                case 1 :
                    // ../MmirTemplate.g:292:9: '\\\\' ( '0' .. '3' ) ( '0' .. '7' ) ( '0' .. '7' )
                    this.match('\\'); 
                    // ../MmirTemplate.g:292:14: ( '0' .. '3' )
                    // ../MmirTemplate.g:292:15: '0' .. '3'
                    this.matchRange('0','3'); 



                    // ../MmirTemplate.g:292:25: ( '0' .. '7' )
                    // ../MmirTemplate.g:292:26: '0' .. '7'
                    this.matchRange('0','7'); 



                    // ../MmirTemplate.g:292:36: ( '0' .. '7' )
                    // ../MmirTemplate.g:292:37: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;
                case 2 :
                    // ../MmirTemplate.g:293:9: '\\\\' ( '0' .. '7' ) ( '0' .. '7' )
                    this.match('\\'); 
                    // ../MmirTemplate.g:293:14: ( '0' .. '7' )
                    // ../MmirTemplate.g:293:15: '0' .. '7'
                    this.matchRange('0','7'); 



                    // ../MmirTemplate.g:293:25: ( '0' .. '7' )
                    // ../MmirTemplate.g:293:26: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;
                case 3 :
                    // ../MmirTemplate.g:294:9: '\\\\' ( '0' .. '7' )
                    this.match('\\'); 
                    // ../MmirTemplate.g:294:14: ( '0' .. '7' )
                    // ../MmirTemplate.g:294:15: '0' .. '7'
                    this.matchRange('0','7'); 





                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "OCTAL_ESC",

    // $ANTLR start UNICODE_ESC
    mUNICODE_ESC: function()  {
        try {
            // ../MmirTemplate.g:299:5: ( '\\\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT )
            // ../MmirTemplate.g:299:9: '\\\\' 'u' HEX_DIGIT HEX_DIGIT HEX_DIGIT HEX_DIGIT
            this.match('\\'); 
            this.match('u'); 
            this.mHEX_DIGIT(); 
            this.mHEX_DIGIT(); 
            this.mHEX_DIGIT(); 
            this.mHEX_DIGIT(); 



        }
        finally {
        }
    },
    // $ANTLR end "UNICODE_ESC",

    // $ANTLR start END
    mEND: function()  {
        try {
            var _type = this.END;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ../MmirTemplate.g:306:9: ( EOF )
            // ../MmirTemplate.g:306:11: EOF
            this.match(this.EOF); 
            this.emit(org.antlr.runtime.Token.EOF_TOKEN);
            if(this.isDebug) this.printDebug("exit text");/*debug*/



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "END",

    mTokens: function() {
        // ../MmirTemplate.g:1:8: ( EscapeExit | ESC_DoEnter | DoEnterBlock | DoEnterStatement | DoEnterIncludeScript | DoEnterIncludeStyle | DoEnterLocalize | DoEnterDeclareVar | DoEnterHelper | DoEnterRender | DoEnterYieldDeclaration | DoEnterYieldContent | DoEnterIfStatement | DoEnterElseStatement | DoEnterForStatement | NL | END_SCRIPT | CHAR | COMMENT | END )
        var alt6=20;
        alt6 = this.dfa6.predict(this.input);
        switch (alt6) {
            case 1 :
                // ../MmirTemplate.g:1:10: EscapeExit
                this.mEscapeExit(); 


                break;
            case 2 :
                // ../MmirTemplate.g:1:21: ESC_DoEnter
                this.mESC_DoEnter(); 


                break;
            case 3 :
                // ../MmirTemplate.g:1:33: DoEnterBlock
                this.mDoEnterBlock(); 


                break;
            case 4 :
                // ../MmirTemplate.g:1:46: DoEnterStatement
                this.mDoEnterStatement(); 


                break;
            case 5 :
                // ../MmirTemplate.g:1:63: DoEnterIncludeScript
                this.mDoEnterIncludeScript(); 


                break;
            case 6 :
                // ../MmirTemplate.g:1:84: DoEnterIncludeStyle
                this.mDoEnterIncludeStyle(); 


                break;
            case 7 :
                // ../MmirTemplate.g:1:104: DoEnterLocalize
                this.mDoEnterLocalize(); 


                break;
            case 8 :
                // ../MmirTemplate.g:1:120: DoEnterDeclareVar
                this.mDoEnterDeclareVar(); 


                break;
            case 9 :
                // ../MmirTemplate.g:1:138: DoEnterHelper
                this.mDoEnterHelper(); 


                break;
            case 10 :
                // ../MmirTemplate.g:1:152: DoEnterRender
                this.mDoEnterRender(); 


                break;
            case 11 :
                // ../MmirTemplate.g:1:166: DoEnterYieldDeclaration
                this.mDoEnterYieldDeclaration(); 


                break;
            case 12 :
                // ../MmirTemplate.g:1:190: DoEnterYieldContent
                this.mDoEnterYieldContent(); 


                break;
            case 13 :
                // ../MmirTemplate.g:1:210: DoEnterIfStatement
                this.mDoEnterIfStatement(); 


                break;
            case 14 :
                // ../MmirTemplate.g:1:229: DoEnterElseStatement
                this.mDoEnterElseStatement(); 


                break;
            case 15 :
                // ../MmirTemplate.g:1:250: DoEnterForStatement
                this.mDoEnterForStatement(); 


                break;
            case 16 :
                // ../MmirTemplate.g:1:270: NL
                this.mNL(); 


                break;
            case 17 :
                // ../MmirTemplate.g:1:273: END_SCRIPT
                this.mEND_SCRIPT(); 


                break;
            case 18 :
                // ../MmirTemplate.g:1:284: CHAR
                this.mCHAR(); 


                break;
            case 19 :
                // ../MmirTemplate.g:1:289: COMMENT
                this.mCOMMENT(); 


                break;
            case 20 :
                // ../MmirTemplate.g:1:297: END
                this.mEND(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(MmirTemplateLexer, {
    DFA6_eotS:
        "\u0001\u0007\u0002\u0006\u0005\uffff\u0001\u0018\u0012\uffff",
    DFA6_eofS:
        "\u001b\uffff",
    DFA6_minS:
        "\u0001\u0000\u0001\u0040\u0001\u0028\u0005\uffff\u0001\u0040\u0003"+
    "\uffff\u0001\u0063\u000e\uffff",
    DFA6_maxS:
        "\u0001\uffff\u0001\u0040\u0001\u007b\u0005\uffff\u0001\u0040\u0003"+
    "\uffff\u0001\u0074\u000e\uffff",
    DFA6_acceptS:
        "\u0003\uffff\u0003\u0010\u0001\u0012\u0001\u0014\u0001\uffff\u0001"+
    "\u0002\u0001\u0003\u0001\u0004\u0001\uffff\u0001\u0007\u0001\u0008\u0001"+
    "\u0009\u0001\u000a\u0001\u000b\u0001\u000c\u0001\u000d\u0001\u000e\u0001"+
    "\u000f\u0001\u0013\u0001\u0001\u0001\u0011\u0001\u0005\u0001\u0006",
    DFA6_specialS:
        "\u0001\u0000\u001a\uffff}>",
    DFA6_transitionS: [
            "\u000a\u0006\u0001\u0003\u0002\u0006\u0001\u0003\u0032\u0006"+
            "\u0001\u0002\u003c\u0006\u0001\u0001\u1faa\u0006\u0001\u0004"+
            "\u0001\u0005\udfd6\u0006",
            "\u0001\u0008",
            "\u0001\u000b\u0001\uffff\u0001\u0016\u0015\uffff\u0001\u0009"+
            "\u0022\uffff\u0001\u0012\u0001\uffff\u0001\u0014\u0001\u0015"+
            "\u0001\uffff\u0001\u000f\u0001\u0013\u0002\uffff\u0001\u000d"+
            "\u0005\uffff\u0001\u0010\u0001\u000c\u0002\uffff\u0001\u000e"+
            "\u0002\uffff\u0001\u0011\u0001\uffff\u0001\u000a",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0017",
            "",
            "",
            "",
            "\u0001\u0019\u0010\uffff\u0001\u001a",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(MmirTemplateLexer, {
    DFA6_eot:
        org.antlr.runtime.DFA.unpackEncodedString(MmirTemplateLexer.DFA6_eotS),
    DFA6_eof:
        org.antlr.runtime.DFA.unpackEncodedString(MmirTemplateLexer.DFA6_eofS),
    DFA6_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(MmirTemplateLexer.DFA6_minS),
    DFA6_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(MmirTemplateLexer.DFA6_maxS),
    DFA6_accept:
        org.antlr.runtime.DFA.unpackEncodedString(MmirTemplateLexer.DFA6_acceptS),
    DFA6_special:
        org.antlr.runtime.DFA.unpackEncodedString(MmirTemplateLexer.DFA6_specialS),
    DFA6_transition: (function() {
        var a = [],
            i,
            numStates = MmirTemplateLexer.DFA6_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(MmirTemplateLexer.DFA6_transitionS[i]));
        }
        return a;
    })()
});

MmirTemplateLexer.DFA6 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 6;
    this.eot = MmirTemplateLexer.DFA6_eot;
    this.eof = MmirTemplateLexer.DFA6_eof;
    this.min = MmirTemplateLexer.DFA6_min;
    this.max = MmirTemplateLexer.DFA6_max;
    this.accept = MmirTemplateLexer.DFA6_accept;
    this.special = MmirTemplateLexer.DFA6_special;
    this.transition = MmirTemplateLexer.DFA6_transition;
};

org.antlr.lang.extend(MmirTemplateLexer.DFA6, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( EscapeExit | ESC_DoEnter | DoEnterBlock | DoEnterStatement | DoEnterIncludeScript | DoEnterIncludeStyle | DoEnterLocalize | DoEnterDeclareVar | DoEnterHelper | DoEnterRender | DoEnterYieldDeclaration | DoEnterYieldContent | DoEnterIfStatement | DoEnterElseStatement | DoEnterForStatement | NL | END_SCRIPT | CHAR | COMMENT | END );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA6_0 = input.LA(1);

                            s = -1;
                            if ( (LA6_0=='}') ) {s = 1;}

                            else if ( (LA6_0=='@') ) {s = 2;}

                            else if ( (LA6_0=='\n'||LA6_0=='\r') ) {s = 3;}

                            else if ( (LA6_0=='\u2028') ) {s = 4;}

                            else if ( (LA6_0=='\u2029') ) {s = 5;}

                            else if ( ((LA6_0>='\u0000' && LA6_0<='\t')||(LA6_0>='\u000B' && LA6_0<='\f')||(LA6_0>='\u000E' && LA6_0<='?')||(LA6_0>='A' && LA6_0<='|')||(LA6_0>='~' && LA6_0<='\u2027')||(LA6_0>='\u202A' && LA6_0<='\uFFFF')) ) {s = 6;}

                            else s = 7;

                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 6, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 
})();