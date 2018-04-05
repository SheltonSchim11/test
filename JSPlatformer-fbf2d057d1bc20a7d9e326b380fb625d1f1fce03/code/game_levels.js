var GAME_LEVELS = [
  ["xxx                                                                          xxx",
   "xxx                                                                          xxx",
   "xxx                                                                          xxx",
   "xxx                                                                          xxx",
   "xxx                                       o                                  xxx",
   "xxx            x!               xxxx!!!!xxx       !                          xxx",
   "xxx            x!o                 x!!!!x         x                          xxx",
   "xxx            x!xx                xxxxxx         x                          xxx",
   "xxx             v        xx        x              x                          xxx",
   "xxx                      !!        x              x                          xxx",
   "xxx                                x         !xxxxx                          xxx",
   "xxx                               ox                                         xxx",
   "xxxo                           xxxxx                               !!!!!!!!!!xxx",
   "xxxxx                              x                               xxxxxxxxxxxxx",
   "xxx                   xxxxx        x                                         xxx",
   "xxx           xxx                  x                                         xxx",
   "xxx    @      xxx                  xo                                       oxxx",
   "xxxxxxxxxxxxxxxxx                  xx   xx    xx     xx     xx    xxxxxxxxxxxxxx",
   "xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxx",
   "xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxx",
   "xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],

  ["                                                                                                                                  ",
   "                                                                                                                                  ",
   "                                                                                                                                  ",
   "                                                                !                                                                 ",
   "                                                              =xxx=                                                               ",
   "                                                            =xxxxxxx=                                                             ",
   "                                                        !xxxxx     xxxxx!                                                         ",
   "                                                       =x               x=                                                        ",
   "                                                   !xxxxx               xxxxx!                                                    ",
   "                                                  =x                         x=                                                   ",
   "                                              !xxxxx                         xxxxx!                                               ",
   "                                             =x                                   x=                                              ",
   "                                         !xxxxx              xxxxxxx             oxxxxx!                                          ",
   "                                        =x          o        xxxxxxxxxxxxxxxxxxx xxxxxxx=                                         ",
   "                                    !xxxxx          x       xxxxxxxx                   xxxxx!                                     ",
   "                                   =x                        xxxxxxx                        x=                                    ",
   "                               !xxxxx                        xxxxxxx                        xxxxx!                                ",
   "                              =x                           xxxxxxxxxo=                          =x=                               ",
   "                          !xxxxx                             xxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!                           ",
   "                         =x                                  xxxxxxx                                  x=                          ",
   "                     !xxxxx           o                   xxxxxxxxxx                                  xxxxx!                      ",
   "                    =x                xx                     xxxxxxx                                       x=                     ",
   "                !xxxxx                          xx     x     xxxxxxx=                     o               =xxxxx!                 ",
   "               =x    |                                       xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxx|    x=                ",
   "xxxxxxxxxxxxxxxxx            xxxx                            xxxxxxx                                            xxxxxxxxxxxxxxxxxx",
   "                                                             xxxxxxx                                                              ",
   "  @ o o o o o o                                              xxxxxxx                                                o o o o o o   ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!o                           xx       xxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxx!xxx!xxx!xxx!xxx!xxx!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],

    ["                                                                                                              ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                                                                                              ",
     "                                                                                       o                      ",
     "                                                                                       x                      ",
     "                                                                                                              ",
     "                                                                               x                              ",
     "                                                                                                              ",
     "                              v      v      v      v                   x                                      ",
     "                                                               o                                              ",
     "                                                               x                                              ",
     "                                                              !                                               ",
     "                                                             !                                                ",
     "                                                        @   !                                                 ",
     "                            xxx=   xxx=   xxx=   xxx=   xxx!                                                  ",
     "                                                                                                              ",
     "                      o                                                                                       ",
     "                      !                                                                                       ",
     "                      !                                                                                       ",
     "                      !x                                            o                                         ",
     "                                                                                                              ",
     "                           o                                        !!!!                                      ",
     "                           x=        =         =            =       !!!!       @                              ",
     "                           xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  !!!!  xxxxxx                              ",
     "                           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                              ",
     "                           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!      o                       ",
     "                           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!      xx                      ",
     "                           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                              ",
     "                           !                    vvvv            |                                             ",
     "                           !                                                                     !            ",
     "!!!!!!!!!!!!!!!!!!!!!!!!!!!!                                        |                         xxx!            ",
     "                                                                                                              ",
     "                                                                         |                                    ",
     "                                                                                       xxx                    ",
     "                                                                             |                                ",
     "                                 o                               o    o    o                                  ",
     "                               !!xxxxxxxxxxxxxxx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
     "                              !!!xxxxxxxxxxxxxxx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
     "                             !!!!xxxxxxxxxxxxxxx!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
     "xxxxxxxxxxxxxxx!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
     "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
     "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],

  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              ",
   "             o     o   o o o o   o     o        o                o    o o o o o    o         o    o           ",
   "              o   o    o     o   o     o         o              o         o        o o       o    o           ",
   "               o o     o     o   o     o          o     oo     o          o        o   o     o    o           ",
   "                o      o     o   o     o           o   o  o   o           o        o     o   o    o           ",
   "                o      o     o   o     o            o o    o o            o        o       o o                ",
   "  @             o      o o o o   o o o o             o      o         o o o o o    o         o    o           ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
