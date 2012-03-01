(function($){
    /*
        Simple Fancy Tooltip
        Author: Erwin Gargalicano
    */
    $.fn.fancyTip = function(options, element){
        
        var defaults = {
            title: '',
            tipPosition: 'top',
            bgColor: 'blue'
        };
        
        var options = $.extend(defaults, options); 
        
        return this.each(function(){
            opt = options;
            elem = $(this);
            tipId = 'tip' + new Date().getTime();
            

            //Generate tooltip element
            generateTip($(this), tipId);
            
            //Get id of the element and tooltip class name
            var elemID = elem.attr('id', tipId);
            var $tip = $(this).attr("id");
            var $tooltipClass = $('.'+$tip);
            
            elem.mouseover(function(){
                elemPostop = elemID.offset().top;
                elemPosleft = elemID.offset().left;
                
                
                if(opt.tipPosition == "top"){
                    TopPosTipTp = elemPostop - 40;
                    TopPosTipLf = elemPosleft;
                }
                if(opt.tipPosition == "bottom"){

                    TopPosTipTp = elemPostop + 20;
                    TopPosTipLf = elemPosleft;
                }
                    
                
                $tooltipClass.fadeIn().css({
                    'position':'absolute',
                    'top':TopPosTipTp,
                    'left':TopPosTipLf
                });
            });
            
            elem.mouseout(function(){
                $tooltipClass.fadeOut();
            });
            
            
        });

        
    };
    
    var generateTip = function($this, tipID){
                        
        defaultTitle = $this.attr('title');
        
        if(opt.title == ""){
            $this.attr('title', defaultTitle);
            TipContent = $this.attr('title');
        }else{
            $this.removeAttr('title');
            $this.attr('title', opt.title);
            TipContent = $this.attr('title');
        };
        
                    
        //Append tooltip div
        tooltipWrap = $('<div class="tooltip blue" />').appendTo('body');
        
        //Add unique class
        tooltipWrap.addClass(tipID);
        
        //append content to wrapper 
        tooltipWrap.append(TipContent);
        
        //Add Background color
        if(opt.bgColor == "blue"){
            tooltipWrap.addClass("blue");
        }else if(opt.bgColor == "red"){
            tooltipWrap.addClass("red");
        }else if(opt.bgColor == "black"){
            tooltipWrap.addClass("black");
        }else{
            tooltipWrap.addClass("blue");
        }
    
    };
    
    
})(jQuery);