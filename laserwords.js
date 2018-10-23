$(function() {
  // some word sets...
  var agot = ['WINTER','IS','COMING','YOU','KNOW','NOTHING','JON','SNOW','HODOR','RAVENS','VALAR','MORGULIS','KING','JOFFREY','QUEEN','CERSEI','SER','MERYN','TRANT','WEESE','CHYSWYCK','DUNSEN','RAFF','SWEETLING','ARMORY','LORCH','RED','WOMAN','ILYN','PAYNE','MOUNTAIN','HOUND','POLLIVER','LANNISTER','STARK','TYRELL','BARATHEON','GREYJOY','MARTELL','ARRYN','TULLY','TYRION','ARYA','IRON','THRONE'];
  var marvel = ['IRONMAN','TONY','STARK','CLINT','MARIA','AGENT','PEPPER','WAR','MACHINE','BLACK','WIDOW','NATASHA','BRUCE','HULK','LULLABY','HAWKEYE','FURY','ROGERS','CAP','SCARLET','WITCH','QUICKSILVER','MAXIMOFF','THOR','ASGARD','HEIMDALL','VISION','JARVIS','STARLORD','QUILL','DRAX','DESTROYER','GROOT','ROCKY','GAMORRA','INFINITY','GAUNTLET','THANOS','ANTMAN','DR','STRANGE','DORMAMMU','ULTRON','STANE','GEM','LOKI','ODIN','MILANO','HOOKED','ON','A','FEELING','PINA','COLADA','MOONAGE','DAYDREAM','ACDC','SABBATH','YONDU','PELVIC','SORCERY','POLLACK','TWELVE','PERCENT'];
  var all_hp_spells = ['ACCIO','AGUAMENTI','ALOHOMORA','ANAPNEO','APARECIUM','AVADA','KEDAVRA','AVIS','BAT','BOGEY','CHARM','CURSE','BUBBLEHEAD','CAVE','INIMICUM','COLLOPORTUS','CONFRINGO','CONFUNDO','CRUCIO','DEFODIO','DELETRIUS','DEPRIMO','DESCENDO','DURO','DENSAUGEO','DIFFINDO','ENGORGIO','EPISKEY','ERECTO','EXPULSO','EVANESCO','EXPECTO','PATRONUM','EXPELLIARMUS','FERULA','FIDELIUS','FLAGRATE','FURNUNCULUS','FINITE','GEMINIO','GLISSEO','HOMENUM','REVELIO','IMPERVIUS','INCANTATEM','IMPEDIMENTA','IMPERIO','INCARCEROUS','INCENDIO','LANGLOCK','LEGILIMENS','LEVI','CORPUS','LIBERA','LOCOMOTOR','MORTIS','LUMOS','ARBUS','MOBILI','MORSMORDRE','MUFFLIATO','NOX','OBLIVIATE','OBSCURO','OPPUGNO','ORCHIDEOUS','PACK','PETRIFICUS','TOTALUS','PIERTOTUM','POINT','ME','PRIOR','PROTEGO','QUIETUS','REDUCIO','REDUCTO','RELASHIO','RENNERVATE','RICTUSEMPRA','REPARO','RIDDIKULUS','SALVIO','HEXIA','SCOURGIFY','SECTUMSEMPRA','SERPENSORTIA','SILENCIO','SONORUS','STUPEFY','TARANTALLEGRA','TERGEO','WADDIWASI','WINGARDIUM','LEVIOSA'];
  var hp_spells = ['ACCIO','ALOHOMORA','AVADA','KEDAVRA','CONFUNDO','CRUCIO','DIFFINDO','ENGORGIO','EXPECTO','PATRONUM','EXPELLIARMUS','IMPEDIMENTA','IMPERIO','INCENDIO','LEGILIMENS','LEVI','CORPUS','LIBERA','LOCOMOTOR','MORTIS','LUMOS','MORSMORDRE','MUFFLIATO','NOX','OBLIVIATE','OBSCURO','OPPUGNO','PACK','PETRIFICUS','TOTALUS','PROTEGO','QUIETUS','REDUCTO','RELASHIO','RENNERVATE','REPARO','RIDDIKULUS','SALVIO','HEXIA','SCOURGIFY','SECTUMSEMPRA','SILENCIO','SONORUS','STUPEFY','WINGARDIUM','LEVIOSA'];
  var iron_man = ['PHILANTHROPIST','BILLIONAIRE','GENIUS','PLAYBOY','IRONMAN','TONY','STARK','RHODEY','PEPPER','OBADIAH','JARVIS','HOWARD','WHIPLASH','TEN','RINGS','REACTOR','ARC','PALLADIUM','CAR','BATTERY','ACDC','PEACE','YINSEN','MARK','HOTROD','RED','JERICHO','ELECTROMAGNET','REPULSOR','HUMDRUMVEE','COULSON','AGENT','ICING','PROBLEM','DUMMY','GOLMIRA','HAPPY','FURY','SUIT','STANE'];
  var lotr = ['FRODO','SAM','BILBO','GANDALF','ARAGORN','LEGOLAS','GIMLI','BOROMIR','MERRY','PIPPIN','ELROND','SAURON','RING','SARUMAN','BOMBADIL','CELEBORN','GALADRIEL','NAZGUL','WORMTONGUE','ROHAN','GONDOR','SHIRE','MORDOR','SHELOB','GOLLUM','RADAGAST','TROLLS','ELVES','DWARVES','HOBBITS','MEN','MORIA','BALROG','ENTS','TREEBEARD','SHADOWFAX','THEODIN','KING','STEWARD'];
  var herbs = ['CINNAMON','PAPRIKA','SALT','PEPPER','THYME','CARDAMOM','VANILLA','TURMERIC','NUTMEG','OREGANO','BASIL','CLOVE','GARLIC','ROSEMARY','MARJORAM','CHILI','MINT','MUSTARD','FENNEL','SAFFRON','GINGER','ANISE','BAY','CARAWAY','CAYENNE','CELERY','CHICORY','CHIVES','CILANTRO','CUMIN','DILL','JASMINE','MACE','PARSLEY','SAVORY','SAGE','TARRAGON','WASABI','LEMONGRASS','SPICE','HERB','MORTAR','PESTLE'];
  var wine = ['PINOT','GRIGIO','NOIR','ROSE','RED','WHITE','MERLOT','CABERNET','SAUVIGNON','CASK','BOTTLE','JEROBOAM','VIN','BREATHE','CAVE','CELLAR','CHAMPAGNE','CLAIRET','PORT','CORK','DECANTER','RIESLING','FLAGON','BOUQUET','QUAFF','GRAPE','SHERRY','SOMMELIER','TERROIR','WINE','CHARDONNAY','BORDEAUX','BURGUNDY','ZINFANDEL','KIM','SHIRAZ','FRANC','MALBEC','TANNINS','FULL','BODIED','FLUTE'];
  var trees = ['ALDER','ASH','ASPEN','BEECH','BIRCH','CEDAR','CHERRY','CHESTNUT','COTTONWOOD','FIR','PINE','CYPRESS','CORK','ELM','HEMLOCK','HICKORY','HORNBEAM','LARCH','LINDEN','POPLAR','PALM','OLIVE','OAK','MULBERRY','MAPLE','WILLOW','WALNUT','SYCAMORE','SUMAC','SPRUCE','ROOT','TRUNK','BRANCH','LEAF','TWIG','SAP','BARK','LAUREL','MAHOGANY','TEAK','YEW','GINKGO'];
  var ottawa = ['RIDEAU','CANAL','GATINEAU','CENTRE','GLEBE','UPPER','LOWER','TOWN','SANDY','HINTONBURG','WESTBORO','TUNNEYS','PASTURE','MECHANICSVILLE','RIVERVIEW','EXPERIMENTAL','FARM','CARLETON','BILLINGS','BRIDGE','NEPEAN','VANIER','GOLDEN','TRIANGLE','BYWARD','MARKET','OTTAWA','LEBRETON','FLATS','ROCKCLIFFE','NEW','EDINBURGH','PARK','BEECHWOOD'];
  var beer = ['STOUT','PORTER','LAGER','DUNKEL','AMBER','HOPS','BERLINER','WEISSE','ALE','BITTER','BLONDE','BOCK','CREAM','HEFEWEIZEN','INDIA','PALE','PILSNER','CASK','PINT','PITCHER','KEG','WHEAT','KELLERBIER','BEER','BREW','YEAST','BARLEY','TRAPPIST','CHEERS','PROST','SALUT','SKAL','KIPPIS','KANPAI','NAZDROWIE','SANTE','STEIN','TANKARD','HELLES','KOLSCH','KURONAMA','MALT'];
  var adventuretime = ['FINN','HUMAN','JAKE','DOG','PRINCESS','BUBBLEGUM','LUMPY','SPACE','RAINICORN','BMO','SHELBY','MARTIN','ICE','KING','BANANA','MAN','PRISMO','COSMIC','OWL','ANCIENT','PSYCHIC','TANDEM','WAR','ELEPHANT','LADY','MARCELINE','ABRACADANIEL','BILLY','CHOOSE','GOOSE','CINNAMON','BUN','FLAME','GUMBALL','GUARDIAN','GUNTER','OOO','LEMONGRAB','LICH','MAGIC','SNAIL','STARCHIE','RICARDIO','TREE','TRUNKS'];
  var coffee = ['COFFEE','JOE','JAVA','DRIP','ESPRESSO','TURKISH','POUR','OVER','AMERICANO','PERCOLATOR','CHEMEX','CUBAN','LONG','BLACK','FRENCH','PRESS','COLD','BREW','SIPHON','CAFFEINE','BEANS','ROAST','GRIND','AERO','FILTER','ICED','LATTE','FLAT','WHITE','CAPPUCCINO','CAFE','LAIT','ETHIOPIAN','CEZVE','JEBENA','ROBUSTA','ARABICA','CREMA','BREVE','MACCHIATO','MOCHA','TAMPER'];
  var pastries = ['CROISSANT','ECLAIR','PETS','DE','SOEUR','JOS','LOUIS','POUDING','CHOMEUR','SUCRE','CHOUQUETTE','ERABLE','SIROP','BEIGNET','MACARON','PETIT','FOUR','TARTE','PATE','BRISEE','CREME','BRULEE','CREPE','SUZETTE','PROFITEROLE','CLAFOUTIS','CALISSON','DARIOLE','BRIOCHE','GATEAU','MADELEINE','MILLE','FEUILLE','PAIN','BICHON','CITRON','AU','CROUSTADE','PALMIER','BUCHE','CANELE','GALETTE'];
  var vancouver = [['EAST','VAN'],['COMMERCIAL','DRIVE'],'SEAWALL','BURNABY',['STANLEY','PARK'],'GRANVILLE',['ENGLISH','BAY'],['PACIFIC','SPIRIT'],['GROUSE','MOUNTAIN'],'KITSILANO','GASTOWN',['FALSE','CREEK'],['BURRARD','BRIDGE'],['MOLE','HILL'],'YALETOWN','DAVIE',['POINT','GREY'],['DR','SUN','YAT','SEN','GARDEN'],'ROBSON',['COAL','HARBOUR'],'SOMA','STEVESTON','KERRISDALE','SQUAMISH','MUSQUEAM',['TSEIL','WAUTUTH']];
  var bourbon = ['BOURBON','KENTUCKY',['PAPPY','VAN','WINKLE'],['ELMERT','LEE'],'BLANTONS',['DEVILS','CUT'],'WELLER',['SMALL','BATCH'],['OLD','FASHIONED'],['BUFFALO','TRACE'],['EAGLE','RARE'],['WHITE','OAK'],['SINGLE','BARREL'],['MASH','BILL'],'CORN','STILL','NEAT','ROCKS','FLASK','BRANCH',['MINT','JULEP'],'CASK','RESERVE',['JACK','DANIELS'],['WILD','TURKEY'],'WHISKEY','PROOF','MANHATTAN'];
  var architecture = [['FLYING','BUTTRESS'],'VAULT','ARCH','ORTHANC',['MINAS','TIRITH'],['CAIR','PARAVEL'],'COLUMN','APRON','ARCADE','CRENELLATION','ATRIUM','FACADE','BALUSTER','GABLE','BAY','BELFRY','KEYSTONE','CUPOLA','GAMBREL','GARGOYLE','LINTEL','MANSARD','MULLION','NAVE','NICHE','DOME','PARAPET','PORTICO','QUOIN','TRUSS','TRANSOM',['LE','CORBUSIER'],['FRANK','GEHRY'],['LLOYD','WRIGHT'],'GAUDI',['MIMAR','SINAN'],'WREN','SULLIVAN','MIES',['IM','PEI']];
  var shoptools = [['BAND','SAW'],'HAMMER','CIRCULAR','CHISEL','CLAMP','VISE',['BELT','SANDER'],'PLANER','JIG','CHUCK','DRILL','BIT','PRESS','SHOPVAC','LATHE','MILL','FILE','GLUE','TABLE','ROUTER','DREMEL','SCREWDRIVER','WRENCH',['MEASURING','TAPE'],'LEVEL','MITER','AWL','CALIPER','PUNCH','PENCIL','SQUARE','MALLET','JOINTER','TOOLBOX','WORKSHOP','BRACE','AUGER',['ANGLE','GRINDER'],['BISCUIT','JOINER']];
  var love = ['LOVE','HEART','AMORE','DARLING','SWEETIE','PASSION','DEVOTION','WARMTH','SOULMATE','KISS','HUG','ADMIRE','ADORATION','AFFECTION','FONDNESS',['BEST','FRIEND'],'TENDER','TRUE','DELIGHT','LIKE','MADLY','DEEPLY','ARDOR','FANCY','ROMANCE','FIRE','BELOVED','HONEY','DEAREST','AMOUR','LIEBE','FAVOURITE','FEELING','HAPPINESS','TRUST','SEXY','CARING','COMFORT','LAUGHTER','SMILE','UNCONDITIONAL','FOREVER'];
  // let's set some control variables!
  var original_words = love;
  var words;
  var boardSize = 16;
  var howManyTimes = 5;
  var wordsFitted = 0; // let's keep score
  var writeColumns = true; // false will only write words horizontally, left to right
  var sortMethod = 'desc'; // asc is sus, save dem small words for last
  var sortWords = false; // or don't even bother
  var alternatePlacingRowCol = true;
  var alternateRowCol = 'col';
  var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  // define a Phrase object to handle multi-word phrases that should be placed together
  function Phrase(words) {
    if (typeof words === 'string') {
      this.words = [words];
    } else {
      this.words = words;
    }
  }

  Phrase.prototype.length = function() {
    return this.words.length;
  };

  Phrase.prototype.isLastWord = function(word) {
    return this.words.indexOf(word) == (this.words.length - 1);
  };

  Phrase.prototype.phraseLength = function() {
    var plength = 0;
    for (var i = 0; i < this.words.length; i++) {
      plength += this.words[i].length;
    }
    return plength;
  };

  Phrase.prototype.toString = function() {
    var newString = '';
    for (var i = 0; i < this.words.length; i++) {
      newString += this.words[i] + ' ';
    }
    return newString;
  };

  // turn the wordlist into an array of Phrase objects so I can sort
  var temp_words = [];
  for (var i = 0; i < original_words.length; i++) {
    phrase = new Phrase(original_words[i]);
    //console.log("Adding phrase with length " + phrase.phraseLength() + ", " + phrase);
    temp_words.push(phrase); 
  }
  original_words = temp_words;

  // set up the board

  for (var i=1; i <= boardSize; i++) {
    var newRow = $('<div class="row row'+i+'"></div><!-- end row'+i+' -->');
    $('.root').append(newRow);
    for (var j=1; j <= boardSize; j++) {
      var newCell = $('<div data-x="'+j+'" data-y="'+i+'" class="cell cell'+j+'"></div>');
      newRow.append(newCell);
    }
  }

  $('.fill').click(function() {
    fillInTheBlanks();
  });

  $('.generate').click(function() {
    cleanSlate();
    words = original_words;
    // maybe do some sorting
    if (sortWords) { 
      // not sorting is good if you want list-adjacent words to have a better chance of being near each other but works best if you move really long (8-12 letters) words to the start
      words.sort(function(a,b) {
        switch (sortMethod) {
          case 'asc':
            return a.phraseLength() > b.phraseLength(); // sort shortest to longest
          break;
          case 'desc':
            return a.phraseLength() < b.phraseLength(); // sort longest to shortest
          break;
        }
      });
    }

    //console.log("****************************");

    // alright here we go!
    for (var i = 0; i < howManyTimes; i++) {
      words = tryToPlace(words);
      if (words.length == 0) {
        break;
      }
    }

    //fillInTheBlanks();

    //console.log("Total # words: " + (words.length+wordsFitted) + ", words placed: " + wordsFitted);
    // write this in the dom
    $('.message').html("Total # words: " + (words.length+wordsFitted) + ", words placed: " + wordsFitted);
    $('.wordsleft').html(words.toString());


    //console.log(words);
  });

  function cleanSlate() {
    $('.cell').html('');
    wordsFitted = 0;
    alternatePlacingRowCol = true;
  }

  function fillInTheBlanks() {
    var emptySpaces = $(".cell:empty()");
    // if there's any empty cells
    if (emptySpaces.length !== 0) {
      // fill each one with a random letter
      $.each(emptySpaces, function(index, space) {
        var randomIndex = Math.floor((Math.random() * 26));// + 1;
        var randomLetter = alphabet[randomIndex];
        $(space).html(randomLetter);
      });
    }
  }

  function tryToPlace(w) {
    //console.log("****************************");
    var wordCount = parseInt(w.length);
    var unused = w.slice();
    //console.log("Unused length = " + unused.length);
    $.each(w, function(index, phrase) {
      //console.log("-------------");
      //console.log("Trying to place phrase " + phrase);
      // for every word in this phrase, try to place near each other
      places = [];
      //console.log("Phrase length = " + phrase.length());
      for (var h=0; h < phrase.length(); h++) {
        word = phrase.words[h];
        //console.log("  Trying to place word " + word);

        // check for matching letters on board
        var matchFound = false;
        var placeFound = false;
        var placeOrientation = '';
        var x, y;

        // if this is a phrase of more than one word
        if (h > 0) {
          // try to find a place within the previous words first
          // for every word in the phrase before this one
          for (var g = 0; g < h; g++) {
            var orientation = places[g]['orientation'];
            //console.log("    Trying to find a place near " + phrase.words[g] + " which was placed in a " + orientation);
            // for every letter as well as 1 space before/after that previous word, try to find a match
            for (var f = 0; f <= phrase.words[g].length; f++) {
              if (!matchFound) {
                var targetX = parseInt(places[g]['x']);
                var targetY = parseInt(places[g]['y']);
                if (orientation == 'row') {
                  targetX += f;
                } else {
                  targetY += f;
                }
                var targetCell = $('.row'+targetY + ' .cell'+targetX);
                //console.log("    Checking " + targetCell.html() + " at " + targetX + ", " + targetY);
                if (orientation == 'row') {
                  // for each letter of the target word
                  for (var e=0; e < word.length; e++) {
                    if (!matchFound && targetY > 0) {
                      //console.log("Trying at " + targetX + ", " + targetY);
                      if (checkColIsEmpty(targetX, targetY, word)) {
                        //console.log("Found a place col-wise at " + targetX + ", " + targetY);
                        x = targetX;
                        y = targetY;
                        placeFound = true;
                        matchFound = true;
                        placeOrientation = 'col';
                      } else {
                        //console.log("Didn't find a place, trying same column but one row higher");
                        targetY -= 1;
                      }
                    }
                  }
                } else {
                  for (var e=0; e < word.length; e++) {
                    if (!matchFound && targetX > 0) {
                      //console.log("Trying at " + targetX + ", " + targetY);
                      if (checkRowIsEmpty(targetX, targetY, word)) {
                        //console.log("Found a place row-wise at " + targetX + ", " + targetY);
                        x = targetX;
                        y = targetY;
                        placeFound = true;
                        matchFound = true;
                        placeOrientation = 'row';
                      } else {
                        targetX -= 1;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        if (!matchFound) {
          //console.log("-----");
          //console.log("Placing by trying to find matching letter");
          // for every letter in this word, check if it's on there already
          for (var i=0; i < word.length; i++) {
            if (!matchFound) {
              // is this letter on the board already?
              var targetLetter = word.charAt(i);
              var matchingLetters = $('.cell:contains("'+ targetLetter +'")');

              // if so, where?
              if (matchingLetters.length !== 0) {
                // matching letter locations on board
                $.each(matchingLetters, function(index, letter) {
                  // letters coords
                  rowX = parseInt($(letter).data("x")) - i;
                  rowY = parseInt($(letter).data("y"));
                  if (checkRowIsEmpty(rowX, rowY, word)) {
                    // this row space is a fit
                    x = rowX;
                    y = rowY;
                    matchFound = true;
                    placeFound = true;
                    placeOrientation = 'row';
                  } else {
                    colX = parseInt($(letter).data('x'));
                    colY = parseInt($(letter).data('y') - i);
                    if (checkColIsEmpty(colX, colY, word)) {
                      // this column space is a fit
                      x = colX;
                      y = colY;
                      matchFound = true;
                      placeFound = true;
                      placeOrientation = 'col';
                    }
                  }
                });
              }

              // if not, next letter please
            }
          }
        }


        // pick a random starting point otherwise
        if (!matchFound) {
          //console.log("-----");
          //console.log("No matching letter or empty space found for " + word + ", try a random point 20 times");
          for (var j = 0; j < 20; j++) {
            x = Math.floor((Math.random() * boardSize)) + 1;
            y = Math.floor((Math.random() * boardSize)) + 1;
            if (startingPointDoesntWork(x, y, word) ) {
              //console.log('LOSER! ' + x + ", " + y);
              continue;
            } else {
              placeFound = true;
	      matchFound = true;
              break;
            }
          }
        }

        // pick an empty space to start from
        if (!matchFound) {
          //console.log("-----");
          //console.log("Placing by trying to find empty squares");
          var emptySpaces = $('.cell:empty()');
          if (emptySpaces.length !== 0 && emptySpaces.length !== 257) {
            $.each(emptySpaces, function(index, space) {
              var emptyX = parseInt($(space).data('x'));
              var emptyY = parseInt($(space).data('y'));
		    //console.log("Trying " + emptyX + "," + emptyY);
              if (!startingPointDoesntWork(emptyX, emptyY, word, true) ) {
                //console.log("Found a working empty starting point for " + word + " at " + emptyX + "," + emptyY);
                placeFound = true;
                x = emptyX;
                y = emptyY;
                return false;
              }
            });
          }
        }

        if (placeFound) {
          //console.log("Found a place for " + word + " at " + x + ", " + y);
          // the word will fit here, proceed
          // if we're alternating placing rows and columns, and it's row's turn
          if (placeOrientation == 'row') {
            //console.log("Placing " + word + " row-wise");
            placeWord(x, y, word, 'row',unused, phrase);
            places[h] = {'orientation': 'row', 'x': x, 'y': y};
          } else if (placeOrientation == 'col') {
            //console.log("Placing " + word + " col-wise");
            placeWord(x, y, word, 'col',unused, phrase);
            places[h] = {'orientation': 'col', 'x': x, 'y': y};
          } else if (alternatePlacingRowCol) {
            if (alternateRowCol == 'row') {
              if (checkRowIsEmpty(x, y, word)) {
                //console.log("Placing " + word + " row-wise, switching");
                placeWord(x, y, word, 'row',unused, phrase);
                places[h] = {'orientation': 'row', 'x': x, 'y': y};
                alternateRowCol = 'col';
              }
            } else {
              if (checkColIsEmpty(x, y, word)) {
                //console.log("Placing " + word + " col-wise, switching");
                placeWord(x, y, word, 'col',unused, phrase);
                places[h] = {'orientation': 'col', 'x': x, 'y': y};
                alternateRowCol = 'row';
              }
            } 
          } else {
            if (writeColumns && checkColIsEmpty(x, y, word)) {
              //console.log("Placing " + word + " col-wise");
              //console.log("Placing " + word + " in a column at " + x + "," + y);
              placeWord(x, y, word, 'col',unused, phrase);
              places[h] = {'orientation': 'col', 'x': x, 'y': y};
            } else if (checkRowIsEmpty(x, y, word)) {
              //console.log("Placing " + word + " in a row at " + x + "," + y);
              //console.log("Placing " + word + " row-wise");
              placeWord(x, y, word, 'row',unused, phrase);
              places[h] = {'orientation': 'row', 'x': x, 'y': y};
            }
          }
        } else {
          // couldn't find anywhere to put this word :(
          //console.log("Could not write " + word); 
        }
      }

      //console.log("----------------------");
    });
    //console.log("Tried to place " + wordCount + " words, placed " + (wordCount - unused.length) + " words");
    //console.log(unused);
    //console.log("Row or column? " + alternateRowCol);
    if ((wordCount - unused.length) == 0) {
      //console.log("changing from row to col: wordCount = " + wordCount + ", unused = " + unused.length);
      //alternateRowCol = (alternateRowCol == 'row') ? 'col' : 'row';
      alternatePlacingRowCol = false;
    } else {
      //console.log("not changing from row to col: wordCount = " + wordCount + ", unused = " + unused.length);
      alternatePlacingRowCol = true;
    }
    return unused;
  }

  function placeWord(x, y, word, rowOrCol, unused, phrase) {
    var targetCell = $('.row'+y + ' .cell'+x);
    var placed = false;
    //console.log(targetCell);
    if (rowOrCol == 'row') {
      for (var i=0; i < word.length; i++) {
        targetCell.html(word.charAt(i));              
        var nextCell = x+i+1;
        targetCell = $('.row'+y + ' .cell'+nextCell);
      }
      placed = true;
    } else if (rowOrCol == 'col') {
      for (var i=0; i < word.length; i++) {
        targetCell.html(word.charAt(i));              
        var nextCell = y+i+1;
        targetCell = $('.row'+nextCell + ' .cell'+x);
      }
      placed = true;
    } else {
      //console.log("Error, could not place " + word + " as expected at " + x + "," + y );
    }
    if (placed) {
      //console.log("Taking " + word + " out of the word list");
      if (phrase.isLastWord(word)) {
        wordsFitted++;
        var unusedIndex = unused.indexOf(phrase);
        unused.splice(unusedIndex, 1);
      }
    }
  }

  function startingPointDoesntWork(x, y, word, ignoreAlternating = false) {
    if (writeColumns) {
      if (!ignoreAlternating && alternatePlacingRowCol) {
        if (alternateRowCol == 'row') {
          return !checkRowIsEmpty(x, y, word);
        } else {
          return !checkColIsEmpty(x, y, word);
        }
      } else {
        return !checkColIsEmpty(x, y, word) && !checkRowIsEmpty(x, y, word);
      }
    } else {
      return !checkRowIsEmpty(x, y, word);
    }
  }

  // If we started the word at x,y going row-wise, would it fit?
  function checkRowIsEmpty(x, y, word) {
	  //console.log("board size: " + boardSize + ", x = " + x + ", word length = " + word.length);
    if ((boardSize - x + 1) >= word.length) {
      for (var col=x; col < word.length + x; col++) {
        var targetCell = $('.row'+y + ' .cell'+col);
        if ((targetCell.html() != '') && (targetCell.html() != word.charAt(col - x))) {
          return false;
        }
      }
      //console.log("      Valid place found at " + x + ", " + y);
      return true;
    } else {
      //console.log("      Row starting at " + x + ", " + y + " doesn't work because it doesn't fit on the board");
      return false;
    }
  }

  // If we started the word at x,y going col-wise, would it fit?
  function checkColIsEmpty(x, y, word) {
	  //console.log("board size: " + boardSize + ", y = " + y + ", word length = " + word.length);
    if ((boardSize - y + 1) >= word.length) {
      for (var row=y; row < word.length + y; row++) {
        var targetCell = $('.row'+row + ' .cell'+x);
        if ((targetCell.html() != '') && (targetCell.html() != word.charAt(row - y))) {
          return false;
        }
      }
      //console.log("      Valid place found at " + x + ", " + y);
      return true;
    } else {
      //console.log("      Col starting at " + x + ", " + y + " doesn't work because it doesn't fit on the board");
      return false;
    }
  }

  function saveBoard() {
    var allRows = $('.row');
    var saveArray = [];
    var saveString = '';
    $.each(allRows, function(index, row) {
      var saveRow = [];
      var cells = $(row).find('.cell');
      $.each(cells, function(cellIndex, cell) {
        saveRow.push($(cell).html());
        saveString += $(cell).html();
      });
      saveArray.push(saveRow);
    });
    //console.log(saveArray);
    //console.log(saveString);
  }

  $('.save').click(function() {
    saveBoard();
  });

  function loadBoard() {
    var boardString = $('.load_area').val();
    for (var i=1; i <= 16; i++) {
      var row = $('.row'+i);
      for (var j = 1; j <= 16; j++) {
        var cell = $('.row'+i+' .cell'+j);
        var stringPos = (j-1) + ((i-1)*16);
        cell.html(boardString.charAt(stringPos));
      }
    }

  }

  $('.load').click(function() {
    loadBoard();
  });
});
