// JavaScript Document

    $(function(){
    
      var $container = $('#container');
    
      $container.isotope({
        masonry: {
          columnWidth: 120
        },
        sortBy: 'number',
        getSortData: {
          number: function( $elem ) {
            var number = $elem.hasClass('element') ? 
              $elem.find('.number').text() :
              $elem.attr('data-number');
            return parseInt( number, 10 );
          },
          alphabetical: function( $elem ) {
            var name = $elem.find('.name'),
                itemText = name.length ? name : $elem;
            return itemText.text();
          }
        }
      });
    
      
      var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });


    
      // Sites using Isotope markup
      var $sites = $('#sites'),
          $sitesTitle = $('<h2 class="loading"><img src="http://i.imgur.com/qkKy8.gif" />Loading sites using Isotope</h2>'),
          $sitesList = $('<ul class="clearfix"></ul>');
        
      $sites.append( $sitesTitle ).append( $sitesList );

      $sitesList.isotope({
        layoutMode: 'cellsByRow',
        cellsByRow: {
          columnWidth: 290,
          rowHeight: 400
        }
      });
    
      var ajaxError = function(){
        $sitesTitle.removeClass('loading').addClass('error')
          .text('Could not load sites using Isotope :(');
      };
    
      // dynamically load sites using Isotope from Zootool
      $.getJSON('http://zootool.com/api/users/items/?username=desandro' +
          '&apikey=8b604e5d4841c2cd976241dd90d319d7' +
          '&tag=bestofisotope&callback=?')
        .error( ajaxError )
        .success(function( data ){

          // proceed only if we have data
          if ( !data || !data.length ) {
            ajaxError();
            return;
          }
          var items = [],
              item, datum;

          for ( var i=0, len = data.length; i < len; i++ ) {
            datum = data[i];
            item = '<li><a href="' + datum.url + '">'
              + '<img src="' + datum.image.replace('/l.', '/m.') + '" />'
              + '<b>' + datum.title + '</b>'
              + '</a></li>';
            items.push( item );
          }
        
          var $items = $( items.join('') )
            .addClass('example');
            
          // set random number for each item
          $items.each(function(){
            $(this).attr('data-number', ~~( Math.random() * 100 + 15 ));
          });
        
          $items.imagesLoaded(function(){
            $sitesTitle.removeClass('loading').text('Sites using Isotope');
            $container.append( $items );
            $items.each(function(){
              var $this = $(this),
                  itemHeight = Math.ceil( $this.height() / 120 ) * 120 - 10;
              $this.height( itemHeight );
            });
            $container.isotope( 'insert', $items );
          });
        
        });
    
    
    });
  