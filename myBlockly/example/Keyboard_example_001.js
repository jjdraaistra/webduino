var Keyboard_example_001 = '<xml xmlns="http://www.w3.org/1999/xhtml"><variables><variable type="" id="Zu*.7uke!JrXh!?i*7V/">step</variable><variable type="" id="3YG_U34iY)2f*J]snOH.">jumpstate</variable><variable type="" id="[|a0{]T2;{asjqh!ZaR{">jumpheight</variable><variable type="" id="O`s3yOeA+,lFQ~RZnS[1">upstate</variable><variable type="" id="RL`FddcgW:_8]Rs8)fn^">leftstate</variable><variable type="" id="]S]o=3l}(;L0Qbz()f;t">rightstate</variable><variable type="" id="X3bD{[WJYs9F8:?X9}_T">moveTimer</variable></variables><block type="setwindow" id="Zxw5oMD?|hgb1*,Tv10~" x="0" y="-43"><field name="overflow">hidden</field><value name="left"><block type="math_number" id="@Jv{Au/*UB,a*mU[9vE1"><field name="NUM">300</field></block></value><value name="top"><block type="math_number" id="pMtuVs/~/pkg*}$,#t|S"><field name="NUM">20</field></block></value><value name="width"><block type="math_number" id="EKr0B];8%oti{$#wE{:F"><field name="NUM">500</field></block></value><value name="height"><block type="math_number" id="!op{uh1htK43I)q}S`uk"><field name="NUM">500</field></block></value><next><block type="showtext" id="$x@_q#J1k?iVk1CE$!:{"><value name="size"><block type="math_number" id="r?:5i_wf$I-:VT^tH~^4"><field name="NUM">12</field></block></value><value name="color"><block type="colour_picker" id="[18I3x5l$Se/|/BQpA.9"><field name="COLOUR">#000000</field></block></value><value name="text"><block type="text" id="$.9na(X;!dzBgv2JboIh"><field name="TEXT">Left, Up(jump), Right</field></block></value><next><block type="table_create" id="~I4uAWvYqHSi=alRytko"><field name="borderstyle_">solid</field><value name="id_"><block type="text" id="VuR:MI2dGi5F;B|Bs6sk"><field name="TEXT"></field></block></value><value name="left_"><block type="math_number" id="Q;CVwY06Oyq}A=[|G9BL"><field name="NUM">0</field></block></value><value name="top_"><block type="math_number" id="nL5svd|%jorJlq6OG.wd"><field name="NUM">0</field></block></value><value name="borderwidth_"><block type="math_number" id="iomuk~6oI,PTAWEL7Aac"><field name="NUM">1</field></block></value><value name="bordercolor_"><block type="colour_picker" id="eG[b.;..eD*iLJx-aE`o"><field name="COLOUR">#33ff33</field></block></value><value name="trcount_"><block type="math_number" id="/#khh8=42]eQW9m`y;L:"><field name="NUM">1</field></block></value><value name="tdcount_"><block type="math_number" id="G#l;cy7oq^f4L6*y5@)z"><field name="NUM">1</field></block></value><value name="width_"><block type="math_number" id="LC3+49AF0*.s0GFC3Zgv"><field name="NUM">500</field></block></value><value name="height_"><block type="math_number" id="0Vpa7]+55Opj3VC3hT.B"><field name="NUM">500</field></block></value><value name="bgcolor_"><block type="logic_null" id="Y/i?#kqb|4A%2Gc)Q|J0"></block></value><value name="zindex_"><block type="math_number" id="I]4T)K^_R?z6uqd4.]]!"><field name="NUM">-1</field></block></value><value name="display_"><block type="logic_boolean" id="L,?8uw^%X;;FW|1OC@n|"><field name="BOOL">TRUE</field></block></value><next><block type="canvas_create" id="17P3=3Za@xC3J_Eo840f"><value name="id_"><block type="text" id="P(v0:0!qt7QWhB^6t7,W"><field name="TEXT"></field></block></value><value name="width_"><block type="math_number" id="9PuFtUf6s9C8DB4BCw7i"><field name="NUM">500</field></block></value><value name="height_"><block type="math_number" id="s+`e0LCoPp~`OSl[b#=N"><field name="NUM">500</field></block></value><value name="left_"><block type="math_number" id="J2]FGf1X_0K()4kPBvdC"><field name="NUM">0</field></block></value><value name="top_"><block type="math_number" id="g0*bAYHl#f}9Mb]SO+Oh"><field name="NUM">0</field></block></value><value name="zindex_"><block type="math_number" id="lRU:X|v8[d[@N%_LJx,d"><field name="NUM">-1</field></block></value><next><block type="canvas_rect" id="btNc)]T+idoS3`LJoE`t"><value name="id_"><block type="text" id="U?b8xlm4Ci;c69I3a8c;"><field name="TEXT"></field></block></value><value name="linewidth_"><block type="math_number" id="X5Ts,f4(?pSCNw);YUJ6"><field name="NUM">5</field></block></value><value name="x0_"><block type="math_number" id="e]Q#l~}z(=n^nQ5TqBFD"><field name="NUM">100</field></block></value><value name="y0_"><block type="math_number" id="]~YKa]GcpR4:`/q*jf1/"><field name="NUM">350</field></block></value><value name="width_"><block type="math_number" id="GR3:GLYHb~#|VC!knb(x"><field name="NUM">100</field></block></value><value name="height_"><block type="math_number" id="[-uB~Xy%#)9zF6V(WOz-"><field name="NUM">20</field></block></value><value name="fill_"><block type="logic_boolean" id="n10.iNA+H1C0FUZ)}Q#h"><field name="BOOL">TRUE</field></block></value><value name="color_"><block type="colour_picker" id="5c8hw+]Fp;pO;_%X_WAl"><field name="COLOUR">#ff0000</field></block></value><value name="rotate_"><block type="math_number" id="awJBj]nGp(d3B9GAop!;"><field name="NUM">0</field></block></value><value name="globalAlpha_"><block type="math_number" id="8G*Nf/?.A2HkH0W]pn8_"><field name="NUM">1</field></block></value><next><block type="canvas_rect" id="8vg*U,%7k!zZZwPi@q+c"><value name="id_"><block type="text" id="GoIZBHcF^1Pz,`?+(V^r"><field name="TEXT"></field></block></value><value name="linewidth_"><block type="math_number" id="H=~N9CVAx1ZCA^^J!N(p"><field name="NUM">5</field></block></value><value name="x0_"><block type="math_number" id="r|{ilr.=@5F2i1Lc*xnj"><field name="NUM">300</field></block></value><value name="y0_"><block type="math_number" id="*Kh2C!GX^p`YT.|JNUkU"><field name="NUM">200</field></block></value><value name="width_"><block type="math_number" id="ez!z#4~9rNsc}1,%z(x0"><field name="NUM">100</field></block></value><value name="height_"><block type="math_number" id="xh++6XEO`R+vyi^%GjFF"><field name="NUM">20</field></block></value><value name="fill_"><block type="logic_boolean" id="c@*+Q4=JXERwY[%N#EkS"><field name="BOOL">TRUE</field></block></value><value name="color_"><block type="colour_picker" id="*#1gu**XGZ[}OQm_~3WQ"><field name="COLOUR">#ff0000</field></block></value><value name="rotate_"><block type="math_number" id="mO[-68L-,@s3tT!-1v!g"><field name="NUM">0</field></block></value><value name="globalAlpha_"><block type="math_number" id="jY0aa+Q@o:]RvJT]yDv~"><field name="NUM">1</field></block></value><next><block type="canvas_rect" id="z#,]6H_IfllK/B(+Jh7s"><value name="id_"><block type="text" id="YI`AM}IUhXjA^Az|@d9="><field name="TEXT"></field></block></value><value name="linewidth_"><block type="math_number" id="8KVWd;#_1,E/;v=Ul*22"><field name="NUM">5</field></block></value><value name="x0_"><block type="math_number" id="@W^G6-*i;xxg%T+Bm8*H"><field name="NUM">0</field></block></value><value name="y0_"><block type="math_number" id="/U2jm[Hqm=`@v4sS;QY]"><field name="NUM">480</field></block></value><value name="width_"><block type="math_number" id="T|}v;,^4uUj`Jw=B]hw;"><field name="NUM">500</field></block></value><value name="height_"><block type="math_number" id="EjCH{I_r1w-7}N!(KUVW"><field name="NUM">20</field></block></value><value name="fill_"><block type="logic_boolean" id="HA~c(S#mnLXMSer-SP5R"><field name="BOOL">TRUE</field></block></value><value name="color_"><block type="colour_picker" id="]t(P@@44E}74sYHTt{Wo"><field name="COLOUR">#33ff33</field></block></value><value name="rotate_"><block type="math_number" id=")!2wGYP5)8x#+^4y@RG3"><field name="NUM">0</field></block></value><value name="globalAlpha_"><block type="math_number" id="gmI)R9Toe,X321;5%*8I"><field name="NUM">1</field></block></value><next><block type="image_create" id="sbm0}5?7$fxQkt7uz[~P"><value name="id_"><block type="text" id="x9%,wF8e9)1s7}dDcRj?"><field name="TEXT"></field></block></value><value name="url_"><block type="text" id="SQCA4kKD{dEp*pf:@Ym1"><field name="TEXT">https://upload.wikimedia.org/wikipedia/commons/f/f9/Scratch_Cat.png</field></block></value><value name="width_"><block type="math_number" id="3)PA%5:J,ge~?J;%BXn3"><field name="NUM">80</field></block></value><value name="height_"><block type="math_number" id="*=)PmH1vJ3z:0P.g[^%9"><field name="NUM">80</field></block></value><value name="left_"><block type="math_number" id="ZklGCZZ@~{TjpuaN33Ht"><field name="NUM">50</field></block></value><value name="top_"><block type="math_number" id="!.s!YlE:%q|@B6o?bc9l"><field name="NUM">410</field></block></value><value name="zindex_"><block type="math_number" id="9L,_5U+p%23Z=Sv(=wrsH~"><field name="NUM">0</field></block></value><value name="display_"><block type="logic_boolean" id="Wg1$ask-|T$,YTJ[Q|Yn"><field name="BOOL">TRUE</field></block></value><next><block type="variables_set" id="/t]fMK+K8)%(k3=L)?a2"><field name="VAR" id="[|a0{]T2;{asjqh!ZaR{" variabletype="">jumpheight</field><value name="VALUE"><block type="math_number" id="KViCLT|%Dx6Jbo4K2QK9"><field name="NUM">18</field></block></value><next><block type="variables_set" id="HaVdJI.;.8waW:(PzdU]"><field name="VAR" id="3YG_U34iY)2f*J]snOH." variabletype="">jumpstate</field><value name="VALUE"><block type="logic_boolean" id="9!I[Cx%23l],GD]e09|zP="><field name="BOOL">FALSE</field></block></value><next><block type="variables_set" id=".^JPAMi_QFu4CU[m35sU"><field name="VAR" id="O`s3yOeA+,lFQ~RZnS[1" variabletype="">upstate</field><value name="VALUE"><block type="logic_boolean" id="l?G0p{)3UT~-X*wa#tLs"><field name="BOOL">FALSE</field></block></value><next><block type="variables_set" id="]%23@gb$DnQ~=!)Q1]%23@T_"><field name="VAR" id="RL`FddcgW:_8]Rs8)fn^" variabletype="">leftstate</field><value name="VALUE"><block type="logic_boolean" id="ZSOH*He-i?2_yua)){s?"><field name="BOOL">FALSE</field></block></value><next><block type="variables_set" id="A]]|iBw3EX14+cl}`~)?"><field name="VAR" id="]S]o=3l}(;L0Qbz()f;t" variabletype="">rightstate</field><value name="VALUE"><block type="logic_boolean" id="Rh}oO=q+(89,HuRX]1K5"><field name="BOOL">FALSE</field></block></value><next><block type="keyboard_listener" id="~;EhV~g=Ulwq7wb#JgPf"><field name="event">keydown</field><statement name="statement"><block type="controls_if" id="pfX[4|F_Y||ob?e{O!Jb"><mutation elseif="2"></mutation><value name="IF0"><block type="keyboard_keycode" id="7-GMYlS4?_H(rdYse+?U"><field name="keycode">38</field></block></value><statement name="DO0"><block type="variables_set" id=";+wWSv}u|nvU]P,3qE!#"><field name="VAR" id="O`s3yOeA+,lFQ~RZnS[1" variabletype="">upstate</field><value name="VALUE"><block type="logic_boolean" id="mU,u;GJ7HY7u6V;`Vnz#"><field name="BOOL">TRUE</field></block></value></block></statement><value name="IF1"><block type="keyboard_keycode" id="sVi.[L^bAuv/2gZdK4Ye"><field name="keycode">37</field></block></value><statement name="DO1"><block type="variables_set" id="W+QWPt/E}gjld.DmiAeM"><field name="VAR" id="RL`FddcgW:_8]Rs8)fn^" variabletype="">leftstate</field><value name="VALUE"><block type="logic_boolean" id=")k6mD~{B8Q%d)jXnPW?B"><field name="BOOL">TRUE</field></block></value></block></statement><value name="IF2"><block type="keyboard_keycode" id="U*INO:FzIk-Q5juTYc*x"><field name="keycode">39</field></block></value><statement name="DO2"><block type="variables_set" id="b(Q4(c^.}?;W8!H=oyU="><field name="VAR" id="]S]o=3l}(;L0Qbz()f;t" variabletype="">rightstate</field><value name="VALUE"><block type="logic_boolean" id="ac2e,j7xk5~+4]0|yK9n"><field name="BOOL">TRUE</field></block></value></block></statement></block></statement><next><block type="keyboard_listener" id="(wrL3a0%J,S@.hZ%gETg"><field name="event">keyup</field><statement name="statement"><block type="controls_if" id="O+]Ym.TWty}TVC6KQyxN"><mutation elseif="2"></mutation><value name="IF0"><block type="keyboard_keycode" id="/AHy3xB.D9[mL{7MBI_~"><field name="keycode">38</field></block></value><statement name="DO0"><block type="variables_set" id="4yHb+Ynyv]D[#!UdJ0@a"><field name="VAR" id="O`s3yOeA+,lFQ~RZnS[1" variabletype="">upstate</field><value name="VALUE"><block type="logic_boolean" id="d*?dO|?=X4dWt.K=rS=("><field name="BOOL">FALSE</field></block></value></block></statement><value name="IF1"><block type="keyboard_keycode" id="h5qnQ@qhWAs/YD17OKH8"><field name="keycode">37</field></block></value><statement name="DO1"><block type="variables_set" id="[}f!U!ZQRKsSA?$W}jei"><field name="VAR" id="RL`FddcgW:_8]Rs8)fn^" variabletype="">leftstate</field><value name="VALUE"><block type="logic_boolean" id="QS`oMLWFf**`]Z|[`N[J"><field name="BOOL">FALSE</field></block></value></block></statement><value name="IF2"><block type="keyboard_keycode" id="^A3~eV54s#7ab%f/bg:K"><field name="keycode">39</field></block></value><statement name="DO2"><block type="variables_set" id="[BQVoEK(?$(eQJN]7~iS"><field name="VAR" id="]S]o=3l}(;L0Qbz()f;t" variabletype="">rightstate</field><value name="VALUE"><block type="logic_boolean" id="l%2Vp6r-cDSM5g%sj^JK"><field name="BOOL">FALSE</field></block></value></block></statement></block></statement><next><block type="document_timer" id="Ox}~=U.nKC.xPd5?pDgb"><field name="fuTimer_" id="X3bD{[WJYs9F8:?X9}_T" variabletype="">moveTimer</field><value name="intervals_"><block type="math_number" id="2$%23vU-:g@9W,T0[Lf|IM"><field name="NUM">50</field></block></value><statement name="do_"><block type="controls_if" id="BQ_@KEF1Eov52XW!PI4-"><value name="IF0"><block type="logic_compare" id="xN/0rjiB`4adIfC7tLxw"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="*0av*}P%+lg3s%23IzX=@e"><field name="VAR" id="O`s3yOeA+,lFQ~RZnS[1" variabletype="">upstate</field></block></value><value name="B"><block type="logic_boolean" id="dx,AC|~;XL1b/bZf9;:q"><field name="BOOL">TRUE</field></block></value></block></value><statement name="DO0"><block type="controls_if" id="!2GMSc$4x}tCQ`{DBl4D"><value name="IF0"><block type="logic_compare" id="P.5xVD?E%23R~T4DK6eff*"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="Eg9kbL(ouEGIO/+^Eu:6"><field name="VAR" id="3YG_U34iY)2f*J]snOH." variabletype="">jumpstate</field></block></value><value name="B"><block type="logic_boolean" id="zRR8nzBkl,zv`}^j%234c$"><field name="BOOL">FALSE</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="bjM`Z**k7%q+{j$!S-fO"><field name="VAR" id="3YG_U34iY)2f*J]snOH." variabletype="">jumpstate</field><value name="VALUE"><block type="logic_boolean" id="qe-`nIjr;nlTr4,_/$L?"><field name="BOOL">TRUE</field></block></value><next><block type="variables_set" id="tLVse8y1?d78AlETW~27"><field name="VAR" id="Zu*.7uke!JrXh!?i*7V/" variabletype="">step</field><value name="VALUE"><block type="math_number" id="8,_%23{MTqr1D,8XD3%||K"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext" id="m%23%iW,._!9/uTk/yz,qG"><value name="TIMES"><block type="variables_get" id="-#/Fw/*BK]SPaG2qF:2g"><field name="VAR" id="[|a0{]T2;{asjqh!ZaR{" variabletype="">jumpheight</field></block></value><statement name="DO"><block type="math_change" id="{9K8hX+pjr1%236`?LED)D"><field name="VAR" id="Zu*.7uke!JrXh!?i*7V/" variabletype="">step</field><value name="DELTA"><shadow type="math_number" id="K%23-wXN73Y1?M?yDLmTDV"><field name="NUM">1</field></shadow></value><next><block type="image_move" id=";B+edyMt(i8/qXo8rPbi"><field name="property_">up</field><value name="id_"><block type="text" id="[2VdZ(2pM.%23;Kes71!b6"><field name="TEXT"></field></block></value><value name="step_"><block type="math_arithmetic" id="pz^{kZxl2GBL4G36{Ao$"><field name="OP">MINUS</field><value name="A"><block type="variables_get" id="8TYFr%h^j0I`?{ymbQ/t"><field name="VAR" id="[|a0{]T2;{asjqh!ZaR{" variabletype="">jumpheight</field></block></value><value name="B"><block type="variables_get" id="D}l5hFs0v83WX-27rVDj"><field name="VAR" id="Zu*.7uke!JrXh!?i*7V/" variabletype="">step</field></block></value></block></value><next><block type="time_delay" id="v[gyX8=c:bZ}PH[ah99g"><value name="seconds"><block type="math_number" id="*_L^]2:++4_E#sRs4BBT"><field name="NUM">0.05</field></block></value></block></next></block></next></block></statement><next><block type="controls_whileUntil" id="%KN,4sUqRweJhlj0nJsK"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_boolean" id="rjbog-Zh%YmEB`s_!TPv"><field name="BOOL">TRUE</field></block></value><statement name="DO"><block type="math_change" id="Tfw!oy.g.]xG5V%]Btew"><field name="VAR" id="Zu*.7uke!JrXh!?i*7V/" variabletype="">step</field><value name="DELTA"><shadow type="math_number" id="3JGKG*97bEA)Y*Qk`Bpn"><field name="NUM">-1</field></shadow></value><next><block type="controls_if" id="liX}TC3[?*I*,C1Y8xwq"><mutation else="1"></mutation><value name="IF0"><block type="logic_operation" id="NSrAwLmakHzYpiQ.vCXL"><field name="OP">OR</field><value name="A"><block type="logic_compare" id="tb]~oG|L*5X+;Als)V~%"><field name="OP">EQ</field><value name="A"><block type="elements_collision_color" id="B4(8R^yQ]v[c)2;`dGM#"><field name="element1_">image</field><value name="id1_"><block type="text" id="``V.7WzZA/[6LvjjRc-o"><field name="TEXT"></field></block></value><value name="id2_"><block type="text" id="6gHnNRQ:{j(?O50gFcK!"><field name="TEXT"></field></block></value><value name="color_"><block type="colour_picker" id="hWC+7fCrt66+y?1)Utl0"><field name="COLOUR">#ff0000</field></block></value></block></value><value name="B"><block type="math_number" id="lAg4~qaMBEGw^|14/=B1"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="logic_compare" id="-NBhc/u.~]-:+S1?1b(%"><field name="OP">EQ</field><value name="A"><block type="elements_collision_color" id="LbELiN:6k/Ne641vTR)I"><field name="element1_">image</field><value name="id1_"><block type="text" id="0-a?o}V%lJB-omjeaY+N"><field name="TEXT"></field></block></value><value name="id2_"><block type="text" id="?TwoUdzPOFy:xR@jbG]t"><field name="TEXT"></field></block></value><value name="color_"><block type="colour_picker" id="mMfY@vnDR`dli[N}E@g+"><field name="COLOUR">#33ff33</field></block></value></block></value><value name="B"><block type="math_number" id="R.Nd*XnzGN#6rY0^em3`"><field name="NUM">1</field></block></value></block></value></block></value><statement name="DO0"><block type="loop_break" id="cL#_wPqM1st6Fszw5=4*"></block></statement><statement name="ELSE"><block type="image_move" id="Q7}qjIVl|A==B;!AzbT7"><field name="property_">down</field><value name="id_"><block type="text" id="#Ngf7%#2pic2^S2Rsi,3"><field name="TEXT"></field></block></value><value name="step_"><block type="math_arithmetic" id="[X2Y?H(.hfv5;E*}?W-8"><field name="OP">MINUS</field><value name="A"><block type="variables_get" id="?2H4`^NPl99azfoe|g/t"><field name="VAR" id="[|a0{]T2;{asjqh!ZaR{" variabletype="">jumpheight</field></block></value><value name="B"><block type="variables_get" id="m8d7d[]Rw:A0;q#:yzYk"><field name="VAR" id="Zu*.7uke!JrXh!?i*7V/" variabletype="">step</field></block></value></block></value></block></statement><next><block type="time_delay" id="v7r]3BH`7ElL|,?%GDG%"><value name="seconds"><block type="math_number" id="yy6VHd2~^V)wvJ{eD6oU"><field name="NUM">0.05</field></block></value></block></next></block></next></block></statement><next><block type="variables_set" id="MRU29WVet}rOXB@u,o#*"><field name="VAR" id="Zu*.7uke!JrXh!?i*7V/" variabletype="">step</field><value name="VALUE"><block type="math_number" id="W.;RP_VG;BneNHD%44`^"><field name="NUM">0</field></block></value><next><block type="variables_set" id="a^yO~dgTWUM[Cyl8jF/0"><field name="VAR" id="3YG_U34iY)2f*J]snOH." variabletype="">jumpstate</field><value name="VALUE"><block type="logic_boolean" id="t/dmko_;a,=JWra*30Qa"><field name="BOOL">FALSE</field></block></value></block></next></block></next></block></next></block></next></block></next></block></statement></block></statement><next><block type="controls_if" id="zy+{I8*!~R;/Wd:Umz:F"><value name="IF0"><block type="logic_compare" id="7of*G+MYSfXuBfnOJsx}"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="b~eZ2r4x@|2Cq(x}]{Q5"><field name="VAR" id="RL`FddcgW:_8]Rs8)fn^" variabletype="">leftstate</field></block></value><value name="B"><block type="logic_boolean" id=".{3Hw$-=iXwa11q{Cxrh"><field name="BOOL">TRUE</field></block></value></block></value><statement name="DO0"><block type="image_set" id="3J)sMIrN5:3jIN,=fhBI"><field name="property_">rotateY</field><value name="id_"><block type="text" id=":(xr!ww(@S]xk@tV)`bn"><field name="TEXT"></field></block></value><value name="value_"><block type="math_number" id="pmCl:WGoJ2ZY#G0`dI^e"><field name="NUM">180</field></block></value><next><block type="controls_if" id=",M[}i|,dS%XnzYptB^aQ"><value name="IF0"><block type="logic_compare" id="/w)D-CK^c/_/u|OA(_=="><field name="OP">GT</field><value name="A"><block type="image_get" id="ibzi~c(|@{RZfKUPOady"><field name="property_">left</field><value name="id_"><block type="text" id=".Mp#O2mawmi)UhQjJmzQ"><field name="TEXT"></field></block></value></block></value><value name="B"><block type="math_number" id="}9[y(60^c1n!skz|l~%*"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="image_move" id="iPcg02vdU3%RHpSaR`r{"><field name="property_">left</field><value name="id_"><block type="text" id="H{dbAQx;wauoFVLe-x(4"><field name="TEXT"></field></block></value><value name="step_"><block type="math_number" id="q],,!6ee45)y%%23F:ANsn"><field name="NUM">8</field></block></value></block></statement><next><block type="call_async_function" id="Hi~[T|V/.w/xpimK@c7."><value name="name_"><block type="text" id="3C$Uf74sIyY{8v!go4?D"><field name="TEXT">down</field></block></value></block></next></block></next></block></statement><next><block type="controls_if" id="Ii,C+kQprbF[EDbV2yf8"><value name="IF0"><block type="logic_compare" id="F*ax;w-YT$j0z$u_MQ}D"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="13.ipGcD|Ekd|J/+71bw"><field name="VAR" id="]S]o=3l}(;L0Qbz()f;t" variabletype="">rightstate</field></block></value><value name="B"><block type="logic_boolean" id="A.^[%23UCBvPbk{+yzyN|}"><field name="BOOL">TRUE</field></block></value></block></value><statement name="DO0"><block type="image_set" id="lYS?H!hr*9vlS?_(2@jb"><field name="property_">rotateY</field><value name="id_"><block type="text" id="xKIZ!AF%+z8v7o)3hkdG"><field name="TEXT"></field></block></value><value name="value_"><block type="math_number" id="fTYd^IXlmDQuAAx[RpM%"><field name="NUM">0</field></block></value><next><block type="controls_if" id="0Z=cy{Ry9Xp-r_G%8PpX"><value name="IF0"><block type="logic_compare" id=")UMlD=B5g?B2:sB-8.oQ"><field name="OP">LT</field><value name="A"><block type="image_get" id="fye}Qel50(;kxI=esehE"><field name="property_">left</field><value name="id_"><block type="text" id="l/Hl={bO=8s,8)ZN/x}M"><field name="TEXT"></field></block></value></block></value><value name="B"><block type="math_number" id="}s^I=rZpQs;Y/{I4_O7s"><field name="NUM">420</field></block></value></block></value><statement name="DO0"><block type="image_move" id="2R1@IW9T?u:_u7jZt_tQ"><field name="property_">right</field><value name="id_"><block type="text" id="^+}mr%23Ko^PBNLw{X(arM"><field name="TEXT"></field></block></value><value name="step_"><block type="math_number" id="9%23{{:?Q]IR4R}er=Ae:Q"><field name="NUM">8</field></block></value></block></statement><next><block type="call_async_function" id="qNj2)`/v@Ky`7Y#Z?`_O"><value name="name_"><block type="text" id="kl9bq@eU!NL$HvYGE{ku"><field name="TEXT">down</field></block></value></block></next></block></next></block></statement></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block><block type="async_function" id="|a[N=gKa_8vA(=#j_+%A" x="31" y="3349"><value name="name_"><block type="text" id="knY7Y6lnfjs[,[Bayx|i"><field name="TEXT">down</field></block></value><statement name="do_"><block type="controls_if" id="BudcA.(J|#e{u:Jr|Il6"><value name="IF0"><block type="logic_compare" id="S2jF~MD!Rxf51g%[WUE^"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="YhPd+:2_V?cLwVobu(ul"><field name="VAR" id="3YG_U34iY)2f*J]snOH." variabletype="">jumpstate</field></block></value><value name="B"><block type="logic_boolean" id="[6BpKAYzJ1nT/P2lW.Tf"><field name="BOOL">FALSE</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="#%CGE`_kZ:=vTk;]vvF{"><field name="VAR" id="Zu*.7uke!JrXh!?i*7V/" variabletype="">step</field><value name="VALUE"><block type="variables_get" id=":{sp@sj+]B;iIhs[cw7%"><field name="VAR" id="[|a0{]T2;{asjqh!ZaR{" variabletype="">jumpheight</field></block></value><next><block type="controls_whileUntil" id=".=s;F:}jUZ.7sx8qso[T"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_boolean" id="Rw7v2xH.0u?)7YZnTB|r"><field name="BOOL">TRUE</field></block></value><statement name="DO"><block type="math_change" id="mk+7a;9Gy[ms@k+sJ}#|"><field name="VAR" id="Zu*.7uke!JrXh!?i*7V/" variabletype="">step</field><value name="DELTA"><shadow type="math_number" id=".4[ed|@*vEV7P7Mzu;(~"><field name="NUM">-1</field></shadow></value><next><block type="controls_if" id="1R)^NRL9pC|Xuj[I}jah"><mutation else="1"></mutation><value name="IF0"><block type="logic_operation" id="nM*Wy`fJIquG.]3hsstD"><field name="OP">OR</field><value name="A"><block type="logic_compare" id="-@Om2KMACa%RBKY[Rj!g"><field name="OP">EQ</field><value name="A"><block type="elements_collision_color" id="ey/S9kjLH1]iQHPZ3hhP"><field name="element1_">image</field><value name="id1_"><block type="text" id="~[cHRnKW|ulCxg_sevtv"><field name="TEXT"></field></block></value><value name="id2_"><block type="text" id="}zJ~ie.Ln-;Ja:May)yR"><field name="TEXT"></field></block></value><value name="color_"><block type="colour_picker" id="/)i7K*ArntId^-IiP_QB"><field name="COLOUR">#ff0000</field></block></value></block></value><value name="B"><block type="math_number" id="u0.m8RebFxcs3`U)}|Or"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="logic_compare" id="mqR9#ocY41Z*eG3oS:xU"><field name="OP">EQ</field><value name="A"><block type="elements_collision_color" id="#MGkPrO{1zl7EFQ5/d:b"><field name="element1_">image</field><value name="id1_"><block type="text" id="dmhJn.z3/d_lbYXZt4FF"><field name="TEXT"></field></block></value><value name="id2_"><block type="text" id=".0I.%Q|UfX(I)7t=H%Tn"><field name="TEXT"></field></block></value><value name="color_"><block type="colour_picker" id="OQ_9{2[K9b}nNzvX_R(|"><field name="COLOUR">#33ff33</field></block></value></block></value><value name="B"><block type="math_number" id="+p}HC!pZ|W=hCH}2IXHv"><field name="NUM">1</field></block></value></block></value></block></value><statement name="DO0"><block type="loop_break" id="x#^E,@[dor^ZPJo.b;}_"></block></statement><statement name="ELSE"><block type="image_move" id="q]AE9U*(FW|HZuDEt4qT"><field name="property_">up</field><value name="id_"><block type="text" id="VT#Q`}NC+-%9L[rOEvR="><field name="TEXT"></field></block></value><value name="step_"><block type="math_arithmetic" id="}Sl/l_0-N[@JwU!XSTgG"><field name="OP">MINUS</field><value name="A"><block type="variables_get" id="XUQ+(%~tbn]v2[N0uHbA"><field name="VAR" id="Zu*.7uke!JrXh!?i*7V/" variabletype="">step</field></block></value><value name="B"><block type="variables_get" id="5}Y4d7OrpheHNIavURJD"><field name="VAR" id="[|a0{]T2;{asjqh!ZaR{" variabletype="">jumpheight</field></block></value></block></value></block></statement><next><block type="time_delay" id="fyK)9,BkSBGwfx1N|L]+"><value name="seconds"><block type="math_number" id="moGov!ah1J1y$E8#0]jP"><field name="NUM">0.05</field></block></value></block></next></block></next></block></statement></block></next></block></statement></block></statement></block></xml>';
